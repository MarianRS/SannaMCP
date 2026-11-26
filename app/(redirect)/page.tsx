import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanna MCP",
  robots: { index: false },
};

/** Static export can't redirect server-side: meta refresh + script + link. */
export default function RootRedirect() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var l=(navigator.language||"").toLowerCase();var t=/^(nb|nn|no)/.test(l)||!l?"/no/":"/en/";location.replace(t+location.hash);})();`,
        }}
      />
      <main className="grid min-h-dvh place-items-center p-6 text-center">
        <p className="text-sm text-muted-foreground">
          <a className="underline underline-offset-4" href="/no/">Norsk</a> ·{" "}
          <a className="underline underline-offset-4" href="/en/">English</a>
        </p>
      </main>
    </>
  );
}
