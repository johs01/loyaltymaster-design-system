import type { BlogArticle, LinkItem, RelatedPageLink } from "../types";
import { ArrowIcon } from "./_internal";
import { BlogArticleCard } from "./BlogArticleCard";

const pageTones = ["orange", "blue", "yellow"] as const;

/**
 * "Keep reading" band: 2-3 related links at the end of a page.
 *
 * - `pages` (loyaltymaster.com, production RelatedPages.tsx): centred eyebrow
 *   and heading over process-style cards; the page title is the only anchor
 *   (concise anchor text) and a stretched link keeps the card clickable.
 * - `articles` (blog.loyaltymaster.com single posts): left-aligned heading
 *   with a "See all articles" text link over blog article cards on a
 *   panel-light band.
 *
 * Renders nothing when the list for the chosen variant is empty.
 */
export interface KeepReadingBandProps {
  id?: string;
  variant?: "pages" | "articles";
  eyebrow?: string;
  heading?: string;
  pages?: RelatedPageLink[];
  articles?: BlogArticle[];
  /** Articles variant only: link to the full blog index. */
  seeAll?: LinkItem;
}

export function KeepReadingBand({
  id = "related",
  variant = "pages",
  eyebrow = "Keep reading",
  heading,
  pages = [],
  articles = [],
  seeAll,
}: KeepReadingBandProps) {
  if (variant === "articles") {
    if (articles.length === 0) return null;
    const headingId = `${id}-heading`;

    return (
      <section className="lm-ds wf-section lm-keep-reading lm-keep-reading--articles" id={id} aria-labelledby={headingId}>
        <div className="wr-container--main">
          <div className="lm-blog-section-head">
            <div>
              <p className="lm-blog-eyebrow">{eyebrow}</p>
              <h2 className="lm-blog-h2" id={headingId}>{heading ?? "Related Articles"}</h2>
            </div>
            {seeAll ? (
              <a className="lm-blog-text-link" href={seeAll.href}>
                {seeAll.label} <ArrowIcon />
              </a>
            ) : null}
          </div>
          <BlogArticleCard articles={articles} />
        </div>
      </section>
    );
  }

  if (pages.length === 0) return null;

  return (
    <section className="lm-ds wf-section wf-bg-white wf-section-tight lm-keep-reading lm-keep-reading--pages" id={id}>
      <div className="wr-container--main">
        <div className="wf-center">
          <p className="wf-eyebrow">{eyebrow}</p>
          <h2 className="wr-h2 wf-heading-center">{heading ?? "Related pages"}</h2>
        </div>
        <div className="wf-process-grid">
          {pages.map((page, index) => (
            <article className={`wr-card-process wr-card-process--${pageTones[index % pageTones.length]} wf-related-card`} key={page.href}>
              <h3 className="wr-pill-step__title">
                <a className="wf-related-card__link" href={page.href}>{page.title}</a>
              </h3>
              {page.description ? <p className="wr-text-body">{page.description}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
