import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Check, X, ChevronDown, Star, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Sparkles, Plus } from 'lucide-react';

/* ---------- Types ---------- */
type BillingMode = 'monthly' | 'annual';
interface NavLink {
  label: string;
  active?: boolean;
}
interface PlanFeature {
  text: string;
}
interface PricingPlan {
  id: 'business' | 'agency' | 'franchise';
  name: string;
  price: number;
  subtitle: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
}
type CellValue = {
  kind: 'check';
} | {
  kind: 'x';
} | {
  kind: 'text';
  value: string;
};
interface CompareRow {
  label: string;
  business: CellValue;
  agency: CellValue;
  franchise: CellValue;
}
interface CompareGroup {
  rows: CompareRow[];
}
interface Testimonial {
  title: string;
  body: string;
  author: string;
  role: string;
  tag: string;
}
interface FAQItem {
  q: string;
  a: string;
}
interface FooterColumn {
  title: string;
  links: string[];
}

/* ---------- Static data ---------- */
const NAV_LINKS: NavLink[] = [{
  label: 'Who is for'
}, {
  label: 'Solutions'
}, {
  label: 'Pricing',
  active: true
}, {
  label: 'Integrations'
}, {
  label: 'Resources'
}, {
  label: 'Contact Us'
}];
const PLANS: PricingPlan[] = [{
  id: 'business',
  name: 'Business',
  price: 164,
  subtitle: 'For advanced loyal businesses that intend to become market leaders.',
  blurb: 'Starter plan',
  features: ['Unlimited loyalty cards', 'Up to 5 locations', 'Custom domain included', 'All major card types', 'Email & chat support', 'API and Webhooks', 'Basic analytics dashboard'],
  cta: 'Get started free'
}, {
  id: 'agency',
  name: 'Agency',
  price: 214,
  subtitle: 'For agencies that want to use Boomerang as a white-label solution for clients.',
  blurb: 'Agency plan',
  features: ['Everything in Business', 'White-label dashboard', 'Unlimited sub-accounts', 'Reseller dashboard', 'Priority email support', 'Multi-tenant management', 'Advanced API access'],
  cta: 'Get started free',
  featured: true
}, {
  id: 'franchise',
  name: 'Franchise',
  price: 249,
  subtitle: 'For franchise businesses that need centralized management across locations.',
  blurb: 'Franchise plan',
  features: ['Everything in Agency', 'Multi-location management', 'Unlimited locations', 'Custom roles & permissions', 'Dedicated success manager', 'Custom integrations', 'Premium SLA support'],
  cta: 'Get started free'
}];
const C = (): CellValue => ({
  kind: 'check'
});
const Xv = (): CellValue => ({
  kind: 'x'
});
const T = (value: string): CellValue => ({
  kind: 'text',
  value
});
const COMPARE_GROUPS: CompareGroup[] = [{
  rows: [{
    label: 'Annual plan',
    business: T('$164'),
    agency: T('$214'),
    franchise: T('$249')
  }, {
    label: 'Quarter plan',
    business: T('$179'),
    agency: T('$229'),
    franchise: T('$269')
  }, {
    label: 'Monthly plan',
    business: T('$199'),
    agency: T('$259'),
    franchise: T('$299')
  }, {
    label: 'Promotions available',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Locations included',
    business: T('5'),
    agency: T('15'),
    franchise: T('Unlimited')
  }, {
    label: 'Punch cards',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Prepaid punch cards',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Reward cards',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Cashback cards',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Membership cards',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Gift cards',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Coupon cards',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Design templates',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Custom card design',
    business: Xv(),
    agency: C(),
    franchise: C()
  }, {
    label: 'CRM',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Free PUSH',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Geo-fenced PUSH',
    business: Xv(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Push automation',
    business: T('Included'),
    agency: T('Included'),
    franchise: T('Included')
  }, {
    label: 'Email',
    business: T('Included free'),
    agency: T('Included free'),
    franchise: T('Included free')
  }, {
    label: 'Richie – AI Loyalty Marketer',
    business: Xv(),
    agency: C(),
    franchise: C()
  }, {
    label: 'PWA Scanner App',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Manager seats',
    business: T('5 seats included'),
    agency: T('20 seats included'),
    franchise: T('50 seats included')
  }, {
    label: 'White label',
    business: Xv(),
    agency: C(),
    franchise: T('Paid option')
  }, {
    label: 'Reseller dashboard',
    business: Xv(),
    agency: C(),
    franchise: Xv()
  }, {
    label: 'Franchise dashboard',
    business: Xv(),
    agency: T('Paid option'),
    franchise: C()
  }, {
    label: 'Sub-accounts',
    business: Xv(),
    agency: T('3 included +$15/mo starting from 4th'),
    franchise: T('3 included +$15/mo starting from 4th')
  }, {
    label: 'Stripe connection',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'PayPal connection',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Feedback collection',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Automation flow builder',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Referral program',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Duplicate control',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Analytics',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Automated reports',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Custom fields',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Integrations',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'API and Webhooks',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Taxonomies',
    business: C(),
    agency: C(),
    franchise: C()
  }, {
    label: 'Support 24/7',
    business: C(),
    agency: C(),
    franchise: C()
  }]
}];
const TESTIMONIALS: Testimonial[] = [{
  tag: 'From Local Business',
  title: 'One of the best apps for digital loyalty cards',
  body: "I think the design of Boomerang is so very nice. The app is created to make it very easy for users (with not much experience like me) to create great digital loyalty cards in just minutes, and launch the campaign in a super easy way. Simply scan the code or send the link as needed.",
  author: 'Yuliana F.',
  role: 'Marketing Manager'
}, {
  tag: 'From Marketing Manager',
  title: '"Simple Fast and intuitive. I had fun too. Don\'t miss this."',
  body: 'Loyalty Cards in Carta de Fidelita as it could be called in Bench has now a simple, intuitive and new way to be created, customized and distributed. The templates are nice and SIMPLE to use and customization is done with less complexity.',
  author: 'Giadji Sergio A.',
  role: 'Marketing Manager'
}, {
  tag: 'From Agency Manager',
  title: '"Excellent product"',
  body: 'I recently tried Boomerang digital cards and I must say, they are excellent. The variety of card designs is really nice and the fact that they are all digital makes them very convenient to use.',
  author: 'Lori T.',
  role: 'Small business (50 or fewer emp.)'
}, {
  tag: 'From Local Business',
  title: '"Get aliata BOOM for your buck!"',
  body: 'Boomerangle has many pros but the one that stands out above the rest, for me, is their passion. The staff and ALWAYS so kind to help and Mihail, the CEO is proudly Boomerangle. They help until the issue is resolved.',
  author: 'Nataliya T.',
  role: 'Small business (50 or fewer emp.)'
}, {
  tag: 'From Marketing Manager',
  title: '"Best Loyalty Platform for your Business"',
  body: 'In general, the experience with Boomerangle has been positive. The team and customer support demonstrate a solid commitment to improving their services. Their openness to feedback is commendable.',
  author: 'Prashant N.',
  role: 'Mid-Market (51-1000 emp.)'
}, {
  tag: 'From Agency Owner',
  title: '"Easiest decision I\'ve made for my company"',
  body: "I feels wonderful to work into a totally new business and KNOW that I have a product that will help that business grow! In addition the support received by Boomerang's support team is outstanding.",
  author: 'Amanda M.',
  role: 'Small business (50 or fewer emp.)'
}];
const FAQS: FAQItem[] = [{
  q: 'What is the average cost of a loyalty program?',
  a: 'The average cost of a loyalty program varies based on platform, location count, and features. With Boomerang, plans start at $164/month and scale based on your team size, customizations, and integrations.'
}, {
  q: 'How to calculate loyalty program cost?',
  a: 'Calculate loyalty program cost by adding base subscription, per-location fees, integration costs, and reward funding. Boomerang gives a single transparent monthly price with no surprise overage fees.'
}, {
  q: 'How do you value a loyalty program?',
  a: 'Measure value by repeat purchase rate, average order value lift, customer lifetime value, and program participation. Boomerang surfaces all of these in your analytics dashboard.'
}, {
  q: 'When is the right time to launch a loyalty program?',
  a: 'The right time to launch is when you have a steady customer base and want to encourage repeat visits. Many of our customers launch within their first year of operations.'
}, {
  q: 'How do I encourage more participation in my loyalty program?',
  a: 'Use push notifications, referral incentives, tiered rewards, and surprise offers. Boomerang automates these flows so you can keep your members engaged without manual work.'
}, {
  q: 'Do loyalty program members spend more?',
  a: 'Yes. On average, loyalty members spend 18-25% more than non-members and visit twice as often. Boomerang merchants typically see a 22% lift in repeat orders within 90 days.'
}];
const FOOTER_COLS: FooterColumn[] = [{
  title: 'Solutions',
  links: ['Digital Loyalty Cards', 'Riche – AI Marketer', 'For Franchises', 'For Agencies', 'For SMBs', 'For Marketers']
}, {
  title: 'Features',
  links: ['Loyalty Program Manager', 'Scanner App', 'Integrations', 'Templates', 'Developer Docs', 'Pricing']
}, {
  title: 'Resources',
  links: ['Webinars', 'Help Center', 'Comparisons', 'Community', 'Affiliate Program', 'Fully Managed Service']
}, {
  title: 'Company',
  links: ['About Us', 'Quick wins', 'Loyalty ROI Calculator', 'Blog', 'Customer Stories', 'Educational journal']
}, {
  title: 'Alternatives',
  links: ['Boomerang to Fivestars', 'Boomerang to Loopy', 'Boomerang to Yotpo', 'Boomerang to Alice Loyalty', 'Boomerang to Glue Loyalty', 'Boomerang to Square']
}];

/* ---------- PricingSection data ---------- */
type PricingSectionPlan = {
  name: string;
  badge?: string;
  description: string;
  price?: {
    monthly: number;
    yearly: number;
  };
  customPrice?: string;
  customNote?: string;
  cta: string;
  features: string[];
  isPro?: boolean;
};
const PRICING_SECTION_PLANS: PricingSectionPlan[] = [{
  name: 'Starter',
  description: 'For independent operators who want reliable customer messaging without team overhead.',
  price: {
    monthly: 19,
    yearly: 14
  },
  cta: 'Get Started with Starter',
  features: ['Message templates for promotions, reminders, and follow-ups.', 'Up to 8 active customer campaigns at a time.', 'Performance dashboard with delivery and response tracking.'],
  isPro: false
}, {
  name: 'Pro',
  badge: 'Most popular',
  description: 'Built for growing teams that need advanced automation, segmentation, and collaboration controls.',
  price: {
    monthly: 49,
    yearly: 35
  },
  cta: 'Upgrade to Pro',
  features: ['Unlimited campaigns, segments, and reusable automations.', 'Higher-volume outreach with deeper conversion reporting.', 'Team roles, approval flow, and advanced campaign controls.'],
  isPro: true
}, {
  name: 'Enterprise',
  description: 'For multi-location organizations that need custom workflows, tighter governance, and priority support.',
  customPrice: 'Contact us',
  customNote: 'We will tailor pricing to your customer volume, security requirements, and rollout timeline.',
  cta: 'Talk to Sales',
  features: ['Unlimited workspaces, users, and customer records.', 'Compliance, security review, and dedicated onboarding support.', 'Custom integrations, API access, and service-level agreements.'],
  isPro: false
}];
const pricingSectionContainerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const pricingSectionItemVariants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/* ---------- Feedback Testimonials data ---------- */
const FEEDBACK_TESTIMONIALS = [{
  id: 't1',
  quote: '"SetupFlow gave us one place to run reminders, promos, and follow-ups. We filled more open slots in the first few weeks without adding extra admin work."',
  name: 'Maya Rivera',
  role: 'Operations Lead, Riverfront Wellness',
  initials: 'MR',
  avatarBg: '#4c93af',
  avatarText: '#ffffff'
}, {
  id: 't2',
  quote: '"We switched from manual texting to SetupFlow and saw campaign response jump fast. The team launches offers in minutes and tracks real impact each week."',
  name: 'Jordan Patel',
  role: 'Owner, Northside Auto Care',
  initials: 'JP',
  avatarBg: '#f37d39',
  avatarText: '#ffffff'
}, {
  id: 't3',
  quote: '"The automations are simple to set up and the reporting is clear. It helped us keep patients engaged and reduce missed appointments month over month."',
  name: 'Elena Brooks',
  role: 'General Manager, Elm Street Clinic',
  initials: 'EB',
  avatarBg: '#fcb827',
  avatarText: '#302127'
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

/* ---------- Container/Item motion ---------- */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 16
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

/* ============================================================
   PRIMARY COMPONENT
============================================================ */
export const BoomerangPricingPage: React.FC = () => {
  const [billing, setBilling] = useState<BillingMode>('annual');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [isYearly, setIsYearly] = useState(false);
  const [isTrialSubmitting, setIsTrialSubmitting] = useState(false);
  const [isTrialSuccess, setIsTrialSuccess] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const handleTrialSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTrialSubmitting(true);
    setTimeout(() => {
      setIsTrialSubmitting(false);
      setIsTrialSuccess(true);
    }, 1200);
  };
  return <div className="min-h-screen w-full bg-[#F8F7FF] text-[#1A1535] font-sans antialiased overflow-x-hidden">
      {/* ============= SECTION 1: ANNOUNCEMENT BAR ============= */}
      <div className="w-full text-[13px]" style={{
      background: 'linear-gradient(90deg, #EDE7FF 0%, #DDD2FF 40%, #E8DCFF 70%, #F2E8FF 100%)'
    }}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2.5 lg:px-12" style={{
        display: "none"
      }}>
          <div className="hidden items-center gap-5 text-[#4B3F8A] md:flex">
            <span className="font-semibold tracking-wide">MAY WEEKENDS</span>
            <span className="text-[#6B4EFF]">•</span>
            <span>
              Up to <strong className="font-bold text-[#1A1535]">50%</strong> off your first payment
            </span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-2 md:flex-none">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6B4EFF]">
              Get Started:
            </span>
            <span className="text-[#1A1535]">
              Save <strong>40%</strong> off your first subscription
            </span>
          </div>
          <a href="#" onClick={e => e.preventDefault()} className="hidden items-center gap-1.5 rounded-full bg-[#1A1535] px-3.5 py-1.5 text-[12px] font-semibold text-white transition hover:bg-[#2A2354] md:inline-flex">
            <span>Book a call</span>
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* ============= SECTION 2: GLASS NAVBAR ============= */}
      <header className="sticky top-3 z-40 px-4 sm:px-6 lg:px-12" style={{
      display: "none"
    }}>
        <div className="mx-auto mt-3 flex max-w-[1320px] items-center justify-between rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-[0_10px_40px_-12px_rgba(107,78,255,0.25)] backdrop-blur-xl">
          {/* Brand */}
          <a href="#" onClick={e => e.preventDefault()} className="flex items-center gap-2 pl-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg text-white" style={{
            background: 'linear-gradient(135deg, #6B4EFF 0%, #9B7CFF 100%)'
          }} aria-hidden="true">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-[17px] font-extrabold tracking-tight text-[#1A1535]">
              Boomerang
            </span>
          </a>

          {/* Center nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map(link => <li key={link.label}>
                  <a href="#" onClick={e => e.preventDefault()} className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-medium transition ${link.active ? 'bg-[#1A1535] text-white' : 'text-[#4B3F8A] hover:bg-[#F0EBFF] hover:text-[#1A1535]'}`}>
                    <span>{link.label}</span>
                    {(link.label === 'Solutions' || link.label === 'Integrations' || link.label === 'Resources') && <ChevronDown className="h-3 w-3 opacity-60" aria-hidden="true" />}
                  </a>
                </li>)}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 pr-1">
            <button type="button" aria-label="Search" className="hidden h-9 w-9 items-center justify-center rounded-full text-[#4B3F8A] hover:bg-[#F0EBFF] sm:inline-flex">
              <Search className="h-4 w-4" />
            </button>
            <a href="#" onClick={e => e.preventDefault()} className="hidden rounded-full px-3 py-2 text-[14px] font-medium text-[#4B3F8A] hover:text-[#1A1535] sm:inline-block">
              <span>Become a partner</span>
            </a>
            <a href="#" onClick={e => e.preventDefault()} className="inline-flex items-center gap-1.5 rounded-full bg-[#6B4EFF] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(107,78,255,0.55)] transition hover:bg-[#5A3FE0]">
              <span>Sign up with Google</span>
            </a>
          </div>
        </div>
      </header>

      {/* ============= SECTION 3: PRICING HERO ============= */}
      <section className="relative px-6 pt-14 pb-20 lg:px-12 lg:pt-20" style={{
      display: "none"
    }}>
        <div className="mx-auto max-w-[1320px]">
          {/* Breadcrumb */}
          <div className="mb-5 flex items-center justify-center gap-1.5 text-[12px] font-medium text-[#6B4EFF]">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#6B4EFF]" aria-hidden="true" />
            <span>Pricing</span>
          </div>

          {/* Title */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-80px'
        }} className="mx-auto max-w-3xl text-center">
            <motion.h1 variants={fadeUp} className="text-[42px] font-extrabold leading-[1.05] tracking-tight text-[#1A1535] sm:text-[52px] lg:text-[60px]">
              <span>Choose a </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-[#6B4EFF]">Boomerang</span>
                <svg className="absolute -bottom-1 left-0 z-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden="true">
                  <path d="M2 9 Q 75 -2 150 5 T 298 4" stroke="#FCB827" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              <br />
              <span>plan that's right for you</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-[#5C5278]">
              <span>Start any plan with a 14-day trial without a credit card. Need more time? </span>
              <span className="text-[#1A1535]">Make the decision easy with a 30-day no-questions-asked refund option.</span>
            </motion.p>
          </motion.div>

          {/* Billing toggle */}
          <div className="mt-9 flex justify-center" style={{
          display: "none"
        }}>
            <div className="inline-flex items-center gap-1 rounded-full border border-[#E4DDFA] bg-white p-1 shadow-[0_4px_18px_-8px_rgba(107,78,255,0.25)]" role="group" aria-label="Billing period">
              <button type="button" onClick={() => setBilling('monthly')} aria-pressed={billing === 'monthly'} className={`min-w-[100px] rounded-full px-5 py-2 text-[13px] font-semibold transition ${billing === 'monthly' ? 'bg-[#1A1535] text-white' : 'text-[#5C5278] hover:text-[#1A1535]'}`}>
                <span>Monthly</span>
              </button>
              <button type="button" onClick={() => setBilling('annual')} aria-pressed={billing === 'annual'} className={`min-w-[100px] rounded-full px-5 py-2 text-[13px] font-semibold transition ${billing === 'annual' ? 'bg-[#6B4EFF] text-white shadow-[0_6px_14px_-4px_rgba(107,78,255,0.55)]' : 'text-[#5C5278] hover:text-[#1A1535]'}`}>
                <span>Annual</span>
              </button>
            </div>
          </div>

          {/* Plans grid */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-60px'
        }} className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {PLANS.map(plan => {
            const featured = !!plan.featured;
            return <motion.article key={plan.id} variants={fadeUp} className={`relative flex flex-col rounded-[28px] p-7 lg:p-8 ${featured ? 'text-white shadow-[0_30px_60px_-20px_rgba(107,78,255,0.55)] md:-mt-6' : 'border border-[#E8E2F8] bg-white shadow-[0_8px_30px_-12px_rgba(107,78,255,0.12)]'}`} style={{
              ...(featured ? {
                background: 'linear-gradient(160deg, #7C5BFF 0%, #6B4EFF 45%, #5A3FE0 100%)'
              } : undefined),
              display: "none"
            }}>
                  {/* Decorative orb for featured */}
                  {featured && <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full opacity-40 blur-3xl" style={{
                background: 'radial-gradient(circle, #FCB827 0%, transparent 70%)'
              }} aria-hidden="true" />}

                  {/* Badge */}
                  <div className="relative flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-[0.12em] ${featured ? 'bg-white/15 text-white backdrop-blur' : 'bg-[#F0EBFF] text-[#6B4EFF]'}`}>
                      {plan.name}
                    </span>
                    {featured && <span className="inline-flex items-center gap-1 rounded-full bg-[#FCB827] px-2.5 py-1 text-[11px] font-bold text-[#1A1535]">
                        <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                        <span>Popular</span>
                      </span>}
                  </div>

                  {/* Price */}
                  <div className="relative mt-7">
                    <div className="flex items-end gap-1">
                      <span className={`text-[56px] font-extrabold leading-none tracking-tight ${featured ? 'text-white' : 'text-[#1A1535]'}`}>
                        ${plan.price}
                      </span>
                      <span className={`mb-2 text-[15px] font-semibold ${featured ? 'text-white/70' : 'text-[#8A7FB0]'}`}>
                        /mo
                      </span>
                    </div>
                    <p className={`mt-1 text-[12px] ${featured ? 'text-white/70' : 'text-[#8A7FB0]'}`}>
                      <span>{billing === 'annual' ? 'Billed annually' : 'Billed monthly'} · </span>
                      <span>{plan.blurb}</span>
                    </p>
                  </div>

                  {/* Subtitle */}
                  <p className={`relative mt-5 text-[14px] leading-relaxed ${featured ? 'text-white/85' : 'text-[#5C5278]'}`}>
                    {plan.subtitle}
                  </p>

                  {/* Features */}
                  <ul className="relative mt-6 flex flex-col gap-3">
                    {plan.features.map(f => <li key={f} className={`flex items-start gap-2.5 text-[14px] ${featured ? 'text-white/90' : 'text-[#2A2354]'}`}>
                        <span className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${featured ? 'bg-white/20' : 'bg-[#22C55E]'}`} aria-hidden="true">
                          <Check className={`h-3 w-3 ${featured ? 'text-white' : 'text-white'}`} strokeWidth={3} />
                        </span>
                        <span>{f}</span>
                      </li>)}
                  </ul>

                  {/* CTA */}
                  <a href="#" onClick={e => e.preventDefault()} className={`relative mt-8 inline-flex h-12 items-center justify-center rounded-full text-[14px] font-semibold transition ${featured ? 'bg-[#FCB827] text-[#1A1535] hover:bg-[#F4A700]' : 'bg-[#1A1535] text-white hover:bg-[#2A2354]'}`}>
                    <span>{plan.cta}</span>
                  </a>
                </motion.article>;
          })}
          </motion.div>
        </div>
      </section>

      {/* ============= INLINED PRICING SECTION ============= */}
      <section className="relative w-full bg-white py-20 px-6 md:px-12 font-sans text-[#302127]">
        <div className="mx-auto max-w-[1280px]">
          {/* Header Section */}
          <motion.div initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-100px'
        }} variants={pricingSectionContainerVariants} className="text-center">
            <motion.p variants={pricingSectionItemVariants} className="mb-3 text-[16px] font-bold uppercase tracking-wide text-[#979093]">
              Pricing
            </motion.p>
            <motion.h2 variants={pricingSectionItemVariants} className="m-0 mx-auto max-w-3xl text-[40px] font-bold leading-tight tracking-tight md:text-[52px]" style={{
            fontFamily: "Rodger Test",
            fontSize: "48px",
            lineHeight: "1"
          }}>
              Pricing That Scales With Your Campaign Goals
            </motion.h2>
            <motion.p variants={pricingSectionItemVariants} className="mt-4 mx-auto max-w-[760px] text-[18px] leading-relaxed text-[#302127] md:text-[20px]" style={{
            fontFamily: "Onest"
          }}>
              Start lean, scale when your audience and campaign volume grow. Every plan includes SetupFlow templates,
              automation tools, and performance reporting.
            </motion.p>

            {/* Toggle */}
            <motion.div variants={pricingSectionItemVariants} className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#979093]/20 bg-[#f4eff2] p-1.5 shadow-[0_8px_18px_0_rgba(48,33,39,0.08)]" role="group" aria-label="Billing period">
                <button type="button" aria-pressed={!isYearly} onClick={() => setIsYearly(false)} className={`flex min-h-[48px] items-center justify-center rounded-full px-5 text-[16px] font-bold transition-all duration-300 ${!isYearly ? 'bg-[#fcb827] text-[#2a1f16] shadow-[0_4px_0_0_rgba(48,33,39,0.12)]' : 'text-[#979093] hover:text-[#302127]'}`}>
                  <span>Monthly</span>
                </button>
                <button type="button" aria-pressed={isYearly} onClick={() => setIsYearly(true)} className={`flex min-h-[48px] items-center justify-center gap-2 rounded-full px-5 text-[16px] font-bold transition-all duration-300 ${isYearly ? 'bg-[#fcb827] text-[#2a1f16] shadow-[0_4px_0_0_rgba(48,33,39,0.12)]' : 'text-[#979093] hover:text-[#302127]'}`}>
                  <span>Yearly</span>
                  <span className="flex items-center rounded-full bg-[#fcb827] px-2 py-1 text-[11px] font-bold tracking-wider text-[#2a1f16]">
                    <span>30% OFF</span>
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Pricing Grid */}
          <motion.div initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-50px'
        }} variants={pricingSectionContainerVariants} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_SECTION_PLANS.map(plan => <motion.article key={plan.name} variants={pricingSectionItemVariants} className={`relative flex flex-col justify-between gap-6 rounded-[20px] border p-6 lg:p-8 ${plan.isPro ? 'border-[#f37d39]/40 bg-gradient-to-b from-[#fcb827]/20 via-white/90 to-[#faf8f9] shadow-[0_12px_24px_0_rgba(243,125,57,0.16)]' : 'border-[#979093]/20 bg-[#faf8f9] shadow-[0_8px_20px_0_rgba(48,33,39,0.08)]'}`}>
                {/* Optional top glare effect for Pro */}
                {plan.isPro && <span className="pointer-events-none absolute inset-[1px] rounded-[20px]" style={{
              background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0) 46%)'
            }} aria-hidden="true" />}

                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[28px] font-bold tracking-tight text-[#302127]">{plan.name}</h3>
                    {plan.badge && <span className="rounded-full border border-[#f37d39]/30 bg-[#f37d39]/10 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#f37d39]">
                        {plan.badge}
                      </span>}
                  </div>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#302127]">{plan.description}</p>

                  <div className="mt-6 flex-grow">
                    {plan.price ? <div>
                        <div className="flex items-end gap-2">
                          <span className="text-[44px] font-bold leading-none tracking-tight text-[#302127]">
                            <span>${isYearly ? plan.price.yearly : plan.price.monthly}</span>
                          </span>
                          <span className="mb-1.5 text-[16px] font-semibold text-[#979093]">/month</span>
                        </div>
                        <p className="mt-2 text-[14px] font-medium text-[#bfb8bc]">
                          <span>Billed </span>
                          <span className="text-[#302127]">{isYearly ? 'annually' : 'monthly'}</span>
                          <span>{plan.isPro ? ', per workspace.' : '.'}</span>
                        </p>
                      </div> : <div>
                        <p className="text-[42px] font-bold leading-none tracking-tight text-[#302127]">
                          {plan.customPrice}
                        </p>
                        <p className="mt-2.5 text-[14px] font-medium leading-snug text-[#979093]">{plan.customNote}</p>
                      </div>}
                  </div>
                </div>

                <div className="relative z-10 flex flex-col gap-6">
                  <a href="#" onClick={e => e.preventDefault()} className="group relative flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full border border-[#f37d39]/30 bg-[#fcb827] px-5 text-[16px] font-bold text-[#2a1f16] shadow-[0_5px_0_0_#f37d39,0_8px_14px_0_rgba(48,33,39,0.1)] transition-transform hover:-translate-y-[2px]">
                    {/* Button Glare Effect */}
                    <span className="pointer-events-none absolute inset-0 opacity-60 transition-transform duration-300 group-hover:translate-x-4" style={{
                  backgroundImage: 'linear-gradient(112deg, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 0.34) 44%, rgba(255, 255, 255, 0) 68%)'
                }} aria-hidden="true" />
                    <span className="relative z-10">{plan.cta}</span>
                  </a>

                  <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                    {plan.features.map(feature => <li key={feature} className="flex items-start gap-3 text-[16px] leading-relaxed text-[#302127]">
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${plan.isPro ? 'bg-[#f37d39]/90' : 'bg-[#979093]/90'}`} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                </div>
              </motion.article>)}
          </motion.div>

          {/* Footer Details Link */}
          <motion.div initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="mt-10 text-center">
            <a href="#" onClick={e => e.preventDefault()} className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#979093]/30 bg-white px-8 text-[16px] font-bold text-[#302127] transition-colors hover:bg-gray-50">
              <span>View all billing details</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============= SECTION 4: COMPARISON TABLE ============= */}
      <section className="px-4 py-16 sm:px-6 lg:px-12 lg:py-24" style={{
      fontFamily: 'Onest, sans-serif',
      background: "#eaf5f8"
    }}>
        <div className="mx-auto max-w-[1320px] touch-pan-x overflow-y-visible">
          <div className="mb-10 text-center">
            <h2 className="text-[34px] font-extrabold tracking-tight text-[#302127] sm:text-[44px]" style={{
            fontFamily: 'Onest, sans-serif'
          }}>
              <span style={{
              fontFamily: "Rodger Test"
            }}>Compare all </span>
              <span className="text-[#FCB827]" style={{
              fontFamily: "Rodger Test"
            }}>Loyaltymaster</span>
              <br />
              <span style={{
              fontFamily: "Rodger Test"
            }}>plans and features</span>
            </h2>
          </div>

          <div className="relative rounded-[24px] border border-[#DFD3CF] bg-white shadow-[0_20px_50px_-20px_rgba(48,33,39,0.18)]">
            <div className="overflow-x-auto overscroll-x-contain touch-pan-x rounded-[24px] [-webkit-overflow-scrolling:touch]">
              <table className="w-full min-w-[480px] sm:min-w-[760px] lg:min-w-[860px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="sticky top-0 z-10 w-[34%] bg-white px-3 py-4 sm:px-6 sm:py-5 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#6F6368]">
                      Key features
                    </th>
                    <th className="sticky top-0 z-10 w-[22%] bg-[#FEF0E9] px-3 py-4 sm:px-6 sm:py-5 text-left">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="inline-flex h-6 items-center rounded-full bg-white px-2.5 text-[11px] font-bold uppercase tracking-wide text-[#302127] ring-1 ring-[#DFD3CF]">
                          Business
                        </span>
                        <span className="text-[11px] font-semibold text-[#FCB827]">Get started free</span>
                      </div>
                    </th>
                    <th className="sticky top-0 z-10 w-[22%] bg-[#F0F4F8] px-3 py-4 sm:px-6 sm:py-5 text-left">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="inline-flex h-6 items-center rounded-full px-2.5 text-[11px] font-bold uppercase tracking-wide text-[#2A1F16]" style={{
                        background: '#FCB827'
                      }}>
                          Agency
                        </span>
                        <span className="text-[11px] font-semibold text-[#FCB827]">Get started free</span>
                      </div>
                    </th>
                    <th className="sticky top-0 z-10 w-[22%] bg-[#FEF0E9] px-3 py-4 sm:px-6 sm:py-5 text-left">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="inline-flex h-6 items-center rounded-full bg-white px-2.5 text-[11px] font-bold uppercase tracking-wide text-[#302127] ring-1 ring-[#DFD3CF]">
                          Franchise
                        </span>
                        <span className="text-[11px] font-semibold text-[#FCB827]">Get started free</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_GROUPS[0].rows.map((row, i) => <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F4EAE6]'}>
                      <td className="px-3 py-3 sm:px-6 sm:py-3.5 text-[12px] sm:text-[13px] font-medium text-[#302127]">
                        {row.label}
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-3.5 text-[12px] sm:text-[13px] text-[#302127]">
                        {renderCell(row.business)}
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-3.5 text-[12px] sm:text-[13px] text-[#302127]">
                        {renderCell(row.agency, true)}
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-3.5 text-[12px] sm:text-[13px] text-[#302127]">
                        {renderCell(row.franchise)}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            {/* Right-edge scroll hint shadow (mobile/tablet only) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-8 lg:hidden" style={{
            background: 'linear-gradient(to left, rgba(48,33,39,0.10), rgba(48,33,39,0))'
          }} />
          </div>
          {/* Scroll hint text (mobile only) */}
          <p className="mt-3 text-center text-[12px] font-medium text-[#6F6368] sm:hidden" aria-hidden="true">
            <span>Swipe to see all plans →</span>
          </p>
        </div>
      </section>

      {/* ============= SECTION 5: CTA BANNER ============= */}
      <section className="px-6 pb-16 lg:px-12 lg:pb-24" style={{
      display: "none"
    }}>
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[32px] px-8 py-14 text-center lg:px-12" style={{
        background: 'radial-gradient(circle at 20% 30%, #EADDFF 0%, transparent 50%), radial-gradient(circle at 80% 60%, #D8CDFF 0%, transparent 55%), linear-gradient(135deg, #F4EEFF 0%, #E9DFFF 100%)'
      }}>
          <h3 className="mx-auto max-w-2xl text-[32px] font-extrabold tracking-tight text-[#1A1535] sm:text-[40px]">
            <span>Need more features</span>
            <br />
            <span>or </span>
            <span className="text-[#6B4EFF]">limits?</span>
          </h3>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[#5C5278]">
            Everything is possible with Enterprise plan.
          </p>
          <a href="#" onClick={e => e.preventDefault()} className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#1A1535] px-7 text-[14px] font-semibold text-white transition hover:bg-[#2A2354]">
            <span>Contact sales</span>
          </a>
        </div>
      </section>

      {/* ============= SECTION 6: VIDEO / SOLUTION ============= */}
      <section className="px-6 pb-16 lg:px-12 lg:pb-24" style={{
      display: "none"
    }}>
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-[32px] font-extrabold leading-tight tracking-tight text-[#1A1535] sm:text-[40px]">
              <span>Don't have a time to learn </span>
              <br className="hidden sm:block" />
              <span>how it works?</span>
              <br />
              <span className="text-[#6B4EFF]">There is a solution</span>
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#5C5278]">
              Our team will help to define the strategy, fully customize your dashboard, help with the implementation and training of employees, and we will follow the statistics.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#" onClick={e => e.preventDefault()} className="inline-flex h-12 items-center justify-center rounded-full bg-[#6B4EFF] px-7 text-[14px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(107,78,255,0.55)] transition hover:bg-[#5A3FE0]">
                <span>Contact sales</span>
              </a>
              <a href="#" onClick={e => e.preventDefault()} className="inline-flex h-12 items-center justify-center rounded-full border border-[#E4DDFA] bg-white px-7 text-[14px] font-semibold text-[#1A1535] hover:bg-[#F8F7FF]">
                <span>Learn more</span>
              </a>
            </div>
          </div>

          {/* Illustrated mascot card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] p-10 lg:p-14" style={{
            background: 'linear-gradient(135deg, #EADDFF 0%, #D8CDFF 60%, #C7B8FF 100%)'
          }}>
              {/* Mascot SVG */}
              <svg viewBox="0 0 240 240" className="mx-auto h-56 w-56" aria-hidden="true">
                <defs>
                  <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7C5BFF" />
                    <stop offset="100%" stopColor="#5A3FE0" />
                  </linearGradient>
                </defs>
                {/* head */}
                <rect x="60" y="40" width="120" height="110" rx="28" fill="url(#bodyGrad)" />
                {/* antenna */}
                <line x1="120" y1="40" x2="120" y2="20" stroke="#1A1535" strokeWidth="4" strokeLinecap="round" />
                <circle cx="120" cy="16" r="6" fill="#FCB827" />
                {/* eyes */}
                <circle cx="95" cy="90" r="10" fill="white" />
                <circle cx="145" cy="90" r="10" fill="white" />
                <circle cx="95" cy="92" r="4" fill="#1A1535" />
                <circle cx="145" cy="92" r="4" fill="#1A1535" />
                {/* smile */}
                <path d="M95 120 Q 120 138 145 120" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
                {/* body */}
                <rect x="75" y="155" width="90" height="55" rx="14" fill="#1A1535" />
                {/* phone in hand */}
                <rect x="170" y="120" width="32" height="50" rx="6" fill="white" stroke="#1A1535" strokeWidth="3" />
                <rect x="175" y="128" width="22" height="30" rx="2" fill="#FCB827" />
              </svg>

              {/* tiny floating chips */}
              <div className="absolute left-6 top-8 rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-[#1A1535] shadow backdrop-blur">
                +250 points
              </div>
              <div className="absolute bottom-10 right-8 rounded-full bg-[#FCB827] px-3 py-1.5 text-[11px] font-bold text-[#1A1535] shadow">
                ★ Loyal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= SECTION 7: SUPPORT ============= */}
      <section className="px-6 py-20 lg:px-12 lg:py-28" style={{
      background: 'linear-gradient(180deg, #F4EEFF 0%, #EADDFF 100%)',
      display: "none"
    }}>
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-[34px] font-extrabold leading-tight tracking-tight text-[#1A1535] sm:text-[44px]">
              <span>The </span>
              <span className="text-[#6B4EFF]">support you need</span>
              <span>,</span>
              <br />
              <span>when you need it</span>
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#5C5278]">
              We are here to support you 24/7 by any questions. Feel free to try it.
            </p>

            <div className="mt-8 rounded-[24px] border border-white bg-white/70 p-6 backdrop-blur">
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#6B4EFF]">
                All Boomerang clients have
              </p>
              <p className="mt-1 text-[22px] font-extrabold text-[#1A1535]">access to</p>
              <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-[#2A2354]">
                <li className="flex items-center gap-2.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#22C55E]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>24/7 support in chat</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#22C55E]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>A dedicated Customer Success Manager</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#22C55E]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>Strategic coaching with a loyalty marketing expert</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Avatar cluster */}
          <div className="relative h-[420px] w-full">
            <SupportAvatarCluster />
          </div>
        </div>
      </section>

      {/* ============= SECTION 8: TESTIMONIALS ============= */}
      <section className="px-6 py-20 lg:px-12 lg:py-28" style={{
      display: "none"
    }}>
        <div className="mx-auto max-w-[1320px]">
          <h3 className="text-center text-[34px] font-extrabold tracking-tight text-[#1A1535] sm:text-[44px]">
            <span>Hear from </span>
            <span className="relative inline-block">
              <span className="relative z-10 text-[#6B4EFF]">our clients</span>
              <svg className="absolute -bottom-1 left-0 z-0 w-full" viewBox="0 0 250 12" fill="none" aria-hidden="true">
                <path d="M2 8 Q 60 1 130 5 T 248 4" stroke="#FCB827" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h3>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-80px'
        }} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(t => <motion.article key={t.title} variants={fadeUp} className="flex flex-col rounded-[24px] border border-[#E8E2F8] bg-white p-7 shadow-[0_10px_30px_-15px_rgba(107,78,255,0.18)] transition hover:shadow-[0_20px_40px_-15px_rgba(107,78,255,0.25)]">
                <span className="inline-flex w-fit items-center rounded-full bg-[#F0EBFF] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6B4EFF]">
                  {t.tag}
                </span>
                <div className="mt-4 flex items-center gap-0.5" aria-label="5 star rating">
                  {[0, 1, 2, 3, 4].map(s => <Star key={s} className="h-4 w-4 fill-[#FCB827] text-[#FCB827]" aria-hidden="true" />)}
                </div>
                <h4 className="mt-4 text-[17px] font-bold leading-snug text-[#1A1535]">
                  {t.title}
                </h4>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#5C5278]">
                  {t.body}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#F0EBFF] pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold text-white" style={{
                background: 'linear-gradient(135deg, #7C5BFF 0%, #5A3FE0 100%)'
              }} aria-hidden="true">
                    {t.author.charAt(0)}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#1A1535]">{t.author}</span>
                    <span className="text-[12px] text-[#8A7FB0]">{t.role}</span>
                  </div>
                </div>
              </motion.article>)}
          </motion.div>

          <div className="mt-10 flex justify-center">
            <a href="#" onClick={e => e.preventDefault()} className="inline-flex h-12 items-center justify-center rounded-full border border-[#E4DDFA] bg-white px-7 text-[14px] font-semibold text-[#1A1535] hover:bg-[#F8F7FF]">
              <span>Show more</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============= SECTION 9: FAQ ============= */}
      <section className="px-6 pb-24 lg:px-12" style={{
      display: "none"
    }}>
        <div className="mx-auto max-w-[860px]">
          <h3 className="text-center text-[30px] font-extrabold tracking-tight text-[#1A1535] sm:text-[40px]">
            FAQ
          </h3>

          <ul className="mt-10 flex flex-col divide-y divide-[#E8E2F8] border-t border-b border-[#E8E2F8]">
            {FAQS.map((item, idx) => {
            const open = openFAQ === idx;
            return <li key={item.q}>
                  <button type="button" onClick={() => setOpenFAQ(open ? null : idx)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-[#6B4EFF]">
                    <span className="text-[16px] font-semibold text-[#1A1535]">{item.q}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E4DDFA] transition ${open ? 'rotate-180 bg-[#6B4EFF] text-white' : 'text-[#6B4EFF]'}`} aria-hidden="true">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: 'auto',
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1]
                }} className="overflow-hidden">
                        <p className="pb-5 pr-12 text-[14px] leading-relaxed text-[#5C5278]">
                          {item.a}
                        </p>
                      </motion.div>}
                  </AnimatePresence>
                </li>;
          })}
          </ul>
        </div>
      </section>

      <section className="relative w-full bg-white py-[84px]">
        <div className="mx-auto w-full max-w-[840px] px-6 md:px-12">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }} className="text-center">
            <p className="mb-[14px] text-base font-bold uppercase tracking-[-0.2px] text-[#979093]">FAQ</p>
            <h2 className="m-0 text-4xl font-bold leading-[1.05] tracking-[-0.2px] text-[#302127] md:text-[52px]">Frequently Asked Questions</h2>
          </motion.div>
          <div className="mt-[30px] grid gap-3">
            {[{
            question: 'How quickly can I launch my first campaign?',
            answer: 'Most teams launch in under one hour using prebuilt flows and templates.'
          }, {
            question: 'Can I import customers from my current tools?',
            answer: 'Yes. CSV import and common integrations are supported for fast migration.'
          }, {
            question: 'Will this work for multiple locations?',
            answer: 'Yes. You can segment by location and run local campaigns from one account.'
          }, {
            question: 'How do you handle opt-outs and compliance?',
            answer: 'Built-in consent handling and auto opt-out management are included by default.'
          }, {
            question: 'Do I need technical support to set this up?',
            answer: 'No. Setup is no-code and designed for operators, marketers, and founders.'
          }, {
            question: 'Can I measure actual revenue impact?',
            answer: 'Yes. Dashboard reports tie messages to bookings, visits, and attributed revenue.'
          }].map((faq, index) => {
            const isOpen = faqOpenIndex === index;
            return <motion.div key={faq.question} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: '-50px'
            }} transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }} className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-[#f37d39]/30 bg-[#fbfcfd] shadow-[0_10px_18px_0_rgba(48,33,39,0.1)]' : 'border-[#979093]/30 bg-[#faf8f9] hover:border-[#979093]/50 hover:bg-[#f4f1f2]'}`}>
                  <button onClick={() => setFaqOpenIndex(isOpen ? null : index)} className="flex w-full cursor-pointer items-center justify-between p-[18px_20px] text-left focus:outline-none">
                    <span className={`text-lg font-bold tracking-[-0.4px] md:text-xl ${isOpen ? 'text-[#f37d39]' : 'text-[#302127]'} transition-colors duration-200`}>{faq.question}</span>
                    <motion.div animate={{
                  rotate: isOpen ? 45 : 0
                }} transition={{
                  duration: 0.2,
                  ease: 'easeOut'
                }} className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center text-[#f37d39]">
                      <Plus className="h-6 w-6 stroke-[3]" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: 'auto',
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  height: {
                    duration: 0.3,
                    ease: 'easeOut'
                  },
                  opacity: {
                    duration: 0.2
                  }
                }}>
                        <div className="px-[20px] pb-[18px] pt-1 text-base leading-relaxed tracking-[-0.4px] text-[#302127]/80 md:text-lg"><p className="m-0">{faq.answer}</p></div>
                      </motion.div>}
                  </AnimatePresence>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* ============= SECTION 10: FOOTER ============= */}
      <section className="w-full bg-[#FEF0E9] py-24 md:py-28 px-4 overflow-hidden relative">
        <div className="max-w-[796px] mx-auto px-4 md:px-12 relative">
          <motion.div className="text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <p className="text-[#979093] text-base leading-none tracking-[-0.2px] uppercase font-bold mb-3.5">
              30-Day Trial
            </p>
            <h2 className="text-[#302127] text-4xl md:text-[52px] leading-tight md:leading-[54.6px] tracking-[-0.2px] font-bold m-0 font-sans" style={{
            fontFamily: "Rodger Test"
          }}>
              Start Your Tenant Trial in Minutes
            </h2>
            <p className="text-[#302127] text-lg md:text-[20px] leading-relaxed md:leading-[31.2px] tracking-[-0.4px] font-normal mt-4 max-w-[720px] mx-auto">
              Complete this quick form to launch your 30-day trial and start messaging your customers with SetupFlow.
            </p>
          </motion.div>

          <motion.form onSubmit={handleTrialSubmit} className="mt-8 p-6 md:p-7 rounded-[20px] bg-gradient-to-b from-white/90 to-white border border-[#979093]/30 shadow-[0_12px_24px_0_rgba(48,33,39,0.1)] relative flex flex-col gap-[18px]" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.6,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <span className="absolute inset-[1px] rounded-[20px] bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

            {isTrialSuccess ? <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} className="relative z-10 bg-[#4C93AF]/10 border border-[#4C93AF]/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#4C93AF] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-[#302127] text-2xl font-bold mb-2">You're all set!</h3>
                <p className="text-[#4C93AF] font-medium">Your 30-day trial has been activated.</p>
                <button type="button" onClick={() => setIsTrialSuccess(false)} className="mt-6 text-sm font-bold text-[#979093] hover:text-[#302127] transition-colors">
                  <span>Submit another request</span>
                </button>
              </motion.div> : <React.Fragment>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                      <span>Full Name </span><span className="text-[#F37D39]">*</span>
                    </label>
                    <input id="fullName" name="fullName" type="text" autoComplete="name" required placeholder="Jane Smith" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="businessName" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                      <span>Business Name </span><span className="text-[#F37D39]">*</span>
                    </label>
                    <input id="businessName" name="businessName" type="text" autoComplete="organization" required placeholder="Acme Wellness Studio" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="businessEmail" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                      <span>Business Email </span><span className="text-[#F37D39]">*</span>
                    </label>
                    <input id="businessEmail" name="businessEmail" type="email" autoComplete="email" required placeholder="name@business.com" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="businessLocation" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                      <span>Business Location </span><span className="text-[#F37D39]">*</span>
                    </label>
                    <input id="businessLocation" name="businessLocation" type="text" autoComplete="address-level2" required placeholder="City, State, Country" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                  </div>

                  <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                    <label htmlFor="businessWebsite" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                      <span>Business Website</span>
                    </label>
                    <input id="businessWebsite" name="businessWebsite" type="url" autoComplete="url" placeholder="https://example.com" aria-describedby="website-help" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                    <p id="website-help" className="text-[#979093] text-[13px] font-medium m-0 leading-[16px] tracking-[-0.2px]">
                      <span>Optional - include this if your business has a website.</span>
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-2">
                  <button type="submit" disabled={isTrialSubmitting} className="group w-full min-h-[58px] bg-[#FCB827] text-[#2A1F16] text-[20px] font-bold tracking-[-0.4px] rounded-full border border-[#F37D39]/30 shadow-[0_5px_0_0_#F37D39,0_8px_14px_0_rgba(48,33,39,0.1)] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#F37D39,0_4px_8px_0_rgba(48,33,39,0.1)] active:translate-y-[5px] active:shadow-[0_0_0_0_#F37D39,0_0_0_0_rgba(48,33,39,0)] transition-all duration-200 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                    {isTrialSubmitting ? <React.Fragment>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#2A1F16]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing...</span>
                      </React.Fragment> : <span>Start 30-Day Trial</span>}
                  </button>
                </div>
              </React.Fragment>}
          </motion.form>
        </div>

        <style>{`
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </section>

      {/* ============= SECTION 11: TESTIMONIALS FEEDBACK ============= */}
      <section className="relative w-full bg-white py-[68px] pb-[84px]">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-100px'
        }} variants={itemVariants} className="text-center">
            <p className="mb-[14px] text-[16px] font-bold uppercase leading-none tracking-[-0.2px] text-[#979093]">Customer feedback</p>
            <h2 className="m-0 text-[40px] font-bold leading-[1.05] tracking-[-0.2px] text-[#302127] md:text-[52px]">Loved by Teams Worldwide</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-[18px] font-normal leading-relaxed tracking-[-0.4px] text-[#979093] md:text-[20px]">See what local teams are saying about how SetupFlow improves response rates, reduces manual work, and keeps customers coming back.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-50px'
        }} variants={containerVariants} className="mt-[34px] grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {FEEDBACK_TESTIMONIALS.map(testimonial => <motion.article key={testimonial.id} variants={itemVariants} className="group relative flex flex-col gap-[14px] overflow-hidden rounded-[16px] border border-[#979093]/30 bg-[#faf8f9] p-5 md:p-[22px]">
                <div className="flex items-center gap-1 text-[#fcb827]">{[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-5 w-5 fill-current" strokeWidth={0} />)}</div>
                <p className="m-0 text-[18px] font-normal italic leading-normal tracking-[-0.4px] text-[#302127]">{testimonial.quote}</p>
                <div className="mt-auto pt-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[16px] font-bold tracking-[-0.2px] shadow-[0_6px_12px_0_rgba(48,33,39,0.12)]" style={{
                backgroundColor: testimonial.avatarBg,
                color: testimonial.avatarText
              }}>{testimonial.initials}</div>
                  <div className="flex flex-col gap-1.5">
                    <p className="m-0 text-[16px] font-semibold leading-none tracking-[-0.2px] text-[#bfb8bc]">{testimonial.name}</p>
                    <p className="m-0 text-[14px] font-medium leading-none tracking-[-0.2px] text-[#979093]">{testimonial.role}</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[16px] bg-gradient-to-b from-white/40 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
              </motion.article>)}
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#11102A] text-white" style={{
      display: "none"
    }}>
        <div className="mx-auto max-w-[1320px] px-6 pt-20 pb-8 lg:px-12">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <a href="#" onClick={e => e.preventDefault()} className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg text-white" style={{
                background: 'linear-gradient(135deg, #7C5BFF 0%, #6B4EFF 100%)'
              }} aria-hidden="true">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <span className="text-[17px] font-extrabold tracking-tight">Boomerang</span>
              </a>
              <p className="mt-5 max-w-[220px] text-[13px] leading-relaxed text-white/60">
                Try Boomerang for free. No credit card required.
              </p>
              <div className="mt-6 flex items-center gap-2">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => <a key={i} href="#" onClick={e => e.preventDefault()} aria-label="Social link" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#6B4EFF] hover:text-white">
                    <Icon className="h-4 w-4" />
                  </a>)}
              </div>
            </div>

            {FOOTER_COLS.map(col => <div key={col.title}>
                <h5 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/50">
                  {col.title}
                </h5>
                <ul className="mt-4 flex flex-col gap-2.5 text-[13px] text-white/75">
                  {col.links.map(l => <li key={l}>
                      <a href="#" onClick={e => e.preventDefault()} className="transition hover:text-white">
                        {l}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-white/50 sm:flex-row sm:items-center">
            <span>© 2025 Boomerang. All Rights Reserved.</span>
            <div className="flex items-center gap-5">
              <a href="#" onClick={e => e.preventDefault()} className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" onClick={e => e.preventDefault()} className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" onClick={e => e.preventDefault()} className="hover:text-white">
                Cookies
              </a>
            </div>
          </div>

          {/* Watermark */}
          <div className="mt-10 select-none overflow-hidden">
            <h2 className="whitespace-nowrap text-center font-extrabold leading-none tracking-tighter" style={{
            fontSize: 'clamp(80px, 18vw, 280px)',
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0) 95%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
              Boomerang
            </h2>
          </div>
        </div>
      </footer>
    </div>;
};

/* ============================================================
   SUB-COMPONENTS
============================================================ */

const renderCell = (cell: CellValue, highlight = false): React.ReactNode => {
  if (cell.kind === 'check') {
    return <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${highlight ? 'bg-[#FCB827]' : 'bg-[#FCB827]'}`} aria-label="Included">
        <Check className="h-3.5 w-3.5 text-[#2A1F16]" strokeWidth={3} aria-hidden="true" />
      </span>;
  }
  if (cell.kind === 'x') {
    return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F4EAE6]" aria-label="Not included">
        <X className="h-3.5 w-3.5 text-[#6F6368]" strokeWidth={3} aria-hidden="true" />
      </span>;
  }
  return <span className={highlight ? 'font-semibold text-[#FCB827]' : ''}>{cell.value}</span>;
};
const SupportAvatarCluster: React.FC = () => {
  const avatars = [{
    x: '50%',
    y: '50%',
    size: 110,
    hue: '#7C5BFF',
    label: 'AM',
    primary: true
  }, {
    x: '18%',
    y: '20%',
    size: 72,
    hue: '#9B7CFF',
    label: 'JT'
  }, {
    x: '82%',
    y: '24%',
    size: 68,
    hue: '#5A3FE0',
    label: 'SR'
  }, {
    x: '12%',
    y: '70%',
    size: 64,
    hue: '#B8A6FF',
    label: 'NK'
  }, {
    x: '78%',
    y: '78%',
    size: 78,
    hue: '#6B4EFF',
    label: 'EM'
  }, {
    x: '45%',
    y: '14%',
    size: 48,
    hue: '#FCB827',
    label: '★'
  }, {
    x: '88%',
    y: '52%',
    size: 44,
    hue: '#FCB827',
    label: '+'
  }, {
    x: '8%',
    y: '46%',
    size: 40,
    hue: '#22C55E',
    label: '✓'
  }];
  return <div className="relative h-full w-full">
      {avatars.map((a, i) => <motion.div key={i} initial={{
      opacity: 0,
      scale: 0.7
    }} whileInView={{
      opacity: 1,
      scale: 1
    }} viewport={{
      once: true
    }} transition={{
      delay: i * 0.07,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow-[0_10px_30px_-8px_rgba(107,78,255,0.4)]" style={{
      left: a.x,
      top: a.y,
      width: a.size,
      height: a.size,
      background: `linear-gradient(135deg, ${a.hue} 0%, rgba(255,255,255,0.15) 100%), ${a.hue}`
    }} aria-hidden="true">
          <span className="flex h-full w-full items-center justify-center rounded-full font-bold text-white" style={{
        fontSize: a.size * 0.32
      }}>
            {a.label}
          </span>
          {a.primary && <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#22C55E] text-[10px] font-bold text-white">
              24/7
            </span>}
        </motion.div>)}
      {/* Decorative orbit ring */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <ellipse cx="200" cy="200" rx="170" ry="140" stroke="#6B4EFF" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.3" />
      </svg>
    </div>;
};