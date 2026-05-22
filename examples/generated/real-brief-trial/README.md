# Generated Example: Phase 10 Real Brief Trial

Approval Status: Pending human browser review

This package proves the approved external-LLM workflow against a practical
Loyaltymaster/sendPUSH brief: create a body-only page that helps a local
business recover quiet hours with direct loyalty offers.

No separate user-supplied page brief was provided for Phase 10, so this package
uses the current approved Loyaltymaster/sendPUSH use case as the real-brief
trial input. Replace `filled-brief.md` with a user-supplied brief when one is
available; keep the same evidence and approval gates.

## Files

- `filled-brief.md` - real-brief trial filled from
  `templates/web-page-brief.md`.
- `RealBriefTrialBodyExample.tsx` - body-only React composition using approved
  library imports only.
- `component-evidence.md` - registry ID, `specPath`, `libraryPath`, token, and
  screenshot evidence for every selected component.
- `compliance-checklist.md` - external-LLM workflow compliance proof.
- `human-approval-record.md` - browser-review status for the Phase 10 route.
- `final-checklist.md` - final pre-publish checklist for this package.

## Rules Proven

- Starts from `AI_START_HERE.md`, `READ_FIRST_AI.md`, `PREFLIGHT.md`, and
  `templates/web-page-brief.md`.
- Uses only component IDs from `registry/components.json`.
- Imports React implementations only from `library/src/components/` through the
  library index.
- Creates body content only; global chrome is excluded.
- Does not invent sections, cards, buttons, layouts, tokens, variants, or
  interaction behavior.
- Stops for `templates/new-component-request.md` if a future real brief needs a
  pattern outside the approved registry.

## Human Review

Use the rendered proof page as the comparison target:

- `http://127.0.0.1:5177/template-tests/real-brief-trial`

The production references remain read-only:

- `https://sendpush.loyaltymaster.com/`
- `https://sendpush.loyaltymaster.com/design-system-template-page`
