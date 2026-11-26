"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { Content } from "@/content";

/** "Meny" sheet for small screens. */
export function MobileNav({ nav, ui }: { nav: Content["nav"]; ui: Content["ui"] }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-white px-3 text-sm font-medium text-ink-strong shadow-xs transition-transform duration-150 active:scale-[0.97] lg:hidden"
          />
        }
      >
        <MenuIcon aria-hidden className="size-4" absoluteStrokeWidth strokeWidth={2} />
        {ui.menu}
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(20rem,85vw)] overflow-y-auto overscroll-contain bg-background p-6 pt-14">
        <SheetTitle className="sr-only">{ui.onThisPage}</SheetTitle>
        <nav aria-label={ui.onThisPage} className="flex flex-col gap-6">
          {nav.map((group) => (
            <div key={group.group}>
              <p className="mb-2 text-xs font-medium tracking-wide text-subtle uppercase">{group.group}</p>
              <ul className="flex flex-col">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-md py-2 text-[15px] text-ink transition-colors hover:text-ink-strong"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
