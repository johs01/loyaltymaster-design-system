'use client';

import type { FormEvent } from "react";
import { useState } from "react";
import { isValidEmail } from "../utils";

export interface ButtonEmailProps {
  id?: string;
  placeholder?: string;
  buttonLabel: string;
  onSubmit: (email: string) => void;
  inputLabel?: string;
  className?: string;
}

export function ButtonEmail({
  id = "lm-button-email",
  placeholder = "Enter your email",
  buttonLabel,
  onSubmit,
  inputLabel = "Email address",
  className,
}: ButtonEmailProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    onSubmit(email.trim());
  }

  return (
    <form className={`lm-ds lm-email-cta-form${className ? ` ${className}` : ""}`} onSubmit={handleSubmit} noValidate>
      <div className="wf-email-cta" role="group" aria-label={inputLabel}>
        <label className="lm-visually-hidden" htmlFor={id}>{inputLabel}</label>
        <input
          id={id}
          className="wf-email-cta__input"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          placeholder={placeholder}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={error ? true : undefined}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="wf-email-cta__button" type="submit">
          <span>{buttonLabel}</span>
        </button>
      </div>
      {error ? <p className="lm-body" id={`${id}-error`} role="alert">{error}</p> : null}
    </form>
  );
}
