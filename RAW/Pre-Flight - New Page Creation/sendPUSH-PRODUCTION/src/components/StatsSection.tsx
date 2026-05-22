const stats = [
  { value: "95%", label: "Message deliverability", order: 0 },
  { value: "+28%", label: "Repeat customer visits", order: 1 },
  { value: "3x", label: "Faster follow-ups", order: 2 },
  { value: "35%", label: "More booking recoveries", order: 3 },
];

export default function StatsSection() {
  return (
    <section id="stats" className="wf-section wf-bg-white wf-section-tight">
      <div className="wr-container--main wf-stats-grid">
        {stats.map(({ value, label, order }) => (
          <article key={label} className="wf-stat-card reveal" data-reveal-order={String(order)}>
            <p className="wf-stat-value">{value}</p>
            <p className="wf-stat-label">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
