import type { Testimonial } from "./types";

// Real testimonials from the Pillar website. Quotes and roles must be copied
// verbatim from the source: never paraphrase or invent them.
export const testimonials: Testimonial[] = [
  {
    id: "serra-srl",
    quote:
      "Ora abbiamo visibilità immediata sulla marginalità per cantiere e decisioni strategiche basate sui dati.",
    name: "Francesco Serra e Gianpaolo Piepoli",
    role: "CEO Fondatore e Ingegnere Civile",
    company: "Serra SRL",
    stages: ["margine"],
  },
  {
    id: "bc-servizi",
    quote:
      "Da 1-2 giorni a settimana siamo passati a circa 30 minuti al giorno per la contabilità cantieri.",
    name: "Carlo Bronzi",
    role: "Ingegnere",
    company: "B.C. Servizi",
    stages: ["operativo"],
  },
  {
    id: "mac-srl",
    quote:
      "Abbiamo sostituito 3 gestionali con uno solo e ridotto drasticamente i tempi di preventivazione.",
    name: "Federico Malagoli e Marco Malagoli",
    role: "Co-fondatori",
    company: "MAC SRL",
    stages: ["valutazione"],
  },
  {
    id: "euroservice",
    quote:
      "Dopo due gestionali falliti, ora vediamo in tempo reale quali cantieri drenano liquidità.",
    name: "Cristian Bertaggia",
    role: "Amministratore",
    company: "Euroservice",
    stages: ["valutazione"],
  },
  {
    id: "euroservice-case-study",
    quote:
      "Abbiamo molti cantieri che economicamente sono in positivo ma finanziariamente sono in negativo. Il fatto di esserne consapevoli e di riuscire a fare qualche previsione per il mese dopo: questo è quello che cercavamo.",
    name: "Cristian Bertaggia",
    role: "Amministratore",
    company: "Euroservice",
    stages: ["margine"],
  },
  {
    id: "bc-servizi-case-study",
    quote:
      "Il tempo che ho liberato lo spendo nei controlli in cantiere, nelle richieste di preventivi, nella verifica delle fatture. Prima ero su tante cose un po' sulla fiducia.",
    name: "Carlo Bronzi",
    role: "Titolare",
    company: "B.C. Servizi",
    stages: ["operativo"],
  },
  {
    id: "mac-srl-case-study",
    quote:
      "Con i gestionali edili mi sono sempre trovato un po' in difficoltà. Pagare un abbonamento per una cosa che non ti risolve tutti i problemi... alla fine devi avere tre gestionali.",
    name: "Marco Malagoli",
    role: "Co-fondatore",
    company: "Modena Art Construction",
    stages: ["valutazione"],
  },
];
