import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { StageContent } from "@/content/types";

export type AudienceProps = {
  content: StageContent["audience"];
  id?: string;
};

export function Audience({ content, id = "per-chi" }: AudienceProps) {
  const titleId = `${id}-title`;

  return (
    <Section id={id} background="card" aria-labelledby={titleId}>
      <Container className="grid gap-8 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-4">
          <h2 id={titleId} className="h2 font-bold text-balance">
            {content.title}
          </h2>
          <p className="body-large text-muted-foreground">{content.body}</p>
        </div>

        <ul className="flex flex-col gap-3">
          {content.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="mt-0.5 size-5 shrink-0 text-tropical-indigo"
              >
                <path
                  d="M5 10.5l3 3 7-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
