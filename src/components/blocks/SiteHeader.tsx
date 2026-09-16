import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { CtaConfig } from "@/content/types";
import { cn } from "@/lib/cn";

export type SiteHeaderProps = {
  /** Landing action; omitted where its target does not exist on the page. */
  cta?: CtaConfig;
  sticky?: boolean;
};

export function SiteHeader({ cta, sticky = false }: SiteHeaderProps) {
  return (
    <header className={cn("bg-background pt-3 pb-3 select-none", sticky && "sticky top-0 z-40")}>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-(image:--gradient-surface-dark) px-4 py-3 shadow-lg md:px-6">
          <Link
            href="/"
            aria-label="Pillar Conversion System, vai alla home"
            className="flex min-h-11 items-center rounded-md outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary-foreground"
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
