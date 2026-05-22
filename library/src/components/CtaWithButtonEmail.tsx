'use client';

import { ButtonEmail } from "./ButtonEmail";

export interface CtaWithButtonEmailProps {
  heading?: string;
  body?: string;
  buttonLabel?: string;
  placeholder?: string;
  onSubmit?: (email: string) => void;
}

export function CtaWithButtonEmail({
  heading = "Bring customers back with a direct loyalty message",
  body,
  buttonLabel = "Get started",
  placeholder,
  onSubmit = () => undefined,
}: CtaWithButtonEmailProps) {
  return (
    <section id="final-cta" className="lm-ds wf-section wf-bg-dark wf-final-cta">
      <div className="wr-container--focus wf-center">
        <h2 className="wr-h2 wf-heading-dark">{heading}</h2>
        {body ? <p className="wf-dark-subtext">{body}</p> : null}
        <ButtonEmail
          id="wf-email-final"
          className="wf-center"
          placeholder={placeholder}
          buttonLabel={buttonLabel}
          inputLabel={`${buttonLabel} email capture`}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
}
