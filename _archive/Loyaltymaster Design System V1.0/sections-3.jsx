// ─── FEATURES ──────────────────────────────────────────────────────────────
function Features() {
  const feats = [
    {
      t: "Unlimited Push Notifications",
      p: "No throttling. No per-message pricing. Send a flash sale to 5 people or 50,000 — the price doesn't change.",
      tag: "yes, really unlimited ✓",
      icon: ICONS.bell,
      g: "linear-gradient(135deg, var(--wr-accent-orange), var(--wr-accent-yellow))",
      bg: "var(--wr-white)",
      large: true,
    },
    {
      t: "Apple & Google Wallet",
      p: "Native integration. Premium card look. Works on every modern phone — out of the box.",
      icon: ICONS.wallet,
      g: "linear-gradient(135deg, #4c93af, #8bc2d6)",
    },
    {
      t: "Instant Delivery",
      p: "From send to lock screen in seconds. No queue. No delay.",
      icon: ICONS.bolt,
      g: "linear-gradient(135deg, var(--wr-accent-yellow), #fdd564)",
    },
    {
      t: "Real-time Analytics",
      p: "Track installs, opens, taps, and behaviour — live.",
      icon: ICONS.chart,
      g: "linear-gradient(135deg, var(--wr-accent-orange), #fdb27a)",
    },
    {
      t: "Location Triggers",
      p: "Auto-surface the card when a customer is near your business.",
      icon: ICONS.pin,
      g: "linear-gradient(135deg, #302127, #5a4148)",
    },
  ];

  return (
    <section id="features" style={{ background: "var(--wr-white)", padding: "108px 0" }}>
      <div className="lp-container">
        <div data-reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow>What you get</Eyebrow>
            <h2 className="wr-h2">Everything. <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--wr-accent-orange)" }}>For nothing.</span></h2>
          </div>
          <p className="wr-text-body" style={{ color: "var(--wr-text-muted)", maxWidth: 380, fontSize: 17 }}>
            One toolkit, no tiers, no surprise fees. Build, send, measure — done.
          </p>
        </div>

        <div className="lp-grid-features">
          {feats.map((f, i) => (
            <article
              key={f.t}
              data-reveal
              className="lp-card"
              style={{
                background: f.bg || "var(--wr-bg-panel-light)",
                border: "1px solid rgba(151,144,147,0.2)",
                borderRadius: 22, padding: 26,
                boxShadow: "var(--wr-shadow-card-base)",
                display: "flex", flexDirection: "column", gap: 16,
                transitionDelay: `${i * 60}ms`,
                ...(f.large ? { background: "linear-gradient(160deg, var(--wr-bg-peach) 0%, var(--wr-white) 70%)" } : {}),
              }}
            >
              {f.large ? (
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24, alignItems: "center", height: "100%" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <IconTile gradient={f.g} icon={<Icon size={22} strokeWidth={1.8}>{f.icon}</Icon>} size={48} radius={14} />
                    <h3 style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 30, margin: 0, lineHeight: 1.05, letterSpacing: "-0.6px" }}>{f.t}</h3>
                    <p style={{ margin: 0, fontSize: 16, color: "var(--wr-ink)", opacity: 0.78, lineHeight: 1.55, maxWidth: 420 }}>{f.p}</p>
                    {f.tag && (
                      <div style={{
                        marginTop: 6, alignSelf: "flex-start",
                        fontFamily: "var(--wr-font-display)", fontStyle: "italic", fontWeight: 500,
                        color: "var(--wr-accent-orange)", fontSize: 17,
                        background: "var(--wr-tag-yellow)", padding: "6px 14px", borderRadius: 999,
                        border: "1px solid rgba(252,184,39,0.42)",
                      }}>{f.tag}</div>
                    )}
                  </div>
                  {/* Visual: counter */}
                  <div style={{
                    background: "var(--wr-ink)", borderRadius: 18, padding: 20,
                    color: "#fff", display: "flex", flexDirection: "column", gap: 10,
                    boxShadow: "0 14px 26px rgba(48,33,39,0.18)",
                    minHeight: 180,
                  }}>
                    <div style={{ fontSize: 11, letterSpacing: "0.3px", textTransform: "uppercase", opacity: 0.6, fontWeight: 600 }}>This month</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                      <span style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: "-1.5px", color: "var(--wr-accent-yellow)" }}>
                        <StatValue value="124,318" />
                      </span>
                    </div>
                    <div style={{ fontSize: 13, opacity: 0.72 }}>notifications sent</div>
                    <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                        <span style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 22, color: "#fff" }}>$0.00</span>
                      </div>
                      <Tag tone="dark"><span style={{ width: 6, height: 6, borderRadius: 99, background: "#5cc4ae" }} /> billed</Tag>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <IconTile gradient={f.g} icon={<Icon size={22} strokeWidth={1.8}>{f.icon}</Icon>} size={44} radius={12} />
                  <h3 style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 22, margin: 0, letterSpacing: "-0.3px" }}>{f.t}</h3>
                  <p style={{ margin: 0, fontSize: 15, color: "var(--wr-text-muted)", lineHeight: 1.55 }}>{f.p}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── USE CASES ─────────────────────────────────────────────────────────────
function UseCases() {
  const cases = [
    { i: ICONS.coffee, biz: "Coffee Shops", brand: "Bean & Brew", msg: "Your 10th coffee is FREE!", body: "Pop in this week — your reward expires Sunday.", c: "#7a5436", bg: "var(--wr-bg-peach)" },
    { i: ICONS.scissors, biz: "Hair & Beauty", brand: "Style Studio", msg: "Tuesday quiet — 30% off cuts today.", body: "First five bookings only. Walk-ins welcome.", c: "#c66a8e", bg: "var(--wr-bg-salmon)" },
    { i: ICONS.pizza, biz: "Restaurants", brand: "Nona's Kitchen", msg: "Chef's special — Wagyu burger.", body: "First 20 plates only. Tonight from 6pm.", c: "#b8763a", bg: "var(--wr-bg-yellow)" },
    { i: ICONS.car, biz: "Car Washes", brand: "Sparkle Auto", msg: "Sun's back. 5th wash free.", body: "One stamp left — drop by any time this week.", c: "#4c93af", bg: "var(--wr-bg-cyan)" },
    { i: ICONS.dumbbell, biz: "Gyms", brand: "Iron + Oak", msg: "New HIIT class Monday.", body: "First 15 spots — book from your wallet card.", c: "#5a4148", bg: "var(--wr-bg-panel-gray)" },
    { i: ICONS.shopping, biz: "Retail", brand: "North & Fold", msg: "VIP early access: Summer drops.", body: "Members shop 24h before public release.", c: "#7a5436", bg: "var(--wr-bg-panel-light)" },
  ];
  return (
    <section style={{ background: "var(--wr-bg-salmon)", padding: "108px 0", position: "relative", overflow: "hidden" }}>
      <div className="lp-container">
        <div data-reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
          <div>
            <Eyebrow>Works for everyone</Eyebrow>
            <h2 className="wr-h2">Your industry. <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--wr-accent-orange)" }}>Your way.</span></h2>
          </div>
          <div style={{ fontSize: 14, color: "var(--wr-text-muted)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span>Scroll for more</span>
            <Icon size={16}>{ICONS.arrow}</Icon>
          </div>
        </div>
      </div>
      <div className="lp-container">
        <div className="lp-scroll">
          {cases.map((c, i) => (
            <article key={c.biz} className="lp-card" style={{
              width: 320, minHeight: 380,
              background: "var(--wr-white)",
              border: "1px solid rgba(151,144,147,0.18)",
              borderRadius: 22, padding: 22,
              boxShadow: "var(--wr-shadow-card-base)",
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: c.c, display: "grid", placeItems: "center", color: "#fff" }}>
                  <Icon size={20} strokeWidth={1.8}>{c.i}</Icon>
                </div>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: "0.3px", textTransform: "uppercase", color: "var(--wr-text-muted)", fontWeight: 600 }}>{c.biz}</div>
                  <div style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 18, marginTop: 2 }}>{c.brand}</div>
                </div>
              </div>
              {/* Notification preview */}
              <div style={{
                background: "linear-gradient(135deg, #1a1418, #2a2026)",
                borderRadius: 16, padding: 16, color: "#fff",
                position: "relative", overflow: "hidden",
                boxShadow: "0 14px 26px rgba(0,0,0,0.18)",
                marginTop: 4,
              }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: "50%", background: `radial-gradient(circle, ${c.c}aa, transparent 70%)`, opacity: 0.7 }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, opacity: 0.6, marginBottom: 12, position: "relative" }}>
                  <span>9:41 — Lock screen</span>
                  <Icon size={12}>{ICONS.lock}</Icon>
                </div>
                <div style={{ background: "rgba(40,38,46,0.85)", borderRadius: 12, padding: "10px 12px", position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 18, height: 18, borderRadius: 4, background: c.c, display: "grid", placeItems: "center" }}>
                      <Icon size={11} strokeWidth={2.2} color="#fff">{c.i}</Icon>
                    </div>
                    <span style={{ fontSize: 9.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2px", opacity: 0.85 }}>{c.brand}</span>
                    <span style={{ marginLeft: "auto", fontSize: 9.5, opacity: 0.5 }}>now</span>
                  </div>
                  <div style={{ fontSize: 12.5, fontWeight: 700, lineHeight: 1.25 }}>{c.msg}</div>
                  <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>{c.body}</div>
                </div>
              </div>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <div style={{ fontSize: 12, color: "var(--wr-text-muted)" }}>Avg. open rate</div>
                <div style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 22, color: c.c, letterSpacing: "-0.5px" }}>{94 + (i % 5)}%</div>
              </div>
            </article>
          ))}
          <div style={{ width: 1, flexShrink: 0 }} />
        </div>
      </div>
    </section>
  );
}

window.Features = Features;
window.UseCases = UseCases;
