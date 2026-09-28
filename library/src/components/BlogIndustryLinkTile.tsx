import type { IndustryLink } from "../types";

/**
 * Industry link tiles (Bricks class lm-blog-industries): a labelled list of
 * compact tiles, one per industry, each a single link with the industry name
 * and a guide-count badge. Four columns on desktop, then 3, 2, and 1.
 */
export interface BlogIndustryLinkTileProps {
  /** Prefix for the heading id the list is labelled by. */
  id?: string;
  heading?: string;
  headingLevel?: "h2" | "h3";
  industries: IndustryLink[];
}

export function BlogIndustryLinkTile({ id = "blog-industries", heading = "By industry", headingLevel = "h3", industries }: BlogIndustryLinkTileProps) {
  const Heading = headingLevel;
  const headingId = `${id}-heading`;

  return (
    <div className="lm-ds lm-blog-industries-block">
      <Heading className="lm-blog-industries__head" id={headingId}>{heading}</Heading>
      <ul className="lm-blog-industries" aria-labelledby={headingId}>
        {industries.map((industry) => (
          <li key={industry.href}>
            <a href={industry.href}>
              <span>{industry.label}</span>
              {typeof industry.count === "number" ? (
                <span className="lm-blog-industries__count">
                  {industry.count}
                  <span className="lm-visually-hidden"> {industry.count === 1 ? "guide" : "guides"}</span>
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
