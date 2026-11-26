import { DocsPage } from "@/components/docs/docs-page";
import { getContent, isLocale } from "@/content";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <DocsPage c={getContent(locale)} locale={locale} />;
}
