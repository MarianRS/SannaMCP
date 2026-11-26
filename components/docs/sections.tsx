import Image from "next/image";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  CheckIcon,
  InfoIcon,
  MessageCircleQuestionIcon,
  MessagesSquareIcon,
  PaperclipIcon,
  ReceiptIcon,
  TriangleAlertIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/reui/alert";
import { Badge } from "@/components/reui/badge";
import { Frame, FramePanel } from "@/components/reui/frame";
import type { Client, Content, Locale, SectionId, Step } from "@/content";
import { cn } from "@/lib/utils";

import { CopyButton } from "./copy-button";
import { Inline } from "./inline";
import { LocaleSwitch } from "./locale-switch";
import { MobileNav } from "./mobile-nav";

export const SANNA_URL = "https://opco.sanna.co";
const capabilityIcons = [MessagesSquareIcon, MessageCircleQuestionIcon, PaperclipIcon, ReceiptIcon];

/*
 * Icon strokes are absolute (better-ui): 1.5px beside regular text,
 * 2px beside medium-weight labels and inside solid markers.
 */
const ICON_REGULAR = { absoluteStrokeWidth: true, strokeWidth: 1.5 } as const;
const ICON_MEDIUM = { absoluteStrokeWidth: true, strokeWidth: 2 } as const;

/* ---------- Primitives ---------- */

/**
 * Sanna "framed panel": sand outer frame, white inner card (DESIGN.md).
 * Concentric: outer 16px = inner 11px + 4px padding + 1px (transparent) border.
 */
export function SannaFrame({ className, ...props }: React.ComponentProps<typeof Frame>) {
  return (
    <Frame
      className={cn("border-transparent bg-sand [--frame-radius:1rem] [--frame-px:4px] [--frame-py:4px] [--frame-gap:4px]", className)}
      {...props}
    />
  );
}

export function Panel({ className, ...props }: React.ComponentProps<typeof FramePanel>) {
  return <FramePanel className={cn("border-transparent shadow-none", className)} {...props} />;
}

export function Section({
  id,
  title,
  lead,
  children,
  className,
}: {
  id: SectionId;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("pt-20 sm:pt-28", className)}>
      <h2 id={`${id}-title`} className="font-heading text-[2rem] leading-[1.1] font-light tracking-[-0.01em] text-ink-strong sm:text-[2.5rem]">
        {title}
      </h2>
      {lead && (
        <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
          <Inline text={lead} />
        </p>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Screenshot({ image, className }: { image: NonNullable<Step["image"]>; className?: string }) {
  return (
    <figure className={cn("mt-5", className)}>
      <SannaFrame>
        <Panel className="flex justify-center bg-input-bg p-4 sm:p-6">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="image-outline h-auto max-h-[520px] w-auto max-w-full rounded-lg object-contain"
          />
        </Panel>
      </SannaFrame>
      <figcaption className="mt-2 px-1 text-[13px] text-subtle">{image.caption}</figcaption>
    </figure>
  );
}

/** Name / URL rows with copy buttons. Long values wrap instead of truncating. */
export function FieldRows({ fields, c, className }: { fields: NonNullable<Step["fields"]>; c: Content; className?: string }) {
  return (
    <SannaFrame className={className}>
      {fields.map((field) => (
        <Panel key={field.label} className="flex items-center gap-3 px-4 py-3">
          <span className="w-10 shrink-0 text-xs font-medium tracking-wide text-subtle uppercase">{field.label}</span>
          <code className="min-w-0 flex-1 font-mono text-[13.5px] break-all text-ink-strong">{field.value}</code>
          <CopyButton value={field.value} label={c.ui.copy} copiedLabel={c.ui.copied} />
        </Panel>
      ))}
    </SannaFrame>
  );
}

export function OptionCards({ options, className }: { options: NonNullable<Step["options"]>; className?: string }) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {options.map((opt) => (
        <div key={opt.title} className="surface rounded-xl p-4">
          <p className="text-sm font-medium text-ink-strong">{opt.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            <Inline text={opt.body} />
          </p>
        </div>
      ))}
    </div>
  );
}

/** Body + fields + options + screenshot of one step. */
export function StepDetails({ step, c, showImage = true }: { step: Step; c: Content; showImage?: boolean }) {
  return (
    <>
      <p className="mt-1 text-[15px] leading-relaxed text-ink">
        <Inline text={step.body} />
      </p>
      {step.fields && <FieldRows fields={step.fields} c={c} className="mt-4" />}
      {step.options && <OptionCards options={step.options} className="mt-4" />}
      {showImage && step.image && <Screenshot image={step.image} />}
    </>
  );
}

export function stepAnchor(client: Client, index: number) {
  return `${client.id}-step-${index + 1}`;
}

/* ---------- Header / footer ---------- */

export function TopBar({ c, locale }: { c: Content; locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#introduction" className="flex items-center gap-3 rounded-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
          <span className="font-heading text-[1.6rem] leading-none tracking-[-0.02em] text-ink-strong">Sanna</span>
          <span aria-hidden className="hidden h-5 w-px bg-border sm:block" />
          <span className="hidden text-sm text-muted-foreground sm:inline">{c.ui.docsLabel}</span>
        </a>
        <div className="flex items-center gap-3">
          <LocaleSwitch current={locale} label={c.ui.languageLabel} />
          <a
            href={SANNA_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-dark hidden h-9 items-center gap-1 rounded-lg ps-3.5 pe-3 text-sm font-medium transition-[transform,filter] duration-150 hover:brightness-125 active:scale-[0.97] sm:inline-flex"
          >
            {c.ui.openSanna}
            <ArrowUpRightIcon aria-hidden className="size-3.5" {...ICON_MEDIUM} />
          </a>
          <MobileNav nav={c.nav} ui={c.ui} />
        </div>
      </div>
    </header>
  );
}

export function Footer({ c }: { c: Content }) {
  return (
    <footer className="mt-28 px-2 pb-2">
      <div className="relative overflow-hidden rounded-[20px] bg-slab">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-4 pt-10 pb-28 sm:flex-row sm:items-start sm:justify-between sm:px-6 sm:pb-40">
          <p className="max-w-[40ch] text-sm text-muted-foreground">{c.ui.footerNote}</p>
          <a
            href="#introduction"
            className="inline-flex items-center gap-1.5 self-start rounded-md text-sm font-medium text-ink-strong underline-offset-4 hover:underline"
          >
            <ArrowUpIcon aria-hidden className="size-4" {...ICON_MEDIUM} />
            {c.ui.backToTop}
          </a>
        </div>
        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-[0.22em] text-center font-heading text-[28vw] leading-none tracking-[-0.04em] text-transparent select-none [-webkit-text-stroke:1px_rgba(47,22,2,0.12)] lg:text-[22rem]"
        >
          SANNA
        </p>
      </div>
    </footer>
  );
}

/* ---------- Sections ---------- */

export function Hero({ c }: { c: Content }) {
  const [before, highlight, after] = c.hero.title;
  return (
    <section id="introduction" aria-labelledby="introduction-title" className="pt-12 sm:pt-20">
      <h1
        id="introduction-title"
        className="font-heading text-[2.6rem] leading-[1.05] font-light tracking-[-0.015em] text-ink-strong sm:text-[3.25rem]"
      >
        {before}
        <em className="text-orange not-italic">{highlight}</em>
        {after}
      </h1>
      <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-muted-foreground">{c.hero.lead}</p>

      {/* Supported clients: one row per AI assistant; the single primary action. */}
      <div className="mt-10">
        <p className="mb-3 text-xs font-medium tracking-wide text-subtle uppercase">{c.hero.clientsLabel}</p>
        <SannaFrame>
          {c.clients.map((client) => (
            <Panel key={client.id} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3.5 sm:px-5">
              <div className="min-w-0">
                <p className="text-base font-medium text-ink-strong">{client.name}</p>
                <p className="text-sm text-muted-foreground">{client.summary}</p>
              </div>
              <a
                href={`#connect-${client.id}`}
                className="btn-dark inline-flex h-9 items-center gap-1.5 rounded-lg ps-4 pe-3.5 text-sm font-medium transition-[transform,filter] duration-150 ease-out hover:brightness-125 active:scale-[0.97] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                {c.hero.connectLabel}
                <ArrowRightIcon aria-hidden className="size-4" {...ICON_MEDIUM} />
              </a>
            </Panel>
          ))}
        </SannaFrame>
      </div>

      <div className="mt-10">
        <p className="mb-3 text-xs font-medium tracking-wide text-subtle uppercase">{c.hero.capabilitiesLabel}</p>
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
      </div>
    </section>
  );
}

export function BeforeYouStart({ c }: { c: Content }) {
  const b = c.before;
  return (
    <Section id="before-you-start" title={b.title} lead={b.lead}>
      <ul className="flex flex-col gap-3">
        {b.requirements.map((req) => (
          <li key={req} className="flex gap-3 text-[15px] leading-relaxed">
            <span aria-hidden className="mt-[3px] grid size-5 shrink-0 place-items-center rounded-full bg-olive text-white">
              <CheckIcon className="size-3" {...ICON_MEDIUM} />
            </span>
            <span>
              <Inline text={req} />
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Alert variant="warning" className="items-start rounded-xl border-orange/25 bg-[#FFF3EA] px-4 py-3.5 [&>svg]:translate-y-0.5 [&>svg]:text-orange">
          <TriangleAlertIcon aria-hidden {...ICON_MEDIUM} />
          <AlertTitle className="line-clamp-none text-ink-strong">{b.holdco.title}</AlertTitle>
          <AlertDescription className="text-[#6B4A33]">
            <p>
              <Inline text={b.holdco.body} />
            </p>
          </AlertDescription>
        </Alert>
        <Alert className="surface items-start rounded-xl px-4 py-3.5 [&>svg]:translate-y-0.5 [&>svg]:text-olive">
          <InfoIcon aria-hidden {...ICON_MEDIUM} />
          <AlertTitle className="line-clamp-none text-ink-strong">{b.companyPlan.title}</AlertTitle>
          <AlertDescription>
            <p>
              <Inline text={b.companyPlan.body} />
            </p>
          </AlertDescription>
        </Alert>
      </div>
    </Section>
  );
}

function StepItem({ client, step, index, isLast, c }: { client: Client; step: Step; index: number; isLast: boolean; c: Content }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <li id={stepAnchor(client, index)} className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-x-4">
      <div className="flex flex-col items-start">
        <span className="font-heading text-[1.75rem] leading-none font-light text-olive tabular-nums sm:text-[2rem]">
          <span className="sr-only">
            {c.ui.stepLabel} {index + 1}:
          </span>
          <span aria-hidden>{n}</span>
        </span>
        {!isLast && <span aria-hidden className="mt-3 w-px flex-1 bg-border" />}
      </div>
      <div className={cn("min-w-0", !isLast && "pb-10")}>
        <h3 className="pt-1 text-[17px] font-medium text-ink-strong">{step.title}</h3>
        <StepDetails step={step} c={c} />
      </div>
    </li>
  );
}

/** Default "Timeline" presentation of a client's setup steps. */
export function ConnectClient({ client, c }: { client: Client; c: Content }) {
  return (
    <Section id={`connect-${client.id}`} title={client.title} lead={client.lead}>
      <ol className="flex flex-col">
        {client.steps.map((step, i) => (
          <StepItem key={step.title} client={client} step={step} index={i} isLast={i === client.steps.length - 1} c={c} />
        ))}
      </ol>
    </Section>
  );
}

export function Access({ c }: { c: Content }) {
  const a = c.access;
  return (
    <Section id="access" title={a.title} lead={a.lead}>
      <SannaFrame>
        <Panel className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="h-11 ps-5 text-start text-xs font-medium text-subtle">{c.ui.resource}</TableHead>
                <TableHead className="h-11 w-20 text-center text-xs font-medium text-subtle">{c.ui.read}</TableHead>
                <TableHead className="h-11 w-20 pe-5 text-center text-xs font-medium text-subtle">{c.ui.write}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {a.resources.map((r) => (
                <TableRow key={r} className="hover:bg-sand/40">
                  <TableCell className="py-3 ps-5 text-[15px] text-ink-strong">{r}</TableCell>
                  {[c.ui.read, c.ui.write].map((col) => (
                    <TableCell key={col} className="py-3 text-center last:pe-5">
                      <span className="inline-grid size-5 place-items-center rounded-[5px] bg-ink-strong text-white">
                        <CheckIcon aria-hidden className="size-3.5" {...ICON_MEDIUM} />
                        <span className="sr-only">{col}</span>
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Panel>
        <p className="px-4 py-2 text-center text-[13px] text-muted-foreground">{a.total}</p>
      </SannaFrame>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {a.options.map((opt, i) => (
          <div key={opt.title} className="surface rounded-xl p-5">
            <Badge variant={i === 0 ? "invert" : "secondary"} radius="full" size="lg" className="px-2">
              {opt.badge}
            </Badge>
            <p className="mt-4 text-base font-medium text-ink-strong">{opt.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{opt.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{a.note}</p>
    </Section>
  );
}

export function Examples({ c }: { c: Content }) {
  return (
    <Section id="examples" title={c.examples.title} lead={c.examples.lead}>
      <SannaFrame>
        {c.examples.prompts.map((p) => (
          <Panel key={p.prompt} className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5">
            <div className="min-w-0">
              {p.hint && (
                <p className="mb-2 inline-flex items-center gap-1.5 text-xs text-subtle">
                  <PaperclipIcon aria-hidden className="size-3.5" {...ICON_REGULAR} />
                  {p.hint}
                </p>
              )}
              <p className="w-fit max-w-full rounded-2xl rounded-es-md bg-sand-2 px-4 py-2.5 text-[15px] text-ink-strong">
                &ldquo;{p.prompt}&rdquo;
              </p>
            </div>
            <CopyButton value={p.prompt} label={c.ui.copy} copiedLabel={c.ui.copied} />
          </Panel>
        ))}
      </SannaFrame>
    </Section>
  );
}

export function Troubleshooting({ c }: { c: Content }) {
  const t = c.troubleshooting;
  return (
    <Section id="troubleshooting" title={t.title} lead={t.lead}>
      <SannaFrame>
        <Panel className="px-5 py-1 sm:px-6">
          <Accordion>
            {t.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-4 text-[15px] font-normal text-ink-strong">
                  <span>
                    <Inline text={item.problem} />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                  <p>
                    <Inline text={item.solution} />
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Panel>
      </SannaFrame>
    </Section>
  );
}

export function RemoveAccess({ c }: { c: Content }) {
  return (
    <Section id="remove-access" title={c.remove.title}>
      <p className="max-w-[60ch] text-[15px] leading-relaxed">
        <Inline text={c.remove.body} />
      </p>
    </Section>
  );
}
