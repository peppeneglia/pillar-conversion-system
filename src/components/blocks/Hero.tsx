import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { StageContent } from "@/content/types";

export type HeroProps = {
  content: StageContent["hero"];
};

// Spacing is kept tight on mobile so eyebrow, headline, subheadline, CTAs and
// proof line all fit in the first screen of a 390x844 viewport.
export function Hero({ content }: HeroProps) {
  const {
    eyebrow,
    headline,
    headlineAccent,
    subheadline,
    primaryCta,
    secondaryCta,
    proofLine,
  } = content;

  return (
    <section aria-labelledby="hero-title" className="pt-6 pb-12 md:pt-20 md:pb-24">
      <Container className="flex flex-col items-start">
        <p className="label-small font-medium uppercase text-muted-foreground">{eyebrow}</p>
        <h1
          id="hero-title"
          className="h1-huge mt-2 max-w-4xl font-bold text-balance md:mt-4"
        >
          {headline}
          {headlineAccent && (
            <>
              {" "}
              <span className="bg-(image:--gradient-text-hero-accessible) bg-clip-text text-transparent">
                {headlineAccent}
              </span>
            </>
          )}
        </h1>
        <p className="body-large mt-3 max-w-2xl text-muted-foreground md:mt-6">
          {subheadline}
        </p>
        <div className="mt-5 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row">
          <Button
            href={primaryCta.target}
            data-track-cta="hero_primary"
            className="w-full md:w-auto"
          >
            {primaryCta.label}
          </Button>
          <Button
            href={secondaryCta.target}
            variant="secondary"
            data-track-cta="hero_secondary"
            className="w-full md:w-auto"
          >
            {secondaryCta.label}
          </Button>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:mt-5">{proofLine}</p>
      </Container>
    </section>
  );
}
