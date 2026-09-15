import { Container } from "@/components/ui/Container";
import type { TrustBar as TrustBarContent } from "@/content/types";

export type TrustBarProps = {
  content: TrustBarContent;
  id?: string;
};

export function TrustBar({ content, id = "trust-bar" }: TrustBarProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="border-y border-border bg-card py-8 md:py-12"
    >
      <Container className="flex flex-col gap-6 md:gap-8">
        <h2 id={titleId} className="label-medium font-medium uppercase text-muted-foreground">
          {content.title}
        </h2>

        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {content.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="h3 font-bold">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {content.clients.map((client) => (
            <li
              key={client}
              className="flex min-h-14 items-center justify-center rounded-md border border-border bg-muted px-4 py-3 text-center label-medium font-semibold text-foreground"
            >
              {client}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
