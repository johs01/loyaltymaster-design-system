# Runbook A POC Diagnostic Report

Input File: examples/runbook-poc/runbook-a/page-brief.md
Runbook Used: RUNBOOK_A_PAGE_TO_MARKDOWN_OUTLINE.md
Repo Commit SHA: captured-at-runtime-by-agent
Component Registry Checksum: registry/components.json@0.2.0
Selected Template: route-agnostic LoyaltyMaster page outline
Selected Components: hero-main-section, article-body, contact-form-section, thank-you-confirmation-section
Rejected Components and Why: none in this passing fixture
Missing Component Requests: none in this passing fixture
Generated Files or Intended File Paths: app/<route>/page.tsx; src/site-pages/<page-slug>/<PageName>Page.tsx; src/config/seoRoutes.json; src/next/SitePage.tsx
Validation Commands Run: node scripts/validate-runbook-poc-readiness.mjs
Pass/Fail Status: PASS
Exact Failure Reason: none
Recommended Next Fix: keep fixture aligned with registry changes and canonical Runbook A.

## Failure Stage Catalog

- INPUT_INVALID: diagnostic stage reserved for POC and future runbook validation.
- OUTLINE_SCHEMA_FAILED: diagnostic stage reserved for POC and future runbook validation.
- COMPONENT_NOT_APPROVED: diagnostic stage reserved for POC and future runbook validation.
- PROP_INVALID: diagnostic stage reserved for POC and future runbook validation.
- TOKEN_INVALID: diagnostic stage reserved for POC and future runbook validation.
- TEMPLATE_MISMATCH: diagnostic stage reserved for POC and future runbook validation.
- ROUTE_WIRING_FAILED: diagnostic stage reserved for POC and future runbook validation.
- SEO_METADATA_FAILED: diagnostic stage reserved for POC and future runbook validation.
- TYPESCRIPT_FAILED: diagnostic stage reserved for POC and future runbook validation.
- BUILD_FAILED: diagnostic stage reserved for POC and future runbook validation.
- VISUAL_FIDELITY_FAILED: diagnostic stage reserved for POC and future runbook validation.
- PRODUCTION_IMPORT_FAILED: diagnostic stage reserved for POC and future runbook validation.
