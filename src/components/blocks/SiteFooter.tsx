import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OptionSwitch } from "@/components/ui/OptionSwitch";
import type { FooterContent, Locale, UiLabels } from "@/content/types";
import { LOCALE_COOKIE, THEME_COOKIE, type Theme } from "@/lib/preferences";

export type SiteFooterProps = {
  content: FooterContent;
  ui: UiLabels;
  locale: Locale;
  theme: Theme;
  /** Show the footer CTA; only where its target exists on the page. */
  showCta?: boolean;
  /** The concept disclaimer belongs to the index page only. */
  showDisclaimer?: boolean;
  /** Section links; kept off the landing pages so they do not leak the reader away. */
  showLinks?: boolean;
};

export function SiteFooter({
  content,
  ui,
  locale,
  theme,
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
                aria-label={ui.homeLink}
                className="flex min-h-11 w-fit items-center rounded-md outline-offset-4 focus-visible:outline-2 focus-visible:outline-on-dark"
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
                <p className="max-w-md text-sm text-on-dark-muted">{content.disclaimer}</p>
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
                <nav aria-label={ui.footerNav}>
                  <ul className="flex flex-col gap-2 md:items-end">
                    {content.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex min-h-11 items-center rounded-md text-sm text-on-dark-muted outline-offset-4 transition-colors duration-150 hover:text-on-dark focus-visible:outline-2 focus-visible:outline-on-dark active:text-on-dark-muted motion-reduce:transition-none"
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

          <div className="flex flex-col gap-6 border-t border-on-dark/15 pt-6 sm:flex-row sm:items-start sm:gap-10">
            <OptionSwitch
              label={ui.localeLabel}
              name="locale"
              cookieName={LOCALE_COOKIE}
              value={locale}
              options={[
                { value: "it", label: ui.localeNames.it },
                { value: "en", label: ui.localeNames.en },
              ]}
            />
            <OptionSwitch
              label={ui.themeLabel}
              name="theme"
              cookieName={THEME_COOKIE}
              value={theme}
              options={[
                { value: "light", label: ui.themeNames.light },
                { value: "dark", label: ui.themeNames.dark },
              ]}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
