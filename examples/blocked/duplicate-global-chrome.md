# Blocked Example: Duplicate Global Chrome

## Verdict

Blocked.

## Rule Violated:

New web pages, landing pages, sales pages, and subdomain pages are body-only by
default. Do not add page-body nav, header, or footer unless the brief explicitly
requests a standalone artifact with its own shell.

## Bad Pattern

A generated page includes its own navbar, announcement bar, and footer even
though the artifact requested only a page body or a section.

## Required Correction

Follow `PREFLIGHT.md`. Generate body content only for normal production website
pages. Use `navbar-glassmorphism` or `footer` only when the brief explicitly
asks for standalone global chrome and after reading the matching spec and
library path from `registry/components.json`.
