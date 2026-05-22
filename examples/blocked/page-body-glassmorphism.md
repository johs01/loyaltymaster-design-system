# Blocked Example: Page-Body Glassmorphism

## Verdict

Blocked.

## Rule Violated:

Glass treatment is allowed only for the existing nav/mobile shell. Generic
page-body glassmorphism is prohibited.

## Bad Pattern

A section wraps every feature, testimonial, and pricing card in translucent
blurred panels because the nav uses a glass treatment.

## Required Correction

Read the relevant specs from `registry/components.json` before styling any
section. Keep glass constrained to `navbar-glassmorphism` via
`specs/components/navbar-glassmorphism.md` and
`library/src/components/NavbarGlassmorphism.tsx`.
