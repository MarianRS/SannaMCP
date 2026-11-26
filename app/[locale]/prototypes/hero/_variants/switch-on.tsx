import type { CSSProperties } from "react";

import type { Content } from "@/content";

import { Actions, Headline, HeroImage, Lead, PORT } from "./shared";

/**
 * Switch on: the scene powers up. It warms from dim to full color, the port flares,
 * a pulse rings out, and hovering "Set up Claude" turns the glow up.
 */
export function SwitchOnVariant({ c }: { c: Content }) {
  const port = { "--port-x": `${PORT.x}%`, "--port-y": `${PORT.y}%` } as CSSProperties;
  return (
    <section id="introduction" aria-labelledby="introduction-title" className="switch overflow-x-clip pt-6 sm:pt-10">
      <div className="mx-auto max-w-[920px]">
        <div className="switch-scene hero-paper relative" style={port}>
          <HeroImage className="switch-img" />
          <span aria-hidden className="switch-glow">
            <span className="switch-glow-hover" />
          </span>
          <span aria-hidden className="switch-ring" />
          <span aria-hidden className="switch-ring switch-ring-2" />
        </div>
      </div>
      <div className="relative mx-auto -mt-2 max-w-[44rem] px-4 text-center sm:-mt-6 sm:px-6">
        <div className="switch-text">
          <Headline c={c} />
          <Lead c={c} className="mx-auto mt-5 max-w-[52ch]" />
          <Actions c={c} className="mt-8 justify-center" />
        </div>
      </div>
    </section>
  );
}
