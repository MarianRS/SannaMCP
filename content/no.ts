import type { Content } from "./types";
import en, { CONNECTOR_NAME, MCP_URL } from "./en";

/**
 * Norwegian Bokmål translation of en.ts.
 * Sanna UI labels quoted in the source (Koble Claude til Sanna?, Godkjenn …,
 * Bare lese, Profil → Tilgang, Trekk tilbake, error texts) are verbatim.
 * Claude's own UI labels stay in English, as Claude shows them.
 * TODO: native-speaker review, and confirm Sanna's Norwegian resource names.
 */
const no: Content = {
  meta: {
    title: "Sanna MCP | Koble Claude til Sanna OpCo MCP",
    description:
      "Slik kobler du Sanna MCP til Claude for å svare regnskapsføreren, stille et spørsmål, sende kvitteringer og filer, og registrere utlegg.",
    htmlLang: "nb",
  },
  ui: {
    docsLabel: "MCP-dokumentasjon",
    openSanna: "Åpne Sanna",
    menu: "Meny",
    onThisPage: "På denne siden",
    copy: "Kopier",
    copied: "Kopiert",
    languageLabel: "Språk",
    read: "Lese",
    write: "Skrive",
    resource: "Ressurs",
    stepLabel: "Steg",
    backToTop: "Til toppen",
    footerNote: "Sanna MCP-dokumentasjon for kunder på opco.sanna.co.",
  },
  nav: [
    {
      group: "Oversikt",
      items: [
        { id: "introduction", label: "Introduksjon" },
        { id: "before-you-start", label: "Før du starter" },
      ],
    },
    {
      group: "Koble til",
      items: [
        { id: "connect-claude", label: "Claude" },
      ],
    },
    {
      group: "Bruk",
      items: [
        { id: "access", label: "Tilgang og rettigheter" },
        { id: "examples", label: "Eksempler" },
      ],
    },
    {
      group: "Hjelp",
      items: [
        { id: "troubleshooting", label: "Hvis noe går galt" },
        { id: "remove-access", label: "Fjern tilgangen" },
      ],
    },
  ],
  hero: {
    title: ["Koble ", "Claude", " til Sanna OpCo MCP"],
    lead: "Sanna MCP kobler Sanna-kontoen din til Claude. Den fungerer bare med Claude. Når den er koblet til, kan Claude lese og svare på spørsmål fra regnskapsføreren din, stille et spørsmål, sende kvitteringer og andre filer, og registrere utlegg for deg.",
    clientsLabel: "Fungerer med",
    connectLabel: "Sett opp",
    capabilitiesLabel: "Dette kan du gjøre",
    capabilities: [
      {
        title: "Svar regnskapsføreren",
        body: "Les spørsmålene regnskapsføreren har til deg, og svar på dem.",
      },
      {
        title: "Still et spørsmål",
        body: "Still Sanna et spørsmål uten å forlate Claude.",
      },
      {
        title: "Send kvitteringer og filer",
        body: "Legg ved en kvittering eller en annen fil i Claude og send den til Sanna.",
      },
      {
        title: "Registrer utlegg",
        body: "La Claude registrere utlegg i Sanna for deg.",
      },
    ],
  },
  before: {
    title: "Før du starter",
    lead: "Sjekk at du har det du trenger.",
    requirements: [
      "Du er medlem av en organisasjon i Sanna på `opco.sanna.co`.",
      "Du vet hvilken e-postadresse som har tilgang til selskapet ditt i Sanna — adressen Sanna inviterte.",
      "Du bruker Claude i nettleseren eller i skrivebordsappen.",
    ],
    holdco: {
      title: "Er du på HoldCo (app.sanna.co)?",
      body: "Denne veiledningen er for kunder på Sanna OpCo (`opco.sanna.co`). Den gjelder ikke for kunder på HoldCo (`app.sanna.co`).",
    },
    companyPlan: {
      title: "Bruker du Claude på en bedriftsplan?",
      body: "Bare eieren av planen kan legge til en connector. Be eieren legge den til med verdiene i [steg 3](#claude-step-3).",
    },
  },
  clients: [
    {
      id: "claude",
      name: "Claude",
      summary: "Nettleser og skrivebordsapp",
      title: "Koble til Claude",
      lead: "Legg til Sanna som en egendefinert connector i Claude i nettleseren eller skrivebordsappen, logg inn i Sanna og velg hva Claude får gjøre.",
      steps: [
      {
        title: "Åpne Claude",
        body: "Åpne Claude i nettleseren eller i skrivebordsappen.",
      },
      {
        title: "Legg til en egendefinert connector",
        body: "Gå til **Settings → Customize → Connectors**, klikk **Add**, og deretter **Add custom connector**.",
      },
      {
        title: "Fyll inn detaljene",
        body: "Fyll inn de to feltene under, og klikk **Continue**.",
        fields: [
          { label: "Name", value: CONNECTOR_NAME },
          { label: "URL", value: MCP_URL },
        ],
        image: {
          ...en.clients[0].steps[2].image!,
          alt: "Dialogen Add custom connector i Claude, med navnet Sanna MCP og URL-en https://opco.sanna.co/api/mcp fylt inn.",
          caption: "Dialogen Add custom connector i Claude.",
        },
      },
      {
        title: "Behold innstillingene Claude fant",
        body: "Behold verdiene Claude fant: **Sign in now** under Authentication, og **Use Claude's published identity** under OAuth client. Ikke legg til en header. Klikk **Add**.",
        image: {
          ...en.clients[0].steps[3].image!,
          alt: "Innstillingene for autentisering i Claude, med Sign in now og Use Claude's published identity valgt og merket Detected.",
          caption: "La begge valgene som er merket Detected stå, og ikke legg til headere.",
        },
      },
      {
        title: "Koble til",
        body: "Klikk **Connect** på den nye Sanna MCP-connectoren. Sanna åpnes i nettleseren.",
      },
      {
        title: "Logg inn i Sanna",
        body: "Logg inn i Sanna med e-postadressen som har tilgang til selskapet ditt.",
      },
      {
        title: "Sjekk hvem som spør",
        body: "På siden **Koble Claude til Sanna?** sjekker du at linjen under tittelen nevner **claude.ai**.",
      },
      {
        title: "Velg tilgang",
        body: "Siden åpnes med alle tilganger krysset av, fordi Claude ber om alle. Velg tilgangen:",
        options: [
          {
            title: "Lese og skrive",
            body: "For å la Claude svare regnskapsføreren, stille et spørsmål, sende filer og registrere utlegg for deg: behold alle krysser og klikk **Godkjenn 10 tilganger**.",
          },
          {
            title: "Bare lese",
            body: "For å la Claude bare lese: klikk **Bare lese**, og deretter **Godkjenn lesetilgang**.",
          },
        ],
        image: {
          ...en.clients[0].steps[7].image!,
          alt: "Sannas samtykkeside Koble Claude til Sanna, med lese- og skrivetilgang krysset av for alle ressurser og knappen for å godkjenne 10 tilganger.",
          caption: "Sannas samtykkeside, her vist på engelsk.",
        },
      },
      {
        title: "Prøv det",
        body: "Tilbake i Claude kan du prøve et av [eksemplene](#examples).",
      },
    ],
    },
  ],
  access: {
    title: "Tilgang og rettigheter",
    lead: "Claude ber om lese- og skrivetilgang til fem typer ressurser i Sanna — 10 tilganger totalt. Du bestemmer selv hva du godkjenner på samtykkesiden.",
    resources: ["Organisasjoner", "Personer med tilgang", "Saker", "Filer", "Utlegg"],
    total: "10 av 10 tilganger valgt",
    options: [
      {
        badge: "10 tilganger",
        title: "Lese og skrive",
        body: "Claude kan svare regnskapsføreren, stille et spørsmål, sende filer og registrere utlegg for deg.",
      },
      {
        badge: "Lese",
        title: "Bare lese",
        body: "Claude kan bare lese.",
      },
    ],
    note: "På samtykkesiden kan du også velge ressurs for ressurs. Du handler som medlem, i dine organisasjoner.",
  },
  examples: {
    title: "Eksempler",
    lead: "Når du er koblet til, kan du for eksempel prøve:",
    prompts: [
      { prompt: "Har regnskapsføreren min noen spørsmål til meg?" },
      { prompt: "Send denne kvitteringen til Sanna", hint: "Legg ved en kvittering først." },
    ],
  },
  troubleshooting: {
    title: "Hvis noe går galt",
    lead: "Kjente problemer og hva du gjør med dem.",
    items: [
      {
        problem: "**Add custom connector** er grået ut",
        solution:
          "Claude-kontoen din hører til en bedriftsplan, og bare eieren av planen kan legge til en connector. Be eieren legge den til med verdiene i [steg 3](#claude-step-3).",
      },
      {
        problem: "Siden sier **Kontoen … er ikke medlem av noen organisasjon**",
        solution:
          "Du logget inn med en e-postadresse som ikke har tilgang til selskapet ditt i Sanna. Logg inn med adressen Sanna inviterte, eller be regnskapsføreren din om tilgang.",
      },
      {
        problem: "Siden sier **Forespørselen kan ikke behandles**",
        solution: "Lukk siden og klikk **Connect** i Claude igjen.",
      },
    ],
  },
  remove: {
    title: "Fjern tilgangen",
    body: "I Sanna går du til **Profil → Tilgang** og klikker **Trekk tilbake** på Claude. Claude mister tilgangen med en gang.",
  },
};

export default no;
