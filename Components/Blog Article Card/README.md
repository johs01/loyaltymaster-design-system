# Blog Article Card — Evidence

Handoff evidence for the canon-promoted `blog-article-card` registry component, promoted
2026-09-28 from the blog.loyaltymaster.com redesign the owner approved and
published on 2026-09-27.

Image-led blog article card: 16:9 cover, category chip, title, excerpt, and date + reading time meta, in the 3/2/1 listing grid.

- Live on: https://blog.loyaltymaster.com/ (Latest Articles grid), /news/, category archives, search results, and the Keep reading grid on single posts.
- `lm-blog-card.css` — frozen snapshot of the live Bricks global-class CSS
  (`release/redesign/classes.json` in the blog workspace,
  `/Users/johs777/LOYALTYMASTER/WORDPRESS/implementation/`). Evidence only,
  never a runtime import source.
- `blog-article-card.png` — visual reference (same image as
  `assets/screenshots/blog-article-card.png`), cropped from the approved redesign mockup
  capture `/Users/johs777/LOYALTYMASTER/WORDPRESS/implementation/proposal/screens/mockup/mock-home-1440-1.png (x 100-1340, y 100-620)`. The live implementation follows the mockup; a live
  capture replaces this crop in the gate-extension session.

Runtime implementation: the registry `libraryPath` in `library/src/components/`.
