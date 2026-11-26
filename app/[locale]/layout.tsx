import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";

import { getContent, isLocale, locales } from "@/content";
import { fontVariables } from "@/lib/fonts";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { languages: { nb: "/no/", en: "/en/" } },
  };
}

export const viewport: Viewport = { themeColor: "#FCFAF4" };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = getContent(locale);
  return (
    <html lang={c.meta.htmlLang} className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
