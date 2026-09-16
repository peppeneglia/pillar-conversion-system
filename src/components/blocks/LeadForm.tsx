"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import type {
  ChoiceQuestion,
  LeadFormCopy,
  LeadFormFieldKey,
  Stage,
  StageContent,
} from "@/content/types";
import { track, type FormFieldName } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import {
  isValidEmail,
  isValidFullName,
  isValidPhone,
  sanitizeText,
} from "@/lib/validation";

export type LeadFormVariant = "single" | "multi";
export type LeadFormPosition = "hero" | "mid";

export type LeadFormProps = {
  content: StageContent["form"];
  copy: LeadFormCopy;
  variant?: LeadFormVariant;
  position?: LeadFormPosition;
  id?: string;
  /** Landing stage the form belongs to; used for analytics. */
  stage?: Stage;
};

export type LeadFormChoiceKey = "activeSites" | "currentTools";
type ChoiceKey = LeadFormChoiceKey;
type ContactValues = Record<LeadFormFieldKey, string>;
type FormErrors = Partial<Record<LeadFormFieldKey | ChoiceKey, string>>;

type ContactFieldConfig = {
  key: LeadFormFieldKey;
  type: "text" | "email" | "tel";
  autoComplete: string;
};

const CONTACT_FIELDS: ContactFieldConfig[] = [
  { key: "fullName", type: "text", autoComplete: "name" },
  { key: "company", type: "text", autoComplete: "organization" },
  { key: "phone", type: "tel", autoComplete: "tel" },
  { key: "email", type: "email", autoComplete: "email" },
];

const ERROR_ORDER: (LeadFormFieldKey | ChoiceKey)[] = [
  "activeSites",
  "currentTools",
  ...CONTACT_FIELDS.map((field) => field.key),
];

function isFormFieldName(value: string | undefined): value is FormFieldName {
  return ERROR_ORDER.some((key) => key === value);
}

const STEP_COUNT = 3;

const EMPTY_CONTACT: ContactValues = { fullName: "", company: "", phone: "", email: "" };

function formatProgress(template: string, current: number, total: number): string {
  return template.replace("{current}", String(current)).replace("{total}", String(total));
}

function sanitizeContact(values: ContactValues): ContactValues {
  return {
    fullName: sanitizeText(values.fullName),
    company: sanitizeText(values.company),
    phone: sanitizeText(values.phone, 30),
    email: sanitizeText(values.email, 254),
  };
}

function validateContact(values: ContactValues, messages: LeadFormCopy["errors"]): FormErrors {
  const errors: FormErrors = {};
  if (!isValidFullName(values.fullName)) {
    errors.fullName = values.fullName ? messages.fullName : messages.required;
  }
  if (!values.company) {
    errors.company = messages.required;
  }
  if (!isValidPhone(values.phone)) {
    errors.phone = values.phone ? messages.phone : messages.required;
  }
  if (!isValidEmail(values.email)) {
    errors.email = values.email ? messages.email : messages.required;
  }
  return errors;
}

function ErrorMessage({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="flex items-start gap-2 text-sm text-foreground">
      <span aria-hidden="true" className="mt-1.25 size-2 shrink-0 rounded-full bg-destructive" />
      {children}
    </p>
  );
}

type ChoiceGroupProps = {
  formId: string;
  name: ChoiceKey;
  question: ChoiceQuestion;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function ChoiceGroup({ formId, name, question, value, error, onChange }: ChoiceGroupProps) {
  const errorId = `${formId}-${name}-error`;

  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="h4 mb-4 font-semibold">{question.legend}</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {question.options.map((option, index) => {
          const optionId = `${formId}-${name}-${index}`;
          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={cn(
                "flex min-h-11 cursor-pointer items-center gap-3 rounded-md border border-input bg-card px-4 py-3",
                "transition-colors duration-150 motion-reduce:transition-none",
                "hover:border-ring active:bg-muted",
                "outline-offset-2 has-focus-visible:outline-2 has-focus-visible:outline-primary",
                "has-checked:border-primary has-checked:bg-muted",
                error && "border-destructive",
                "has-disabled:cursor-not-allowed has-disabled:opacity-50",
              )}
            >
              <input
                id={optionId}
                type="radio"
                name={`${formId}-${name}`}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                data-field={name}
                required
                className="size-5 shrink-0 cursor-pointer accent-primary focus-visible:outline-none"
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
      {error && (
        <div className="mt-3">
          <ErrorMessage id={errorId}>{error}</ErrorMessage>
        </div>
      )}
    </fieldset>
  );
}

export function LeadForm({
  content,
  copy,
  variant = "single",
  position = "mid",
  id = "form",
  stage,
}: LeadFormProps) {
  const [step, setStep] = useState(0);
  const [contact, setContact] = useState<ContactValues>(EMPTY_CONTACT);
  const [choices, setChoices] = useState<Record<ChoiceKey, string>>({
    activeSites: "",
    currentTools: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const stepRef = useRef<HTMLDivElement>(null);
  const confirmationRef = useRef<HTMLHeadingElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const hasNavigated = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewTracked = useRef(false);
  const startTracked = useRef(false);

  const isMulti = variant === "multi";
  const isLastStep = !isMulti || step === STEP_COUNT - 1;
  const titleId = `${id}-title`;
  const titleClass = position === "hero" ? "h3" : "h2";

  // Move focus to the new step so screen readers announce it.
  useEffect(() => {
    if (hasNavigated.current) stepRef.current?.focus();
  }, [step]);

  useEffect(() => {
    if (submitted) confirmationRef.current?.focus();
  }, [submitted]);

  // form_view: once, when the top of the form enters the upper three quarters of the
  // viewport. A root margin rather than a ratio, so tall forms on mobile still count.
  useEffect(() => {
    const element = containerRef.current;
    if (!stage || !element || viewTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || viewTracked.current) return;
        viewTracked.current = true;
        track("form_view", { position, stage });
        observer.disconnect();
      },
      { rootMargin: "0px 0px -25% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [stage, position]);

  // Analytics only run for forms tied to a landing stage (not in /preview).
  function handleFirstChange(event: FormEvent<HTMLFormElement>) {
    if (!stage || startTracked.current) return;
    if (!(event.target instanceof HTMLInputElement)) return;

    const field = event.target.dataset.field;
    if (!isFormFieldName(field)) return;

    startTracked.current = true;
    track("form_start", { position, variant, field });
  }

  function changeStep(nextStep: number) {
    hasNavigated.current = true;
    setStep(nextStep);
    if (stage) track("form_step", { step: nextStep + 1, variant });
  }

  function applyErrors(nextErrors: FormErrors): boolean {
    setErrors(nextErrors);
    const firstKey = ERROR_ORDER.find((key) => nextErrors[key]);
    if (!firstKey) return true;

    const isChoice = firstKey === "activeSites" || firstKey === "currentTools";
    document.getElementById(isChoice ? `${id}-${firstKey}-0` : `${id}-${firstKey}`)?.focus();
    return false;
  }

  function clearError(key: LeadFormFieldKey | ChoiceKey) {
    if (!errors[key]) return;
    setErrors((previous) => {
      const next = { ...previous };
      delete next[key];
      return next;
    });
  }

  function updateContact(key: LeadFormFieldKey, value: string) {
    setContact((previous) => ({ ...previous, [key]: value }));
    clearError(key);
  }

  function updateChoice(key: ChoiceKey, value: string) {
    setChoices((previous) => ({ ...previous, [key]: value }));
    clearError(key);
  }

  function goNext() {
    const stepErrors: FormErrors = {};
    if (step === 0 && !choices.activeSites) stepErrors.activeSites = copy.errors.choice;
    if (step === 1 && !choices.currentTools) stepErrors.currentTools = copy.errors.choice;
    if (!applyErrors(stepErrors)) return;

    changeStep(Math.min(step + 1, STEP_COUNT - 1));
  }

  function goBack() {
    setErrors({});
    changeStep(Math.max(step - 1, 0));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isLastStep) {
      goNext();
      return;
    }

    // A filled honeypot means a bot: show the confirmation and do nothing else.
    if (honeypotRef.current?.value) {
      setSubmitted(true);
      return;
    }

    const sanitized = sanitizeContact(contact);
    setContact(sanitized);
    if (!applyErrors(validateContact(sanitized, copy.errors))) return;

    // This concept sends nothing anywhere: a valid submit only shows the confirmation.
    if (stage) track("form_submit", { position, variant, stage });
    setSubmitted(true);
  }

  const contactFields = (
    <div className={cn("grid gap-4", position === "mid" && "md:grid-cols-2")}>
      {CONTACT_FIELDS.map((field) => (
        <Field
          key={field.key}
          id={`${id}-${field.key}`}
          name={field.key}
          type={field.type}
          label={copy.fields[field.key].label}
          autoComplete={field.autoComplete}
          data-field={field.key}
          maxLength={field.key === "email" ? 254 : 120}
          required
          value={contact[field.key]}
          onChange={(event) => updateContact(field.key, event.target.value)}
          error={errors[field.key]}
        />
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      id={id}
      data-form-variant={variant}
      data-form-position={position}
      className={cn(
        "relative scroll-mt-20 rounded-lg border border-border bg-card shadow-sm",
        position === "hero" ? "p-5 md:p-6" : "p-6 md:p-10",
      )}
    >
      {submitted ? (
        <div role="status" className="flex flex-col gap-3">
          <h2
            ref={confirmationRef}
            tabIndex={-1}
            className={cn(titleClass, "font-bold focus:outline-none")}
          >
            {copy.confirmation.title}
          </h2>
          <p className="text-muted-foreground">{copy.confirmation.body}</p>
        </div>
      ) : (
        <form
          noValidate
          aria-labelledby={titleId}
          onSubmit={handleSubmit}
          onChangeCapture={handleFirstChange}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h2 id={titleId} className={cn(titleClass, "font-bold text-balance")}>
              {content.title}
            </h2>
            <p className="text-muted-foreground">{content.subtitle}</p>
          </div>

          {isMulti ? (
            <div ref={stepRef} tabIndex={-1} className="flex flex-col gap-6 focus:outline-none">
              <div className="flex flex-col gap-2">
                <p className="label-small font-medium uppercase text-muted-foreground">
                  {formatProgress(copy.progressLabel, step + 1, STEP_COUNT)}
                </p>
                <div aria-hidden="true" className="grid grid-cols-3 gap-2">
                  {Array.from({ length: STEP_COUNT }, (_, index) => (
                    <span
                      key={index}
                      className={cn(
                        "h-1 rounded-full transition-colors duration-150 motion-reduce:transition-none",
                        index <= step ? "bg-primary" : "bg-border",
                      )}
                    />
                  ))}
                </div>
              </div>

              {step === 0 && (
                <ChoiceGroup
                  formId={id}
                  name="activeSites"
                  question={copy.steps.activeSites}
                  value={choices.activeSites}
                  error={errors.activeSites}
                  onChange={(value) => updateChoice("activeSites", value)}
                />
              )}
              {step === 1 && (
                <ChoiceGroup
                  formId={id}
                  name="currentTools"
                  question={copy.steps.currentTools}
                  value={choices.currentTools}
                  error={errors.currentTools}
                  onChange={(value) => updateChoice("currentTools", value)}
                />
              )}
              {step === 2 && (
                <fieldset>
                  <legend className="h4 mb-4 font-semibold">{copy.steps.contactLegend}</legend>
                  {contactFields}
                </fieldset>
              )}
            </div>
          ) : (
            contactFields
          )}

          <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
            <label htmlFor={`${id}-website`}>{copy.honeypotLabel}</label>
            <input
              ref={honeypotRef}
              id={`${id}-website`}
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
            {isMulti && step > 0 ? (
              <Button type="button" variant="secondary" onClick={goBack} className="w-full md:w-auto">
                {copy.backLabel}
              </Button>
            ) : (
              <span className="hidden md:block" />
            )}
            {/* Distinct keys stop React from reusing the "next" button as submit mid-click. */}
            {isLastStep ? (
              <Button key="submit" type="submit" className="w-full md:w-auto">
                {content.submitLabel}
              </Button>
            ) : (
              <Button key="next" type="button" onClick={goNext} className="w-full md:w-auto">
                {copy.nextLabel}
              </Button>
            )}
          </div>

          <p className="text-sm text-muted-foreground">{content.privacyNote}</p>
        </form>
      )}
    </div>
  );
}
