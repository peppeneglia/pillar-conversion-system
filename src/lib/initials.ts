/** First letter of the first and last word, e.g. "Gianpaolo Piepoli" → "GP". */
export function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";

  const firstLetter = (word: string) => Array.from(word)[0] ?? "";
  const first = firstLetter(words[0]);
  const last = words.length > 1 ? firstLetter(words[words.length - 1]) : "";

  return `${first}${last}`.toLocaleUpperCase("it-IT");
}
