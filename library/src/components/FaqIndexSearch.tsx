'use client';

import { useMemo, useState } from "react";
import { HeaderWithCopy, RunbookSection, type GroupedList } from "./RunbookPromotionPrimitives";

const defaultCategories: GroupedList[] = [
  { title: "Getting started", items: ["How quickly can I launch?", "Do I need an app?", "Can I import customers?"] },
  { title: "Campaigns", items: ["Can I send push notifications?", "Can I target local customers?", "How do I measure results?"] },
  { title: "Billing", items: ["Which plan fits my business?", "Can I change plans?", "Do you support multiple locations?"] },
];

export interface FaqIndexSearchProps {
  id?: string;
  heading?: string;
  body?: string;
  categories?: GroupedList[];
  searchPlaceholder?: string;
}

export function FaqIndexSearch({ id = "faq-index-search", heading = "Find LoyaltyMaster Answers", body = "Search approved support questions by category without turning the page into a generic accordion list.", categories = defaultCategories, searchPlaceholder = "Search questions" }: FaqIndexSearchProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleCategories = useMemo(() => categories.map((category) => ({ ...category, items: category.items.filter((item) => item.toLowerCase().includes(normalizedQuery) || category.title.toLowerCase().includes(normalizedQuery)) })).filter((category) => category.items.length > 0), [categories, normalizedQuery]);

  return (
    <RunbookSection id={id} tone="cyan" className="lm-rb-faq-index">
      <HeaderWithCopy eyebrow="FAQ" heading={heading} body={body} />
      <label className="lm-rb-search">
        <span className="lm-visually-hidden">Search FAQ questions</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={searchPlaceholder} type="search" />
      </label>
      <div className="lm-rb-card-grid">
        {visibleCategories.length === 0 ? (
          <article className="lm-rb-card" role="status" aria-live="polite">
            <h3>No results found</h3>
            <p>Try a different FAQ search term.</p>
          </article>
        ) : visibleCategories.map((category, categoryIndex) => (
          <article key={`category-${categoryIndex}`} className="lm-rb-card">
            <h3>{category.title}</h3>
            <ul className="lm-rb-plain-list">
              {category.items.map((item, itemIndex) => <li key={`category-${categoryIndex}-item-${itemIndex}`}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </RunbookSection>
  );
}
