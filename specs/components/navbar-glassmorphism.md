# Navbar Glassmorphism

Component ID: `navbar-glassmorphism`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `client`
Category: `shell`
Library target: `library/src/components/NavbarGlassmorphism.tsx`
Raw snapshot: `Components/Navbar Glassmorphism/Navbar Glassmorphism.tsx`

## Purpose

Provides the approved sticky glass navigation shell and responsive mobile panel. It is the only approved glass treatment.

Registry description: Sticky glass navigation shell with responsive mobile panel and cursor-tracked highlight.

## When To Use

- Use only as the site shell navigation treatment.
- Use only when this approved component matches the page need more closely than a new pattern.
- Read this spec fresh immediately before using the component so edited rules are applied to the next artifact.

## When Not To Use

- Do not copy this glass treatment into page-body cards, heroes, or generic panels.
- Do not import or copy from `/Components/`; it is raw snapshot reference only.
- Do not invent visual variants, colors, radii, shadows, type styles, or compositions without approval.
- Do not use this component to create generic SaaS filler, page-body glassmorphism, or duplicate nav/header/footer.

## Props

- `activePath` (string, optional).
- Additional props are not allowed in the Phase 3 contract.

## States

- default: nav links and brand are visible.
- hover (desktop links): label stays ink; the orange underline (`color.accent.orange`)
  plus a restrained lift carry the state.
- hover/focus (mobile panel items): the label turns `color.accent.orange` — the same
  accent the desktop underline uses. No background, border, or shadow shift
  (owner call, 2026-07-11; the old floating shadow read as a background bar on
  borderless accordion links).
- focus: every nav link and menu control has visible focus.
- active: active path is indicated without color alone. Mobile panel items keep
  the persistent `.is-active` orange-border marker; flat links for the page being
  viewed also expose `aria-current="page"` (semantic only, no visual change).
- mobile-open: panel is accessible and dismissible.
- mobile-closed: panel is `inert` and `visibility: hidden` (visibility flips after
  the fade-out so closing still animates). Closed-panel controls must never be
  tab-reachable or present in the accessibility tree — at any viewport.
- mobile accordion group headings (owner call, 2026-07-11): section labels
  ("Guides", "Learn", "Company", the foot blurb titles) must never read as menu
  items. They use the eyebrow treatment — 12px, weight 700, uppercase, muted ink
  — with a hairline divider between groups (dark theme uses the light-on-dark
  hairline). Each group is `role="group"` labelled by its heading via
  `aria-labelledby`. The desktop mega panel keeps its chip-headed columns.
- mobile accordion content (owner call, 2026-07-11): the mobile accordions
  carry navigation links only. Do not nest a promo or trial CTA card inside an
  accordion body — the drawer already ends with the primary "Start Free" CTA,
  so an inline trial card just duplicates it. The desktop mega panel keeps its
  side blurb/CTA column.
- mobile drawer control shape (owner call, 2026-07-11): the close button, the
  accordion chevron toggles, and the menu rows all share one 12px
  rounded-square radius. No circular toggle controls inside the drawer — every
  control reads as the same family.
- responsive: desktop and mobile shells do not duplicate links visually.

## Interaction Rules (approved 2026-07-11, audited against WAI-ARIA APG)

- Desktop dropdowns are APG *disclosures* (`aria-expanded` + `aria-controls`), not
  `role="menu"`. Triggers open on hover with a short close-grace timer and toggle
  on click.
- Hover-open is a mouse-only affordance: gate it on `pointerType === "mouse"`.
  On touch devices a tap fires pointerenter *and* click in one gesture, so an
  ungated hover-open plus the click toggle opens-then-closes the panel on every
  first tap.
- Open dropdowns close on Escape (refocusing the trigger), outside press, the
  first scroll, and window resize (the panel position is measured on open, so a
  resize would leave it stale).
- Arrow keys navigate the open mega panel: ArrowDown from the trigger enters the
  first link; ArrowDown/ArrowUp step; Home/End jump.
- The mobile panel is a modal dialog and must honor the claim: Tab and Shift+Tab
  wrap inside the panel while open; Escape closes and restores focus to the
  hamburger; initial focus goes to the Close button (APG: first interactive
  element, never the dialog container).
- Scroll-lock the body while the panel is open and preventDefault `touchmove` on
  the backdrop (iOS scrolls the page behind the panel despite body
  overflow:hidden; overscroll-behavior only landed in iOS 16).
- Growing the viewport past the mobile breakpoint auto-closes the panel.
- If the shell ever renders from a shared layout instead of per page, add a
  pathname-driven effect that closes the panel and dropdowns on route change.

## Accessibility Rules

- Use semantic nav markup.
- Menu button must expose expanded state via `aria-expanded` with a stable label
  ("Menu" — never a label that contradicts the state, like "Open menu" while open).
- Disclosure triggers and accordion buttons carry `aria-controls` pointing at
  real ids on their panels.
- The mobile panel uses `role="dialog"` + `aria-modal="true"` and is labelled by
  a visually hidden "Menu" heading (`aria-labelledby`). `aria-modal` requires the
  focus trap above — never claim it without containment.
- The theme toggle exposes `aria-pressed`, mirrored off the DOM `data-theme`
  attribute after hydration.
- External links rendered as plain anchors carry `rel="noopener noreferrer"`.
- Preserve visible focus states and sufficient contrast in every implementation.
- Respect reduced-motion preferences when animation or transitions are present.

## Screenshot

Approved screenshot: `assets/screenshots/navbar-glassmorphism.png`

Use this screenshot as the visual reference for spacing, weight, rhythm, and proportion. The screenshot is not an import source.

## Token Usage

Approved tokens for this component:

- `fontFamily.wordmark`
- `typography.label`
- `color.accent.orange`
- `motion.duration.base`
- `shadow.cardBase`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update instead of improvising.

## Composition Rules

- Use only as the site shell navigation.
- Do not place inside generated page-body content unless explicitly requested.
- Do not reuse the glass treatment for cards, heroes, or generic panels.
- Keep the component inside the content role it was approved for in the registry.
- Do not wrap page sections in extra decorative cards or nest cards inside cards.

## Design Rules

- Glass is restricted to this nav/mobile shell by approved conflict resolution.
- Use wordmark font, label typography, orange accent, card shadow, and approved motion only.
- Keep the shell stable and readable over page content.
- Follow the approved Loyaltymaster/sendPUSH visual language: Rodger display moments, Onest readable UI/body text, warm decisive accents, restrained shadows, and purposeful section rhythm.
- Use 20px primary desktop card radius and 16px secondary/mobile/form-adjacent radius only where those roles apply.
- Glass treatment is prohibited in page-body surfaces unless this spec explicitly identifies the component as the approved nav/mobile shell.

## AI Usage Contract

- Before using `navbar-glassmorphism`, read this spec after reading `registry/components.json` and `tokens/design-tokens.json`.
- Treat this file as the editable rule source. If a rule here changes, apply the changed rule to the next generated page or artifact.
- Use `library/src/components/NavbarGlassmorphism.tsx` as the approved import path.
- Never import from `Components/Navbar Glassmorphism/Navbar Glassmorphism.tsx`; it remains a raw visual/code snapshot.
- Use only the approved props, states, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless the registry and this spec are updated first.

## Variants

- `default`: Approved default variant. Do not invent unregistered variants.

## Slots

- `activePath` (optional): Approved activePath content/input slot.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="navbar-glassmorphism"
props:
  # use only registry-approved props
:::
```
