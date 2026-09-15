const CONTROL_CHARACTERS = /\p{Cc}/gu;

/** Strips control characters, collapses whitespace and caps the length. */
export function sanitizeText(value: string, maxLength = 120): string {
  return value
    .replace(CONTROL_CHARACTERS, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/** At least two words, each with a letter. */
export function isValidFullName(value: string): boolean {
  const words = value.split(" ").filter((word) => /\p{L}/u.test(word));
  return words.length >= 2;
}

export function isValidEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(value);
}

/** 6–15 digits, optional leading +, ignoring spaces, dots, dashes and parentheses. */
export function isValidPhone(value: string): boolean {
  return /^\+?\d{6,15}$/.test(value.replace(/[\s().-]/g, ""));
}
