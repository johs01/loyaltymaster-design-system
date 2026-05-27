import type { FormEvent, ReactNode } from "react";
import type { Action, ImageAsset } from "../types";
import { ActionLink, MediaFrame, SectionHeader } from "./_internal";
import { cn } from "../utils";

export interface TextBlock {
  heading?: string;
  body?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface FormField {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

export interface IndexedCard {
  title: string;
  body?: string;
  href?: string;
  meta?: string;
  image?: ImageAsset;
}

export interface GroupedList {
  title: string;
  body?: string;
  items: string[];
}

export function RunbookSection({
  id,
  tone = "white",
  className,
  children,
  ariaLabel,
}: {
  id?: string;
  tone?: "white" | "peach" | "cyan" | "salmon" | "yellow" | "dark";
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <section id={id} className={cn("lm-ds lm-rb-section", "lm-rb-section--" + tone, className)} aria-label={ariaLabel}>
      <div className="lm-rb-container">{children}</div>
    </section>
  );
}

export function BodyBlocks({ blocks }: { blocks: TextBlock[] }) {
  return (
    <div className="lm-rb-body-blocks">
      {blocks.map((block, index) => (
        <section key={block.heading ?? index} className="lm-rb-body-block">
          {block.heading ? <h3>{block.heading}</h3> : null}
          {block.body ? <p>{block.body}</p> : null}
          {block.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {block.bullets?.length ? (
            <ul className="lm-rb-list">
              {block.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function IndexedCardGrid({ cards, emptyMessage = "No approved items are available yet." }: { cards: IndexedCard[]; emptyMessage?: string }) {
  if (cards.length === 0) {
    return <p className="lm-rb-empty">{emptyMessage}</p>;
  }

  return (
    <div className="lm-rb-card-grid">
      {cards.map((card) => {
        const content = (
          <>
            {card.image ? <MediaFrame image={card.image} label={card.title} /> : null}
            {card.meta ? <p className="lm-rb-meta">{card.meta}</p> : null}
            <h3>{card.title}</h3>
            {card.body ? <p>{card.body}</p> : null}
          </>
        );

        return card.href ? (
          <a key={card.title} className="lm-rb-card lm-rb-card--link" href={card.href}>
            {content}
          </a>
        ) : (
          <article key={card.title} className="lm-rb-card">
            {content}
          </article>
        );
      })}
    </div>
  );
}

export function SimpleForm({
  fields,
  submitLabel,
  consentText,
  onSubmit,
}: {
  fields: FormField[];
  submitLabel: string;
  consentText?: string;
  onSubmit?: (values: FormData) => void;
}) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(new FormData(event.currentTarget));
  }

  return (
    <form className="lm-rb-form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <label key={field.name} className={field.type === "textarea" ? "lm-rb-field lm-rb-field--full" : "lm-rb-field"}>
          <span>{field.label}{field.required ? " *" : ""}</span>
          {field.type === "textarea" ? (
            <textarea name={field.name} placeholder={field.placeholder} required={field.required} />
          ) : field.type === "select" ? (
            <select name={field.name} required={field.required} defaultValue="">
              <option value="" disabled>{field.placeholder ?? "Select an option"}</option>
              {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          ) : (
            <input name={field.name} type={field.type ?? "text"} placeholder={field.placeholder} required={field.required} />
          )}
        </label>
      ))}
      {consentText ? <p className="lm-rb-consent">{consentText}</p> : null}
      <button className="wr-cta-join wf-btn lm-rb-submit" type="submit"><span>{submitLabel}</span></button>
    </form>
  );
}

export function HeaderWithCopy({ eyebrow, heading, body, align = "center" }: { eyebrow?: string; heading: string; body?: string; align?: "left" | "center" }) {
  return <SectionHeader eyebrow={eyebrow} heading={heading} body={body} align={align} />;
}

export function ActionRow({ actions }: { actions: Array<Action | undefined> }) {
  const visibleActions = actions.filter((action): action is Action => Boolean(action));
  if (visibleActions.length === 0) return null;
  return (
    <div className="lm-rb-actions">
      {visibleActions.map((action) => <ActionLink key={action.label} action={action} />)}
    </div>
  );
}
