import type { Metadata } from "next";
import { SiteFooter } from "@/components/blocks/SiteFooter";
import { SiteHeader } from "@/components/blocks/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getSiteContent } from "@/lib/server-preferences";
import { getPreferences } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getSiteContent();
  return {
    title: "Pillar Conversion System",
    description: content.document.meta.description,
  };
}

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="h2 font-bold text-pretty">
      {children}
    </h2>
  );
}

export default async function DocumentPage() {
  const { locale, theme } = await getPreferences();
  const { content: site } = await getSiteContent();
  const documentContent = site.document;
  const { traffic, stages, problem, landings, measurement } = documentContent;

  return (
    <>
      <SiteHeader
        ui={site.ui}
        fullWordmark
        nav={stages.items.map((item) => ({
          label: item.name,
          href: `/lp/${item.stage}`,
        }))}
      />
      <main className="flex flex-1 flex-col">
        <Section className="pt-6 pb-12 md:pt-12 md:pb-16" aria-labelledby="document-title">
          <Container className="flex flex-col gap-6">
            <p className="flex items-center gap-2 label-medium font-semibold uppercase text-muted-foreground">
              <span aria-hidden="true" className="size-2 rounded-full bg-(image:--gradient-brand)" />
              {documentContent.eyebrow}
            </p>
            <h1 id="document-title" className="h1-huge font-bold text-pretty">
              {documentContent.title}
            </h1>
            <div className="flex flex-col gap-2">
              {documentContent.lede.map((line) => (
                <p key={line} className="body-large text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="h-1 w-full rounded-full bg-(image:--gradient-separator)"
            />
          </Container>
        </Section>

        <Section background="card" aria-labelledby="traffico">
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SectionTitle id="traffico">{traffic.title}</SectionTitle>
              <p className="body-large text-muted-foreground">{traffic.body}</p>
            </div>

            <dl className="grid gap-4 md:grid-cols-2 md:gap-6">
              {traffic.stats.map((stat) => (
                <div
                  key={stat.channel}
                  className="flex items-center justify-between gap-6 rounded-2xl border border-border bg-background p-6 md:p-8"
                >
                  <dt className="h2 font-bold">{stat.channel}</dt>
                  <dd className="flex flex-col items-end gap-1 text-right">
                    <span className="h1-huge bg-(image:--gradient-brand-accessible) bg-clip-text font-bold text-transparent">
                      {stat.value}
                    </span>
                    <span className="h4 font-medium text-muted-foreground">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-2">
              {traffic.note.map((line) => (
                <p key={line} className="text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="stadi">
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SectionTitle id="stadi">{stages.title}</SectionTitle>
              <p className="body-large max-w-[70ch] text-muted-foreground">{stages.criterion}</p>
            </div>
            <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
              {stages.items.map((item, index) => (
                <li
                  key={item.stage}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="h3 w-fit bg-(image:--gradient-brand-accessible) bg-clip-text font-bold text-transparent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="h3 font-bold">{item.name}</h3>
                  <p className="text-muted-foreground">{item.reader}</p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section background="accent" aria-labelledby="oggi">
          <Container className="flex flex-col gap-4">
            <SectionTitle id="oggi">{problem.title}</SectionTitle>
            {problem.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-large text-on-dark-muted">
                {paragraph}
              </p>
            ))}
          </Container>
        </Section>

        <Section background="card" aria-labelledby="landing">
          <Container className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-4">
              <SectionTitle id="landing">{landings.title}</SectionTitle>
              <p className="body-large max-w-[70ch] text-muted-foreground">{landings.body}</p>
            </div>

            <ul className="grid gap-5 md:grid-cols-3 md:gap-6">
              {stages.items.map((item) => {
                const { hero } = site.stages[item.stage];
                return (
                  <li key={item.stage} className="flex">
                    <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                      <div className="flex items-center justify-between gap-4 bg-(image:--gradient-brand) px-6 py-4">
                        <h3 className="h4 font-bold text-carbon-steel">{item.name}</h3>
                        <span className="label-small font-semibold uppercase text-carbon-steel">
                          /lp/{item.stage}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                        <div className="flex flex-1 flex-col gap-2">
                          <p className="label-small font-semibold uppercase text-muted-foreground">
                            {landings.promiseLabel}
                          </p>
                          <p className="h3 font-bold text-pretty">
                            <span className="block">{hero.headline}</span>
                            {hero.headlineAccent && (
                              <span className="block bg-(image:--gradient-brand-accessible) bg-clip-text text-transparent">
                                {hero.headlineAccent}
                              </span>
                            )}
                          </p>
                          <p className="text-muted-foreground">{hero.subheadline.join(" ")}</p>
                        </div>

                        <Button
                          href={`/lp/${item.stage}`}
                          aria-label={`${landings.linkLabel}: ${item.name}`}
                          className="w-full"
                        >
                          {landings.linkLabel}
                        </Button>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>

        <Section aria-labelledby="misure">
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SectionTitle id="misure">{measurement.title}</SectionTitle>
              <p className="body-large max-w-[70ch] text-muted-foreground">{measurement.body}</p>
            </div>

            <ul className="flex flex-col gap-4">
              {measurement.rows.map((row) => (
                <li
                  key={row.question}
                  className="grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10 md:p-8"
                >
                  <div className="flex flex-col gap-4">
                    <h3 className="h4 font-bold text-pretty">{row.question}</h3>
                    <div className="flex flex-col gap-2">
                      <p className="label-small font-semibold uppercase text-muted-foreground">
                        {measurement.eventsLabel}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {row.events.map((event) => (
                          <li key={event}>
                            <code className="rounded-full border border-tropical-indigo/30 bg-tropical-indigo/10 px-3 py-1 text-sm font-medium text-foreground">
                              {event}
                            </code>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <dl className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1 border-l-2 border-tropical-indigo pl-4">
                      <dt className="label-small font-semibold uppercase text-muted-foreground">
                        {measurement.metricLabel}
                      </dt>
                      <dd className="font-medium">{row.metric}</dd>
                    </div>
                    <div className="flex flex-col gap-1 border-l-2 border-border pl-4">
                      <dt className="label-small font-semibold uppercase text-muted-foreground">
                        {measurement.readingLabel}
                      </dt>
                      <dd className="text-muted-foreground">{row.reading}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      </main>
      <SiteFooter
        content={site.footer}
        ui={site.ui}
        locale={locale}
        theme={theme}
        showDisclaimer
        showLinks
      />
    </>
  );
}
