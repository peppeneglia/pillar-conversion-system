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
  method: {
    title: "Come lavoro",
    paragraphs: [
      "Sui progetti enterprise la dinamica è sempre la stessa: si parte dai requisiti del cliente e si arriva al software. La parte difficile non è scrivere il codice, è capire che cosa il cliente stia davvero chiedendo, che quasi mai coincide con quello che ha scritto nel documento. Lì il problema arriva già definito, spesso male, e il lavoro vero è ridefinirlo.",
      "Uso gli strumenti di intelligenza artificiale in modo intensivo, ma con una divisione netta: le decisioni di architettura e di prodotto sono mie e le scrivo prima che venga scritta una riga di codice; l'esecuzione di dettaglio la delego. La parte più utile del mio lavoro è dire di no a quello che l'AI propone, e la conoscenza teorica serve esattamente a questo: riconoscere quando una soluzione che funziona è comunque quella sbagliata.",
      "Un esempio, e la soluzione sbagliata era la mia. Su Prevyber, una piattaforma che intercetta phishing e ingegneria sociale mentre l'attacco è in corso, avevo costruito un motore di rilevamento a regole e soglie. Provato su un vero SMS che imitava Poste, ha fallito in tutti e due i modi: non ha visto la truffa e si è insospettito di messaggi legittimi. Non era una questione di taratura, era l'impianto: un punteggio su parole non può giudicare un'intenzione. L'ho demolito e riprogettato attorno a un modello linguistico.",
    ],
  },
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
  why: {
    title: "Perché proprio questo progetto",
    paragraphs: [
      "Il vostro cliente non è uno che ama il software. Questo lo conosco da vicino: ho costruito HolidomY, un gestionale per host di affitti brevi interamente costruito attorno agli adempimenti normativi italiani, e con la mia famiglia gestisco una casa vacanza in Valle d'Itria. Stesso profilo di utente: piccola impresa, nessuna intenzione di imparare un programma, un problema che nasce fuori dal computer e che il software deve andare a prendere dove sta. Non a caso la prima testimonianza sul vostro sito è un'impresa di restauro di trulli ad Alberobello, dove quella casa vacanza si trova.",
      "Le landing sono la parte del lavoro che mi riesce meglio. Marketing, copywriting e design mi interessano, e la mia UI la esprimo meglio in una pagina che deve convincere qualcuno che in un gestionale. Per questo il ruolo non è un ripiego di posizionamento: è un match voluto.",
      "Quello che non ho è un numero. Il mio percorso non ha metriche di conversione, nessun \"da X a Y per cento\", perché le pagine che ho costruito non hanno mai avuto traffico sufficiente per testare davvero. Non voglio gonfiarlo. Quello che porto è il metodo: gli annunci letti e classificati per stadio di consapevolezza, l'ipotesi scritta prima della pagina, la metrica primaria scelta e dichiarata, i numeri tecnici misurati invece che stimati.",
      "Ed è il motivo per cui qui trovate tre pagine e non una.",
    ],
  },
};
