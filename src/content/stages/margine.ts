import { privacyNote, trustBar } from "../shared";
import type { StageContent } from "../types";

export const margine: StageContent<"margine"> = {
  stage: "margine",
  meta: {
    title: "[TODO: meta title della landing per chi vuole recuperare marginalità]",
    description:
      "[TODO: meta description di circa 150 caratteri sul controllo della marginalità]",
  },
  hero: {
    eyebrow: "[TODO: eyebrow che identifica il pubblico attento alla marginalità]",
    headline: "[TODO: headline sul problema dei margini che sfuggono]",
    headlineAccent: "[TODO: parte finale della headline, resa con il gradiente]",
    subheadline: "[TODO: subheadline che spiega come Pillar rende visibile la marginalità]",
    primaryCta: {
      label: "[TODO: etichetta della CTA principale verso il form]",
      target: "#form",
    },
    secondaryCta: {
      label: "[TODO: etichetta della CTA secondaria verso il confronto prima/dopo]",
      target: "#prima-dopo",
    },
    proofLine:
      "[TODO: riga di prova sociale che richiama la testimonianza di Serra SRL, senza numeri inventati]",
  },
  trustBar,
  beforeAfter: {
    title: "[TODO: titolo del confronto prima/dopo sulla marginalità]",
    rows: [
      {
        before: "[TODO: situazione prima, primo aspetto della marginalità]",
        after: "[TODO: situazione dopo, stesso aspetto]",
      },
      {
        before: "[TODO: situazione prima, secondo aspetto della marginalità]",
        after: "[TODO: situazione dopo, stesso aspetto]",
      },
      {
        before: "[TODO: situazione prima, terzo aspetto della marginalità]",
        after: "[TODO: situazione dopo, stesso aspetto]",
      },
    ],
  },
  audience: {
    title: "[TODO: titolo della sezione a chi è rivolta la landing margine]",
    body: "[TODO: paragrafo che descrive l'azienda che non ha visibilità sui margini]",
    bullets: [
      "[TODO: primo segnale che la marginalità non è sotto controllo]",
      "[TODO: secondo segnale che la marginalità non è sotto controllo]",
      "[TODO: terzo segnale che la marginalità non è sotto controllo]",
    ],
  },
  faq: [
    {
      question: "[TODO: prima domanda frequente sulla marginalità]",
      answer: "[TODO: risposta alla prima domanda]",
    },
    {
      question: "[TODO: seconda domanda frequente sulla marginalità]",
      answer: "[TODO: risposta alla seconda domanda]",
    },
    {
      question: "[TODO: terza domanda frequente sulla marginalità]",
      answer: "[TODO: risposta alla terza domanda]",
    },
  ],
  form: {
    title: "[TODO: titolo del form per la landing margine]",
    subtitle: "[TODO: sottotitolo che chiarisce cosa succede dopo l'invio]",
    submitLabel: "[TODO: etichetta del pulsante di invio]",
    privacyNote,
  },
};
