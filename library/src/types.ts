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
