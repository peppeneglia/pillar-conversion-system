import type { Metadata } from "next";
import { SiteFooter } from "@/components/blocks/SiteFooter";
import { SiteHeader } from "@/components/blocks/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getPreferences } from "@/lib/server-preferences";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: "Pillar: pagina non trovata",
};

// Same header and footer cards as the rest of the site.
export default async function NotFound() {
  const { locale, theme } = await getPreferences();
  const content = getContent(locale);
  const { notFound } = content;

  return (
    <>
      <SiteHeader ui={content.ui} />
      <main className="flex flex-1 flex-col">
        <Container className="flex flex-col gap-6 py-16 md:py-24">
          <div className="flex max-w-2xl flex-col gap-4">
            <h1 className="h1 font-bold text-pretty">{notFound.title}</h1>
            <p className="body-large text-muted-foreground">{notFound.body}</p>
          </div>
          <Button
            href={notFound.cta.target}
            variant="secondary"
            className="w-full md:w-auto md:self-start"
          >
            {notFound.cta.label}
          </Button>
        </Container>
      </main>
      <SiteFooter
        content={content.footer}
        ui={content.ui}
        locale={locale}
        theme={theme}
        showLinks
      />
    </>
  );
}
