import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeaderCtas } from "@/content/types";
import { cn } from "@/lib/cn";

export type SiteHeaderProps = {
  /** Landing actions; omitted where their targets do not exist on the page. */
  ctas?: HeaderCtas;
  sticky?: boolean;
};

export function SiteHeader({ ctas, sticky = false }: SiteHeaderProps) {
  return (
    <header className={cn("pt-3 select-none", sticky && "sticky top-0 z-40")}>
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

          {ctas && (
            <div className="flex flex-1 flex-wrap items-center justify-end gap-2">
              <Button
                href={ctas.secondary.target}
                variant="ghost"
                size="sm"
                data-track-cta="header_secondary"
              >
                {ctas.secondary.label}
              </Button>
              <Button
                href={ctas.primary.target}
                variant="contrast"
                size="sm"
                data-track-cta="header_primary"
              >
                {ctas.primary.label}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
