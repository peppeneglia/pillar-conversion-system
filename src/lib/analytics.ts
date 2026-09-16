import type { LeadFormPosition, LeadFormVariant } from "@/components/blocks/LeadForm";
import type { LeadFormFieldKey, Stage } from "@/content/types";
import { sanitizeText } from "@/lib/validation";

// First-party event layer: no third-party scripts, no network. Events are logged to
// the console, ready to be forwarded to a real endpoint later.

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
export type UtmKey = (typeof UTM_KEYS)[number];
export type Utm = Partial<Record<UtmKey, string>>;

export type CtaPosition =
  | "header_primary"
  | "hero_primary"
  | "hero_secondary"
  | "mid"
  | "footer";
export type ScrollDepth = 25 | 50 | 75 | 100;
export type FormFieldName = LeadFormFieldKey | "activeSites" | "currentTools";

export type AnalyticsEvents = {
  page_view: { stage: Stage; variant: LeadFormVariant; utm: Utm };
  cta_click: { position: CtaPosition; stage: Stage };
  form_view: { position: LeadFormPosition; stage: Stage };
  form_start: { position: LeadFormPosition; variant: LeadFormVariant; field: FormFieldName };
  form_step: { step: number; variant: LeadFormVariant };
  form_submit: { position: LeadFormPosition; variant: LeadFormVariant; stage: Stage };
  scroll_depth: { depth: ScrollDepth; stage: Stage };
};

export type AnalyticsEventName = keyof AnalyticsEvents;

export const CTA_POSITIONS: readonly CtaPosition[] = [
  "header_primary",
  "hero_primary",
  "hero_secondary",
  "mid",
  "footer",
];

export const SCROLL_DEPTHS: readonly ScrollDepth[] = [25, 50, 75, 100];

const UTM_STORAGE_KEY = "pcs:utm";

let utmCache: Utm | null = null;

function readSession(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key: string, value: string): void {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable (private mode, blocked site data): keep the in-memory value.
  }
}

export function track<E extends AnalyticsEventName>(name: E, payload: AnalyticsEvents[E]): void {
  if (typeof window === "undefined") return;
  console.info(`[analytics] ${name}`, payload);
}

function parseStoredUtm(raw: string): Utm | null {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;

    const utm: Utm = {};
    for (const key of UTM_KEYS) {
      const value = (parsed as Record<string, unknown>)[key];
      if (typeof value === "string") utm[key] = value;
    }
    return utm;
  } catch {
    return null;
  }
}

/**
 * UTM parameters from the first page load of the session. Later navigations
 * keep the original values, even if their URL carries different UTMs.
 */
export function getSessionUtm(): Utm {
  if (utmCache) return utmCache;
  if (typeof window === "undefined") return {};

  const stored = readSession(UTM_STORAGE_KEY);
  const fromStorage = stored ? parseStoredUtm(stored) : null;
  if (fromStorage) {
    utmCache = fromStorage;
    return fromStorage;
  }

  const params = new URLSearchParams(window.location.search);
  const utm: Utm = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = sanitizeText(value, 100);
  }

  utmCache = utm;
  writeSession(UTM_STORAGE_KEY, JSON.stringify(utm));
  return utm;
}

