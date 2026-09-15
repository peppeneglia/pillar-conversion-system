import type { LeadFormVariant } from "@/components/blocks/LeadForm";

/** `?form=multi` enables the three-step form; any other value, or none, gives `single`. */
export function getFormVariant(value: string | null): LeadFormVariant {
  return value === "multi" ? "multi" : "single";
}
