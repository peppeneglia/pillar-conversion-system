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

export type TrustBarItem = {
  label: string;
};

export type TrustBar = {
  title: string;
  items: TrustBarItem[];
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterContent = {
  disclaimer: string;
  note: string;
  links: FooterLink[];
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
  audience: {
    title: string;
    body: string;
    bullets: string[];
  };
  faq: FaqItem[];
  form: {
    title: string;
    subtitle: string;
    submitLabel: string;
    privacyNote: string;
  };
};
