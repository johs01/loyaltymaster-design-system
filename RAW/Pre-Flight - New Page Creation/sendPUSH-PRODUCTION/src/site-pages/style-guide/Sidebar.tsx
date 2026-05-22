import { useState, useEffect } from 'react';

const sections = [
  { id: 'sg-overview', label: 'Overview' },
  { id: 'sg-colors', label: 'Colors' },
  { id: 'sg-typography', label: 'Typography' },
  { id: 'sg-spacing', label: 'Spacing & Layout' },
  { id: 'sg-components', label: 'Components' },
  { id: 'sg-icons', label: 'Iconography' },
  { id: 'sg-patterns', label: 'Patterns' },
  { id: 'sg-rules', label: "Do's & Don'ts" },
];

export default function Sidebar() {
  const [active, setActive] = useState('sg-overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { threshold: 0.1, rootMargin: '-80px 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sg-sidebar" aria-label="Style guide navigation">
      <a className="sg-sidebar-back" href="/">
        &larr; Back to site
      </a>
      <ul className="sg-sidebar-list">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`sg-sidebar-link${active === id ? ' sg-sidebar-link--active' : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
