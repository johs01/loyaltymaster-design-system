# sendPUSH | Loyaltymaster — Design System

> A practical design system for building on-brand interfaces, marketing pages, decks, and throwaway prototypes for **sendPUSH** — a direct-messaging and loyalty/retention product by **Loyaltymaster**.

## Index

- `README.md` — this file
- `colors_and_type.css` — drop-in CSS variables + semantic type scale (light + dark)
- `SKILL.md` — Agent Skill manifest (cross-compatible with Claude Code)
- `assets/` — logos, partner badges, fonts, images
  - `assets/logos/` — sendPUSH / Loyaltymaster logos (PNG)
  - `assets/fonts/` — Rodger family (100–900 + italics) — bundled
  - `assets/partners/` — third-party + integration badges (Stripe, Apple Pay, AWS, Clover, Toast, Make, Zapier, GDPR)
- `ui_kits/marketing/` — React + HTML recreation of the marketing site (sendpush.loyaltymaster.com)
- `preview/` — per-card HTML specimens that populate the Design System tab

## Sources

- **Codebase**: `sendPUSH-PRODUCTION/` (Vite + React + TS). Design tokens live in:
  - `public/design-system/withremy/withremy.css` — core tokens (`--wr-*`)
  - `public/wireframe-remy.css` — component + theme tokens (`--wf-*`, ~4,500 lines)
  - `src/design-system/tokens.ts` — mirrored token audit with rationale
  - `src/design-system/STYLE-GUIDE.md` — human-readable style reference
  - `tailwind.config.js` — Tailwind mapping (utilities unused — config only mirrors vars)
- **Logos**: uploaded to `uploads/` then copied to `assets/logos/`
- Production URL: https://sendpush.loyaltymaster.com
- Geo (from `<meta>` tags): Plettenberg Bay, Western Cape, ZA

## Product context

**Loyaltymaster** is the parent brand — a customer-loyalty and retention platform for local/SMB service businesses (wellness studios, auto shops, clinics, restaurants).

**sendPUSH** is Loyaltymaster's direct-messaging product. The pitch:

> Have Your Own Customer List. Message Them Anytime — Free.

Core value props, taken directly from the code:
- Own your audience & contact data
- Trigger reminders, offers, follow-ups in minutes
- Keep customers engaged with timely personalized updates
- Operate independent of social-media algorithms

Primary audience: small-to-midsize business operators running appointment-based or repeat-purchase businesses. Integrations emphasized in the site: **Clover POS, Toast, TouchBistro, Apple Pay / Google Pay / Stripe, Make, Zapier**. Hosted on **AWS + DigitalOcean**, GDPR-ready.

Products represented:
1. **Marketing site** — `sendpush.loyaltymaster.com` (the only product with real UI in the codebase; this is the focus of `ui_kits/marketing/`)
2. Sub-pages referenced but mostly routed (not fully mocked): `/loyalty`, `/bring-back-customers`, `/social-media`, `/style-guide` — same visual system, different copy.

---

## Content Fundamentals

**Voice: confident, operator-focused, practical.** Copy speaks *to* the business owner about outcomes, never about the software.

### Tone
- Declarative and outcome-first. Headlines state a benefit as fact: _"All the Power, None of the Complexity"_, _"Loved by Teams Worldwide"_.
- Short sentences. Prefers concrete verbs: *build, trigger, send, track, launch, measure*.
- Avoids hype ("revolutionary", "AI-powered"). No startup jargon.
- **Pronouns**: "you/your" for the reader, "we" rarely appears; testimonials use first-person. Copy is not friendly-chatty — it is "pragmatic-helpful".
- **Casing**: Headlines use Title Case (e.g. "Message Them Anytime - Free", "Smart Segments"). Body is sentence case. Eyebrows are UPPERCASE (e.g. CAPABILITIES, CUSTOMER FEEDBACK, CUSTOMER MESSAGING SYSTEM).
- **Product name** is always styled as **sendPUSH** (lowercase `send`, uppercase `PUSH`). Parent brand is **Loyaltymaster** (one word, capital L). Divider when joined: `sendPUSH | Loyaltymaster`.
- **Emoji**: not used. The brand does not use emoji in copy or UI.
- **Numbers / stats** render in the display font (Rodger) for visual weight; common stat patterns: "95%", "5x", "2 min", "30% OFF".

### Examples (from live copy)
- Hero H1: _"Have Your Own Customer List. Message Them Anytime - Free."_
- Body: _"Build your direct customer list, automate outreach, and send high-converting campaigns without relying on social algorithms."_
- Eyebrow: _"Customer messaging system"_
- Feature titles: _"Smart Segments", "Behavior Triggers", "Campaign Calendar", "Geo Messaging", "Revenue Tracking", "One Inbox"_ — 1–3 words, noun phrase, outcome-flavored.
- Primary CTA: _"Start Free in 2 Minutes"_ (never "Sign Up", never "Get Started Now!")

### Vibe
Earnest, warm, tidy. Not "corporate", not "playful" — *"professional & neighborly"*. Reminder of a dependable tool for people who run a business day-to-day.

---

## Visual Foundations

### Color vibe
Warm, low-saturation, peachy. The palette is anchored by **yellow (#FCB827)** and **orange (#F37D39)** riding on peach / salmon / cyan-tinted cream backgrounds. It reads friendly but unmistakably commercial — not candy-bright, not muted-tech. Dark mode preserves the same hue relationships on warm-black surfaces (`#1A1519`, `#141015`).

### Index

- `README.md` (this file)
- `SKILL.md` — skill manifest for Claude Code / Agent Skills compatibility
- `colors_and_type.css` — CSS vars + semantic type + full Rodger family @font-face
- `assets/logos/` — sendPUSH primary lockup, wordmark, chevron, favicon
- `assets/fonts/` — Rodger 100–900 + italics
- `assets/partners/` — Stripe, Apple Pay, Google Pay, AWS, Toast, Clover, TouchBistro, Zapier, Make, GDPR
- `preview/` — design-system reference cards (colors, type, spacing, components)
- `ui_kits/marketing/` — React recreation of the sendPUSH marketing site

## Typography
- **Display**: `Rodger` (OTF, full family bundled — 100 Thin through 900 Black, plus matching italics). H1/H2/H3 use Bold (700). Stat values default to Regular (400) for the elegant-numeral look used in pricing. Fallback: `Arial, sans-serif`.
- **Body**: `Onest` (Google Fonts, weights 400/500/600/700). Used for everything else — navigation, eyebrows, body, buttons, form fields.
- Headings use tight negative letter-spacing (`clamp(-0.5px, -0.012em, -0.8px)`), tight line-height (1.03–1.10). Body is 20px / 1.56 / -0.4px at desktop.
- **Eyebrows** are always uppercase Onest 700, letter-spaced, short — function as section tags.

### Spacing
Ad-hoc but consistent: multiples and near-multiples of 4 (`4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 48, 56, 64, 68, 72, 84, 96, 108`). Sections use 84px vertical padding on desktop, 72px tablet, 56px mobile.

### Backgrounds
- Sections alternate between warm tinted flats: **peach** (hero, trial), **cyan** (problem), **salmon** (use-case, process), **panel-light** (cards), **white**, and a **dark ink** (`#302127`) for high-contrast final-CTA bands.
- **No full-bleed photography** in the marketing site body — photography is placed inside rounded containers. No hand-drawn illustration, no repeating textures, no gradient washes as backgrounds.
- The only "gradients" are subtle card glosses (`linear-gradient(160deg, rgba(255,255,255,0.44) 0%, transparent 46%)`) and the pro-pricing highlight (`linear-gradient(180deg, rgba(252,184,39,0.2), var(--wr-bg-panel-light))`). Gradients are **decorative**, never background-filling.

### Animation & Motion
- Easings: **gentle** `cubic-bezier(0.2, 0.8, 0.2, 1)` for interactive lifts/hovers; **standard** `cubic-bezier(0.4, 0, 0.2, 1)` for neutral transitions; **reveal** `cubic-bezier(0.22, 1, 0.36, 1)` for scroll-ins.
- Durations: `220ms` (fast) for micro-interactions, `280ms` (base) for hovers, `560ms` for reveals.
- **Scroll reveal** is the signature entrance: `opacity 0 → 1` + `translateY(24px → 0)`, staggered by `order * 80ms` via `data-reveal-order`. Threshold 0.12.
- **No bounces, no spring physics, no parallax, no mouse-track gradients on content** (though the nav shell does have a cursor-tracked specular highlight — see Glass Nav).
- All animations respect `prefers-reduced-motion: reduce`.

### Hover / press states
- **Primary CTA (yellow pill)**: translateY(-1.5px) on hover, translateY(-0.75px) on active. A sheen slides across via `::before`. Orange border appears (`rgba(243,125,57,0.48)`).
- **Cards**: lift + shadow change (`0 8px 20px rgba(48,33,39,0.06)` → `0 14px 26px rgba(48,33,39,0.12)`). Background shifts to `--wf-hover-bg-subtle` (near-white `#fbfcfd` in light; 6% white in dark).
- **Links/nav items**: color → `--wr-accent-orange` (`#f37d39`).
- **Inputs on hover**: border shifts to `rgba(243,125,57,0.32)`; on focus the bg brightens and orange ring appears.
- **Focus ring (universal)**: `outline: 2px solid rgba(243,125,57,0.92); outline-offset: 2px;`
- **Press / active on CTA**: reduced lift (half of hover offset), no separate scale transform.

### Borders
- Color families: `rgba(151,144,147,0.22–0.36)` — cool-gray translucent, tuned to sit on warm bgs. Cards use ~22% alpha, inputs use ~36%.
- Process cards use accent-tinted borders: peach with `rgba(243,125,57,0.22)`, cyan with `rgba(76,147,175,0.22)`, yellow with `rgba(252,184,39,0.28)`.
- Typical width: 1px. Dividers inside dropdowns: `rgba(0,0,0,0.06)` / `rgba(255,255,255,0.08)`.

### Shadows
- `card-base`: `0 8px 20px rgba(48,33,39,0.06)`
- `card-hover`: `0 14px 26px rgba(48,33,39,0.12)`
- `badge`: `0 7px 0 0 rgba(48,33,39,0.82)` — a **hard offset** (no blur) "stickered" shadow, used sparingly on brand badges.
- `email-cta`: `0 4px 0 rgba(252,184,39,0.35), inset 0 0 0 2px rgba(252,184,39,0.45)` — layered hard + inset yellow.
- Nav + footer shells use layered glass-style shadows (`0 10px 24px rgba(48,33,39,0.12), inset 0 1px 0 rgba(255,255,255,0.52)`).

### Transparency & blur
- **Glass nav**: a floating pill shell with `backdrop-filter: blur` + translucent white overlays + a *cursor-tracked* radial-gradient specular highlight that follows the mouse. This is the most ornate surface in the whole system.
- Mobile menu panel uses the same glass layering.
- Everywhere else: opaque. Body copy is not placed on blurred/translucent surfaces.

### Corner radii
- `pill` (999px) → CTAs, email input, toggles, tags
- `20px` → primary cards, process cards (desktop)
- `16px` → secondary cards, mobile process cards
- `12px` → smaller panels, form inputs, faq items
- `8px` → compact badges
- `7px` → brand dot
- `5–6px` → checklist dots

### Layout rules
- Single fixed element at desktop: the sticky nav header. Nothing else is position-fixed.
- Main content uses one of three containers: `--wr-container-main` (1280px), `--wr-container-focus` (840px), `--wr-container-cta` (640px). Max-width + auto-margin + `padding-inline`.
- Grids fall back predictably: desktop 3/4-col → tablet 2-col → mobile 1-col. Gap stays at 18px.
- Sections are demarcated by **background-color changes**, not dividers or icons. Never use borders to separate page sections.
- Dark CTA band (`--wf-section-dark-bg`) appears at most once per page, near the bottom, for a final high-contrast push.

### Imagery vibe
- Photography is used *inside cards* — never full-bleed. Warm color balance matches the site. Portraits are clean studio-style, products shown in context. When included, images get `border-radius: inherit` so they follow the card shape.
- Partner/integration logos are **monochrome/greyscale** when presented in a row (see `LogoGrid.tsx`), filtered with `grayscale(100%)` and desaturated on hover.
- No stock "tech abstract". No people-laptops-stock-photo slop.

### Cards
A card = `bg-panel-light` **or** a tinted bg (peach/cyan/salmon/yellow), `1px` cool-gray translucent border, `20px` radius (or 16 mobile), 26px/24px padding, and `card-base` shadow. On hover: lift ~2px, swap to `card-hover` shadow, background tint to `hover-bg-subtle`. Process cards additionally carry a numbered step-pill.

### Protection gradients
None — the system does not use protection gradients over imagery because imagery never sits under body text.

---

## Iconography

- **No bundled icon font.** The codebase uses **inline SVGs**, hand-stroked at `stroke-width: 1.6–1.8`, rounded caps/joins, currentColor stroke. Examples live in `Footer.tsx` (phone, mail, pin, calendar, facebook, x, instagram), `Nav.tsx` (sun, moon, chevrons), and `CtaSections.tsx`.
- **Stroke style: outline, not filled.** Square frame is 24×24 (sometimes 12×12 for chevrons). Shape language is geometric with rounded corners.
- **No Lucide / Heroicons / Font Awesome / Phosphor** is imported. Icons are drawn in-repo, matching the utilitarian-friendly tone.
- **No emoji used as icons** anywhere.
- **Unicode**: only the star glyph `★` is used — in the testimonial 5-star row (`wf-cap-testimonial-star`).
- **Accent dots**: a recurring motif. Tiny 8×8 colored circles (`yellow`, `orange`, or `blue`) appear as bullet markers in nav dropdowns, checklists, and pricing lists. `wr-brand-dot` is a 7px rounded-square used next to the wordmark in the footer.
- **Partner logos** (Apple Pay, Google Pay, Stripe, AWS, DigitalOcean, Clover, Toast, TouchBistro, GDPR, Make, Zapier) are provided as **webp** files and rendered filtered to grayscale in the AwardsStrip/LogoGrid.

**Recommendation when mocking in this system**: draw outlined, 1.6–1.8 stroke SVGs with rounded terminals in Onest-adjacent geometry, OR use **Lucide** (matches stroke/weight) if you must pull from a CDN — flag the substitution. Do **not** use Material/Heroicons (wrong weight) or emoji.

---

## Font substitutions — flagged

- **Rodger Bold** is proprietary; the OTF in `assets/fonts/RodgerTest-Bold.otf` is the production file (copied from the codebase). Keep it bundled.
- **Onest** loads from Google Fonts — no substitution needed.
- **No missing fonts** to flag at this time. If you ever need a no-network fallback for Rodger, the closest Google Fonts match is **Archivo Black** (similar condensed-bold tone); flag this if used.

---

## Caveats

- **Only the marketing site is represented in the provided codebase.** There is no app/dashboard UI to recreate — `ui_kits/marketing/` is the only kit built. If there is a SaaS product UI, please attach it and we'll add `ui_kits/app/`.
- No slide decks were provided — `slides/` is not created.
- Some sub-pages (`/loyalty`, `/bring-back-customers`, `/social-media`) are routed in the app but their content pages weren't fully audited — the same tokens apply.
- The **glass-nav cursor-tracked specular highlight** is simplified in the UI kit; the full production treatment is in `wireframe-remy.css` (~200 lines of overlay + filter + specular layers) if pixel-perfect replication is needed.
