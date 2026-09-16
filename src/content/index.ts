import { margine } from "./stages/margine";
import { operativo } from "./stages/operativo";
import { valutazione } from "./stages/valutazione";
import { testimonials } from "./testimonials";
import type { Stage, StageContent, Testimonial } from "./types";

// The mapped type ties each key to content declaring the same stage.
const stageMap: { [S in Stage]: StageContent<S> } = {
  margine,
  valutazione,
  operativo,
};

export const stageContent: Record<Stage, StageContent> = stageMap;

export const stages = Object.keys(stageMap) as Stage[];

export function isStage(value: string): value is Stage {
  return (stages as string[]).includes(value);
}

export function getTestimonialsForStage(stage: Stage): Testimonial[] {
  return testimonials.filter((testimonial) => testimonial.stages.includes(stage));
}

export {
  beforeAfterLabels,
  disclaimer,
  footer,
  headerCta,
  leadFormCopy,
  notFoundContent,
  privacyNote,
  sectionTitles,
  trustBar,
} from "./shared";
export { documentContent } from "./document";
export { testimonials } from "./testimonials";
export type * from "./types";
