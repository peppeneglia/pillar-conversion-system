import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Testimonial } from "@/content/types";
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
        <h2 id={titleId} className="h2 max-w-3xl font-bold text-balance">
          {title}
        </h2>

        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <figure className="flex h-full flex-col justify-between gap-6 rounded-lg border border-border bg-card p-6 md:p-8">
                <blockquote>
                  <p className="body-large text-foreground">{testimonial.quote}</p>
                </blockquote>

                <figcaption className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                  {/* Names are read below; avatars are decorative. */}
                  <div aria-hidden="true" className="flex shrink-0 gap-2">
                    {testimonial.people.map((person) => (
                      <span
                        key={person.name}
                        className="flex size-11 items-center justify-center rounded-full bg-carbon-steel label-medium font-semibold text-primary-foreground"
                      >
                        {getInitials(person.name)}
                      </span>
                    ))}
                  </div>

                  <div className="flex min-w-0 flex-col">
                    {testimonial.people.map((person) => (
                      <p key={person.name} className="text-sm">
                        <span className="font-semibold text-foreground">{person.name}</span>
                        <span className="text-muted-foreground">, {person.role}</span>
                      </p>
                    ))}
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
