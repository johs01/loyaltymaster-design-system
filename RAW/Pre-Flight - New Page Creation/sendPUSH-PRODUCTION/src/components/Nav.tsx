import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { navigate } from "../utils/navigate";

type DropdownKey = "product" | "resources";
type NavItem = { label: string; href: string };

const HOME_PATH = "/";
const DESIGN_SYSTEM_TEMPLATE_PATH = "/design-system-template-page";

const navGlassFilterStyle: CSSProperties = {
  backdropFilter: "var(--wf-nav-backdrop-filter)",
  WebkitBackdropFilter: "var(--wf-nav-backdrop-filter)",
};

const mobileBackdropFilterStyle: CSSProperties = {
  backdropFilter: "var(--wf-mobile-backdrop-filter)",
  WebkitBackdropFilter: "var(--wf-mobile-backdrop-filter)",
};

const mobileMenuGlassFilterStyle: CSSProperties = {
  backdropFilter: "var(--wf-mobile-panel-backdrop-filter)",
  WebkitBackdropFilter: "var(--wf-mobile-panel-backdrop-filter)",
};

function isOrdinaryLeftClick(event: React.MouseEvent<HTMLAnchorElement>) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    event.currentTarget.target !== "_blank"
  );
}

const PRODUCT_COL1: NavItem[] = [
  { label: "Digital Loyalty Cards", href: "/loyalty" },
  { label: "Customer Retention", href: "/bring-back-customers" },
  { label: "Geo-Fenced Offers", href: HOME_PATH },
  { label: "Direct Messaging", href: "/social-media" },
];

const PRODUCT_COL2: NavItem[] = [
  { label: "Pricing", href: `${DESIGN_SYSTEM_TEMPLATE_PATH}#pricing` },
  { label: "FAQ", href: `${DESIGN_SYSTEM_TEMPLATE_PATH}#faq` },
  { label: "Book a Demo", href: `${DESIGN_SYSTEM_TEMPLATE_PATH}#tenant-trial-cta` },
  { label: "Customer Stories", href: `${DESIGN_SYSTEM_TEMPLATE_PATH}#testimonial-1` },
];

const RESOURCE_COL1: NavItem[] = [
  { label: "Customer Retention Guide", href: "/bring-back-customers" },
  { label: "Social Media vs. Direct", href: "/social-media" },
  { label: "Foot Traffic Playbook", href: HOME_PATH },
  { label: "Digital Loyalty Cards", href: "/loyalty" },
];

const RESOURCE_COL2: NavItem[] = [
  { label: "Toast POS Integration", href: `${DESIGN_SYSTEM_TEMPLATE_PATH}#integrations` },
  { label: "Clover POS Integration", href: `${DESIGN_SYSTEM_TEMPLATE_PATH}#integrations` },
  { label: "Zapier Automation", href: `${DESIGN_SYSTEM_TEMPLATE_PATH}#integrations` },
  { label: "Make Automation", href: `${DESIGN_SYSTEM_TEMPLATE_PATH}#integrations` },
];

const RESOURCE_COL3: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Contact Sales", href: `${DESIGN_SYSTEM_TEMPLATE_PATH}#tenant-trial-cta` },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transition: "transform 220ms ease-out",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        marginLeft: 4,
        flexShrink: 0,
      }}
    >
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DotBullet({ color = "var(--wr-accent-yellow)" }: { color?: string }) {
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
        marginTop: 2,
      }}
      aria-hidden="true"
    />
  );
}

function ColumnHeader({ color, title }: { color: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: color,
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
      <span className="text-ink font-bold text-base">{title}</span>
    </div>
  );
}

function ItemList({ items, dotColor = "var(--wr-accent-yellow)", onClick }: { items: NavItem[]; dotColor?: string; onClick?: () => void }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="flex items-start gap-3 text-ink text-sm hover:text-accent-orange transition-colors duration-200" onClick={onClick}>
            <DotBullet color={dotColor} />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProductPanel({ onClick }: { onClick: () => void }) {
  return (
    <div className="hidden tablet:block desktop:block px-4">
      <div
        className="max-w-container-main mx-auto mt-2 rounded-2xl bg-surface border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.1)]"
        style={{ boxShadow: "0 12px 40px rgba(48, 33, 39, 0.1), 0 2px 8px rgba(48, 33, 39, 0.04)" }}
      >
        <div className="grid grid-cols-[1fr_1fr_300px]">
          <div className="p-8 pr-6">
            <ColumnHeader color="var(--wr-accent-yellow)" title="Core Products" />
            <ItemList items={PRODUCT_COL1} onClick={onClick} />
          </div>
          <div className="p-8 px-6 border-l border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)]">
            <ColumnHeader color="var(--wr-accent-orange)" title="Buying Info" />
            <ItemList items={PRODUCT_COL2} dotColor="var(--wr-accent-orange)" onClick={onClick} />
          </div>
          <div className="border-l border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] flex flex-col">
            <div
              className="flex-1 bg-[#e8e4e0] dark:bg-[#3a3236] rounded-tr-2xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 200,
                filter: "grayscale(100%)",
              }}
            />
            <div className="p-5">
              <p className="text-ink font-bold text-sm mb-1">Start a trial</p>
              <p className="text-text-muted text-xs leading-relaxed mb-3">
                Tell us about your business and we will help you launch your first customer messaging flow.
              </p>
              <a href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#tenant-trial-cta`} className="text-accent-orange text-xs font-semibold hover:underline" onClick={onClick}>Start now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel({ onClick }: { onClick: () => void }) {
  return (
    <div className="hidden tablet:block desktop:block px-4">
      <div
        className="max-w-container-main mx-auto mt-2 rounded-2xl bg-surface border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.1)]"
        style={{ boxShadow: "0 12px 40px rgba(48, 33, 39, 0.1), 0 2px 8px rgba(48, 33, 39, 0.04)" }}
      >
        <div className="grid grid-cols-[1fr_1fr_1fr_280px]">
          <div className="p-8 pr-6">
            <ColumnHeader color="var(--wr-accent-yellow)" title="Guides" />
            <ItemList items={RESOURCE_COL1} onClick={onClick} />
          </div>
          <div className="p-8 px-6 border-l border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)]">
            <ColumnHeader color="var(--wr-accent-orange)" title="Integrations" />
            <ItemList items={RESOURCE_COL2} dotColor="var(--wr-accent-orange)" onClick={onClick} />
          </div>
          <div className="p-8 px-6 border-l border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)]">
            <ColumnHeader color="var(--wr-accent-yellow-soft, var(--wr-accent-yellow))" title="Company" />
            <ItemList items={RESOURCE_COL3} onClick={onClick} />
          </div>
          <div className="border-l border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] flex flex-col">
            <div
              className="flex-1 bg-[#e8e4e0] dark:bg-[#3a3236] rounded-tr-2xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 200,
              }}
            />
          </div>
        </div>
        <div className="border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] grid grid-cols-[1fr_1fr_1fr_280px]">
          <div className="p-6 col-span-1">
            <p className="text-ink font-bold text-sm mb-1">For B2B teams</p>
            <p className="text-text-muted text-xs leading-relaxed mb-2">
              Compare owned customer messaging against rented social reach.
            </p>
            <a href="/social-media" className="text-accent-orange text-xs font-semibold hover:underline" onClick={onClick}>Learn more</a>
          </div>
          <div className="p-6 col-span-1 border-l border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)]">
            <p className="text-ink font-bold text-sm mb-1">Talk to sales</p>
            <p className="text-text-muted text-xs leading-relaxed mb-2">
              Share your use case and get a practical launch path.
            </p>
            <a href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#tenant-trial-cta`} className="text-accent-orange text-xs font-semibold hover:underline" onClick={onClick}>Book a demo</a>
          </div>
          <div className="col-span-2" />
        </div>
      </div>
    </div>
  );
}

function MobileAccordionChevron({ open }: { open: boolean }) {
  return (
    <span
      className="flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.15)] text-text-muted flex-shrink-0"
      style={{
        transition: "transform 220ms ease-out, border-color 220ms ease-out",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function MobileProductContent({ onClick }: { onClick: () => void }) {
  const allItems = [...PRODUCT_COL1, ...PRODUCT_COL2];
  return (
    <div className="pb-4 pt-2">
      <div className="flex flex-col gap-4 mb-5">
        {allItems.map((item) => (
          <a key={item.label} href={item.href} className="flex items-center gap-3 text-ink text-[15px]" onClick={onClick}>
            {item.label}
          </a>
        ))}
      </div>
      <div
        className="flex items-center justify-between rounded-12 px-4 py-3 bg-bg-panel-light"
      >
        <span className="text-ink text-sm font-medium">Start a trial</span>
        <a href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#tenant-trial-cta`} className="text-accent-orange text-sm font-semibold" onClick={onClick}>Start now &rarr;</a>
      </div>
    </div>
  );
}

function MobileResourcesContent({ onClick }: { onClick: () => void }) {
  return (
    <div className="pb-4 pt-2">
      <div className="mb-5">
        <p className="text-ink font-bold text-sm mb-3">Guides</p>
        <div className="flex flex-col gap-3 mb-5">
          {RESOURCE_COL1.map((item) => (
            <a key={item.label} href={item.href} className="flex items-center gap-3 text-ink text-[15px]" onClick={onClick}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <p className="text-ink font-bold text-sm mb-3">Integrations</p>
        <div className="flex flex-col gap-3 mb-5">
          {RESOURCE_COL2.map((item) => (
            <a key={item.label} href={item.href} className="flex items-center gap-3 text-ink text-[15px]" onClick={onClick}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <p className="text-ink font-bold text-sm mb-3">Company</p>
        <div className="flex flex-col gap-3 mb-5">
          {RESOURCE_COL3.map((item) => (
            <a key={item.label} href={item.href} className="flex items-center gap-3 text-ink text-[15px]" onClick={onClick}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] pt-4 flex flex-col gap-4">
        <div>
          <p className="text-ink font-bold text-sm mb-1">For B2B teams</p>
          <p className="text-text-muted text-xs leading-relaxed mb-1">Compare owned messaging against rented social reach.</p>
          <a href="/social-media" className="text-accent-orange text-xs font-semibold hover:underline" onClick={onClick}>Learn more</a>
        </div>
        <div>
          <p className="text-ink font-bold text-sm mb-1">Talk to sales</p>
          <p className="text-text-muted text-xs leading-relaxed mb-1">Share your use case and get a practical launch path.</p>
          <a href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#tenant-trial-cta`} className="text-accent-orange text-xs font-semibold hover:underline" onClick={onClick}>Book a demo</a>
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const navShellRef = useRef<HTMLDivElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<DropdownKey | null>(null);
  const [dropdownTop, setDropdownTop] = useState(80);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    setIsClosing(false);
  }, []);

  const closeMenu = useCallback(() => {
    if (!isMenuOpen || isClosing) return;
    setIsClosing(true);
    setMobileOpenDropdown(null);

    const panel = panelRef.current;
    if (!panel) {
      setIsMenuOpen(false);
      setIsClosing(false);
      return;
    }

    const onEnd = (e: TransitionEvent) => {
      if (e.target !== panel) return;
      panel.removeEventListener("transitionend", onEnd);
      setIsMenuOpen(false);
      setIsClosing(false);
    };
    panel.addEventListener("transitionend", onEnd);

    setTimeout(() => {
      panel.removeEventListener("transitionend", onEnd);
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 500);
  }, [isMenuOpen, isClosing]);

  useEffect(() => {
    if (isMenuOpen && !isClosing) {
      document.body.style.overflow = "hidden";
      const raf = requestAnimationFrame(() => {
        panelRef.current?.focus();
      });
      return () => cancelAnimationFrame(raf);
    } else if (!isMenuOpen) {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen, isClosing]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 800px)");
    const resetMobileMenuOnDesktop = () => {
      if (!desktopQuery.matches) return;

      setIsMenuOpen(false);
      setIsClosing(false);
      setMobileOpenDropdown(null);
      document.body.style.overflow = "";
    };

    resetMobileMenuOnDesktop();
    desktopQuery.addEventListener("change", resetMobileMenuOnDesktop);
    return () => desktopQuery.removeEventListener("change", resetMobileMenuOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen && !openDropdown) return;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (openDropdown) setOpenDropdown(null);
        if (isMenuOpen) closeMenu();
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [isMenuOpen, openDropdown, closeMenu]);

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (navShellRef.current?.contains(target)) return;
      if (dropdownPanelRef.current?.contains(target)) return;
      setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  useEffect(() => {
    if (!isMenuOpen) {
      toggleBtnRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const shell = navShellRef.current;
    if (!shell) return;

    const sentinel = document.getElementById("hero");
    if (!sentinel) {
      const onScroll = () => {
        shell.classList.toggle("is-scrolled", window.scrollY > 60);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        shell.classList.toggle("is-scrolled", !entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-68px 0px 0px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!openDropdown) return;
    const onScroll = () => setOpenDropdown(null);
    window.addEventListener("scroll", onScroll, { passive: true, once: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openDropdown]);

  useEffect(() => {
    if (openDropdown && headerRef.current) {
      setDropdownTop(headerRef.current.getBoundingClientRect().bottom);
    }
  }, [openDropdown]);

  const THEME_KEY = "wf-theme-mode";

  const getSystemTheme = useCallback(
    () => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    []
  );

  const resolveInitialTheme = useCallback((): "light" | "dark" => {
    try {
      const stored = window.localStorage.getItem(THEME_KEY);
      if (stored === "light" || stored === "dark") return stored;
    } catch { /* ignore */ }
    return getSystemTheme() as "light" | "dark";
  }, [getSystemTheme]);

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(resolveInitialTheme());
  }, [resolveInitialTheme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme-mode", theme);
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    try { window.localStorage.setItem(THEME_KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const handleNavLinkClick = useCallback(() => {
    setOpenDropdown(null);
    if (isMenuOpen) closeMenu();
  }, [isMenuOpen, closeMenu]);

  const closeNavigationStateImmediately = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
    setIsMenuOpen(false);
    setIsClosing(false);
    document.body.style.overflow = "";
  }, []);

  const getHeaderOffset = useCallback(() => {
    const header = headerRef.current;
    if (!header) return 96;

    const computed = window.getComputedStyle(header);
    const stickyTop = Number.parseFloat(computed.top) || 0;
    return Math.ceil(header.offsetHeight + stickyTop + 8);
  }, []);

  const getScrollBehavior = useCallback(
    (): ScrollBehavior => (window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"),
    []
  );

  const scrollHomeHeroIntoView = useCallback(
    (attempt = 0) => {
      const hero = document.getElementById("hero");
      if (!hero && attempt < 8) {
        window.requestAnimationFrame(() => {
          scrollHomeHeroIntoView(attempt + 1);
        });
        return;
      }

      const top = hero
        ? Math.max(0, hero.getBoundingClientRect().top + window.scrollY - getHeaderOffset())
        : 0;

      window.scrollTo({
        top,
        behavior: getScrollBehavior(),
      });
    },
    [getHeaderOffset, getScrollBehavior]
  );

  const handleBrandHomeClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isOrdinaryLeftClick(event)) return;

    event.preventDefault();
    closeNavigationStateImmediately();

    if (window.location.pathname === HOME_PATH) {
      window.history.replaceState({}, "", HOME_PATH);
      scrollHomeHeroIntoView();
      return;
    }

    navigate(HOME_PATH);
    window.requestAnimationFrame(() => {
      scrollHomeHeroIntoView();
    });
  }, [closeNavigationStateImmediately, scrollHomeHeroIntoView]);

  const handleDropdownToggle = useCallback((key: DropdownKey) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }, []);

  const handleMobileDropdownToggle = useCallback((key: DropdownKey) => {
    setMobileOpenDropdown((prev) => (prev === key ? null : key));
  }, []);

  const closeTimeoutRef = useRef<number | null>(null);

  const handleMouseEnterDropdownZone = useCallback(() => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const handleMouseLeaveDropdownZone = useCallback(() => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
      closeTimeoutRef.current = null;
    }, 150);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current !== null) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const showMenu = isMenuOpen || isClosing;
  const animateOpen = isMenuOpen && !isClosing;
  const isProductActive = openDropdown === null || openDropdown === "product";
  const isMobileProductActive = mobileOpenDropdown === null || mobileOpenDropdown === "product";

  const sunIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.3M12 19.2v2.3M21.5 12h-2.3M4.8 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      />
    </svg>
  );

  const moonIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5Z"
        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"
      />
    </svg>
  );

  const brandLogo = (
    <span className="brand-logo" aria-hidden="true">
      <span className="brand-logo__send">sendPUSH</span>
      <span className="brand-logo__divider">|</span>
      <span className="brand-logo__loyalty">Loyaltymaster</span>
    </span>
  );

  return (
    <>
    <header className="wf-header" ref={headerRef}>
      <div className="wr-container--main wf-nav-shell" id="wfNav" ref={navShellRef}>
        <div className="wf-nav-glass wf-nav-glass--filter" style={navGlassFilterStyle} aria-hidden="true"></div>
        <div className="wf-nav-glass wf-nav-glass--overlay" aria-hidden="true"></div>
        <div className="wf-nav-glass wf-nav-glass--specular" aria-hidden="true"></div>
        <div className="wf-nav-content">
          <a className="wf-brand" href="/" aria-label="Loyaltymaster home" onClick={handleBrandHomeClick}>
            {brandLogo}
          </a>
          <nav className="wf-nav-links" aria-label="Primary navigation" onMouseLeave={handleMouseLeaveDropdownZone}>
            <button
              type="button"
              className={`flex items-center gap-0 ${isProductActive ? "is-active" : ""}`}
              onClick={(e) => { e.stopPropagation(); handleDropdownToggle("product"); }}
              onMouseEnter={() => { handleMouseEnterDropdownZone(); setOpenDropdown("product"); }}
            >
              Product
              <ChevronIcon open={openDropdown === "product"} />
            </button>
            <button
              type="button"
              className={`flex items-center gap-0 ${openDropdown === "resources" ? "is-active" : ""}`}
              onClick={(e) => { e.stopPropagation(); handleDropdownToggle("resources"); }}
              onMouseEnter={() => { handleMouseEnterDropdownZone(); setOpenDropdown("resources"); }}
            >
              Resources
              <ChevronIcon open={openDropdown === "resources"} />
            </button>
            <a href="/bring-back-customers" onClick={handleNavLinkClick}>Retention</a>
            <a href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#pricing`} onClick={handleNavLinkClick}>Pricing</a>
            <a href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#tenant-trial-cta`} onClick={handleNavLinkClick}>Contact Us</a>
          </nav>
          <div className="wf-theme-switcher">
            <button
              id="wfThemeToggle"
              className="wf-theme-icon-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={theme === "dark"}
            >
              <span className="wf-theme-icon-toggle__sun" aria-hidden="true">{sunIcon}</span>
              <span className="wf-theme-icon-toggle__moon" aria-hidden="true">{moonIcon}</span>
            </button>
          </div>
          <button
            ref={toggleBtnRef}
            className="wf-mobile-menu-toggle"
            id="wfMobileMenuToggle"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="wfMobileMenu"
            aria-expanded={isMenuOpen}
            onClick={openMenu}
          >
            <span className="wf-mobile-menu-toggle__line" aria-hidden="true"></span>
            <span className="wf-mobile-menu-toggle__line" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      {showMenu && (
        <div
          id="wfMobileMenu"
          ref={menuRef}
          className={`wf-mobile-menu${animateOpen ? " is-open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <button
            className="wf-mobile-menu-backdrop"
            style={mobileBackdropFilterStyle}
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={closeMenu}
          ></button>
          <aside
            ref={panelRef}
            className="wf-mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            tabIndex={-1}
          >
            <div
              className="wf-mobile-menu-glass wf-mobile-menu-glass--filter"
              style={mobileMenuGlassFilterStyle}
              aria-hidden="true"
            ></div>
            <div className="wf-mobile-menu-glass wf-mobile-menu-glass--overlay" aria-hidden="true"></div>
            <div className="wf-mobile-menu-glass wf-mobile-menu-glass--specular" aria-hidden="true"></div>
            <div className="wf-mobile-menu-content">
              <div className="wf-mobile-menu-head">
                <a className="wf-brand" href="/" aria-label="Loyaltymaster home" onClick={handleBrandHomeClick}>
                  {brandLogo}
                </a>
                <button className="wf-mobile-menu-close" type="button" aria-label="Close menu" onClick={closeMenu}>
                  <span className="wf-mobile-menu-close__line" aria-hidden="true"></span>
                  <span className="wf-mobile-menu-close__line" aria-hidden="true"></span>
                </button>
              </div>
              <nav className="wf-mobile-menu-links" aria-label="Mobile navigation links">
                <button
                  type="button"
                  className={isMobileProductActive ? "is-active" : ""}
                  onClick={() => handleMobileDropdownToggle("product")}
                >
                  <span>Product</span>
                  <MobileAccordionChevron open={mobileOpenDropdown === "product"} />
                </button>
                {mobileOpenDropdown === "product" && <MobileProductContent onClick={handleNavLinkClick} />}
                <button
                  type="button"
                  className={mobileOpenDropdown === "resources" ? "is-active" : ""}
                  onClick={() => handleMobileDropdownToggle("resources")}
                >
                  <span>Resources</span>
                  <MobileAccordionChevron open={mobileOpenDropdown === "resources"} />
                </button>
                {mobileOpenDropdown === "resources" && <MobileResourcesContent onClick={handleNavLinkClick} />}
                <a href="/bring-back-customers" onClick={handleNavLinkClick}>Retention</a>
                <a href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#pricing`} onClick={handleNavLinkClick}>Pricing</a>
                <a href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#tenant-trial-cta`} onClick={handleNavLinkClick}>Contact Us</a>
              </nav>
              <a className="wf-mobile-menu-cta" href={`${DESIGN_SYSTEM_TEMPLATE_PATH}#tenant-trial-cta`} onClick={handleNavLinkClick}>Start Trial</a>
            </div>
          </aside>
        </div>
      )}
    </header>

    {openDropdown && (
      <div
        className="fixed inset-0 z-[899]"
        onClick={() => setOpenDropdown(null)}
        aria-hidden="true"
      />
    )}
    <div ref={dropdownPanelRef} className="fixed left-0 right-0 z-[1050]" style={{ top: `${dropdownTop}px`, pointerEvents: openDropdown ? "auto" : "none" }} onMouseEnter={handleMouseEnterDropdownZone} onMouseLeave={handleMouseLeaveDropdownZone}>
      {openDropdown === "product" && <ProductPanel onClick={handleNavLinkClick} />}
      {openDropdown === "resources" && <ResourcesPanel onClick={handleNavLinkClick} />}
    </div>
    </>
  );
}
