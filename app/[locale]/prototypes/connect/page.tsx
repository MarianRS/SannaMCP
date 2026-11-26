import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocsShell } from "@/components/docs/docs-page";
import { Access, BeforeYouStart, Examples, Hero } from "@/components/docs/sections";
import { getContent, isLocale } from "@/content";

import { ChecklistVariant } from "./_variants/checklist";
import { Picker } from "./_variants/picker";
import { TimelineVariant } from "./_variants/timeline";

export const metadata: Metadata = { title: "Prototype · Connect section", robots: { index: false } };

/**
 * PROTOTYPE — Connect section: Timeline vs. Checklist, kept for evaluation.
 * Delete this folder once one is promoted. Nothing in production imports from here.
 */
export default async function ConnectPrototype({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = getContent(locale);
  const client = c.clients[0];

  return (
    <DocsShell c={c} locale={locale}>
      <Hero c={c} />
      <BeforeYouStart c={c} />
      <Picker
        names={["Timeline", "Checklist"]}
        variants={[
          <TimelineVariant key="t" client={client} c={c} />,
          <ChecklistVariant key="c" client={client} c={c} locale={locale} />,
        ]}
      />
      <Access c={c} />
      <Examples c={c} />
    </DocsShell>
  );
}
