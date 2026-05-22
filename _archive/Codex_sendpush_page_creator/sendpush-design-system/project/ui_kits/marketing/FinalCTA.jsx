function FinalCTA() {
  return (
    <section style={{ padding: "96px 0", background: "var(--wf-section-dark-bg)", color: "var(--wf-on-dark)" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
        <p className="wf-eyebrow" style={{ color: "var(--wr-accent-yellow)" }}>Ready when you are</p>
        <h2 className="wr-h2" style={{ color: "var(--wf-on-dark)", marginTop: 12 }}>Start Free in 2 Minutes.</h2>
        <p style={{ fontSize: 18, color: "var(--wf-on-dark-muted)", marginTop: 14, marginBottom: 30 }}>
          No credit card. No contracts. Just your customers, in one place.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <EmailCta />
        </div>
        <p style={{ fontSize: 12, color: "var(--wf-on-dark-muted)", marginTop: 18 }}>14-day free trial · cancel anytime · your data is always yours</p>
      </div>
    </section>
  );
}
window.FinalCTA = FinalCTA;
