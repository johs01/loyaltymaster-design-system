// ─── MESSAGING HERO ────────────────────────────────────────────────────────
// Adapted from production MessagingHero.tsx.
// Framer-motion replaced with CSS reveal (data-reveal / .is-visible).
// All hex values mapped to brand tokens:
//   #fef0e9 → var(--wr-bg-peach)
//   #302127 → var(--wr-ink)
//   #979093 → var(--wr-text-muted)
//   #fcb827 → var(--wr-accent-yellow)
//   #f37d39 → var(--wr-accent-orange)
//   #f4eff2 → var(--wr-bg-panel-gray)

const HERO_CHECKLIST = [
  "Own your audience and contact data from day one.",
  "Trigger reminders, offers, and follow-ups in minutes.",
  "Keep customers engaged with timely personalized updates.",
];

function MessagingHero() {
  const [email, setEmail] = React.useState("");
  const onSubmit = (e) => { e.preventDefault(); };

  return (
    <section
      id="top"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "var(--wr-bg-peach)",
        padding: "84px 0",
        fontFamily: "var(--wr-font-body)",
        color: "var(--wr-ink)",
      }}
    >
      <div
        className="lp-container"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "583px minmax(0,1fr)",
            alignItems: "center",
            gap: 48,
          }}
          className="lp-hero-grid"
        >
          {/* ── Left column ── */}
          <div
            data-reveal
            data-reveal-order="0"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Eyebrow */}
            <p
              style={{
                margin: "0 0 16px",
                fontSize: 13,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--wr-text-muted)",
              }}
            >
              Customer messaging system
            </p>

            {/* H1 */}
            <h1
              style={{
                margin: "0 0 24px",
                maxWidth: 760,
                fontFamily: "var(--wr-font-display)",
                fontWeight: 700,
                fontSize: "clamp(48px, 5.5vw, 72px)",
                lineHeight: 1.05,
                letterSpacing: "-0.012em",
                color: "var(--wr-ink)",
              }}
            >
              Have Your Own Customer List. Message Them Anytime — Free.
            </h1>

            {/* Body */}
            <p
              style={{
                margin: "0 0 32px",
                maxWidth: 640,
                fontSize: 20,
                lineHeight: 1.56,
                letterSpacing: "-0.018em",
                color: "var(--wr-ink)",
                opacity: 0.9,
              }}
            >
              Build your direct customer list, automate outreach, and send
              high-converting campaigns without relying on social algorithms.
            </p>

            {/* Checklist */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 40px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {HERO_CHECKLIST.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    fontSize: 20,
                    letterSpacing: "-0.018em",
                    color: "var(--wr-ink)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      marginTop: 5,
                      width: 18,
                      height: 18,
                      flexShrink: 0,
                      borderRadius: 5,
                      background: "var(--wr-accent-yellow)",
                    }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA form */}
            <div style={{ position: "relative", width: "100%", maxWidth: 583 }}>
              {/* Radial glow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  pointerEvents: "none",
                  bottom: -40,
                  left: "50%",
                  width: "100%",
                  height: "150%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  opacity: 0.7,
                  filter: "blur(28px)",
                  backgroundImage:
                    "radial-gradient(80% 60% at 50% 80%, rgba(252,184,39,0.18), rgba(243,125,57,0.06) 60%, transparent 100%)",
                }}
              />
              <form
                onSubmit={onSubmit}
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  gap: 8,
                  padding: 6,
                  borderRadius: 999,
                  border: "2px solid rgba(252,184,39,0.6)",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(6px)",
                  boxShadow: "0 6px 12px rgba(48,33,39,0.08)",
                  transition: "border-color 300ms, box-shadow 300ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--wr-accent-yellow)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(48,33,39,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(252,184,39,0.6)";
                  e.currentTarget.style.boxShadow = "0 6px 12px rgba(48,33,39,0.08)";
                }}
              >
                <label
                  htmlFor="hero-email"
                  style={{
                    position: "absolute",
                    width: 1, height: 1,
                    padding: 0, margin: -1,
                    overflow: "hidden",
                    clip: "rect(0,0,0,0)",
                    whiteSpace: "nowrap",
                    border: 0,
                  }}
                >
                  Email address
                </label>
                <input
                  id="hero-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  style={{
                    minHeight: 62,
                    flex: 1,
                    width: "100%",
                    borderRadius: 999,
                    border: "none",
                    background: "var(--wr-bg-panel-gray)",
                    padding: "0 24px",
                    fontFamily: "var(--wr-font-body)",
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: "-0.018em",
                    color: "var(--wr-ink)",
                    outline: "none",
                    transition: "background 200ms",
                  }}
                  onFocus={(e) => { e.target.style.background = "var(--wr-bg-panel-gray)"; e.target.style.outline = "2px solid rgba(243,125,57,0.92)"; e.target.style.outlineOffset = "2px"; }}
                  onBlur={(e) => { e.target.style.outline = "none"; }}
                />
                <button
                  type="submit"
                  style={{
                    position: "relative",
                    isolation: "isolate",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 62,
                    flexShrink: 0,
                    padding: "0 32px",
                    borderRadius: 999,
                    border: "1px solid rgba(243,125,57,0.3)",
                    background: "var(--wr-accent-yellow)",
                    color: "#2a1f16",
                    fontFamily: "var(--wr-font-body)",
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: "-0.018em",
                    cursor: "pointer",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    boxShadow:
                      "0 5px 0 0 var(--wr-accent-orange), 0 8px 14px rgba(48,33,39,0.1)",
                    transition: "transform 200ms, box-shadow 200ms",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1.5px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 0 0 var(--wr-accent-orange), 0 12px 18px rgba(48,33,39,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 0 0 var(--wr-accent-orange), 0 8px 14px rgba(48,33,39,0.1)";
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = "translateY(1px)";
                    e.currentTarget.style.boxShadow =
                      "0 1px 0 0 var(--wr-accent-orange), 0 2px 4px rgba(48,33,39,0.1)";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = "translateY(-1.5px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 0 0 var(--wr-accent-orange), 0 12px 18px rgba(48,33,39,0.15)";
                  }}
                >
                  {/* Glossy sheen */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 0,
                      borderRadius: 999,
                      opacity: 0.6,
                      pointerEvents: "none",
                      backgroundImage:
                        "linear-gradient(112deg, rgba(255,255,255,0) 14%, rgba(255,255,255,0.34) 44%, rgba(255,255,255,0) 68%)",
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>
                    Start Free in 2 Minutes
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* ── Right column — image ── */}
          <div
            data-reveal
            data-reveal-order="1"
            style={{
              position: "relative",
              margin: "0 0 0 auto",
              width: "100%",
              maxWidth: 553,
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "1 / 1",
                width: "100%",
                overflow: "hidden",
                borderRadius: 20,
                border: "1px solid rgba(151,144,147,0.2)",
                background: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(6px)",
                boxShadow: "0 20px 40px rgba(48,33,39,0.12)",
                transition: "transform 500ms var(--wf-motion-ease-standard)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top right, rgba(255,255,255,0.1), transparent)",
                }}
              />
              <img
                src="https://ik.imagekit.io/loyalty/sendpush/Image02.png?tr=w-800,q-85"
                alt="Customer messaging platform dashboard"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: 8,
                }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive grid collapse */}
      <style>{`
        @media (max-width: 1024px) {
          .lp-hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .lp-hero-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
