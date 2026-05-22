# Landing Page Template

Approval Status: Approved

## Allowed Artifact Type

Use this template for a single-purpose Loyaltymaster landing page such as a
campaign, offer, trial start, pricing evaluation, or proof-led sales page.

## Required Human Inputs

- Landing page goal:
- Primary conversion action:
- Traffic source:
- Audience awareness level:
- Offer or promise:
- Required proof:
- Pricing or plan details:
- FAQ topics:
- Required assets:

## Required Files To Read

- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `BRAND.md`
- `DESIGN_SYSTEM.md`
- `tokens/design-tokens.json`
- `registry/components.json`
- each selected component `specPath`
- each selected component `libraryPath`
- `examples/README.md`
- `examples/approved/trial-conversion-page.md`
- `examples/approved/pricing-evaluation-page.md`
- `examples/approved/proof-led-landing-page.md`
- relevant files in `examples/blocked/`

## Approved Component Recipe

Choose one approved body-only recipe. Do not add unregistered sections. The
production website already provides global chrome, so normal landing pages must
not include `navbar-glassmorphism`, header, or `footer`.

| Landing Type | Approved Component Order |
|---|---|
| Trial conversion | `hero-main-section`, `button-email`, `features-grid`, `process-steps`, `faq-accordion` |
| Offer with email CTA | `hero-main-section`, `cta-with-button-email`, `feature-section-2-column-image`, `stats-card-strip`, `testimonial-single` |
| Pricing decision | `hero-main-section`, `billing-toggle-button`, `pricing-section`, `comparison-table`, `faq-accordion`, `cta-with-button-email` |
| Proof-led sales | `hero-main-section`, `stats-card-strip`, `testimonials-grid`, `image-grid`, `testimonial-single`, `cta-with-button-email` |
| Full trial form | `hero-main-section`, `cta-trial-full-form`, `feature-section-2-column-bullets-image`, `faq-accordion` |

`geo-fence-use-case` and `image-strip` may be used only when the brief is about
location-triggered use cases or when the selected component spec allows that
media proof pattern.

`navbar-glassmorphism` and `footer` are approved shell components only for
standalone artifacts that explicitly request their own global chrome. They are
not part of normal landing-page body recipes.

When `pricing-section` renders fewer than a full row of plan cards, keep the
pricing cards visually centered inside the section. Do not create a parallel
pricing layout to solve alignment.

## Required Spec And Library Evidence

| Registry ID | Role On Page | `specPath` Read | `libraryPath` To Use | Phase 7 Gate Checked |
|---|---|---|---|---|
| `navbar-glassmorphism` | Optional page shell when explicitly requested | `specs/components/navbar-glassmorphism.md` | `library/src/components/NavbarGlassmorphism.tsx` |  |
|  |  |  |  |  |

Every selected component must also use approved tokens from
`tokens/design-tokens.json`.

## Blocked Example Rejection Checks

Reject the landing page if it uses:

- a generic SaaS card grid from `examples/blocked/generic-saas-card-grid.md`
- page-body glass from `examples/blocked/page-body-glassmorphism.md`
- a new visual variant from `examples/blocked/invented-component-variant.md`
- raw `/Components/` imports from `examples/blocked/raw-components-import.md`
- duplicate nav or footer chrome from `examples/blocked/duplicate-global-chrome.md`
- raw color or spacing literals from `examples/blocked/unapproved-token-literal.md`

## Final Approval Checklist

- One landing page goal is stated.
- One primary conversion action is stated.
- Component order uses only `registry/components.json`.
- Each component has current `specPath` and `libraryPath` evidence.
- The output is body-only unless the brief explicitly requests a standalone
  artifact with its own shell.
- The recipe cites a relevant approved example.
- No component or variant is invented.
- Any missing need is moved to `templates/new-component-request.md`.
