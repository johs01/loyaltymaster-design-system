// ─── INDUSTRY STRIP ────────────────────────────────────────────────────────
function IndustryStrip() {
  const inds = [
    { l: "Coffee Shops", i: ICONS.coffee },
    { l: "Salons", i: ICONS.scissors },
    { l: "Restaurants", i: ICONS.pizza },
    { l: "Car Washes", i: ICONS.car },
    { l: "Gyms", i: ICONS.dumbbell },
    { l: "Retail", i: ICONS.shopping },
  ];
  return (
    <section style={{ padding: "56px 0", background: "var(--wr-white)", borderBottom: "1px solid rgba(151,144,147,0.16)" }}>
      <div className="lp-container">
        <div style={{
          textAlign: "center", fontSize: 13, color: "var(--wr-text-muted)",
          fontWeight: 600, letterSpacing: "0.4px", textTransform: "uppercase", marginBottom: 28,
        }}>
          Trusted by local businesses worldwide
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 24, flexWrap: "wrap",
        }}>
          {inds.map(ind => (
            <div key={ind.l} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              color: "var(--wr-text-muted)",
            }}>
              <Icon size={22} strokeWidth={1.6}>{ind.i}</Icon>
              <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.2px" }}>{ind.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROBLEM ───────────────────────────────────────────────────────────────
function Problem() {
  const stats = [
    { v: "98", suffix: "%", l: "open rate on lock screen", c: "var(--wr-accent-orange)" },
    { v: "0", suffix: "", l: "per notification, forever", prefix: "$", c: "var(--wr-accent-blue)" },
    { v: "60", suffix: "s", l: "to get fully set up", c: "var(--wr-accent-yellow)" },
  ];
  return (
    <section style={{ background: "var(--wr-bg-cyan)", padding: "108px 0 96px", position: "relative", overflow: "hidden" }}>
      <div className="lp-orb" style={{ width: 380, height: 380, background: "radial-gradient(circle, rgba(76,147,175,0.4), transparent 70%)", top: -120, right: -120 }} />
      <div className="lp-container" style={{ position: "relative" }}>
        <div data-reveal style={{ maxWidth: 880 }}>
          <Eyebrow tone="blue">The opportunity</Eyebrow>
          <h2 className="wr-h2">
            Your customers don't need to download an app — <span style={{ color: "var(--wr-accent-blue)", fontStyle: "italic", fontWeight: 500 }}>they already have a wallet.</span>
          </h2>
          <p className="wr-text-body" style={{ marginTop: 22, maxWidth: 760, color: "var(--wr-text-muted)" }}>
            Apps cost a fortune to build and maintain. SMS charges per message. Email lands in spam.
            Wallet cards send push notifications direct to the lock screen — for free.
          </p>
        </div>

        <div className="lp-stats-row" data-reveal style={{
          marginTop: 64, background: "var(--wr-white)", borderRadius: 24,
          border: "1px solid rgba(151,144,147,0.18)",
          boxShadow: "var(--wr-shadow-card-base)",
          padding: "8px 0",
        }}>
          {stats.map((s, i) => (
            <div key={s.l} style={{
              padding: "32px 36px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(151,144,147,0.18)" : "none",
            }}>
              <div style={{
                fontFamily: "var(--wr-font-display)", fontWeight: 700,
                fontSize: 64, lineHeight: 1, letterSpacing: "-2px",
                color: s.c,
                display: "inline-flex", alignItems: "baseline",
              }}>
                {s.prefix && <span style={{ fontSize: 38, marginRight: 2 }}>{s.prefix}</span>}
                <StatValue value={s.v} />
                <span style={{ fontSize: 38 }}>{s.suffix}</span>
              </div>
              <div style={{ marginTop: 10, fontSize: 16, color: "var(--wr-ink)", fontWeight: 500, letterSpacing: "-0.2px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ──────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n: "01", t: "Design your digital card",
      p: "Branded loyalty, stamp, or membership pass — under two minutes. No designer required.",
      tag: "Drag. Drop. Done.",
      bg: "var(--wr-bg-peach)",
      accent: "var(--wr-accent-orange)",
      border: "rgba(243,125,57,0.22)",
      visual: "card",
    },
    {
      n: "02", t: "Customers add it to their wallet",
      p: "QR code, link, NFC tap, or in-store. One tap and the card lives in their pocket — permanently.",
      tag: "One tap. They're in.",
      bg: "var(--wr-bg-cyan)",
      accent: "var(--wr-accent-blue)",
      border: "rgba(76,147,175,0.22)",
      visual: "wallet",
    },
    {
      n: "03", t: "Send push notifications for free",
      p: "Flash sale, new menu, reward unlocked. No throttling. No per-message fees. No limits.",
      tag: "Lock screen. Instantly.",
      bg: "var(--wr-bg-yellow)",
      accent: "var(--wr-accent-yellow)",
      border: "rgba(252,184,39,0.32)",
      visual: "notif",
    },
  ];

  const Visual = ({ kind, accent }) => {
    if (kind === "card") {
      return (
        <div style={{
          aspectRatio: "1.6 / 1", borderRadius: 14,
          background: "linear-gradient(135deg, #2a1f16 0%, #4a3424 100%)",
          padding: 16, color: "#fff", position: "relative", overflow: "hidden",
          boxShadow: "0 14px 26px rgba(48,33,39,0.18)",
        }}>
          <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, rgba(252,184,39,0.45), transparent 70%)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: "0.3px", textTransform: "uppercase", opacity: 0.65 }}>Loyalty card</div>
              <div style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 18, marginTop: 4 }}>Bean & Brew</div>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: accent, display: "grid", placeItems: "center", color: "#2a1f16" }}>
              <Icon size={16} strokeWidth={2}>{ICONS.coffee}</Icon>
            </div>
          </div>
          <div style={{ display: "flex", gap: 5, marginTop: 22 }}>
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <div key={i} style={{
                width: 16, height: 16, borderRadius: 99,
                background: i <= 9 ? accent : "rgba(255,255,255,0.18)",
                border: i === 10 ? `1.5px dashed ${accent}` : "none",
              }} />
            ))}
          </div>
          <div style={{ position: "absolute", bottom: 12, left: 16, fontSize: 9, opacity: 0.6 }}>★ 9 of 10 — one to go</div>
        </div>
      );
    }
    if (kind === "wallet") {
      return (
        <div style={{ aspectRatio: "1.6 / 1", position: "relative" }}>
          {[
            { c: "#1d6e8e", t: "Boarding Pass", off: 0 },
            { c: "#2a1f16", t: "Bean & Brew", off: 14, brand: true },
            { c: "#3a3a3a", t: "Cinema Ticket", off: 28 },
          ].map((card, i) => (
            <div key={i} style={{
              position: "absolute", left: `${i * 4}%`, right: `${i * 4}%`,
              top: card.off, height: "60%",
              borderRadius: 14, padding: 14,
              background: card.brand ? "linear-gradient(135deg, #2a1f16, #4a3424)" : card.c,
              boxShadow: "0 8px 16px rgba(48,33,39,0.18)",
              color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between",
              border: card.brand ? `1.5px solid ${accent}` : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 8, letterSpacing: "0.3px", textTransform: "uppercase", opacity: 0.7 }}>{card.brand ? "Loyalty" : "Travel"}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, marginTop: 2, fontFamily: "var(--wr-font-display)" }}>{card.t}</div>
                </div>
                {card.brand && (
                  <div style={{ width: 18, height: 18, borderRadius: 4, background: accent }} />
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, opacity: 0.7 }}>
                <span>{card.brand ? "9 / 10 stamps" : "Gate B12"}</span>
                <span>{card.brand ? "Active" : "5:40 PM"}</span>
              </div>
            </div>
          ))}
        </div>
      );
    }
    // notif
    return (
      <div style={{
        aspectRatio: "1.6 / 1", borderRadius: 14,
        background: "linear-gradient(135deg, #1a1418 0%, #2a2026 100%)",
        padding: 14, position: "relative", overflow: "hidden",
        boxShadow: "0 14px 26px rgba(48,33,39,0.18)",
      }}>
        <div style={{ position: "absolute", top: -40, left: -40, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(252,184,39,0.4), transparent 70%)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", color: "#fff", fontSize: 10, fontWeight: 600, marginBottom: 18, opacity: 0.85, position: "relative" }}>
          <span>9:41</span>
          <span>•••</span>
        </div>
        <div style={{
          background: "rgba(40,38,46,0.75)", backdropFilter: "blur(20px)",
          borderRadius: 12, padding: "10px 12px", color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)", position: "relative",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: accent, display: "grid", placeItems: "center", color: "#2a1f16" }}>
              <Icon size={11} strokeWidth={2.2}>{ICONS.bolt}</Icon>
            </div>
            <span style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2px", opacity: 0.85 }}>Bean &amp; Brew</span>
            <span style={{ marginLeft: "auto", fontSize: 9, opacity: 0.55 }}>now</span>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700 }}>Your 10th coffee is FREE</div>
          <div style={{ fontSize: 10, opacity: 0.7, marginTop: 1 }}>One stamp away — pop in today.</div>
        </div>
      </div>
    );
  };

  return (
    <section id="how" style={{ background: "var(--wr-bg-panel-light)", padding: "108px 0" }}>
      <div className="lp-container">
        <div data-reveal style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}>
          <Eyebrow style={{ display: "inline-block" }}>Ridiculously simple</Eyebrow>
          <h2 className="wr-h2">Three steps. <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--wr-text-muted)" }}>That's it.</span></h2>
        </div>
        <div className="lp-grid-3">
          {steps.map((s, i) => (
            <article
              key={s.n}
              data-reveal
              className="lp-card"
              style={{
                background: s.bg,
                border: `1px solid ${s.border}`,
                borderRadius: 22,
                boxShadow: "var(--wr-shadow-card-base)",
                padding: 26,
                display: "flex", flexDirection: "column", gap: 18,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{
                  fontFamily: "var(--wr-font-display)", fontWeight: 700,
                  fontSize: 20, color: s.accent, letterSpacing: "-0.4px",
                  background: "rgba(255,255,255,0.7)", padding: "5px 12px",
                  borderRadius: 999, border: `1px solid ${s.border}`,
                }}>{s.n}</span>
                <span style={{ height: 1, flex: 1, background: s.border }} />
              </div>
              <Visual kind={s.visual} accent={s.accent} />
              <h3 style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 26, lineHeight: 1.1, letterSpacing: "-0.5px", margin: 0 }}>{s.t}</h3>
              <p style={{ margin: 0, color: "var(--wr-ink)", opacity: 0.75, fontSize: 15.5, lineHeight: 1.5 }}>{s.p}</p>
              <div style={{
                marginTop: "auto", paddingTop: 12,
                borderTop: `1px dashed ${s.border}`,
                fontFamily: "var(--wr-font-display)", fontStyle: "italic", fontWeight: 500,
                fontSize: 16, color: s.accent, letterSpacing: "-0.3px",
              }}>{s.tag}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.IndustryStrip = IndustryStrip;
window.Problem = Problem;
window.HowItWorks = HowItWorks;
