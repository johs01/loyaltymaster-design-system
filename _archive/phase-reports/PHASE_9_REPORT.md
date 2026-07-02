# Phase 9 Report: External LLM Dry Run

## Summary

Phase 9 adds a complete synthetic external-LLM dry run. It proves an agent can
start at `AI_START_HERE.md`, follow the approved web-page recipe, cite current
registry/spec/library evidence, and render a body-only `.tsx` page using
approved Loyaltymaster components only.

## Added Artifacts

- `examples/generated/external-llm-dry-run/`
- `examples/generated/external-llm-dry-run/filled-brief.md`
- `examples/generated/external-llm-dry-run/ExternalLlmDryRunBodyExample.tsx`
- `examples/generated/external-llm-dry-run/component-evidence.md`
- `examples/generated/external-llm-dry-run/compliance-checklist.md`
- `examples/generated/external-llm-dry-run/human-approval-record.md`

## Rendered Dry-Run Proof

The showcase app now exposes:

- `http://127.0.0.1:5177/template-tests/external-llm-dry-run`

Browser reachability check:

- `curl http://127.0.0.1:5177/template-tests/external-llm-dry-run` returned `200`.

The dry run uses:

- `hero-main-section`
- `features-grid`
- `feature-section-2-column-bullets-image`
- `process-steps`
- `comparison-table`
- `faq-accordion`
- `cta-with-button-email`

## Workflow Result

The output is body-only. It excludes navbar/header/footer because the existing
production website supplies global chrome. It imports only from the approved
library layer and records component evidence against `registry/components.json`,
current `specPath`, current `libraryPath`, approved tokens, and approved/
blocked examples.

## Human Approval Status

Approved.

Approved by the user on 2026-05-20:
`http://127.0.0.1:5177/template-tests/external-llm-dry-run`.
The generated package is now an approved external-LLM dry-run example for the
current design-system rules.

## Protected Source Confirmation

Phase 9 does not edit:

- `/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION`
- `RAW/Pre-Flight - New Page Creation/sendPUSH-PRODUCTION/`
- `Components/`

Timestamp diff checks returned `0` changed lines for all three protected paths.

## Verification

Observed final verification:

```bash
node scripts/validate-phase2.mjs
# Phase 2/3/4/5/6/7/7B/7C/7D/7E/7F/8A/8B/8C/8D/8E/8F/9 validation passed.

cd library && npm run typecheck
# passed

cd showcase/app && npm run typecheck
# passed

cd showcase/app && npm run verify:templates
# Phase 9 template fixture verification passed for 5 rendered templates across 2 viewports.

cd showcase/app && npm run verify:showcase
# Phase 5 showcase smoke passed for 20 components across 2 viewports.
```

Generated Phase 9 rendered artifacts:

```text
showcase/app/artifacts/phase-9/template-fixture-results.json
showcase/app/artifacts/phase-9/external-llm-dry-run-desktop.png
showcase/app/artifacts/phase-9/external-llm-dry-run-mobile.png
```

## Rating

Rating: 10/10.

What makes it a 10: the external-LLM dry-run page has been browser-reviewed and
approved, and the validator now enforces the approved state.
