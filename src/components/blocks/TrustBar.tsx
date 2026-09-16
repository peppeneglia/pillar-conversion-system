import { Container } from "@/components/ui/Container";
import type { TrustBar as TrustBarContent } from "@/content/types";

export type TrustBarProps = {
  content: TrustBarContent;
  /** Off where the hero already shows the figures. */
  showStats?: boolean;
  id?: string;
};

export function TrustBar({ content, showStats = true, id = "trust-bar" }: TrustBarProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="scroll-mt-20 py-12 md:py-16">
      <Container className="flex flex-col gap-8 md:gap-10">
        <h2 id={titleId} className="h3 max-w-4xl font-bold text-balance md:text-center md:mx-auto">
          {content.title}
        </h2>

        {showStats && (
          <dl className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-1 rounded-2xl border border-border bg-card p-5 md:p-6"
              >
                <dt className="h4 font-medium text-foreground">{stat.label}</dt>
                {/* Text-safe gradient: both stops clear 3.2:1 on white. */}
                <dd className="h2 bg-(image:--gradient-brand-accessible) bg-clip-text font-bold text-transparent">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {content.clients.map((client) => (
            <li
              key={client}
              className="flex min-h-14 items-center justify-center rounded-xl border border-border bg-muted px-4 py-3 text-center label-medium font-semibold text-foreground"
            >
              {client}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
