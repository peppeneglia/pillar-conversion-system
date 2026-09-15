import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type ContainerProps = ComponentPropsWithoutRef<"div">;

/**
 * Full-width wrapper whose inline padding keeps content within --spacing-container.
 * Content width is min(100% - 2.5rem, 1260px).
 */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full px-[max(1.25rem,(100%_-_var(--spacing-container))/2)]",
        className,
      )}
      {...props}
    />
  );
}
