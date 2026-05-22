# Blocked Example: Raw Components Import

## Verdict

Blocked.

## Rule Violated:

Do not import from `/Components/`. That folder is raw snapshot reference only.

## Bad Pattern

```tsx
import HeroMainSection from "../Components/Hero Main Section.tsx";
```

## Required Correction

Use the selected component's `libraryPath` from `registry/components.json`, such
as `library/src/components/HeroMainSection.tsx`, after reading
`specs/components/hero-main-section.md`.
