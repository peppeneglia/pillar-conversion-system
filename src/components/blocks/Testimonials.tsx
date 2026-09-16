import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Testimonial } from "@/content/types";
import { cn } from "@/lib/cn";
import { getInitials } from "@/lib/initials";

export type TestimonialsProps = {
  testimonials: Testimonial[];
  title: string;
  id?: string;
};

export function Testimonials({ testimonials, title, id = "testimonianze" }: TestimonialsProps) {
  const titleId = `${id}-title`;

  return (
    <Section id={id} background="muted" aria-labelledby={titleId}>
      <Container className="flex flex-col gap-8 md:gap-12">
        <h2 id={titleId} className="h2 font-bold text-pretty">
          {title}
        </h2>

        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {testimonials.map((testimonial, index) => {
            // The first quote sits on the dark brand surface.
            const featured = index === 0;
            const fullWidth = featured && testimonials.length >= 3;
            return (
              <li key={testimonial.id} className={cn("flex", fullWidth && "md:col-span-2")}>
                <figure
                  className={cn(
                    "flex w-full flex-col justify-between gap-6 rounded-2xl p-6 md:p-8",
                    featured
                      ? "bg-(image:--gradient-surface-dark) text-on-dark shadow-lg"
                      : "border border-border bg-card",
                  )}
                >
                  <blockquote>
                    <p
                      className={cn(
                        "text-pretty",
                        fullWidth ? "h2 font-medium" : featured ? "h3 font-medium" : "body-large",
                      )}
                    >
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </blockquote>

                  <figcaption className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                    {/* Names are read below; avatars are decorative. */}
                    <div aria-hidden="true" className="flex shrink-0 gap-2">
                      {testimonial.people.map((person) => (
                        <span
                          key={person.name}
                          className={cn(
                            "flex size-11 items-center justify-center rounded-full label-medium font-semibold",
                            featured
                              ? "bg-on-dark text-carbon-steel"
                              : "bg-(image:--gradient-surface-dark) text-on-dark",
                          )}
                        >
                          {getInitials(person.name)}
                        </span>
                      ))}
                    </div>

                    {/* One line per person: name, role and company never split. */}
                    <div className="flex min-w-0 flex-col">
                      {testimonial.people.map((person) => (
                        <p key={person.name} className="text-sm sm:whitespace-nowrap">
                          <span className="font-semibold">{person.name}</span>
                          <span className={featured ? "text-on-dark-muted" : "text-muted-foreground"}>
                            , {person.role} · {testimonial.company}
                          </span>
                        </p>
                      ))}
                    </div>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
