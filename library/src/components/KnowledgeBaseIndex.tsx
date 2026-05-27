import { HeaderWithCopy, RunbookSection, type GroupedList } from "./RunbookPromotionPrimitives";

const defaultCategories: GroupedList[] = [
  { title: "Digital loyalty basics", body: "Core concepts for reward cards and direct messaging.", items: ["Digital reward cards", "Electronic rewards", "Wallet passes"] },
  { title: "Campaign setup", body: "Operational guides for sending customer messages.", items: ["Customer import", "Offer setup", "Message timing"] },
  { title: "Measurement", body: "How to understand customer response and repeat visits.", items: ["Campaign attribution", "Repeat visit tracking", "Offer reporting"] },
];

export interface KnowledgeBaseIndexProps {
  id?: string;
  heading?: string;
  body?: string;
  categories?: GroupedList[];
}

export function KnowledgeBaseIndex({ id = "knowledge-base-index", heading = "LoyaltyMaster Knowledge Base", body = "Guide visitors into approved help categories without using a generic card grid.", categories = defaultCategories }: KnowledgeBaseIndexProps) {
  return (
    <RunbookSection id={id} tone="white" className="lm-rb-knowledge">
      <HeaderWithCopy eyebrow="Knowledge base" heading={heading} body={body} />
      <div className="lm-rb-card-grid">
        {categories.map((category) => (
          <article key={category.title} className="lm-rb-card">
            <h3>{category.title}</h3>
            {category.body ? <p>{category.body}</p> : null}
            <ul className="lm-rb-plain-list">
              {category.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </RunbookSection>
  );
}
