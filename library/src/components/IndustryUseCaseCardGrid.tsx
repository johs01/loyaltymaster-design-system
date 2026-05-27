import { HeaderWithCopy, IndexedCardGrid, RunbookSection, type IndexedCard } from "./RunbookPromotionPrimitives";

const defaultItems: IndexedCard[] = [
  { title: "Restaurants", body: "Bring nearby guests back with timely rewards and reminders.", meta: "Food and hospitality", href: "/ideal-for/restaurants" },
  { title: "Salons", body: "Fill appointment gaps with direct rebooking messages.", meta: "Appointments", href: "/ideal-for/salons" },
  { title: "Retail", body: "Turn occasional shoppers into repeat customers.", meta: "Local retail", href: "/ideal-for/retail" },
];

export interface IndustryUseCaseCardGridProps {
  id?: string;
  heading?: string;
  body?: string;
  items?: IndexedCard[];
}

export function IndustryUseCaseCardGrid({ id = "industry-use-case-card-grid", heading = "Ideal For Repeat-Visit Businesses", body = "Use approved industry cards when visitors need to self-identify their business type.", items = defaultItems }: IndustryUseCaseCardGridProps) {
  return (
    <RunbookSection id={id} tone="salmon" className="lm-rb-use-cases">
      <HeaderWithCopy eyebrow="Ideal for" heading={heading} body={body} />
      <IndexedCardGrid cards={items} />
    </RunbookSection>
  );
}
