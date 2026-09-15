import Image from "next/image";

// Temporary page to verify design tokens on screen. Replace with the real document.

type Swatch = {
  token: string;
  hex: string;
  className: string;
};

type TypeSample = {
  className: string;
  sizes: string;
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

function SwatchGrid({ title, swatches }: { title: string; swatches: Swatch[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="h3 font-semibold">{title}</h2>
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

export default function Home() {
  return (
    <>
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex w-full max-w-container items-center px-4 py-4 md:px-8">
          <Image
            src="/logo.svg"
            alt="Logo Pillar"
            width={128}
            height={40}
            priority
          />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-container flex-1 flex-col gap-12 px-4 py-10 md:px-8 md:py-16">
        <div className="flex flex-col gap-4">
          <p className="label-small uppercase text-muted-foreground">
            Pagina temporanea
          </p>
          <h1 className="h1-huge bg-(image:--gradient-text-hero) bg-clip-text font-bold text-transparent">
            Design tokens
          </h1>
          <div className="h-1 w-full rounded-full bg-(image:--gradient-separator)" />
        </div>

        <SwatchGrid title="Colori di brand" swatches={brandColors} />
        <SwatchGrid title="Colori semantici" swatches={semanticColors} />

        <section className="flex flex-col gap-4">
          <h2 className="h3 font-semibold">Gradienti</h2>
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
          <h2 className="h3 font-semibold">Scala tipografica</h2>
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
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto w-full max-w-container px-4 py-6 md:px-8">
          <p className="label-small text-muted-foreground">
            Concept non ufficiale a scopo di portfolio. Non affiliato a Pillar Srl.
          </p>
        </div>
      </footer>
    </>
  );
}
