# Loyaltymaster Templates

Approval Status: Approved

## Purpose

This folder is the canonical approved AI template layer for future
Loyaltymaster digital content. Templates are composition contracts, not
inspiration boards. They tell humans and AI agents which approved components
may be combined, which files must be read, and when work must stop for a new
component request.

## Hard Lego Rule

Templates may only combine approved components from `registry/components.json`.
They may not introduce new sections, cards, buttons, layouts, visual variants,
tokens, or interaction behavior. Do not invent components, variants, tokens, or
interaction behavior inside a template.

Do not invent components, variants, tokens, or interaction behavior.

If no approved component fits the artifact need, stop and complete
`templates/new-component-request.md`. The missing component must be built,
registered, specified, implemented, showcased, visually gated, interaction
gated, production-fidelity gated, and explicitly approved before any template
may use it.

## Body-Only Web Page Rule

Normal new web pages, landing pages, sales pages, and subdomain pages are
body-only recipes. The production website already provides navbar/header and
footer. Do not include `navbar-glassmorphism`, header, or `footer` unless the
brief explicitly requests a standalone artifact with its own shell.

`navbar-glassmorphism` and `footer` remain approved shell components, but they
are shell-only exceptions. They are not default ingredients for page-body
templates.

## Required Files To Read

Every template workflow starts by reading:

- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `BRAND.md`
- `DESIGN_SYSTEM.md`
- `tokens/design-tokens.json`
- `registry/components.json`
- relevant component `specPath` files from `registry/components.json`
- relevant component `libraryPath` files from `registry/components.json`
- `examples/README.md`
- at least one relevant file in `examples/approved/`
- every relevant drift pattern in `examples/blocked/`
- `showcase/app/scripts/phase7-visual-gates.json`
- `showcase/app/artifacts/phase-7d/interaction-results.json`
- `showcase/app/artifacts/phase-7f/production-fidelity-results.json`

## Template Files

| Template | Allowed Artifact Type | Status |
|---|---|---|
| `templates/web-page-brief.md` | Web page brief before page planning | Approved |
| `templates/landing-page.md` | Landing page composition | Approved |
| `templates/blog-document.md` | Blog post or document composition | Approved |
| `templates/brochure-content.md` | Brochure or sales content composition | Approved |
| `templates/component-selection-checklist.md` | Component selection audit | Approved |
| `templates/final-pre-publish-checklist.md` | Final artifact approval gate | Approved |
| `templates/ai-compliance-checklist.md` | AI compliance proof | Approved |
| `templates/new-component-request.md` | Missing component request | Approved |

## Approved Component Pool

The current approved component pool is the Wave 1 registry:

- `billing-toggle-button`
- `button-email`
- `comparison-table`
- `cta-trial-full-form`
- `cta-with-button-email`
- `faq-accordion`
- `feature-section-2-column-bullets-image`
- `feature-section-2-column-image`
- `features-grid`
- `footer`
- `geo-fence-use-case`
- `hero-main-section`
- `image-grid`
- `image-strip`
- `navbar-glassmorphism`
- `pricing-section`
- `process-steps`
- `stats-card-strip`
- `testimonial-single`
- `testimonials-grid`

For every selected component, cite its current `specPath` and `libraryPath`
from `registry/components.json`. A template may not use a component that is not
listed in the current registry.

## Approval Lifecycle

1. Draft templates are created in this folder.
2. `PHASE_8_TEMPLATE_APPROVAL_PACKET.md` lists each template, allowed component
   recipes, drift risks blocked, and approval questions.
3. The approval authority reviews the packet.
4. The current template set is explicitly approved and marked `Approved`.
5. Approved templates are wired into `READ_FIRST_AI.md`, `PREFLIGHT.md`,
   `.claude/commands/`, `registry/README.md`, and `KNOWN_ISSUES.md`.
6. Phase 8B rendered template fixtures prove approved Markdown recipes can
   become browser-reviewable `.tsx` pages without inventing new components.
7. Phase 8D adds `AI_START_HERE.md` and
   `examples/generated/landing-page-body/` so external LLMs have one entry
   point and one complete approved recipe-to-body-output example.
8. Phase 8E adds generated proof packages for `examples/generated/web-page-body/`,
   `examples/generated/blog-document-body/`, and
   `examples/generated/brochure-content-body/`. The blog/document proof records
   the missing article-body/content-block need as a new-component request
   instead of inventing layout.
9. Phase 10 adds `EXTERNAL_LLM_HANDOFF.md` and
   `examples/generated/real-brief-trial/` as the practical real-brief workflow
   proof.
10. Phase 11 adds `LLM_MARKDOWN_OUTLINE_PACK.md` as the copy-paste prompt for
   no-code Markdown outline mode before TSX implementation.
11. Future edits to an approved template must go back through human review
   before the edited template is treated as approved.

## Protected Sources

`/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION` and
`RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/` are read-only
reference sources. Templates may not instruct agents to edit, import from, or
copy runtime code from either protected source.
