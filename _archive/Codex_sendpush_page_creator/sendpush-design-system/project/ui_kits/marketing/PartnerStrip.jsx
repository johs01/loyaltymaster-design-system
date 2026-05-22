function PartnerStrip() {
  const partners = [
    { f: "stripe.webp", n: "Stripe" },
    { f: "apple-pay.webp", n: "Apple Pay" },
    { f: "google-pay.webp", n: "Google Pay" },
    { f: "aws.webp", n: "AWS" },
    { f: "toast.webp", n: "Toast" },
    { f: "clover-pos.webp", n: "Clover" },
    { f: "zapier-ready.webp", n: "Zapier" },
    { f: "make-ready.webp", n: "Make" },
  ];
  return (
    <section style={{ padding: "56px 0", background: "var(--wr-white)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ textAlign: "center", fontSize: 13, color: "var(--wr-text-muted)", fontWeight: 600, letterSpacing: "0.3px", textTransform: "uppercase", marginBottom: 28 }}>
          Connects with the tools you already use
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          {partners.map(p => (
            <img key={p.n} src={`../../assets/partners/${p.f}`} alt={p.n}
              style={{ height: 30, filter: "grayscale(100%)", opacity: 0.7 }} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.PartnerStrip = PartnerStrip;
