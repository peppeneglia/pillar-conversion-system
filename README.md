# Pillar Conversion System

Esercizio di analisi e progettazione di pagine di conversione per traffico a
pagamento: tre landing per stadio di consapevolezza, blocchi condivisi e un
documento che spiega il ragionamento.

Pillar è un gestionale per imprese edili. Il suo traffico a pagamento arriva da
due canali con formati diversi, video su Meta e annunci su Google, e finisce su
una sola pagina. Chi clicca però non è una persona sola: c'è chi non ha ancora
formulato il problema, chi confronta gestionali dopo averne già provato uno e
chi il gestionale lo userà ma non lo compra. Il messaggio che convince uno è
rumore per gli altri due.

Questo progetto separa quel traffico in tre stadi e dà a ciascuno una landing
con la stessa struttura e contenuti diversi, poi definisce cosa misurare per
capire se la separazione funziona.

## Le tre landing

| Stadio | Chi legge | Promessa dell'hero |
| --- | --- | --- |
| `/lp/margine` | Decide, ma non ha ancora cercato una soluzione. Sa quanto fattura, non quanto guadagna. | Sai quanto fatturi. Sai quanto guadagni? |
| `/lp/valutazione` | Decide e sta già confrontando gestionali, dopo averne provato almeno uno. | Hai già provato un gestionale. Questa volta parti dai numeri. |
| `/lp/operativo` | Non decide l'acquisto, ma vive il problema ogni giorno tra cantiere e ufficio. | Le bolle le raccogli tu. Trascriverle non è il tuo lavoro. |

Ogni landing monta gli stessi blocchi nello stesso ordine: hero con le cifre di
fiducia, confronto prima e dopo, sezione dedicata al lettore, testimonianze
filtrate per stadio, domande frequenti e form. Le CTA cambiano ordine in base a
chi decide: nella landing operativa la prima azione è capire come funziona, non
prenotare una demo.

## Le pagine

- `/` è il documento: canali, stadi, il problema della pagina unica, le tre
  promesse e cinque domande di misura, ciascuna con una sola metrica primaria,
  la sua lettura e gli eventi che la alimentano.
- `/progetto` racconta come è costruito e cosa resta aperto.
- `/chi-sono` presenta chi ha fatto il progetto, il metodo e il perché.
- `/preview` mostra il design system: token, primitive e blocchi con tutti gli
  stati.

## Come è costruito

- **Contenuto tipizzato, separato dai componenti.** Tutto il testo vive in
  dizionari TypeScript in italiano e in inglese: se una frase manca in una
  lingua, il progetto non compila. Le testimonianze restano nella lingua
  originale perché sono dichiarazioni reali, riportate parola per parola.
- **Lingua e tema decisi dal server.** Le scelte vengono salvate in un cookie e
  applicate al primo render, senza cambio a schermo. Italiano e tema chiaro sono
  i valori di partenza.
- **Form a step o breve.** Il form a step è il default; `?form=single` mostra
  la variante corta. La variante è risolta dal server, così il confronto tra le
  due può partire dallo stesso URL della campagna.
- **Eventi di conversione first-party.** `page_view`, `cta_click`, `form_view`,
  `form_start`, `form_step`, `form_submit` e `scroll_depth` sono definiti nel
  codice con i parametri UTM della sessione e scritti in console. Nessuno script
  di terze parti, nessun dato inviato da nessuna parte.
- **Accessibilità come vincolo.** Contrasti conformi a WCAG AA, ogni elemento
  interattivo raggiungibile da tastiera con stati visibili e area di tocco di
  almeno 44 pixel. Un solo `h1` per pagina, landmark e label su ogni campo.
- **Nessun dato inventato.** Le cifre della barra di fiducia vengono dal sito di
  Pillar e le testimonianze sono citate con nome e azienda, senza foto.

## Stack

Next.js 16 con App Router, React 19, TypeScript in modalità strict, Tailwind 4
con i token di brand in CSS. Nessuna dipendenza aggiunta oltre al template.

## Avvio

```
npm install
npm run dev
```

`npm run serve` compila e serve la build di produzione sulla porta 3000.
`npm run lint` esegue ESLint.

## Struttura

```
src/app          rotte: documento, progetto, preview e /lp/[stage]
src/components   blocchi di pagina e primitive UI
src/content      copy tipizzato, dizionari it/en, stadi e testimonianze
src/lib          eventi, preferenze, validazione
```

## Cosa resta aperto

- Il form non invia a nessun endpoint: valida e mostra la conferma.
- Gli eventi non sono collegati a uno strumento di analisi.
- Le tre landing non sono mai state messe in prova su traffico reale.

---

Concept non ufficiale a scopo di portfolio. Non affiliato a Pillar Srl. Tutte
le pagine sono servite con `noindex, nofollow`.
