import { trustBar } from "../shared";
import type { StageContent } from "../types";

export const valutazione: StageContent<"valutazione"> = {
  stage: "valutazione",
  meta: {
    title: "Gestionale per imprese edili — Pillar",
    description:
      "Cassa, fatture, preventivi e commesse in un unico posto. Vedi il margine di ogni cantiere mentre i lavori sono ancora aperti.",
  },
  hero: {
    eyebrow: "Gestionale per imprese edili",
    headline: "Hai già provato un gestionale.",
    headlineAccent: "Questa volta parti dai numeri.",
    subheadline:
      "Pillar collega cassa, fatture e cantieri. Vedi il margine di ogni commessa mentre i lavori sono ancora aperti, non a consuntivo.",
    primaryCta: {
      label: "Prenota una demo",
      target: "#form",
    },
    secondaryCta: {
      label: "Come funziona",
      target: "#prima-dopo",
    },
    proofLine: "Oltre 700 imprese edili lo usano ogni giorno",
  },
  trustBar,
  beforeAfter: {
    title: "Perché gli altri gestionali si sono fermati",
    rows: [
      {
        before: "Il gestionale chiede di inserire tutto a mano, e nessuno lo fa",
        after: "Bolle e rapportini arrivano da WhatsApp, senza app da installare",
      },
      {
        before: "Parte dal computo metrico, che il cliente privato non capisce",
        after: "Preventivo rapido, con AI, o computo caricato: scegli tu",
      },
      {
        before: "Copre metà del lavoro, e ne servono altri due",
        after: "Cassa, fatture, preventivi e commesse nello stesso posto",
      },
    ],
  },
  audience: {
    title: "Chi cerca un gestionale ha già una lista di cose che non hanno funzionato",
    body: "La domanda non è quante funzioni ha. È se lo userete davvero, e se qualcuno risponde quando si blocca.",
    bullets: [
      "Chi in azienda deve usarlo: titolare, ufficio, capocantiere, operai",
      "Quanto tempo serve prima di essere operativi",
      "Cosa succede ai dati che avete già",
    ],
  },
  faq: [
    {
      question: "Quanto tempo serve per partire?",
      answer:
        "La configurazione si fa insieme e in poche ore si è operativi, con affiancamento nelle prime settimane.",
    },
    {
      question: "Sostituisce il software del commercialista?",
      answer: "No. Raccoglie e ordina i dati dei cantieri, che gli passate già pronti.",
    },
    {
      question: "Funziona anche per una piccola impresa?",
      answer:
        "Sì. È pensato per imprese che gestiscono più cantieri, sia in crescita sia strutturate.",
    },
    {
      question: "Quanto costa?",
      answer:
        "Abbonamento mensile, con prezzo definito in demo in base alla dimensione dell'impresa.",
    },
  ],
  form: {
    title: "Vediamo se Pillar risolve quello che gli altri non hanno risolto",
    subtitle: "30 minuti in videochiamata, senza impegno.",
    submitLabel: "Prenota la demo",
    privacyNote: "[TODO: nota privacy sul trattamento dei dati del form]",
  },
};
