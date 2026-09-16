import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { FooterContent } from "@/content/types";

export type SiteFooterProps = {
  content: FooterContent;
  /** Show the footer CTA; only where its target exists on the page. */
  showCta?: boolean;
  /** The concept disclaimer belongs to the index page only. */
  showDisclaimer?: boolean;
  /** Section links; kept off the landing pages so they do not leak the reader away. */
  showLinks?: boolean;
};

export function SiteFooter({
  content,
  showCta = false,
  showDisclaimer = false,
  showLinks = false,
}: SiteFooterProps) {
  return (
    <footer className="pt-12 pb-3 select-none">
      <Container>
        <div className="flex flex-col gap-8 rounded-2xl bg-(image:--gradient-surface-dark) px-6 py-8 shadow-lg md:px-10 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                aria-label="Pillar Conversion System, vai alla home"
                className="flex min-h-11 w-fit items-center rounded-md outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary-foreground"
              >
                <Image
                  src="/logo.svg"
                  alt="Pillar"
                  width={128}
                  height={40}
                  className="brightness-0 invert"
                />
              </Link>
              {showDisclaimer && (
                <p className="max-w-md text-sm text-light-gray">{content.disclaimer}</p>
              )}
            </div>

            <div className="flex flex-col gap-6 md:items-end">
              {showCta && (
                <Button
                  href={content.cta.target}
                  variant="contrast"
                  size="sm"
                  data-track-cta="footer"
                  className="w-full md:w-auto"
                >
                  {content.cta.label}
                </Button>
              )}

              {showLinks && (
                <nav aria-label="Sezioni del progetto">
                  <ul className="flex flex-col gap-2 md:items-end">
                    {content.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex min-h-11 items-center rounded-md text-sm text-light-gray outline-offset-4 transition-colors duration-150 hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-primary-foreground active:text-light-gray motion-reduce:transition-none"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
