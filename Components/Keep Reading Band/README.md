# Keep Reading Band — Evidence

Handoff evidence for the canon-promoted `keep-reading-band` registry
component (2026-09-28). The band already runs in two places:

- **pages** variant — loyaltymaster.com product and article pages, production
  `src/components/RelatedPages.tsx` (for example
  https://loyaltymaster.com/features/ `#related`). Until 2026-09-28 it existed
  only as prose in `DESIGN_SYSTEM.md` (whole-card links).
- **articles** variant — blog.loyaltymaster.com single posts (the "Keep
  reading / Related Articles" band, published 2026-09-27).

Files:

- `RelatedPages.tsx` — frozen snapshot of the production component (evidence
  only, never a runtime import source).
- `keep-reading-articles.bricks.json` — frozen snapshot of the blog single
  template's Keep reading subtree (`sgsec2`, template 2531).
- `keep-reading-band.png` — visual reference for the articles variant (same
  image as `assets/screenshots/keep-reading-band.png`), cropped from the
  approved redesign mockup capture `/Users/johs777/LOYALTYMASTER/WORDPRESS/implementation/proposal/screens/mockup/mock-article-1440-1.png`
  (y 112-869). No local capture of the pages variant exists; capture it from
  https://loyaltymaster.com/features/ `#related` in the gate-extension session.

Runtime implementation: `library/src/components/KeepReadingBand.tsx`.
