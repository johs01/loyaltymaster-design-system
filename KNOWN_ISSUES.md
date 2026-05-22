# Known Issues After Phase 1

This ledger records issues deliberately deferred during Phase 1 cleanup. These
are known pre-existing problems or later-phase work items, not regressions from
the cleanup.

| Issue | Why Deferred | Fixed In |
|---|---|---|
| Most `/Components/*.tsx` snapshots use hardcoded color literals instead of canonical tokens. | Resolved by Phase 4 clean library; `/Components/` remains reference-only and is not a consumer import surface. | Phase 4 |
| Some `/Components/*.tsx` snapshots contain partial extraction artifacts. | Resolved by Phase 4 clean library; snapshots are preserved for reference only. | Phase 4 |
| Multiple token sources still exist inside the protected production replica. | Phase 4 intentionally did not migrate production. Root `/tokens/` and `/library/` are canonical for the design-system workspace; production adoption is later. | Later production-adoption phase |
| `wireframe-remy.css` remains large and mostly production-specific. | It lives inside the protected replica and should not be edited until production adoption. | Later production-adoption phase |
| `examples/approved/` and `examples/blocked/` are still empty. | Resolved by Phase 6 with approved composition examples and blocked drift examples tied to docs, registry IDs, specs, library paths, and showcase review. | Phase 6 |
| `.claude/commands/` is still empty. | Resolved by Phase 6 with repeatable preflight, component-selection, and validation commands. | Phase 6 |
| Duplicate production assets remain inside `sendPUSH-PRODUCTION/`. | Phase 4 intentionally did not migrate production. Root `/assets/` is canonical for the design-system workspace; production adoption is later. | Later production-adoption phase |
| `_archive/` contains useful historical material but is not canonical. | It is intentionally preserved for reversibility and future reference. | Optional later review |
| `specs/` and `library/` are not built yet. | Resolved. Phase 3 created specs; Phase 4 created the clean React implementation layer. | Phase 3 and Phase 4 |
| No static showcase `index.html` exists yet. | Resolved by Phase 5 as an isolated React showcase app under `showcase/app`; harvested previews remain historical references. | Phase 5 |
| Pixel-diff visual regression is not active yet. | Resolved by Phase 7C. `npm run verify:visual` now captures every component at native approved-reference size with local Rodger/Onest font readiness, browser/runtime metadata, strict thresholds, and zero skipped components. | Phase 7C |
| Footer visual source conflict. | Resolved by the approved hybrid rule: screenshot/raw light footer wins over the stale dark-footer spec text. | Phase 7 completion |
| Geo-fence visual reference is stale. | Resolved by replacing the old button-only artifact with a corrected use-case-section screenshot. | Phase 7 completion |
| Image grid source conflict. | Resolved by the approved hybrid rule: screenshot/raw partner-logo proof grid wins while keeping the stable `image-grid` component id. | Phase 7 completion |
| Testimonial single visual source conflict. | Resolved by the approved hybrid rule: screenshot/raw dark proof section wins over the stale white-card spec text. | Phase 7 completion |
| Some Phase 7 components still need tuning before pixel-diff. | Resolved by Phase 7C after Phase 7B tuning, local font/runtime parity, intentional reference regeneration, and strict gates for all 20 Wave 1 components. | Phase 7C |
| Exact font/runtime parity was not locked. | Resolved by Phase 7C with `tokens/fonts.css`, bundled local Onest files, runtime font checks, Chromium/deviceScaleFactor metadata, intentional reference regeneration, and stricter visual thresholds. | Phase 7C |
| Some Wave 1 components lacked live-template hover, focus, active, or open-state behavior. | Resolved by Phase 7E. The clean library now matches the approved interaction evidence, and `npm run verify:interactions` gates all 20 components with zero failed or partial results. | Phase 7E |
| Local regenerated screenshots did not prove the clean library matched the live sendPUSH runtime. | Resolved by Phase 7F. `npm run verify:production-fidelity` now gates all 20 Wave 1 components against live sendPUSH desktop and mobile targets with zero failed results. | Phase 7F |
| Final CTA button hover/focus/active parity differed from the production hero CTA. | Resolved by Phase 7G. Shared CTA button CSS now uses the production hero CTA text color, border alpha, shadow alpha, sheen, focus ring, disabled handling, and measured hover/active movement; the interaction audit now verifies CTA button focus directly. | Phase 7G |
| AI templates were Draft recipes only. | Resolved by Phase 8A. The approval authority approved the `.md` recipe layer, and templates are now marked `Approval Status: Approved`. | Phase 8A |
| Approved Markdown templates did not yet prove browser-rendered `.tsx` output. | Resolved by Phase 8B. Web-page and landing-page rendered fixtures now live in the showcase app at `/template-tests/web-page` and `/template-tests/landing-page`, with `npm run verify:templates` producing browser artifacts. | Phase 8B |
| New page recipes could still imply duplicate navbar/footer shell output. | Resolved by Phase 8C. Normal web-page and landing-page recipes are body-only by default; `navbar-glassmorphism` and `footer` remain shell-only exceptions for explicitly standalone artifacts. | Phase 8C |
| Two-card pricing rows could look left-aligned in rendered template fixtures. | Resolved by Phase 8C. `pricing-section` now documents and applies centered short pricing rows. | Phase 8C |
| External LLMs still lacked a single start-here packet and a complete generated recipe-to-TSX proof package. | Resolved by Phase 8D. `AI_START_HERE.md` is the entry point and `examples/generated/landing-page-body/` proves the approved landing-page recipe can become body-only `.tsx` output. | Phase 8D |
| Only the landing-page recipe had a complete generated proof package. | Resolved by Phase 8E. Generated proof packages now cover `examples/generated/web-page-body/`, `examples/generated/landing-page-body/`, `examples/generated/blog-document-body/`, and `examples/generated/brochure-content-body/`, with a documented new-component request for missing long-form article-body needs. | Phase 8E |
| The design system had approved recipe proofs but no complete external-LLM dry run from `AI_START_HERE.md` to a new body-only page. | Resolved by Phase 9. `examples/generated/external-llm-dry-run/` and `http://127.0.0.1:5177/template-tests/external-llm-dry-run` prove the start-here workflow with approved components only. | Phase 9 |
| External LLMs had no concise hand-off pack and no practical real-brief workflow proof. | Resolved by Phase 10. `EXTERNAL_LLM_HANDOFF.md`, `examples/generated/real-brief-trial/`, and `http://127.0.0.1:5177/template-tests/real-brief-trial` prove the hand-off and real-brief body-only workflow. | Phase 10 |

## Non-Negotiable Constraint

Do not fix deferred production-adoption items by editing
`RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/` until that later
phase is explicitly approved.
