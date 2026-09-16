import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingAnalytics } from "@/components/analytics/LandingAnalytics";
import { Audience } from "@/components/blocks/Audience";
import { BeforeAfter } from "@/components/blocks/BeforeAfter";
import { Faq } from "@/components/blocks/Faq";
import { Hero } from "@/components/blocks/Hero";
import { LeadForm } from "@/components/blocks/LeadForm";
import { Testimonials } from "@/components/blocks/Testimonials";
import { TrustBar } from "@/components/blocks/TrustBar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getContent, getTestimonialsForStage, isStage, stages } from "@/content";
import { getFormVariant } from "@/lib/form-variant";
import { getSiteContent } from "@/lib/server-preferences";

// Reading searchParams makes the route render per request: the variant is decided on the
// server, so the first HTML already carries the right form. Only the three stages exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return stages.map((stage) => ({ stage }));
}

export async function generateMetadata({ params }: PageProps<"/lp/[stage]">): Promise<Metadata> {
  const [{ stage }, { content }] = await Promise.all([params, getSiteContent()]);
  if (!isStage(stage)) return {};

  const { meta } = content.stages[stage];
  return { title: meta.title, description: meta.description };
}

export default async function StagePage({ params, searchParams }: PageProps<"/lp/[stage]">) {
  const [{ stage }, query, { locale }] = await Promise.all([
    params,
    searchParams,
    getSiteContent(),
  ]);
  if (!isStage(stage)) notFound();

  const site = getContent(locale);
  const content = site.stages[stage];
  const variant = getFormVariant(typeof query.form === "string" ? query.form : null);

  return (
    <main className="flex flex-1 flex-col">
      <LandingAnalytics stage={stage} variant={variant} />
      <Hero content={content.hero} stats={site.trustBar.stats} />
      <TrustBar content={site.trustBar} showStats={false} />
      <BeforeAfter id="prima-dopo" content={content.beforeAfter} labels={site.beforeAfterLabels} />
      <Audience content={content.audience} />
      {content.team && <Audience id="team" content={content.team} background="accent" />}
      <Testimonials
        testimonials={getTestimonialsForStage(site, stage)}
        title={site.sectionTitles.testimonials}
      />
      <Faq id="faq" items={content.faq} title={site.sectionTitles.faq} />
      <Section background="muted">
        <Container>
          <div className="mx-auto max-w-3xl">
            <LeadForm
              id="form"
              position="mid"
              stage={stage}
              variant={variant}
              content={content.form}
              copy={site.leadForm}
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
