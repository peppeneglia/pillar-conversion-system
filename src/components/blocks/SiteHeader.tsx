import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export type SiteHeaderProps = {
  /** Concept label; static markup, so it cannot be dismissed. */
  badge?: string;
  /** Keeps the header, and the badge, visible while scrolling. */
  sticky?: boolean;
};

export function SiteHeader({ badge, sticky = false }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-border bg-card",
        sticky && "sticky top-0 z-40",
      )}
    >
      <Container className="flex items-center gap-3 py-4">
        <Image src="/logo.svg" alt="Pillar" width={128} height={40} priority />
        {badge && (
          <span className="label-small rounded-md border border-border bg-muted px-2 py-1 font-semibold uppercase text-foreground">
            {badge}
          </span>
        )}
      </Container>
    </header>
  );
}
