# Markdown Layout Outline POC

Design System Version: registry/components.json@0.2.0
Runbook Used: RUNBOOK_A_PAGE_TO_MARKDOWN_OUTLINE.md
Target Repository: {{TARGET_REPOSITORY}}
Target Route: /customer-retention-consultation

## Page Purpose

Explain how LoyaltyMaster helps local businesses keep customers and invite the visitor to request guidance.

## Target Audience

Local business owners, operators, and marketing managers who rely on repeat visits.

## Conversion Goal

Submit a consultation/contact request.

## SEO Fields

- title: Customer Retention Consultation | LoyaltyMaster
- description: Learn how LoyaltyMaster helps local businesses bring customers back with approved loyalty and messaging tools.
- canonicalPath: /customer-retention-consultation

## Section Order

## Component Sequence Using Approved Registry IDs

1. component: hero-main-section
   variant: default
   props: heading, body, primaryAction, checklist
2. component: article-body
   variant: default
   props: title, intro, sections
3. component: contact-form-section
   variant: default
   props: heading, body, fields, submitLabel
4. component: thank-you-confirmation-section
   variant: default
   props: heading, body, nextSteps

## Component Names

- hero-main-section
- article-body
- contact-form-section
- thank-you-confirmation-section

## Component Variants

All components use the registry-approved default variant.

## Component Props

Use only props listed in registry/components.json and specs/components/*.md.

## Content Fields

Provide final page copy per section before Runbook B generates TSX.

## Image Fields

Use approved image props only. Use placeholders when production ImageKit URLs are not provided.

## CTA Fields

Primary CTA label: Contact the LoyaltyMaster team.
Primary CTA href: /contact-us

## Layout Notes

Body-only page output. Do not include navbar, header, footer, or duplicate global chrome.

## Responsive Rules

Use the library component responsive behavior. Do not add route-specific breakpoints unless the registry/spec allows it.

## QA Checklist

- All component IDs exist in registry/components.json.
- No invented props, tokens, variants, or slots.
- Output remains ready for Runbook B.

## Ready For TSX Build

Ready for TSX build: Yes
Ready for Runbook B: Yes
