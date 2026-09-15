import { trustBar } from "../shared";
import type { StageContent } from "../types";

export const operativo: StageContent<"operativo"> = {
  stage: "operativo",
  meta: {
    title: "[TODO: meta title della landing per chi vuole ridurre il lavoro operativo]",
    description:
      "[TODO: meta description di circa 150 caratteri sui tempi delle attività operative]",
  },
  hero: {
    eyebrow: "[TODO: eyebrow che identifica chi perde tempo in attività manuali]",
    headline: "[TODO: headline sul tempo speso in attività operative ripetitive]",
    subheadline: "[TODO: subheadline che spiega come Pillar accorcia i processi operativi]",
    primaryCta: {
      label: "[TODO: etichetta della CTA principale verso il form]",
      target: "#form",
    },
    secondaryCta: {
      label: "[TODO: etichetta della CTA secondaria verso il confronto prima/dopo]",
      target: "#prima-dopo",
    },
    proofLine:
      "[TODO: riga di prova sociale che richiama B.C. Servizi, da 1-2 giorni a 30 minuti]",
  },
  trustBar,
  beforeAfter: {
    title: "[TODO: titolo del confronto prima/dopo sulle attività operative]",
    rows: [
      {
        before: "[TODO: attività operativa prima, primo processo]",
        after: "[TODO: stessa attività dopo, senza numeri non verificati]",
      },
      {
        before: "[TODO: attività operativa prima, secondo processo]",
        after: "[TODO: stessa attività dopo, senza numeri non verificati]",
      },
      {
        before: "[TODO: attività operativa prima, terzo processo]",
        after: "[TODO: stessa attività dopo, senza numeri non verificati]",
      },
    ],
  },
  audience: {
    title: "[TODO: titolo della sezione a chi è rivolta la landing operativo]",
    body: "[TODO: paragrafo che descrive l'azienda rallentata da processi manuali]",
    bullets: [
      "[TODO: primo sintomo di un carico operativo eccessivo]",
      "[TODO: secondo sintomo di un carico operativo eccessivo]",
      "[TODO: terzo sintomo di un carico operativo eccessivo]",
    ],
  },
  faq: [
    {
      question: "[TODO: prima domanda frequente sull'avvio operativo]",
      answer: "[TODO: risposta alla prima domanda]",
    },
    {
      question: "[TODO: seconda domanda frequente sull'avvio operativo]",
      answer: "[TODO: risposta alla seconda domanda]",
    },
    {
      question: "[TODO: terza domanda frequente sull'avvio operativo]",
      answer: "[TODO: risposta alla terza domanda]",
    },
  ],
  form: {
    title: "[TODO: titolo del form per la landing operativo]",
    subtitle: "[TODO: sottotitolo che chiarisce cosa succede dopo l'invio]",
    submitLabel: "[TODO: etichetta del pulsante di invio]",
    privacyNote: "[TODO: nota privacy sul trattamento dei dati del form]",
  },
};
