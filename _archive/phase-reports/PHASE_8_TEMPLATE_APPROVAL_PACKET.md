# Phase 8 Template Approval Packet

## Purpose

This packet records the approval of the AI template layer in `templates/`.
The templates are designed to make future Loyaltymaster artifacts work like a
Lego system: every page, document, brochure, blog post, or sales asset must be
composed from approved registry components, current specs, approved tokens,
approved examples, and canonical library paths.

## Current Approval Status

All Phase 8 templates are `Approved`. The approval authority confirmed that
the `.md` files are recipes external LLMs can use to assemble approved Lego
blocks into `.tsx` or other approved artifacts without inventing new design.

## Templates For Review

| Template | Artifact Type | Approved Component Scope | Drift Risks Blocked |
|---|---|---|---|
| `templates/README.md` | Template operating manual | All current Wave 1 components from `registry/components.json` | Template-level invention, unapproved sources, missing approval lifecycle |
| `templates/web-page-brief.md` | Web page brief | `navbar-glassmorphism`, `hero-main-section`, `button-email`, `cta-with-button-email`, `features-grid`, `feature-section-2-column-image`, `feature-section-2-column-bullets-image`, `process-steps`, `pricing-section`, `billing-toggle-button`, `comparison-table`, `stats-card-strip`, `testimonials-grid`, `testimonial-single`, `image-grid`, `faq-accordion`, `footer` | Generic page structure, unsupported sections, duplicate chrome |
| `templates/landing-page.md` | Landing page composition | `navbar-glassmorphism`, `hero-main-section`, `button-email`, `cta-with-button-email`, `cta-trial-full-form`, `features-grid`, `feature-section-2-column-image`, `feature-section-2-column-bullets-image`, `process-steps`, `pricing-section`, `billing-toggle-button`, `comparison-table`, `stats-card-strip`, `testimonials-grid`, `testimonial-single`, `image-grid`, `geo-fence-use-case`, `image-strip`, `faq-accordion`, `footer` | Invented variants, generic SaaS sections, loose CTA composition |
| `templates/blog-document.md` | Blog or document composition | `hero-main-section`, `button-email`, `cta-with-button-email`, `cta-trial-full-form`, `feature-section-2-column-image`, `feature-section-2-column-bullets-image`, `features-grid`, `process-steps`, `comparison-table`, `pricing-section`, `billing-toggle-button`, `stats-card-strip`, `testimonials-grid`, `testimonial-single`, `image-grid`, `image-strip`, `geo-fence-use-case`, `faq-accordion`, `navbar-glassmorphism`, `footer` | Unapproved article body styling, ad hoc callouts, unsupported tables |
| `templates/brochure-content.md` | Brochure or sales content composition | `hero-main-section`, `button-email`, `cta-with-button-email`, `cta-trial-full-form`, `feature-section-2-column-image`, `feature-section-2-column-bullets-image`, `features-grid`, `process-steps`, `stats-card-strip`, `testimonials-grid`, `testimonial-single`, `image-grid`, `image-strip`, `geo-fence-use-case`, `comparison-table`, `pricing-section`, `billing-toggle-button`, `faq-accordion`, `navbar-glassmorphism`, `footer` | Brochure-only panels, invented badges, print-only styling |
| `templates/component-selection-checklist.md` | Component selection audit | All 20 Wave 1 components by need category | Missing spec evidence, missing library path evidence, wrong component fit |
| `templates/final-pre-publish-checklist.md` | Final artifact approval gate | Components selected for the final artifact from `registry/components.json` | Publishing unregistered sections, raw imports, unapproved token literals |
| `templates/ai-compliance-checklist.md` | AI compliance proof | Components selected by the AI from `registry/components.json` | Hidden AI invention, skipped specs, skipped blocked-example checks |
| `templates/new-component-request.md` | Missing component request | Existing components considered first; no new component approved by the request itself | Improvising when the approved Lego set is incomplete |

## Approval Questions Resolved

1. All Phase 8 templates are approved as the starting template set.
2. No template is narrowed in this pass.
3. Blog and document work remains component-section-only until a dedicated
   long-form article component is requested, built, gated, and approved.
4. Brochure work remains component-section-only until a dedicated brochure
   panel or print/export component is requested, built, gated, and approved.
5. `navbar-glassmorphism` and `footer` remain optional shell components that
   are used only when the artifact explicitly needs global chrome.
6. A new component request requires registry, spec, screenshot/reference,
   library implementation, showcase specimen, visual gate, interaction gate,
   production-fidelity gate, and explicit approval before templates may use it.

## Approval Decision Area

- Approved: all current Phase 8 templates.
- Approved with changes: none in this pass.
- Not approved: none.
- Required changes: add Phase 8B rendered template proof pages and a human
  approval review document.
- Approval authority: user.
- Date: 2026-05-20.

## Next Step After Approval

After approval, template statuses are updated to `Approved` and the template
layer is wired into:

- `READ_FIRST_AI.md`
- `PREFLIGHT.md`
- `.claude/commands/loyaltymaster-preflight.md`
- `.claude/commands/loyaltymaster-select-components.md`
- `.claude/commands/loyaltymaster-validate.md`
- `registry/README.md`
- `KNOWN_ISSUES.md`

Phase 8B then adds browser-visible `.tsx` fixtures under `showcase/app` so a
human can verify the approved Markdown recipes produce Loyaltymaster-ready
pages before future agents reuse the recipes.
