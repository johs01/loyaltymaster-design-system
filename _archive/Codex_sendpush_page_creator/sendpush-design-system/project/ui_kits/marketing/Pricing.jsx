function Pricing() {
  const [yearly, setYearly] = useState(true);
  const tiers = [
    { name: "Starter", price: yearly ? 7 : 9, cta: "Get Started", feats: ["Up to 500 contacts", "Email + SMS campaigns", "Basic segments", "Community support"] },
    { name: "Pro", price: yearly ? 15 : 19, popular: true, cta: "Start Free Trial", feats: ["Up to 5,000 contacts", "Automations & triggers", "Wallet passes", "Priority support"] },
    { name: "Scale", price: yearly ? 39 : 49, cta: "Talk to Sales", feats: ["Unlimited contacts", "Advanced analytics", "Multi-location", "Dedicated manager"] },
  ];
  return (
    <section id="pricing" style={{ padding: "96px 0", background: "var(--wr-white)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 48px" }}>
        <p className="wf-eyebrow" style={{ textAlign: "center" }}>Pricing</p>
        <h2 className="wr-h2" style={{ textAlign: "center", marginTop: 12 }}>Simple pricing. No surprises.</h2>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <div style={{ display: "flex", padding: 4, background: "var(--wr-bg-panel-gray)", borderRadius: 999 }}>
            <button onClick={() => setYearly(false)} style={{ padding: "10px 18px", borderRadius: 999, border: "none",
              background: yearly ? "transparent" : "#fcb827", color: yearly ? "var(--wr-text-muted)" : "#2a1f16",
              fontFamily: "var(--wr-font-body)", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Monthly</button>
            <button onClick={() => setYearly(true)} style={{ padding: "10px 18px", borderRadius: 999, border: "none",
              background: yearly ? "#fcb827" : "transparent", color: yearly ? "#2a1f16" : "var(--wr-text-muted)",
              fontFamily: "var(--wr-font-body)", fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              Yearly <span style={{ background: "#2a1f16", color: "#fcb827", padding: "2px 8px", borderRadius: 99, fontSize: 11 }}>30% OFF</span>
            </button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48, alignItems: "stretch" }}>
          {tiers.map(t => (
            <article key={t.name} style={{
              position: "relative",
              background: t.popular ? "linear-gradient(180deg, rgba(252,184,39,0.22) 0%, #fff 40%, #faf8f9 100%)" : "var(--wr-bg-panel-light)",
              border: t.popular ? "1px solid rgba(252,184,39,0.5)" : "1px solid rgba(151,144,147,0.2)",
              borderRadius: 24, padding: 28, display: "flex", flexDirection: "column", gap: 16,
              boxShadow: t.popular ? "0 20px 40px rgba(243,125,57,0.18)" : "var(--wr-shadow-card-base)",
            }}>
              {t.popular && <span style={{ position: "absolute", top: 20, right: 20, background: "#fcb827", color: "#2a1f16", padding: "5px 12px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.3px" }}>MOST POPULAR</span>}
              <div style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 22 }}>{t.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontFamily: "var(--wr-font-display)", fontWeight: 400, fontSize: 52, letterSpacing: "-1px", lineHeight: 1 }}>${t.price}</span>
                <span style={{ color: "var(--wr-text-muted)", fontSize: 14 }}>/mo</span>
              </div>
              <Button variant={t.popular ? "primary" : "secondary"}>{t.cta}</Button>
              <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
                {t.feats.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--wr-ink)" }}>
                    <span style={{ width: 6, height: 6, borderRadius: 99, background: "#4c93af" }} />{f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
