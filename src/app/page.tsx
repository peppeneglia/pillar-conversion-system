import type { Metadata } from "next";
import { SiteFooter } from "@/components/blocks/SiteFooter";
import { SiteHeader } from "@/components/blocks/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { documentContent, footer, stageContent } from "@/content";

const { meta, traffic, stages, problem, landings, measurement } = documentContent;

export const metadata: Metadata = {
  title: "Pillar Conversion System",
  description: meta.description,
};

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="h2 font-bold text-balance">
      {children}
    </h2>
  );
}

export default function DocumentPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Section className="pt-6 pb-12 md:pt-12 md:pb-16" aria-labelledby="document-title">
          <Container>
            <div className="flex max-w-4xl flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="label-small font-medium uppercase text-muted-foreground">
                  {documentContent.eyebrow}
                </p>
                <h1 id="document-title" className="h1-huge font-bold text-balance">
                  {documentContent.title}
                </h1>
                <p className="body-large max-w-[70ch] text-muted-foreground">{documentContent.lede}</p>
              </div>
              <div
                aria-hidden="true"
                className="h-1 w-full rounded-full bg-(image:--gradient-separator)"
              />
            </div>
          </Container>
        </Section>

        <Section background="card" aria-labelledby="traffico">
          <Container className="flex flex-col gap-8">
            <div className="flex max-w-4xl flex-col gap-4">
              <SectionTitle id="traffico">{traffic.title}</SectionTitle>
              <p className="body-large max-w-[70ch] text-muted-foreground">{traffic.body}</p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {traffic.stats.map((stat) => (
                <div
                  key={stat.channel}
                  className="flex flex-col gap-1 rounded-2xl border border-border bg-background p-6 md:p-8"
                >
                  <dt className="label-medium font-semibold uppercase text-muted-foreground">
                    {stat.channel}
                  </dt>
                  <dd className="flex flex-col gap-1">
                    <span className="h1 bg-(image:--gradient-brand-accessible) bg-clip-text font-bold text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-foreground">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="max-w-[70ch] text-muted-foreground">{traffic.note}</p>
          </Container>
        </Section>

        <Section aria-labelledby="stadi">
          <Container className="flex flex-col gap-8">
            <div className="flex max-w-4xl flex-col gap-4">
              <SectionTitle id="stadi">{stages.title}</SectionTitle>
              <p className="body-large max-w-[70ch] text-muted-foreground">{stages.criterion}</p>
            </div>
            <ol className="grid gap-4 md:grid-cols-3">
              {stages.items.map((item) => (
                <li
                  key={item.stage}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 md:p-8"
                >
                  <h3 className="h4 font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground">{item.reader}</p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section background="accent" aria-labelledby="oggi">
          <Container>
            <div className="flex max-w-4xl flex-col gap-4">
              <SectionTitle id="oggi">{problem.title}</SectionTitle>
              {problem.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-large text-light-gray">
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </Section>

        <Section background="card" aria-labelledby="landing">
          <Container className="flex flex-col gap-8">
            <div className="flex max-w-4xl flex-col gap-4">
              <SectionTitle id="landing">{landings.title}</SectionTitle>
              <p className="body-large max-w-[70ch] text-muted-foreground">{landings.body}</p>
            </div>
            <ul className="grid gap-4 md:grid-cols-3">
              {stages.items.map((item) => {
                const { hero } = stageContent[item.stage];
                return (
                  <li
                    key={item.stage}
                    className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 md:p-8"
                  >
                    <h3 className="h4 font-semibold">{item.name}</h3>
                    <div className="flex flex-1 flex-col gap-1">
                      <p className="label-small font-medium uppercase text-muted-foreground">
                        {landings.promiseLabel}
                      </p>
                      <p className="h4 font-medium text-balance">
                        {hero.headline}
                        {hero.headlineAccent && ` ${hero.headlineAccent}`}
                      </p>
                    </div>
                    <Button
                      href={`/lp/${item.stage}`}
                      variant="secondary"
                      aria-label={`${landings.linkLabel}: ${item.name}`}
                      className="w-full"
                    >
                      {landings.linkLabel}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>

        <Section aria-labelledby="misure">
          <Container className="flex flex-col gap-8">
            <div className="flex max-w-4xl flex-col gap-4">
              <SectionTitle id="misure">{measurement.title}</SectionTitle>
              <p className="body-large max-w-[70ch] text-muted-foreground">{measurement.body}</p>
            </div>
            <ul className="flex flex-col gap-4">
              {measurement.rows.map((row) => (
                <li
                  key={row.question}
                  className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-8 md:p-8"
                >
                  <h3 className="h4 font-semibold text-balance">{row.question}</h3>
                  <dl className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <dt className="label-small font-medium uppercase text-muted-foreground">
                        {measurement.metricLabel}
                      </dt>
                      <dd>{row.metric}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="label-small font-medium uppercase text-muted-foreground">
                        {measurement.eventsLabel}
                      </dt>
                      <dd>
                        <ul className="flex flex-wrap gap-2">
                          {row.events.map((event) => (
                            <li key={event}>
                              <code className="rounded-md bg-muted px-2 py-1 text-sm text-foreground">
                                {event}
                              </code>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
            <p className="max-w-[70ch] text-sm text-muted-foreground">{measurement.note}</p>
          </Container>
        </Section>
      </main>
      <SiteFooter content={footer} showDisclaimer />
    </>
  );
}
