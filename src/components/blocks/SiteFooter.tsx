import Link from "next/link";
import { FooterLinks } from "@/components/blocks/FooterLinks";
import { Wordmark } from "@/components/blocks/Wordmark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OptionSwitch } from "@/components/ui/OptionSwitch";
import type { FooterContent, Locale, UiLabels } from "@/content/types";
import { cn } from "@/lib/cn";
import { LOCALE_COOKIE, THEME_COOKIE, type Theme } from "@/lib/preferences";

export type SiteFooterProps = {
  content: FooterContent;
  ui: UiLabels;
  locale: Locale;
  theme: Theme;
  /**
   * Landing footer: Pillar logo and product description on the left, the demo
   * CTA with the switches under it on the right.
   */
  landing?: boolean;
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
  landing = false,
  showDisclaimer = false,
  showLinks = false,
}: SiteFooterProps) {
  const switches = (
    <div className="flex flex-wrap items-end gap-4">
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
  );

  return (
    <footer className="pt-12 pb-3 select-none">
      <Container>
        <div className="grid gap-8 rounded-2xl bg-(image:--gradient-surface-dark) px-6 py-8 shadow-lg md:grid-cols-[minmax(0,1fr)_auto] md:gap-12 md:px-8">
          <div className="flex flex-col gap-5">
            <Wordmark ui={ui} full={!landing} />
            <p className="max-w-md text-sm text-on-dark-muted">
              {landing ? content.productDescription : content.description}
            </p>
            {!landing && switches}
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            {showLinks && <FooterLinks label={ui.footerNav} links={content.links} />}
            {landing && (
              <>
                <Button
                  href={content.cta.target}
                  variant="contrast"
                  size="sm"
                  data-track-cta="footer"
                  className="w-full md:w-auto"
                >
                  {content.cta.label}
                </Button>
                {switches}
              </>
            )}
            {showDisclaimer && (
              <p className="max-w-md text-sm text-on-dark-muted md:mt-auto md:text-right">
                {content.disclaimer}
              </p>
            )}
          </div>
        </div>

        {/* Signature under the card. On landings the link opens a new tab so the reader stays on the conversion page. */}
        <p className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
          {content.credit.prefix}
          <Link
            href={content.credit.href}
            target={landing ? "_blank" : undefined}
            rel={landing ? "noopener noreferrer" : undefined}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md px-1 font-medium text-foreground",
              "underline-offset-4 transition-colors duration-150 motion-reduce:transition-none",
              "hover:underline active:text-muted-foreground",
              "outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground",
            )}
          >
            {content.credit.name}
          </Link>
        </p>
      </Container>
    </footer>
  );
}
