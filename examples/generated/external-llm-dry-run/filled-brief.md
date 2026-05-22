# Filled Brief: External LLM Dry Run

Source template: `templates/web-page-brief.md`

## Artifact Type

Synthetic body-only web page created to prove the external LLM workflow.

## Shell Scope

Body-only. The existing production website supplies global chrome.

## Goal

Create a win-back campaign page body that shows an external agent can read the
design-system folder, select approved components, and create a Loyaltymaster
page body without inventing layout or touching protected sources.

## Audience

External LLM agents such as Codex, Claude, Gemini, ChatGPT, and reviewers who
need proof that the approved recipe workflow can produce a real visual page.

## Primary Action

Start free in 2 minutes by entering an email address.

## Approved Component Recipe

1. `hero-main-section`
2. `features-grid`
3. `feature-section-2-column-bullets-image`
4. `process-steps`
5. `comparison-table`
6. `faq-accordion`
7. `cta-with-button-email`

## Required Files Read

- `AI_START_HERE.md`
- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `BRAND.md`
- `DESIGN_SYSTEM.md`
- `tokens/design-tokens.json`
- `registry/components.json`
- `templates/README.md`
- `templates/web-page-brief.md`
- `examples/README.md`
- `examples/generated/web-page-body/`
- `examples/approved/proof-led-landing-page.md`
- `examples/blocked/duplicate-global-chrome.md`
- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/page-body-glassmorphism.md`
- `examples/blocked/raw-components-import.md`
- `examples/blocked/unapproved-token-literal.md`

## Stop Rule

If a future external LLM dry run or real page brief needs a section outside this
approved recipe, stop and complete `templates/new-component-request.md`. Do not
improvise inside the page body.
