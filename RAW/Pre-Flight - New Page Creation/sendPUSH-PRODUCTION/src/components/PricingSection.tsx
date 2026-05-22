import { useState } from "react";

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const isYearly = billing === "yearly";

  return (
    <section id="pricing" className="wf-section wf-bg-white wf-pricing">
      <div className="wr-container--main">
        <div className="wf-center reveal" data-reveal-order="0">
          <p className="wf-eyebrow">Pricing</p>
          <h2 className="wr-h2 wf-heading-center">Pricing That Scales With Your Campaign Goals</h2>
          <p className="wr-text-body wf-pricing-subtext">
            Start lean, scale when your audience and campaign volume grow. Every plan includes sendPUSH templates,
            automation tools, and performance reporting.
          </p>
        </div>

        <div className="wf-center wf-pricing-toggle-wrap reveal" data-reveal-order="1">
          <div className="wf-pricing-toggle" role="group" aria-label="Billing period">
            <button
              className={`wf-pricing-toggle-btn${billing === "monthly" ? " is-active" : ""}`}
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
            >
              Monthly
            </button>
            <button
              className={`wf-pricing-toggle-btn${billing === "yearly" ? " is-active" : ""}`}
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
            >
              <span>Yearly</span>
              <span className="wf-pricing-toggle-badge">30% OFF</span>
            </button>
          </div>
        </div>

        <div className="wf-pricing-grid">
          <article className="wf-pricing-card reveal" data-reveal-order="2">
            <div className="wf-pricing-card-top">
              <h3 className="wf-pricing-plan-name">Starter</h3>
              <p className="wf-pricing-plan-copy">
                For independent operators who want reliable customer messaging without team overhead.
              </p>
              <div className="wf-pricing-value-block">
                <div className="wf-pricing-value-row">
                  <span className="wf-pricing-value">{isYearly ? "$13" : "$19"}</span>
                  <span className="wf-pricing-period">/month</span>
                </div>
                <p className="wf-pricing-billed">
                  Billed <span className="wf-pricing-billed-label">{billing}</span>.
                </p>
              </div>
            </div>
            <div className="wf-pricing-card-bottom">
              <a className="wf-pricing-card-cta" href="#tenant-trial-cta">Get Started with Starter</a>
              <ul className="wf-pricing-list">
                <li><span className="wf-pricing-list-dot" aria-hidden="true"></span><span>Message templates for promotions, reminders, and follow-ups.</span></li>
                <li><span className="wf-pricing-list-dot" aria-hidden="true"></span><span>Up to 8 active customer campaigns at a time.</span></li>
                <li><span className="wf-pricing-list-dot" aria-hidden="true"></span><span>Performance dashboard with delivery and response tracking.</span></li>
              </ul>
            </div>
          </article>

          <article className="wf-pricing-card wf-pricing-card--pro reveal" data-reveal-order="3">
            <div className="wf-pricing-card-top">
              <div className="wf-pricing-card-head">
                <h3 className="wf-pricing-plan-name">Pro</h3>
                <span className="wf-pricing-popular">Most popular</span>
              </div>
              <p className="wf-pricing-plan-copy">
                Built for growing teams that need advanced automation, segmentation, and collaboration controls.
              </p>
              <div className="wf-pricing-value-block">
                <div className="wf-pricing-value-row">
                  <span className="wf-pricing-value">{isYearly ? "$39" : "$49"}</span>
                  <span className="wf-pricing-period">/month</span>
                </div>
                <p className="wf-pricing-billed">
                  Billed <span className="wf-pricing-billed-label">{billing}</span>, per workspace.
                </p>
              </div>
            </div>
            <div className="wf-pricing-card-bottom">
              <a className="wf-pricing-card-cta wf-pricing-card-cta--pro" href="#tenant-trial-cta">Upgrade to Pro</a>
              <ul className="wf-pricing-list">
                <li><span className="wf-pricing-list-dot wf-pricing-list-dot--pro" aria-hidden="true"></span><span>Unlimited campaigns, segments, and reusable automations.</span></li>
                <li><span className="wf-pricing-list-dot wf-pricing-list-dot--pro" aria-hidden="true"></span><span>Higher-volume outreach with deeper conversion reporting.</span></li>
                <li><span className="wf-pricing-list-dot wf-pricing-list-dot--pro" aria-hidden="true"></span><span>Team roles, approval flow, and advanced campaign controls.</span></li>
              </ul>
            </div>
          </article>

          <article className="wf-pricing-card reveal" data-reveal-order="4">
            <div className="wf-pricing-card-top">
              <h3 className="wf-pricing-plan-name">Enterprise</h3>
              <p className="wf-pricing-plan-copy">
                For multi-location organizations that need custom workflows, tighter governance, and priority support.
              </p>
              <div className="wf-pricing-value-block">
                <p className="wf-pricing-contact">Contact us</p>
                <p className="wf-pricing-contact-note">
                  We will tailor pricing to your customer volume, security requirements, and rollout timeline.
                </p>
              </div>
            </div>
            <div className="wf-pricing-card-bottom">
              <a className="wf-pricing-card-cta" href="#tenant-trial-cta">Talk to Sales</a>
              <ul className="wf-pricing-list">
                <li><span className="wf-pricing-list-dot" aria-hidden="true"></span><span>Unlimited workspaces, users, and customer records.</span></li>
                <li><span className="wf-pricing-list-dot" aria-hidden="true"></span><span>Compliance, security review, and dedicated onboarding support.</span></li>
                <li><span className="wf-pricing-list-dot" aria-hidden="true"></span><span>Custom integrations, API access, and service-level agreements.</span></li>
              </ul>
            </div>
          </article>
        </div>

        <div className="wf-center wf-pricing-details reveal" data-reveal-order="5">
          <a className="wf-pricing-details-link" href="#faq">View all billing details</a>
        </div>
      </div>
    </section>
  );
}
