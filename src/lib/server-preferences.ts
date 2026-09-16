import { cookies } from "next/headers";
import { getContent } from "@/content";
import type { Locale, SiteContent } from "@/content/types";
import {
  LOCALE_COOKIE,
  THEME_COOKIE,
  resolveLocale,
  resolveTheme,
  type Theme,
} from "@/lib/preferences";

export type Preferences = {
  locale: Locale;
  theme: Theme;
};

/** Reads the cookies written by the footer switches; falls back to Italian and light. */
export async function getPreferences(): Promise<Preferences> {
  const store = await cookies();
  return {
    locale: resolveLocale(store.get(LOCALE_COOKIE)?.value),
    theme: resolveTheme(store.get(THEME_COOKIE)?.value),
  };
}

export async function getSiteContent(): Promise<{ locale: Locale; content: SiteContent }> {
  const { locale } = await getPreferences();
  return { locale, content: getContent(locale) };
}
