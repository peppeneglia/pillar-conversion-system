import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { LandingAnalytics } from "@/components/analytics/LandingAnalytics";
import { Audience } from "@/components/blocks/Audience";
import { BeforeAfter } from "@/components/blocks/BeforeAfter";
import { Faq } from "@/components/blocks/Faq";
import { Hero } from "@/components/blocks/Hero";
import { LeadForm } from "@/components/blocks/LeadForm";
import { StageLeadForm } from "@/components/blocks/StageLeadForm";
import { Testimonials } from "@/components/blocks/Testimonials";
import { TrustBar } from "@/components/blocks/TrustBar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  beforeAfterLabels,
  getTestimonialsForStage,
  isStage,
  leadFormCopy,
  sectionTitles,
  stageContent,
  stages,
  trustBar,
} from "@/content";

// Only the three stages are prerendered; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return stages.map((stage) => ({ stage }));
}

export async function generateMetadata({ params }: PageProps<"/lp/[stage]">): Promise<Metadata> {
  const { stage } = await params;
  if (!isStage(stage)) return {};

  const { meta } = stageContent[stage];
  return { title: meta.title, description: meta.description };
}

export default async function StagePage({ params }: PageProps<"/lp/[stage]">) {
  const { stage } = await params;
  if (!isStage(stage)) notFound();

  const content = stageContent[stage];
  const formProps = {
    id: "form",
    position: "mid",
    stage,
    content: content.form,
    copy: leadFormCopy,
  } as const;

  return (
    <main className="flex flex-1 flex-col">
      <LandingAnalytics stage={stage} />
      <Hero content={content.hero} />
      <TrustBar content={trustBar} />
      <BeforeAfter id="prima-dopo" content={content.beforeAfter} labels={beforeAfterLabels} />
      <Audience content={content.audience} />
      {content.team && <Audience id="team" content={content.team} background="accent" />}
      <Testimonials
        testimonials={getTestimonialsForStage(stage)}
        title={sectionTitles.testimonials}
      />
      <Faq id="faq" items={content.faq} title={sectionTitles.faq} />
      <Section background="muted">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* The variant comes from ?form=, read on the client; the static HTML ships the single form. */}
            <Suspense fallback={<LeadForm {...formProps} stage={undefined} variant="single" />}>
              <StageLeadForm {...formProps} />
            </Suspense>
          </div>
        </Container>
      </Section>
    </main>
  );
}
