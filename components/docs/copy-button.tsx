"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyButton({
  value,
  label,
  copiedLabel,
  className,
}: {
  value: string;
  label: string;
  copiedLabel: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback for browsers without async clipboard permission.
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`${label}: ${value}`}
      className={cn(
        "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-border bg-white ps-2 pe-2.5 text-xs font-medium text-ink-strong shadow-xs transition-[background-color,transform] duration-150 ease-out hover:bg-sand-2 active:scale-[0.97] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
        className
      )}
    >
      <span className="relative size-3.5">
        <CopyIcon
          aria-hidden
          absoluteStrokeWidth
          strokeWidth={2}
          className={cn(
            "absolute inset-0 size-3.5 transition-[opacity,transform] duration-150 ease-out",
            copied ? "scale-50 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <CheckIcon
          aria-hidden
          absoluteStrokeWidth
          strokeWidth={2}
          className={cn(
            "absolute inset-0 size-3.5 text-olive transition-[opacity,transform] duration-150 ease-out",
            copied ? "scale-100 opacity-100" : "scale-50 opacity-0"
          )}
        />
      </span>
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
