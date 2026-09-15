"use client";

import { useSearchParams } from "next/navigation";
import { LeadForm, type LeadFormProps } from "@/components/blocks/LeadForm";
import { getFormVariant } from "@/lib/form-variant";

export type StageLeadFormProps = Omit<LeadFormProps, "variant">;

/**
 * Picks the form variant from `?form=`. Must sit inside a Suspense boundary so the
 * rest of the page stays statically prerendered.
 */
export function StageLeadForm(props: StageLeadFormProps) {
  const searchParams = useSearchParams();
  return <LeadForm {...props} variant={getFormVariant(searchParams.get("form"))} />;
}
