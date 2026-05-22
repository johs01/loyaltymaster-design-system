// Shared primitives for the sendPUSH marketing kit
const { useState } = React;

function Button({ children, variant = "primary", size = "lg", onClick, type = "button" }) {
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontFamily: "var(--wr-font-body)", fontWeight: 700, letterSpacing: "-0.3px",
    borderRadius: 999, cursor: "pointer", border: "1px solid transparent",
    transition: "transform var(--wf-motion-fast) var(--wf-motion-ease-gentle), border-color var(--wf-motion-fast)",
    textDecoration: "none",
  };
  const sizes = {
    lg: { minHeight: 56, padding: "0 26px", fontSize: 17 },
    md: { minHeight: 46, padding: "0 18px", fontSize: 15 },
    sm: { minHeight: 36, padding: "0 14px", fontSize: 13 },
  };
  const variants = {
    primary: { background: "#fcb827", color: "#2a1f16", boxShadow: "0 5px 0 #f37d39, 0 8px 14px rgba(48,33,39,0.1)" },
    secondary: { background: "transparent", color: "var(--wr-ink)", borderColor: "rgba(151,144,147,0.36)" },
    dark: { background: "var(--wr-ink)", color: "#fff" },
    ghost: { background: "transparent", color: "var(--wr-ink)" },
  };
  return (
    <button type={type} onClick={onClick} style={{ ...base, ...sizes[size], ...variants[variant] }}
      onMouseEnter={e => { if (variant === "primary") { e.currentTarget.style.transform = "translateY(-1.5px)"; e.currentTarget.style.borderColor = "rgba(243,125,57,0.48)"; } }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "transparent"; }}
    >
      {children}
    </button>
  );
}

function EmailCta({ placeholder = "name@email.com", cta = "Start Free in 2 Minutes", onSubmit }) {
  const [v, setV] = useState("");
  return (
    <form
      onSubmit={e => { e.preventDefault(); onSubmit?.(v); }}
      style={{
        display: "flex", alignItems: "center", gap: 8, padding: 6,
        background: "rgba(255,255,255,0.72)",
        border: "1px solid rgba(252,184,39,0.62)", borderRadius: 999,
        boxShadow: "var(--wr-shadow-email)", maxWidth: 540,
      }}
    >
      <input
        type="email" value={v} onChange={e => setV(e.target.value)}
        placeholder={placeholder} autoComplete="email"
        style={{
          flex: 1, border: "none", outline: "none",
          background: "var(--wr-bg-panel-gray)", padding: "14px 18px",
          borderRadius: 999, fontFamily: "var(--wr-font-body)", fontSize: 16,
          color: "var(--wr-ink)", minWidth: 0,
        }}
      />
      <Button type="submit" size="md">{cta}</Button>
    </form>
  );
}

function Checklist({ items }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "24px 0", display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((t, i) => (
        <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, color: "var(--wr-ink)" }}>
          <span style={{
            width: 20, height: 20, borderRadius: 6, background: "var(--wr-accent-yellow)",
            display: "grid", placeItems: "center", flexShrink: 0,
          }}>
            <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="#2a1f16" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 6.5 5 9l4.5-5.5" />
            </svg>
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

function Tag({ children, tone = "yellow" }) {
  const tones = {
    yellow: { background: "var(--wr-tag-yellow)", color: "var(--wr-ink)" },
    peach: { background: "var(--wr-bg-peach)", color: "var(--wr-accent-orange)" },
    cyan: { background: "var(--wr-bg-cyan)", color: "var(--wr-accent-blue)" },
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "5px 10px", borderRadius: 999, fontSize: 12, fontWeight: 700,
      letterSpacing: "-0.1px", ...tones[tone],
    }}>{children}</span>
  );
}

function IconTile({ gradient = "linear-gradient(135deg,#f37d39,#fdb27a)", icon }) {
  return (
    <div style={{
      width: 44, height: 44, borderRadius: 12, background: gradient,
      display: "grid", placeItems: "center", color: "#fff",
    }}>{icon}</div>
  );
}

// Line-icon helper (Lucide style, 1.7 stroke)
function Icon({ path, size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  );
}

Object.assign(window, { Button, EmailCta, Checklist, Tag, IconTile, Icon });
