# Booking Demo Request Section

Component ID: `booking-demo-request-section`
Registry: `registry/components.json`
Status: `stable`
Client boundary: `server`
Category: `conversion-section`
Library target: `library/src/components/BookingDemoRequestSection.tsx`
Raw evidence: `Components/Booking Demo Request Section/Production Ready/BookingDemoRequestSection.tsx`

## Purpose

Demo or virtual meeting booking body section with scheduling action, expectation copy, and support notes.

## When To Use

- Use when the page asks visitors to book a demo, call, walkthrough, or virtual meeting.
- Use only when the markdown outline selects `booking-demo-request-section` from `registry/components.json`.

## When Not To Use

- Do not use for trial signup, contact messages, newsletter capture, or generic email CTAs.
- Do not import or copy from `/Components/`; it remains evidence only.
- Do not invent variants, props, slots, tokens, or layout rules.

## Props

- `heading` (required): string.
- `body` (optional): string.
- `expectations` (optional): array.
- `bookingAction` (optional): object.
- `embedLabel` (optional): string.

## Variants

- `default`: Approved default layout for the source-page pattern.

## Slots

- `heading` (required): Approved heading slot for Booking Demo Request Section.
- `body` (optional): Approved body slot for Booking Demo Request Section.
- `expectations` (optional): Approved expectations slot for Booking Demo Request Section.
- `bookingAction` (optional): Approved bookingAction slot for Booking Demo Request Section.
- `embedLabel` (optional): Approved embedLabel slot for Booking Demo Request Section.

## States

- default: render approved content with canonical LoyaltyMaster spacing, type, and surfaces.
- hover/focus: interactive links and controls use approved CTA and focus token behavior.
- empty: use approved empty copy instead of inventing placeholder UI when the component supports empty content.
- responsive: stack to one column on mobile and preserve readable text rhythm.

## Accessibility Rules

- Preserve semantic section, heading, list, form, and link structure.
- Provide visible focus for every interactive element.
- Use real labels for inputs and controls.
- Respect reduced-motion preferences where motion exists.

## Screenshot

Approved screenshot: `assets/screenshots/booking-demo-request-section.png`

Visual evidence path: `assets/screenshots/booking-demo-request-section.png`
Evidence archive: `Components/Booking Demo Request Section`

## Token Usage

- `typography.headline`
- `typography.body`
- `color.surface.white`
- `color.background.peach`
- `dimension.radius.cardPrimary`
- `dimension.spacing.sectionDesktopY`
- `shadow.cardBase`
- `component.button.primary`

Do not replace these tokens with raw literals. If a needed value is missing, stop and request a token update.

## Composition Rules

- The component may be selected by Runbook A only when the page purpose matches the registry whenToUse rule.
- Runbook B must import the clean implementation from `library/src/components/BookingDemoRequestSection.tsx`.
- If the outline requires a field not present in the props or slots above, stop and create a new-component or component-change request.

## Design Rules

- Use Rodger display headings, Onest body/UI text, warm decisive accents, restrained shadows, and approved section rhythm.
- Keep page-body output body-only unless the selected component is an approved shell component.
- Do not nest decorative cards inside decorative cards.

## Markdown Call Syntax

```markdown
:::loyaltymaster-component id="booking-demo-request-section"
props:
  # use only registry-approved props from registry/components.json
:::
```

## AI Usage Contract

- Read this spec immediately before using `booking-demo-request-section`.
- Use the current registry entry as the machine-readable source of truth.
- Use only the approved props, variants, slots, tokens, accessibility rules, and composition rules listed here.
- Stop before creating a new variant or parallel component unless registry/spec/library/showcase are updated first.
