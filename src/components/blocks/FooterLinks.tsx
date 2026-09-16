"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FooterLink } from "@/content/types";
import { cn } from "@/lib/cn";

export type FooterLinksProps = {
  label: string;
  links: FooterLink[];
};

/** Three per row: project pages on the first line, landings on the second. */
export function FooterLinks({ label, links }: FooterLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={label}>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {links.map((link) => {
          const current = pathname === link.href;
          return (
            <li key={link.href} className="flex">
              <Link
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "flex min-h-11 w-full items-center justify-center rounded-full px-4 text-center text-sm font-medium",
                  "transition-colors duration-150 motion-reduce:transition-none",
                  "outline-offset-2 focus-visible:outline-2 focus-visible:outline-on-dark",
                  current
                    ? "bg-on-dark text-carbon-steel"
                    : "border border-on-dark/25 text-on-dark-muted hover:bg-on-dark/10 active:bg-on-dark/20",
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
