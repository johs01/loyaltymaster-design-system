import type { HTMLAttributes, ReactNode } from "react";
import type { Action, ImageAsset } from "../types";
import { cn } from "../utils";

export interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, heading, body, align = "left" }: SectionHeaderProps) {
  return (
    <div className="lm-stack" style={{ textAlign: align }}>
      {eyebrow ? <p className="lm-eyebrow">{eyebrow}</p> : null}
      <h2 className="lm-heading lm-heading--section">{heading}</h2>
      {body ? <p className="lm-body">{body}</p> : null}
    </div>
  );
}

export function ActionLink({ action, className }: { action: Action; className?: string }) {
  if (action.href) {
    return (
      <a className={cn("wr-cta-join wf-btn", className)} href={action.href} aria-label={action.ariaLabel}>
        <span className="wr-cta-join__label">{action.label}</span>
      </a>
    );
  }

  if (!action.onClick) {
    return null;
  }

  return (
    <button className={cn("wr-cta-join wf-btn", className)} type="button" onClick={action.onClick} aria-label={action.ariaLabel}>
      <span className="wr-cta-join__label">{action.label}</span>
    </button>
  );
}

export function SectionShell({
  children,
  tone = "peach",
  className,
  ariaLabel,
}: {
  children: ReactNode;
  tone?: "peach" | "cyan" | "salmon" | "dark" | "plain";
  className?: string;
  ariaLabel?: string;
}) {
  return <section className={cn("lm-ds lm-section", tone !== "plain" && `lm-section--${tone}`, className)} aria-label={ariaLabel}>{children}</section>;
}

export function MediaFrame({ image, label }: { image?: ImageAsset; label: string }) {
  if (image) {
    return (
      <div className="wf-placeholder wf-placeholder--square wf-placeholder--has-image">
        <img className="wf-image-fill" src={image.src} alt={image.alt} loading="lazy" />
      </div>
    );
  }

  return <div className="wf-placeholder wf-placeholder--square" data-label={label} aria-label={label} />;
}

export function Card({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("lm-card", className)} {...props}>{children}</div>;
}

export function BrandWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("brand-logo", className)} aria-hidden="true">
      <span className="brand-logo__loyalty">Loyaltymaster</span>
    </span>
  );
}

export function Checklist({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("wf-checklist", className)}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export function EmailCapture({
  id,
  label,
  buttonText,
  placeholder = "name@email.com",
  onSubmit,
}: {
  id: string;
  label?: string;
  buttonText: string;
  placeholder?: string;
  onSubmit?: () => void;
}) {
  return (
    <div className="wf-email-cta" role="group" aria-label={label}>
      <label className="lm-visually-hidden" htmlFor={id}>Email address</label>
      <input
        className="wf-email-cta__input"
        id={id}
        type="email"
        name="email"
        autoComplete="email"
        placeholder={placeholder}
      />
      {onSubmit ? (
        <button className="wf-email-cta__button" type="button" onClick={onSubmit}>
          <span>{buttonText}</span>
        </button>
      ) : (
        <a className="wf-email-cta__button" href="#tenant-trial-cta">
          <span>{buttonText}</span>
        </a>
      )}
    </div>
  );
}

const blogMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2025-05-13" -> "13 May 2025" (the blog's WordPress "j M Y" format). */
export function formatBlogDate(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate);
  if (!match) return isoDate;
  return `${Number(match[3])} ${blogMonths[Number(match[2]) - 1]} ${match[1]}`;
}

/** Date + reading time meta row shared by the blog cards. */
export function BlogMeta({ date, readingMinutes, children }: { date: string; readingMinutes?: number; children?: ReactNode }) {
  return (
    <p className="lm-blog-meta">
      <time dateTime={date}>{formatBlogDate(date)}</time>
      {readingMinutes ? <span>{readingMinutes} min read</span> : null}
      {children}
    </p>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
