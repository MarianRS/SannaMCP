import { Fragment, type ReactNode } from "react";

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\(#[^)]+\))/g;

/** Renders the small inline markup used in content/*.ts. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        let node: ReactNode = part;
        if (part.startsWith("**")) {
          node = <strong className="font-medium text-ink-strong">{part.slice(2, -2)}</strong>;
        } else if (part.startsWith("`")) {
          node = (
            <code className="rounded-[4px] bg-sand px-1 py-px font-mono text-[0.86em] text-ink-strong">
              {part.slice(1, -1)}
            </code>
          );
        } else if (part.startsWith("[")) {
          const m = part.match(/^\[([^\]]+)\]\((#[^)]+)\)$/);
          if (m) {
            node = (
              <a
                href={m[2]}
                className="font-medium text-olive-link underline decoration-olive-link/30 underline-offset-[3px] transition-colors hover:decoration-olive-link"
              >
                {m[1]}
              </a>
            );
          }
        }
        return <Fragment key={i}>{node}</Fragment>;
      })}
    </>
  );
}
