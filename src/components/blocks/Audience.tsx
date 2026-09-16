import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { AudienceContent } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * `muted` is excluded: muted-foreground body text fails AA on it.
 * `accent` is carbon-steel with light text, to set a section apart from its neighbours.
 */
export type AudienceBackground = "card" | "background" | "accent";

export type AudienceProps = {
  content: AudienceContent;
  background?: AudienceBackground;
  id?: string;
};

// Contrast on carbon-steel (#1f2227): light-gray body 12.57:1, bullet text 12.87:1 on
// its card, indigo check icon 3.93:1, medium-gray/60 border 3.31:1.
const surfaceClasses: Record<AudienceBackground, { body: string; bullet: string }> = {
  card: { body: "text-muted-foreground", bullet: "border-border bg-background" },
  background: { body: "text-muted-foreground", bullet: "border-border bg-card" },
  accent: { body: "text-light-gray", bullet: "border-medium-gray/60 bg-primary-foreground/6" },
};

// Used for both the audience and the team sections of a stage.
export function Audience({ content, background = "card", id = "per-chi" }: AudienceProps) {
  const titleId = `${id}-title`;
  const bullets = content.bullets ?? [];
  const hasBullets = bullets.length > 0;
  const surface = surfaceClasses[background];

  return (
    <Section id={id} background={background} aria-labelledby={titleId}>
      <Container className={cn("grid gap-8", hasBullets && "md:grid-cols-2 md:gap-16")}>
        <div className={cn("flex flex-col gap-4", !hasBullets && "max-w-[70ch]")}>
          <h2 id={titleId} className="h2 font-bold text-balance">
            {content.title}
          </h2>
          <p className={cn("body-large", surface.body)}>{content.body}</p>
        </div>

        {hasBullets && (
          <ul className="flex flex-col gap-3">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className={cn("flex items-start gap-3 rounded-lg border p-4", surface.bullet)}
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
        )}
      </Container>
    </Section>
  );
}
