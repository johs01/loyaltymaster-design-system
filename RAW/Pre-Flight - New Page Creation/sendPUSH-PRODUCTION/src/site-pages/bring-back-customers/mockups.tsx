export function HeroMockup() {
  return (
    <div className="bbc-hero-mockup">
      <div className="bbc-mock-card bbc-mock-card--paper">
        <p className="bbc-mock-card-brand">Joe&rsquo;s Coffee &#9749;</p>
        <p className="bbc-mock-card-detail">Last seen in a jeans pocket</p>
        <span className="bbc-mock-card-badge bbc-mock-card-badge--lost">Gets lost</span>
      </div>

      <div className="bbc-mock-card">
        <p className="bbc-mock-card-brand">Joe&rsquo;s Coffee &#9749;</p>
        <div className="bbc-mock-stamps">
          8/10<span>stamps collected</span>
        </div>
        <div className="bbc-mock-person">
          <div>
            <p className="bbc-mock-person-name">Sarah M.</p>
            <p className="bbc-mock-person-sub">2 away from free!</p>
          </div>
        </div>
        <div className="bbc-mock-notif">
          <span className="bbc-mock-notif-icon" aria-hidden="true">&#9749;</span>
          <div>
            <p className="bbc-mock-notif-body">Your free coffee is almost here!</p>
            <p className="bbc-mock-notif-meta">Joe&rsquo;s Coffee &middot; just now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WalletCardMockup() {
  return (
    <div className="bbc-wallet-mockup">
      <div className="bbc-wallet-header">
        <p className="bbc-mock-card-brand">Joe&rsquo;s Coffee &#9749;</p>
        <span aria-hidden="true" style={{ fontSize: 22 }}>&#128241;</span>
      </div>
      <div className="bbc-mock-stamps">
        8/10<span>stamps collected</span>
      </div>
      <div className="bbc-mock-person">
        <div>
          <p className="bbc-mock-person-name">Sarah M.</p>
          <p className="bbc-mock-person-sub">2 away from free!</p>
        </div>
      </div>
      <div className="bbc-wallet-footer">
        Saved in Apple Wallet &middot; Always with them
      </div>
    </div>
  );
}

const dbRows = [
  { initials: "SM", name: "Sarah Mitchell", meta: "Last visit: 2 days ago \u00b7 23 visits", status: "Active", color: "orange" as const, statusClass: "active" as const },
  { initials: "JK", name: "James Khumalo", meta: "Last visit: 12 days ago \u00b7 8 visits", status: "Overdue", color: "blue" as const, statusClass: "overdue" as const },
  { initials: "LR", name: "Lisa Rodriguez", meta: "Last visit: yesterday \u00b7 45 visits", status: "VIP", color: "yellow" as const, statusClass: "vip" as const },
  { initials: "TN", name: "Tom Nguyen", meta: "Joined today \u00b7 1 visit", status: "New", color: "blue" as const, statusClass: "new" as const },
  { initials: "AW", name: "Amy Williams", meta: "Last visit: 28 days ago \u00b7 11 visits", status: "Win back", color: "orange" as const, statusClass: "winback" as const },
];

export function CustomerDatabaseMockup() {
  return (
    <div className="bbc-database-mockup">
      {dbRows.map((row) => (
        <div key={row.initials} className="bbc-db-row">
          <div className={`bbc-db-avatar bbc-db-avatar--${row.color}`}>{row.initials}</div>
          <div className="bbc-db-info">
            <p className="bbc-db-name">{row.name}</p>
            <p className="bbc-db-meta">{row.meta}</p>
          </div>
          <span className={`bbc-db-status bbc-db-status--${row.statusClass}`}>{row.status}</span>
        </div>
      ))}
    </div>
  );
}

const notifications = [
  {
    biz: "Joe\u2019s Coffee",
    emoji: "\u2615",
    title: "\u2615 Tuesday Flash Sale!",
    desc: "20% off all drinks until 3pm. Show this at the counter.",
  },
  {
    biz: "Tony\u2019s Barber",
    emoji: "\u2702\uFE0F",
    title: "\u2702\uFE0F It\u2019s been 4 weeks",
    desc: "Time for a fresh cut? 15% off today only.",
  },
  {
    biz: "Glow Salon",
    emoji: "\uD83C\uDF89",
    title: "\uD83C\uDF89 You earned a reward!",
    desc: "Your 10th visit = free blowdry. Come claim it!",
  },
];

export function NotificationsMockup() {
  return (
    <div className="bbc-notifs-mockup">
      {notifications.map((n) => (
        <div key={n.biz} className="bbc-notif-card">
          <span className="bbc-notif-emoji" aria-hidden="true">{n.emoji}</span>
          <div className="bbc-notif-content">
            <p className="bbc-notif-biz">{n.biz}</p>
            <p className="bbc-notif-title">{n.title}</p>
            <p className="bbc-notif-desc">{n.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const automationSteps = [
  { emoji: "\uD83C\uDFAF", label: "Trigger", value: "Customer hasn\u2019t visited in 14 days" },
  { emoji: "\u231B", label: "Timing", value: "Send at 10:00 AM their time" },
  { emoji: "\uD83D\uDCF2", label: "Message", value: "\u201CWe miss you! 15% off your next visit\u201D" },
];

export function AutomationFlowMockup() {
  return (
    <div className="bbc-auto-mockup">
      {automationSteps.map((step, i) => (
        <div key={step.label}>
          <div className="bbc-auto-step">
            <span className="bbc-auto-emoji" aria-hidden="true">{step.emoji}</span>
            <div className="bbc-auto-content">
              <p className="bbc-auto-label">{step.label}</p>
              <p className="bbc-auto-value">{step.value}</p>
            </div>
          </div>
          {i < automationSteps.length - 1 && (
            <div className="bbc-auto-connector" aria-hidden="true" />
          )}
        </div>
      ))}
      <p className="bbc-auto-cycle">Customer visits &rarr; stamp added &rarr; cycle resets</p>
    </div>
  );
}
