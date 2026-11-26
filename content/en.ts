import type { Content } from "./types";

export const MCP_URL = "https://opco.sanna.co/api/mcp";
export const CONNECTOR_NAME = "Sanna MCP";

const en: Content = {
  meta: {
    title: "Sanna MCP · Docs",
    description:
      "How Sanna customers connect Sanna MCP to their AI assistant — today Claude — to answer their accountant, ask a question, send receipts and files, and register expenses.",
    htmlLang: "en",
  },
  ui: {
    docsLabel: "MCP docs",
    openSanna: "Open Sanna",
    menu: "Menu",
    onThisPage: "On this page",
    copy: "Copy",
    copied: "Copied",
    languageLabel: "Language",
    read: "Read",
    write: "Write",
    resource: "Resource",
    stepLabel: "Step",
    backToTop: "Back to top",
    footerNote: "Sanna MCP documentation for customers on opco.sanna.co.",
  },
  nav: [
    {
      group: "Overview",
      items: [
        { id: "introduction", label: "Introduction" },
        { id: "before-you-start", label: "Before you start" },
      ],
    },
    {
      group: "Connect",
      items: [
        { id: "connect-claude", label: "Claude" },
      ],
    },
    {
      group: "Use",
      items: [
        { id: "access", label: "Access and permissions" },
        { id: "examples", label: "Example prompts" },
      ],
    },
    {
      group: "Help",
      items: [
        { id: "troubleshooting", label: "If something goes wrong" },
        { id: "remove-access", label: "Remove the access" },
      ],
    },
  ],
  hero: {
    title: ["Use Sanna from ", "your AI assistant", "."],
    lead: "Sanna MCP connects your Sanna account to an AI assistant. Once connected, it can read and answer questions from your accountant, ask a question, send receipts and other files, and register expenses for you.",
    clientsLabel: "Supported assistants",
    connectLabel: "Set up",
    capabilitiesLabel: "What you can do",
    capabilities: [
      {
        title: "Answer your accountant",
        body: "Read the questions your accountant has for you, and answer them.",
      },
      {
        title: "Ask a question",
        body: "Ask a question to Sanna without leaving Claude.",
      },
      {
        title: "Send receipts and files",
        body: "Attach a receipt or another file in Claude and send it to Sanna.",
      },
      {
        title: "Register expenses",
        body: "Let Claude register expenses in Sanna for you.",
      },
    ],
  },
  before: {
    title: "Before you start",
    lead: "Check that you have what you need.",
    requirements: [
      "You are a member of an organization in Sanna on `opco.sanna.co`.",
      "You know the email address that has access to your company in Sanna — the address Sanna invited.",
      "You use Claude in the browser or in the desktop app.",
    ],
    holdco: {
      title: "On HoldCo (app.sanna.co)?",
      body: "This guide is for customers on Sanna OpCo (`opco.sanna.co`). It does not apply to customers on HoldCo (`app.sanna.co`).",
    },
    companyPlan: {
      title: "Claude on a company plan?",
      body: "Only the owner of the plan can add a connector. Ask the owner to add it with the values in [step 3](#claude-step-3).",
    },
  },
  clients: [
    {
      id: "claude",
      name: "Claude",
      summary: "Browser and desktop app",
      title: "Connect Claude",
      lead: "Add Sanna as a custom connector in Claude in the browser or the desktop app, then log in to Sanna and choose what Claude may do.",
      steps: [
      {
        title: "Open Claude",
        body: "Open Claude in the browser or in the desktop app.",
      },
      {
        title: "Add a custom connector",
        body: "Go to **Settings → Customize → Connectors**, click **Add**, then **Add custom connector**.",
      },
      {
        title: "Fill in the connector details",
        body: "Fill in the two fields below, then click **Continue**.",
        fields: [
          { label: "Name", value: CONNECTOR_NAME },
          { label: "URL", value: MCP_URL },
        ],
        image: {
          src: "/images/kb-opco-mcp-custom-connector.png",
          alt: "Claude's Add custom connector dialog with the name Sanna MCP and the URL https://opco.sanna.co/api/mcp filled in.",
          width: 1062,
          height: 828,
          caption: "The Add custom connector dialog in Claude.",
        },
      },
      {
        title: "Keep the detected settings",
        body: "Keep the values that Claude detected: **Sign in now** under Authentication, and **Use Claude's published identity** under OAuth client. Do not add a header. Click **Add**.",
        image: {
          src: "/images/kb-opco-mcp-custom-connector-auth.png",
          alt: "The authentication settings in Claude, with Sign in now and Use Claude's published identity selected and marked Detected.",
          width: 1080,
          height: 1834,
          caption: "Leave both detected options selected and add no headers.",
        },
      },
      {
        title: "Connect",
        body: "Click **Connect** on the new Sanna MCP connector. Sanna opens in the browser.",
      },
      {
        title: "Log in to Sanna",
        body: "Log in to Sanna with the email address that has access to your company.",
      },
      {
        title: "Check who is asking",
        body: "On the page **Koble Claude til Sanna?** (Connect Claude to Sanna?), check that the line under the title names **claude.ai**.",
      },
      {
        title: "Choose the access",
        body: "The page opens with every access ticked, because Claude asks for all of them. Choose the access:",
        options: [
          {
            title: "Read and write",
            body: "To let Claude answer your accountant, ask a question, send files and register expenses for you, keep all the ticks and click **Godkjenn 10 tilganger** (Approve 10 accesses).",
          },
          {
            title: "Read only",
            body: "To let Claude only read, click **Bare lese** (Read only), then **Godkjenn lesetilgang** (Approve read access).",
          },
        ],
        image: {
          src: "/images/kb-opco-mcp-consent-customer.png",
          alt: "Sanna's consent page Connect Claude to Sanna, with read and write ticked for Organizations, People with access, Cases, Files and Expenses, and the button Approve 10 accesses.",
          width: 1320,
          height: 1560,
          caption: "Sanna's consent page, shown here in English.",
        },
      },
      {
        title: "Try it",
        body: "Back in Claude, try one of the [examples](#examples).",
      },
    ],
    },
  ],
  access: {
    title: "Access and permissions",
    lead: "Claude asks for read and write access to five kinds of resources in Sanna — 10 accesses in all. You decide what to approve on the consent page.",
    resources: ["Organizations", "People with access", "Cases", "Files", "Expenses"],
    total: "10 of 10 accesses chosen",
    options: [
      {
        badge: "10 accesses",
        title: "Read and write",
        body: "Claude can answer your accountant, ask a question, send files and register expenses for you.",
      },
      {
        badge: "Read",
        title: "Read only",
        body: "Claude can only read.",
      },
    ],
    note: "The consent page also lets you choose resource by resource. You act as a member, in your organizations.",
  },
  examples: {
    title: "Example prompts",
    lead: "Once connected, try for example:",
    prompts: [
      { prompt: "Does my accountant have any questions for me?" },
      { prompt: "Send this receipt to Sanna", hint: "Attach a receipt first." },
    ],
  },
  troubleshooting: {
    title: "If something goes wrong",
    lead: "Known problems and what to do about them.",
    items: [
      {
        problem: "**Add custom connector** is greyed out",
        solution:
          "Your Claude account belongs to a company plan, and only the owner of that plan can add a connector. Ask the owner to add it with the values in [step 3](#claude-step-3).",
      },
      {
        problem: "The page says **Kontoen … er ikke medlem av noen organisasjon**",
        solution:
          "You logged in with an email address that has no access to your company in Sanna. Log in with the address that Sanna invited, or ask your accountant for access.",
      },
      {
        problem: "The page says **Forespørselen kan ikke behandles**",
        solution: "Close the page and click **Connect** in Claude again.",
      },
    ],
  },
  remove: {
    title: "Remove the access",
    body: "In Sanna, go to **Profil → Tilgang** (Profile → Access) and click **Trekk tilbake** (Revoke) on Claude. Claude loses the access at once.",
  },
};

export default en;
