// ─── TESTIMONIALS ──────────────────────────────────────────────────────────
function Testimonials() {
  const quotes = [
    {
      n: "Marcus R.", r: "Owner, Grind House Coffee", loc: "Melbourne, AU",
      q: "Redemption tripled in the first month. Costs went to zero. We dropped our SMS provider the same week.",
      stat: { v: "3×", l: "redemption rate" },
      bg: "#2a1f16", ink: "#fff", accent: "var(--wr-accent-yellow)",
      hero: true,
    },
    {
      n: "Sarah J.", r: "Style Studio", loc: "Cape Town, ZA",
      q: "Tuesdays used to be dead. One flash deal a week, fully booked.",
      bg: "var(--wr-bg-cyan)", ink: "var(--wr-ink)", accent: "var(--wr-accent-blue)",
    },
    {
      n: "David K.", r: "Fresh Bites", loc: "Sydney, AU",
      q: "Wallet card feels more premium than our old app. Saved $400 a month doing it.",
      bg: "var(--wr-bg-yellow)", ink: "var(--wr-ink)", accent: "var(--wr-accent-orange)",
      stat: { v: "$400", l: "saved / month" },
    },
    {
      n: "Lisa P.", r: "Sparkle Auto Wash", loc: "Austin, TX",
      q: "Took five minutes to set up. We had 200+ cards installed in the first week — all from a QR sticker by the till.",
      bg: "var(--wr-white)", ink: "var(--wr-ink)", accent: "var(--wr-accent-orange)",
      stat: { v: "200+", l: "cards / week 1" },
    },
  ];

  const Card = ({ q, hero }) => (
    <article className="lp-card" style={{
      background: q.bg, color: q.ink,
      border: `1px solid ${q.bg === "var(--wr-white)" ? "rgba(151,144,147,0.2)" : "transparent"}`,
      borderRadius: 22, padding: hero ? 32 : 24,
      boxShadow: "var(--wr-shadow-card-base)",
      display: "flex", flexDirection: "column", gap: hero ? 24 : 14,
      position: "relative", overflow: "hidden", height: "100%",
    }}>
      {hero && (
        <>
          <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(252,184,39,0.25), transparent 70%)" }} />
          <Icon size={32} strokeWidth={1.4} color={q.accent}>
            <path d="M7 10c0-3 2-5 5-5M17 10c0-3 2-5 5-5"/>
            <path d="M3 17c0-4 2-6 4-7M13 17c0-4 2-6 4-7"/>
          </Icon>
        </>
      )}
      <div style={{ color: q.accent, fontSize: 14, letterSpacing: 3 }}>★★★★★</div>
      <p style={{
        margin: 0,
        fontFamily: hero ? "var(--wr-font-display)" : "var(--wr-font-body)",
        fontWeight: hero ? 500 : 500,
        fontSize: hero ? 28 : 17,
        lineHeight: hero ? 1.2 : 1.5,
        letterSpacing: hero ? "-0.5px" : "-0.2px",
        color: q.ink,
      }}>"{q.q}"</p>
      {q.stat && (
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: hero ? 0 : 4 }}>
          <span style={{
            fontFamily: "var(--wr-font-display)", fontWeight: 700,
            fontSize: hero ? 56 : 32, color: q.accent,
            lineHeight: 1, letterSpacing: "-1px",
          }}>{q.stat.v}</span>
          <span style={{ fontSize: hero ? 14 : 12, color: q.ink, opacity: 0.7, fontWeight: 500 }}>{q.stat.l}</span>
        </div>
      )}
      <div style={{
        marginTop: "auto", display: "flex", alignItems: "center", gap: 12,
        paddingTop: 16,
        borderTop: `1px solid ${q.ink === "#fff" ? "rgba(255,255,255,0.12)" : "rgba(48,33,39,0.1)"}`,
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: 99,
          background: q.accent, color: q.bg === "var(--wr-white)" ? "#fff" : "#2a1f16",
          display: "grid", placeItems: "center",
          fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 14,
        }}>{q.n.split(" ").map(s => s[0]).join("")}</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.2px" }}>{q.n}</div>
          <div style={{ fontSize: 12, color: q.ink, opacity: 0.7 }}>{q.r} — {q.loc}</div>
        </div>
      </div>
    </article>
  );

  return (
    <section id="results" style={{ background: "var(--wr-bg-panel-light)", padding: "108px 0" }}>
      <div className="lp-container">
        <div data-reveal style={{ maxWidth: 720, marginBottom: 56 }}>
          <Eyebrow>Real results</Eyebrow>
          <h2 className="wr-h2">They switched. <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--wr-accent-orange)" }}>Here's what happened.</span></h2>
        </div>
        <div className="lp-grid-testi" data-reveal>
          {quotes.map((q, i) => <Card key={i} q={q} hero={q.hero} />)}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING / FREE ────────────────────────────────────────────────────────
function Pricing() {
  const items = [
    "Unlimited push notifications",
    "Unlimited wallet cards",
    "Apple & Google Wallet",
    "Real-time analytics",
    "Location triggers",
    "No credit card required",
  ];
  return (
    <section id="pricing" style={{ background: "var(--wf-section-dark-bg)", color: "var(--wf-on-dark)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div className="lp-orb lp-pulse" style={{ width: 540, height: 540, background: "radial-gradient(circle, rgba(252,184,39,0.32), transparent 70%)", top: -200, left: "50%", transform: "translateX(-50%)" }} />
      <div className="lp-orb" style={{ width: 320, height: 320, background: "radial-gradient(circle, rgba(243,125,57,0.32), transparent 70%)", bottom: -120, right: -80 }} />
      <div className="lp-container" style={{ position: "relative" }}>
        <div data-reveal style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
          <p style={{
            display: "inline-block", margin: "0 0 18px",
            fontFamily: "var(--wr-font-display)", fontStyle: "italic", fontWeight: 400,
            fontSize: 20, color: "var(--wr-accent-yellow)", letterSpacing: "-0.3px",
          }}>wait, did we say free?</p>
          <h2 className="wr-h2" style={{ color: "var(--wf-on-dark)" }}>
            <span style={{ color: "var(--wr-accent-yellow)" }}>$0</span> dollars.
            <span style={{ color: "var(--wr-accent-yellow)" }}> $0</span> catches.
            <span style={{ color: "var(--wr-accent-yellow)" }}> $0</span> limits.
          </h2>
          <p className="wr-text-body" style={{ color: "var(--wf-on-dark-muted)", marginTop: 22, maxWidth: 540, marginInline: "auto" }}>
            One plan. Free, forever. No usage tiers. No upsells. No bait-and-switch.
          </p>
        </div>

        <div data-reveal style={{
          maxWidth: 720, margin: "0 auto",
          background: "linear-gradient(180deg, rgba(252,184,39,0.18), rgba(255,255,255,0.04))",
          border: "1px solid rgba(252,184,39,0.42)",
          borderRadius: 28, padding: 36,
          boxShadow: "0 30px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          position: "relative",
        }}>
          <div style={{ position: "absolute", top: -16, left: 32, background: "var(--wr-accent-yellow)", color: "#2a1f16", padding: "6px 14px", borderRadius: 999, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", boxShadow: "0 4px 0 rgba(0,0,0,0.45)" }}>
            Free forever
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24, marginBottom: 28 }}>
            <div>
              <div style={{ fontSize: 13, letterSpacing: "0.3px", textTransform: "uppercase", color: "var(--wr-accent-yellow)", fontWeight: 700, marginBottom: 6 }}>The whole thing</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 96, lineHeight: 1, letterSpacing: "-3px", color: "#fff" }}>$0</span>
                <span style={{ fontSize: 18, color: "var(--wf-on-dark-muted)" }}>/month</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end", paddingTop: 12 }}>
              <Button size="lg">Get Started Free →</Button>
              <span style={{ fontSize: 13, color: "var(--wf-on-dark-muted)" }}>2 minutes. No credit card.</span>
            </div>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px 28px",
            paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.12)",
          }}>
            {items.map(it => (
              <div key={it} style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff", fontSize: 15, fontWeight: 500 }}>
                <span style={{
                  width: 22, height: 22, borderRadius: 7, background: "var(--wr-accent-yellow)",
                  display: "grid", placeItems: "center", flexShrink: 0,
                }}>
                  <Icon size={13} strokeWidth={2.4} color="#2a1f16">{ICONS.check}</Icon>
                </span>
                {it}
              </div>
            ))}
          </div>
        </div>

        <p data-reveal style={{
          textAlign: "center", marginTop: 32, color: "var(--wf-on-dark-muted)",
          fontFamily: "var(--wr-font-display)", fontStyle: "italic", fontWeight: 400, fontSize: 18,
        }}>
          no hidden fees. pinky promise.
        </p>
      </div>
    </section>
  );
}

// ─── FINAL CTA ─────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section style={{ background: "var(--wr-bg-peach)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div className="lp-orb lp-pulse" style={{ width: 480, height: 480, background: "radial-gradient(circle, rgba(252,184,39,0.55), transparent 70%)", top: -160, left: -120 }} />
      <div className="lp-orb" style={{ width: 380, height: 380, background: "radial-gradient(circle, rgba(243,125,57,0.4), transparent 70%)", bottom: -140, right: -100 }} />
      <div className="lp-container" style={{ position: "relative", textAlign: "center", maxWidth: 820, marginInline: "auto" }}>
        <div data-reveal>
          <Eyebrow style={{ display: "inline-block" }}>Ready to own the lock screen?</Eyebrow>
          <h2 className="wr-h2" style={{ marginBottom: 22 }}>
            Stop renting attention.<br />
            <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--wr-accent-orange)" }}>Start owning it.</span>
          </h2>
          <p className="wr-text-body" style={{ maxWidth: 560, marginInline: "auto", marginBottom: 36 }}>
            Put your business in their wallet. Send messages they actually see.
            Pay nothing — now and forever.
          </p>
          <div className="lp-cta-row" style={{ justifyContent: "center", marginBottom: 24 }}>
            <Button size="lg">Create Your Free Card →</Button>
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 24, flexWrap: "wrap",
            justifyContent: "center", color: "var(--wr-text-muted)", fontSize: 14, fontWeight: 500,
          }}>
            {["No credit card", "2 minute setup", "Free forever"].map((t, i) => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 18, height: 18, borderRadius: 6, background: "var(--wr-accent-yellow)", display: "grid", placeItems: "center" }}>
                  <Icon size={11} strokeWidth={2.4} color="#2a1f16">{ICONS.check}</Icon>
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { t: "Product", l: ["Features", "Pricing", "How It Works", "Integrations"] },
    { t: "Use Cases", l: ["Coffee Shops", "Restaurants", "Salons", "Retail"] },
    { t: "Resources", l: ["Help Center", "Contact", "API Docs", "Changelog"] },
  ];
  return (
    <footer style={{ background: "var(--wf-section-dark-bg)", color: "var(--wf-on-dark)", padding: "72px 0 28px" }}>
      <div className="lp-container">
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr repeat(3, 1fr)", gap: 48 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{
                fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 24,
                color: "#fff", letterSpacing: "-0.5px",
              }}>send<span style={{ color: "var(--wr-accent-yellow)" }}>PUSH</span></span>
            </div>
            <p style={{ fontSize: 14, color: "var(--wf-on-dark-muted)", maxWidth: 320, lineHeight: 1.55, marginTop: 0 }}>
              by Loyaltymaster — free push notifications via wallet cards.
              Built for local businesses, everywhere.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 22, alignItems: "center" }}>
              <Icon size={20} color="var(--wf-on-dark-muted)">{ICONS.apple}</Icon>
              <span style={{ fontSize: 12, color: "var(--wf-on-dark-muted)" }}>Apple Wallet</span>
              <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.2)" }} />
              <Icon size={20} color="var(--wf-on-dark-muted)">{ICONS.google}</Icon>
              <span style={{ fontSize: 12, color: "var(--wf-on-dark-muted)" }}>Google Wallet</span>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.t}>
              <div style={{
                fontFamily: "var(--wr-font-body)", fontWeight: 700, fontSize: 12,
                textTransform: "uppercase", letterSpacing: "0.4px",
                color: "var(--wr-accent-yellow)", marginBottom: 18,
              }}>{c.t}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.l.map(i => <li key={i}><a style={{ color: "var(--wf-on-dark-muted)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          marginTop: 48, paddingTop: 22,
        }}>
          <div style={{ fontSize: 12, color: "var(--wf-on-dark-muted)" }}>
            © 2025 Loyaltymaster, Inc. · Apple Wallet and Google Wallet are trademarks of their respective owners.
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: 12, color: "var(--wf-on-dark-muted)" }}>
            <a style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
            <a style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
            <a style={{ color: "inherit", textDecoration: "none" }}>Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Testimonials = Testimonials;
window.Pricing = Pricing;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
