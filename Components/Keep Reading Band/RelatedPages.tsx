// Frozen evidence snapshot (2026-09-28) of the loyaltymaster.com production
// component behind registry id `keep-reading-band` (pages variant).
// Source: /Users/johs777/LOYALTYMASTER/Loyaltymaster Clone Codex/src/components/RelatedPages.tsx
// (identical at b607521 and origin/main c1ce379). Evidence only, never a
// runtime import source; the clean implementation is
// library/src/components/KeepReadingBand.tsx.
import Link from "next/link";

import { getRelatedPages } from "@/content/related-pages";
import { getSeoDescription, getSeoTitle } from "@/lib/seo-meta";

const TONES = ["orange", "blue", "yellow"] as const;

/**
 * "Keep reading" band: 2-3 concise-anchor internal links to related pages,
 * rendered in the approved process-card vocabulary. Only the heading is the
 * anchor (concise anchor text per Google guidance); the description renders
 * outside the link, and a CSS stretched-link keeps the whole card clickable.
 * Reuses the same authored titles/descriptions as the page metadata so anchor
 * text never diverges. Renders nothing for a slug with no curated entry.
 */
export function RelatedPages({ slug }: { slug: string }) {
  const related = getRelatedPages(slug);
  if (related.length === 0) return null;

  return (
    <section className="wf-section wf-bg-white wf-section-tight" id="related">
      <div className="wr-container--main">
        <div className="wf-center reveal" data-reveal-order="0">
          <p className="wf-eyebrow">Keep reading</p>
          <h2 className="wr-h2 wf-heading-center">Related pages</h2>
        </div>
        <div className="wf-process-grid">
          {related.map((target, index) => {
            const tone = TONES[index % 3];
            return (
              <article
                className={`wr-card-process wr-card-process--${tone} wf-related-card reveal`}
                data-reveal-order={index % 3}
                key={target}
              >
                <h3 className="wr-pill-step__title">
                  <Link className="wf-related-card__link" href={`/${target}/`}>
                    {getSeoTitle(target)}
                  </Link>
                </h3>
                <p className="wr-text-body">{getSeoDescription(target)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
