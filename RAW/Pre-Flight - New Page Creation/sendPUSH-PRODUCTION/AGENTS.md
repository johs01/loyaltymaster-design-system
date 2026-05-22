# Source-To-Page Instructions For This Repository

These instructions apply when the user asks for a new webpage route in this repository using a `source`.

## Definition

`source` means the screenshot and/or text and/or code provided by the user.

## Trigger

Use this workflow whenever the user asks for a new webpage at a route shaped like `/<route-name>` from a `source`.

## Required Workflow

1. Before building any new webpage, re-read every file that affects this website's design system and visual language.
2. At minimum, re-read:
   - `src/design-system/*`
   - `public/design-system/withremy/withremy.css`
   - `public/wireframe-remy.css`
   - `src/index.css`
3. Re-read any additional route, page, component, asset, or styling files needed to match the current site's designer, layout patterns, typography, motion, spacing, and responsive behavior.
4. Then translate the `source` into a fully built webpage that looks visually indistinguishable from the existing website, as if the same designer built both pages.

## Content Rules

1. The content in the `source` is sacred.
2. Preserve all text exactly as written in the `source`.
3. Do not modify, add, rephrase, simplify, summarize, or remove any text.
4. Extract the exact wording for every heading, paragraph, label, button, list item, caption, and any other visible text.
5. Preserve all sections from the `source` and keep their positioning as shown where possible.
6. If the `source` conflicts with the existing site design system, text accuracy wins for content while styling and layout should be adapted to the existing site as far as possible.

## Build Rules

1. Create the page at the requested route `/<route-name-provided-later>`.
2. Build only the webpage body/content for that route.
3. Do not add a navbar, header, or footer, because those are already in place.
4. The completed page must feel like it belongs to this website and must look like the same designer built it.
5. Responsive behavior is non-negotiable. The page must work on desktop, tablet, and mobile.

## Image Rules

1. Use Cloudinary for images.
2. If the required image cannot be found in Cloudinary, place a placeholder image exactly where the image belongs so it can be replaced later.

## Required Self-Check Before Finishing

1. Confirm the required design-system and supporting files were re-read before building.
2. Confirm all text matches the `source` exactly.
3. Confirm no navbar, header, or footer was added.
4. Confirm every image uses Cloudinary or an intentional placeholder.
5. Confirm the page is responsive.
6. Confirm the final result matches the existing site's design language closely enough to feel like the same designer built it.
7. Double-check that none of these rules were violated.
