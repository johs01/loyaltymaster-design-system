import type { Action } from "../types";
import { ActionRow, HeaderWithCopy, RunbookSection } from "./RunbookPromotionPrimitives";

export interface ComingSoonSectionProps {
  id?: string;
  heading?: string;
  body?: string;
  launchNote?: string;
  action?: Action;
}

export function ComingSoonSection({ id = "coming-soon-section", heading = "This LoyaltyMaster Page Is Coming Soon", body = "We are preparing an approved customer loyalty experience for this page.", launchNote = "Check back soon for the finished LoyaltyMaster experience.", action = { label: "Return home", href: "/" } }: ComingSoonSectionProps) {
  return (
    <RunbookSection id={id} tone="yellow" className="lm-rb-coming-soon">
      <div className="lm-rb-status-card">
        <HeaderWithCopy eyebrow="Coming soon" heading={heading} body={body} />
        <p className="lm-rb-note">{launchNote}</p>
        <ActionRow actions={[action]} />
      </div>
    </RunbookSection>
  );
}
