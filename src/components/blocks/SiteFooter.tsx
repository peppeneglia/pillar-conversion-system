import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { FooterContent } from "@/content/types";

export type SiteFooterProps = {
  content: FooterContent;
  /** Show the footer CTA; only where its target exists on the page. */
  showCta?: boolean;
};

export function SiteFooter({ content, showCta = false }: SiteFooterProps) {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">{content.disclaimer}</p>
        {showCta && (
          <Button
            href={content.cta.target}
            variant="secondary"
            data-track-cta="footer"
            className="w-full md:w-auto"
          >
            {content.cta.label}
          </Button>
        )}
      </Container>
    </footer>
  );
}
