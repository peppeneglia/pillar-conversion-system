import type { DocumentContent } from "./types";

// Only numbers provided in the brief: Meta ~47 video placements, Google 39 ads of which 19 text.
export const documentContent: DocumentContent = {
  meta: {
    title: "Pillar Conversion System — concept non ufficiale",
    description:
      "Tre landing per tre stadi di consapevolezza del traffico a pagamento, con gli eventi per misurarle.",
  },
  eyebrow: "Concept di conversione",
  title: "Un solo traffico, tre lettori diversi",
  lede: "Il traffico a pagamento porta sulla stessa pagina persone che sanno cose diverse e hanno ruoli diversi. Questo concept le separa in tre stadi di consapevolezza, dà a ciascuno una landing e definisce cosa misurare per capire se funziona.",
  traffic: {
    title: "Come si spende il traffico a pagamento",
    body: "Il traffico a pagamento arriva da due canali con formati diversi: video su Meta, annunci su Google.",
    stats: [
      { channel: "Meta", value: "~47", label: "posizioni video" },
      { channel: "Google", value: "39", label: "annunci, di cui 19 di testo" },
    ],
    note: "Chi guarda un video mentre scorre non sta cercando un gestionale. Chi scrive una ricerca spesso sì. Formati diversi intercettano persone in momenti diversi, e il clic non dice in quale momento si trovano.",
  },
  stages: {
    title: "Tre stadi di consapevolezza",
    criterion:
      "Gli stadi non sono separati per settore o per dimensione dell'impresa, ma da due domande: chi arriva ha già cercato una soluzione? È lui a decidere l'acquisto?",
    items: [
      {
        stage: "margine",
        name: "Margine",
        reader: "Decide, ma non ha ancora cercato una soluzione. Sa quanto fattura, non quanto guadagna: il problema c'è, ma non è ancora formulato come bisogno di un software.",
      },
      {
        stage: "valutazione",
        name: "Valutazione",
        reader: "Decide e sta già cercando. Ha provato almeno un gestionale e arriva con una lista di cose che non hanno funzionato: vuole sapere perché questa volta sarà diverso.",
      },
      {
        stage: "operativo",
        name: "Operativo",
        reader: "Non decide l'acquisto, ma vive il problema ogni giorno tra cantiere e ufficio. Può portare la demo a chi decide, se capisce che il lavoro manuale sparisce.",
      },
    ],
  },
  problem: {
    title: "Oggi: una pagina per tre stadi",
    paragraphs: [
      "Oggi esiste una sola pagina di destinazione per tutti e tre gli stadi. Deve parlare nello stesso momento a chi non ha ancora formulato il problema, a chi confronta gestionali e a chi non firma il contratto.",
      "Il messaggio che convince uno è rumore per gli altri due. Chi valuta cerca differenze rispetto a quello che ha già provato; chi non decide cerca un motivo per coinvolgere il titolare; chi non ha ancora cercato ha bisogno prima di riconoscere il problema.",
    ],
  },
  landings: {
    title: "Tre landing, tre promesse",
    body: "Stesso design system, stessi blocchi, contenuto diverso. Ogni landing apre con la promessa rivolta al suo lettore e ordina le CTA in base a chi decide.",
    promiseLabel: "Promessa",
    linkLabel: "Apri la landing",
  },
  measurement: {
    title: "Cosa misurerei",
    body: "Ogni domanda ha una sola metrica primaria. Gli eventi sono già definiti nel codice.",
    metricLabel: "Metrica primaria",
    eventsLabel: "Eventi",
    rows: [
      {
        question: "Separare gli stadi migliora la conversione?",
        metric: "Invii del form su visualizzazioni di pagina, per stadio e per sorgente UTM.",
        events: ["page_view", "form_submit"],
      },
      {
        question: "La promessa dell'hero trattiene chi arriva?",
        metric: "Clic sulle CTA dell'hero su visualizzazioni di pagina.",
        events: ["page_view", "cta_click"],
      },
      {
        question: "Chi arriva legge fino al form?",
        metric: "Form visti su visualizzazioni di pagina, letto insieme alla profondità di scroll.",
        events: ["form_view", "scroll_depth"],
      },
      {
        question: "Il form a step converte più del form breve?",
        metric: "Invii del form su form iniziati, per variante.",
        events: ["form_start", "form_step", "form_submit"],
      },
      {
        question: "Chi non decide porta la demo a chi decide?",
        metric: "Invii del form sui clic della CTA principale nella landing operativo.",
        events: ["cta_click", "form_submit"],
      },
    ],
    note: "Nessuno strumento di analisi è collegato: gli eventi finiscono in console e nel pannello di debug, attivabile con ?debug=1.",
  },
};
