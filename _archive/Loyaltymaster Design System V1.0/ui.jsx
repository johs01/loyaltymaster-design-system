// Shared primitives for the sendPUSH landing page
const { useState, useEffect, useRef } = React;

function Button({ children, variant = "primary", size = "lg", onClick, type = "button", style = {} }) {
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontFamily: "var(--wr-font-body)", fontWeight: 700, letterSpacing: "-0.3px",
    borderRadius: 999, cursor: "pointer", border: "1px solid transparent",
    transition: "transform var(--wf-motion-fast) var(--wf-motion-ease-gentle), border-color var(--wf-motion-fast), box-shadow var(--wf-motion-fast)",
    textDecoration: "none", whiteSpace: "nowrap",
  };
  const sizes = {
    lg: { minHeight: 56, padding: "0 28px", fontSize: 17 },
    md: { minHeight: 46, padding: "0 20px", fontSize: 15 },
    sm: { minHeight: 38, padding: "0 16px", fontSize: 13 },
  };
  const variants = {
    primary: { background: "var(--wr-accent-yellow)", color: "#2a1f16", boxShadow: "0 5px 0 var(--wr-accent-orange), 0 8px 14px rgba(48,33,39,0.1)" },
    secondary: { background: "transparent", color: "var(--wr-ink)", borderColor: "rgba(151,144,147,0.36)" },
    secondaryDark: { background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.36)" },
    dark: { background: "var(--wr-ink)", color: "#fff" },
    ghost: { background: "transparent", color: "var(--wr-ink)" },
  };
  return (
    <button type={type} onClick={onClick} style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
      onMouseEnter={e => {
        if (variant === "primary") {
          e.currentTarget.style.transform = "translateY(-1.5px)";
          e.currentTarget.style.borderColor = "rgba(243,125,57,0.48)";
        } else {
          e.currentTarget.style.transform = "translateY(-1.5px)";
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "none";
        if (variant === "primary") e.currentTarget.style.borderColor = "transparent";
      }}
    >
      {children}
    </button>
  );
}

function Checklist({ items, onDark = false }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((t, i) => (
        <li key={i} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 17, color: onDark ? "var(--wf-on-dark)" : "var(--wr-ink)", fontWeight: 500 }}>
          <span style={{
            width: 22, height: 22, borderRadius: 7, background: "var(--wr-accent-yellow)",
            display: "grid", placeItems: "center", flexShrink: 0,
          }}>
            <svg viewBox="0 0 12 12" width="13" height="13" fill="none" stroke="#2a1f16" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 6.5 5 9l4.5-5.5" />
            </svg>
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

function Eyebrow({ children, tone = "orange", style = {} }) {
  const tones = {
    orange: "var(--wr-accent-orange)",
    yellow: "var(--wr-accent-yellow)",
    blue: "var(--wr-accent-blue)",
  };
  return (
    <p className="wf-eyebrow" style={{ color: tones[tone], ...style }}>{children}</p>
  );
}

function Tag({ children, tone = "yellow" }) {
  const tones = {
    yellow: { background: "var(--wr-tag-yellow)", color: "var(--wr-ink)" },
    peach: { background: "var(--wr-bg-peach)", color: "var(--wr-accent-orange)" },
    cyan: { background: "var(--wr-bg-cyan)", color: "var(--wr-accent-blue)" },
    dark: { background: "rgba(255,255,255,0.08)", color: "var(--wf-on-dark)", border: "1px solid rgba(255,255,255,0.18)" },
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700,
      letterSpacing: "0.1px", textTransform: "uppercase", ...tones[tone],
    }}>{children}</span>
  );
}

function IconTile({ gradient = "linear-gradient(135deg,#f37d39,#fdb27a)", icon, size = 44, radius = 12 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: radius, background: gradient,
      display: "grid", placeItems: "center", color: "#fff", flexShrink: 0,
    }}>{icon}</div>
  );
}

// Line-icon helper
function Icon({ children, size = 20, color = "currentColor", strokeWidth = 1.7 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color}
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

// Counter that animates from 0 to target on scroll-into-view
function StatValue({ value, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const target = parseFloat(value) || 0;
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.round(target * eased * 10) / 10);
            if (p < 1) requestAnimationFrame(tick);
            else setV(target);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  const isInt = Number.isInteger(parseFloat(value));
  return <span ref={ref}>{isInt ? Math.round(v) : v}{suffix}</span>;
}

Object.assign(window, { Button, Checklist, Eyebrow, Tag, IconTile, Icon, StatValue });
