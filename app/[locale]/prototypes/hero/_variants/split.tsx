import type { Content } from "@/content";

import { Actions, Headline, HeroImage, Lead } from "./shared";

/** Split: text-led editorial grid; the scene bleeds off the right edge. No motion. */
export function SplitVariant({ c }: { c: Content }) {
  const client = c.clients[0];
  return (
    <section id="introduction" aria-labelledby="introduction-title" className="overflow-x-clip pt-10 sm:pt-16">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-x-6 gap-y-2 px-4 sm:px-6 lg:grid-cols-[5fr_7fr]">
        <div className="order-2 lg:order-1 lg:py-12">
          <Headline c={c} className="lg:text-[3.25rem]" />
          <Lead c={c} className="mt-5 max-w-[46ch] text-base" />
          <Actions c={c} className="mt-8" />
          <dl className="mt-10 flex items-center gap-3 border-t border-border pt-5 text-sm">
            <dt className="text-xs font-medium tracking-wide text-subtle uppercase">{c.hero.clientsLabel}</dt>
            <dd className="text-muted-foreground">
              <span className="font-medium text-ink-strong">{client.name}</span> · {client.summary}
            </dd>
          </dl>
        </div>
        <div className="hero-paper order-1 -mx-4 sm:-mx-6 lg:order-2 lg:ms-0 lg:-me-24 xl:-me-40">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
