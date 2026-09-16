import { privacyNote, trustBar } from "../shared";
import type { StageContent } from "../types";

export const margine: StageContent<"margine"> = {
  stage: "margine",
  meta: {
    title: "Pillar: marginalità di cantiere",
    description:
      "Il margine di ogni cantiere in tempo reale. Costi reali, ore misurate, scostamenti visibili mentre i lavori sono ancora aperti.",
  },
  hero: {
    eyebrow: "Marginalità di cantiere",
    headline: "Sai quanto fatturi.",
    headlineAccent: "Sai quanto guadagni?",
    subheadline:
      "Pillar ti mostra il margine di ogni cantiere mentre i lavori sono aperti. Costi, ore, bolle e varianti tracciati in tempo reale.",
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
    title: "Il margine, prima e dopo",
    rows: [
      {
        before: "Il margine lo scopri a lavori chiusi, quando non puoi più intervenire",
        after: "Lo vedi mentre il cantiere è aperto, cantiere per cantiere",
      },
      {
        before: "I costi li stimi a occhio, le ore te le fai dire",
        after: "Costi reali e ore misurate, aggiornati ogni giorno",
      },
      {
        before: "Un cantiere in utile può prosciugarti la cassa e non te ne accorgi",
        after: "Redditività e liquidità, separate e visibili",
      },
    ],
  },
  audience: {
    title: "La maggior parte delle imprese edili sa quanto fattura, non quanto guadagna",
    body: "Non è una questione di contabilità. È che i numeri arrivano quando le decisioni sono già state prese.",
    bullets: [
      "Quale cantiere rende e quale no",
      "Dove il preventivo si è scostato dal consuntivo",
      "Quando il budget sta per sforare",
    ],
  },
  faq: [
    {
      question: "Posso vedere costi e marginalità in tempo reale?",
      answer: "Sì. Costi, ricavi, margini e avanzamento aggiornati per ogni cantiere.",
    },
    {
      question: "Come fanno i dati ad arrivare senza inserirli a mano?",
      answer:
        "Bolle e rapportini arrivano da WhatsApp, i movimenti bancari e le fatture si collegano alle commesse.",
    },
    {
      question: "Sostituisce il software del commercialista?",
      answer: "No. Raccoglie e ordina i dati dei cantieri, che gli passate già pronti.",
    },
    {
      question: "Quanto costa?",
      answer:
        "Abbonamento mensile, con prezzo definito in demo in base alla dimensione dell'impresa.",
    },
  ],
  form: {
    title: "Guardiamo i numeri di un tuo cantiere",
    subtitle: "30 minuti in videochiamata, senza impegno.",
    submitLabel: "Prenota la demo",
    privacyNote,
  },
};
