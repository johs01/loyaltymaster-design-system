# sendPUSH Marketing Site — UI Kit

Pixel-targeted recreation of the sendPUSH marketing site. Lifted from `sendPUSH-PRODUCTION/src/components/*` and `wireframe-remy.html`.

## Run
Open `index.html`. Loads React 18 + Babel from CDN and composes JSX components in-browser.

## Components
- `Nav.jsx` — floating glass pill nav with logo + CTA
- `Hero.jsx` — peach section, eyebrow + H1 + checklist + email CTA + image
- `Process.jsx` — 3-step "Invite · Segment · Send" cards
- `Features.jsx` — white cards with gradient icon tile
- `Pricing.jsx` — three tiers with highlighted Pro
- `Testimonials.jsx` — 5-star quote cards
- `FAQ.jsx` — accordion list
- `FinalCTA.jsx` — ink section with email capture
- `Footer.jsx` — wordmark + link columns
- `ui.jsx` — shared primitives (`Button`, `EmailCta`, `Checklist`, `Tag`, `IconTile`)

## Reference
- Live source: `sendPUSH-PRODUCTION/src/components/` (HeroSection, Features, Pricing, Footer, etc.)
- Styles: `sendPUSH-PRODUCTION/withremy.css` + `wireframe-remy.css` (folded into `../../colors_and_type.css`)
- Copy verbatim from production where possible; ui is simplified/cosmetic.
