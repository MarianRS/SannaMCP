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
import type { Content, Locale, SectionId, Step } from "@/content";
import { cn } from "@/lib/utils";

import { CopyButton } from "./copy-button";
import { Inline } from "./inline";
import { LocaleSwitch } from "./locale-switch";
import { MobileNav } from "./mobile-nav";
import { SidebarNav } from "./sidebar-nav";

const SANNA_URL = "https://opco.sanna.co";
const capabilityIcons = [MessagesSquareIcon, MessageCircleQuestionIcon, PaperclipIcon, ReceiptIcon];

/* ---------- Primitives ---------- */

/** Sanna "framed panel": sand outer frame, white inner card (DESIGN.md). */
function SannaFrame({ className, ...props }: React.ComponentProps<typeof Frame>) {
  return (
    <Frame
      className={cn("border-transparent bg-sand [--frame-radius:1rem] [--frame-px:4px] [--frame-py:4px] [--frame-gap:4px]", className)}
      {...props}
    />
  );
}

function Panel({ className, ...props }: React.ComponentProps<typeof FramePanel>) {
  return <FramePanel className={cn("border-white/0 shadow-none", className)} {...props} />;
}

function Section({ id, title, lead, children }: { id: SectionId; title: string; lead?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-border pt-14 pb-16 sm:pt-16 sm:pb-20">
      <h2 id={`${id}-title`} className="font-heading text-[2rem] leading-[1.1] font-light tracking-[-0.01em] text-ink-strong sm:text-[2.5rem]">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
          <Inline text={lead} />
        </p>
      )}
      <div className="mt-10">{children}</div>
    </section>
  );
}

function ButtonLink({ href, variant, children, external }: { href: string; variant: "dark" | "light"; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "inline-flex h-10 items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-[transform,filter,background-color] duration-150 ease-out active:scale-[0.97] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
        variant === "dark" ? "btn-dark hover:brightness-125" : "border border-border bg-white text-ink-strong shadow-xs hover:bg-sand-2"
      )}
    >
      {children}
    </a>
  );
}

function Screenshot({ image }: { image: NonNullable<Step["image"]> }) {
  return (
    <figure className="mt-5">
      <SannaFrame>
        <Panel className="flex justify-center bg-input-bg p-4 sm:p-6">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="h-auto max-h-[520px] w-auto max-w-full rounded-lg object-contain shadow-[0_1px_2px_rgba(27,12,1,0.06),0_8px_24px_-8px_rgba(27,12,1,0.18)]"
          />
        </Panel>
      </SannaFrame>
      <figcaption className="mt-2.5 px-1 text-[13px] text-subtle">{image.caption}</figcaption>
    </figure>
  );
}

/* ---------- Header / footer ---------- */

function TopBar({ c, locale }: { c: Content; locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#introduction" className="flex items-center gap-3 rounded-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
          <span className="font-heading text-[1.6rem] leading-none tracking-[-0.02em] text-ink-strong">Sanna</span>
          <span aria-hidden className="hidden h-5 w-px bg-border sm:block" />
          <span className="hidden text-sm text-muted-foreground sm:inline">{c.ui.docsLabel}</span>
        </a>
        <div className="flex items-center gap-2">
          <LocaleSwitch current={locale} label={c.ui.languageLabel} />
          <a
            href={SANNA_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-dark hidden h-9 items-center gap-1 rounded-lg px-3.5 text-sm font-medium transition-[transform,filter] duration-150 hover:brightness-125 active:scale-[0.97] sm:inline-flex"
          >
            {c.ui.openSanna}
            <ArrowUpRightIcon aria-hidden className="size-3.5" />
          </a>
          <MobileNav nav={c.nav} ui={c.ui} />
        </div>
      </div>
    </header>
  );
}

function Footer({ c }: { c: Content }) {
  return (
    <footer className="px-2 pb-2">
      <div className="relative overflow-hidden rounded-[20px] bg-slab">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-4 pt-12 pb-28 sm:flex-row sm:items-start sm:justify-between sm:px-6 sm:pb-40">
          <div>
            <p className="font-heading text-2xl font-light text-ink-strong">
              Sanna <span className="text-orange">×</span> Claude
            </p>
            <p className="mt-2 max-w-[40ch] text-sm text-muted-foreground">{c.ui.footerNote}</p>
          </div>
          <a href="#introduction" className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-ink-strong underline-offset-4 hover:underline">
            <ArrowUpIcon aria-hidden className="size-4" />
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

function Hero({ c }: { c: Content }) {
  const [before, highlight, after] = c.hero.title;
  return (
    <section id="introduction" aria-labelledby="introduction-title" className="scroll-mt-24 pt-10 pb-16 sm:pt-16 sm:pb-20">
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-strong shadow-xs ring-1 ring-border">
        <span aria-hidden className="size-1.5 rounded-full bg-olive" />
        {c.hero.eyebrow}
      </span>
      <h1
        id="introduction-title"
        className="mt-6 font-heading text-[2.6rem] leading-[1.05] font-light tracking-[-0.015em] text-ink-strong sm:text-[3.25rem]"
      >
        {before}
        <em className="text-orange not-italic">{highlight}</em>
        {after}
      </h1>
      <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-muted-foreground">{c.hero.lead}</p>
      <div className="mt-8 flex flex-wrap gap-2.5">
        <ButtonLink href="#access" variant="light">
          {c.hero.secondaryCta}
        </ButtonLink>
        <ButtonLink href="#connect" variant="dark">
          {c.hero.primaryCta}
          <ArrowRightIcon aria-hidden className="size-4" />
        </ButtonLink>
      </div>

      <SannaFrame className="mt-12 grid grid-cols-1 sm:grid-cols-2">
        {c.hero.capabilities.map((cap, i) => {
          const Icon = capabilityIcons[i];
          return (
            <Panel key={cap.title} className="p-5 sm:p-6">
              <span className="grid size-9 place-items-center rounded-lg bg-sand text-olive">
                <Icon aria-hidden className="size-[18px]" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-base font-medium text-ink-strong sm:mt-8">{cap.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{cap.body}</p>
            </Panel>
          );
        })}
      </SannaFrame>
    </section>
  );
}

function BeforeYouStart({ c }: { c: Content }) {
  const b = c.before;
  return (
    <Section id="before-you-start" title={b.title} lead={b.lead}>
      <SannaFrame>
        <Panel className="p-5 sm:p-6">
          <ul className="flex flex-col gap-4">
            {b.requirements.map((req) => (
              <li key={req} className="flex gap-3 text-[15px] leading-relaxed">
                <span aria-hidden className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-olive text-white">
                  <CheckIcon className="size-3" strokeWidth={2.5} />
                </span>
                <span>
                  <Inline text={req} />
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </SannaFrame>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Alert variant="warning" className="items-start rounded-xl border-orange/25 bg-[#FFF3EA] px-4 py-3.5 [&>svg]:translate-y-0.5 [&>svg]:text-orange">
          <TriangleAlertIcon aria-hidden />
          <AlertTitle className="line-clamp-none text-ink-strong">{b.holdco.title}</AlertTitle>
          <AlertDescription className="text-[#6B4A33]">
            <p>
              <Inline text={b.holdco.body} />
            </p>
          </AlertDescription>
        </Alert>
        <Alert className="items-start rounded-xl border-border bg-white px-4 py-3.5 [&>svg]:translate-y-0.5 [&>svg]:text-olive">
          <InfoIcon aria-hidden />
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

function StepItem({ step, index, isLast, c }: { step: Step; index: number; isLast: boolean; c: Content }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <li id={`step-${index + 1}`} className="scroll-mt-24 grid grid-cols-[2.75rem_1fr] gap-x-3 sm:grid-cols-[3.5rem_1fr] sm:gap-x-4">
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
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink">
          <Inline text={step.body} />
        </p>

        {step.fields && (
          <SannaFrame className="mt-5">
            {step.fields.map((field) => (
              <Panel key={field.label} className="flex items-center gap-3 px-4 py-3">
                <span className="w-12 shrink-0 text-xs font-medium tracking-wide text-subtle uppercase">{field.label}</span>
                <code className="min-w-0 flex-1 truncate font-mono text-[13.5px] text-ink-strong" title={field.value}>
                  {field.value}
                </code>
                <CopyButton value={field.value} label={c.ui.copy} copiedLabel={c.ui.copied} />
              </Panel>
            ))}
          </SannaFrame>
        )}

        {step.options && (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {step.options.map((opt) => (
              <div key={opt.title} className="rounded-xl border border-border bg-white p-4">
                <p className="text-sm font-medium text-ink-strong">{opt.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  <Inline text={opt.body} />
                </p>
              </div>
            ))}
          </div>
        )}

        {step.image && <Screenshot image={step.image} />}
      </div>
    </li>
  );
}

function Connect({ c }: { c: Content }) {
  return (
    <Section id="connect" title={c.connect.title} lead={c.connect.lead}>
      <ol className="flex flex-col">
        {c.connect.steps.map((step, i) => (
          <StepItem key={step.title} step={step} index={i} isLast={i === c.connect.steps.length - 1} c={c} />
        ))}
      </ol>
    </Section>
  );
}

function Access({ c }: { c: Content }) {
  const a = c.access;
  return (
    <Section id="access" title={a.title} lead={a.lead}>
      <SannaFrame>
        <Panel className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="h-11 pl-5 text-xs font-medium text-subtle">{c.ui.resource}</TableHead>
                <TableHead className="h-11 w-20 text-center text-xs font-medium text-subtle">{c.ui.read}</TableHead>
                <TableHead className="h-11 w-20 pr-5 text-center text-xs font-medium text-subtle">{c.ui.write}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {a.resources.map((r) => (
                <TableRow key={r} className="hover:bg-sand/40">
                  <TableCell className="py-3 pl-5 text-[15px] text-ink-strong">{r}</TableCell>
                  {[c.ui.read, c.ui.write].map((col) => (
                    <TableCell key={col} className="py-3 text-center last:pr-5">
                      <span className="inline-grid size-5 place-items-center rounded-[5px] bg-ink-strong text-white">
                        <CheckIcon aria-hidden className="size-3.5" strokeWidth={2.5} />
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

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {a.options.map((opt, i) => (
          <div key={opt.title} className="rounded-xl border border-border bg-white p-5">
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

function Examples({ c }: { c: Content }) {
  return (
    <Section id="examples" title={c.examples.title} lead={c.examples.lead}>
      <SannaFrame>
        {c.examples.prompts.map((p) => (
          <Panel key={p.prompt} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="min-w-0">
              {p.hint && (
                <p className="mb-2 inline-flex items-center gap-1.5 text-xs text-subtle">
                  <PaperclipIcon aria-hidden className="size-3.5" />
                  {p.hint}
                </p>
              )}
              <p className="w-fit max-w-full rounded-2xl rounded-bl-md bg-sand-2 px-4 py-2.5 text-[15px] text-ink-strong">
                &ldquo;{p.prompt}&rdquo;
              </p>
            </div>
            <CopyButton value={p.prompt} label={c.ui.copy} copiedLabel={c.ui.copied} className="self-start sm:self-center" />
          </Panel>
        ))}
      </SannaFrame>
    </Section>
  );
}

function Troubleshooting({ c }: { c: Content }) {
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

function RemoveAccess({ c }: { c: Content }) {
  return (
    <Section id="remove-access" title={c.remove.title}>
      <SannaFrame>
        <Panel className="p-5 sm:p-6">
          <p className="text-[15px] leading-relaxed">
            <Inline text={c.remove.body} />
          </p>
        </Panel>
      </SannaFrame>
    </Section>
  );
}

/* ---------- Page ---------- */

export function DocsPage({ c, locale }: { c: Content; locale: Locale }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-white px-3 py-2 text-sm font-medium focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {locale === "no" ? "Hopp til innhold" : "Skip to content"}
      </a>
      <TopBar c={c} locale={locale} />
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-16">
        <aside className="hidden pt-16 lg:block">
          <SidebarNav nav={c.nav} title={c.ui.onThisPage} />
        </aside>
        <main id="main" className="max-w-[44rem] min-w-0">
          <Hero c={c} />
          <BeforeYouStart c={c} />
          <Connect c={c} />
          <Access c={c} />
          <Examples c={c} />
          <Troubleshooting c={c} />
          <RemoveAccess c={c} />
        </main>
      </div>
      <Footer c={c} />
    </>
  );
}
