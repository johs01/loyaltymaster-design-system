function Features() {
  const feats = [
    { t: "Smart Segments", p: "Group by recency, spend, or habits — update automatically.", g: "linear-gradient(135deg,#f37d39,#fdb27a)", icon: <path d="M3 6h18M6 12h12M9 18h6" /> },
    { t: "Behavior Triggers", p: "Launch flows from real-time customer actions.", g: "linear-gradient(135deg,#4c93af,#8bc2d6)", icon: <path d="M13 2 3 14h9l-1 8 10-12h-9z" /> },
    { t: "Campaign Calendar", p: "Plan seasonal offers and auto-activate them.", g: "linear-gradient(135deg,#fcb827,#fdd564)", icon: <g><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/></g> },
    { t: "Wallet Passes", p: "Branded passes that live in Apple & Google Wallet.", g: "linear-gradient(135deg,#f37d39,#fcb827)", icon: <g><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 11h18"/></g> },
    { t: "Plug & Play Integrations", p: "Works with Stripe, Toast, Clover, and Zapier.", g: "linear-gradient(135deg,#4c93af,#b3d8e4)", icon: <g><circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M10 12h4"/></g> },
    { t: "Analytics That Matter", p: "Delivered, open, reply, revenue attributed — at a glance.", g: "linear-gradient(135deg,#302127,#5a4148)", icon: <path d="M3 20V10M9 20V4M15 20v-7M21 20v-4" /> },
  ];
  return (
    <section style={{ padding: "96px 0", background: "var(--wr-bg-panel-light)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 48px" }}>
        <p className="wf-eyebrow">Features</p>
        <h2 className="wr-h2" style={{ maxWidth: 720, marginTop: 12 }}>All the power. None of the complexity.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
          {feats.map(f => (
            <article key={f.t} style={{
              background: "var(--wr-white)", borderRadius: 20, padding: 24,
              border: "1px solid rgba(151,144,147,0.18)",
              boxShadow: "var(--wr-shadow-card-base)", display: "flex", flexDirection: "column", gap: 14,
            }}>
              <IconTile gradient={f.g} icon={<Icon path={f.icon} size={22} />} />
              <h3 style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 22, margin: 0, letterSpacing: "-0.3px" }}>{f.t}</h3>
              <p style={{ margin: 0, fontSize: 15, color: "var(--wr-text-muted)", lineHeight: 1.55 }}>{f.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
