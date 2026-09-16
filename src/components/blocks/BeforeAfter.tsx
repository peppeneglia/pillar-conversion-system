import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { BeforeAfterLabels, StageContent } from "@/content/types";

export type BeforeAfterProps = {
  content: StageContent["beforeAfter"];
  labels: BeforeAfterLabels;
  id?: string;
};

// Each row keeps its "before" and "after" adjacent in the DOM: stacked pairs on
// mobile, two columns from md. Column headers are visual only; each cell carries
// its own label for assistive technology.
export function BeforeAfter({ content, labels, id = "prima-dopo" }: BeforeAfterProps) {
  const titleId = `${id}-title`;

  return (
    <Section id={id} aria-labelledby={titleId}>
      <Container className="flex flex-col gap-8 md:gap-12">
        <h2 id={titleId} className="h2 max-w-4xl font-bold text-balance">
          {content.title}
        </h2>

        <div>
          <div
            aria-hidden="true"
            className="hidden pb-3 md:grid md:grid-cols-2 md:gap-6"
          >
            <span className="label-medium font-medium uppercase text-muted-foreground">
              {labels.before}
            </span>
            <span className="label-medium bg-(image:--gradient-brand-accessible) bg-clip-text font-semibold uppercase text-transparent">
              {labels.after}
            </span>
          </div>

          <ul className="flex flex-col gap-3 md:gap-4">
            {content.rows.map((row, index) => (
              <li
                key={`${index}-${row.before}`}
                className="grid gap-3 md:grid-cols-2 md:gap-6"
              >
                <div className="flex flex-col gap-1 rounded-xl border border-border bg-card p-5">
                  <span className="label-small font-medium uppercase text-muted-foreground md:sr-only">
                    {labels.before}
                  </span>
                  <p className="text-muted-foreground">{row.before}</p>
                </div>
                <div className="flex flex-col gap-1 rounded-xl border border-tropical-indigo/30 bg-(image:--gradient-brand)/8 p-5">
                  <span className="flex items-center gap-2 label-small font-semibold uppercase text-foreground md:sr-only">
                    <span
                      aria-hidden="true"
                      className="size-2 rounded-full bg-tropical-indigo"
                    />
                    {labels.after}
                  </span>
                  <p className="body-large font-medium text-foreground">{row.after}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
