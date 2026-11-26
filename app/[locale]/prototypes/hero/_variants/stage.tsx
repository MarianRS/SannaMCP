import type { Content } from "@/content";

import { Actions, Headline, HeroImage, Lead } from "./shared";

/** Stage: centered and image-dominant. Text lands, then the scene settles in underneath it. */
export function StageVariant({ c }: { c: Content }) {
  return (
    <section id="introduction" aria-labelledby="introduction-title" className="overflow-x-clip pt-14 sm:pt-16">
      <div className="mx-auto max-w-[44rem] px-4 text-center sm:px-6">
        <div className="stage-text">
          <Headline c={c} />
          <Lead c={c} className="mx-auto mt-5 max-w-[52ch]" />
          <Actions c={c} className="mt-8 justify-center" />
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-[1240px]">
        <div className="stage-scene hero-paper">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
