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
        <h2 id={titleId} className="h2 font-bold text-balance">
          {title}
        </h2>

        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {testimonials.map((testimonial, index) => {
            // The first quote sits on the dark brand surface.
            const featured = index === 0;
            return (
              <li key={testimonial.id} className="flex">
                <figure
                  className={cn(
                    "flex w-full flex-col justify-between gap-6 rounded-2xl p-6 md:p-8",
                    featured
                      ? "bg-(image:--gradient-surface-dark) text-primary-foreground shadow-lg"
                      : "border border-border bg-card",
                  )}
                >
                  <blockquote>
                    <p className={cn("text-balance", featured ? "h4 font-medium" : "body-large")}>
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
                              ? "bg-primary-foreground text-carbon-steel"
                              : "bg-(image:--gradient-surface-dark) text-primary-foreground",
                          )}
                        >
                          {getInitials(person.name)}
                        </span>
                      ))}
                    </div>

                    <div className="flex min-w-0 flex-col">
                      {testimonial.people.map((person) => (
                        <p key={person.name} className="text-sm">
                          <span className="font-semibold">{person.name}</span>
                          <span className={featured ? "text-light-gray" : "text-muted-foreground"}>
                            , {person.role}
                          </span>
                        </p>
                      ))}
                      <p
                        className={cn(
                          "text-sm font-medium",
                          featured ? "text-light-gray" : "text-muted-foreground",
                        )}
                      >
                        {testimonial.company}
                      </p>
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
