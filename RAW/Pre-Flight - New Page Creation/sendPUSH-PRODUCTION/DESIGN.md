---
name: "sendPUSH | Loyaltymaster"
description: "A warm, credible local-growth website for direct customer messaging, loyalty, and retention campaigns."
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
  card-base:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "26px 24px"
  input-default:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "18px 20px"
---

# Design System: sendPUSH | Loyaltymaster

## 1. Overview

**Creative North Star: "The Local Growth Counter"**

sendPUSH uses a warm, practical brand system for local businesses that need more repeat visits and direct customer relationships. The interface should feel like a real business tool presented with approachable marketing confidence: clear sections, tactile CTAs, specific use cases, and a steady rhythm of proof, comparison, and action.

The primary component source for future page work is `/design-system-template-page`. In `src/next/SitePage.tsx`, that route resolves to `DesignSystemTemplatePage`, which composes the reusable website body from `HeroSection`, `LocalHeroBanner`, `AwardsStrip`, `LogoGrid`, `StatsSection`, `ProblemSection`, `TestimonialSection`, `UseCaseSection`, `FeaturesSection`, `ComparisonSection`, `ServiceAreaSection`, `PricingSection`, `ProcessSection`, `FaqSection`, `GoogleMapEmbed`, `FinalCtaSection`, and `TenantTrialSection`. The shell provides `Nav`, `Footer`, skip link, and theme live region.

The system rejects generic SaaS templates: no sterile blue or purple gradient pages, no vague AI-looking panels, no endless same-sized feature-card grids, and no startup sameness. New pages should reuse the existing Remy tokens and section language rather than inventing a separate visual lane.

**Key Characteristics:**

- Warm section bands: peach, cyan, salmon, white, and dark ink.
- Large Rodger Bold display headlines paired with readable Onest body copy.
- Pill CTAs with yellow fill, orange edge energy, and tactile hover lift.
- Cards and forms with modest radii, light borders, soft shadows, and responsive grids.
- WCAG AA intent: visible focus, keyboard-friendly components, reduced motion support, and color-independent meaning.

## 2. Colors

The palette is warm, local, and conversion-oriented: soft section backgrounds carry the page rhythm, while yellow and orange mark action and motion.

### Primary

- **Direct Action Yellow** (`#fcb827`, `var(--wr-accent-yellow)`): Primary CTA backgrounds, pricing toggle active state, and high-intent conversion moments.
- **Warm Motion Orange** (`#f37d39`, `var(--wr-accent-orange)`): CTA edges, hover states, active navigation, focus rings, and energetic accents.
- **Deep Business Ink** (`#302127`, `var(--wr-ink)`): Primary body text, dark sections, and high-contrast structure.

### Secondary

- **Trust Blue** (`#4c93af`, `var(--wr-accent-blue)`): Process markers, support accents, and cooler contrast against the warm palette.
- **Soft Yellow Tag** (`#fff3c4`, `var(--wr-tag-yellow)`): Tags, badges, and supporting labels that need warmth without CTA weight.

### Neutral

- **Surface White** (`#ffffff`, `var(--wr-white)`): Default page surface and card background.
- **Peach Section** (`#fef0e9`, `var(--wr-bg-peach)`): Hero, tenant trial, and warm explanatory sections.
- **Cyan Section** (`#eaf5f8`, `var(--wr-bg-cyan)`): Problem and contrast sections.
- **Salmon Section** (`#fde9e2`, `var(--wr-bg-salmon)`): Use-case and process sections.
- **Panel Light** (`#faf8f9`, `var(--wr-bg-panel-light)`): Cards, FAQ items, and lighter containers.
- **Panel Gray** (`#f4eff2`, `var(--wr-bg-panel-gray)`): Inputs, toggles, and quiet UI surfaces.
- **Muted Text** (`#979093`, `var(--wr-text-muted)`): Secondary body text, labels, footer copy.
- **Subtle Text** (`#bfb8bc`, `var(--wr-text-subtle)`): Placeholders and hints.

### Named Rules

**The Yellow Means Action Rule.** Reserve `--wr-accent-yellow` for primary action, pricing, and conversion controls. Do not dilute it across decorative backgrounds.

**The Section Band Rule.** New long-form pages should use `wf-bg-peach`, `wf-bg-cyan`, `wf-bg-salmon`, `wf-bg-white`, and `wf-bg-dark` to create rhythm before inventing new section colors.

## 3. Typography

**Display Font:** Rodger Bold with Rodger Bold Placeholder and Arial fallback.
**Body Font:** Onest with Onest Placeholder fallback.
**Brand Wordmark Font:** Lato for the live text logo.

**Character:** Rodger Bold gives the site a distinctive, friendly commercial voice. Onest keeps the page readable and practical, which matters for business owners scanning value, proof, and pricing.

### Hierarchy

- **Display** (700, `clamp(40px, 5.6vw, 72px)`, 1.03): Hero headlines and the largest page promises.
- **Headline** (700, `clamp(30px, 4vw, 52px)`, 1.05): Section headings and major persuasive beats.
- **Title** (700, `24px`, 1): Feature-card titles, pricing plan names, process titles, and compact section labels.
- **Body** (400, `20px`, 1.56): Main explanatory copy. Keep paragraphs readable and avoid dense walls of text.
- **Label** (700, `16px`, uppercase when used as `.wf-eyebrow`): Eyebrows, UI labels, and conversion controls.

### Named Rules

**The Big Promise Rule.** Use Rodger Bold for meaningful claims and business outcomes, not for every small label. Onest should carry most UI and explanatory text.

**The Scan First Rule.** Future pages must preserve strong heading contrast and short paragraphs so a business owner can understand the value without reading every line.

## 4. Elevation

The system uses soft tactile elevation, not heavy floating surfaces. Most depth comes from section color bands, borders, tonal layering, subtle sheens, and restrained shadows. Cards lift on hover, CTAs use edge shadows, and forms use soft shell shadows to make action surfaces feel physical.

### Shadow Vocabulary

- **Badge Shadow** (`var(--wr-shadow-badge): 0 7px 0 0 rgba(48, 33, 39, 0.82)`): Small badge-like elements that need a chunky, friendly base.
- **Email Shell Shadow** (`var(--wr-shadow-email): 0 4px 0 rgba(252, 184, 39, 0.35), inset 0 0 0 2px rgba(252, 184, 39, 0.45)`): Email CTA shells and high-intent input groups.
- **Card Base** (`0 8px 20px rgba(48, 33, 39, 0.06)`): Default process, feature, pricing, and content cards.
- **Card Hover** (`0 14px 26px rgba(48, 33, 39, 0.12)`): Hover or focus state for cards that behave like interactive surfaces.
- **Form Shell** (`var(--wf-tenant-form-shadow): 0 12px 24px rgba(48, 33, 39, 0.1)`): Tenant trial form and heavier conversion containers.

### Named Rules

**The Lift Only When Useful Rule.** Surfaces should stay calm at rest. Use stronger shadows only for interaction, forms, pricing emphasis, or conversion containers.

## 5. Components

The route `/design-system-template-page` is the canonical component sampler for new website pages. It includes the reusable page body sections and should be reviewed before building any new route.

### Buttons

- **Shape:** Pill radius (`var(--wr-r-pill)`, `999px`) with a minimum height around `58px`.
- **Primary:** `.wr-cta-join.wf-btn` uses yellow action color, dark CTA text, orange edge treatment, sheen, and small vertical lift on hover.
- **Hover / Focus:** Use `--wf-motion-base`, `--wf-motion-ease-gentle`, orange focus outline, and translate lift. Respect reduced motion.
- **Loading / Disabled:** Use `.wf-btn--loading` for spinner loading state and native `disabled` where applicable.

### Section Bands

- **Hero / Warm Sections:** `wf-section wf-bg-peach`.
- **Problem / Contrast:** `wf-section wf-bg-cyan`.
- **Use Case / Process:** `wf-section wf-bg-salmon`.
- **Neutral Content:** `wf-section wf-bg-white`.
- **Final CTA / Dark Proof:** `wf-section wf-bg-dark`.

### Cards / Containers

- **Corner Style:** Use `var(--wr-r-16)` or `var(--wr-r-20)` for repeated cards and forms.
- **Background:** Default to white or panel light on warm section bands; use translucent bordered cards on dark sections.
- **Shadow Strategy:** Start with `0 8px 20px rgba(48, 33, 39, 0.06)` and lift only on hover or emphasis.
- **Internal Padding:** Use the existing `24px` to `28px` card rhythm and collapse carefully on mobile.

### Inputs / Fields

- **Style:** `.wf-tenant-input` uses Onest, panel-light background, warm borders, and `var(--wr-r-16)` radius.
- **Focus:** Focus should shift toward white background with orange border/focus treatment.
- **Error / Disabled:** Use `.wf-tenant-input--error`, `.wf-email-cta--error`, `.wf-field-error`, and native disabled styling.

### Navigation

Navigation is part of the shell, not the page body. It uses the live text `sendPUSH | Loyaltymaster` wordmark, Onest links, active orange states, a responsive mobile panel, a theme toggle, and accessible skip-link behavior. New source-to-page routes should not add their own nav, header, or footer unless explicitly requested.

### Signature Route Components

- **HeroSection:** First-screen value proposition with CTA, checklist, and visual area.
- **TestimonialSection:** White and dark variants, optional email CTA.
- **UseCaseSection:** Reversible split section with eyebrow, heading, body, checklist, CTA, and image/placeholder.
- **PricingSection:** Monthly/yearly state with pricing cards and pro emphasis.
- **FaqSection:** Accessible accordion pattern.
- **TenantTrialSection:** Conversion form with labels, errors, disabled/loading states, and responsive grid.

## 6. Do's and Don'ts

### Do:

- **Do** reuse `/design-system-template-page` as the component reference before creating new website routes.
- **Do** use the existing `wf-section` band colors to create page rhythm.
- **Do** preserve Rodger Bold for large promises and Onest for UI/readability.
- **Do** keep CTAs tactile: yellow fill, orange edge/focus, pill shape, and restrained lift.
- **Do** keep future pages responsive across desktop, tablet, and mobile.
- **Do** maintain WCAG AA intent with visible focus, reduced motion support, and color-independent meaning.
- **Do** use Cloudinary images or intentional placeholders where images belong.

### Don't:

- **Don't** add navbar, header, or footer to source-to-page route bodies when the shell already provides them.
- **Don't** make pages feel like generic SaaS templates, sterile blue or purple gradient pages, vague AI-looking layouts, or empty startup polish.
- **Don't** build endless identical card grids with icon, heading, and text when a stronger section structure is available.
- **Don't** use side-stripe borders, gradient text, decorative glassmorphism, or hero-metric templates as default design moves.
- **Don't** invent new typography, CTA styles, or section colors before exhausting the existing Remy system.
- **Don't** rely on color alone for form states, warnings, success, or navigation status.
