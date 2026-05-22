'use client';

import { useState } from "react";
import type { BillingCadence, PricingPlan } from "../types";

const defaultPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For simple loyalty launches.",
    monthlyPrice: "$49",
    yearlyPrice: "$490",
    features: ["Wallet pass setup", "Basic push campaign", "Core support"],
    cta: { label: "Choose Starter", href: "/trial" },
  },
  {
    name: "Pro",
    description: "For active return-visit campaigns.",
    monthlyPrice: "$99",
    yearlyPrice: "$990",
    features: ["Advanced campaigns", "Priority support", "Offer guidance"],
    cta: { label: "Choose Pro", href: "/trial" },
    highlighted: true,
  },
];

export interface PricingSectionProps {
  heading?: string;
  body?: string;
  plans?: PricingPlan[];
  defaultCadence?: BillingCadence;
}

export function PricingSection({
  heading = "Pick the right loyalty push plan",
  body,
  plans = defaultPlans,
  defaultCadence = "monthly",
}: PricingSectionProps) {
  const [cadence, setCadence] = useState<BillingCadence>(defaultCadence);

  return (
    <section id="pricing" className="lm-ds wf-section wf-bg-white wf-pricing lm-pricing-section">
      <div className="wr-container--main">
        <div className="wf-center">
          <p className="wf-eyebrow">Pricing</p>
          <h2 className="wr-h2 wf-heading-center">{heading}</h2>
          {body ? <p className="wr-text-body wf-pricing-subtext">{body}</p> : null}
        </div>
        <div className="wf-center wf-pricing-toggle-wrap">
          <div className="wf-pricing-toggle" role="group" aria-label="Billing period">
            <button
              className={`wf-pricing-toggle-btn${cadence === "monthly" ? " is-active" : ""}`}
              type="button"
              onClick={() => setCadence("monthly")}
              aria-pressed={cadence === "monthly"}
            >
              Monthly
            </button>
            <button
              className={`wf-pricing-toggle-btn${cadence === "yearly" ? " is-active" : ""}`}
              type="button"
              onClick={() => setCadence("yearly")}
              aria-pressed={cadence === "yearly"}
            >
              <span>Yearly</span>
              <span className="wf-pricing-toggle-badge">30% OFF</span>
            </button>
          </div>
        </div>
        <div className="wf-pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`wf-pricing-card${plan.highlighted ? " wf-pricing-card--pro" : ""}`}>
              <div className="wf-pricing-card-top">
                {plan.badge ? (
                  <div className="wf-pricing-card-head">
                    <h3 className="wf-pricing-plan-name">{plan.name}</h3>
                    <span className="wf-pricing-popular">{plan.badge}</span>
                  </div>
                ) : (
                  <h3 className="wf-pricing-plan-name">{plan.name}</h3>
                )}
                {plan.description ? <p className="wf-pricing-plan-copy">{plan.description}</p> : null}
                <div className="wf-pricing-value-block">
                  {plan.monthlyPrice.toLowerCase().includes("contact") ? (
                    <>
                      <p className="wf-pricing-contact">Contact us</p>
                      {plan.note ? <p className="wf-pricing-contact-note">{plan.note}</p> : null}
                    </>
                  ) : (
                    <>
                      <div className="wf-pricing-value-row">
                        <span className="wf-pricing-value">{cadence === "yearly" ? plan.yearlyPrice ?? plan.monthlyPrice : plan.monthlyPrice}</span>
                        {plan.priceSuffix ? <span className="wf-pricing-period">{plan.priceSuffix}</span> : null}
                      </div>
                      {plan.note ? <p className="wf-pricing-billed">{plan.note}</p> : null}
                    </>
                  )}
                </div>
              </div>
              <div className="wf-pricing-card-bottom">
                <a className={`wf-pricing-card-cta${plan.highlighted ? " wf-pricing-card-cta--pro" : ""}`} href={plan.cta.href ?? "#"}>
                  <span>{plan.cta.label}</span>
                </a>
                <ul className="wf-pricing-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className={`wf-pricing-list-dot${plan.highlighted ? " wf-pricing-list-dot--pro" : ""}`} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="wf-center wf-pricing-details">
          <a className="wf-pricing-details-link" href="#faq">View all billing details</a>
        </div>
      </div>
    </section>
  );
}
