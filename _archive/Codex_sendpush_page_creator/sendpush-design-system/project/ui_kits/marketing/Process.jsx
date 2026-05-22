function Process() {
  const steps = [
    { n: 1, t: "Invite", p: "Import existing customers or add them as you go — one list you actually own.", bg: "var(--wr-bg-peach)", dot: "#f37d39" },
    { n: 2, t: "Segment", p: "Group by recency, spend, or visit habits. Smart segments update themselves.", bg: "var(--wr-bg-cyan)", dot: "#4c93af" },
    { n: 3, t: "Send", p: "Launch a campaign in minutes or schedule seasonal offers ahead of time.", bg: "var(--wr-bg-yellow)", dot: "#fcb827" },
  ];
  return (
    <section style={{ padding: "96px 0", background: "var(--wr-white)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 48px" }}>
        <p className="wf-eyebrow">How it works</p>
        <h2 className="wr-h2" style={{ maxWidth: 720, marginTop: 12 }}>Three steps from list to message.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
          {steps.map(s => (
            <article key={s.n} style={{
              background: s.bg, borderRadius: 24, padding: 28,
              border: "1px solid rgba(151,144,147,0.18)",
              boxShadow: "var(--wr-shadow-card-base)", minHeight: 240,
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              <span style={{
                width: 36, height: 36, borderRadius: 999, background: s.dot, color: "#fff",
                display: "grid", placeItems: "center", fontFamily: "var(--wr-font-display)",
                fontWeight: 700, fontSize: 16,
              }}>{s.n}</span>
              <h3 className="wr-h3" style={{ fontSize: 28 }}>{s.t}</h3>
              <p style={{ margin: 0, color: "var(--wr-ink)", fontSize: 16, lineHeight: 1.55 }}>{s.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Process = Process;
