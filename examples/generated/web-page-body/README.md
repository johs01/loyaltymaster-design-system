# Generated Example: Web Page Body

Approval Status: Approved Example

This package proves `templates/web-page-brief.md` can be filled and assembled
into body-only `.tsx` content using approved Loyaltymaster components only.

## Files

- `filled-brief.md` - sample filled brief from the approved web-page template.
- `WebPageBodyExample.tsx` - body-only React composition using approved library
  imports only.
- `component-evidence.md` - registry ID, `specPath`, `libraryPath`, token, and
  screenshot evidence for every component used.
- `final-checklist.md` - final pre-publish checklist for this example.

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
  pattern outside the approved recipe.

## Human Review

Use the rendered template proof page as the comparison target:

- `http://127.0.0.1:5177/template-tests/web-page`

The production references remain read-only:

- `https://sendpush.loyaltymaster.com/`
- `https://sendpush.loyaltymaster.com/design-system-template-page`
