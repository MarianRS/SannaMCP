import type { CSSProperties } from "react";

import type { Content } from "@/content";

import { Actions, Headline, HeroImage, Lead, PORT } from "./shared";

/**
 * Dolly in: scroll pulls the camera toward the plug. The headline steps aside and a
 * "Connected" chip appears at the port. Static fallback without scroll timelines or with reduced motion.
 */
export function DollyVariant({ c }: { c: Content }) {
  const port = { "--port-x": `${PORT.x}%`, "--port-y": `${PORT.y}%` } as CSSProperties;
  const connected = c.meta.htmlLang === "nb" ? "Tilkoblet" : "Connected";
  return (
    <section id="introduction" aria-labelledby="introduction-title" className="dolly overflow-x-clip">
      <div className="dolly-frame">
        <div className="dolly-text mx-auto max-w-[44rem] px-4 pt-10 text-center sm:px-6 sm:pt-14">
          <Headline c={c} />
          <Lead c={c} className="mx-auto mt-4 max-w-[52ch]" />
          <Actions c={c} className="mt-7 justify-center" />
        </div>
        <div className="dolly-stage">
          <div className="dolly-scene hero-paper" style={port}>
            <HeroImage />
            <span className="dolly-chip" aria-hidden>
              <span className="size-1.5 rounded-full bg-success" />
              Sanna MCP · {connected}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
