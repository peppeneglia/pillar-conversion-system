import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type SectionBackground = "background" | "card" | "muted";

export type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /** Surface token used as section background. */
  background?: SectionBackground;
};

const backgroundClasses: Record<SectionBackground, string> = {
  background: "bg-background",
  card: "bg-card",
  muted: "bg-muted",
};

export function Section({
  background = "background",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-6 py-16 md:py-24",
        backgroundClasses[background],
        className,
      )}
      {...props}
    />
  );
}
