import type { LeadFormVariant } from "@/components/blocks/LeadForm";

/** The step form is the default; `?form=single` switches to the short one. */
export function getFormVariant(value: string | null): LeadFormVariant {
  return value === "single" ? "single" : "multi";
}
