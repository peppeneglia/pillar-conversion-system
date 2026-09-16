import { privacyNote, trustBar } from "../shared";
import type { StageContent } from "../types";

export const operativo: StageContent<"operativo"> = {
  stage: "operativo",
  meta: {
    title: "Pillar: bolle, rapportini e ore",
    description:
      "Una foto su WhatsApp e la bolla è archiviata. Un vocale e il rapportino è scritto. Senza app da installare.",
  },
  hero: {
    eyebrow: "Bolle, rapportini e ore",
    headline: "Le bolle le raccogli tu.",
    headlineAccent: "Trascriverle non è il tuo lavoro.",
    subheadline: [
      "Una foto su WhatsApp e la bolla è archiviata nel cantiere giusto.",
      "Un vocale e il rapportino è scritto. Nessuna app da installare, per nessuno.",
    ],
    // CTAs are intentionally inverted compared to valutazione: this reader does
    // not make the purchase decision. Do not align them.
    primaryCta: {
      label: "Vedi come funziona",
      target: "#prima-dopo",
    },
    secondaryCta: {
      label: "Prenota una demo",
      target: "#form",
    },
    proofLine: "Oltre 700 imprese edili lo usano ogni giorno",
  },
  trustBar,
  beforeAfter: {
    title: "Una giornata, prima e dopo",
    rows: [
      {
        before: "Le bolle restano nel furgone e arrivano tutte a fine mese",
        after: "Foto dal cantiere, archiviata subito nella commessa giusta",
      },
      {
        before: "Le ore te le fai dire e le ricopi la sera",
        after: "Vocale su WhatsApp, rapportino strutturato in automatico",
      },
      {
        before: "L'ufficio ti chiama dieci volte per sapere a che punto sei",
        after: "Chi è in cantiere e cosa ha fatto si vede senza chiamare",
      },
    ],
  },
  audience: {
    title: "Chi ricopia bolle la sera non è chi ha comprato il gestionale",
    body: "Il tempo che si perde tra cantiere e ufficio non compare in nessun preventivo. Ma è quello che ti porti a casa.",
    bullets: [
      "Bolle e DDT che non si perdono",
      "Ore misurate invece che stimate",
      "Documenti di cantiere sempre dove servono",
    ],
  },
  team: {
    title: "E i tuoi operai?",
    body: "Non devono installare niente, non devono imparare niente, non devono registrarsi. Mandano una foto o un vocale su WhatsApp, come già fanno.",
  },
  faq: [
    {
      question: "Gli operai devono installare un'app?",
      answer: "No. Usano WhatsApp, quello che hanno già sul telefono.",
    },
    {
      question: "Serve formazione?",
      answer:
        "La configurazione si fa insieme e in poche ore si è operativi, con affiancamento nelle prime settimane.",
    },
    {
      question: "Ognuno vede tutto?",
      answer:
        "No. Titolare, ufficio, capocantiere e operai hanno accessi diversi: ognuno vede quello che gli serve.",
    },
  ],
  form: {
    title: "Fai vedere Pillar a chi decide",
    subtitle: "30 minuti in videochiamata. Puoi esserci anche tu.",
    submitLabel: "Prenota la demo",
    privacyNote,
  },
};
