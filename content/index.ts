import en from "./en";
import no from "./no";
import type { Content, Locale } from "./types";

export { locales } from "./types";
export type { Content, Locale, SectionId, Step } from "./types";

const dictionaries: Record<Locale, Content> = { en, no };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "no";
}
