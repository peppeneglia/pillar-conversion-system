"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FooterLink } from "@/content/types";
import { cn } from "@/lib/cn";

export type FooterLinksProps = {
  label: string;
  links: FooterLink[];
};

/** Pills in a row; the page you are on is filled in. */
export function FooterLinks({ label, links }: FooterLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={label}>
      <ul className="flex flex-wrap items-center gap-2">
        {links.map((link) => {
          const current = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center rounded-full px-4 text-sm font-medium",
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
