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
              className="group rounded-xl border border-border bg-card"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-4 font-medium transition-colors duration-150 outline-offset-2 hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary active:bg-border motion-reduce:transition-none md:px-6 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-5 shrink-0 transition-transform duration-150 group-open:rotate-180 motion-reduce:transition-none"
                >
                  <path
                    d="M5 7.5l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="px-4 pb-4 text-muted-foreground md:px-6 md:pb-6">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
