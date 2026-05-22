import type { ReactNode } from "react";

interface EmailCtaProps {
  id: string;
  label?: string;
  buttonText: string;
  onSubmit?: () => void;
  href?: string;
}

export function EmailCta({
  id,
  label,
  buttonText,
  onSubmit,
  href = "#tenant-trial-cta",
}: EmailCtaProps) {
  return (
    <div className="wf-email-cta" role="group" aria-label={label}>
      <label className="wf-visually-hidden" htmlFor={id}>Email address</label>
      <input
        className="wf-email-cta__input"
        id={id}
        type="email"
        name="email"
        autoComplete="email"
        placeholder="name@email.com"
      />
      {onSubmit ? (
        <button className="wf-email-cta__button" type="button" onClick={onSubmit}>{buttonText}</button>
      ) : (
        <a className="wf-email-cta__button" href={href}>{buttonText}</a>
      )}
    </div>
  );
}

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
}

export function CtaButton({ children, href = "#tenant-trial-cta" }: CtaButtonProps) {
  return (
    <a className="wr-cta-join wf-btn" href={href}>
      <span className="wr-cta-join__label">{children}</span>
    </a>
  );
}

interface ChecklistProps {
  items: string[];
}

export function Checklist({ items }: ChecklistProps) {
  return (
    <ul className="wf-checklist">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
