'use client';

import { HeaderWithCopy, RunbookSection, SimpleForm, type FormField } from "./RunbookPromotionPrimitives";

const defaultFields: FormField[] = [
  { name: "business", label: "Business name", required: true, placeholder: "Your business" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "name@email.com" },
  { name: "industry", label: "Industry", type: "select", required: true, placeholder: "Choose industry", options: ["Restaurant", "Retail", "Salon", "Clinic", "Other"] },
  { name: "cardGoal", label: "What should the card help customers do?", type: "textarea", required: true, placeholder: "Describe the loyalty goal" },
];

export interface BrandedCardApplicationFormProps {
  id?: string;
  heading?: string;
  body?: string;
  features?: string[];
  fields?: FormField[];
  submitLabel?: string;
  onSubmit?: (values: FormData) => void;
}

export function BrandedCardApplicationForm({ id = "branded-card-application-form", heading = "Apply for a Branded Digital Reward Card", body = "Collect the exact business details needed to plan a branded customer reward card.", features = ["Custom card setup", "Wallet-ready reward experience", "Clear application handoff"], fields = defaultFields, submitLabel = "Submit application", onSubmit }: BrandedCardApplicationFormProps) {
  return (
    <RunbookSection id={id} tone="peach" className="lm-rb-application">
      <div className="lm-rb-split">
        <div>
          <HeaderWithCopy eyebrow="Branded cards" heading={heading} body={body} align="left" />
          <ul className="lm-rb-list">
            {features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
        <SimpleForm fields={fields} submitLabel={submitLabel} consentText="Application details are used only to prepare the branded card request." onSubmit={onSubmit} />
      </div>
    </RunbookSection>
  );
}
