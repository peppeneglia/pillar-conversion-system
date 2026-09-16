import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { FaqItem } from "@/content/types";

export type FaqProps = {
  items: FaqItem[];
  title: string;
  id?: string;
};

function toFaqPageJsonLd(items: FaqItem[]): string {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  // Escape "<" so content can never close the script tag.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function Faq({ items, title, id = "faq" }: FaqProps) {
  const titleId = `${id}-title`;

  return (
    <Section id={id} aria-labelledby={titleId}>
      {/* React renders string children of <script> verbatim, so no dangerouslySetInnerHTML is needed. */}
      <script type="application/ld+json">{toFaqPageJsonLd(items)}</script>

      <Container className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
        <h2 id={titleId} className="h2 font-bold text-balance">
          {title}
        </h2>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-xl border border-border bg-card open:border-tropical-indigo/40 open:shadow-sm"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 font-medium transition-colors duration-150 -outline-offset-2 hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary active:bg-border motion-reduce:transition-none md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-balance">{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-foreground transition-transform duration-150 group-open:rotate-180 motion-reduce:transition-none"
                >
                  <svg viewBox="0 0 20 20" className="size-4">
                    <path
                      d="M5 7.5l5 5 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-border px-5 py-4 md:px-6 md:py-5">
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
