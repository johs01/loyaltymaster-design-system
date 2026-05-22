function FAQ() {
  const items = [
    { q: "Do I need a credit card to start?", a: "No — every sendPUSH plan starts with a free 14-day trial. No credit card required." },
    { q: "Can I import my existing contacts?", a: "Yes. Upload a CSV, connect your POS, or add contacts one at a time. Your list is always yours to export." },
    { q: "Does it integrate with my POS?", a: "We integrate directly with Stripe, Toast, Clover, and TouchBistro, plus anything reachable via Zapier or Make." },
    { q: "Is there a contract or long-term commitment?", a: "Never. Month-to-month or yearly — you can cancel anytime and take your data with you." },
    { q: "How is sendPUSH different from email marketing tools?", a: "sendPUSH is built for local businesses. It combines SMS, email, and wallet passes with flows that fire based on real customer actions." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: "96px 0", background: "var(--wr-white)" }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 48px" }}>
        <p className="wf-eyebrow" style={{ textAlign: "center" }}>Questions</p>
        <h2 className="wr-h2" style={{ textAlign: "center", marginTop: 12 }}>Frequently asked.</h2>
        <div style={{ marginTop: 40, borderTop: "1px solid rgba(151,144,147,0.22)" }}>
          {items.map((it, i) => (
            <div key={it.q} style={{ borderBottom: "1px solid rgba(151,144,147,0.22)" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: "100%", padding: "22px 4px", background: "transparent", border: "none",
                display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer",
                fontFamily: "var(--wr-font-body)", fontWeight: 700, fontSize: 18, color: "var(--wr-ink)",
                letterSpacing: "-0.3px", textAlign: "left",
              }}>
                {it.q}
                <span style={{
                  width: 32, height: 32, borderRadius: 99,
                  border: `1px solid ${open === i ? "rgba(243,125,57,0.4)" : "rgba(151,144,147,0.3)"}`,
                  color: open === i ? "var(--wr-accent-orange)" : "var(--wr-text-muted)",
                  display: "grid", placeItems: "center",
                  transform: open === i ? "rotate(180deg)" : "none",
                  transition: "transform var(--wf-motion-fast)",
                }}>▾</span>
              </button>
              {open === i && <p style={{ margin: "0 4px 22px", fontSize: 15, color: "var(--wr-text-muted)", lineHeight: 1.6 }}>{it.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
