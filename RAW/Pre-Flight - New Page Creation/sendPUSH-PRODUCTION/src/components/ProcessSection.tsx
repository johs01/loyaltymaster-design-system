import { EmailCta } from "./MarketingPrimitives";

export default function ProcessSection() {
  return (
    <section id="process" className="wf-section wf-bg-salmon">
      <div className="wr-container--main">
        <div className="wf-center reveal" data-reveal-order="0">
          <p className="wf-eyebrow">Simple process</p>
          <h2 className="wr-h2 wf-heading-center">Our Solution Is Stupidly Simple to Use and Insanely Effective</h2>
        </div>
        <div className="wf-process-grid">
          <article className="wr-card-process wr-card-process--orange reveal" data-reveal-order="1">
            <div className="wr-pill-step">
              <span className="wf-step-badge wf-step-badge--orange">1</span>
              <span className="wr-pill-step__title">Connect Your Contacts</span>
            </div>
            <p className="wr-text-body">Import your existing list and map customer tags in a few clicks.</p>
          </article>
          <article className="wr-card-process wr-card-process--blue reveal" data-reveal-order="2">
            <div className="wr-pill-step">
              <span className="wf-step-badge wf-step-badge--blue">2</span>
              <span className="wr-pill-step__title">Turn On Automations</span>
            </div>
            <p className="wr-text-body">Choose campaign templates for reminders, promos, and reactivation.</p>
          </article>
          <article className="wr-card-process wr-card-process--yellow reveal" data-reveal-order="3">
            <div className="wr-pill-step">
              <span className="wf-step-badge wf-step-badge--yellow">3</span>
              <span className="wr-pill-step__title">Track Revenue Lift</span>
            </div>
            <p className="wr-text-body">Monitor campaign performance and optimize every week.</p>
          </article>
        </div>
        <div className="wf-center reveal" data-reveal-order="4">
          <EmailCta
            id="wf-email-process"
            label="Start in Under 10 Minutes email capture"
            buttonText="Start in Under 10 Minutes"
          />
        </div>
      </div>
    </section>
  );
}
