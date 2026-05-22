function Testimonials() {
  const quotes = [
    { q: "sendPUSH gave us one place to run reminders, promos, and follow-ups. We filled more open slots in weeks.", n: "Maya Rivera", r: "Ops Lead, Riverfront Wellness", i: "MR", bg: "#4c93af" },
    { q: "The automations are simple to set up and the reporting is clear. It kept patients engaged month over month.", n: "Elena Brooks", r: "GM, Elm Street Clinic", i: "EB", bg: "#f37d39" },
    { q: "We cut our no-show rate in half. The ROI paid for the whole year in six weeks.", n: "Devon Park", r: "Owner, The Standing Room", i: "DP", bg: "#fcb827" },
  ];
  return (
    <section style={{ padding: "96px 0", background: "var(--wr-bg-salmon)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 48px" }}>
        <p className="wf-eyebrow">Loved by local businesses</p>
        <h2 className="wr-h2" style={{ maxWidth: 640, marginTop: 12 }}>Real results from teams like yours.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
          {quotes.map(q => (
            <article key={q.n} style={{
              background: "var(--wr-white)", borderRadius: 20, padding: 24,
              border: "1px solid rgba(151,144,147,0.18)",
              boxShadow: "var(--wr-shadow-card-base)", display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div style={{ color: "#fcb827", fontSize: 16, letterSpacing: 3 }}>★★★★★</div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.56, color: "var(--wr-ink)", fontStyle: "italic" }}>"{q.q}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
                <div style={{ width: 38, height: 38, borderRadius: 99, background: q.bg, color: "#fff", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 13 }}>{q.i}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{q.n}</div>
                  <div style={{ fontSize: 12, color: "var(--wr-text-muted)" }}>{q.r}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
