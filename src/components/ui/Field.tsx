import { useId } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type FieldType = "text" | "email" | "tel";

export type FieldProps = Omit<ComponentPropsWithoutRef<"input">, "type" | "id"> & {
  /** Visible label, always rendered. */
  label: string;
  type?: FieldType;
  /** Defaults to a generated id. */
  id?: string;
  /** Error message; when set the input is marked invalid. */
  error?: string;
  className?: string;
};

// Interactive states are mirrored by `data-state` selectors for the preview page.
const inputClasses = cn(
  "block min-h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-base text-foreground",
  "placeholder:text-muted-foreground",
  "transition-[border-color,box-shadow] duration-150 motion-reduce:transition-none",
  "hover:border-ring data-[state=hover]:border-ring",
  "active:border-ring data-[state=active]:border-ring",
  "outline-offset-2 focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-primary",
  "data-[state=focus]:border-primary data-[state=focus]:outline-2 data-[state=focus]:outline-primary",
  "aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:outline-destructive",
  "aria-invalid:data-[state=focus]:border-destructive aria-invalid:data-[state=focus]:outline-destructive",
  "disabled:cursor-not-allowed disabled:border-input disabled:bg-muted disabled:opacity-50",
);

export function Field({
  label,
  type = "text",
  id,
  error,
  required,
  disabled,
  className,
  "aria-describedby": describedBy,
  ...inputProps
}: FieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const hasError = Boolean(error);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={inputId}
        className={cn("label-medium font-medium", disabled && "opacity-50")}
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1">
            *
          </span>
        )}
      </label>
      <input
        id={inputId}
        type={type}
        required={required}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        aria-describedby={cn(describedBy, hasError && errorId) || undefined}
        className={inputClasses}
        {...inputProps}
      />
      {hasError && (
        // #ef4444 fails AA for text on light surfaces: the message stays in
        // foreground and the destructive colour is used only as a marker.
        <p id={errorId} className="flex items-start gap-2 text-sm text-foreground">
          <span
            aria-hidden="true"
            className="mt-1.25 size-2 shrink-0 rounded-full bg-destructive"
          />
          {error}
        </p>
      )}
    </div>
  );
}
