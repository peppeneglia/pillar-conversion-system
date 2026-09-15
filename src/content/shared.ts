import type {
  BeforeAfterLabels,
  FooterContent,
  LeadFormCopy,
  SectionTitles,
  TrustBar,
} from "./types";

export const trustBar: TrustBar = {
  title: "[TODO: titolo breve della trust bar, senza numeri non verificati]",
  stats: [
    {
      value: "[TODO: primo numero verificato dal sito Pillar]",
      label: "[TODO: cosa misura il primo numero]",
    },
    {
      value: "[TODO: secondo numero verificato dal sito Pillar]",
      label: "[TODO: cosa misura il secondo numero]",
    },
    {
      value: "[TODO: terzo numero verificato dal sito Pillar]",
      label: "[TODO: cosa misura il terzo numero]",
    },
  ],
  // Companies quoted in the testimonials.
  clients: ["Serra SRL", "B.C. Servizi", "MAC SRL", "Euroservice"],
};

export const beforeAfterLabels: BeforeAfterLabels = {
  before: "Oggi",
  after: "Con Pillar",
};

export const sectionTitles: SectionTitles = {
  testimonials: "[TODO: titolo della sezione testimonianze]",
  faq: "[TODO: titolo della sezione domande frequenti]",
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
    title: "[TODO: titolo di conferma invio, senza promettere tempi di risposta]",
    body: "[TODO: testo che spiega cosa succede dopo la richiesta]",
  },
};

export const footer: FooterContent = {
  disclaimer: "Concept non ufficiale a scopo di portfolio. Non affiliato a Pillar Srl.",
  note: "[TODO: nota breve sull'autore del concept e sullo scopo del progetto]",
  links: [
    {
      label: "[TODO: etichetta del link al sito ufficiale o al portfolio]",
      href: "#",
    },
  ],
};
