import { useState, type FormEvent } from "react";
import { EmailCta } from "./MarketingPrimitives";
import { scrollToTrialForm } from "../utils/scrollToTrialForm";

export function FinalCtaSection() {
  const handleClick = () => {
    const input = document.getElementById("wf-email-final") as HTMLInputElement | null;
    scrollToTrialForm(input?.value);
  };

  return (
    <section id="final-cta" className="wf-section wf-bg-dark wf-final-cta">
      <div className="wr-container--focus wf-center reveal" data-reveal-order="0">
        <h2 className="wr-h2 wf-heading-dark">Stop Losing Customers to Silence.</h2>
        <p className="wf-dark-subtext">
          Turn every customer interaction into repeat revenue with direct messaging you control.
        </p>
        <EmailCta
          id="wf-email-final"
          label="Get Your First Campaign Ready email capture"
          buttonText="Get Your First Campaign Ready"
          onSubmit={handleClick}
        />
      </div>
    </section>
  );
}

export function TenantTrialSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/trial-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="tenant-trial-cta" className="wf-section wf-bg-peach wf-tenant-section">
      <div className="wr-container--focus">
        <div className="wf-center reveal" data-reveal-order="0">
          <p className="wf-eyebrow">30-Day Trial</p>
          <h2 className="wr-h2 wf-heading-center">Start Your Tenant Trial in Minutes</h2>
          <p className="wr-text-body wf-tenant-subtext">
            Complete this quick form to launch your 30-day trial and start messaging your customers with sendPUSH.
          </p>
        </div>
        {status === "success" ? (
          <div className="wf-center reveal is-visible" style={{ padding: "48px 0" }}>
            <p className="wr-h3 wf-heading-center" style={{ color: "var(--wr-accent-orange)" }}>
              You&rsquo;re in! Check your email for next steps.
            </p>
            <p className="wr-text-body wf-tenant-subtext">
              We&rsquo;ll have your trial workspace ready within minutes.
            </p>
          </div>
        ) : (
          <form id="wf-tenant-trial-form" className="wf-tenant-form reveal" data-reveal-order="1" onSubmit={handleSubmit}>
            <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
              <label htmlFor="wf-tenant-company-url">Company URL</label>
              <input
                id="wf-tenant-company-url"
                name="companyUrl"
                type="text"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>
            <div className="wf-tenant-form-grid">
              <div className="wf-tenant-field">
                <label className="wf-tenant-label" htmlFor="wf-tenant-name">Full Name <span aria-hidden="true">*</span></label>
                <input className="wf-tenant-input" id="wf-tenant-name" name="fullName" type="text" autoComplete="name" required placeholder="Jane Smith" />
              </div>
              <div className="wf-tenant-field">
                <label className="wf-tenant-label" htmlFor="wf-tenant-business">Business Name <span aria-hidden="true">*</span></label>
                <input className="wf-tenant-input" id="wf-tenant-business" name="businessName" type="text" autoComplete="organization" required placeholder="Acme Wellness Studio" />
              </div>
              <div className="wf-tenant-field">
                <label className="wf-tenant-label" htmlFor="wf-tenant-email">Business Email <span aria-hidden="true">*</span></label>
                <input className="wf-tenant-input" id="wf-tenant-email" name="businessEmail" type="email" autoComplete="email" required placeholder="name@business.com" />
              </div>
              <div className="wf-tenant-field">
                <label className="wf-tenant-label" htmlFor="wf-tenant-location">Business Location <span aria-hidden="true">*</span></label>
                <input className="wf-tenant-input" id="wf-tenant-location" name="businessLocation" type="text" autoComplete="address-level2" required placeholder="City, State, Country" />
              </div>
              <div className="wf-tenant-field wf-tenant-field--full">
                <label className="wf-tenant-label" htmlFor="wf-tenant-website">Business Website</label>
                <input
                  className="wf-tenant-input"
                  id="wf-tenant-website"
                  name="businessWebsite"
                  type="url"
                  autoComplete="url"
                  placeholder="https://example.com"
                  aria-describedby="wf-tenant-website-help"
                />
                <p className="wf-tenant-help" id="wf-tenant-website-help">Optional - include this if your business has a website.</p>
              </div>
            </div>
            <div className="wf-tenant-actions">
              <button className="wf-tenant-submit" type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Submitting…" : "Start 30-Day Trial"}
              </button>
            </div>
            {status === "error" && (
              <p className="wf-tenant-help" style={{ color: "var(--wf-feedback-error)", textAlign: "center", marginTop: 12 }} role="alert">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
