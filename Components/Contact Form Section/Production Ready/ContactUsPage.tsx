import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Zap, GraduationCap, Megaphone, TrendingUp, MessageSquare, ChevronRight, User, ChevronDown } from 'lucide-react';
import { AwardsStrip } from './AwardsStrip';
import { TestimonialSection } from './TestimonialSection';

// ---- Theme (local, modeled after reference ThemeContext) ----
interface ThemeContextValue {
  isDarkMode: boolean;
  toggleTheme: () => void;
}
const ThemeContext = React.createContext<ThemeContextValue>({
  isDarkMode: false,
  toggleTheme: () => {}
});
const useTheme = () => React.useContext(ThemeContext);

// ---- Tokens ----
const COLORS = {
  peach: '#FEF0E9',
  white: '#FFFFFF',
  dark: '#1A1519',
  cardDark: '#231C21',
  textDark: '#302127',
  textLight: 'rgb(245,237,241)',
  muted: '#979093',
  amber: '#FCB827',
  orange: '#F37D39',
  teal: '#4C93AF',
  inputBgLight: '#FAF8F9'
};

// ---- Data ----
type LogoItem = {
  name: string;
};
const CUSTOMER_LOGOS: LogoItem[] = [{
  name: 'KFC'
}, {
  name: 'SKIMS'
}, {
  name: 'Inclusion'
}, {
  name: 'benefit'
}, {
  name: 'Scandic'
}];
type HelpCard = {
  key: string;
  title: string;
  desc: string;
  iconName: 'help' | 'zap' | 'cap' | 'mega' | 'trend' | 'msg';
  color: string;
};
const HELP_CARDS: HelpCard[] = [{
  key: 'support',
  title: 'Customer support',
  desc: "Whether you're just getting started or are already a customer, we're here to assist with product info, technical questions, and account support.",
  iconName: 'help',
  color: COLORS.amber
}, {
  key: 'partner',
  title: 'Partnerships & Integrations',
  desc: "Interested in exploring technical integrations or forming a business partnership? Let's connect and discuss the possibilities.",
  iconName: 'zap',
  color: COLORS.orange
}, {
  key: 'academy',
  title: 'LoyaltyMaster Academy',
  desc: 'Learn more about our training programs, certification courses, and educational resources to help you master loyalty technology.',
  iconName: 'cap',
  color: COLORS.teal
}, {
  key: 'marketing',
  title: 'Marketing Inquiries',
  desc: 'Reach out for guest post opportunities, press interviews, speaking engagements, or event collaborations.',
  iconName: 'mega',
  color: COLORS.orange
}, {
  key: 'investor',
  title: 'Investor Inquiries',
  desc: "We'll connect you with the most relevant person from our team to address your questions or requests.",
  iconName: 'trend',
  color: COLORS.amber
}, {
  key: 'general',
  title: 'General Enquiries',
  desc: 'Not sure where to start? Contact us for company details, support, or any other questions you may have.',
  iconName: 'msg',
  color: COLORS.teal
}];
type Region = {
  key: string;
  label: string;
  city: string;
  cityCountry: string;
  cityGradient: string;
  personName: string;
  personTitle: string;
};
const REGIONS: Region[] = [{
  key: 'eu',
  label: 'EUROPE',
  city: 'London',
  cityCountry: 'United Kingdom',
  cityGradient: 'linear-gradient(135deg, #4C93AF 0%, #2c5a6e 100%)',
  personName: 'Joe Danter',
  personTitle: 'Director of Sales, EMEA'
}, {
  key: 'na',
  label: 'NORTH AMERICA',
  city: 'New York',
  cityCountry: 'United States',
  cityGradient: 'linear-gradient(135deg, #F37D39 0%, #FCB827 100%)',
  personName: 'Kathryn Wright',
  personTitle: 'Chief Operating Officer'
}];
const TITLE_OPTIONS: string[] = ['Please select', 'C-Level / Executive', 'VP / Director', 'Manager', 'Individual Contributor', 'Other'];
const HELP_OPTIONS: string[] = ['Please select', 'Request a demo', 'Sales enquiry', 'Partnership', 'Support', 'Press / Media', 'Other'];

// ---- Motion variants ----
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 70,
      damping: 20
    }
  }
};

// ---- Small icon renderer (no array-of-components anti-pattern in map) ----
function renderHelpIcon(name: HelpCard['iconName']) {
  const cls = 'w-[18px] h-[18px]';
  if (name === 'help') return <HelpCircle className={cls} strokeWidth={2.2} style={{
    display: "none"
  }} />;
  if (name === 'zap') return <Zap className={cls} strokeWidth={2.2} style={{
    display: "none"
  }} />;
  if (name === 'cap') return <GraduationCap className={cls} strokeWidth={2.2} style={{
    display: "none"
  }} />;
  if (name === 'mega') return <Megaphone className={cls} strokeWidth={2.2} style={{
    display: "none"
  }} />;
  if (name === 'trend') return <TrendingUp className={cls} strokeWidth={2.2} style={{
    display: "none"
  }} />;
  return <MessageSquare className={cls} strokeWidth={2.2} style={{
    display: "none"
  }} />;
}

// ---- Primary CTA Button (amber with offset shadow) ----
function PrimaryButton({
  children,
  fullWidth = false,
  variant = 'amber'
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'amber' | 'dark';
}) {
  const isAmber = variant === 'amber';
  return <button type="button" className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-[15px] font-bold transition-transform duration-150 ease-out active:translate-y-[5px] hover:translate-y-[2px] ${fullWidth ? 'w-full' : ''}`} style={{
    background: isAmber ? COLORS.amber : COLORS.textDark,
    color: isAmber ? COLORS.textDark : '#FFFFFF',
    boxShadow: isAmber ? `${COLORS.orange} 0px 5px 0px 0px, rgba(48,33,39,0.10) 0px 8px 14px 0px` : 'rgba(0,0,0,0.25) 0px 5px 0px 0px, rgba(0,0,0,0.15) 0px 8px 14px 0px',
    fontFamily: 'Onest, sans-serif'
  }}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </button>;
}

// ---- Field input ----
function FieldInput(props: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const {
    isDarkMode
  } = useTheme();
  const [focused, setFocused] = useState(false);
  return <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-[14px] font-semibold tracking-[-0.1px]" style={{
      color: isDarkMode ? COLORS.textLight : COLORS.textDark,
      fontFamily: 'Onest, sans-serif'
    }}>
        <span>
          {props.label}
          {props.required ? <span style={{
          color: COLORS.orange
        }}>*</span> : null}
        </span>
      </label>
      <input id={props.id} type={props.type ?? 'text'} value={props.value} onChange={e => props.onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder={props.placeholder} className="rounded-2xl px-4 text-[16px] font-medium outline-none transition-all" style={{
      minHeight: 52,
      background: isDarkMode ? 'rgba(255,255,255,0.06)' : COLORS.inputBgLight,
      color: isDarkMode ? COLORS.textLight : COLORS.textDark,
      border: `2px solid ${focused ? 'rgba(252,184,39,0.9)' : 'rgba(252,184,39,0.62)'}`,
      boxShadow: focused ? 'rgba(252,184,39,0.18) 0 0 0 4px' : 'none',
      fontFamily: 'Onest, sans-serif'
    }} />
    </div>;
}

// ---- Field select ----
function FieldSelect(props: {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const {
    isDarkMode
  } = useTheme();
  const [focused, setFocused] = useState(false);
  return <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-[14px] font-semibold tracking-[-0.1px]" style={{
      color: isDarkMode ? COLORS.textLight : COLORS.textDark,
      fontFamily: 'Onest, sans-serif'
    }}>
        <span>
          {props.label}
          {props.required ? <span style={{
          color: COLORS.orange
        }}>*</span> : null}
        </span>
      </label>
      <div className="relative">
        <select id={props.id} value={props.value} onChange={e => props.onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className="w-full appearance-none rounded-2xl pl-4 pr-12 text-[16px] font-medium outline-none transition-all" style={{
        minHeight: 52,
        background: isDarkMode ? 'rgba(255,255,255,0.06)' : COLORS.inputBgLight,
        color: isDarkMode ? COLORS.textLight : COLORS.textDark,
        border: `2px solid ${focused ? 'rgba(252,184,39,0.9)' : 'rgba(252,184,39,0.62)'}`,
        boxShadow: focused ? 'rgba(252,184,39,0.18) 0 0 0 4px' : 'none',
        fontFamily: 'Onest, sans-serif'
      }}>
          {props.options.map(opt => <option key={opt} value={opt}>
              {opt}
            </option>)}
        </select>
        <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" style={{
        width: 18,
        height: 18,
        color: COLORS.muted
      }} />
      </div>
    </div>;
}

// ---- Field textarea ----
function FieldTextarea(props: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  const {
    isDarkMode
  } = useTheme();
  const [focused, setFocused] = useState(false);
  return <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-[14px] font-semibold tracking-[-0.1px]" style={{
      color: isDarkMode ? COLORS.textLight : COLORS.textDark,
      fontFamily: 'Onest, sans-serif'
    }}>
        <span>{props.label}</span>
      </label>
      <textarea id={props.id} rows={props.rows ?? 3} value={props.value} onChange={e => props.onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className="resize-none rounded-2xl px-4 py-3 text-[16px] font-medium outline-none transition-all" style={{
      background: isDarkMode ? 'rgba(255,255,255,0.06)' : COLORS.inputBgLight,
      color: isDarkMode ? COLORS.textLight : COLORS.textDark,
      border: `2px solid ${focused ? 'rgba(252,184,39,0.9)' : 'rgba(252,184,39,0.62)'}`,
      boxShadow: focused ? 'rgba(252,184,39,0.18) 0 0 0 4px' : 'none',
      fontFamily: 'Onest, sans-serif'
    }} />
    </div>;
}

// =================================================================
// MAIN PAGE
// =================================================================
export function ContactUsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = React.useCallback(() => setIsDarkMode(p => !p), []);
  React.useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);
  return <ThemeContext.Provider value={{
    isDarkMode,
    toggleTheme
  }}>
      <FontInjector />
      <main className="w-full min-h-screen" style={{
      fontFamily: 'Onest, sans-serif',
      background: isDarkMode ? COLORS.dark : COLORS.peach,
      color: isDarkMode ? COLORS.textLight : COLORS.textDark
    }}>
        <HeroContactSection />
        <HowCanWeHelpSection />
        <AcrossTheGlobeSection />
        <LocalTestimonialSection />
        <CTABannerSection />
        <TestimonialSection />
      </main>
    </ThemeContext.Provider>;
}

// ---- Inject Google Fonts once ----
function FontInjector() {
  React.useEffect(() => {
    const id = 'contact-page-fonts';
    if (document.getElementById(id)) return;
    const link1 = document.createElement('link');
    link1.id = id;
    link1.rel = 'stylesheet';
    link1.href = 'https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700&family=Rodger:wght@700&display=swap';
    document.head.appendChild(link1);
  }, []);
  return null;
}

// =================================================================
// SECTION 1 — HERO + CONTACT FORM
// =================================================================
function HeroContactSection() {
  const {
    isDarkMode
  } = useTheme();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState(TITLE_OPTIONS[0]);
  const [helpWith, setHelpWith] = useState(HELP_OPTIONS[0]);
  const [details, setDetails] = useState('');
  return <section className="w-full" style={{
    background: isDarkMode ? COLORS.dark : COLORS.peach,
    paddingTop: 84,
    paddingBottom: 84
  }}>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: '-100px'
    }} className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        {/* LEFT */}
        <motion.div variants={itemVariants} className="order-1 md:order-none flex w-full flex-col items-start justify-start">
          <h1 className="text-[44px] leading-[1.02] tracking-[-1px] md:text-[56px] lg:text-[64px]" style={{
          fontFamily: "'Rodger Bold', 'Rodger', serif",
          fontWeight: 700,
          color: isDarkMode ? COLORS.textLight : COLORS.textDark
        }}>
            <span className="block" style={{
            fontFamily: "Rodger Test"
          }}>Contact LoyaltyMaster</span>
            <span className="block" style={{
            fontFamily: "Rodger Test"
          }}>We're here to help</span>
          </h1>

          <div aria-hidden="true" className="mt-6" style={{
          width: 60,
          height: 4,
          borderRadius: 2,
          background: COLORS.amber
        }} />

          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.55]" style={{
          color: isDarkMode ? 'rgba(245,237,241,0.78)' : COLORS.textDark,
          fontFamily: 'Onest, sans-serif'
        }}>
            <span>
              LoyaltyMaster provides AI-powered customer loyalty technology. With a
              remote-first team of experienced loyalty professionals, we're ready to
              answer your questions and collaborate on your next loyalty project.
            </span>
          </p>

          <div className="mt-8 w-full hidden md:block">
            <AwardsStrip className="!px-0 !pt-0 !pb-0" />
          </div>

          <p className="mt-8 text-[14px] font-bold uppercase tracking-[1.4px]" style={{
          color: COLORS.muted,
          fontFamily: 'Onest, sans-serif',
          display: "none"
        }}>
            <span style={{
            display: "none"
          }}>Some of our amazing customers</span>
          </p>

          <ul className="mt-8 flex w-full flex-wrap items-center gap-3" style={{
          display: "none"
        }}>
            {CUSTOMER_LOGOS.map(logo => <li key={logo.name}>
                <span className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-[14px] font-semibold" style={{
              background: isDarkMode ? 'rgba(255,255,255,0.06)' : COLORS.inputBgLight,
              color: isDarkMode ? COLORS.textLight : COLORS.textDark,
              border: '1px solid rgba(151,144,147,0.28)',
              fontFamily: 'Onest, sans-serif'
            }}>
                  {logo.name}
                </span>
              </li>)}
          </ul>
        </motion.div>

        {/* RIGHT — form card */}
        <motion.div variants={itemVariants} className="order-2 md:order-none flex w-full justify-start">
          <div className="w-full p-6 md:p-8" style={{
          background: isDarkMode ? COLORS.cardDark : COLORS.white,
          border: '1px solid rgba(151,144,147,0.28)',
          borderRadius: 20,
          boxShadow: '0 1px 2px rgba(48,33,39,0.04), 0 10px 30px rgba(48,33,39,0.08)'
        }}>
            <h3 className="text-[24px] leading-tight" style={{
            fontFamily: 'Onest, sans-serif',
            fontWeight: 700,
            color: isDarkMode ? COLORS.textLight : COLORS.textDark
          }}>
              <span>Get in touch with us</span>
            </h3>
            <p className="mt-2 text-[14px] leading-[1.55]" style={{
            color: COLORS.muted,
            fontFamily: 'Onest, sans-serif'
          }}>
              <span>
                Share your details below, and we'll contact you to discuss your
                enquiry and explore how we can help.
              </span>
            </p>

            <form className="mt-6 flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FieldInput id="firstName" label="First name" required placeholder="Type your first name" value={firstName} onChange={setFirstName} />
                <FieldInput id="lastName" label="Last name" required placeholder="Type your last name" value={lastName} onChange={setLastName} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FieldInput id="email" label="Company email" type="email" required placeholder="Type your email" value={email} onChange={setEmail} />
                <FieldInput id="phone" label="Phone number" type="tel" placeholder="Type your phone number" value={phone} onChange={setPhone} />
              </div>

              <FieldSelect id="role" label="Which title best describes you?" required value={role} onChange={setRole} options={TITLE_OPTIONS} />

              <FieldSelect id="help" label="What can we help you with?" required value={helpWith} onChange={setHelpWith} options={HELP_OPTIONS} />

              <FieldTextarea id="details" label="Please provide more details" value={details} onChange={setDetails} rows={3} />

              <div className="mt-2">
                <PrimaryButton fullWidth>Contact us</PrimaryButton>
              </div>

              <p className="mt-1 text-[12px] leading-[1.5]" style={{
              color: COLORS.muted,
              fontFamily: 'Onest, sans-serif'
            }}>
                <span>
                  By clicking this box, you consent to LoyaltyMaster processing your
                  data and contacting you to fulfill your request.
                </span>
              </p>
            </form>
          </div>
        </motion.div>

        {/* Mobile-only awards strip (appears below form on mobile) */}
        <motion.div variants={itemVariants} className="order-3 md:hidden w-full">
          <AwardsStrip className="!px-0 !pt-0 !pb-0" />
        </motion.div>
      </motion.div>
    </section>;
}

// =================================================================
// SECTION 2 — HOW CAN WE HELP
// =================================================================
function HowCanWeHelpSection() {
  const {
    isDarkMode
  } = useTheme();
  const gridContainerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const gridItemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };
  const cardAccentByKey: Record<string, string> = {
    support: '#F37D39',
    partner: '#4C93AF',
    academy: '#FCB827',
    marketing: '#F37D39',
    investor: '#FCB827',
    general: '#4C93AF'
  };
  return <section className="w-full" style={{
    background: isDarkMode ? COLORS.dark : COLORS.white,
    paddingTop: 84,
    paddingBottom: 84
  }}>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: '-100px'
    }} className="mx-auto w-full max-w-[1280px] px-6 md:px-[48px]">
        <motion.h2 variants={itemVariants} className="mx-auto max-w-[820px] text-center text-[36px] leading-[1.05] tracking-[-0.8px] md:text-[44px] lg:text-[52px]" style={{
        fontFamily: 'Onest, sans-serif',
        fontWeight: 700,
        color: isDarkMode ? COLORS.textLight : COLORS.textDark
      }}>
          <span style={{
          fontFamily: "Rodger Test"
        }}>How can we help you?</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-[760px] text-center text-[16px] leading-[1.6]" style={{
        color: isDarkMode ? 'rgba(245,237,241,0.78)' : COLORS.textDark,
        fontFamily: 'Onest, sans-serif'
      }}>
          <span>
            Whether you're looking to launch a new loyalty program, integrate
            LoyaltyMaster into your existing tech stack, or simply learn more about
            our products, we'd love to hear from you. Please select the option that
            best describes why you're contacting us:
          </span>
        </motion.p>

        <motion.div variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }} className="mt-[44px] grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {HELP_CARDS.map(card => <motion.article key={card.key} variants={gridItemVariants} className="group relative flex cursor-default flex-col rounded-[16px] p-[22px_20px]" style={{
          background: isDarkMode ? '#231C21' : '#FAF8F9'
        }}>
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[16px] bg-gradient-to-b from-white/50 to-transparent opacity-0 transition-opacity duration-240 ease-out group-hover:opacity-100" />
              <div className="mb-[14px] flex h-[28px] w-[28px] items-center justify-center rounded-[8px] shadow-sm" style={{
            background: cardAccentByKey[card.key],
            color: '#FFFFFF'
          }}>
                {renderHelpIcon(card.iconName)}
              </div>
              <h3 className="relative z-10 mb-0 text-[24px] font-bold leading-[24px] tracking-[-0.4px]" style={{
            fontFamily: 'Onest, sans-serif',
            color: isDarkMode ? 'rgb(245,237,241)' : '#302127'
          }}>
                <span>{card.title}</span>
              </h3>
              <p className="relative z-10 mt-[10px] text-[18px] leading-[24px] tracking-[-0.4px] opacity-90" style={{
            fontFamily: 'Onest, sans-serif',
            color: isDarkMode ? 'rgb(245,237,241)' : '#302127'
          }}>
                <span style={{
              display: "none"
            }}>{card.desc}</span>
              </p>
              <p className="relative z-10 mt-[8px] text-[13.5px] leading-[1.55]" style={{
            fontFamily: 'Onest, sans-serif',
            color: isDarkMode ? 'rgba(245,237,241,0.65)' : 'rgba(48,33,39,0.62)'
          }}>
                <span>{card.desc}</span>
              </p>
            </motion.article>)}
        </motion.div>
      </motion.div>
    </section>;
}

// =================================================================
// SECTION 3 — ACROSS THE GLOBE
// =================================================================
function AcrossTheGlobeSection() {
  const {
    isDarkMode
  } = useTheme();
  return <section className="w-full" style={{
    background: isDarkMode ? COLORS.cardDark : COLORS.peach,
    paddingTop: 84,
    paddingBottom: 84,
    display: "none"
  }}>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: '-100px'
    }} className="mx-auto w-full max-w-[1280px] px-6 md:px-[48px]">
        <motion.h2 variants={itemVariants} className="mx-auto text-center text-[36px] leading-[1.05] tracking-[-0.8px] md:text-[44px] lg:text-[52px]" style={{
        fontFamily: 'Onest, sans-serif',
        fontWeight: 700,
        color: isDarkMode ? COLORS.textLight : COLORS.textDark
      }}>
          <span className="block">Across the globe,</span>
          <span className="block">within reach</span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {REGIONS.map(region => <motion.div key={region.key} variants={itemVariants} className="overflow-hidden" style={{
          background: isDarkMode ? COLORS.dark : COLORS.white,
          border: '1px solid rgba(151,144,147,0.28)',
          borderRadius: 20,
          boxShadow: '0 1px 2px rgba(48,33,39,0.04), 0 12px 28px rgba(48,33,39,0.06)'
        }}>
              <div className="px-6 pt-6">
                <p className="text-[14px] font-bold uppercase tracking-[1.4px]" style={{
              color: COLORS.muted,
              fontFamily: 'Onest, sans-serif'
            }}>
                  <span>{region.label}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2">
                {/* City image placeholder */}
                <div className="relative flex items-end overflow-hidden p-4" style={{
              aspectRatio: '5 / 4',
              background: region.cityGradient,
              borderRadius: 14
            }}>
                  <div aria-hidden="true" className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)'
              }} />
                  <div className="relative">
                    <p className="text-[20px] leading-tight text-white" style={{
                  fontFamily: 'Onest, sans-serif',
                  fontWeight: 700
                }}>
                      <span>{region.city}</span>
                    </p>
                    <p className="text-[12px] font-medium text-white/80" style={{
                  fontFamily: 'Onest, sans-serif'
                }}>
                      <span>{region.cityCountry}</span>
                    </p>
                  </div>
                </div>

                {/* Person + CTA */}
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center" style={{
                width: 88,
                height: 88,
                borderRadius: '50%',
                background: isDarkMode ? 'rgba(255,255,255,0.06)' : COLORS.inputBgLight,
                border: '1px solid rgba(151,144,147,0.28)',
                color: COLORS.muted
              }}>
                    <User className="h-9 w-9" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h4 className="mt-3 text-[17px] leading-tight" style={{
                fontFamily: 'Onest, sans-serif',
                fontWeight: 700,
                color: isDarkMode ? COLORS.textLight : COLORS.textDark
              }}>
                    <span>{region.personName}</span>
                  </h4>
                  <p className="text-[13px]" style={{
                color: COLORS.muted,
                fontFamily: 'Onest, sans-serif'
              }}>
                    <span>{region.personTitle}</span>
                  </p>
                  <div className="mt-4">
                    <PrimaryButton>Contact us</PrimaryButton>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </motion.div>
    </section>;
}

// =================================================================
// SECTION 4 — TESTIMONIAL
// =================================================================
function LocalTestimonialSection() {
  const {
    isDarkMode
  } = useTheme();
  return <section className="w-full" style={{
    background: isDarkMode ? COLORS.dark : COLORS.white,
    paddingTop: 84,
    paddingBottom: 84,
    display: "none"
  }}>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: '-100px'
    }} className="mx-auto w-full max-w-[1100px] px-6 md:px-[48px]">
        <motion.div variants={itemVariants} className="flex items-start gap-5">
          <div className="flex shrink-0 items-center justify-center" style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: isDarkMode ? 'rgba(255,255,255,0.06)' : COLORS.inputBgLight,
          border: '1px solid rgba(151,144,147,0.28)',
          color: COLORS.muted
        }}>
            <User className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[18px] leading-tight" style={{
            fontFamily: 'Onest, sans-serif',
            fontWeight: 700,
            color: isDarkMode ? COLORS.textLight : COLORS.textDark
          }}>
              <span>Jaime Arribas</span>
            </h4>
            <p className="mt-1 text-[14px]" style={{
            color: COLORS.muted,
            fontFamily: 'Onest, sans-serif'
          }}>
              <span>Senior Marketing Technology Manager at KFC UK &amp; Ireland</span>
            </p>
          </div>
        </motion.div>

        <motion.blockquote variants={itemVariants} className="mt-8 text-[18px] leading-[1.65] md:text-[20px]" style={{
        color: isDarkMode ? 'rgba(245,237,241,0.88)' : COLORS.textDark,
        fontFamily: 'Onest, sans-serif'
      }}>
          <p>
            <span>
              "Three years ago, we realized our old points-based loyalty program just
              wasn't engaging our customers the way we wanted. We partnered with
              LoyaltyMaster to create something more modern and exciting — a
              gamified experience where customers can win free food every time they
              order through the app. It's fun, fair, and aligns perfectly with KFC
              UK's brand personality. LoyaltyMaster has been the ideal partner
              throughout this journey, helping us turn loyalty into something people
              genuinely enjoy."
            </span>
          </p>
        </motion.blockquote>

        <motion.div variants={itemVariants} className="mt-8 flex justify-end">
          <button type="button" aria-label="Next testimonial" className="inline-flex items-center justify-center transition-colors" style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          border: '1px solid rgba(151,144,147,0.4)',
          background: 'transparent',
          color: isDarkMode ? COLORS.textLight : COLORS.textDark
        }}>
            <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
          </button>
        </motion.div>
      </motion.div>
    </section>;
}

// =================================================================
// SECTION 5 — CTA BANNER
// =================================================================
function CTABannerSection() {
  return <section className="relative w-full overflow-hidden" style={{
    paddingTop: 80,
    paddingBottom: 80,
    background: "#fef0e9",
    display: "none"
  }}>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: '-100px'
    }} className="relative mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-6 md:px-[48px]">
        {/* Left decorative block */}
        <motion.div variants={itemVariants} aria-hidden="true" className="hidden shrink-0 lg:block">
          <div style={{
          width: 140,
          height: 140,
          borderRadius: 20,
          background: 'linear-gradient(135deg, #F37D39 0%, #FCB827 100%)',
          boxShadow: 'rgba(48,33,39,0.18) 0px 18px 30px -10px, inset 0 -8px 0 rgba(48,33,39,0.10)',
          transform: 'rotate(-8deg)',
          display: "none"
        }} />
        </motion.div>

        {/* Center content */}
        <motion.div variants={itemVariants} className="flex flex-1 flex-col items-center text-center">
          <p className="text-[13px] font-bold uppercase tracking-[1.6px]" style={{
          color: 'rgba(48,33,39,0.65)',
          fontFamily: 'Onest, sans-serif'
        }}>
            <span>The most powerful AI loyalty cloud</span>
          </p>
          <h2 className="mt-4 text-[36px] leading-[1.05] tracking-[-0.8px] md:text-[44px] lg:text-[52px]" style={{
          fontFamily: 'Onest, sans-serif',
          fontWeight: 700,
          color: COLORS.textDark
        }}>
            <span className="block" style={{
            fontFamily: "Rodger Test"
          }}>Ready to see LoyaltyMaster's</span>
            <span className="block" style={{
            fontFamily: "Rodger Test"
          }}>platform in action?</span>
          </h2>
          <p className="mt-5 max-w-[720px] text-[15px] leading-[1.6]" style={{
          color: COLORS.textDark,
          fontFamily: 'Onest, sans-serif'
        }}>
            <span>
              LoyaltyMaster is the most powerful AI Loyalty Cloud on the market,
              offering a scalable, pure-play loyalty technology that is easy to
              integrate, thanks to robust APIs. LoyaltyMaster's no-code, API-centric
              platform makes the loyalty program experience fully customizable and
              empowers loyalty and marketing teams to run their program internally,
              without IT help.
            </span>
          </p>
          <div className="mt-7">
            <PrimaryButton variant="dark">Book a demo</PrimaryButton>
          </div>
        </motion.div>

        {/* Right decorative block */}
        <motion.div variants={itemVariants} aria-hidden="true" className="hidden shrink-0 lg:block">
          <div style={{
          width: 140,
          height: 140,
          borderRadius: 20,
          background: 'linear-gradient(135deg, #FCB827 0%, #F37D39 100%)',
          boxShadow: 'rgba(48,33,39,0.18) 0px 18px 30px -10px, inset 0 -8px 0 rgba(48,33,39,0.10)',
          transform: 'rotate(8deg)',
          display: "none"
        }} />
        </motion.div>
      </motion.div>
    </section>;
}