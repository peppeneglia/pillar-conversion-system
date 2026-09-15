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
        { value: "fascia-1", label: "[TODO: prima fascia di cantieri attivi]" },
        { value: "fascia-2", label: "[TODO: seconda fascia di cantieri attivi]" },
        { value: "fascia-3", label: "[TODO: terza fascia di cantieri attivi]" },
        { value: "fascia-4", label: "[TODO: quarta fascia di cantieri attivi]" },
      ],
    },
    currentTools: {
      legend: "Cosa usi oggi?",
      options: [
        { value: "strumento-1", label: "[TODO: primo strumento usato oggi]" },
        { value: "strumento-2", label: "[TODO: secondo strumento usato oggi]" },
        { value: "strumento-3", label: "[TODO: terzo strumento usato oggi]" },
        { value: "strumento-4", label: "[TODO: quarto strumento usato oggi]" },
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
