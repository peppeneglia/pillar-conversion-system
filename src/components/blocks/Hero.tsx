import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { StageContent, TrustStat } from "@/content/types";

export type HeroProps = {
  content: StageContent["hero"];
  /** Figures shown beside the copy; they fill the right half on desktop. */
  stats?: TrustStat[];
};

// Spacing is kept tight on mobile so eyebrow, headline, subheadline, CTAs and
// proof line all fit in the first screen of a 390x844 viewport.
export function Hero({ content, stats = [] }: HeroProps) {
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
    <section aria-labelledby="hero-title" className="pt-6 pb-12 md:pt-16 md:pb-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-16">
        <div className="flex flex-col items-start">
          <p className="flex items-center gap-2 label-medium font-semibold uppercase text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-(image:--gradient-brand)" />
            {eyebrow}
          </p>
          <h1 id="hero-title" className="h1-huge mt-3 font-bold text-balance md:mt-4">
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
          <p className="body-large mt-4 max-w-[62ch] text-muted-foreground md:mt-6">
            {subheadline}
          </p>
          <div className="mt-5 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row">
            <Button href={primaryCta.target} data-track-cta="hero_primary" className="w-full md:w-auto">
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
          <p className="mt-4 max-w-[62ch] text-sm font-medium text-muted-foreground md:mt-6">
            {proofLine}
          </p>
        </div>

        {stats.length > 0 && (
          // Contrast on the dark surface: pink 7.2:1, purple 4.7:1 for these large figures.
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-(image:--gradient-surface-dark) p-1 shadow-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1 p-5 md:p-6">
                <dt className="text-sm text-light-gray">{stat.label}</dt>
                <dd className="h3 bg-(image:--gradient-brand) bg-clip-text font-bold text-transparent">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  );
}
