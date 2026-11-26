import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Access, BeforeYouStart, ConnectClient, Examples, Footer, TopBar } from "@/components/docs/sections";
import { SidebarNav } from "@/components/docs/sidebar-nav";
import { getContent, isLocale } from "@/content";

import { Picker } from "../connect/_variants/picker";
import { DollyVariant } from "./_variants/dolly";
import { Capabilities } from "./_variants/shared";
import { SplitVariant } from "./_variants/split";
import { StageVariant } from "./_variants/stage";
import { SwitchOnVariant } from "./_variants/switch-on";

export const metadata: Metadata = { title: "Prototype · Hero image", robots: { index: false } };

/**
 * PROTOTYPE: four hero treatments for the plug-in render.
 * Delete this folder (and public/prototypes/hero) once one is promoted. Nothing in production imports from here.
 * The hero sits above the sidebar grid, so this page builds its own shell instead of using DocsShell.
 */
export default async function HeroPrototype({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = getContent(locale);

  return (
    <>
      <TopBar c={c} locale={locale} />
      <Picker
        replay
        names={["Stage", "Split", "Switch on", "Dolly in"]}
        variants={[
          <StageVariant key="stage" c={c} />,
          <SplitVariant key="split" c={c} />,
          <SwitchOnVariant key="switch" c={c} />,
          <DollyVariant key="dolly" c={c} />,
        ]}
      />
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-16">
        <aside className="hidden pt-16 lg:block">
          <SidebarNav nav={c.nav} title={c.ui.onThisPage} />
        </aside>
        <main id="main" className="max-w-[44rem] min-w-0">
          <Capabilities c={c} />
          <BeforeYouStart c={c} />
          {c.clients.map((client) => (
            <ConnectClient key={client.id} client={client} c={c} />
          ))}
          <Access c={c} />
          <Examples c={c} />
        </main>
      </div>
      <Footer c={c} />
    </>
  );
}
