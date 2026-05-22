'use client';

import type { FormEvent } from "react";
import { useState } from "react";
import { isValidEmail } from "../utils";
import { SectionHeader, SectionShell } from "./_internal";

export interface TrialFormValues {
  name: string;
  email: string;
  business: string;
  location: string;
  website: string;
}

export interface CtaTrialFullFormProps {
  heading?: string;
  body?: string;
  submitLabel: string;
  onSubmit: (values: TrialFormValues) => void;
}

export function CtaTrialFullForm({
  heading = "Start with a practical loyalty campaign",
  body = "Use the full trial form only when the page needs more than an email address.",
  submitLabel,
  onSubmit,
}: CtaTrialFullFormProps) {
  const [values, setValues] = useState<TrialFormValues>({ name: "", email: "", business: "", location: "", website: "" });
  const [error, setError] = useState("");

  function updateField(field: keyof TrialFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.name.trim() || !values.business.trim() || !values.location.trim() || !isValidEmail(values.email)) {
      setError("Complete all fields with a valid email address.");
      return;
    }
    setError("");
    onSubmit({
      name: values.name.trim(),
      email: values.email.trim(),
      business: values.business.trim(),
      location: values.location.trim(),
      website: values.website.trim(),
    });
  }

  return (
    <SectionShell tone="peach" className="lm-trial-section">
      <div className="lm-container lm-container--focus lm-stack">
        <SectionHeader heading={heading} body={body} align="center" />
        <form className="lm-card lm-card--secondary lm-grid lm-trial-form" onSubmit={handleSubmit} noValidate>
          <label>
            <span>Full Name <em>*</em></span>
            <input className="lm-input" placeholder="Jane Smith" value={values.name} onChange={(event) => updateField("name", event.target.value)} />
          </label>
          <label>
            <span>Business Name <em>*</em></span>
            <input className="lm-input" placeholder="Acme Wellness Studio" value={values.business} onChange={(event) => updateField("business", event.target.value)} />
          </label>
          <label>
            <span>Business Email <em>*</em></span>
            <input className="lm-input" type="email" placeholder="name@business.com" value={values.email} onChange={(event) => updateField("email", event.target.value)} />
          </label>
          <label>
            <span>Business Location <em>*</em></span>
            <input className="lm-input" placeholder="City, State, Country" value={values.location} onChange={(event) => updateField("location", event.target.value)} />
          </label>
          <label className="lm-trial-field--full">
            <span>Business Website</span>
            <input className="lm-input" type="url" placeholder="https://example.com" value={values.website} onChange={(event) => updateField("website", event.target.value)} />
            <small>Optional - include this if your business has a website.</small>
          </label>
          {error ? <p className="lm-body" role="alert">{error}</p> : null}
          <button className="lm-button" type="submit">{submitLabel}</button>
        </form>
      </div>
    </SectionShell>
  );
}
