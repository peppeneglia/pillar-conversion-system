import { HeaderSurface } from "@/components/blocks/HeaderSurface";
import { Wordmark } from "@/components/blocks/Wordmark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { CtaConfig, FooterLink, UiLabels } from "@/content/types";

export type SiteHeaderProps = {
  ui: UiLabels;
  /** Landing action; omitted where its target does not exist on the page. */
  cta?: CtaConfig;
  /** Page links, used on the index page to reach the landings. */
  nav?: FooterLink[];
  /** Spell out "Pillar Conversion System" next to the logo. */
  fullWordmark?: boolean;
  sticky?: boolean;
};

export function SiteHeader({
  ui,
  cta,
  nav = [],
  fullWordmark = false,
  sticky = false,
}: SiteHeaderProps) {
  return (
    <HeaderSurface sticky={sticky}>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-(image:--gradient-surface-dark) px-4 py-3 shadow-lg md:px-6">
          <Wordmark ui={ui} full={fullWordmark} />

          {nav.length > 0 && (
            <nav aria-label={ui.footerNav} className="flex flex-1 justify-end">
              <ul className="flex flex-wrap items-center justify-end gap-2">
                {nav.map((link) => (
                  <li key={link.href}>
                    <Button href={link.href} variant="ghost" size="sm">
                      {link.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {cta && (
            <Button
              href={cta.target}
              variant="contrast"
              size="sm"
              data-track-cta="header_primary"
            >
              {cta.label}
            </Button>
          )}
        </div>
      </Container>
    </HeaderSurface>
  );
}
