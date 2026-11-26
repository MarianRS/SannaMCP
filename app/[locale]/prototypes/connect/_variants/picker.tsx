"use client";

import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import "./picker.css";

/** Prototype picker (PICKER.md behavior contract), React edition. */
export function Picker({ names, variants }: { names: string[]; variants: ReactNode[] }) {
  const [current, setCurrent] = useState(0);
  const [mountKey, setMountKey] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const moveHighlight = useCallback(() => {
    const el = itemRefs.current[current];
    const hl = highlightRef.current;
    if (!el || !hl) return;
    hl.style.width = `${el.offsetWidth}px`;
    hl.style.transform = `translateX(${el.offsetLeft}px)`;
  }, [current]);

  const setActive = useCallback(
    (i: number) => {
      if (i < 0 || i >= variants.length) return;
      setCurrent(i);
      setMountKey((k) => k + 1);
      const url = new URL(window.location.href);
      url.searchParams.set("v", String(i + 1));
      window.history.replaceState(null, "", url);
    },
    [variants.length]
  );

  // Initial selection from ?v=, then enable the highlight slide after first paint.
  useEffect(() => {
    const requested = parseInt(new URLSearchParams(window.location.search).get("v") ?? "", 10);
    if (requested >= 1 && requested <= variants.length) setCurrent(requested - 1);
    requestAnimationFrame(() => requestAnimationFrame(() => navRef.current?.setAttribute("data-ready", "")));
  }, [variants.length]);

  useLayoutEffect(() => {
    moveHighlight();
    window.addEventListener("resize", moveHighlight);
    return () => window.removeEventListener("resize", moveHighlight);
  }, [moveHighlight]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= variants.length) setActive(num - 1);
      else if (e.key === "ArrowRight") setActive((current + 1) % variants.length);
      else if (e.key === "ArrowLeft") setActive((current - 1 + variants.length) % variants.length);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [current, setActive, variants.length]);

  return (
    <>
      <Fragment key={mountKey}>{variants[current]}</Fragment>
      <nav ref={navRef} className="proto-picker" aria-label="Prototype variants">
        <span ref={highlightRef} className="proto-picker-highlight" aria-hidden="true" />
        {names.map((name, i) => (
          <button
            key={name}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="proto-picker-item"
            data-active={i === current ? "" : undefined}
            aria-current={i === current ? "true" : undefined}
            onClick={() => setActive(i)}
          >
            {name}
          </button>
        ))}
      </nav>
    </>
  );
}
