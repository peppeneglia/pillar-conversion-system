import Image from "next/image";
import { Audience } from "@/components/blocks/Audience";
import { BeforeAfter } from "@/components/blocks/BeforeAfter";
import { Faq } from "@/components/blocks/Faq";
import { Hero } from "@/components/blocks/Hero";
import { LeadForm } from "@/components/blocks/LeadForm";
import { Testimonials } from "@/components/blocks/Testimonials";
import { TrustBar } from "@/components/blocks/TrustBar";
import { Button, type ButtonVariant } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Field } from "@/components/ui/Field";
import { Section, type SectionBackground } from "@/components/ui/Section";
import {
  beforeAfterLabels,
  leadFormCopy,
  sectionTitles,
  stageContent,
  testimonials,
  trustBar,
} from "@/content";

// Temporary page to verify blocks, design tokens and primitives on screen. Replace with the real document.

// Sample data: the "valutazione" stage (final copy) and every testimonial.
const sample = stageContent.valutazione;

type Swatch = {
  token: string;
  hex: string;
  className: string;
};

type TypeSample = {
  className: string;
  sizes: string;
};

type PreviewState = "hover" | "focus" | "active";

type StateSample = {
  label: string;
  state?: PreviewState;
  disabled?: boolean;
};

const brandColors: Swatch[] = [
  { token: "carbon-steel", hex: "#1f2227", className: "bg-carbon-steel" },
  { token: "tropical-indigo", hex: "#9079ed", className: "bg-tropical-indigo" },
  { token: "coral", hex: "#fc9090", className: "bg-coral" },
  { token: "light-gray", hex: "#e4e4e7", className: "bg-light-gray" },
  { token: "medium-gray", hex: "#a8a8a8", className: "bg-medium-gray" },
  { token: "extra-light-gray", hex: "#f3f0ec", className: "bg-extra-light-gray" },
  { token: "seasalt", hex: "#f9f9f9", className: "bg-seasalt" },
  { token: "zinc-brand", hex: "#f4f4f5", className: "bg-zinc-brand" },
  { token: "success", hex: "#10b981", className: "bg-success" },
  { token: "special-start", hex: "#9079ed", className: "bg-special-start" },
  { token: "special-end", hex: "#6c5ae6", className: "bg-special-end" },
];

const semanticColors: Swatch[] = [
  { token: "background", hex: "#fafafa", className: "bg-background" },
  { token: "foreground", hex: "#09090b", className: "bg-foreground" },
  { token: "card", hex: "#ffffff", className: "bg-card" },
  { token: "primary", hex: "#18181b", className: "bg-primary" },
  { token: "primary-foreground", hex: "#fafafa", className: "bg-primary-foreground" },
  { token: "muted", hex: "#f4f4f5", className: "bg-muted" },
  { token: "muted-foreground", hex: "#71717a", className: "bg-muted-foreground" },
  { token: "border", hex: "#e4e4e7", className: "bg-border" },
  { token: "input", hex: "#e4e4e7", className: "bg-input" },
  { token: "ring", hex: "#a1a1aa", className: "bg-ring" },
  { token: "destructive", hex: "#ef4444", className: "bg-destructive" },
];

const typeScale: TypeSample[] = [
  { className: "h1-huge", sizes: "42 → 60" },
  { className: "h1", sizes: "34 → 48" },
  { className: "h2", sizes: "28 → 40" },
  { className: "h3", sizes: "24 → 32" },
  { className: "h4", sizes: "16 → 18" },
  { className: "h5", sizes: "14 → 14" },
  { className: "body-large", sizes: "16 → 18" },
  { className: "label-medium", sizes: "14, tracking .05em" },
  { className: "label-small", sizes: "12, tracking .05em" },
];

const interactiveStates: StateSample[] = [
  { label: "Default" },
  { label: "Hover", state: "hover" },
  { label: "Focus da tastiera", state: "focus" },
  { label: "Active", state: "active" },
  { label: "Disabled", disabled: true },
];

const buttonVariants: ButtonVariant[] = ["primary", "secondary"];

const sectionBackgrounds: SectionBackground[] = ["background", "card", "muted"];

function SwatchGrid({ title, swatches }: { title: string; swatches: Swatch[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="h3 font-semibold">{title}</h3>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {swatches.map((swatch) => (
          <li
            key={swatch.token}
            className="overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className={`h-20 border-b border-border ${swatch.className}`} />
            <div className="flex flex-col p-3">
              <span className="label-medium font-medium">{swatch.token}</span>
              <span className="label-small text-muted-foreground">{swatch.hex}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function StateCaption({ children }: { children: string }) {
  return <span className="label-small uppercase text-muted-foreground">{children}</span>;
}

export default function Home() {
  return (
    <>
      <header className="border-b border-border bg-card">
        <Container className="flex items-center py-4">
          <Image
            src="/logo.svg"
            alt="Logo Pillar"
            width={128}
            height={40}
            priority
          />
        </Container>
      </header>

      <main className="flex flex-1 flex-col">
        <Hero content={sample.hero} />
        <TrustBar content={trustBar} />
        <BeforeAfter content={sample.beforeAfter} labels={beforeAfterLabels} />
        <Audience content={sample.audience} />
        <Testimonials testimonials={testimonials} title={sectionTitles.testimonials} />

        <Section background="muted">
          <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="flex flex-col gap-3">
              <p className="label-small font-medium uppercase text-foreground">
                variant=&quot;single&quot; · position=&quot;hero&quot;
              </p>
              <LeadForm content={sample.form} copy={leadFormCopy} variant="single" position="hero" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="label-small font-medium uppercase text-foreground">
                variant=&quot;multi&quot; · position=&quot;mid&quot;
              </p>
              <LeadForm
                id="form-multi"
                content={sample.form}
                copy={leadFormCopy}
                variant="multi"
                position="mid"
              />
            </div>
          </Container>
        </Section>

        <Faq items={sample.faq} title={sectionTitles.faq} />

        <Container className="flex flex-col gap-12 border-t border-border py-10 md:py-16">
          <div className="flex flex-col gap-4">
            <p className="label-small uppercase text-muted-foreground">
              Pagina temporanea
            </p>
            <h2 className="h1-huge bg-(image:--gradient-text-hero) bg-clip-text font-bold text-transparent">
              Design tokens
            </h2>
            <div className="h-1 w-full rounded-full bg-(image:--gradient-separator)" />
            <Button href="#primitive" variant="secondary" className="self-start">
              Vai alle primitive
            </Button>
          </div>

          <SwatchGrid title="Colori di brand" swatches={brandColors} />
          <SwatchGrid title="Colori semantici" swatches={semanticColors} />

          <section className="flex flex-col gap-4">
            <h3 className="h3 font-semibold">Gradienti</h3>
            <ul className="grid gap-4 md:grid-cols-2">
              <li className="flex flex-col gap-2">
                <div className="h-20 rounded-lg bg-(image:--gradient-text-hero)" />
                <span className="label-medium">--gradient-text-hero</span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="h-20 rounded-lg bg-(image:--gradient-separator)" />
                <span className="label-medium">--gradient-separator</span>
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="h3 font-semibold">Scala tipografica</h3>
            <ul className="flex flex-col divide-y divide-border rounded-lg border border-border bg-card">
              {typeScale.map((sample) => (
                <li
                  key={sample.className}
                  className="flex flex-col gap-2 p-4 md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <p className={sample.className}>Space Grotesk, conversione</p>
                  <span className="label-small shrink-0 text-muted-foreground">
                    .{sample.className} · {sample.sizes}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1 rounded-lg border border-border bg-card p-4">
              <li className="font-normal">Peso 400</li>
              <li className="font-medium">Peso 500</li>
              <li className="font-semibold">Peso 600</li>
              <li className="font-bold">Peso 700</li>
            </ul>
          </section>
        </Container>

        <Section id="primitive" background="card" aria-labelledby="primitive-title">
          <Container className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <h2 id="primitive-title" className="h2 font-bold">
                Primitive
              </h2>
              <p className="text-muted-foreground">
                Gli stati hover, focus e active sono forzati per l’anteprima. Gli
                esempi “dal vivo” rispondono a mouse e tastiera: usa Tab per vedere il
                focus reale.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="h3 font-semibold">Button</h3>
              {buttonVariants.map((variant) => (
                <div key={variant} className="flex flex-col gap-3">
                  <h4 className="h4 font-medium">{variant}</h4>
                  <ul className="flex flex-wrap gap-6">
                    {interactiveStates.map((sample) => (
                      <li key={sample.label} className="flex flex-col items-start gap-2">
                        <StateCaption>{sample.label}</StateCaption>
                        <Button
                          variant={variant}
                          data-state={sample.state}
                          disabled={sample.disabled}
                          tabIndex={sample.state ? -1 : undefined}
                        >
                          Richiedi una demo
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-col gap-3">
                <h4 className="h4 font-medium">Dal vivo e come link</h4>
                <ul className="flex flex-wrap gap-6">
                  <li className="flex flex-col items-start gap-2">
                    <StateCaption>button</StateCaption>
                    <Button>Pulsante</Button>
                  </li>
                  <li className="flex flex-col items-start gap-2">
                    <StateCaption>link interno</StateCaption>
                    <Button href="/" variant="secondary">
                      Torna all’inizio
                    </Button>
                  </li>
                  <li className="flex flex-col items-start gap-2">
                    <StateCaption>ancora</StateCaption>
                    <Button href="#primitive-field" variant="secondary">
                      Vai al campo
                    </Button>
                  </li>
                  <li className="flex flex-col items-start gap-2">
                    <StateCaption>link esterno</StateCaption>
                    <Button href="https://example.com">Sito esterno</Button>
                  </li>
                  <li className="flex flex-col items-start gap-2">
                    <StateCaption>link disabled</StateCaption>
                    <Button href="https://example.com" disabled>
                      Link non disponibile
                    </Button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 id="primitive-field" className="h3 scroll-mt-6 font-semibold">
                Field
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Field label="Nome (default)" name="demo-default" placeholder="Il tuo nome" />
                <Field
                  label="Nome (hover)"
                  name="demo-hover"
                  placeholder="Il tuo nome"
                  data-state="hover"
                />
                <Field
                  label="Nome (focus da tastiera)"
                  name="demo-focus"
                  placeholder="Il tuo nome"
                  data-state="focus"
                />
                <Field
                  label="Telefono (active)"
                  name="demo-active"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Numero di telefono"
                  data-state="active"
                />
                <Field
                  label="Email (errore)"
                  name="demo-error"
                  type="email"
                  defaultValue="nome@"
                  required
                  error="Inserisci un indirizzo email valido."
                />
                <Field
                  label="Email (errore con focus)"
                  name="demo-error-focus"
                  type="email"
                  defaultValue="nome@"
                  error="Inserisci un indirizzo email valido."
                  data-state="focus"
                />
                <Field
                  label="Nome (disabled)"
                  name="demo-disabled"
                  placeholder="Il tuo nome"
                  disabled
                />
                <Field
                  label="Email (dal vivo)"
                  name="demo-live"
                  type="email"
                  autoComplete="email"
                  placeholder="nome@azienda.it"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="h3 font-semibold">Section</h3>
              <div className="flex flex-col overflow-hidden rounded-lg border border-border">
                {sectionBackgrounds.map((background) => (
                  <Section
                    key={background}
                    background={background}
                    aria-labelledby={`section-demo-${background}`}
                  >
                    <Container>
                      <h4 id={`section-demo-${background}`} className="h4 font-medium">
                        background=&quot;{background}&quot;
                      </h4>
                      <p className="text-muted-foreground">py-16 → md:py-24</p>
                    </Container>
                  </Section>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="h3 font-semibold">Container</h3>
              <p className="text-muted-foreground">
                Contenuto largo al massimo 1260px, padding laterale minimo 1.25rem.
              </p>
            </div>
          </Container>

          <div className="mt-6 border-y border-dashed border-medium-gray bg-card">
            <Container>
              <div className="border-x border-dashed border-tropical-indigo bg-tropical-indigo/10 py-6 text-center">
                <span className="label-medium">area contenuto</span>
              </div>
            </Container>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <Container className="py-6">
          <p className="label-small text-muted-foreground">
            Concept non ufficiale a scopo di portfolio. Non affiliato a Pillar Srl.
          </p>
        </Container>
      </footer>
    </>
  );
}
