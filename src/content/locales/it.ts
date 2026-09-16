import { documentContent } from "../document";
import { projectContent } from "../project";
import {
  beforeAfterLabels,
  footer,
  headerCta,
  leadFormCopy,
  notFoundContent,
  sectionTitles,
  trustBar,
} from "../shared";
import { margine } from "../stages/margine";
import { operativo } from "../stages/operativo";
import { valutazione } from "../stages/valutazione";
import { testimonials } from "../testimonials";
import type { SiteContent } from "../types";

export const it: SiteContent = {
  ui: {
    homeLink: "Pillar Conversion System, vai alla home",
    wordmark: "Conversion System",
    footerNav: "Sezioni del progetto",
    localeLabel: "Lingua",
    localeNames: { it: "Italiano", en: "English" },
    themeLabel: "Tema",
    themeNames: { light: "Chiaro", dark: "Scuro" },
  },
  trustBar,
  beforeAfterLabels,
  sectionTitles,
  leadForm: leadFormCopy,
  headerCta,
  footer,
  notFound: notFoundContent,
  document: documentContent,
  project: projectContent,
  stages: { margine, valutazione, operativo },
  testimonials,
};
