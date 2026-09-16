import { en } from "./locales/en";
import { it } from "./locales/it";
import type { Locale, SiteContent, Stage, Testimonial } from "./types";

// Italian is the source language and the default, whatever the browser asks for.
export const DEFAULT_LOCALE: Locale = "it";

export const locales: Locale[] = ["it", "en"];

const siteContent: Record<Locale, SiteContent> = { it, en };

export function isLocale(value: string | undefined): value is Locale {
  return (locales as string[]).includes(value ?? "");
}

export function getContent(locale: Locale): SiteContent {
  return siteContent[locale];
}

export const stages: Stage[] = ["margine", "valutazione", "operativo"];

export function isStage(value: string): value is Stage {
  return (stages as string[]).includes(value);
}

export function getTestimonialsForStage(content: SiteContent, stage: Stage): Testimonial[] {
  return content.testimonials.filter((testimonial) => testimonial.stages.includes(stage));
}

export type * from "./types";
