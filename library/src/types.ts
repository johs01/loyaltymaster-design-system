import type { ReactNode } from "react";

export type BillingCadence = "monthly" | "yearly";

export interface Action {
  label: string;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: LinkItem[];
  groups?: FooterColumn[];
}

export interface ContactItem {
  label: string;
  href?: string;
}

export interface FeatureItem {
  title: string;
  body: string;
  icon?: ReactNode;
}

export interface ComparisonRow {
  label: string;
  loyaltymaster: string;
  alternative: string;
}

export interface ProcessStep {
  title: string;
  body: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  initials?: string;
}

export interface PricingPlan {
  name: string;
  badge?: string;
  description?: string;
  monthlyPrice: string;
  yearlyPrice?: string;
  priceSuffix?: string;
  note?: string;
  features: string[];
  cta: Action;
  highlighted?: boolean;
}

/** One blog post as the blog components render it (blog.loyaltymaster.com). */
export interface BlogArticle {
  title: string;
  href: string;
  /** Publication date as ISO 8601 (YYYY-MM-DD); rendered as "13 May 2025". */
  date: string;
  /** Whole minutes; rendered as "14 min read" beside the date. */
  readingMinutes?: number;
  /** Hand-written excerpt, 160 characters or fewer. */
  excerpt?: string;
  /** Primary category label for the chip. */
  category?: string;
  /** 16:9 cover without baked-in text. */
  image?: ImageAsset;
}

export interface BlogTopic {
  title: string;
  href: string;
  description?: string;
  /** Number of guides in the topic; rendered as "21 guides". */
  count?: number;
  tone?: "orange" | "blue" | "yellow";
}

export interface IndustryLink {
  label: string;
  href: string;
  /** Number of guides for the industry, shown as a small count badge. */
  count?: number;
}

export interface RelatedPageLink {
  title: string;
  href: string;
  description?: string;
}
