import type { AboutContent } from "./types";

// Personal statement: rendered in Italian whatever the chosen language, like the
// testimonials. The text is reproduced as written, never paraphrased.
export const aboutContent: AboutContent = {
  meta: {
    title: "Chi sono",
    description:
      "Sono Giuseppe Neglia e lavoro come sviluppatore in Deloitte, a Bari, su progetti enterprise.",
  },
  eyebrow: "Giuseppe Neglia",
  title: "Chi sono",
  intro: [
    "Sono Giuseppe Neglia e lavoro come sviluppatore in Deloitte, a Bari, su progetti enterprise. Ho una laurea in Informatica e Tecnologie per la Produzione del Software all'Università di Bari e sto finendo Gestione d'Impresa alla Mercatorum. Le ho scelte perché ognuna risponde a metà della domanda: la prima insegna come si costruisce una cosa, la seconda se valga la pena costruirla.",
    "Qualunque cosa faccia, dentro o fuori dal lavoro, finisce per assomigliare a tutte le altre: capire un problema fino in fondo, quasi sempre in un dominio che all'inizio non conosco, e costruire qualcosa che lo risolva davvero e non solo in superficie.",
  ],
  experience: {
    title: "Esperienza",
    entries: [
      {
        title: "Developer",
        organisation: "Deloitte · Bari",
        period: "giu 2025 – oggi",
        description:
          "Progetti enterprise: dai requisiti del cliente al software, come analyst e come sviluppatore.",
      },
      {
        title: "Sviluppatore web, in proprio",
        organisation: "Puglia",
        period: "2021 – oggi",
        description:
          "Web app, siti e app mobile su commissione: React e TypeScript davanti, Node e Supabase dietro, Vercel o Railway per la pubblicazione.",
      },
      {
        title: "Tirocinio · tracciabilità e certificazione dei capi d'abbigliamento",
        organisation: "I.co.man 2000 (BerWich) · Martina Franca",
        period: "gen – mar 2025",
        description:
          "Tesi e tirocinio: smart contract per i dati immutabili, IPFS per i documenti, un modello di riconoscimento dei tessuti e una pagina prodotto raggiungibile da QR code.",
      },
    ],
  },
  education: {
    title: "Formazione",
    entries: [
      {
        title: "Gestione d'Impresa",
        organisation: "Università Mercatorum",
        period: "lug 2025 – oggi",
        description:
          "In corso. La metà della domanda a cui l'informatica non risponde: se una cosa valga la pena di essere costruita.",
      },
      {
        title: "Informatica e Tecnologie per la Produzione del Software",
        organisation: "Università degli Studi di Bari",
        period: "set 2021 – giu 2025",
        description:
          "Laurea triennale, con una tesi su un sistema di tracciabilità della filiera tessile: dal filato al capo finito, con la certificazione di origine a ogni passaggio.",
      },
      {
        title: "Informatica e Telecomunicazioni",
        organisation: "IISS «E. Majorana» · Martina Franca",
        period: "set 2016 – lug 2021",
        description: "Diploma di istituto tecnico.",
      },
    ],
  },
};
