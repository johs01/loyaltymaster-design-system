function Nav({ onSignUp }) {
  const linkStyle = { textDecoration: "none", color: "var(--wr-ink)", fontFamily: "var(--wr-font-body)", fontWeight: 600, fontSize: 14, letterSpacing: "-0.25px" };
  return (
    <header style={{
      position: "sticky", top: 14, zIndex: 50, padding: "0 24px",
    }}>
      <nav style={{
        maxWidth: 1180, margin: "0 auto",
        display: "flex", alignItems: "center", gap: 20,
        padding: "10px 14px",
        background: "linear-gradient(148deg, rgba(255,255,255,0.92), rgba(255,255,255,0.6))",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.56)",
        borderRadius: 999,
        boxShadow: "0 10px 24px rgba(48,33,39,0.12), inset 0 1px 0 rgba(255,255,255,0.52)",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <img src="../../assets/logos/sendpush-loyaltymaster.png" alt="sendPUSH" style={{ height: 22 }} />
        </a>
        <div style={{ display: "flex", gap: 20, flex: 1, justifyContent: "center" }}>
          <a style={linkStyle}>Features</a>
          <a style={linkStyle}>Use Cases</a>
          <a style={linkStyle}>Blog</a>
          <a style={{ ...linkStyle, color: "var(--wr-accent-orange)" }}>Pricing</a>
          <a style={linkStyle}>Contact</a>
        </div>
        <a style={linkStyle}>Log In</a>
        <Button size="sm" onClick={onSignUp}>Sign Up</Button>
      </nav>
    </header>
  );
}
window.Nav = Nav;
