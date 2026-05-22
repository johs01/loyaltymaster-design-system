# Components Raw Snapshot Source

This folder contains reference snapshots extracted from the sendPUSH production
site. Each component folder pairs a PNG visual reference with the extracted TSX
source used during the audit.

## Important Rule

These files are **not** the consumer-facing component library.

Do not import code directly from `/Components/` in new pages, docs, examples, or
future apps. Use the future canonical sources instead:

- `/registry/` for the machine-readable component manifest.
- `/specs/components/` for human and AI component usage rules.
- `/library/src/components/` for clean token-driven React components.
- `/assets/screenshots/` for canonical component reference images.

## Why This Folder Stays

The snapshots are preserved because they are useful visual and code references
when rebuilding the clean design-system library. They are not deleted because
Phase 1 is intentionally reversible and non-destructive.

## Known Limitations

- Most TSX files use hardcoded color values instead of canonical tokens.
- Some snapshots contain partial extraction artifacts.
- The clean library will be rebuilt from the approved design-system rules in a
  later phase.
