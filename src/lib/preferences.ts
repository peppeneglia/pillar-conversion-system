import type { Locale } from "@/content/types";

export type Theme = "light" | "dark";

export const LOCALE_COOKIE = "pcs-locale";
export const THEME_COOKIE = "pcs-theme";

/** Italian and the light theme are the defaults, regardless of system settings. */
export const DEFAULT_THEME: Theme = "light";

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export function isTheme(value: string | undefined): value is Theme {
  return value === "light" || value === "dark";
}

export function resolveLocale(value: string | undefined): Locale {
  return value === "en" ? "en" : "it";
}

export function resolveTheme(value: string | undefined): Theme {
  return isTheme(value) ? value : DEFAULT_THEME;
}

/** Writes the preference for a year; the server reads it on the next render. */
export function writePreferenceCookie(name: string, value: string): void {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax`;
}
