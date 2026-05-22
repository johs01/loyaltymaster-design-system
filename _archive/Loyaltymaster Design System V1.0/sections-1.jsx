// ============================================================================
// Sections: Nav, Hero, IndustryStrip, Problem, HowItWorks, Features,
// UseCases, Testimonials, Pricing, FinalCTA, Footer
// ============================================================================

// ─── NAV ────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const linkStyle = {
    textDecoration: "none", color: "var(--wr-ink)",
    fontFamily: "var(--wr-font-body)", fontWeight: 600, fontSize: 14,
    letterSpacing: "-0.25px", padding: "8px 14px", borderRadius: 999,
    transition: "color 220ms",
  };
  return (
    <header style={{ position: "sticky", top: 14, zIndex: 50, padding: "0 24px" }}>
      <nav style={{
        maxWidth: 1180, margin: "0 auto",
        display: "flex", alignItems: "center", gap: 14,
        padding: "10px 14px 10px 18px",
        background: "linear-gradient(148deg, rgba(255,255,255,0.92), rgba(255,255,255,0.6))",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.56)",
        borderRadius: 999,
        boxShadow: "0 10px 24px rgba(48,33,39,0.12), inset 0 1px 0 rgba(255,255,255,0.52)",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: 10 }}>
          <img src="assets/logos/sendpush-loyaltymaster.png" alt="sendPUSH | Loyaltymaster" style={{ height: 24 }} />
        </a>
        <div className="lp-nav-links" style={{ display: "flex", gap: 4, flex: 1, justifyContent: "center" }}>
          <a href="#how" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = "var(--wr-accent-orange)"} onMouseLeave={e => e.currentTarget.style.color = "var(--wr-ink)"}>How It Works</a>
          <a href="#features" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = "var(--wr-accent-orange)"} onMouseLeave={e => e.currentTarget.style.color = "var(--wr-ink)"}>Features</a>
          <a href="#results" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = "var(--wr-accent-orange)"} onMouseLeave={e => e.currentTarget.style.color = "var(--wr-ink)"}>Results</a>
        </div>
        <div className="lp-nav-cta" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="#pricing" style={{ ...linkStyle, color: "var(--wr-text-muted)" }}>Sign In</a>
          <Button size="sm">Start Free <span style={{ marginLeft: 4 }}>→</span></Button>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          className="lp-mobile-toggle"
          style={{
            display: "none", marginLeft: "auto", border: "1px solid rgba(151,144,147,0.36)",
            background: "rgba(255,255,255,0.6)", borderRadius: 999, padding: "10px 12px", cursor: "pointer"
          }}
        >
          <Icon size={18}>{open ? <path d="M6 6 18 18M18 6 6 18"/> : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>}</Icon>
        </button>
      </nav>
      {open && (
        <div style={{
          maxWidth: 1180, margin: "10px auto 0",
          background: "rgba(255,255,255,0.96)", backdropFilter: "blur(20px)",
          border: "1px solid rgba(151,144,147,0.22)", borderRadius: 20,
          padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8,
          boxShadow: "var(--wr-shadow-card-base)",
        }}>
          <a href="#how" style={linkStyle} onClick={() => setOpen(false)}>How It Works</a>
          <a href="#features" style={linkStyle} onClick={() => setOpen(false)}>Features</a>
          <a href="#results" style={linkStyle} onClick={() => setOpen(false)}>Results</a>
          <a href="#pricing" style={linkStyle} onClick={() => setOpen(false)}>Pricing</a>
          <Button size="md" style={{ marginTop: 6 }}>Start Free →</Button>
        </div>
      )}
    </header>
  );
}

// ─── PHONE MOCKUP ──────────────────────────────────────────────────────────
function PhoneMock() {
  const notifications = [
    { app: "Bean & Brew", time: "now", title: "Your 10th coffee is FREE", body: "Pop in today — your reward is waiting on the counter.", color: "#7a5436", icon: ICONS.coffee },
    { app: "Style Studio", time: "2m ago", title: "20% off this week only", body: "Tuesday quiet — book a cut & color before Friday.", color: "#c66a8e", icon: ICONS.scissors },
    { app: "Nona's Kitchen", time: "12m ago", title: "Chef's special tonight", body: "Wagyu burger, fresh focaccia — first 20 plates only.", color: "#b8763a", icon: ICONS.pizza },
  ];
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 380, margin: "0 auto", aspectRatio: "9 / 18.5" }} className="lp-float">
      {/* Phone bezel */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, #2a2026 0%, #15101a 100%)",
        borderRadius: 48,
        boxShadow: "0 30px 60px rgba(0,0,0,0.45), inset 0 0 0 2px rgba(255,255,255,0.08), inset 0 0 0 9px #1a1418",
        padding: 11,
      }}>
        {/* Screen */}
        <div style={{
          position: "absolute", inset: 11, borderRadius: 38,
          background: "radial-gradient(ellipse at top, #1a1f2e 0%, #0a0612 60%, #000 100%)",
          overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}>
          {/* Wallpaper glow */}
          <div style={{ position: "absolute", top: "-15%", left: "-20%", width: "70%", height: "60%", background: "radial-gradient(circle, rgba(243,125,57,0.5), transparent 60%)", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", bottom: "-10%", right: "-20%", width: "70%", height: "60%", background: "radial-gradient(circle, rgba(76,147,175,0.45), transparent 60%)", filter: "blur(40px)" }} />

          {/* Status bar */}
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between", padding: "16px 26px 0", color: "#fff", fontSize: 13, fontWeight: 600, fontFamily: "var(--wr-font-body)" }}>
            <span>9:41</span>
            <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="#fff"><rect x="0" y="6" width="3" height="5" rx="0.5"/><rect x="4.5" y="4" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="9" rx="0.5"/><rect x="13.5" y="0" width="3" height="11" rx="0.5"/></svg>
              <svg width="14" height="11" viewBox="0 0 14 11" fill="#fff"><path d="M7 1.5C5 1.5 3.2 2.2 1.8 3.5l1.2 1.3C4 3.8 5.4 3.3 7 3.3s3 .5 4 1.5l1.2-1.3C10.8 2.2 9 1.5 7 1.5zM7 4.8c-1.3 0-2.5.5-3.4 1.3l1.2 1.3c.6-.5 1.4-.8 2.2-.8s1.6.3 2.2.8l1.2-1.3C9.5 5.3 8.3 4.8 7 4.8zM7 8.1c-.6 0-1.2.2-1.7.6L7 10.5l1.7-1.8C8.2 8.3 7.6 8.1 7 8.1z"/></svg>
              <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="#fff" opacity="0.6"/><rect x="2" y="2" width="15" height="7" rx="1" fill="#fff"/><rect x="19.5" y="3.5" width="1.5" height="4" rx="0.5" fill="#fff" opacity="0.6"/></svg>
            </span>
          </div>

          {/* Date / time */}
          <div style={{ position: "relative", textAlign: "center", color: "#fff", marginTop: 22, fontFamily: "var(--wr-font-body)" }}>
            <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 500 }}>Saturday, May 9</div>
            <div style={{ fontFamily: "var(--wr-font-display)", fontWeight: 200, fontSize: 76, lineHeight: 1, letterSpacing: "-2px", marginTop: 2 }}>9:41</div>
          </div>

          {/* Notifications */}
          <div style={{ position: "relative", padding: "26px 14px 0", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
            {notifications.map((n, i) => (
              <div key={i} style={{
                background: "rgba(40,38,46,0.78)",
                backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                borderRadius: 18, padding: "12px 14px",
                boxShadow: "0 6px 14px rgba(0,0,0,0.25), inset 0 0 0 0.5px rgba(255,255,255,0.08)",
                color: "#fff",
                transform: i === 0 ? "scale(1)" : i === 1 ? "scale(0.97)" : "scale(0.94)",
                marginTop: i === 0 ? 0 : -2,
                opacity: 1 - i * 0.05,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: n.color, display: "grid", placeItems: "center", color: "#fff" }}>
                    <Icon size={14} strokeWidth={2}>{n.icon}</Icon>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1px", textTransform: "uppercase", opacity: 0.85 }}>{n.app}</span>
                  <span style={{ marginLeft: "auto", fontSize: 11, opacity: 0.55 }}>{n.time}</span>
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: "-0.2px", lineHeight: 1.25 }}>{n.title}</div>
                <div style={{ fontSize: 12.5, opacity: 0.72, lineHeight: 1.35, marginTop: 2 }}>{n.body}</div>
              </div>
            ))}
          </div>

          {/* Bottom dock indicator */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 38px 16px", color: "#fff" }}>
            <div style={{ width: 38, height: 38, borderRadius: 99, background: "rgba(255,255,255,0.12)", display: "grid", placeItems: "center" }}>
              <Icon size={18} strokeWidth={1.6}>{ICONS.bolt}</Icon>
            </div>
            <div style={{ width: 38, height: 38, borderRadius: 99, background: "rgba(255,255,255,0.12)", display: "grid", placeItems: "center" }}>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="#fff" strokeWidth="1.7"><rect x="1" y="1" width="14" height="18" rx="2"/><circle cx="8" cy="14" r="1.5"/></svg>
            </div>
          </div>
          <div style={{ width: 110, height: 4, background: "#fff", borderRadius: 99, alignSelf: "center", margin: "0 auto 8px" }} />

          {/* Notch */}
          <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 110, height: 32, background: "#000", borderRadius: 22 }} />
        </div>
      </div>

      {/* Floating badges */}
      <div style={{
        position: "absolute", top: "8%", left: "-14%",
        background: "var(--wr-accent-yellow)", color: "#2a1f16",
        padding: "10px 14px", borderRadius: 999,
        boxShadow: "var(--wr-shadow-badge)",
        fontFamily: "var(--wr-font-body)", fontWeight: 700, fontSize: 14,
        display: "inline-flex", alignItems: "center", gap: 6,
        transform: "rotate(-8deg)",
      }}>
        <span style={{ fontFamily: "var(--wr-font-display)", fontSize: 16 }}>$0</span> forever
      </div>
      <div style={{
        position: "absolute", bottom: "16%", right: "-12%",
        background: "#fff", color: "var(--wr-ink)",
        padding: "10px 14px", borderRadius: 999,
        boxShadow: "0 7px 0 rgba(48,33,39,0.55)",
        fontFamily: "var(--wr-font-body)", fontWeight: 700, fontSize: 13,
        display: "inline-flex", alignItems: "center", gap: 8,
        transform: "rotate(6deg)",
      }}>
        <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--wr-accent-orange)" }} />
        No app required
      </div>
    </div>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" style={{ background: "var(--wr-bg-peach)", padding: "32px 0 96px", position: "relative", overflow: "hidden" }}>
      {/* Decorative orbs */}
      <div className="lp-orb lp-pulse" style={{ width: 420, height: 420, background: "radial-gradient(circle, rgba(252,184,39,0.5), transparent 70%)", top: -120, right: -80 }} />
      <div className="lp-orb" style={{ width: 360, height: 360, background: "radial-gradient(circle, rgba(243,125,57,0.35), transparent 70%)", bottom: -160, left: -100 }} />
      <div className="lp-container" style={{ position: "relative" }}>
        <div className="lp-hero-grid">
          <div data-reveal>
            <p style={{
              margin: "32px 0 22px",
              fontFamily: "var(--wr-font-display)",
              fontStyle: "italic", fontWeight: 400,
              fontSize: 22, letterSpacing: "-0.4px",
              color: "var(--wr-accent-orange)",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              free push notifications
              <Icon size={16} color="var(--wr-accent-orange)" strokeWidth={2}>{ICONS.spark}</Icon>
            </p>
            <h1 className="wr-h1" style={{ marginBottom: 22 }}>
              Your message.<br />
              Their lock screen.<br />
              <span style={{ color: "var(--wr-accent-orange)", fontStyle: "italic", fontWeight: 500 }}>Zero cost.</span>
            </h1>
            <p className="wr-text-body" style={{ maxWidth: 520, marginBottom: 32 }}>
              Push notifications via Apple &amp; Google Wallet cards.
              No app. No bill. Ever.
            </p>

            <div className="lp-cta-row" style={{ marginBottom: 40 }}>
              <Button size="lg">Start Sending Free →</Button>
              <Button size="lg" variant="secondary">See How It Works</Button>
            </div>

            {/* Proof strip */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: "0 36px",
              alignItems: "center",
            }}>
              {[
                { v: "98%", l: "open rate" },
                { v: "$0", l: "per message" },
                { v: "0", l: "apps needed" },
              ].map((s, i) => (
                <React.Fragment key={s.l}>
                  {i > 0 && <div style={{ width: 1, height: 36, background: "rgba(48,33,39,0.18)" }} />}
                  <div>
                    <div style={{ fontFamily: "var(--wr-font-display)", fontWeight: 700, fontSize: 30, lineHeight: 1, color: "var(--wr-ink)" }}>{s.v}</div>
                    <div style={{ fontSize: 13, color: "var(--wr-text-muted)", marginTop: 4, fontWeight: 500 }}>{s.l}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div data-reveal style={{ minHeight: 600, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  );
}

window.Nav = Nav;
window.Hero = Hero;
