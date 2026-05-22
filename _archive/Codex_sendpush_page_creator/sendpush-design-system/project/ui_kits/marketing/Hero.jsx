function Hero() {
  return (
    <section style={{ background: "var(--wr-bg-peach)", padding: "84px 0 96px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 48px",
        display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 72, alignItems: "center" }}>
        <div>
          <p className="wf-eyebrow" style={{ margin: "0 0 18px" }}>Customer messaging system</p>
          <h1 className="wr-h1" style={{ marginBottom: 20 }}>
            Have Your Own Customer List. Message Them Anytime &mdash; Free.
          </h1>
          <p className="wr-text-body" style={{ maxWidth: 540, color: "var(--wr-ink)" }}>
            Build your direct customer list, automate outreach, and send high-converting
            campaigns without relying on social algorithms.
          </p>
          <Checklist items={[
            "Own your audience and contact data from day one.",
            "Trigger reminders, offers, and follow-ups in minutes.",
            "Keep customers engaged with timely personalized updates.",
          ]} />
          <EmailCta />
        </div>
        <div style={{
          borderRadius: 28, aspectRatio: "1 / 1", overflow: "hidden",
          background: "linear-gradient(160deg, #fde9e2 0%, #fdd564 60%, #f37d39 100%)",
          position: "relative", boxShadow: "0 30px 60px rgba(48,33,39,0.14)",
        }}>
          {/* Fake dashboard preview */}
          <div style={{
            position: "absolute", inset: 32, borderRadius: 18, background: "#fff",
            boxShadow: "0 24px 48px rgba(48,33,39,0.18)",
            padding: 18, display: "flex", flexDirection: "column", gap: 12,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: 99, background: "#f37d39" }} />
              <div style={{ width: 10, height: 10, borderRadius: 99, background: "#fcb827" }} />
              <div style={{ width: 10, height: 10, borderRadius: 99, background: "#4c93af" }} />
              <div style={{ marginLeft: "auto", fontSize: 11, color: "var(--wr-text-muted)", fontFamily: "ui-monospace, Menlo, monospace" }}>app.sendpush.com</div>
            </div>
            <div style={{
              background: "#faf8f9", borderRadius: 12, padding: "14px 16px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <div style={{ fontSize: 11, color: "var(--wr-text-muted)", fontWeight: 600 }}>CAMPAIGN SENT</div>
                <div style={{ fontFamily: "var(--wr-font-display)", fontSize: 22, marginTop: 4 }}>Saturday Brunch &mdash; 20% off</div>
              </div>
              <Tag tone="cyan">Live</Tag>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {[{ v: "2,841", l: "Delivered" }, { v: "94%", l: "Open rate" }, { v: "312", l: "Clicks" }].map(s => (
                <div key={s.l} style={{ background: "#fef9e6", borderRadius: 12, padding: "12px 14px" }}>
                  <div style={{ fontFamily: "var(--wr-font-display)", fontSize: 22, color: "var(--wr-ink)" }}>{s.v}</div>
                  <div style={{ fontSize: 11, color: "var(--wr-text-muted)", fontWeight: 600 }}>{s.l}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "#fef0e9", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 99, background: "#f37d39" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>New reply &mdash; Maya R.</div>
                <div style={{ fontSize: 11, color: "var(--wr-text-muted)" }}>"Booking a table for 4 tonight!"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
