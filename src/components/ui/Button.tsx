import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type NativeButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & {
    href?: undefined;
  };

type LinkButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps | "href"> & {
    href: string;
    disabled?: boolean;
  };

export type ButtonProps = NativeButtonProps | LinkButtonProps;

// Every interactive state is mirrored by a `data-state` selector so the
// preview page can render hover/active/focus statically.
const baseClasses = cn(
  "inline-flex min-h-11 min-w-11 cursor-pointer select-none items-center justify-center gap-2",
  "rounded-md px-8 py-3 text-sm leading-[1.5] font-medium tracking-[.05em]",
  "transition-[background-color,opacity,box-shadow,transform] duration-150 motion-reduce:transition-none",
  "outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary",
  "data-[state=focus]:outline-2 data-[state=focus]:outline-primary",
  "active:translate-y-px data-[state=active]:translate-y-px",
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  "aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
);

const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-primary text-primary-foreground shadow-sm",
    "hover:bg-primary/90 data-[state=hover]:bg-primary/90",
    "active:bg-primary/80 data-[state=active]:bg-primary/80",
  ),
  secondary: cn(
    "border border-border bg-background text-foreground",
    "hover:bg-muted data-[state=hover]:bg-muted",
    "active:bg-border data-[state=active]:bg-border",
  ),
};

function isExternal(href: string): boolean {
  return /^(https?:)?\/\//i.test(href);
}

/** Renders an `<a>` when `href` is set, a `<button>` otherwise. */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const {
      href,
      variant = "primary",
      className,
      disabled = false,
      children,
      ...rest
    } = props;
    const classes = cn(baseClasses, variantClasses[variant], className);

    // A link has no native disabled state: drop href so it is not focusable or navigable.
    if (disabled) {
      return (
        <a aria-disabled="true" className={classes} {...rest}>
          {children}
        </a>
      );
    }

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        {...rest}
        rel={isExternal(href) ? "noopener noreferrer" : rest.rel}
      >
        {children}
      </a>
    );
  }

  const {
    variant = "primary",
    className,
    type = "button",
    children,
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
