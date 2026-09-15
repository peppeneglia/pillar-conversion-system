# Pillar Conversion System

Progetto personale non commissionato, a scopo di portfolio. Non affiliato a Pillar Srl.

## Regole non negoziabili
- Tutte le pagine servite con `noindex, nofollow`
- Nessuna foto dei testimonial: citazioni con nome e azienda, avatar con iniziali
- Mobile-first: si scrive il mobile, si sale con i breakpoint
- Nessuno script di terze parti, nessun font caricato da CDN esterna
- Base tipografica 16px, mai testo sotto 12px
- Nessun dato inventato: numeri e citazioni solo se presenti nel contenuto fornito

## Stack
Next.js 16.3.5 App Router, React 19.2.8, TypeScript 5.9.3, Tailwind 4.3.3.
Ambiente Windows/PowerShell 5: niente chaining con `&&`.

## Struttura
- `src/app` rotte: `/` documento, `/lp/[stage]` landing
- `src/components/blocks` blocchi di pagina
- `src/components/ui` primitive
- `src/content` copy tipizzato, separato dai componenti
- `src/lib` utility ed eventi
- `docs` teardown e note

## Standard di codice
- TypeScript strict. Nessun `any`, nessun `@ts-ignore`, nessun `eslint-disable` senza motivazione scritta nel codice
- Props tipizzate esplicitamente. Nessuna prop obbligatoria senza default dove ha senso un default
- Server Components per default; `"use client"` solo dove serve stato o eventi
- Nessuna dipendenza nuova senza chiedere prima
- HTML semantico: un solo `h1` per pagina, gerarchia dei titoli corretta, landmark (`header`, `main`, `footer`), `label` associata a ogni input
- Ogni elemento interattivo ha stati default, hover, `focus-visible`, active, disabled. Target touch minimo 44x44px
- Contrasto testo/sfondo conforme WCAG AA
- `medium-gray` (#a8a8a8) non raggiunge il contrasto WCAG AA su sfondo chiaro: usarlo solo per bordi ed elementi decorativi, mai per testo. Per il testo secondario usare `muted-foreground`
- `--gradient-text-hero` non si usa per il testo: le tinte chiare (#fc899a, #ffc1b5) non raggiungono il contrasto WCAG AA su #fafafa. Per il testo usare `--gradient-text-hero-accessible`, con le stesse tonalità scurite (ogni tappa almeno 4.5:1 su #fafafa); l'originale resta disponibile per superfici decorative
- Immagini con `alt` descrittivo e distinto per ciascuna; `next/image` dove possibile

## Sicurezza
- Nessun segreto nel repo. Variabili d'ambiente in `.env.local`, mai committato
- Nessun `dangerouslySetInnerHTML`
- Link esterni con `rel="noopener noreferrer"`
- Input del form validati lato client e sanificati prima di qualunque uso

## Commit
- Conventional Commits, in inglese, imperativo presente, minuscolo dopo il tipo
- Un commit per unità logica di lavoro, mai un commit gigante a fine sessione
- Autore: peppeneglia. NON aggiungere trailer `Co-Authored-By`, non firmare i commit come AI, non menzionare Claude nel messaggio o nel corpo del commit

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
