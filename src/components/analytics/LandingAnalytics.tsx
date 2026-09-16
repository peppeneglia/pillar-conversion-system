"use client";

import { useEffect, useRef } from "react";
import type { LeadFormVariant } from "@/components/blocks/LeadForm";
import type { Stage } from "@/content/types";
import {
  CTA_POSITIONS,
  SCROLL_DEPTHS,
  getSessionUtm,
  track,
  type CtaPosition,
  type ScrollDepth,
} from "@/lib/analytics";

export type LandingAnalyticsProps = {
  stage: Stage;
  /** Form variant decided on the server, reported with page_view. */
  variant: LeadFormVariant;
};

function isCtaPosition(value: string | undefined): value is CtaPosition {
  return CTA_POSITIONS.some((position) => position === value);
}

/**
 * Page-level events for a landing: page_view, cta_click (delegated from any
 * `[data-track-cta]` element, so CTA blocks stay Server Components) and scroll_depth.
 */
export function LandingAnalytics({ stage, variant }: LandingAnalyticsProps) {
  const pageViewTracked = useRef(false);
  const reachedDepths = useRef(new Set<ScrollDepth>());

  useEffect(() => {
    if (pageViewTracked.current) return;
    pageViewTracked.current = true;

    track("page_view", { stage, variant, utm: getSessionUtm() });
  }, [stage, variant]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>("[data-track-cta]");
      const position = element?.dataset.trackCta;
      if (isCtaPosition(position)) track("cta_click", { position, stage });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [stage]);

  useEffect(() => {
    let frame = 0;

    function measure() {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable <= 0 ? 100 : (window.scrollY / scrollable) * 100;

      for (const depth of SCROLL_DEPTHS) {
        // 99 so sub-pixel rounding at the very bottom still counts as 100.
        const reached = depth === 100 ? percent >= 99 : percent >= depth;
        if (reached && !reachedDepths.current.has(depth)) {
          reachedDepths.current.add(depth);
          track("scroll_depth", { depth, stage });
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
  }, [stage]);

  return null;
}
