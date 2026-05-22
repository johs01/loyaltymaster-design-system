import type { StatItem } from "../types";

const defaultStats: StatItem[] = [
  { value: "3x", label: "more direct than rented social reach" },
  { value: "24/7", label: "customer wallet visibility" },
  { value: "1", label: "clear return-visit action" },
];

export interface StatsCardStripProps {
  stats?: StatItem[];
}

export function StatsCardStrip({ stats = defaultStats }: StatsCardStripProps) {
  return (
    <section id="stats" className="lm-ds wf-section wf-bg-white wf-section-tight">
      <div className="wr-container--main wf-stats-grid">
        {stats.map((stat) => (
          <article key={`${stat.value}-${stat.label}`} className="wf-stat-card">
            <p className="wf-stat-value">{stat.value}</p>
            <p className="wf-stat-label">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
