import type { ReactNode } from "react";

import type { Content, Locale } from "@/content";

import {
  Access,
  BeforeYouStart,
  ConnectClient,
  Examples,
  Footer,
  Hero,
  RemoveAccess,
  TopBar,
  Troubleshooting,
} from "./sections";
import { SidebarNav } from "./sidebar-nav";

/** Page shell: top bar, sticky sidebar, main column, footer. */
export function DocsShell({ c, locale, children }: { c: Content; locale: Locale; children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-white px-3 py-2 text-sm font-medium focus:not-sr-only focus:fixed focus:start-3 focus:top-3"
      >
        {locale === "no" ? "Hopp til innhold" : "Skip to content"}
      </a>
      <TopBar c={c} locale={locale} />
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-16">
        <aside className="hidden pt-20 lg:block">
          <SidebarNav nav={c.nav} title={c.ui.onThisPage} />
        </aside>
        <main id="main" className="max-w-[44rem] min-w-0">
          {children}
        </main>
      </div>
      <Footer c={c} />
    </>
  );
}

export function DocsPage({ c, locale }: { c: Content; locale: Locale }) {
  return (
    <DocsShell c={c} locale={locale}>
      <Hero c={c} />
      <BeforeYouStart c={c} />
      {c.clients.map((client) => (
        <ConnectClient key={client.id} client={client} c={c} />
      ))}
      <Access c={c} />
      <Examples c={c} />
      <Troubleshooting c={c} />
      <RemoveAccess c={c} />
    </DocsShell>
  );
}
