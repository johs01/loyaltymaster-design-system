# Industry Use Case Card Grid

Approval Status: Approved.

## Purpose

Approved grid for industry/use-case cards such as the Ideal For page.

## Proposed Component ID

`industry-use-case-card-grid`

## Source URLs

- https://loyaltymaster.com/ideal-for/ - Large industry image-card collection with repeated business categories.

## Screenshot Evidence

- Desktop: `screenshots/desktop.png`
- Mobile: `screenshots/mobile.png`
- Source-specific desktop/mobile: `screenshots/ideal-for-desktop.png`, `screenshots/ideal-for-mobile.png`

## Existing Approved Components Considered

| Existing Registry ID Considered | specPath Read | libraryPath Reviewed | Why It Does Not Fit |
|---|---|---|---|
| `features-grid` | `specs/components/features-grid.md` | `library/src/components/FeaturesGrid.tsx` | Too generic and not image-led industry cards. |
| `image-grid` | `specs/components/image-grid.md` | `library/src/components/ImageGrid.tsx` | Partner/logo grid is not an industry use-case grid. |
| `geo-fence-use-case` | `specs/components/geo-fence-use-case.md` | `library/src/components/GeoFenceUseCase.tsx` | Single use-case panel is not a many-card index. |

## Human Review Notes

- This folder is an approved component evidence and handoff record.
- Use this approved component as reference evidence for outlines and implementation planning.
- For clean registry/library implementation, build it through the full registry/spec/library/showcase/gate workflow.
