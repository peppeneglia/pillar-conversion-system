import type {
  BeforeAfterLabels,
  CtaConfig,
  FooterContent,
  LeadFormCopy,
  NotFoundContent,
  SectionTitles,
  TrustBar,
} from "./types";

// Figures published by Pillar on pillar.it, read on 14/09/2026. Not independently verified.
export const trustBar: TrustBar = {
  title: "Imprese edili che usano Pillar ogni giorno",
  stats: [
    { value: "700+", label: "imprese attive" },
    { value: "2000+", label: "progetti gestiti" },
    { value: "14h", label: "risparmiate a settimana" },
    { value: "4.8/5", label: "valutazione media" },
  ],
  // Companies quoted in the testimonials.
  clients: ["Serra SRL", "B.C. Servizi", "MAC SRL", "Euroservice"],
};

export const beforeAfterLabels: BeforeAfterLabels = {
  before: "Oggi",
  after: "Con Pillar",
};

export const sectionTitles: SectionTitles = {
  testimonials: "Cosa dicono le imprese edili che usano Pillar",
  faq: "Domande frequenti",
};

export const leadFormCopy: LeadFormCopy = {
  fields: {
    fullName: { label: "Nome e cognome" },
    company: { label: "Azienda" },
    phone: { label: "Telefono" },
    email: { label: "Email" },
  },
  honeypotLabel: "Lascia vuoto questo campo",
  steps: {
    activeSites: {
      legend: "Quanti cantieri attivi gestisci?",
      options: [
        { value: "1-3", label: "1-3" },
        { value: "4-10", label: "4-10" },
        { value: "oltre-10", label: "Più di 10" },
      ],
    },
    currentTools: {
      legend: "Cosa usi oggi?",
      options: [
        { value: "excel-carta", label: "Excel e carta" },
        { value: "altro-gestionale", label: "Un altro gestionale" },
        { value: "nessuno-strutturato", label: "Niente di strutturato" },
      ],
    },
    contactLegend: "I tuoi dati di contatto",
  },
  progressLabel: "Passo {current} di {total}",
  nextLabel: "Avanti",
  backLabel: "Indietro",
  errors: {
    required: "Questo campo è obbligatorio.",
    fullName: "Inserisci nome e cognome.",
    phone: "Inserisci un numero di telefono valido.",
    email: "Inserisci un indirizzo email valido.",
    choice: "Seleziona un'opzione per continuare.",
  },
  confirmation: {
    title: "Richiesta inviata",
    body: "Ti ricontattiamo per fissare la videochiamata.",
  },
};

/** Privacy note shown under every lead form. */
export const privacyNote = "I tuoi dati servono solo a organizzare la demo. Nessuna newsletter.";

/** Shown in the footer and, shortened, as the header badge. */
export const disclaimer =
  "Concept non ufficiale a scopo di portfolio. Non affiliato a Pillar Srl.";

export const headerCta: CtaConfig = { label: "Prenota demo", target: "#form" };

export const notFoundContent: NotFoundContent = {
  title: "Pagina non trovata",
  body: "Questo indirizzo non corrisponde a nessuna pagina del concept.",
  cta: {
    label: "Torna al documento",
    target: "/",
  },
};

export const footer: FooterContent = {
  disclaimer,
  cta: {
    label: "Prenota una demo",
    target: "#form",
  },
  note: disclaimer,
  links: [
    { label: "Documento", href: "/" },
    { label: "Landing marginalità", href: "/lp/margine" },
    { label: "Landing gestionale", href: "/lp/valutazione" },
    { label: "Landing operativo", href: "/lp/operativo" },
    { label: "Anteprima componenti", href: "/preview" },
  ],
};
