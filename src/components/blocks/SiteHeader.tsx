import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { CtaConfig, FooterLink, UiLabels } from "@/content/types";
import { cn } from "@/lib/cn";

export type SiteHeaderProps = {
  ui: UiLabels;
  /** Landing action; omitted where its target does not exist on the page. */
  cta?: CtaConfig;
  /** Page links, used on the index page to reach the landings. */
  nav?: FooterLink[];
  sticky?: boolean;
};

export function SiteHeader({ ui, cta, nav = [], sticky = false }: SiteHeaderProps) {
  return (
    <header className={cn("bg-background pt-3 select-none", sticky && "sticky top-0 z-40")}>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-(image:--gradient-surface-dark) px-4 py-3 shadow-lg md:px-6">
          <Link
            href="/"
            aria-label={ui.homeLink}
            className="flex min-h-11 items-center rounded-md outline-offset-4 focus-visible:outline-2 focus-visible:outline-on-dark"
          >
            <Image
              src="/logo.svg"
              alt="Pillar"
              width={128}
              height={40}
              priority
              className="brightness-0 invert"
            />
          </Link>

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
    </header>
  );
}
