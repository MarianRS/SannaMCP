"use client";

import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";

import { Section, StepDetails, stepAnchor } from "@/components/docs/sections";
import type { Client, Content, Locale } from "@/content";
import { cn } from "@/lib/utils";

import { pad } from "./shared";

/**
 * 4 — Checklist: a guided, stateful setup. One step open at a time; marking
 * a step done collapses it and opens the next. Progress shows at the top.
 */
export function ChecklistVariant({ client, c, locale }: { client: Client; c: Content; locale: Locale }) {
  const no = locale === "no";
  const total = client.steps.length;
  const [done, setDone] = useState<Set<number>>(new Set());
  const [open, setOpen] = useState<number | null>(0);

  function toggleDone(i: number) {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else {
        next.add(i);
        // Advance to the next unfinished step.
        const upcoming = client.steps.findIndex((_, j) => j > i && !next.has(j));
        setOpen(upcoming >= 0 ? upcoming : null);
      }
      return next;
    });
  }

  const count = done.size;

  return (
    <Section id={`connect-${client.id}`} title={client.title} lead={client.lead}>
      <div className="mb-5 flex items-center gap-4">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sand">
          <div
            className="h-full origin-left rounded-full bg-olive transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{ transform: `scaleX(${count / total})` }}
          />
        </div>
        <p className="shrink-0 text-sm text-muted-foreground tabular-nums" aria-live="polite">
          {no ? `${count} av ${total} steg ferdig` : `${count} of ${total} steps done`}
        </p>
      </div>

      <ol className="surface overflow-hidden rounded-2xl">
        {client.steps.map((step, i) => {
          const isDone = done.has(i);
          const isOpen = open === i;
          return (
            <li key={step.title} id={stepAnchor(client, i)} className="border-b border-border last:border-b-0">
              <div className="flex items-center gap-3 px-4 py-3 sm:px-5">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={isDone}
                  aria-label={`${step.title}: ${no ? "ferdig" : "done"}`}
                  onClick={() => toggleDone(i)}
                  className={cn(
                    "grid size-6 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,transform] duration-150 ease-out active:scale-[0.94]",
                    isDone ? "border-olive bg-olive text-white" : "border-[#CFC5B6] bg-white text-transparent hover:border-olive"
                  )}
                >
                  <CheckIcon aria-hidden className="size-3.5" absoluteStrokeWidth strokeWidth={2} />
                </button>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${stepAnchor(client, i)}-panel`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-w-0 flex-1 items-center gap-3 py-1 text-start"
                >
                  <span className="text-xs text-subtle tabular-nums">{pad(i + 1)}</span>
                  <span
                    className={cn(
                      "min-w-0 flex-1 text-[15px] font-medium transition-colors duration-150",
                      isDone ? "text-subtle line-through decoration-subtle/50" : "text-ink-strong"
                    )}
                  >
                    {step.title}
                  </span>
                  <ChevronDownIcon
                    aria-hidden
                    absoluteStrokeWidth
                    strokeWidth={1.5}
                    className={cn("size-4 shrink-0 text-subtle transition-transform duration-200 ease-out", isOpen && "rotate-180")}
                  />
                </button>
              </div>
              <div
                id={`${stepAnchor(client, i)}-panel`}
                className={cn(
                  "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
                inert={!isOpen}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="px-4 pb-5 ps-[3.75rem] sm:px-5 sm:ps-[4rem]">
                    <StepDetails step={step} c={c} />
                    {!isDone && (
                      <button
                        type="button"
                        onClick={() => toggleDone(i)}
                        className="btn-dark mt-5 inline-flex h-9 items-center gap-1.5 rounded-lg ps-3.5 pe-4 text-sm font-medium transition-[transform,filter] duration-150 hover:brightness-125 active:scale-[0.97]"
                      >
                        <CheckIcon aria-hidden className="size-4" absoluteStrokeWidth strokeWidth={2} />
                        {i === total - 1 ? (no ? "Ferdig" : "Done") : no ? "Ferdig, neste steg" : "Done, next step"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
