# Security Policy, Runbooks, And Future-Proofing

This document describes how secrets, environment variables, API endpoints, CSP,
and third-party services are handled in this Next.js App Router project.

## Architecture Decision

The site runs on Next.js App Router. Marketing pages are statically rendered
where possible, and server behavior lives in `app/api/*/route.ts` route
handlers.

```
Client bundle  -- fetch -->  app/api/*/route.ts  -- secret env -->  External service
NEXT_PUBLIC_*                 process.env.* with no NEXT_PUBLIC_ prefix
```

## Environment Variable Taxonomy

| Category               | Prefix          | Where read                       | Ships to browser? |
| ---------------------- | --------------- | -------------------------------- | ----------------- |
| Public client variable | `NEXT_PUBLIC_*` | Client components and build code | Yes, intentionally |
| Server-only secret     | no public prefix | `app/api/*/route.ts` only        | Never             |

Rules:

1. Variables whose names include `SECRET`, `PRIVATE_KEY`, `SERVICE_ROLE`,
   `ACCESS_TOKEN`, `PASSWORD`, `PASSPHRASE`, `DATABASE_URL`, `DB_URL`,
   `CONNECTION_STRING`, or `WEBHOOK_SECRET` must not use `NEXT_PUBLIC_`.
2. `next.config.mjs` fails the build if a secret-shaped variable is exposed
   through `NEXT_PUBLIC_`.
3. Server-only secrets must be scoped per Vercel environment and rotatable
   without code changes.
4. `.env.example` must contain placeholders only.

Current variables:

| Variable                            | Category      | Used by                         |
| ----------------------------------- | ------------- | ------------------------------- |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Public client | Cloudinary image delivery in the site UI |
| `CLOUDINARY_URL`                    | Server secret | Future Cloudinary upload/admin server code only |
| `RESEND_API_KEY`                    | Server secret | `app/api/trial-signup/route.ts` |
| `RESEND_FROM_EMAIL`                 | Server config | `app/api/trial-signup/route.ts` |
| `TRIAL_SIGNUP_TO_EMAIL`             | Server config | `app/api/trial-signup/route.ts` |

## API Endpoint Baseline

Every form-style API endpoint should use `src/server/withApi.ts` so request IDs,
input validation, structured logging, safe JSON errors, and rate limiting stay
consistent.

Current endpoints:

| Path                | Purpose                                                 |
| ------------------- | ------------------------------------------------------- |
| `/api/csp-report`   | Sink for `Content-Security-Policy-Report-Only` reports. |
| `/api/trial-signup` | Validates trial/demo leads and sends Resend emails.     |

## CSP And Headers

Security headers are configured in `next.config.mjs`, not `vercel.json`.

The current CSP is report-only and posts violations to `/api/csp-report`. Keep
it report-only while tuning vendor directives. Move to enforcing CSP only after
reviewing real traffic reports.

Vendor directive examples:

| Integration           | CSP changes                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Stripe Elements       | `script-src https://js.stripe.com`, `frame-src https://js.stripe.com https://hooks.stripe.com`, `connect-src https://api.stripe.com` |
| Clerk widgets         | `script-src https://*.clerk.accounts.dev`, `connect-src https://*.clerk.accounts.dev`, `img-src https://img.clerk.com` |
| Google Tag Manager    | `script-src https://www.googletagmanager.com`, `connect-src https://www.google-analytics.com`, `img-src https://www.google-analytics.com` |
| Sentry browser SDK    | `connect-src https://*.ingest.sentry.io`                                                                          |
| Google Maps JS API    | `script-src https://maps.googleapis.com`, `img-src https://maps.gstatic.com`, `connect-src https://maps.googleapis.com` |
| AltText.ai InstantAlt | `script-src https://ujs.alttext.ai`, `connect-src https://ujs.alttext.ai`                                        |

Do not add `'unsafe-eval'` to `script-src`. The current report-only policy
allows `'unsafe-inline'` because Next.js emits inline runtime scripts. If this
policy is moved from report-only to enforcing, review whether a nonce-based CSP
is practical before tightening script execution.

## Adding A New Service

1. Prefer a Vercel Marketplace integration when one exists.
2. Provision separate upstream resources for Production, Preview, and
   Development.
3. Add server-only env vars in Vercel without `NEXT_PUBLIC_`.
4. Update `.env.example`.
5. Write route handlers under `app/api/*/route.ts`.
6. Widen CSP in report-only mode first.
7. Add a rotation entry below.
8. Open a PR and require gitleaks plus env-taxonomy checks to pass.

## Rotation Runbook

1. Revoke or rotate at the source service.
2. Update Vercel environment variables for every affected environment.
3. Redeploy the latest verified commit.
4. Smoke test the affected feature.
5. Record the rotation in the table below.

| Secret           | Source          | Used in                         | Dual-key? | Notes                    |
| ---------------- | --------------- | ------------------------------- | --------- | ------------------------ |
| `RESEND_API_KEY` | Resend dashboard | `app/api/trial-signup/route.ts` | Yes       | Server-only email secret |

## Cloudinary Hardening

1. Restrict allowed origins in the Cloudinary dashboard to production, preview,
   and local development domains.
2. Disable unsafe URLs and arbitrary transformations unless a reviewed feature
   needs them.
3. Add bandwidth and request alerts.
4. Never expose `CLOUDINARY_URL`, `CLOUDINARY_API_SECRET`, or any API secret through `NEXT_PUBLIC_*`.
5. Use `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` only for public image delivery.

## Supply Chain Hygiene

- GitHub secret scanning and push protection should stay enabled.
- `.github/workflows/security.yml` runs gitleaks and the env-taxonomy grep.
- `.gitleaks.toml` contains project-specific secret patterns.
- Keep `next`, `react`, `next-cloudinary`, and server dependencies current via
  Dependabot or Renovate.
