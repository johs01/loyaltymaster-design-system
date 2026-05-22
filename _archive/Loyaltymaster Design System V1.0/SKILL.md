---
name: sendpush-design
description: Use this skill to generate well-branded interfaces and assets for sendPUSH / Loyaltymaster, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Start here:
- `README.md` — brand context, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — ready-to-load CSS vars + semantic typography (H1/H2/H3, eyebrow, stat-value) and the full Rodger font family
- `preview/` — small specimen cards for colors, type, spacing, components (useful reference)
- `ui_kits/marketing/` — React + HTML recreation of the marketing site; lift components from here (`Nav`, `Hero`, `Pricing`, `Features`, `Testimonials`, `FAQ`, `FinalCTA`, `Footer`, `PartnerStrip`) and the primitives in `ui.jsx` (`Button`, `EmailCta`, `Checklist`, `Tag`, `IconTile`, `Icon`)
- `assets/` — logos (`assets/logos/`), partner badges (`assets/partners/`), full Rodger family (`assets/fonts/`)

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always import `colors_and_type.css` and lean on its CSS variables — don't invent new hex codes. Use `Rodger` (display, 700 Bold for headings; 400 Regular for large stat numerals) and `Onest` (body, 400/500/600/700).

If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface, variation count, tone), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key brand rules:
- Product name is **sendPUSH** (lowercase `send`, uppercase `PUSH`). Parent brand is **Loyaltymaster**.
- No emoji in copy or UI.
- Primary CTA is always a yellow pill with a hard orange edge (`box-shadow: 0 5px 0 #f37d39`).
- Tone: direct, benefit-led, reassuring. Promises have concrete numbers ("95%", "2 min", "$19/mo").
- Section backgrounds alternate soft tints (peach, cyan, salmon, yellow, panel-light) with a single ink-colored final CTA.
