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

export type SectionId =
  | "introduction"
  | "before-you-start"
  | "connect"
  | "access"
  | "examples"
  | "troubleshooting"
  | "remove-access";

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
    eyebrow: string;
    title: [string, string, string]; // before, highlight, after
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    capabilities: { title: string; body: string }[];
  };
  before: {
    title: string;
    lead: string;
    requirements: string[];
    holdco: { title: string; body: string };
    companyPlan: { title: string; body: string };
  };
  connect: { title: string; lead: string; steps: Step[] };
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
