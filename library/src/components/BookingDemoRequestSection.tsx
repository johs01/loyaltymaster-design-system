import type { Action } from "../types";
import { ActionRow, BodyBlocks, HeaderWithCopy, RunbookSection, type TextBlock } from "./RunbookPromotionPrimitives";

const defaultExpectations: TextBlock[] = [
  { heading: "What happens next", bullets: ["Choose a time that works for your team.", "Bring one current customer-retention challenge.", "Leave with a practical LoyaltyMaster rollout path."] },
];

export interface BookingDemoRequestSectionProps {
  id?: string;
  heading?: string;
  body?: string;
  expectations?: TextBlock[];
  bookingAction?: Action;
  embedLabel?: string;
}

export function BookingDemoRequestSection({ id = "booking-demo-request-section", heading = "Book a LoyaltyMaster Walkthrough", body = "Schedule a focused session to see how direct customer messaging fits your business.", expectations = defaultExpectations, bookingAction = { label: "Book a virtual meeting", href: "/book-a-virtual-meeting" }, embedLabel = "Approved booking scheduler slot" }: BookingDemoRequestSectionProps) {
  return (
    <RunbookSection id={id} tone="cyan" className="lm-rb-booking">
      <div className="lm-rb-split">
        <div>
          <HeaderWithCopy eyebrow="Book a demo" heading={heading} body={body} align="left" />
          <BodyBlocks blocks={expectations} />
          <ActionRow actions={[bookingAction]} />
        </div>
        <div className="lm-rb-embed" aria-label={embedLabel}>
          <span>{embedLabel}</span>
        </div>
      </div>
    </RunbookSection>
  );
}
