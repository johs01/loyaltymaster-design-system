# Generated Example: External LLM Dry Run

Approval Status: Approved

This package proves an external AI agent can start at `AI_START_HERE.md`, use
the approved `templates/web-page-brief.md` recipe, and create a body-only
`.tsx` page from approved Loyaltymaster components only.

## Files

- `filled-brief.md` - synthetic brief filled from the approved web-page
  template.
- `ExternalLlmDryRunBodyExample.tsx` - body-only React composition using
  approved library imports only.
- `component-evidence.md` - registry ID, `specPath`, `libraryPath`, token, and
  screenshot evidence for every component used.
- `compliance-checklist.md` - external-LLM workflow compliance proof.
- `human-approval-record.md` - browser-review status for the dry-run route.
- `final-checklist.md` - final pre-publish checklist for this dry-run package.

## Rules Proven

- Starts from `AI_START_HERE.md`, `READ_FIRST_AI.md`, `PREFLIGHT.md`, and
  `templates/web-page-brief.md`.
- Uses only component IDs from `registry/components.json`.
- Imports React implementations only from `library/src/components/` through the
  library index.
- Creates body content only; global chrome is excluded.
- Does not invent sections, cards, buttons, layouts, tokens, variants, or
  interaction behavior.
- Stops for `templates/new-component-request.md` if a future brief needs a
  pattern outside the approved registry.

## Human Review

Use the rendered dry-run proof page as the comparison target:

- `http://127.0.0.1:5177/template-tests/external-llm-dry-run`

Approved by the user on 2026-05-20 after browser review.

The production references remain read-only:

- `https://sendpush.loyaltymaster.com/`
- `https://sendpush.loyaltymaster.com/design-system-template-page`
