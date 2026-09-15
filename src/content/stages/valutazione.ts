import { trustBar } from "../shared";
import type { StageContent } from "../types";

export const valutazione: StageContent<"valutazione"> = {
  stage: "valutazione",
  meta: {
    title: "[TODO: meta title della landing per chi sta valutando un nuovo gestionale]",
    description:
      "[TODO: meta description di circa 150 caratteri sulla scelta del gestionale]",
  },
  hero: {
    eyebrow: "[TODO: eyebrow che identifica chi sta confrontando gestionali]",
    headline: "[TODO: headline sul timore di sbagliare di nuovo gestionale]",
    subheadline:
      "[TODO: subheadline che spiega perché Pillar riduce il rischio della scelta]",
    primaryCta: {
      label: "[TODO: etichetta della CTA principale verso il form]",
      target: "#form",
    },
    secondaryCta: {
      label: "[TODO: etichetta della CTA secondaria verso le domande frequenti]",
      target: "#faq",
    },
    proofLine:
      "[TODO: riga di prova sociale che richiama MAC SRL o Euroservice, senza numeri inventati]",
  },
  trustBar,
  beforeAfter: {
    title: "[TODO: titolo del confronto tra gestionali precedenti e Pillar]",
    rows: [
      {
        before: "[TODO: limite dei gestionali precedenti, primo aspetto]",
        after: "[TODO: come Pillar affronta lo stesso aspetto]",
      },
      {
        before: "[TODO: limite dei gestionali precedenti, secondo aspetto]",
        after: "[TODO: come Pillar affronta lo stesso aspetto]",
      },
      {
        before: "[TODO: limite dei gestionali precedenti, terzo aspetto]",
        after: "[TODO: come Pillar affronta lo stesso aspetto]",
      },
    ],
  },
  audience: {
    title: "[TODO: titolo della sezione a chi è rivolta la landing valutazione]",
    body: "[TODO: paragrafo che descrive l'azienda reduce da gestionali non adatti]",
    bullets: [
      "[TODO: primo criterio con cui l'azienda valuta un gestionale]",
      "[TODO: secondo criterio con cui l'azienda valuta un gestionale]",
      "[TODO: terzo criterio con cui l'azienda valuta un gestionale]",
    ],
  },
  faq: [
    {
      question: "[TODO: prima domanda frequente sul passaggio da un altro gestionale]",
      answer: "[TODO: risposta alla prima domanda]",
    },
    {
      question: "[TODO: seconda domanda frequente sul passaggio da un altro gestionale]",
      answer: "[TODO: risposta alla seconda domanda]",
    },
    {
      question: "[TODO: terza domanda frequente sul passaggio da un altro gestionale]",
      answer: "[TODO: risposta alla terza domanda]",
    },
  ],
  form: {
    title: "[TODO: titolo del form per la landing valutazione]",
    subtitle: "[TODO: sottotitolo che chiarisce cosa succede dopo l'invio]",
    submitLabel: "[TODO: etichetta del pulsante di invio]",
    privacyNote: "[TODO: nota privacy sul trattamento dei dati del form]",
  },
};
