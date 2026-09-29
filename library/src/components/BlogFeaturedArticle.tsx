import type { BlogArticle } from "../types";
import { ArrowIcon, BlogMeta } from "./_internal";

/**
 * Featured article card (Bricks class lm-blog-feature): the one highlighted
 * post in the blog listing hero. Larger title, dark "Featured guide" chip,
 * two-line excerpt, and a "Read the guide" cue in the meta row. Turns
 * horizontal (cover left, copy right) between 768px and 991px.
 */
export interface BlogFeaturedArticleProps {
  article: BlogArticle;
  /** Dark chip text. */
  label?: string;
  /** Visual cue at the end of the meta row; not a second link. */
  readLabel?: string;
  headingLevel?: "h2" | "h3";
}

export function BlogFeaturedArticle({ article, label = "Featured guide", readLabel = "Read the guide", headingLevel = "h2" }: BlogFeaturedArticleProps) {
  const Heading = headingLevel;

  return (
    <article className="lm-ds lm-blog-feature">
      {article.image ? (
        <img className="lm-blog-feature__media" src={article.image.src} alt={article.image.alt} width={1024} height={576} />
      ) : (
        <div className="lm-blog-feature__media" aria-hidden="true" />
      )}
      <div className="lm-blog-feature__body">
        <p className="lm-blog-chip lm-blog-chip--dark">{label}</p>
        <Heading className="lm-blog-feature__title">
          <a href={article.href}>{article.title}</a>
        </Heading>
        {article.excerpt ? <p className="lm-blog-feature__excerpt">{article.excerpt}</p> : null}
        <BlogMeta date={article.date} readingMinutes={article.readingMinutes}>
          <span className="lm-blog-feature__read" aria-hidden="true">
            {readLabel} <ArrowIcon />
          </span>
        </BlogMeta>
      </div>
    </article>
  );
}
