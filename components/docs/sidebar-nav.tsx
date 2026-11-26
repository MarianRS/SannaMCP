"use client";

import { useRef } from "react";
import { Scrollspy } from "@/components/reui/scrollspy";
import type { Content } from "@/content";

/** Desktop sidebar: sticky, with ReUI Scrollspy for the active state. */
export function SidebarNav({ nav, title }: { nav: Content["nav"]; title: string }) {
  const docRef = useRef<Document | null>(typeof document !== "undefined" ? document : null);

  return (
    <nav aria-label={title} className="sticky top-28 max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain pb-8">
      <Scrollspy targetRef={docRef} offset={96} history={false} className="flex flex-col gap-7">
        {nav.map((group) => (
          <div key={group.group}>
            <p className="mb-2 px-3 text-xs font-medium tracking-wide text-subtle uppercase">{group.group}</p>
            <ul className="flex flex-col gap-px">
              {group.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    data-scrollspy-anchor={item.id}
                    className="relative block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:bg-sand/70 hover:text-ink-strong data-[active=true]:bg-sand data-[active=true]:font-medium data-[active=true]:text-ink-strong"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Scrollspy>
    </nav>
  );
}
