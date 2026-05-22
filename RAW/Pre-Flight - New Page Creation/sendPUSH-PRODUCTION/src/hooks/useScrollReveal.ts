import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const revealAll = () =>
        document
          .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
          .forEach((el) => el.classList.add("is-visible"));
      revealAll();
      const mo = new MutationObserver(revealAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const order = parseInt(el.dataset.revealOrder ?? "0", 10);
            setTimeout(() => el.classList.add("is-visible"), order * 80);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    const registerNew = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          observer.observe(el);
        }
      });
    };

    registerNew();

    const mo = new MutationObserver(registerNew);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observer.disconnect();
    };
  }, []);
}
