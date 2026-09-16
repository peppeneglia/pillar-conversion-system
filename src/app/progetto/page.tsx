import type { Metadata } from "next";
import { SiteFooter } from "@/components/blocks/SiteFooter";
import { SiteHeader } from "@/components/blocks/SiteHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getPreferences, getSiteContent } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getSiteContent();
  return {
    title: content.project.meta.title,
    description: content.project.meta.description,
  };
}

export default async function ProjectPage() {
  const { locale, theme } = await getPreferences();
  const { content: site } = await getSiteContent();
  const project = site.project;

  return (
    <>
      <SiteHeader ui={site.ui} />
      <main className="flex flex-1 flex-col">
        <Section className="pt-6 pb-12 md:pt-12 md:pb-16" aria-labelledby="project-title">
          <Container className="flex flex-col gap-6">
            <p className="flex items-center gap-2 label-medium font-semibold uppercase text-muted-foreground">
              <span aria-hidden="true" className="size-2 rounded-full bg-(image:--gradient-brand)" />
              {project.eyebrow}
            </p>
            <h1 id="project-title" className="h1-huge font-bold text-pretty">
              {project.title}
            </h1>
            <p className="body-large max-w-[70ch] text-muted-foreground">{project.lede}</p>
            <div
              aria-hidden="true"
              className="h-1 w-full rounded-full bg-(image:--gradient-separator)"
            />
          </Container>
        </Section>

        <Section background="card" aria-labelledby="project-sections">
          <Container className="flex flex-col gap-6">
            <h2 id="project-sections" className="sr-only">
              {project.title}
            </h2>
            <ol className="grid gap-4 md:grid-cols-2 md:gap-6">
              {project.sections.map((section, index) => (
                <li
                  key={section.title}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 md:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="h4 w-fit bg-(image:--gradient-brand-accessible) bg-clip-text font-bold text-transparent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="h3 font-bold text-pretty">{section.title}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section aria-labelledby="project-stack">
          <Container className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col gap-4">
              <h2 id="project-stack" className="h2 font-bold text-pretty">
                {project.stack.title}
              </h2>
              <dl className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {project.stack.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="label-medium font-semibold uppercase text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="font-medium sm:text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="h2 font-bold text-pretty">{project.status.title}</h2>
              <ul className="flex flex-col gap-3">
                {project.status.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-2 shrink-0 rounded-full bg-(image:--gradient-brand)"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
