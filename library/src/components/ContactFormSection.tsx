'use client';

import type { ContactItem } from "../types";
import { HeaderWithCopy, RunbookSection, SimpleForm, type FormField } from "./RunbookPromotionPrimitives";

const defaultFields: FormField[] = [
  { name: "name", label: "Name", required: true, placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "name@email.com" },
  { name: "topic", label: "Topic", type: "select", placeholder: "Choose topic", options: ["Sales", "Support", "Partnership", "Billing"] },
  { name: "message", label: "Message", type: "textarea", required: true, placeholder: "How can we help?" },
];

const defaultContactItems: ContactItem[] = [
  { label: "Sales and setup guidance", href: "mailto:hello@loyaltymaster.com" },
  { label: "Customer support", href: "mailto:support@loyaltymaster.com" },
];

export interface ContactFormSectionProps {
  id?: string;
  heading?: string;
  body?: string;
  contactItems?: ContactItem[];
  fields?: FormField[];
  submitLabel?: string;
  consentText?: string;
  onSubmit?: (values: FormData) => void;
}

export function ContactFormSection({ id = "contact-form-section", heading = "Contact the LoyaltyMaster Team", body = "Send a focused message and we will route it to the right team.", contactItems = defaultContactItems, fields = defaultFields, submitLabel = "Send message", consentText = "By sending this message, you agree to be contacted about your request.", onSubmit }: ContactFormSectionProps) {
  return (
    <RunbookSection id={id} tone="white" className="lm-rb-contact">
      <div className="lm-rb-split">
        <div>
          <HeaderWithCopy eyebrow="Contact" heading={heading} body={body} align="left" />
          <div className="lm-rb-contact-list">
            {contactItems.map((item, itemIndex) => item.href ? <a key={`contact-${itemIndex}`} href={item.href}>{item.label}</a> : <span key={`contact-${itemIndex}`}>{item.label}</span>)}
          </div>
        </div>
        <SimpleForm fields={fields} submitLabel={submitLabel} consentText={consentText} onSubmit={onSubmit} />
      </div>
    </RunbookSection>
  );
}
