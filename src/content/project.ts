import type { ProjectContent } from "./types";

export const projectContent: ProjectContent = {
  meta: {
    title: "Pillar: il progetto",
    description:
      "Come è fatto il Pillar Conversion System: perché tre landing, cosa contiene il repository e cosa resta da fare.",
  },
  eyebrow: "Il progetto",
  title: "Che cos'è il Pillar Conversion System",
  lede: "Un esercizio di ottimizzazione della conversione, costruito per intero: contenuto, design system, pagine e strumenti di misura. Non è stato commissionato da Pillar e non è affiliato all'azienda.",
  sections: [
    {
      title: "Da dove nasce",
      paragraphs: [
        "Pillar porta traffico a pagamento da due canali con formati diversi, video su Meta e annunci su Google, e lo fa arrivare su una sola pagina di destinazione.",
        "Chi clicca però non è una persona sola: c'è chi non ha ancora formulato il problema, chi sta confrontando gestionali dopo averne già provato uno, e chi il gestionale lo userà ma non lo compra. Il messaggio che convince uno è rumore per gli altri due.",
      ],
    },
    {
      title: "Cosa propone",
      paragraphs: [
        "Tre landing, una per stadio di consapevolezza, con la stessa struttura di blocchi e contenuti diversi: promessa dell'hero, confronto prima e dopo, sezione dedicata al lettore, testimonianze filtrate, domande frequenti e form.",
        "Le CTA cambiano ordine in base a chi decide: nella landing operativa la prima azione è capire come funziona, non prenotare una demo, perché chi legge non firma il contratto.",
      ],
    },
    {
      title: "Come è costruito",
      paragraphs: [
        "Tutto il testo vive in dizionari tipizzati separati dai componenti, in italiano e in inglese: se una frase manca in una lingua, il progetto non compila. Le citazioni restano nella lingua originale, perché sono dichiarazioni reali.",
        "Lingua e tema sono scelte salvate in un cookie e applicate dal server, quindi al caricamento non si vede il cambio. L'italiano e il tema chiaro sono i valori di partenza, qualunque sia l'impostazione del sistema.",
        "Gli eventi di conversione sono definiti nel codice e scritti in console: nessuno script di terze parti, nessun dato inviato da nessuna parte. Il form valida e conferma, ma non invia.",
      ],
    },
    {
      title: "Regole che mi sono dato",
      paragraphs: [
        "Nessun numero e nessuna citazione inventati: le cifre vengono dal sito di Pillar e le testimonianze sono riportate parola per parola.",
        "Tutte le pagine sono servite con noindex e nofollow, così il concept non finisce nei motori di ricerca al posto del sito vero.",
        "Contrasti conformi ad AA, ogni elemento interattivo raggiungibile da tastiera e area di tocco di almeno 44 pixel.",
      ],
    },
  ],
  stack: {
    title: "Stack",
    items: [
      { label: "Framework", value: "Next.js 16, App Router, React 19" },
      { label: "Linguaggio", value: "TypeScript in modalità strict" },
      { label: "Stile", value: "Tailwind 4, token di brand in CSS" },
      { label: "Dipendenze aggiunte", value: "Nessuna" },
    ],
  },
  status: {
    title: "Cosa resta aperto",
    items: [
      "Il form non invia a nessun endpoint: mostra solo la conferma.",
      "Gli eventi non sono collegati a uno strumento di analisi.",
      "Le tre landing non sono mai state messe in prova su traffico reale.",
    ],
  },
};
