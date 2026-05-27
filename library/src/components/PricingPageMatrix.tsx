'use client';

import { useState } from "react";
import type { Action, BillingCadence } from "../types";
import { ActionLink } from "./_internal";
import { HeaderWithCopy, RunbookSection } from "./RunbookPromotionPrimitives";

export interface PricingMatrixPlan {
  name: string;
  description?: string;
  monthlyPrice: string;
  yearlyPrice?: string;
  features: string[];
  action: Action;
  highlighted?: boolean;
}

const defaultPlans: PricingMatrixPlan[] = [
  { name: "Starter", description: "For simple loyalty launches.", monthlyPrice: "$19", yearlyPrice: "$13", features: ["Digital card setup", "Starter campaigns", "Basic reporting"], action: { label: "Choose Starter", href: "/price-list" } },
  { name: "Growth", description: "For active return-visit programs.", monthlyPrice: "$49", yearlyPrice: "$39", features: ["Advanced campaigns", "More segments", "Priority guidance"], action: { label: "Choose Growth", href: "/price-list" }, highlighted: true },
  { name: "Enterprise", description: "For multi-location programs.", monthlyPrice: "Contact us", yearlyPrice: "Contact us", features: ["Custom rollout", "Governance support", "Integration planning"], action: { label: "Talk to sales", href: "/contact-us" } },
];

export interface PricingPageMatrixProps {
  id?: string;
  heading?: string;
  body?: string;
  plans?: PricingMatrixPlan[];
  defaultCadence?: BillingCadence;
  disclaimer?: string;
}

export function PricingPageMatrix({ id = "pricing-page-matrix", heading = "Choose the LoyaltyMaster Plan That Fits", body = "Use this full pricing matrix when a page needs cadence switching, plan detail, and pricing disclaimers.", plans = defaultPlans, defaultCadence = "monthly", disclaimer = "Prices and availability must be confirmed in the production website before publishing." }: PricingPageMatrixProps) {
  const [cadence, setCadence] = useState<BillingCadence>(defaultCadence);

  return (
    <RunbookSection id={id} tone="white" className="lm-rb-pricing-matrix">
      <HeaderWithCopy eyebrow="Pricing" heading={heading} body={body} />
      <div className="lm-toggle lm-rb-toggle" role="group" aria-label="Billing cadence">
        <button type="button" aria-pressed={cadence === "monthly"} onClick={() => setCadence("monthly")}>Monthly</button>
        <button type="button" aria-pressed={cadence === "yearly"} onClick={() => setCadence("yearly")}>Yearly</button>
      </div>
      <div className="lm-rb-card-grid lm-rb-card-grid--pricing">
        {plans.map((plan) => (
          <article key={plan.name} className={plan.highlighted ? "lm-rb-card lm-rb-card--highlighted" : "lm-rb-card"}>
            <p className="lm-rb-meta">{plan.highlighted ? "Recommended" : "Plan"}</p>
            <h3>{plan.name}</h3>
            {plan.description ? <p>{plan.description}</p> : null}
            <div className="lm-rb-price">{cadence === "yearly" ? plan.yearlyPrice ?? plan.monthlyPrice : plan.monthlyPrice}</div>
            <ul className="lm-rb-list">
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <ActionLink action={plan.action} />
          </article>
        ))}
      </div>
      <p className="lm-rb-note">{disclaimer}</p>
    </RunbookSection>
  );
}
