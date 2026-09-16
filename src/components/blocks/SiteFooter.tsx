import Image from "next/image";
import Link from "next/link";
import { FooterLinks } from "@/components/blocks/FooterLinks";
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
        <div className="flex flex-col gap-5 rounded-2xl bg-(image:--gradient-surface-dark) px-6 py-6 shadow-lg md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              aria-label={ui.homeLink}
              className="flex min-h-11 items-center rounded-md outline-offset-4 focus-visible:outline-2 focus-visible:outline-on-dark"
            >
              <Image
                src="/logo.svg"
                alt="Pillar"
                width={110}
                height={34}
                className="brightness-0 invert"
              />
            </Link>

            <div className="flex flex-wrap items-center gap-2">
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
              {showCta && (
                <Button
                  href={content.cta.target}
                  variant="contrast"
                  size="sm"
                  data-track-cta="footer"
                >
                  {content.cta.label}
                </Button>
              )}
            </div>
          </div>

          {showLinks && <FooterLinks label={ui.footerNav} links={content.links} />}

          {showDisclaimer && <p className="text-sm text-on-dark-muted">{content.disclaimer}</p>}
        </div>
      </Container>
    </footer>
  );
}
