import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
type NavItem = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  active?: boolean;
};
type CoreProductLink = {
  id: string;
  label: string;
};
type BuyingInfoLink = {
  id: string;
  label: string;
};
const navItems: NavItem[] = [{
  label: 'Product',
  hasDropdown: true,
  active: true
}, {
  label: 'Resources',
  hasDropdown: true
}, {
  label: 'Retention',
  href: '#'
}, {
  label: 'Pricing',
  href: '#'
}, {
  label: 'Contact Us',
  href: '#'
}];
const coreProductLinks: CoreProductLink[] = [{
  id: 'digital-loyalty',
  label: 'Digital Loyalty Cards'
}, {
  id: 'customer-retention',
  label: 'Customer Retention'
}, {
  id: 'geo-fenced',
  label: 'Geo-Fenced Offers'
}, {
  id: 'direct-messaging',
  label: 'Direct Messaging'
}];
const buyingInfoLinks: BuyingInfoLink[] = [{
  id: 'pricing',
  label: 'Pricing'
}, {
  id: 'faq',
  label: 'FAQ'
}, {
  id: 'book-demo',
  label: 'Book a Demo'
}, {
  id: 'customer-stories',
  label: 'Customer Stories'
}];

// @component: GlassmorphismNavbar
export const GlassmorphismNavbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const productDropdownRef = useRef<HTMLDivElement>(null);
  const productButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [isDark]);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(e.target as Node) && productButtonRef.current && !productButtonRef.current.contains(e.target as Node)) {
        setProductDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const handleProductMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setProductDropdownOpen(true);
  };
  const handleProductMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 120);
  };
  const handleDropdownMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };
  const handleDropdownMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 120);
  };

  // @return
  return <div className="w-full min-h-screen bg-[#FEF0E9] relative overflow-hidden">
      {/* Decorative background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-40 blur-3xl" style={{
      background: 'radial-gradient(circle, rgba(252,184,39,0.55) 0%, rgba(252,184,39,0) 70%)'
    }} />
      <div aria-hidden="true" className="pointer-events-none absolute top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl" style={{
      background: 'radial-gradient(circle, rgba(243,125,57,0.45) 0%, rgba(243,125,57,0) 70%)'
    }} />

      <header className="sticky top-3 z-[900] w-full px-3 sm:px-6 lg:px-12" style={{
      paddingTop: 0
    }}>
        <motion.div initial={{
        y: -20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.5,
        ease: [0.2, 0.8, 0.2, 1]
      }} className="relative mx-auto max-w-7xl">
          <div className="relative isolate overflow-visible" style={{
          borderRadius: 999,
          minHeight: 68,
          border: '1px solid rgba(255,255,255,0.72)',
          boxShadow: '0 16px 36px 0 rgba(48,33,39,0.2), inset 0 1px 0 0 rgba(255,255,255,0.7)',
          padding: '8px 16px'
        }}>
            {/* Glass filter layer */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{
            zIndex: 1,
            borderRadius: 999,
            backgroundImage: 'linear-gradient(148deg, rgba(255,255,255,0.2), rgba(255,255,255,0.08))',
            backdropFilter: 'saturate(2.05) blur(19px) contrast(1.08)',
            WebkitBackdropFilter: 'saturate(2.05) blur(19px) contrast(1.08)'
          }} />
            {/* Glass overlay layer */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{
            zIndex: 2,
            borderRadius: 999,
            opacity: 0.98,
            backgroundImage: 'radial-gradient(120% 180%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.14) 100%), linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.16) 100%)'
          }} />
            {/* Specular layer */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{
            zIndex: 3,
            borderRadius: 999,
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.9), inset 0 -1px 0 0 rgba(255,255,255,0.28), inset 0 0 0 1px rgba(255,255,255,0.42)'
          }} />

            {/* Content */}
            <div className="relative z-[5] flex items-center justify-between gap-5" style={{
            minHeight: 68,
            padding: '0 4px'
          }}>
              {/* Brand */}
              <a href="" aria-label="Loyaltymaster home" className="flex items-center gap-2.5 shrink-0" style={{
              color: '#302127'
            }} onClick={e => e.preventDefault()}>
                <span aria-hidden="true" className="flex items-center" style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: 30.8,
                lineHeight: '27.8px',
                color: '#302127',
                letterSpacing: '-0.2px',
                fontWeight: 700
              }}>
                  <span style={{
                  fontWeight: 900,
                  letterSpacing: '-1px'
                }}>
                    sendPUSH
                  </span>
                  <span style={{
                  fontSize: 30.2,
                  fontWeight: 400,
                  margin: '0 7.8px'
                }}>
                    |
                  </span>
                  <span style={{
                  fontSize: 30.6,
                  fontWeight: 400,
                  letterSpacing: '-1.2px'
                }}>
                    Loyaltymaster
                  </span>
                </span>
              </a>

              {/* Desktop nav */}
              <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-[22px]">
                {navItems.map((item, i) => {
                const isActive = item.active;
                const isHovered = hoveredIndex === i;
                const isProductItem = item.label === 'Product';
                const showUnderline = isActive || isHovered || isProductItem && productDropdownOpen;
                const color = isActive || isProductItem && productDropdownOpen ? '#F37D39' : '#302127';
                const content = <>
                      <span style={{
                    fontFamily: 'Onest, "Onest Placeholder", sans-serif',
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: '24px',
                    letterSpacing: '-0.4px',
                    color
                  }}>
                        {item.label}
                      </span>
                      {item.hasDropdown && <motion.span animate={{
                    rotate: isProductItem ? productDropdownOpen ? 180 : 0 : isHovered ? 180 : 0
                  }} transition={{
                    duration: 0.22,
                    ease: 'easeOut'
                  }} className="inline-flex ml-1 shrink-0">
                          <ChevronDown size={12} strokeWidth={1.5} style={{
                      color
                    }} />
                        </motion.span>}
                      {/* Underline indicator */}
                      <motion.span aria-hidden="true" initial={false} animate={{
                    scaleX: showUnderline ? 1 : 0,
                    opacity: showUnderline ? 1 : 0
                  }} transition={{
                    duration: 0.22,
                    ease: [0.2, 0.8, 0.2, 1]
                  }} className="absolute left-0 right-0 -bottom-1 h-[2px] origin-left" style={{
                    backgroundColor: '#F37D39',
                    borderRadius: 2
                  }} />
                    </>;
                if (isProductItem) {
                  return <div key={item.label} className="relative">
                        <button ref={productButtonRef} type="button" onMouseEnter={() => {
                      setHoveredIndex(i);
                      handleProductMouseEnter();
                    }} onMouseLeave={() => {
                      setHoveredIndex(null);
                      handleProductMouseLeave();
                    }} onClick={() => setProductDropdownOpen(v => !v)} className="relative flex items-center bg-transparent border-0 p-0 m-0 cursor-pointer">
                          {content}
                        </button>

                        {/* Product Dropdown */}
                        <AnimatePresence>
                          {productDropdownOpen && <motion.div ref={productDropdownRef} initial={{
                        opacity: 0,
                        y: -8,
                        scale: 0.97
                      }} animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                      }} exit={{
                        opacity: 0,
                        y: -8,
                        scale: 0.97
                      }} transition={{
                        duration: 0.2,
                        ease: [0.2, 0.8, 0.2, 1]
                      }} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave} className="absolute top-[calc(100%+16px)] z-[999]" style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 'min(820px, 90vw)',
                        borderRadius: 16,
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: 'rgba(48, 33, 39, 0.1) 0px 12px 40px 0px, rgba(48, 33, 39, 0.04) 0px 2px 8px 0px',
                        overflow: 'hidden'
                      }}>
                              <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr 260px'
                        }}>
                                {/* Core Products column */}
                                <div style={{
                            padding: '28px 22px 28px 28px'
                          }}>
                                  <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 12,
                              marginBottom: 20
                            }}>
                                    <span aria-hidden="true" style={{
                                width: 44,
                                height: 44,
                                backgroundColor: '#FCB827',
                                borderRadius: 12,
                                flexShrink: 0,
                                display: 'block'
                              }} />
                                    <span style={{
                                fontSize: 15,
                                fontWeight: 700,
                                color: '#302127',
                                fontFamily: 'Onest, sans-serif'
                              }}>
                                      Core Products
                                    </span>
                                  </div>
                                  <ul style={{
                              listStyle: 'none',
                              padding: 0,
                              margin: 0,
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 14
                            }}>
                                    {coreProductLinks.map(link => <li key={link.id}>
                                        <a href="" onClick={e => {
                                  e.preventDefault();
                                  setProductDropdownOpen(false);
                                }} className="group" style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: 10,
                                  color: '#302127',
                                  fontSize: 14,
                                  lineHeight: '20px',
                                  textDecoration: 'none',
                                  fontFamily: 'Onest, sans-serif',
                                  fontWeight: 500,
                                  transition: 'color 0.18s ease'
                                }} onMouseEnter={e => {
                                  (e.currentTarget as HTMLAnchorElement).style.color = '#F37D39';
                                }} onMouseLeave={e => {
                                  (e.currentTarget as HTMLAnchorElement).style.color = '#302127';
                                }}>
                                          <span aria-hidden="true" style={{
                                    width: 8,
                                    height: 8,
                                    backgroundColor: '#FCB827',
                                    borderRadius: '50%',
                                    flexShrink: 0,
                                    marginTop: 6,
                                    display: 'block'
                                  }} />
                                          <span>{link.label}</span>
                                        </a>
                                      </li>)}
                                  </ul>
                                </div>

                                {/* Buying Info column */}
                                <div style={{
                            padding: '28px 22px 28px 22px',
                            borderLeft: '1px solid rgba(0,0,0,0.06)'
                          }}>
                                  <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 12,
                              marginBottom: 20
                            }}>
                                    <span aria-hidden="true" style={{
                                width: 44,
                                height: 44,
                                backgroundColor: '#F37D39',
                                borderRadius: 12,
                                flexShrink: 0,
                                display: 'block'
                              }} />
                                    <span style={{
                                fontSize: 15,
                                fontWeight: 700,
                                color: '#302127',
                                fontFamily: 'Onest, sans-serif'
                              }}>
                                      Buying Info
                                    </span>
                                  </div>
                                  <ul style={{
                              listStyle: 'none',
                              padding: 0,
                              margin: 0,
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 14
                            }}>
                                    {buyingInfoLinks.map(link => <li key={link.id}>
                                        <a href="" onClick={e => {
                                  e.preventDefault();
                                  setProductDropdownOpen(false);
                                }} style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: 10,
                                  color: '#302127',
                                  fontSize: 14,
                                  lineHeight: '20px',
                                  textDecoration: 'none',
                                  fontFamily: 'Onest, sans-serif',
                                  fontWeight: 500,
                                  transition: 'color 0.18s ease'
                                }} onMouseEnter={e => {
                                  (e.currentTarget as HTMLAnchorElement).style.color = '#F37D39';
                                }} onMouseLeave={e => {
                                  (e.currentTarget as HTMLAnchorElement).style.color = '#302127';
                                }}>
                                          <span aria-hidden="true" style={{
                                    width: 8,
                                    height: 8,
                                    backgroundColor: '#F37D39',
                                    borderRadius: '50%',
                                    flexShrink: 0,
                                    marginTop: 6,
                                    display: 'block'
                                  }} />
                                          <span>{link.label}</span>
                                        </a>
                                      </li>)}
                                  </ul>
                                </div>

                                {/* Right promo panel */}
                                <div style={{
                            borderLeft: '1px solid rgba(0,0,0,0.06)',
                            display: 'flex',
                            flexDirection: 'column'
                          }}>
                                  <div style={{
                              flex: 1,
                              borderTopRightRadius: 16,
                              backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80")',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              minHeight: 180,
                              filter: 'grayscale(1)'
                            }} role="img" aria-label="Team collaborating" />
                                  <div style={{
                              padding: '18px 20px 20px'
                            }}>
                                    <p style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: '#302127',
                                fontFamily: 'Onest, sans-serif',
                                margin: '0 0 4px 0'
                              }}>
                                      Start a trial
                                    </p>
                                    <p style={{
                                fontSize: 12,
                                lineHeight: '1.65',
                                color: '#979093',
                                fontFamily: 'Onest, sans-serif',
                                margin: '0 0 12px 0'
                              }}>
                                      Tell us about your business and we will
                                      help you launch your first customer
                                      messaging flow.
                                    </p>
                                    <a href="" onClick={e => {
                                e.preventDefault();
                                setProductDropdownOpen(false);
                              }} style={{
                                color: '#F37D39',
                                fontSize: 12,
                                fontWeight: 600,
                                fontFamily: 'Onest, sans-serif',
                                textDecoration: 'none'
                              }} onMouseEnter={e => {
                                (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline';
                              }} onMouseLeave={e => {
                                (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none';
                              }}>
                                      <span>Start now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </motion.div>}
                        </AnimatePresence>
                      </div>;
                }
                if (item.hasDropdown) {
                  return <button key={item.label} type="button" onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} onFocus={() => setHoveredIndex(i)} onBlur={() => setHoveredIndex(null)} className="relative flex items-center bg-transparent border-0 p-0 m-0 cursor-pointer">
                        {content}
                      </button>;
                }
                return <a key={item.label} href="" onClick={e => e.preventDefault()} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} onFocus={() => setHoveredIndex(i)} onBlur={() => setHoveredIndex(null)} className="relative flex items-center">
                      {content}
                    </a>;
              })}
              </nav>

              {/* Right side */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Theme toggle */}
                <button type="button" onClick={() => setIsDark(v => !v)} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={isDark} className="relative flex items-center justify-center cursor-pointer" style={{
                width: 40,
                height: 40,
                minWidth: 40,
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.66)',
                backgroundColor: 'rgba(255,255,255,0.34)',
                backgroundImage: 'linear-gradient(150deg, rgba(255,255,255,0.54), rgba(255,255,255,0.22))',
                boxShadow: '0 8px 16px 0 rgba(48,33,39,0.1), inset 0 1px 0 0 rgba(255,255,255,0.82)',
                color: '#302127',
                transition: 'transform 0.22s cubic-bezier(0.2,0.8,0.2,1)'
              }}>
                  <AnimatePresence mode="wait" initial={false}>
                    {isDark ? <motion.span key="sun" initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8
                  }} animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1
                  }} exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8
                  }} transition={{
                    duration: 0.22
                  }} className="absolute inset-0 flex items-center justify-center">
                        <Sun size={15} strokeWidth={1.8} />
                      </motion.span> : <motion.span key="moon" initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8
                  }} animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1
                  }} exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8
                  }} transition={{
                    duration: 0.22
                  }} className="absolute inset-0 flex items-center justify-center">
                        <Moon size={15} strokeWidth={1.8} />
                      </motion.span>}
                  </AnimatePresence>
                </button>

                {/* Mobile menu toggle */}
                <button type="button" onClick={() => setMobileOpen(v => !v)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="wfMobileMenu" className="lg:hidden relative flex items-center justify-center cursor-pointer" style={{
                width: 46,
                height: 46,
                minWidth: 46,
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.56)',
                backgroundColor: 'rgba(255,255,255,0.54)',
                boxShadow: '0 8px 14px 0 rgba(48,33,39,0.1), inset 0 1px 0 0 rgba(255,255,255,0.82)',
                color: '#302127'
              }}>
                  <AnimatePresence mode="wait" initial={false}>
                    {mobileOpen ? <motion.span key="close" initial={{
                    opacity: 0,
                    rotate: -90
                  }} animate={{
                    opacity: 1,
                    rotate: 0
                  }} exit={{
                    opacity: 0,
                    rotate: 90
                  }} transition={{
                    duration: 0.22
                  }} className="absolute inset-0 flex items-center justify-center">
                        <X size={20} strokeWidth={2} />
                      </motion.span> : <motion.span key="open" initial={{
                    opacity: 0,
                    rotate: 90
                  }} animate={{
                    opacity: 1,
                    rotate: 0
                  }} exit={{
                    opacity: 0,
                    rotate: -90
                  }} transition={{
                    duration: 0.22
                  }} className="absolute inset-0 flex items-center justify-center">
                        <Menu size={20} strokeWidth={2} />
                      </motion.span>}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu drawer */}
          <AnimatePresence>
            {mobileOpen && <motion.div id="wfMobileMenu" initial={{
            opacity: 0,
            y: -8,
            scale: 0.98
          }} animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }} exit={{
            opacity: 0,
            y: -8,
            scale: 0.98
          }} transition={{
            duration: 0.22,
            ease: [0.2, 0.8, 0.2, 1]
          }} className="lg:hidden mt-3 mx-auto" style={{
            borderRadius: 24,
            border: '1px solid rgba(255,255,255,0.72)',
            backgroundColor: 'rgba(255,255,255,0.6)',
            backdropFilter: 'saturate(2) blur(16px)',
            WebkitBackdropFilter: 'saturate(2) blur(16px)',
            boxShadow: '0 16px 36px 0 rgba(48,33,39,0.18), inset 0 1px 0 0 rgba(255,255,255,0.8)',
            padding: 12
          }}>
                <nav aria-label="Mobile primary navigation" className="flex flex-col">
                  {navItems.map(item => {
                const isActive = item.active;
                const color = isActive ? '#F37D39' : '#302127';
                return <a key={item.label} href="" onClick={e => {
                  e.preventDefault();
                  setMobileOpen(false);
                }} className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-white/40 transition-colors" style={{
                  color,
                  fontFamily: 'Onest, sans-serif',
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '-0.4px'
                }}>
                        <span>{item.label}</span>
                        {item.hasDropdown && <ChevronDown size={14} strokeWidth={1.8} style={{
                    color
                  }} />}
                      </a>;
              })}
                </nav>
              </motion.div>}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* Demo content area */}
      <main className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-32" style={{
      display: 'none'
    }}>
        <div className="max-w-3xl">
          <p style={{
          fontFamily: 'Onest, sans-serif',
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#F37D39',
          marginBottom: 16
        }}>
            Loyaltymaster · sendPUSH
          </p>
        </div>
      </main>
    </div>;
};