import { ArrowRightIcon, ArrowUpRightIcon, MessageCircleQuestionIcon, MessagesSquareIcon, PaperclipIcon, ReceiptIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { SANNA_URL } from "@/components/docs/sections";
import type { Content } from "@/content";
import { cn } from "@/lib/utils";

import "./hero.css";

/** PROTOTYPE asset. Port = where the glowing cable meets the socket, as % of the image box. */
export const HERO_IMG = { src: "/prototypes/hero/plug-in.jpg", width: 2102, height: 1266 };
export const PORT = { x: 41.3, y: 52.3 };

const ICON_MEDIUM = { absoluteStrokeWidth: true, strokeWidth: 2 } as const;
const ICON_REGULAR = { absoluteStrokeWidth: true, strokeWidth: 1.5 } as const;

/** The render, blended into the paper so its white halftone edge dissolves into #FCFAF4. */
export function HeroImage({ className, ...props }: Omit<ComponentProps<"img">, "src">) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, decorative render
    <img
      src={HERO_IMG.src}
      width={HERO_IMG.width}
      height={HERO_IMG.height}
      alt=""
      aria-hidden
      draggable={false}
      fetchPriority="high"
      decoding="async"
      className={cn("hero-img block h-auto w-full select-none", className)}
      {...props}
    />
  );
}

export function Headline({ c, className }: { c: Content; className?: string }) {
  const [before, highlight, after] = c.hero.title;
  return (
    <h1
      id="introduction-title"
      className={cn(
        "font-heading text-[2.6rem] leading-[1.05] font-light tracking-[-0.015em] text-ink-strong sm:text-[3.5rem]",
        className
      )}
    >
      {before}
      <em className="text-orange not-italic">{highlight}</em>
      {after}
    </h1>
  );
}

export function Lead({ c, className }: { c: Content; className?: string }) {
  return <p className={cn("text-[17px] leading-relaxed text-muted-foreground", className)}>{c.hero.lead}</p>;
}

/** Primary + secondary pair (DESIGN.md: secondary left, primary right). */
export function Actions({ c, className }: { c: Content; className?: string }) {
  const client = c.clients[0];
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      <a
        href={SANNA_URL}
        target="_blank"
        rel="noreferrer"
        className="surface surface-interactive inline-flex h-10 items-center gap-1 rounded-lg ps-4 pe-3.5 text-sm font-medium text-ink-strong transition-[transform,box-shadow] duration-150 ease-out active:scale-[0.97] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        {c.ui.openSanna}
        <ArrowUpRightIcon aria-hidden className="size-3.5" {...ICON_MEDIUM} />
      </a>
      <a
        href={`#connect-${client.id}`}
        className="hero-cta btn-dark inline-flex h-10 items-center gap-1.5 rounded-lg ps-4 pe-3.5 text-sm font-medium transition-[transform,filter] duration-150 ease-out hover:brightness-125 active:scale-[0.97] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        {c.hero.connectLabel} {client.name}
        <ArrowRightIcon aria-hidden className="size-4" {...ICON_MEDIUM} />
      </a>
    </div>
  );
}

const capabilityIcons = [MessagesSquareIcon, MessageCircleQuestionIcon, PaperclipIcon, ReceiptIcon];

/** "What you can do", identical under every variant so only the hero is compared. */
export function Capabilities({ c }: { c: Content }) {
  return (
    <section aria-label={c.hero.capabilitiesLabel} className="pt-12 sm:pt-16">
      <p className="mb-4 text-xs font-medium tracking-wide text-subtle uppercase">{c.hero.capabilitiesLabel}</p>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {c.hero.capabilities.map((cap, i) => {
          const Icon = capabilityIcons[i];
          return (
            <li key={cap.title} className="flex gap-3.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-sand text-olive">
                <Icon aria-hidden className="size-[18px]" {...ICON_REGULAR} />
              </span>
              <div className="min-w-0 pt-px">
                <h3 className="text-[15px] font-medium text-ink-strong">{cap.title}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{cap.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
