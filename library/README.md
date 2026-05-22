# Loyaltymaster React Component Library

Phase 4 creates the clean React implementation layer for the Wave 1
Loyaltymaster/sendPUSH component registry.

## Source Authority

- `../registry/components.json` lists approved components and `libraryPath`
  targets.
- `../specs/components/*.md` defines editable human and AI usage rules.
- `../tokens/fonts.css`, `../tokens/design-tokens.json`, and
  `../tokens/tokens.css` define approved font loading and design tokens.
- `../Components/` is raw snapshot reference only. Do not import from it.

## Usage

Import font CSS, token CSS, and library CSS once in the consuming app shell:

```tsx
import "../tokens/fonts.css";
import "../tokens/tokens.css";
import "@loyaltymaster/design-system-library/src/styles.css";
```

Then import approved components from the library entry point:

```tsx
import { HeroMainSection, PricingSection } from "@loyaltymaster/design-system-library";
```

Read the relevant registry entry and component spec immediately before using a
component. If a spec rule changes, the next page must apply the changed rule.

## Validation

From this folder:

```bash
npm run typecheck
```

From the design-system root:

```bash
node scripts/validate-phase2.mjs
```
