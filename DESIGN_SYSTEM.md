---
name: "sendPUSH | Loyaltymaster"
description: "A warm, credible local-growth website for direct customer messaging, loyalty, and retention campaigns."
status: "Phase 1 canonical consolidation"
sources:
  primary:
    - "RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/DESIGN.md"
    - "RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/PRODUCT.md"
  harvested:
    - "_archive/Loyaltymaster Design System V1.0/README.md"
approvedConflictResolutions:
  appStack: "Next.js 16 App Router, not Vite"
  componentSource: "/design-system-template-page and production Remy components are canonical"
  cardRadius: "20px primary desktop cards; 16px secondary, mobile, and form-adjacent cards"
  inputRadius: "16px tenant/trial inputs; 12px compact fields; pill email CTA inputs"
  typography: "label and eyebrow are separate text styles"
  glass: "glass treatment allowed only for existing nav/mobile shell"
  rodger: "Rodger Bold for headings; full Rodger family available; Rodger Regular approved for stats"
colors:
  ink: "#302127"
  text-muted: "#979093"
  text-subtle: "#bfb8bc"
  surface: "#ffffff"
  peach: "#fef0e9"
  cyan: "#eaf5f8"
  salmon: "#fde9e2"
  panel-gray: "#f4eff2"
  panel-light: "#faf8f9"
  dark-section: "#302127"
  dark-warm: "#1A1519"
  dark-deep: "#141015"
  orange: "#f37d39"
  blue: "#4c93af"
  yellow: "#fcb827"
  yellow-soft: "#fdd564"
  tag-yellow: "#fff3c4"
  error: "#d94f3a"
  warning: "#c48a12"
  success: "#2e8e7a"
  info: "#3a7a94"
typography:
  display:
    fontFamily: "\"Rodger Bold\", \"Rodger Bold Placeholder\", Arial, sans-serif"
    fontSize: "clamp(40px, 5.6vw, 72px)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "clamp(-0.5px, -0.012em, -0.8px)"
  headline:
    fontFamily: "\"Rodger Bold\", \"Rodger Bold Placeholder\", Arial, sans-serif"
    fontSize: "clamp(30px, 4vw, 52px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "clamp(-0.3px, -0.01em, -0.6px)"
  stat:
    fontFamily: "\"Rodger\", \"Rodger Regular\", Arial, sans-serif"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "\"Onest\", \"Onest Placeholder\", sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.48px"
  body:
    fontFamily: "\"Onest\", \"Onest Placeholder\", sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: "-0.4px"
  label:
    fontFamily: "\"Onest\", \"Onest Placeholder\", sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.2px"
  eyebrow:
    fontFamily: "\"Onest\", \"Onest Placeholder\", sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1
    textTransform: "uppercase"
    letterSpacing: "positive tracking"
rounded:
  pill: "999px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "24px"
  xl: "48px"
  section-mobile: "56px 0"
  section-tablet: "72px 0"
  section-desktop: "84px 0"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "58px"
    typography: "{typography.label}"
  card-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "26px 24px"
  card-secondary:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "26px 24px"
  input-tenant:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "18px 20px"
  input-compact:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
---

# Design System: sendPUSH | Loyaltymaster

## 1. Overview

**Creative North Star: "The Local Growth Counter"**

sendPUSH uses a warm, practical brand system for local businesses that need more
repeat visits and direct customer relationships. The interface should feel like a
real business tool presented with approachable marketing confidence: clear
sections, tactile CTAs, specific use cases, and a steady rhythm of proof,
comparison, and action.

The production reference is a **Next.js 16 App Router** site. The route
`/design-system-template-page` is the canonical component sampler for future
website work. V1.0 previews and UI kits are useful references, but they are not
the source of truth for component behavior.

The system rejects generic SaaS templates: no sterile blue or purple gradient
pages, no vague AI-looking panels, no endless same-sized feature-card grids, and
no startup sameness. New pages should reuse the existing Remy tokens and section
language before inventing a separate visual lane.

## 2. Colors

The palette is warm, local, and conversion-oriented. Soft section backgrounds
carry page rhythm; yellow and orange mark action and motion.

### Primary

- **Direct Action Yellow** (`#fcb827`, `var(--wr-accent-yellow)`): Primary CTA
  backgrounds, pricing toggle active state, and high-intent conversion moments.
- **Warm Motion Orange** (`#f37d39`, `var(--wr-accent-orange)`): CTA edges,
  hover states, active navigation, focus rings, and energetic accents.
- **Deep Business Ink** (`#302127`, `var(--wr-ink)`): Primary body text, dark
  sections, and high-contrast structure.

### Secondary And Neutral

- **Trust Blue** (`#4c93af`, `var(--wr-accent-blue)`): Process markers and
  cooler contrast against the warm palette.
- **Soft Yellow Tag** (`#fff3c4`, `var(--wr-tag-yellow)`): Tags and supporting
  labels that need warmth without CTA weight.
- **Peach Section** (`#fef0e9`, `var(--wr-bg-peach)`): Hero, tenant trial, and
  warm explanatory sections.
- **Cyan Section** (`#eaf5f8`, `var(--wr-bg-cyan)`): Problem and contrast
  sections.
- **Salmon Section** (`#fde9e2`, `var(--wr-bg-salmon)`): Use-case and process
  sections.
- **Panel Light** (`#faf8f9`, `var(--wr-bg-panel-light)`): Cards, FAQ items,
  and lighter containers.
- **Panel Gray** (`#f4eff2`, `var(--wr-bg-panel-gray)`): Inputs, toggles, and
  quiet UI surfaces.

### Named Rules

**The Yellow Means Action Rule.** Reserve `--wr-accent-yellow` for primary
action, pricing, and conversion controls. Do not dilute it across decorative
backgrounds.

**The Section Band Rule.** Long-form pages should use `wf-bg-peach`,
`wf-bg-cyan`, `wf-bg-salmon`, `wf-bg-white`, and `wf-bg-dark` to create rhythm
before inventing new section colors.

## 3. Typography

- **Display:** Rodger Bold with Rodger Bold Placeholder and Arial fallback.
- **Stats:** Rodger Regular is approved for large stat numerals when the lighter
  numeral look is needed.
- **Body:** Onest with Onest Placeholder fallback.
- **Brand Wordmark:** Lato for the live text logo.

Rodger Bold gives the site a distinctive, friendly commercial voice. Onest keeps
the page readable and practical for business owners scanning value, proof, and
pricing.

### Text Styles

- **Display:** Hero headlines and the largest page promises.
- **Headline:** Section headings and major persuasive beats.
- **Title:** Feature-card titles, pricing plan names, process titles, and compact
  section labels.
- **Body:** Main explanatory copy. Keep paragraphs readable and avoid dense
  walls of text.
- **Label:** Buttons and UI labels. Keep tight tracking.
- **Eyebrow:** Uppercase section tags. Keep short and use positive tracking.

## 4. Motion, Elevation, And Interaction

The system uses soft tactile elevation, not heavy floating surfaces. Most depth
comes from section color bands, borders, tonal layering, subtle sheens, and
restrained shadows.

- **Easings:** gentle `cubic-bezier(0.2, 0.8, 0.2, 1)`, standard
  `cubic-bezier(0.4, 0, 0.2, 1)`, reveal
  `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Durations:** `220ms` fast, `280ms` base, `560ms` reveal.
- **Scroll reveal:** opacity 0 to 1 plus translateY 24px to 0, staggered by
  order when used.
- **Reduced motion:** all animations must respect `prefers-reduced-motion`.
- **Primary CTA:** yellow pill, orange edge/focus, sheen, and small vertical
  lift. Do not scale the CTA.
- **Cards:** base shadow `0 8px 20px rgba(48, 33, 39, 0.06)`, hover shadow
  `0 14px 26px rgba(48, 33, 39, 0.12)`.
- **Focus ring:** orange outline with visible offset.

**The Lift Only When Useful Rule.** Surfaces should stay calm at rest. Use
stronger shadows only for interaction, forms, pricing emphasis, or conversion
containers.

## 5. Components And Surfaces

### Buttons

- Pill radius (`var(--wr-r-pill)`, `999px`) with a minimum height around `58px`.
- Primary buttons use yellow action color, dark text, orange edge treatment,
  sheen, and restrained lift.
- Loading and disabled states must use native disabled behavior and visible
  non-color-only state changes.

### Section Bands

- Hero and warm sections: `wf-section wf-bg-peach`.
- Problem and contrast sections: `wf-section wf-bg-cyan`.
- Use-case and process sections: `wf-section wf-bg-salmon`.
- Neutral content: `wf-section wf-bg-white`.
- Final CTA and dark proof: `wf-section wf-bg-dark`.

Sections are separated by background color changes, not dividers or icon rows.
Use at most one dark CTA band per page, near the bottom.

### Cards And Containers

- Primary desktop cards use `20px` radius.
- Secondary cards, mobile cards, and form-adjacent cards use `16px` radius.
- Smaller panels and FAQ items may use `12px`.
- Use cool-gray translucent borders around 22-36 percent alpha.
- Use white or panel-light surfaces on warm section bands.
- Use translucent bordered cards on dark sections only where needed.

### Inputs And Fields

- Tenant/trial conversion inputs use `16px` radius.
- Compact/default fields use `12px` radius.
- Email CTA inputs may use pill radius.
- Focus should shift toward a brighter background with orange border or ring.
- Errors, disabled states, and warnings must not rely on color alone.

### Navigation

Navigation is part of the shell, not the page body. It uses the live
`sendPUSH | Loyaltymaster` wordmark, Onest links, active orange states, a
responsive mobile panel, a theme toggle, and accessible skip-link behavior.
New source-to-page route bodies should not add their own nav, header, or footer
unless explicitly requested.

Glass treatment is approved only for the existing nav and mobile menu shell.
Do not use glassmorphism for page-body cards, heroes, panels, or generic AI
layouts.

## 6. Layout And Imagery

- Main content uses `--wr-container-main` (1280px), `--wr-container-focus`
  (840px), or `--wr-container-cta` (640px).
- Desktop grids may use 3 or 4 columns, fall back to 2 on tablet and 1 on
  mobile.
- Photography belongs inside rounded containers, never as full-bleed body
  background.
- No abstract tech stock, no hand-drawn illustration, no repeating texture, and
  no background-filling gradients.
- Partner logos appear monochrome or grayscale in rows and may desaturate less
  on hover.

## 7. Iconography

- Use inline outlined SVGs with rounded caps and joins.
- Stroke width should sit around 1.6-1.8.
- Use `currentColor` for icon strokes.
- Do not use icon fonts or emoji as icons.
- Lucide may be used only as a close fallback when inline SVG is impractical;
  flag the substitution.
- Avoid Material Icons, Heroicons, Font Awesome, and Phosphor for canonical
  components.

## 8. Do's And Don'ts

### Do

- Do reuse `/design-system-template-page` as the component reference before
  creating new website routes.
- Do use the existing `wf-section` band colors to create page rhythm.
- Do preserve Rodger Bold for large promises and Onest for UI/readability.
- Do keep CTAs tactile: yellow fill, orange edge/focus, pill shape, and
  restrained lift.
- Do keep future pages responsive across desktop, tablet, and mobile.
- Do maintain WCAG AA intent with visible focus, reduced motion support, and
  color-independent meaning.
- Do use Cloudinary images or intentional placeholders where images belong.

### Don't

- Don't add navbar, header, or footer to source-to-page route bodies when the
  shell already provides them.
- Don't make pages feel like generic SaaS templates, sterile blue or purple
  gradient pages, vague AI-looking layouts, or empty startup polish.
- Don't build endless identical card grids when stronger section structures are
  available.
- Don't use side-stripe borders, gradient text, decorative glassmorphism, or
  hero-metric templates as default design moves.
- Don't invent typography, CTA styles, or section colors before exhausting the
  existing Remy system.
- Don't rely on color alone for form states, warnings, success, or navigation
  status.
