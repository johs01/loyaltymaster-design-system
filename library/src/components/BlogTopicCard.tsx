import type { BlogTopic } from "../types";
import { ArrowIcon } from "./_internal";

const topicTones = ["orange", "blue", "yellow"] as const;

/**
 * Topic cards (Bricks class lm-blog-topic-card with its lm-blog-topics grid):
 * one card per blog topic with a tone square, the topic name as the single
 * stretched link, a one-line description, and the guide count. Three columns
 * on desktop, one below 992px.
 */
export interface BlogTopicCardProps {
  topics: BlogTopic[];
  headingLevel?: "h2" | "h3";
}

export function BlogTopicCard({ topics, headingLevel = "h3" }: BlogTopicCardProps) {
  const Heading = headingLevel;

  return (
    <div className="lm-ds lm-blog-topics">
      {topics.map((topic, index) => (
        <article className="lm-blog-topic-card" key={topic.href}>
          <span className={`lm-blog-topic-card__tone lm-blog-topic-card__tone--${topic.tone ?? topicTones[index % topicTones.length]}`} aria-hidden="true" />
          <Heading className="lm-blog-topic-card__title">
            <a href={topic.href}>{topic.title}</a>
          </Heading>
          {topic.description ? <p className="lm-blog-topic-card__desc">{topic.description}</p> : null}
          {typeof topic.count === "number" ? (
            <p className="lm-blog-topic-card__count">
              {topic.count} {topic.count === 1 ? "guide" : "guides"} <ArrowIcon />
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
