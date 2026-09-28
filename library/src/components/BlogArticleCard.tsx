import type { BlogArticle } from "../types";
import { BlogMeta } from "./_internal";

/**
 * Blog article card (Bricks class lm-blog-card on blog.loyaltymaster.com):
 * 16:9 cover, category chip, title, excerpt, and "13 May 2025 · 14 min read"
 * meta. Cards always render inside their approved 3/2/1-column grid
 * (lm-blog-grid); one article is a grid of one. The title is the card's only
 * link and is stretched over the whole card (DESIGN_SYSTEM.md, whole-card
 * links); the ink focus ring sits on the card.
 */
export interface BlogArticleCardProps {
  articles: BlogArticle[];
  /** h3 under a section h2 (default); h2 when cards follow the page h1 directly. */
  headingLevel?: "h2" | "h3";
  emptyMessage?: string;
}

export function BlogArticleCard({ articles, headingLevel = "h3", emptyMessage = "No articles match yet." }: BlogArticleCardProps) {
  const Heading = headingLevel;

  if (articles.length === 0) {
    return <p className="lm-ds lm-blog-empty">{emptyMessage}</p>;
  }

  return (
    <div className="lm-ds lm-blog-grid">
      {articles.map((article) => (
        <article className="lm-blog-card" key={article.href}>
          {article.image ? (
            <img className="lm-blog-card__media" src={article.image.src} alt={article.image.alt} width={768} height={432} loading="lazy" />
          ) : (
            <div className="lm-blog-card__media" aria-hidden="true" />
          )}
          <div className="lm-blog-card__body">
            {article.category ? <p className="lm-blog-chip">{article.category}</p> : null}
            <Heading className="lm-blog-card__title">
              <a href={article.href}>{article.title}</a>
            </Heading>
            {article.excerpt ? <p className="lm-blog-card__excerpt">{article.excerpt}</p> : null}
            <BlogMeta date={article.date} readingMinutes={article.readingMinutes} />
          </div>
        </article>
      ))}
    </div>
  );
}
