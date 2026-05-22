# New Component Request: Article Body / Content Block

Source workflow: `templates/blog-document.md`

## What Artifact Needs It

Long-form Loyaltymaster blog posts, educational documents, and public
documentation that require structured prose beyond approved section components.

## Why No Current Approved Component Fits

The current registry includes hero, feature, process, comparison, proof, FAQ,
pricing, media, CTA, navbar, and footer components. It does not include an
approved long-form article-body component for paragraph stacks, callouts, pull
quotes, inline media, source notes, or document tables outside
`comparison-table`.

## Existing Components Considered And Rejected

- `features-grid`: approved for feature cards, not long-form prose.
- `process-steps`: approved for sequential steps, not article sections.
- `comparison-table`: approved for structured comparisons, not general tables.
- `faq-accordion`: approved for questions, not article body copy.
- `testimonial-single`: approved for proof, not editorial pull quotes.

## Proposed Use Case

Create a controlled article-body/content-block component that can render
approved document prose without allowing arbitrary SaaS cards or custom CSS.

## Proposed Props, States, And Accessibility Needs

- Title, optional eyebrow, paragraph groups, ordered/unordered lists, approved
  callout variant, optional inline image, and source note.
- No hover states unless links are included.
- Semantic heading order, accessible list markup, readable line length, and
  link focus-visible behavior.

## Token Needs

Use existing typography, spacing, surface, border, and focus tokens from
`tokens/design-tokens.json`. No new token should be added unless the component
build proves an existing token cannot satisfy the approved design.

## Screenshot Or Reference Evidence

No screenshot is approved yet. This request must provide a reference capture or
designed screenshot before implementation.

## Composition Rules

Article body may appear between approved sections. It may not replace hero,
CTA, pricing, proof, FAQ, or comparison components when those components fit
the need.

## Risk Of Design Drift If Skipped

Future agents will improvise article cards, pull quotes, prose panels, and
document tables, which will create visual drift across Loyaltymaster content.

## Required Approval Path

Before this component may be used, it must be separately registered, specified,
implemented in `library/`, showcased, visually gated, interaction gated where
applicable, production-fidelity reviewed where applicable, and explicitly approved.
