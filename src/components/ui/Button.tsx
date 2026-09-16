import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "contrast" | "ghost";
export type ButtonSize = "md" | "sm";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  "rounded-md text-sm leading-[1.5] font-medium tracking-[.05em]",
  "transition-[background-color,opacity,box-shadow,transform] duration-150 motion-reduce:transition-none",
  "outline-offset-2 focus-visible:outline-2 data-[state=focus]:outline-2",
  "active:translate-y-px data-[state=active]:translate-y-px",
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  "aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
);

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-8 py-3",
  sm: "px-4 py-2",
};

// `contrast` and `ghost` are meant for the dark header and footer surfaces.
const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-primary text-primary-foreground shadow-sm",
    "hover:bg-primary/90 data-[state=hover]:bg-primary/90",
    "active:bg-primary/80 data-[state=active]:bg-primary/80",
    "focus-visible:outline-primary data-[state=focus]:outline-primary",
  ),
  secondary: cn(
    "border border-border bg-background text-foreground",
    "hover:bg-muted data-[state=hover]:bg-muted",
    "active:bg-border data-[state=active]:bg-border",
    "focus-visible:outline-primary data-[state=focus]:outline-primary",
  ),
  contrast: cn(
    "bg-primary-foreground text-primary shadow-sm",
    "hover:bg-light-gray data-[state=hover]:bg-light-gray",
    "active:bg-medium-gray data-[state=active]:bg-medium-gray",
    "focus-visible:outline-primary-foreground data-[state=focus]:outline-primary-foreground",
  ),
  ghost: cn(
    "border border-primary-foreground/30 text-primary-foreground",
    "hover:bg-primary-foreground/10 data-[state=hover]:bg-primary-foreground/10",
    "active:bg-primary-foreground/20 data-[state=active]:bg-primary-foreground/20",
    "focus-visible:outline-primary-foreground data-[state=focus]:outline-primary-foreground",
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
      size = "md",
      className,
      disabled = false,
      children,
      ...rest
    } = props;
    const classes = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

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
    size = "md",
    className,
    type = "button",
    children,
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
