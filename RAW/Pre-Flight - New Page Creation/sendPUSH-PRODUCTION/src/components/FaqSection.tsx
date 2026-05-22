import { useState } from 'react';

const faqs = [
  { q: "How quickly can I launch my first campaign?", a: "Most teams launch in under one hour using prebuilt flows and templates." },
  { q: "Can I import customers from my current tools?", a: "Yes. CSV import and common integrations are supported for fast migration." },
  { q: "Will this work for multiple locations?", a: "Yes. You can segment by location and run local campaigns from one account." },
  { q: "How do you handle opt-outs and compliance?", a: "Built-in consent handling and auto opt-out management are included by default." },
  { q: "Do I need technical support to set this up?", a: "No. Setup is no-code and designed for operators, marketers, and founders." },
  { q: "Can I measure actual revenue impact?", a: "Yes. Dashboard reports tie messages to bookings, visits, and attributed revenue." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="wf-section wf-bg-white">
      <div className="wr-container--focus">
        <div className="wf-center reveal" data-reveal-order="0">
          <p className="wf-eyebrow">FAQ</p>
          <h2 className="wr-h2 wf-heading-center">Frequently Asked Questions</h2>
        </div>
        <div className="wf-faq-list">
          {faqs.map(({ q, a }, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={q}
                className="wf-faq-item reveal"
                data-reveal-order={String(index + 1)}
                data-open={isOpen ? 'true' : undefined}
              >
                <button
                  id={headerId}
                  className="wf-faq-trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  type="button"
                >
                  {q}
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className="wf-faq-answer"
                >
                  <p>{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
