import Image from "next/image";
import Link from "next/link";
import type { UiLabels } from "@/content/types";
import { cn } from "@/lib/cn";

export type WordmarkProps = {
  ui: UiLabels;
  /** Adds "Conversion System" next to the logo, in the same type and colour. */
  full?: boolean;
  className?: string;
};

/** Logo, and optionally the full project name, linking to the home page. */
export function Wordmark({ ui, full = false, className }: WordmarkProps) {
  return (
    <Link
      href="/"
      // With the name visible the link needs no separate label.
      aria-label={full ? undefined : ui.homeLink}
      className={cn(
        "flex min-h-11 items-center gap-2 rounded-md text-on-dark",
        "outline-offset-4 focus-visible:outline-2 focus-visible:outline-on-dark",
        className,
      )}
    >
      <Image
        src="/logo.svg"
        alt="Pillar"
        width={110}
        height={34}
        priority
        className="brightness-0 invert"
      />
      {full && (
        <span className="text-lg leading-none font-bold tracking-[-0.01em] md:text-2xl">
          Conversion System
        </span>
      )}
    </Link>
  );
}
