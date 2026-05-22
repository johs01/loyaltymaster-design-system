# Generated Example: Brochure Content Body

Approval Status: Approved Example

This package proves `templates/brochure-content.md` can be filled and assembled
into body-only `.tsx` sales content using approved Loyaltymaster components
only.

## Files

- `filled-brief.md` - sample filled brief from the approved brochure-content
  template.
- `BrochureContentBodyExample.tsx` - body-only React composition using approved
  library imports only.
- `component-evidence.md` - registry ID, `specPath`, `libraryPath`, token, and
  screenshot evidence for every component used.
- `final-checklist.md` - final pre-publish checklist for this example.

## Rules Proven

- Starts from `AI_START_HERE.md`, `READ_FIRST_AI.md`, `PREFLIGHT.md`, and
  `templates/brochure-content.md`.
- Uses only component IDs from `registry/components.json`.
- Imports React implementations only from `library/src/components/` through the
  library index.
- Creates body content only; global chrome is excluded unless a standalone
  brochure shell is explicitly requested.
- Does not invent brochure-only cards, badges, ribbons, dividers, panels, icon
  systems, tokens, variants, or interaction behavior.
- Stops for `templates/new-component-request.md` if a future brochure needs a
  collateral pattern outside approved components.

## Human Review

Use the rendered template proof page as the comparison target:

- `http://127.0.0.1:5177/template-tests/brochure-content`

The production references remain read-only:

- `https://sendpush.loyaltymaster.com/`
- `https://sendpush.loyaltymaster.com/design-system-template-page`
