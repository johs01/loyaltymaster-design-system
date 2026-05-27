import { HeaderWithCopy, IndexedCardGrid, RunbookSection, type IndexedCard } from "./RunbookPromotionPrimitives";

const defaultArticles: IndexedCard[] = [
  { title: "Why keeping customers beats chasing new ones", body: "Retention-first guidance for local businesses.", meta: "Customer retention", href: "/blog/why-keeping-customers-beats-chasing-new-ones" },
  { title: "Start sending push notifications without an app", body: "A practical explainer for wallet-based customer messaging.", meta: "Push notifications", href: "/blog/start-sending-push-notifications-no-app-required" },
  { title: "Electronic rewards turn shoppers into regulars", body: "How rewards improve repeat visits without paper cards.", meta: "Electronic rewards", href: "/blog/electronic-rewards-turns-shoppers-into-regulars" },
];

export interface BlogArticleIndexProps {
  id?: string;
  heading?: string;
  body?: string;
  articles?: IndexedCard[];
  emptyMessage?: string;
}

export function BlogArticleIndex({ id = "blog-article-index", heading = "Latest LoyaltyMaster Articles", body = "Use approved article cards to help visitors find practical loyalty guidance.", articles = defaultArticles, emptyMessage }: BlogArticleIndexProps) {
  return (
    <RunbookSection id={id} tone="peach" className="lm-rb-index">
      <HeaderWithCopy eyebrow="Resources" heading={heading} body={body} />
      <IndexedCardGrid cards={articles} emptyMessage={emptyMessage} />
    </RunbookSection>
  );
}
