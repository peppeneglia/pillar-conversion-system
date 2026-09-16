import type { SiteContent } from "../types";

// Quotes stay in Italian: they are verbatim testimonials and translating them
// would misquote the people who said them. Roles and labels are translated.
const privacyNote = "Your details are only used to arrange the demo. No newsletter.";

export const en: SiteContent = {
  ui: {
    homeLink: "Pillar Conversion System, go to the home page",
    wordmark: "Conversion System",
    footerNav: "Project sections",
    localeLabel: "Language",
    localeNames: { it: "Italiano", en: "English" },
    themeLabel: "Theme",
    themeNames: { light: "Light", dark: "Dark" },
  },
  trustBar: {
    // Figures published by Pillar on pillar.it, read on 14/09/2026. Not independently verified.
    title: "Construction firms using Pillar every day",
    stats: [
      { value: "700+", label: "active firms" },
      { value: "2000+", label: "projects managed" },
      { value: "14h", label: "saved per week" },
      { value: "4.8/5", label: "average rating" },
    ],
    clients: ["Serra SRL", "B.C. Servizi", "MAC SRL", "Euroservice"],
  },
  beforeAfterLabels: {
    before: "Today",
    after: "With Pillar",
  },
  sectionTitles: {
    testimonials: "What construction firms using Pillar say",
    faq: "Frequently asked questions",
  },
  leadForm: {
    fields: {
      fullName: { label: "Full name" },
      company: { label: "Company" },
      phone: { label: "Phone" },
      email: { label: "Email" },
    },
    honeypotLabel: "Leave this field empty",
    steps: {
      activeSites: {
        legend: "How many active sites do you run?",
        options: [
          { value: "1-3", label: "1-3" },
          { value: "4-10", label: "4-10" },
          { value: "oltre-10", label: "More than 10" },
        ],
      },
      currentTools: {
        legend: "What do you use today?",
        options: [
          { value: "carta", label: "Paper" },
          { value: "excel", label: "Excel" },
          { value: "altro-gestionale", label: "Another system" },
        ],
      },
      contactLegend: "Your contact details",
    },
    progressLabel: "Step {current} of {total}",
    backLabel: "Back",
    errors: {
      required: "This field is required.",
      fullName: "Enter your first and last name.",
      phone: "Enter a valid phone number.",
      email: "Enter a valid email address.",
      choice: "Select an option to continue.",
    },
    confirmation: {
      title: "Request sent",
      body: "We will get back to you to set up the video call.",
    },
  },
  headerCta: { label: "Book a demo", target: "#form" },
  footer: {
    description:
      "A conversion concept: three landing pages for three awareness stages of paid traffic, with the events to measure them.",
    productDescription:
      "Pillar brings cash, invoices, quotes and sites into one place, and shows the margin of every job while the work is still open.",
    disclaimer:
      "Unofficial concept made as portfolio work. Not affiliated with Pillar Srl.",
    cta: { label: "Book a demo", target: "#form" },
    note: "Unofficial concept made as portfolio work. Not affiliated with Pillar Srl.",
    // First row: the three project pages. Second row: the three landings.
    links: [
      { label: "Home", href: "/" },
      { label: "Project", href: "/progetto" },
      { label: "Design system", href: "/preview" },
      { label: "Margin landing", href: "/lp/margine" },
      { label: "Software landing", href: "/lp/valutazione" },
      { label: "Field work landing", href: "/lp/operativo" },
    ],
  },
  notFound: {
    title: "Page not found",
    body: "This address does not match any page of the concept.",
    cta: { label: "Back to the document", target: "/" },
  },
  project: {
    meta: {
      title: "Pillar: the project",
      description:
        "How the Pillar Conversion System is built: why three landing pages, what the repository holds, and what is still open.",
    },
    eyebrow: "The project",
    title: "What the Pillar Conversion System is",
    lede: "A conversion optimisation exercise, built end to end: copy, design system, pages and the tools to measure them. Pillar did not commission it and is not affiliated with it.",
    sections: [
      {
        title: "Where it starts",
        paragraphs: [
          "Pillar buys traffic on two channels with different formats, video on Meta and ads on Google, and sends all of it to a single landing page.",
          "But the person clicking is not one person: some have not framed the problem yet, some are comparing systems after trying one, and some will use the software without buying it. The message that convinces one is noise for the other two.",
        ],
      },
      {
        title: "What it proposes",
        paragraphs: [
          "Three landing pages, one per awareness stage, with the same block structure and different content: hero promise, before and after comparison, a section addressed to the reader, filtered testimonials, frequently asked questions and a form.",
          "The calls to action change order according to who decides: on the field work landing the first action is to see how it works, not to book a demo, because the reader does not sign the contract.",
        ],
      },
      {
        title: "How it is built",
        paragraphs: [
          "All copy lives in typed dictionaries kept apart from the components, in Italian and English: if a sentence is missing in one language, the project does not compile. Quotes stay in their original language, because they are real statements.",
          "Language and theme are choices stored in a cookie and applied by the server, so nothing flashes on load. Italian and the light theme are the starting values, whatever the system asks for.",
          "Conversion events are defined in the code and written to the console: no third-party scripts, no data sent anywhere. The form validates and confirms, but sends nothing.",
        ],
      },
      {
        title: "Rules I set myself",
        paragraphs: [
          "No invented numbers and no invented quotes: the figures come from the Pillar website and the testimonials are reproduced word for word.",
          "Every page is served with noindex and nofollow, so the concept never shows up in search results in place of the real site.",
          "AA contrast throughout, every interactive element reachable by keyboard, and a touch target of at least 44 pixels.",
        ],
      },
    ],
    stack: {
      title: "Stack",
      items: [
        { label: "Framework", value: "Next.js 16, App Router, React 19" },
        { label: "Language", value: "TypeScript in strict mode" },
        { label: "Styling", value: "Tailwind 4, brand tokens in CSS" },
        { label: "Added dependencies", value: "None" },
      ],
    },
    status: {
      title: "What is still open",
      items: [
        "The form posts to no endpoint: it only shows the confirmation.",
        "The events are not connected to an analytics tool.",
        "The three landing pages have never been tried on real traffic.",
      ],
    },
  },
  document: {
    meta: {
      title: "Pillar Conversion System",
      description:
        "Three landing pages for three awareness stages of paid traffic, with the events to measure them.",
    },
    eyebrow: "Conversion concept",
    title: "One stream of traffic, three different readers",
    lede: [
      "Paid traffic sends people who know different things and hold different roles to the same page.",
      "This concept splits them into three awareness stages, gives each one a landing page, and defines what to measure to tell whether it works.",
    ],
    traffic: {
      title: "How the paid traffic is spent",
      body: "Paid traffic comes from two channels with different formats: video on Meta, ads on Google.",
      stats: [
        { channel: "Meta", value: "49", label: "video placements" },
        { channel: "Google", value: "39", label: "ads" },
      ],
      note: [
        "Someone watching a video while scrolling is not looking for construction software. Someone typing a search often is.",
        "Different formats catch people at different moments, and the click does not say which moment that is.",
      ],
    },
    stages: {
      title: "Three awareness stages",
      criterion:
        "The stages are not split by sector or company size, but by two questions: has this reader already looked for a solution, and do they decide the purchase?",
      items: [
        {
          stage: "margine",
          name: "Margin",
          reader:
            "Decides, but has not started looking yet. Knows the revenue, not the profit: the problem is there, but it is not framed as a need for software.",
        },
        {
          stage: "valutazione",
          name: "Evaluation",
          reader:
            "Decides and is already looking. Has tried at least one system and arrives with a list of things that did not work: wants to know why this time will be different.",
        },
        {
          stage: "operativo",
          name: "Field work",
          reader:
            "Does not sign the contract, but lives the problem every day between the site and the office. Can bring the demo to whoever decides, if the manual work clearly disappears.",
        },
      ],
    },
    problem: {
      title: "Today: one page for three stages",
      paragraphs: [
        "Today a single landing page serves all three stages. It has to speak at the same time to someone who has not framed the problem yet, to someone comparing systems, and to someone who does not sign the contract.",
        "The message that convinces one reader is noise for the other two. The evaluator looks for differences from what they already tried; the person who does not decide looks for a reason to involve the owner; the one who has not started looking needs to recognise the problem first.",
      ],
    },
    landings: {
      title: "Three landing pages, three promises",
      body: "Same design system, same blocks, different content. Each landing opens with the promise aimed at its reader and orders the calls to action by who decides.",
      promiseLabel: "Promise",
      linkLabel: "Open the landing page",
    },
    measurement: {
      title: "What I would measure",
      body: "One question at a time, with a single primary metric. Under each metric there is the reading: what a high or low number would mean, and which decision follows.",
      metricLabel: "Primary metric",
      readingLabel: "How to read it",
      eventsLabel: "Events behind it",
      rows: [
        {
          question: "Does splitting the stages improve conversion?",
          metric: "Form submissions over page views, by stage and by UTM source.",
          reading:
            "If one landing converts better than the others from the same source, the right message for that stage exists and should move to the others too. If they all convert the same, the split is not paying off and the problem is elsewhere.",
          events: ["page_view", "form_submit"],
        },
        {
          question: "Does the hero promise hold the reader?",
          metric: "Clicks on the hero calls to action over page views.",
          reading:
            "Few clicks with many visits means the opening promise does not speak to whoever arrives from that ad: rewrite the hero, not the whole page.",
          events: ["page_view", "cta_click"],
        },
        {
          question: "Do people read as far as the form?",
          metric: "Forms seen over page views, read together with scroll depth.",
          reading:
            "If scrolling stops before the form, the problem is the length or the order of the blocks. If the form is seen but never started, the problem is the form.",
          events: ["form_view", "scroll_depth"],
        },
        {
          question: "Does the step form convert better than the short one?",
          metric: "Form submissions over forms started, by variant.",
          reading:
            "Steps ask for less at once but add passages. The comparison says which of the two weighs more, and at which step people drop out.",
          events: ["form_start", "form_step", "form_submit"],
        },
        {
          question: "Does the reader who cannot decide pass the demo on?",
          metric: "Form submissions over clicks on the main call to action of the field work landing.",
          reading:
            "The reader does not sign the contract. If they look at the comparison but never request the demo, what we ask them to do has to change: pass the page to whoever decides, instead of booking it themselves.",
          events: ["cta_click", "form_submit"],
        },
      ],
    },
  },
  stages: {
    margine: {
      stage: "margine",
      meta: {
        title: "Pillar: site margin",
        description:
          "The margin of every site in real time. Real costs, measured hours, deviations visible while the work is still open.",
      },
      hero: {
        eyebrow: "Site margin",
        headline: "You know your revenue.",
        headlineAccent: "Do you know your profit?",
        subheadline: [
          "Pillar shows you the margin of every site while the work is open.",
          "Costs, hours, delivery notes and variations tracked in real time.",
        ],
        primaryCta: { label: "Book a demo", target: "#form" },
        secondaryCta: { label: "How it works", target: "#prima-dopo" },
        proofLine: "More than 700 construction firms use it every day",
      },
      trustBar: {
        title: "Construction firms using Pillar every day",
        stats: [
          { value: "700+", label: "active firms" },
          { value: "2000+", label: "projects managed" },
          { value: "14h", label: "saved per week" },
          { value: "4.8/5", label: "average rating" },
        ],
        clients: ["Serra SRL", "B.C. Servizi", "MAC SRL", "Euroservice"],
      },
      beforeAfter: {
        title: "The margin, before and after",
        rows: [
          {
            before: "You find out the margin once the work is closed, when you can no longer act",
            after: "You see it while the site is open, site by site",
          },
          {
            before: "You estimate costs by eye and take the hours as people report them",
            after: "Real costs and measured hours, updated every day",
          },
          {
            before: "A profitable site can drain your cash and you do not notice",
            after: "Profitability and cash flow, separate and visible",
          },
        ],
      },
      audience: {
        title: "Most construction firms know their revenue, not their profit",
        body: "This is not an accounting problem. The numbers arrive once the decisions have already been made.",
        bullets: [
          "Which site earns and which one does not",
          "Where the quote drifted away from the final cost",
          "When the budget is about to overrun",
        ],
      },
      faq: [
        {
          question: "Can I see costs and margins in real time?",
          answer: "Yes. Costs, revenue, margins and progress updated for every site.",
        },
        {
          question: "How does the data arrive without manual entry?",
          answer:
            "Delivery notes and site reports come in from WhatsApp, while bank movements and invoices are linked to the jobs.",
        },
        {
          question: "Does it replace the accountant's software?",
          answer:
            "No. It collects and orders the site data, which you hand over ready to use.",
        },
        {
          question: "How much does it cost?",
          answer:
            "A monthly subscription, priced during the demo according to the size of the firm.",
        },
      ],
      form: {
        title: "Tell us about your site",
        subtitle: "A 30 minute video call, no commitment.",
        submitLabel: "Book the demo",
        privacyNote,
      },
    },
    valutazione: {
      stage: "valutazione",
      meta: {
        title: "Pillar: software for construction firms",
        description:
          "Cash, invoices, quotes and jobs in one place. See the margin of every site while the work is still open.",
      },
      hero: {
        eyebrow: "Software for construction firms",
        headline: "You have tried a system before.",
        headlineAccent: "This time start from the numbers.",
        subheadline: [
          "Pillar connects cash, invoices and sites.",
          "You see the margin of every job while the work is still open, not at the end.",
        ],
        primaryCta: { label: "Book a demo", target: "#form" },
        secondaryCta: { label: "How it works", target: "#prima-dopo" },
        proofLine: "More than 700 construction firms use it every day",
      },
      trustBar: {
        title: "Construction firms using Pillar every day",
        stats: [
          { value: "700+", label: "active firms" },
          { value: "2000+", label: "projects managed" },
          { value: "14h", label: "saved per week" },
          { value: "4.8/5", label: "average rating" },
        ],
        clients: ["Serra SRL", "B.C. Servizi", "MAC SRL", "Euroservice"],
      },
      beforeAfter: {
        title: "Why the other systems stopped short",
        rows: [
          {
            before: "The system asks for everything to be typed in, and nobody does it",
            after: "Delivery notes and site reports arrive from WhatsApp, with no app to install",
          },
          {
            before: "It starts from the bill of quantities, which a private client does not understand",
            after: "A quick quote with AI, or your own bill of quantities uploaded: your choice",
          },
          {
            before: "It covers half the work, and you need two more tools",
            after: "Cash, invoices, quotes and jobs in the same place",
          },
        ],
      },
      audience: {
        title: "Anyone looking for a new system already has a list of things that did not work",
        body: "The question is not how many features it has. It is whether you will actually use it, and whether someone answers when it gets stuck.",
        bullets: [
          "Who has to use it: owner, office, site manager, workers",
          "How long it takes before you are up and running",
          "What happens to the data you already have",
        ],
      },
      faq: [
        {
          question: "How long does it take to get started?",
          answer:
            "The setup is done together and you are running within hours, with support over the first weeks.",
        },
        {
          question: "Does it replace the accountant's software?",
          answer:
            "No. It collects and orders the site data, which you hand over ready to use.",
        },
        {
          question: "Does it work for a small firm too?",
          answer:
            "Yes. It is built for firms running several sites, whether they are growing or already structured.",
        },
        {
          question: "How much does it cost?",
          answer:
            "A monthly subscription, priced during the demo according to the size of the firm.",
        },
      ],
      form: {
        title: "Let's see whether Pillar solves what the others did not",
        subtitle: "A 30 minute video call, no commitment.",
        submitLabel: "Book the demo",
        privacyNote,
      },
    },
    operativo: {
      stage: "operativo",
      meta: {
        title: "Pillar: delivery notes, site reports and hours",
        description:
          "A photo on WhatsApp and the delivery note is filed. A voice message and the site report is written. No app to install.",
      },
      hero: {
        eyebrow: "Delivery notes, site reports and hours",
        headline: "You collect the delivery notes.",
        headlineAccent: "Typing them up is not your job.",
        subheadline: [
          "A photo on WhatsApp and the delivery note is filed under the right site.",
          "A voice message and the site report is written. No app to install, for anyone.",
        ],
        primaryCta: { label: "See how it works", target: "#prima-dopo" },
        secondaryCta: { label: "Book a demo", target: "#form" },
        proofLine: "More than 700 construction firms use it every day",
      },
      trustBar: {
        title: "Construction firms using Pillar every day",
        stats: [
          { value: "700+", label: "active firms" },
          { value: "2000+", label: "projects managed" },
          { value: "14h", label: "saved per week" },
          { value: "4.8/5", label: "average rating" },
        ],
        clients: ["Serra SRL", "B.C. Servizi", "MAC SRL", "Euroservice"],
      },
      beforeAfter: {
        title: "One working day, before and after",
        rows: [
          {
            before: "Delivery notes stay in the van and all turn up at the end of the month",
            after: "A photo from the site, filed straight away under the right job",
          },
          {
            before: "You ask people for their hours and copy them out in the evening",
            after: "A voice message on WhatsApp, and the site report is structured automatically",
          },
          {
            before: "The office calls you ten times to ask where things stand",
            after: "Who is on site and what they did is visible without a phone call",
          },
        ],
      },
      audience: {
        title: "Whoever types up delivery notes in the evening is not the person who bought the software",
        body: "The time lost between the site and the office appears in no quote. But it is the time you take home with you.",
        bullets: [
          "Delivery notes that do not get lost",
          "Hours measured instead of estimated",
          "Site documents always where they are needed",
        ],
      },
      team: {
        title: "And your workers?",
        body: "They do not have to install anything, learn anything or sign up. They send a photo or a voice message on WhatsApp, exactly as they already do.",
      },
      faq: [
        {
          question: "Do the workers have to install an app?",
          answer: "No. They use WhatsApp, which is already on their phone.",
        },
        {
          question: "Is training needed?",
          answer:
            "The setup is done together and you are running within hours, with support over the first weeks.",
        },
        {
          question: "Does everyone see everything?",
          answer:
            "No. Owner, office, site manager and workers have different access: each one sees what they need.",
        },
      ],
      form: {
        title: "Show Pillar to whoever decides",
        subtitle: "A 30 minute video call. You can join too.",
        submitLabel: "Book the demo",
        privacyNote,
      },
    },
  },
  testimonials: [
    {
      id: "serra-srl",
      quote:
        "Ora abbiamo visibilità immediata sulla marginalità per cantiere e decisioni strategiche basate sui dati.",
      people: [
        { name: "Francesco Serra", role: "Founder and CEO" },
        { name: "Gianpaolo Piepoli", role: "Civil engineer" },
      ],
      company: "Serra SRL",
      stages: ["margine"],
    },
    {
      id: "bc-servizi",
      quote:
        "Da 1-2 giorni a settimana siamo passati a circa 30 minuti al giorno per la contabilità cantieri.",
      people: [{ name: "Carlo Bronzi", role: "Engineer" }],
      company: "B.C. Servizi",
      stages: ["operativo"],
    },
    {
      id: "mac-srl",
      quote:
        "Abbiamo sostituito 3 gestionali con uno solo e ridotto drasticamente i tempi di preventivazione.",
      people: [
        { name: "Federico Malagoli", role: "Co-founder" },
        { name: "Marco Malagoli", role: "Co-founder" },
      ],
      company: "MAC SRL",
      stages: ["valutazione"],
    },
    {
      id: "euroservice",
      quote:
        "Dopo due gestionali falliti, ora vediamo in tempo reale quali cantieri drenano liquidità.",
      people: [{ name: "Cristian Bertaggia", role: "Managing director" }],
      company: "Euroservice",
      stages: ["valutazione"],
    },
    {
      id: "euroservice-case-study",
      quote:
        "Abbiamo molti cantieri che economicamente sono in positivo ma finanziariamente sono in negativo. Il fatto di esserne consapevoli e di riuscire a fare qualche previsione per il mese dopo: questo è quello che cercavamo.",
      people: [{ name: "Cristian Bertaggia", role: "Managing director" }],
      company: "Euroservice",
      stages: ["margine"],
    },
    {
      id: "bc-servizi-case-study",
      quote:
        "Il tempo che ho liberato lo spendo nei controlli in cantiere, nelle richieste di preventivi, nella verifica delle fatture. Prima ero su tante cose un po' sulla fiducia.",
      people: [{ name: "Carlo Bronzi", role: "Owner" }],
      company: "B.C. Servizi",
      stages: ["operativo"],
    },
    {
      id: "mac-srl-case-study",
      quote:
        "Con i gestionali edili mi sono sempre trovato un po' in difficoltà. Pagare un abbonamento per una cosa che non ti risolve tutti i problemi... alla fine devi avere tre gestionali.",
      people: [{ name: "Marco Malagoli", role: "Co-founder" }],
      company: "Modena Art Construction",
      stages: ["valutazione"],
    },
  ],
};
