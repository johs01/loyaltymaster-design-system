# Loyaltymaster Design System Assets

This folder is the canonical asset location for the Loyaltymaster design system.
New design-system docs, registries, specs, and showcase pages should reference
assets from here instead of from archived folders or the production replica.

## Folders

- `logos/`: sendPUSH and Loyaltymaster logo assets.
- `fonts/`: bundled Rodger font files and local Onest files used by
  `tokens/fonts.css`.
- `media/`: recovered local page media used by the showcase and visual gates.
- `awards/`: recovered local awards SVG assets used by `image-strip`.
- `partners/`: partner and integration badges using kebab-case filenames.
- `screenshots/`: canonical Phase 7C component reference screenshots.
- `screenshots/historical-phase-7b/`: preserved pre-Phase 7C references.

## Rules

- Use kebab-case filenames for new assets.
- Do not duplicate assets into new folders unless a build process requires it.
- Do not reference `_archive/` or `RAW/Pre-Flight - New Page Creation/` in new
  canonical docs or component specs.
- The `sendPUSH-PRODUCTION/` replica may still contain duplicate assets. Leave
  those untouched until an explicit production-adoption phase.
