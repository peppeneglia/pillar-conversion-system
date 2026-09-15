export type Stage = "margine" | "valutazione" | "operativo";

/** In-page anchor (`#form`) or app route (`/lp/margine`). */
export type CtaTarget = `#${string}` | `/${string}`;

export type CtaConfig = {
  label: string;
  target: CtaTarget;
};

export type Person = {
  name: string;
  role: string;
};

/**
 * Rendered without photos: each person gets an avatar with their own initials,
 * so a testimonial with two people shows two avatars side by side.
 */
export type Testimonial = {
  id: string;
  quote: string;
  people: Person[];
  company: string;
  stages: Stage[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BeforeAfterRow = {
  before: string;
  after: string;
};

/** Column labels shared by every before/after comparison. */
export type BeforeAfterLabels = {
  before: string;
  after: string;
};

export type TrustStat = {
  value: string;
  label: string;
};

export type TrustBar = {
  title: string;
  stats: TrustStat[];
  /** Client company names, rendered as neutral text placeholders instead of logos. */
  clients: string[];
};

export type SectionTitles = {
  testimonials: string;
  faq: string;
};

export type ChoiceOption = {
  value: string;
  label: string;
};

export type ChoiceQuestion = {
  legend: string;
  options: ChoiceOption[];
};

export type LeadFormFieldKey = "fullName" | "company" | "phone" | "email";

/** Form microcopy shared by every stage; stage-specific copy lives in `StageContent.form`. */
export type LeadFormCopy = {
  fields: Record<LeadFormFieldKey, { label: string }>;
  honeypotLabel: string;
  steps: {
    activeSites: ChoiceQuestion;
    currentTools: ChoiceQuestion;
    contactLegend: string;
  };
  /** Template with `{current}` and `{total}` tokens. */
  progressLabel: string;
  nextLabel: string;
  backLabel: string;
  errors: {
    required: string;
    fullName: string;
    phone: string;
    email: string;
    choice: string;
  };
  confirmation: {
    title: string;
    body: string;
  };
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterContent = {
  disclaimer: string;
  /** Rendered only on landing pages, where `#form` exists. */
  cta: CtaConfig;
  note: string;
  links: FooterLink[];
};

export type AudienceContent = {
  title: string;
  body: string;
  bullets?: string[];
};

export type StageContent<S extends Stage = Stage> = {
  stage: S;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    /** Closing part of the headline, rendered with the accessible hero gradient. */
    headlineAccent?: string;
    subheadline: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    proofLine: string;
  };
  trustBar: TrustBar;
  beforeAfter: {
    title: string;
    rows: BeforeAfterRow[];
  };
  audience: AudienceContent;
  /** Second instance of the audience block, rendered on a different background. */
  team?: AudienceContent;
  faq: FaqItem[];
  form: {
    title: string;
    subtitle: string;
    submitLabel: string;
    privacyNote: string;
  };
};

export type DocumentStat = {
  channel: string;
  value: string;
  label: string;
};

export type DocumentStage = {
  stage: Stage;
  name: string;
  reader: string;
};

export type MeasurementRow = {
  question: string;
  metric: string;
  events: string[];
};

/** Copy for the explanatory document served at `/`. */
export type DocumentContent = {
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  lede: string;
  traffic: {
    title: string;
    body: string;
    stats: DocumentStat[];
    note: string;
  };
  stages: {
    title: string;
    criterion: string;
    items: DocumentStage[];
  };
  problem: {
    title: string;
    paragraphs: string[];
  };
  landings: {
    title: string;
    body: string;
    promiseLabel: string;
    linkLabel: string;
  };
  measurement: {
    title: string;
    body: string;
    metricLabel: string;
    eventsLabel: string;
    rows: MeasurementRow[];
    note: string;
  };
};
