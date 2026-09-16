import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type SectionBackground = "background" | "card" | "muted" | "accent";

export type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /** Surface token used as section background. `accent` is dark: children need light text. */
  background?: SectionBackground;
};

const backgroundClasses: Record<SectionBackground, string> = {
  background: "bg-background",
  card: "bg-card",
  muted: "bg-muted",
  accent: "bg-carbon-steel text-on-dark",
};

export function Section({
  background = "background",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      data-surface={background}
      className={cn(
        "scroll-mt-20 py-16 md:py-24",
        backgroundClasses[background],
        className,
      )}
      {...props}
    />
  );
}
