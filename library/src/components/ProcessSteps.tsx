import type { ProcessStep } from "../types";
import { EmailCapture } from "./_internal";

const defaultSteps: ProcessStep[] = [
  { title: "Create the offer", body: "Keep the promise specific and easy to understand." },
  { title: "Send the push", body: "Reach customers through a direct loyalty channel." },
  { title: "Bring them back", body: "Turn the message into a measurable return visit." },
];

export interface ProcessStepsProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  steps?: ProcessStep[];
  emailPlaceholder?: string;
  emailButtonLabel?: string;
  showEmailCapture?: boolean;
}

export function ProcessSteps({
  eyebrow,
  heading = "A simple flow for repeat visits",
  body,
  steps = defaultSteps,
  emailPlaceholder = "name@email.com",
  emailButtonLabel = "Start in Under 10 Minutes",
  showEmailCapture = true,
}: ProcessStepsProps) {
  return (
    <section id="process" className="lm-ds wf-section wf-bg-salmon">
      <div className="wr-container--main">
        <div className="wf-center">
          {eyebrow ? <p className="wf-eyebrow">{eyebrow}</p> : null}
          <h2 className="wr-h2 wf-heading-center">{heading}</h2>
          {body ? <p className="wr-text-body wf-center-subtext">{body}</p> : null}
        </div>
        <div className="wf-process-grid">
          {steps.map((step, index) => (
            <article key={step.title} className={`wr-card-process wr-card-process--${index === 0 ? "orange" : index === 1 ? "blue" : "yellow"}`}>
              <div className="wr-pill-step">
                <span className={`wf-step-badge wf-step-badge--${index === 0 ? "orange" : index === 1 ? "blue" : "yellow"}`}>{index + 1}</span>
                <span className="wr-pill-step__title">{step.title}</span>
              </div>
              <p className="wr-text-body">{step.body}</p>
            </article>
          ))}
        </div>
        {showEmailCapture ? (
          <div className="wf-center" style={{ marginTop: "34px" }}>
            <EmailCapture
              id="lm-process-email"
              label={`${emailButtonLabel} email capture`}
              placeholder={emailPlaceholder}
              buttonText={emailButtonLabel}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
