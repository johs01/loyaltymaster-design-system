'use client';

import { useId, useState } from "react";

import type { LinkItem } from "../types";

export interface FaqItem {
  question: string;
  answer: string;
  /** Optional follow-up anchor after the answer (owner call 2026-07-13).
      The answer text must stand alone: FAQPage JSON-LD carries text only. */
  link?: LinkItem;
}

const defaultItems: FaqItem[] = [
  { question: "When should I use sendPUSH?", answer: "Use it when the customer should take a clear return-visit action." },
  { question: "Can this replace every channel?", answer: "No. It is strongest as the direct loyalty layer beside existing channels." },
  { question: "Should I add more fields?", answer: "Only when the conversion moment needs the extra business information." },
];

export interface FaqAccordionProps {
  heading?: string;
  body?: string;
  items?: FaqItem[];
  defaultOpenIndex?: number;
}

export function FaqAccordion({
  heading = "Common questions",
  body,
  items = defaultItems,
  defaultOpenIndex = 0,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  return (
    <section id="faq" className="lm-ds wf-section wf-bg-white">
      <div className="wr-container--focus">
        <div className="wf-center">
          <p className="wf-eyebrow">FAQ</p>
          <h2 className="wr-h2 wf-heading-center">{heading}</h2>
          {body ? <p className="wr-text-body wf-center-subtext">{body}</p> : null}
        </div>
        <div className="wf-faq-list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-button-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <div key={item.question} className="wf-faq-item" data-open={isOpen ? "true" : undefined}>
                <button
                  id={buttonId}
                  className="wf-faq-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.question}
                </button>
                <div id={panelId} className="wf-faq-answer" role="region" aria-labelledby={buttonId}>
                  <p>
                    {item.answer}
                    {item.link ? <> <a href={item.link.href}>{item.link.label}</a></> : null}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
