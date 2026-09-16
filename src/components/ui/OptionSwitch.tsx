"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/cn";
import { writePreferenceCookie } from "@/lib/preferences";

export type SwitchOption = {
  value: string;
  label: string;
};

export type OptionSwitchProps = {
  label: string;
  name: string;
  /** Cookie the server reads to render the choice. */
  cookieName: string;
  value: string;
  options: SwitchOption[];
};

/**
 * Compact preference control on the dark footer surface. The value is stored in a
 * cookie and applied by the server, so there is no flash on the next render.
 */
export function OptionSwitch({ label, name, cookieName, value, options }: OptionSwitchProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function select(next: string) {
    if (next === value) return;
    writePreferenceCookie(cookieName, next);
    startTransition(() => router.refresh());
  }

  return (
    <fieldset className="flex flex-col gap-2" disabled={isPending}>
      <legend className="label-small font-semibold uppercase text-on-dark-muted">{label}</legend>
      <div className="flex items-center gap-1 rounded-full border border-on-dark/25 p-1">
      {options.map((option) => {
        const selected = option.value === value;
        const id = `${name}-${option.value}`;
        return (
          <label
            key={option.value}
            htmlFor={id}
            className={cn(
              "flex min-h-11 cursor-pointer items-center rounded-full px-3 text-sm font-medium",
              "transition-colors duration-150 motion-reduce:transition-none",
              "outline-offset-2 has-focus-visible:outline-2 has-focus-visible:outline-on-dark",
              selected
                ? "bg-on-dark text-carbon-steel"
                : "text-on-dark-muted hover:bg-on-dark/10 active:bg-on-dark/20",
            )}
          >
            <input
              id={id}
              type="radio"
              name={name}
              value={option.value}
              checked={selected}
              onChange={() => select(option.value)}
              className="sr-only"
            />
            {option.label}
          </label>
        );
        })}
      </div>
    </fieldset>
  );
}
