/**
 * Content model for the single-page docs.
 *
 * Inline strings support a tiny markup, rendered by <Inline />:
 *   **text**  → UI label (bold)
 *   `text`    → inline code
 *   [text](#anchor) → link
 *
 * Every statement must trace back to the source knowledge-base entry in
 * Archive/ — do not add capabilities, steps or fixes that are not there.
 */

export type Locale = "no" | "en";

export const locales: Locale[] = ["no", "en"];

/** Section anchors. Each AI client gets its own `connect-<client id>` section. */
export type SectionId =
  | "introduction"
  | "before-you-start"
  | `connect-${string}`
  | "access"
  | "examples"
  | "troubleshooting"
  | "remove-access";

/**
 * One AI client Sanna MCP can be connected to. Adding a client (another AI
 * assistant) means adding an entry to `clients` — nav and sections follow.
 */
export type Client = {
  id: string;
  name: string;
  /** Where the client runs, shown on the hero card. */
  summary: string;
  title: string;
  lead: string;
  steps: Step[];
};

export type Step = {
  title: string;
  body: string;
  fields?: { label: string; value: string }[];
  options?: { title: string; body: string }[];
  image?: { src: string; alt: string; width: number; height: number; caption: string };
};

export type Content = {
  meta: { title: string; description: string; htmlLang: string };
  ui: {
    docsLabel: string;
    openSanna: string;
    menu: string;
    onThisPage: string;
    copy: string;
    copied: string;
    languageLabel: string;
    read: string;
    write: string;
    resource: string;
    stepLabel: string;
    backToTop: string;
    footerNote: string;
  };
  nav: { group: string; items: { id: SectionId; label: string }[] }[];
  hero: {
    title: [string, string, string]; // before, highlight, after
    lead: string;
    clientsLabel: string;
    connectLabel: string;
    capabilitiesLabel: string;
    capabilities: { title: string; body: string }[];
  };
  before: {
    title: string;
    lead: string;
    requirements: string[];
    holdco: { title: string; body: string };
    companyPlan: { title: string; body: string };
  };
  clients: Client[];
  access: {
    title: string;
    lead: string;
    resources: string[];
    total: string;
    options: { badge: string; title: string; body: string }[];
    note: string;
  };
  examples: {
    title: string;
    lead: string;
    prompts: { prompt: string; hint?: string }[];
  };
  troubleshooting: {
    title: string;
    lead: string;
    items: { problem: string; solution: string }[];
  };
  remove: { title: string; body: string };
};
