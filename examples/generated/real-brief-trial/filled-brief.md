# Filled Brief: Phase 10 Real Brief Trial

Source template: `templates/web-page-brief.md`

## Artifact Type

Body-only web page created from a practical Loyaltymaster/sendPUSH campaign
brief.

## Shell Scope

Body-only. The existing production website supplies global chrome.

## Goal

Create a campaign page body for local businesses that need to recover quiet
hours by sending a clear return-visit offer to customers who already know them.

## Audience

Local retail, wellness, beauty, and service businesses that depend on repeat
visits and need a direct customer channel.

## Primary User Problem

Customers may be nearby and willing to return, but the business cannot reliably
reach them at the right moment through social posts, manual follow-up, or
generic campaigns.

## Primary Action

Start free in 2 minutes by entering an email address.

## Required Source Copy

- Quiet hours can be recovered with one timely return-visit offer.
- The page must keep every section tied to direct loyalty messaging.
- The output must be body-only and must not include navbar/header/footer.
- If a missing section is needed, stop and use
  `templates/new-component-request.md`.

## Required Images Or Approved Asset References

- `assets/media/image02.png`
- `assets/media/image-placeholder-640-square.jpg`

## Approved Component Recipe

1. `hero-main-section`
2. `geo-fence-use-case`
3. `features-grid`
4. `feature-section-2-column-image`
5. `process-steps`
6. `comparison-table`
7. `faq-accordion`
8. `cta-with-button-email`

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
- `examples/generated/external-llm-dry-run/`
- `examples/approved/proof-led-landing-page.md`
- `examples/blocked/duplicate-global-chrome.md`
- `examples/blocked/generic-saas-card-grid.md`
- `examples/blocked/invented-component-variant.md`
- `examples/blocked/page-body-glassmorphism.md`
- `examples/blocked/raw-components-import.md`
- `examples/blocked/unapproved-token-literal.md`

## Stop Rule

If a user-supplied real brief needs a section outside this approved recipe,
stop and complete `templates/new-component-request.md`. Do not improvise inside
the page body.
