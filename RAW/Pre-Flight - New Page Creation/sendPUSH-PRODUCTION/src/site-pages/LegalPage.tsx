type LegalPageProps = {
  title: string;
  intro: string;
  sections: ReadonlyArray<{
    heading: string;
    body: string;
  }>;
};

export default function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <section id="legal-content" className="wf-section wf-bg-white">
      <div className="wr-container--focus">
        <div className="reveal is-visible" data-reveal-order="0">
          <p className="wf-eyebrow">Legal</p>
          <h1 className="wr-h1 wf-heading-hero">{title}</h1>
          <p className="wr-text-body wf-hero-copy">{intro}</p>
          <p className="wr-text-body" style={{ color: "var(--wr-text-muted)", marginTop: 16 }}>
            Last updated: April 24, 2026
          </p>
        </div>
        <div style={{ display: "grid", gap: 32, marginTop: 48 }}>
          {sections.map((section, index) => (
            <article className="reveal is-visible" data-reveal-order={String(index + 1)} key={section.heading}>
              <h2 className="wr-h3" style={{ marginBottom: 12 }}>{section.heading}</h2>
              <p className="wr-text-body" style={{ color: "var(--wr-text-muted)" }}>{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
