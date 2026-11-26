# DESIGN.md: Sanna (sanna.no)

## Source
- URL: https://www.sanna.no/ (Norwegian homepage, `nb_NO`)
- Capture date: 2026-11-26
- Evidence: Firecrawl `branding` + `images` scrape (`.firecrawl/sanna-branding.json`), page markdown (`.firecrawl/sanna-content.md`), full-page screenshot 1920×13196 (`.firecrawl/sanna-screenshot.png`), and pixel sampling of that screenshot.
- Rights: the Sanna name, logo, photography, 3D landscape renders, customer and press logos, and copy all belong to Sanna. Use them only as a style reference. Use your own assets and copy.

## Reference Screenshot
![Full-page screenshot of sanna.no](./.firecrawl/sanna-screenshot.png)

Use this screenshot as the visual source of truth for layout, hierarchy, density, and feel. The tokens below describe the same page in machine-readable form.

## Design Summary
A calm, warm and premium look for a Norwegian accounting firm. The page is warm off-white paper with dark espresso-brown text. Headings use a light, editorial serif (Geist Serif). Body text uses a clean grotesk (Geist). The only loud color is **orange (#FF5A00)**, used just to highlight key phrases inside headlines. Imagery mixes two things: warm documentary photos of the team, and dreamy 3D-rendered green hills with sand paths. Small product UI cards (chat, status, invoices, charts) float on top of the hills. Surfaces are flat sand-colored panels with an 8px radius and almost no shadows. Density is low, sections are spaced generously, and everything sits in a narrow centered container (~1120px). The feel is quiet confidence, not SaaS hype.

## Design Tokens

### Colors
| Role | Hex | Source |
|---|---|---|
| `bg/page` | `#FCFAF4` | observed (branding + pixel) |
| `bg/panel-sand` (feature cards, form side, FAQ side) | `#F2EDE3` | pixel-sampled |
| `bg/announcement-bar` | `#F2EBDF` | pixel-sampled |
| `bg/footer` | `#ECE8E0` | pixel-sampled |
| `bg/surface` (inner cards, form, FAQ list) | `#FFFFFF` | pixel-sampled |
| `bg/input` | `#F6F1E8` | branding |
| `bg/secondary-button` / chip | `#DED6C9` | branding (`primary`) |
| `text/primary` | `#2F1602` | observed (espresso brown) |
| `text/strong` / primary button | `#1B0C01` | branding |
| `text/muted` (body copy, subtitles) | `#5E4F44` to `#655342` | pixel-sampled, inferred range |
| `text/subtle` (labels, dates, placeholders) | ~`#9C8F83` | inferred |
| `accent/highlight` (headline emphasis) | `#FF5A00` | pixel-sampled |
| `accent/olive` (links, step numbers, check icons) | `#9EAB29` (links), ~`#928D3B` (numerals) | branding / pixel |
| `status/success-chip` | green dot on pale green, ~`#EEF2DA` bg | inferred |
| `status/alert-chip` | orange dot on pale peach, ~`#FDE6D8` bg | inferred |
| `border/hairline` | ~`#E8E2D6` (1px), plus white inner rings on cards | inferred |

The primary button is not a flat color. It uses a subtle vertical gradient from ~`#482E18` to `#1B0C01` with white text (pixel-sampled).

### Typography
- **Headings:** `Geist Serif` (fallback: `"Times New Roman", Times, serif`). Light-to-regular weight (~300–400) with slightly tight tracking. Never bold.
- **Body/UI:** `Geist` (fallback: `ui-sans-serif, system-ui, sans-serif`), weights 400 and 500.
- **Lead statement** (the "Et moderne regnskapsfirma med…" block) uses Geist **sans** at ~32px/500, with orange highlighted phrases.
- **Scale:** these sizes are for a 1920px-wide viewport. Display/H1 is ~52px with line-height ~1.1. Section H2 is ~44px with line-height ~1.1. Card titles are ~16–18px/500. Body is ~14–15px with line-height ~1.55. Labels are ~12–13px. Branding reports 12.5px as a small body size.
- Highlights are plain colored text (`#FF5A00`). There is no underline and no background.
- Headings are sentence case. Some section headings are split into two lines on purpose ("Fast månedspris. / Alt inkludert.").

### Spacing And Layout
- Base unit is 4px (branding). Common steps are 8, 12, 16, 24, 32, 48, 96, and 160px.
- Container is ~1120px wide and centered. On desktop, the content column is narrow compared to the viewport, with wide empty margins.
- Section vertical rhythm is ~160–200px between sections (inferred). Generous whitespace is the defining trait.
- Grids:
  - 3-up hero image tiles
  - 4-up service and step cards
  - 2-up and asymmetric (≈60/40) insight cards
  - Form split ~1/3 sand info column and ~2/3 white form
- Radius: 8px for buttons and inputs. ~12–16px for panels and cards. Large media panels and the footer slab use ~16–20px (inferred).
- Shadows are basically none. Depth comes from a **framed panel** effect: a sand or white outer frame (~4px padding) wraps an inner white card or image, with a faint hairline.
- Tech stack signals: Tailwind + shadcn (branding detection), Next.js (`next-size-adjust` meta).

## Components
- **Top nav:** logo on the left. Centered links: "Regnskap for ▾" mega-dropdown, Priser, Slik bytter dere, Om oss, Jobb i Sanna. On the right: flag + "NO" locale switch, a ghost "Logg inn" button, and a dark "Få tilbud" button. Small 13–14px text on the page background, with no border.
- **Announcement bar:** full-width `#F2EBDF` strip with an emoji, one line of 13px text, and a bold underlined inline link.
- **Buttons:**
  - Primary: dark espresso gradient, white text, 8px radius, ~36–40px tall, 14px/500.
  - Secondary: white or light sand with a hairline border and a faint shadow, dark text.
  - Buttons usually come in pairs: secondary on the left, primary on the right.
- **Status chips:** small pill (~11–12px) with a colored dot and text, such as "Besvart", "Ferdig", "Fast pris", or "Si opp".
- **Floating UI mock cards:** white, 8–10px radius, soft shadow. Each has a small header row (app icon + label + status chip), a bold title, a muted subtitle, and content like progress bars, checklists, chat bubbles, bar charts, or line charts. They are placed on top of 3D hill renders.
- **Feature tab-stack:** a left column holds a text list where the active item is dark and the rest are muted. The right column holds stacked sand panels, each with a title and description beside an image-framed mock card.
- **Team carousel:** portrait cards with a gradient-tinted frame (green/sand). Each shows name, role, and a "Statsautorisert" badge. Round arrow buttons sit below, with a short paragraph and an "→" text link.
- **Icon service cards:** white cards in a sand-framed 4×2 grid. A small olive/brown filled icon sits at the top left, with lots of empty space before the title (16px/500) and a muted description.
- **Step cards:** the same frame, with large olive numerals (`01`–`04`, ~32px) and a title and description.
- **Quote form:** split panel. The sand side has a checklist of included items with olive check-circles, plus integration logos. The white side has a 2-column form. Labels show a red asterisk for required fields. Inputs are `#F6F1E8` with no border. There is a full-width dark submit button and fine print below it.
- **Testimonial slider:** a sepia-toned portrait on the left. On the right: customer logo, then a large quote where the first sentence is dark and the rest is muted. Attribution and round arrows are at the bottom.
- **Press cards:** horizontal scroller of sand cards with an outlet logo, a "↗" icon, a headline, and a date.
- **FAQ:** split panel. The sand side has "Andre spørsmål? / Kontakt oss" plus phone and email. The white side has an accordion with small square +/× toggles, and the open item is tinted.
- **Final CTA:** centered serif question, a pair of buttons, and a large 3D hill scene with a dithered/halftone dissolving edge.
- **Footer:** rounded `#ECE8E0` slab inset from the viewport edges. It repeats the hero headline with the orange highlight, then 4 link columns with small muted headings, a locale select, copyright, phone and social icon buttons, and a giant faded outlined "SANNA" wordmark bleeding off the bottom.

## Page Patterns
Section order on the homepage:
1. Nav
2. Announcement bar
3. Centered serif hero with orange highlight and 2 CTAs
4. 3 image tiles (photo plus 2 hill+UI renders)
5. Customer logo marquee
6. Sans "manifesto" statement with orange phrases
7. Integration logos
8. "Why switch" tab-stack
9. Team carousel
10. Insights bento (2+2 cards)
11. "Everything included" 8-card grid
12. "How to switch": photo + 4 steps
13. Pricing / quote form
14. Testimonials
15. Press
16. FAQ
17. Careers teaser with photo carousel
18. Final CTA + 3D scene
19. Footer

Layout rules:
- Section headings are left-aligned and sit above content. Short supporting text sits in the right column on the same row.
- Hero and final CTA are centered.
- On mobile (inferred): grids collapse to 1–2 columns, split panels stack with the sand column first, carousels become swipeable, and nav collapses into a "Meny" sheet. Scene images ship separate `-phone`, `-tablet`, and `-wide` variants.

## Content Style
- Language is Norwegian Bokmål. Copy is plain, warm, and benefit-led, and speaks to the reader as "dere" or "du".
- Headlines are short claims, often two clauses: "Fast månedspris. Alt inkludert."
- CTAs are short verbs: "Få tilbud", "Få tilbud i dag", "Se hva det inkluderer", "Be om tilbud", "Ring oss".
- Recurring promises are a fixed monthly price, your own accountant, and technology that makes the day easier. Trust comes from social proof (number of customers, press coverage, named testimonials, and "statsautorisert" credentials).
- Card copy is one title plus one or two sentences. There are no long paragraphs anywhere.

## Agent Build Instructions
1. Set up the fonts: Geist and Geist Serif (`npm i geist` or Google Fonts). Set the body to Geist 15px/1.55 in `#2F1602` on `#FCFAF4`.
2. Define the color tokens above as CSS variables or Tailwind theme colors (`page`, `sand`, `sand-2`, `footer`, `ink`, `ink-strong`, `muted`, `orange`, `olive`).
3. Use a `max-w-[1120px] mx-auto px-6` container and `py-40` section spacing on desktop.
4. Make all headings H1/H2 in Geist Serif, weight 300–400, ~44–52px, tracking `-0.01em`. Wrap 1–3 key phrases in `<em class="not-italic text-orange">`.
5. Build a **Frame** primitive: an outer `bg-sand rounded-2xl p-1` around an inner `bg-white rounded-xl`. Use it for every card grid, form, and FAQ.
6. Build 2 buttons, both `rounded-lg h-9 px-4 text-sm font-medium`:
   - Dark: `bg-gradient-to-b from-[#4A2F18] to-[#1B0C01] text-white`
   - Light: `bg-white border border-[#E8E2D6] shadow-sm`
7. Visuals: pair calm, warm photography with stylized 3D/nature scenes, and overlay small white "app UI" cards with status chips. Keep shadows soft and sparse.
8. Use orange only for headline highlights and occasional data accents (bars, alert chips). Use olive for numerals, check icons, and links.
9. Leave the footer as a rounded slab inset ~8px from the viewport, with an oversized faded wordmark at the bottom.

## Rerun Inputs
```
workflow: firecrawl-website-design-clone
source_url: https://sanna.no
target_stack: unspecified (Tailwind + shadcn/Next.js recommended to match source)
output: DESIGN.md
```
