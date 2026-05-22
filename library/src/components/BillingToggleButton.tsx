'use client';

import type { BillingCadence } from "../types";

export interface BillingToggleButtonProps {
  value: BillingCadence;
  onChange: (value: BillingCadence) => void;
  monthlyLabel?: string;
  yearlyLabel?: string;
}

export function BillingToggleButton({
  value,
  onChange,
  monthlyLabel = "Monthly",
  yearlyLabel = "Yearly",
}: BillingToggleButtonProps) {
  return (
    <div className="lm-ds wf-pricing-toggle" role="group" aria-label="Billing cadence">
      <button
        type="button"
        className={`wf-pricing-toggle-btn${value === "monthly" ? " is-active" : ""}`}
        aria-pressed={value === "monthly"}
        onClick={() => onChange("monthly")}
      >
        {monthlyLabel}
      </button>
      <button
        type="button"
        className={`wf-pricing-toggle-btn${value === "yearly" ? " is-active" : ""}`}
        aria-pressed={value === "yearly"}
        onClick={() => onChange("yearly")}
      >
        {yearlyLabel}
      </button>
    </div>
  );
}
