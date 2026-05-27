# Components

This folder is the single approved component inventory for the Loyaltymaster
design-system workspace.

It contains two approved reference types:

- Wave 1 production-extracted component snapshots. These folders pair a visual
  reference image with the extracted TSX source used during the early audit.
- Approved MagicPath visual handoff archives. These folders include source URL
  evidence, screenshots, request records, and `Production Ready/` handoff files.

## Important Rule

These files are approved component reference and handoff material. They are not
the consumer-facing clean React component library by themselves.

Do not import code directly from `/Components/` in new pages, docs, examples, or
future apps unless a later implementation task explicitly promotes that code.
Use the canonical implementation sources instead:

- `/registry/` for the machine-readable component manifest.
- `/specs/components/` for human and AI component usage rules.
- `/library/src/components/` for clean token-driven React components.
- `/assets/screenshots/` for canonical component reference images.

## Approved Component Sets

Wave 1 approved snapshots:

- `Billing Toggle Button`
- `Button Email`
- `CTA Trial Full Form`
- `CTA with Button Email`
- `Comparison Table`
- `FAQ Accordion`
- `Feature Section 2 Column Bullets Image`
- `Feature Section 2 Column Image`
- `Features Grid`
- `Footer`
- `Geo Fence Use Case`
- `Hero Main Section`
- `Image Grid`
- `Image Strip`
- `Navbar Glassmorphism`
- `Pricing Section`
- `Process Steps`
- `Stats Card Strip`
- `Testimonial Single`
- `Testimonials Grid`

Approved MagicPath visual handoffs:

- `Article Body`
- `Blog Article Index`
- `Booking Demo Request Section`
- `Branded Card Application Form`
- `Coming Soon Section`
- `Contact Form Section`
- `FAQ Index Search`
- `Industry Use Case Card Grid`
- `Knowledge Base Index`
- `Legal Document Body`
- `Newsletter Signup Section`
- `Pricing Page Matrix`
- `Thank You Confirmation Section`

## Known Limitations

- Some reference TSX files use hardcoded color values instead of canonical
  tokens.
- Some reference snapshots contain partial extraction artifacts.
- MagicPath handoff TSX may include external dependencies and generated styling.
- Clean production-ready library work still happens through registry, spec,
  library, showcase, and validation updates.
