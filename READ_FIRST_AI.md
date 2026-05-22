# Read First: Loyaltymaster AI Operating Manual

This is the core operating manual an AI agent must read before creating
Loyaltymaster or sendPUSH web pages, documents, landing pages, blog posts,
sales pages, or subdomain content.

For external LLMs entering this folder, start with `AI_START_HERE.md`; it points
back to this operating manual and defines the full read order.

## Purpose

The design system exists to prevent AI design drift. Every new artifact must
look and read like it came from the same Loyaltymaster system, using the same
brand rules, tokens, approved components, and workflow.

## Required Reading Order

1. `AI_START_HERE.md` - external LLM entry point and full workflow overview.
2. `BRAND.md` - audience, voice, anti-references, and brand principles.
3. `DESIGN_SYSTEM.md` - visual rules, tokens, motion, components, and
   constraints.
4. `PREFLIGHT.md` - mandatory workflow before planning any new page.
5. `tokens/design-tokens.json` - canonical machine-readable token source.
6. `registry/components.json` - approved component names and metadata.
7. `specs/README.md` - how component specs govern future artifacts.
8. `specs/components/<component-id>.md` - read each relevant component spec
   immediately before using that component.
9. `examples/README.md` - how approved and blocked examples are used.
10. Relevant files in `examples/approved/`, `examples/blocked/`, and
   `examples/generated/` before
   planning a similar artifact.
11. `templates/README.md` - approved recipe layer for future AI-created
    Loyaltymaster artifacts.
12. The relevant approved template in `templates/` for the artifact type.

## Current Design-System Status

- The canonical docs live at the workspace root.
- `/assets/` is the canonical asset location.
- `/tokens/design-tokens.json` is the canonical machine-readable token source.
- `/registry/components.json` is the canonical Wave 1 component manifest.
- `/specs/components/` is the canonical editable component-rule layer.
- `/library/src/components/` is the canonical clean React implementation layer
  for Wave 1 components.
- `/showcase/app/` is the canonical rendered visual review layer for Wave 1
  components.
- `/tokens/fonts.css` is the canonical font runtime. It loads local Rodger
  files and local Onest files before `tokens.css` and library styles.
- `/showcase/app/scripts/verify-visual.mjs` is the Phase 7C visual fidelity
  gate. It captures each Wave 1 component at the approved screenshot's inferred
  CSS size after local font readiness, compares it with the intentionally
  regenerated Phase 7C reference at native aspect ratio, and fails if any
  component is skipped, failing, or drifting in width, height, aspect ratio,
  font readiness, browser runtime, deviceScaleFactor, or capture timing
  metadata.
- `/showcase/app/scripts/phase7-visual-gates.json` records each component's
  current Phase 7C visual classification and strict threshold status; all 20
  Wave 1 components are gated.
- `/assets/screenshots/historical-phase-7b/` preserves the pre-regeneration
  screenshots. `/assets/screenshots/*.png` is now the intentionally regenerated
  Phase 7C canonical reference set.
- `/showcase/app/scripts/phase7d-interaction-audit.mjs` compares hover, focus,
  active, pressed, expanded, and mobile-open behavior against the live template
  page, raw snapshots, specs, and local showcase.
- `/showcase/app/scripts/verify-interactions.mjs` is the Phase 7E interaction
  gate. It fails if any Wave 1 component is `Fail`, `Partial`,
  `Needs decision`, missing, or unclassified.
- `/showcase/app/scripts/phase7f-production-targets.json` maps every Wave 1
  component to its live sendPUSH runtime URL, live selector, production source
  file, raw snapshot, spec, library path, and local showcase specimen.
- `/showcase/app/scripts/phase7f-production-fidelity.mjs` is the Phase 7F
  production-fidelity gate. It captures live sendPUSH sections and local
  library specimens at desktop and mobile widths, writes side-by-side artifacts
  under `/showcase/app/artifacts/phase-7f/`, and fails on major geometry,
  layout, or visual drift.
- `/examples/approved/` contains approved composition examples that show how
  docs, tokens, registry IDs, specs, library paths, and showcase review fit
  together.
- `/examples/blocked/` contains drift examples that must be rejected before
  implementation.
- `/templates/` contains approved Markdown recipe templates. These `.md`
  templates do not become `.tsx`; they tell an AI which approved components may
  be assembled into a `.tsx` page or other approved artifact.
- `/showcase/app/src/templateFixtures.tsx` contains Phase 8E rendered `.tsx`
  proof fixtures for the approved web-page, landing-page, blog/document, and
  brochure-content templates.
- `/showcase/app/scripts/verify-template-fixtures.mjs` is the Phase 8E rendered
  template gate. It verifies `/template-tests/web-page`,
  `/template-tests/landing-page`, `/template-tests/blog-document`, and
  `/template-tests/brochure-content` render in browser viewports and use only
  approved component recipes with registry/spec/library evidence.
- `/AI_START_HERE.md` is the Phase 8D external LLM entry point.
- `/examples/generated/` contains Phase 8D/8E generated example packages
  proving approved `.md` recipes can become body-only `.tsx` content using
  approved library imports only. The blog/document package records the missing
  article-body/content-block component as a new-component request instead of
  inventing prose layout.
- Current generated packages: `examples/generated/landing-page-body/`,
  `examples/generated/web-page-body/`,
  `examples/generated/blog-document-body/`, and
  `examples/generated/brochure-content-body/`.
- `/examples/generated/external-llm-dry-run/` is the Phase 9 proof package for
  the full external-LLM workflow from `AI_START_HERE.md` to body-only `.tsx`
  output.
- `/.claude/commands/` contains repeatable AI workflow commands for preflight,
  component selection, and validation.
- `/Components/` is raw snapshot reference only. Do not import from it.
- `_archive/` is historical material only. Do not import from it.
- `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/` is a production
  replica and stays untouched until a later production-adoption phase.

## Component Spec Rule

The registry tells you which approved components exist. The component spec tells
you how each component may be used. Before using any component, open the current
`specPath` from `registry/components.json` and apply that current spec. If a
rule was edited in the spec, the next artifact must use the edited rule.

## Component Implementation Rule

Use the `libraryPath` from `registry/components.json` when importing a Wave 1
React component. The implementation must come from `/library/src/components/`,
not from `/Components/`, `_archive/`, or the protected production replica.

## Component Visual Review Rule

Use `/showcase/app/` to review live component renders against approved
screenshots. The Phase 5 smoke verifier proves every Wave 1 component renders in
desktop and mobile viewports. Phase 7C is the current visual fidelity gate for
all 20 Wave 1 components. Before treating a component as visually stable, check
its entry in `showcase/app/scripts/phase7-visual-gates.json`, review
`PHASE_7C_REPORT.md`, and run `npm run verify:visual` from
`showcase/app`; skipped components are no longer accepted.

## Component Interaction Review Rule

Use Phase 7E interaction verification before treating a component as production
ready. Run `npm run verify:interactions` from `showcase/app`; every Wave 1
component must pass hover/focus/active/open-state verification against the live
template page and raw snapshot evidence.

## Production Fidelity Rule

Use Phase 7F production-fidelity verification before treating a component as
ready for production adoption. Run `npm run verify:production-fidelity` from
`showcase/app`; every Wave 1 component must pass desktop and mobile comparison
against the live sendPUSH runtime targets in
`showcase/app/scripts/phase7f-production-targets.json`. Regenerated local
screenshots do not replace live production fidelity unless a later phase
explicitly approves a new reference.

## Example Rule

Before planning a new artifact, compare the brief against
`examples/approved/` for acceptable composition patterns and
`examples/blocked/` for drift patterns. Approved examples do not override
current specs. If a spec changed after an example was written, the current spec
wins.

## Template Recipe Rule

Before planning a new Loyaltymaster artifact, choose the approved template in
`templates/` that matches the artifact type. Treat the template as a recipe,
not a rendered file. For web pages and landing pages, the output should be a
`.tsx` composition that imports approved components from the current
`libraryPath` values in `registry/components.json`.

If the approved template cannot satisfy the brief using current registry
components, stop and complete `templates/new-component-request.md`. Do not add
new sections, cards, buttons, layouts, visual variants, tokens, or interaction
behavior inside the artifact itself.

For web-page, landing-page, blog/document, and brochure-content recipes, review
the Phase 8E browser fixtures:

- `http://127.0.0.1:5177/template-tests/web-page`
- `http://127.0.0.1:5177/template-tests/landing-page`
- `http://127.0.0.1:5177/template-tests/blog-document`
- `http://127.0.0.1:5177/template-tests/brochure-content`
- `http://127.0.0.1:5177/template-tests/external-llm-dry-run`

These fixtures prove the approved Markdown recipes can be assembled into real
`.tsx` outputs without leaving the Loyaltymaster design system.

For complete external-LLM examples, review the matching package under
`examples/generated/`. Each package includes a filled brief, body-only `.tsx`
composition, component evidence, and final checklist. If the blog/document brief
needs unstructured long-form article layout, follow the documented stop point
in `examples/generated/blog-document-body/new-component-request.md`.

Before using the system for a real new page, review
`examples/generated/external-llm-dry-run/` and
`http://127.0.0.1:5177/template-tests/external-llm-dry-run`.

For external hand-off and a practical real-brief proof, also read
`EXTERNAL_LLM_HANDOFF.md`, review `examples/generated/real-brief-trial/`, and
open `http://127.0.0.1:5177/template-tests/real-brief-trial`.

For draft web page outlines, use `LLM_MARKDOWN_OUTLINE_PACK.md`. That pack is
Markdown outline mode only: no TSX, JSX, HTML, CSS, JavaScript, React code, or
implementation files until a human approves the outline.

## Body-Only Web Page Rule

For normal new web pages, landing pages, sales pages, and subdomain pages built
inside the existing production website, create body content only. The production
website already provides the navbar/header and footer. Do not include
`navbar-glassmorphism`, header, or `footer` unless the brief explicitly says the
artifact is standalone and needs its own shell.

`navbar-glassmorphism` and `footer` remain approved registry components for
standalone artifacts and design-system review surfaces only. They are not part
of default page-body recipes.

## Non-Negotiable Rules

- Use `sendPUSH | Loyaltymaster` naming exactly.
- Build from approved components and tokens before inventing anything.
- Start from an approved template recipe in `templates/` before creating a new
  page, landing page, document, brochure, blog post, sales page, or subdomain.
- External LLMs must start from `AI_START_HERE.md`.
- Read the relevant component spec immediately before using a component.
- Import approved React implementations from `/library/src/components/`.
- Use the Phase 7C showcase visual gate, Phase 7E interaction gate, and Phase
  7F production-fidelity gate before treating a new composition as aligned.
- Use approved examples as composition references and blocked examples as
  rejection tests before planning.
- Do not add page-body nav, header, or footer unless the brief explicitly
  requests a standalone artifact with its own shell.
- Do not use generic SaaS layouts, purple/blue gradient styling, vague AI
  panels, decorative glassmorphism, or endless identical feature-card grids.
- Do not invent component variants or visual treatments that are not allowed in
  the relevant spec.
- Use yellow only for primary action and high-intent conversion moments.
- Use Rodger Bold for major promises and Onest for UI/body readability.
- Keep output responsive and accessible with visible focus and reduced-motion
  support.
- Use Cloudinary images or intentional placeholders where images belong.

## Approved Conflict Resolutions

- The production stack is Next.js 16 App Router, not Vite.
- `/design-system-template-page` is canonical; archived previews are references.
- Primary desktop cards use 20px radius; secondary/mobile/form-adjacent cards
  use 16px.
- Tenant/trial inputs use 16px radius; compact fields use 12px; email CTA inputs
  may be pill-shaped.
- `label` and `eyebrow` are separate text styles.
- Glass treatment is allowed only for the existing nav/mobile shell.
- Rodger Bold is the default heading font; the full Rodger family is available,
  and Rodger Regular may be used for stat numerals.

## Stop Conditions

Stop and ask before proceeding if a brief requires a missing token, a missing
component, a new brand direction, a new visual language, or changes inside the
protected production replica.
