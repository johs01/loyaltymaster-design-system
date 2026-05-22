function Footer() {
  const cols = [
    { t: "Product", l: ["Features", "Pricing", "Integrations", "Changelog"] },
    { t: "Use Cases", l: ["Restaurants", "Wellness", "Clinics", "Retail"] },
    { t: "Resources", l: ["Blog", "Guides", "Help Center", "Contact"] },
    { t: "Company", l: ["About", "Careers", "Partners", "Press"] },
  ];
  return (
    <footer style={{ background: "var(--wr-white)", borderTop: "1px solid rgba(151,144,147,0.2)", padding: "64px 0 28px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr repeat(4, 1fr)", gap: 48 }}>
          <div>
            <img src="../../assets/logos/sendpush-loyaltymaster.png" alt="sendPUSH Loyaltymaster" style={{ height: 28 }} />
            <p style={{ fontSize: 14, color: "var(--wr-text-muted)", marginTop: 16, maxWidth: 300, lineHeight: 1.55 }}>
              The customer messaging system for local businesses. Own your audience. Grow your revenue.
            </p>
          </div>
          {cols.map(c => (
            <div key={c.t}>
              <div style={{ fontFamily: "var(--wr-font-body)", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.3px", marginBottom: 14 }}>{c.t}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.l.map(i => <li key={i}><a style={{ color: "var(--wr-text-muted)", textDecoration: "none", fontSize: 14 }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(151,144,147,0.2)", marginTop: 40, paddingTop: 22 }}>
          <div style={{ fontSize: 12, color: "var(--wr-text-muted)" }}>© 2026 Loyaltymaster, Inc. All rights reserved.</div>
          <div style={{ display: "flex", gap: 18, fontSize: 12, color: "var(--wr-text-muted)" }}>
            <a style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
            <a style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
            <a style={{ color: "inherit", textDecoration: "none" }}>Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
