import type { Action, ProcessStep } from "../types";
import { ActionRow, HeaderWithCopy, RunbookSection } from "./RunbookPromotionPrimitives";

const defaultSteps: ProcessStep[] = [
  { title: "Request received", body: "The submission has reached the right LoyaltyMaster workflow." },
  { title: "Review begins", body: "The team checks the request and prepares the next practical step." },
  { title: "Follow-up sent", body: "The visitor receives a clear response or booking confirmation." },
];

export interface ThankYouConfirmationSectionProps {
  id?: string;
  heading?: string;
  body?: string;
  nextSteps?: ProcessStep[];
  primaryAction?: Action;
  secondaryAction?: Action;
}

export function ThankYouConfirmationSection({ id = "thank-you-confirmation-section", heading = "Thank You - We Received Your Request", body = "Use this approved confirmation pattern when the visitor needs reassurance and clear next steps.", nextSteps = defaultSteps, primaryAction = { label: "Return home", href: "/" }, secondaryAction }: ThankYouConfirmationSectionProps) {
  return (
    <RunbookSection id={id} tone="cyan" className="lm-rb-thank-you">
      <div className="lm-rb-status-card">
        <HeaderWithCopy eyebrow="Confirmed" heading={heading} body={body} />
        <div className="lm-rb-step-grid">
          {nextSteps.map((step, index) => (
            <article key={step.title} className="lm-rb-step-card">
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <ActionRow actions={[primaryAction, secondaryAction]} />
      </div>
    </RunbookSection>
  );
}
