import type { DocumentContent } from "./types";

// Only numbers provided in the brief: Meta 49 video placements, Google 39 ads.
export const documentContent: DocumentContent = {
  meta: {
    title: "Pillar Conversion System — concept non ufficiale",
    description:
      "Tre landing per tre stadi di consapevolezza del traffico a pagamento, con gli eventi per misurarle.",
  },
  eyebrow: "Concept di conversione",
  title: "Un solo traffico, tre lettori diversi",
  lede: [
    "Il traffico a pagamento porta sulla stessa pagina persone che sanno cose diverse e hanno ruoli diversi.",
    "Questo concept le separa in tre stadi di consapevolezza, dà a ciascuno una landing e definisce cosa misurare per capire se funziona.",
  ],
  traffic: {
    title: "Come si spende il traffico a pagamento",
    body: "Il traffico a pagamento arriva da due canali con formati diversi: video su Meta, annunci su Google.",
    stats: [
      { channel: "Meta", value: "49", label: "posizioni video" },
      { channel: "Google", value: "39", label: "annunci" },
    ],
    note: [
      "Chi guarda un video mentre scorre non sta cercando un gestionale. Chi scrive una ricerca spesso sì.",
      "Formati diversi intercettano persone in momenti diversi, e il clic non dice in quale momento si trovano.",
    ],
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
    body: "Una domanda alla volta, con una sola metrica primaria. Sotto ogni metrica c'è la lettura: cosa significherebbe un numero alto o basso, e quale decisione ne segue.",
    metricLabel: "Metrica primaria",
    readingLabel: "Come si legge",
    eventsLabel: "Eventi che la alimentano",
    rows: [
      {
        question: "Separare gli stadi migliora la conversione?",
        metric: "Invii del form su visualizzazioni di pagina, per stadio e per sorgente UTM.",
        reading: "Se una landing converte più delle altre a parità di sorgente, il messaggio giusto per quello stadio esiste e va portato anche sulle altre. Se convertono tutte uguale, la separazione non sta pagando e il problema è altrove.",
        events: ["page_view", "form_submit"],
      },
      {
        question: "La promessa dell'hero trattiene chi arriva?",
        metric: "Clic sulle CTA dell'hero su visualizzazioni di pagina.",
        reading: "Pochi clic con molte visite significa che la promessa in apertura non parla a chi arriva da quell'annuncio: si riscrive l'hero, non la pagina intera.",
        events: ["page_view", "cta_click"],
      },
      {
        question: "Chi arriva legge fino al form?",
        metric: "Form visti su visualizzazioni di pagina, letto insieme alla profondità di scroll.",
        reading: "Se lo scroll si ferma prima del form, il problema è la lunghezza o l'ordine dei blocchi. Se il form si vede ma non parte, il problema è il form.",
        events: ["form_view", "scroll_depth"],
      },
      {
        question: "Il form a step converte più del form breve?",
        metric: "Invii del form su form iniziati, per variante.",
        reading: "Gli step chiedono meno in una volta sola, ma aggiungono passaggi. Il confronto dice quale delle due cose pesa di più, e a quale passo si perde la gente.",
        events: ["form_start", "form_step", "form_submit"],
      },
      {
        question: "Chi non decide porta la demo a chi decide?",
        metric: "Invii del form sui clic della CTA principale nella landing operativo.",
        reading: "Chi legge non firma il contratto. Se guarda il confronto ma non richiede la demo, va cambiato ciò che gli chiediamo di fare: passare la pagina a chi decide, invece di prenotare lui.",
        events: ["cta_click", "form_submit"],
      },
    ],
  },
};
