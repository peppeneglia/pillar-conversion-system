import { Container } from "@/components/ui/Container";
import type { TrustBar as TrustBarContent } from "@/content/types";
import { cn } from "@/lib/cn";

export type TrustBarProps = {
  content: TrustBarContent;
  /** Off where the hero already shows the figures. */
  showStats?: boolean;
  id?: string;
};

export function TrustBar({ content, showStats = true, id = "trust-bar" }: TrustBarProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="scroll-mt-24 py-10 md:py-14">
      <Container>
        <div
          className={cn(
            "flex flex-col gap-6 rounded-2xl border border-border bg-card px-6 py-8 md:px-10",
            !showStats && "md:flex-row md:items-center md:gap-10",
          )}
        >
          <h2
            id={titleId}
            className="h4 max-w-xs shrink-0 font-semibold text-pretty text-muted-foreground"
          >
            {content.title}
          </h2>

          {showStats && (
            <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {content.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                  {/* Text-safe gradient: both stops clear 3.2:1 on white. */}
                  <dd className="h2 w-fit bg-(image:--gradient-brand-accessible) bg-clip-text font-bold text-transparent">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <ul
            className={cn(
              "flex flex-wrap items-center gap-x-8 gap-y-4",
              showStats ? "border-t border-border pt-6" : "flex-1 md:justify-end",
            )}
          >
            {content.clients.map((client) => (
              <li key={client} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full bg-(image:--gradient-brand)"
                />
                <span className="h4 font-semibold text-foreground">{client}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
