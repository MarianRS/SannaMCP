"use client";

import type { Locale } from "@/content";
import { locales } from "@/content";
import { cn } from "@/lib/utils";

const labels: Record<Locale, { short: string; name: string }> = {
  no: { short: "NO", name: "Norsk" },
  en: { short: "EN", name: "English" },
};

/** Segmented NO / EN switch. Keeps the current section hash. */
export function LocaleSwitch({ current, label }: { current: Locale; label: string }) {
  return (
    <div role="group" aria-label={label} className="flex items-center rounded-lg bg-sand p-0.5">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <a
            key={locale}
            href={`/${locale}/`}
            hrefLang={locale === "no" ? "nb" : "en"}
            lang={locale === "no" ? "nb" : "en"}
            aria-current={active ? "true" : undefined}
            title={labels[locale].name}
            onClick={(e) => {
              if (active) {
                e.preventDefault();
                return;
              }
              e.preventDefault();
              window.location.href = `/${locale}/${window.location.hash}`;
            }}
            className={cn(
              "rounded-md px-2 py-1 text-xs font-medium transition-colors duration-150",
              active ? "bg-white text-ink-strong shadow-xs" : "text-muted-foreground hover:text-ink-strong"
            )}
          >
            <span className="sr-only">{labels[locale].name}</span>
            <span aria-hidden>{labels[locale].short}</span>
          </a>
        );
      })}
    </div>
  );
}
