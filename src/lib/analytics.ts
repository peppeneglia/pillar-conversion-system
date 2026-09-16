import type { LeadFormPosition, LeadFormVariant } from "@/components/blocks/LeadForm";
import type { LeadFormFieldKey, Stage } from "@/content/types";
import { sanitizeText } from "@/lib/validation";

// First-party event layer: no third-party scripts, no network. Events go to the
// console and to an in-memory store read by the debug panel.

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
export type UtmKey = (typeof UTM_KEYS)[number];
export type Utm = Partial<Record<UtmKey, string>>;

export type CtaPosition =
  | "header_primary"
  | "header_secondary"
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

export type TrackedEvent = {
  [E in AnalyticsEventName]: {
    id: number;
    name: E;
    payload: AnalyticsEvents[E];
    timestamp: number;
  };
}[AnalyticsEventName];

export const CTA_POSITIONS: readonly CtaPosition[] = [
  "header_primary",
  "header_secondary",
  "hero_primary",
  "hero_secondary",
  "mid",
  "footer",
];

export const SCROLL_DEPTHS: readonly ScrollDepth[] = [25, 50, 75, 100];

const UTM_STORAGE_KEY = "pcs:utm";
const DEBUG_STORAGE_KEY = "pcs:debug";
const NO_EVENTS: TrackedEvent[] = [];

let events: TrackedEvent[] = NO_EVENTS;
let nextId = 1;
let utmCache: Utm | null = null;
const listeners = new Set<() => void>();

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

  const event = { id: nextId++, name, payload, timestamp: Date.now() } as TrackedEvent;
  // A new array on every event keeps useSyncExternalStore snapshots comparable by reference.
  events = [...events, event];
  console.info(`[analytics] ${name}`, payload);
  listeners.forEach((listener) => listener());
}

export function subscribeToEvents(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getEventsSnapshot(): TrackedEvent[] {
  return events;
}

export function getServerEventsSnapshot(): TrackedEvent[] {
  return NO_EVENTS;
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

/** On in development; in production only after `?debug=1`, remembered for the session. */
export function isDebugEnabled(): boolean {
  if (process.env.NODE_ENV === "development") return true;
  if (typeof window === "undefined") return false;

  if (new URLSearchParams(window.location.search).get("debug") === "1") {
    writeSession(DEBUG_STORAGE_KEY, "1");
    return true;
  }
  return readSession(DEBUG_STORAGE_KEY) === "1";
}
