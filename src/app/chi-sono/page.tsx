import type { Metadata } from "next";
import { SiteFooter } from "@/components/blocks/SiteFooter";
import { SiteHeader } from "@/components/blocks/SiteHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about";
import type { AboutEntry } from "@/content/types";
import { getPreferences, getSiteContent } from "@/lib/server-preferences";

// noindex, nofollow is inherited from the root layout metadata.
export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

function EntryList({ entries }: { entries: AboutEntry[] }) {
  return (
    <ol className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
      {entries.map((entry) => (
        <li key={`${entry.title} ${entry.organisation}`} className="flex flex-col gap-2 p-5 md:p-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="h4 font-bold text-pretty">{entry.title}</h3>
            <p className="label-medium shrink-0 font-semibold uppercase text-muted-foreground">
              {entry.period}
            </p>
          </div>
          <p className="font-medium">{entry.organisation}</p>
          <p className="text-muted-foreground">{entry.description}</p>
        </li>
      ))}
    </ol>
  );
}

// The page stays in Italian whatever the chosen language: it is a personal statement.
export default async function AboutPage() {
  const { locale, theme } = await getPreferences();
  const { content: site } = await getSiteContent();
  const about = aboutContent;

  return (
    <>
      <SiteHeader ui={site.ui} />
      <main lang="it" className="flex flex-1 flex-col">
        <Section className="pt-6 pb-12 md:pt-12 md:pb-16" aria-labelledby="about-title">
          <Container className="flex flex-col gap-6">
            <p className="flex items-center gap-2 label-medium font-semibold uppercase text-muted-foreground">
              <span aria-hidden="true" className="size-2 rounded-full bg-(image:--gradient-brand)" />
              {about.eyebrow}
            </p>
            <h1 id="about-title" className="h1-huge font-bold text-pretty">
              {about.title}
            </h1>
            <div className="flex max-w-[70ch] flex-col gap-4">
              {about.intro.map((paragraph) => (
                <p key={paragraph} className="body-large text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="h-1 w-full rounded-full bg-(image:--gradient-separator)"
            />
          </Container>
        </Section>

        <Section background="card" aria-labelledby="about-experience">
          <Container className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col gap-4">
              <h2 id="about-experience" className="h2 font-bold text-pretty">
                {about.experience.title}
              </h2>
              <EntryList entries={about.experience.entries} />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="h2 font-bold text-pretty">{about.education.title}</h2>
              <EntryList entries={about.education.entries} />
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter
        content={site.footer}
        ui={site.ui}
        locale={locale}
        theme={theme}
        showLinks
      />
    </>
  );
}
