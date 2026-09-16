"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type HeaderSurfaceProps = {
  sticky: boolean;
  children: ReactNode;
};

const TRANSPARENT = "rgba(0, 0, 0, 0)";

/**
 * The strip around the header card takes the background colour of whatever
 * section is underneath, so the header never sits on a colour of its own.
 */
export function HeaderSurface({ sticky, children }: HeaderSurfaceProps) {
  const ref = useRef<HTMLElement>(null);
  const [color, setColor] = useState<string | null>(null);

  useEffect(() => {
    if (!sticky) return;

    let frame = 0;

    function measure() {
      frame = 0;
      const header = ref.current;
      if (!header) return;

      const rect = header.getBoundingClientRect();
      const y = Math.min(rect.bottom + 2, window.innerHeight - 1);
      const x = Math.round(window.innerWidth / 2);

      // Hide the header for the sample, otherwise it reads its own colour.
      header.style.visibility = "hidden";
      const stack = document.elementsFromPoint(x, y);
      header.style.visibility = "";

      // Only page surfaces count: a card or a form sitting on the section is skipped.
      const surface = stack
        .map((node) => node.closest<HTMLElement>("[data-surface]"))
        .find((node): node is HTMLElement => node !== null);

      const candidates = [surface, document.body].filter(
        (node): node is HTMLElement => node !== null && node !== undefined,
      );

      for (const node of candidates) {
        const background = window.getComputedStyle(node).backgroundColor;
        if (background && background !== TRANSPARENT) {
          setColor((current) => (current === background ? current : background));
          return;
        }
      }
    }

    function schedule() {
      if (frame === 0) frame = window.requestAnimationFrame(measure);
    }

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [sticky]);

  return (
    <header
      ref={ref}
      // Until the sample lands, and without JavaScript, the page background is used.
      style={color ? { backgroundColor: color } : undefined}
      className={cn("bg-background pt-3 select-none", sticky && "sticky top-0 z-40")}
    >
      {children}
    </header>
  );
}
