import type { Action, ImageAsset } from "../types";
import { ActionLink, Checklist, EmailCapture, MediaFrame } from "./_internal";

const defaultChecklist = ["Digital loyalty cards", "Push-ready offers", "Built for repeat visits"];

export interface HeroMainSectionProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryAction: Action;
  checklist?: string[];
  image?: ImageAsset;
  emailPlaceholder?: string;
  emailButtonLabel?: string;
  showEmailCapture?: boolean;
}

export function HeroMainSection({
  id = "hero",
  eyebrow = "sendPUSH | Loyaltymaster",
  heading,
  body,
  primaryAction,
  checklist = defaultChecklist,
  image,
  emailPlaceholder = "name@email.com",
  emailButtonLabel = "Start Free in 2 Minutes",
  showEmailCapture = true,
}: HeroMainSectionProps) {
  return (
    <section id={id} className="lm-ds wf-section wf-bg-peach lm-hero-main">
      <div className="wr-container--main wf-hero-grid">
        <div>
          <p className="wf-eyebrow">{eyebrow}</p>
          <h1 className="wr-h1 wf-heading-hero">{heading}</h1>
          <div className="ftd-hero-mobile-media">
            <MediaFrame image={image} label="sendPUSH product visual" />
          </div>
          {body ? <p className="wr-text-body wf-hero-copy">{body}</p> : null}
          <Checklist items={checklist} />
          {showEmailCapture ? (
            <EmailCapture
              id="lm-hero-email"
              label={`${emailButtonLabel} email capture`}
              placeholder={emailPlaceholder}
              buttonText={emailButtonLabel}
            />
          ) : (
            <ActionLink action={primaryAction} />
          )}
        </div>
        <div className="ftd-hero-desktop-media">
          <MediaFrame image={image} label="sendPUSH product visual" />
        </div>
      </div>
    </section>
  );
}
