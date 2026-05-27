import * as React from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Star, Users, Lock, Play, ArrowRight, Coffee, Sparkles, MessageSquare } from 'lucide-react';
type StepCard = {
  number: string;
  title: string;
  body: string;
  Icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
  }>;
  bg: string;
  border: string;
  badgeBg: string;
  badgeText: string;
  iconColor: string;
};
const STEPS: StepCard[] = [{
  number: '01',
  title: 'Check Your Email',
  body: "A welcome email with your login link and quick-start guide is on its way. Check your spam folder if it doesn't arrive within 5 minutes.",
  Icon: Mail,
  bg: 'bg-[#FEF0E9]',
  border: 'border-[#F37D39]/20',
  badgeBg: 'bg-[#F37D39]',
  badgeText: 'text-white',
  iconColor: 'text-[#F37D39]'
}, {
  number: '02',
  title: 'Set Up Your Loyalty Program',
  body: 'Log in to your dashboard and create your first loyalty card in minutes. Choose from stamp cards, points, memberships, and more.',
  Icon: Star,
  bg: 'bg-[#EAF5F8]',
  border: 'border-[#4C93AF]/20',
  badgeBg: 'bg-[#4C93AF]',
  badgeText: 'text-white',
  iconColor: 'text-[#4C93AF]'
}, {
  number: '03',
  title: 'Invite Your First Customers',
  body: 'Share your loyalty card link via SMS, email, or in-store QR code. Start building your customer list from day one.',
  Icon: Users,
  bg: 'bg-[#FEF9E6]',
  border: 'border-[#FCB827]/30',
  badgeBg: 'bg-[#FCB827]',
  badgeText: 'text-[#2A1F16]',
  iconColor: 'text-[#B8851C]'
}];
const TRIAL_INCLUDES: string[] = ['Unlimited loyalty cards and stamp programs', 'SMS & email campaign tools', 'Customer database and contact management', 'Automation workflows and drip campaigns', 'Real-time analytics and performance dashboard', 'Dedicated onboarding support'];
const SOCIAL_LOGOS: string[] = ['Café Nova', 'GlowSpa', 'Urban Cuts', 'PetStop', 'QuickFit'];
type AvatarSpec = {
  initials: string;
  bg: string;
  text: string;
};
const SUPPORT_AVATARS: AvatarSpec[] = [{
  initials: 'JM',
  bg: 'bg-[#FCB827]',
  text: 'text-[#2A1F16]'
}, {
  initials: 'RK',
  bg: 'bg-[#F37D39]',
  text: 'text-white'
}, {
  initials: 'AL',
  bg: 'bg-[#4C93AF]',
  text: 'text-white'
}];
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15
    }
  }
};
const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
export const TrialThankYouPage: React.FC = () => {
  return <main className="w-full min-h-screen bg-[#FEF0E9] text-[#302127]" style={{
    fontFamily: 'var(--font-body)'
  }}>
      {/* ============ SECTION 1 — HERO CONFIRMATION ============ */}
      <section className="relative w-full bg-[#FEF0E9] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-[84px]">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center text-center">
            {/* Animated checkmark */}
            <motion.div initial={{
            scale: 0,
            rotate: -15
          }} animate={{
            scale: 1,
            rotate: 0
          }} transition={{
            type: 'spring',
            stiffness: 180,
            damping: 12,
            delay: 0.1
          }} className="relative mb-8">
              <div className="w-20 h-20 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center" style={{
              display: "none"
            }}>
                <motion.div initial={{
                scale: 0,
                opacity: 0
              }} animate={{
                scale: 1,
                opacity: 1
              }} transition={{
                type: 'spring',
                stiffness: 220,
                damping: 14,
                delay: 0.35
              }}>
                  <Check className="w-10 h-10 text-[#22C55E]" strokeWidth={3} style={{
                  display: "none"
                }} />
                </motion.div>
              </div>
              {/* tiny sparkle accents */}
              <motion.span aria-hidden="true" initial={{
              opacity: 0,
              scale: 0
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.7,
              duration: 0.4
            }} className="absolute -top-2 -right-3" style={{
              display: "none"
            }}>
                <Sparkles className="w-4 h-4 text-[#FCB827]" />
              </motion.span>
            </motion.div>

            <motion.p variants={fadeUp} className="uppercase font-bold tracking-tight text-[#979093] text-[16px] mb-5">
              <span style={{
              display: "none"
            }}>You&apos;re in!</span>
            </motion.p>

            <motion.h1 variants={fadeUp} className="font-bold text-[#302127] text-[40px] sm:text-[52px] md:text-[64px] leading-[1.02] tracking-tight max-w-[920px]" style={{
            fontFamily: 'var(--font-heading)'
          }}>
              <span>Welcome to Your 30-Day </span>
              <span className="relative inline-block">
                <span className="relative z-10">LoyaltyMaster</span>
                <span aria-hidden="true" className="absolute left-0 right-0 bottom-1 h-[10px] md:h-[14px] bg-[#FCB827]/60 -z-0 rounded-sm" />
              </span>
              <span> Trial</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-7 text-[18px] md:text-[20px] text-[#302127]/85 max-w-[640px] leading-[1.55]">
              <span style={{
              fontFamily: "Onest"
            }}>
                Your account is being set up. Check your inbox for a confirmation email with your
                login details and onboarding guide. We&apos;re excited to help you grow.
              </span>
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button type="button" className="group inline-flex items-center gap-2 bg-[#FCB827] text-[#2A1F16] rounded-full px-8 py-4 font-bold text-[18px] shadow-[0_5px_0_0_#F37D39] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#F37D39] active:translate-y-[4px] active:shadow-[0_1px_0_0_#F37D39] transition-all duration-150">
                <span>Go to My Dashboard</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} style={{
                display: "none"
              }} />
              </button>
              <button type="button" className="inline-flex items-center gap-2 border-2 border-[#DFD3CF] text-[#302127] rounded-full px-8 py-4 font-semibold text-[18px] hover:bg-[#FEF0E9] hover:border-[#302127]/30 transition-colors duration-200 bg-white/40 backdrop-blur-sm" style={{
              display: "none"
            }}>
                <Play className="w-4 h-4 fill-[#302127]" strokeWidth={0} />
                <span>Watch Setup Guide</span>
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-2 text-[#979093] text-[14px]">
              <Lock className="w-3.5 h-3.5" strokeWidth={2.2} style={{
              display: "none"
            }} />
              <span style={{
              display: "none"
            }}>No credit card required. Cancel anytime.</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ SECTION 2 — WHAT HAPPENS NEXT ============ */}
      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-[84px]">
          <motion.div initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-100px'
        }} variants={stagger} className="flex flex-col items-center text-center mb-14">
            <motion.h2 variants={fadeUp} className="font-bold text-[36px] md:text-[48px] text-[#302127] leading-[1.05] tracking-tight" style={{
            fontFamily: 'var(--font-heading)'
          }}>
              <span>What happens next?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[#979093] text-[18px] max-w-[560px]">
              <span>Here&apos;s everything you can expect over the next few minutes.</span>
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-100px'
        }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {STEPS.map(step => <motion.article key={step.number} variants={fadeUp} className={`${step.bg} ${step.border} group rounded-[20px] p-[26px] border shadow-[0_8px_20px_0_rgba(48,33,39,0.06)] hover:-translate-y-1 hover:shadow-[0_14px_28px_0_rgba(48,33,39,0.10)] transition-all duration-300`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`${step.badgeBg} ${step.badgeText} w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] tracking-tight`}>
                    <span>{step.number}</span>
                  </div>
                  <div className={`${step.iconColor} opacity-90`}>
                    <step.Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="font-bold text-[20px] text-[#302127] mb-3 leading-tight" style={{
              fontFamily: 'var(--font-heading)'
            }}>
                  <span>{step.title}</span>
                </h3>
                <p className="text-[#302127]/80 text-[16px] leading-[1.55]">
                  <span>{step.body}</span>
                </p>
              </motion.article>)}
          </motion.div>
        </div>
      </section>

      {/* ============ SECTION 3 — TRIAL INCLUDES ============ */}
      <section className="w-full bg-[#FEF0E9]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-[84px]">
          <motion.div initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-100px'
        }} variants={stagger} className="grid items-center gap-12 lg:gap-[48px]" style={{
          gridTemplateColumns: 'minmax(0, 1fr)'
        }}>
            <div className="grid items-center gap-12 lg:gap-[48px]" style={{
            gridTemplateColumns: 'minmax(0, 1fr)'
          }}>
              <div className="grid grid-cols-1 lg:[grid-template-columns:minmax(0,560px)_minmax(0,560px)] gap-12 lg:gap-[48px] items-center">
                {/* LEFT — text + checklist */}
                <motion.div variants={fadeUp} className="flex flex-col">
                  <p className="uppercase font-bold tracking-tight text-[#979093] text-[14px] mb-4">
                    <span>Your 30-day trial includes</span>
                  </p>
                  <h2 className="font-bold text-[36px] md:text-[48px] text-[#302127] leading-[1.05] tracking-tight" style={{
                  fontFamily: 'var(--font-heading)'
                }}>
                    <span>Everything you need to launch and grow.</span>
                  </h2>

                  <ul className="mt-8 flex flex-col gap-4">
                    {TRIAL_INCLUDES.map(item => <li key={item} className="flex items-start gap-3.5">
                        <span aria-hidden="true" className="mt-0.5 w-6 h-6 rounded-md bg-[#FCB827] flex items-center justify-center shrink-0 shadow-[0_2px_0_0_#F37D39]">
                          <Check className="w-4 h-4 text-[#2A1F16]" strokeWidth={3} />
                        </span>
                        <span className="text-[#302127] text-[17px] leading-[1.5]">{item}</span>
                      </li>)}
                  </ul>
                </motion.div>

                {/* RIGHT — Loyalty card mockup */}
                <motion.div variants={fadeUp} className="relative flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1513201099705-a9746072f579?auto=format&fit=crop&w=1200&q=80" alt="Celebrating a customer loyalty reward moment" className="w-full h-full object-cover rounded-[20px]" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ SECTION 4 — SOCIAL PROOF STRIP ============ */}
      <section className="w-full bg-white" style={{
      display: "none"
    }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-[48px]">
          <motion.div initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-60px'
        }} variants={stagger} className="flex flex-col items-center text-center">
            <motion.p variants={fadeUp} className="text-[#979093] font-bold text-[16px] uppercase tracking-tight mb-6">
              <span>Joined 4,200+ businesses already using LoyaltyMaster</span>
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
              {SOCIAL_LOGOS.map(name => <span key={name} className="rounded-full bg-[#F4EAE6] px-6 py-3 text-[#6F6368] font-semibold text-[14px] hover:bg-[#FEF0E9] transition-colors">
                  {name}
                </span>)}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ SECTION 5 — HELP & SUPPORT CTA ============ */}
      <section className="w-full bg-[#302127] relative overflow-hidden">
        {/* faint decorative glow */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(252,184,39,0.10) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(243,125,57,0.08) 0%, transparent 50%)'
      }} />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 py-[84px]">
          <motion.div initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-100px'
        }} variants={stagger} className="flex flex-col items-center text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <MessageSquare className="w-3.5 h-3.5 text-[#FCB827]" strokeWidth={2.4} />
              <span className="text-white/70 text-[13px] font-semibold uppercase tracking-tight">
                Onboarding support
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-bold text-[36px] md:text-[48px] text-white leading-[1.05] tracking-tight max-w-[760px]" style={{
            fontFamily: 'var(--font-heading)'
          }}>
              <span>Need help getting started?</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-white/70 text-[18px] md:text-[20px] max-w-[560px] leading-[1.55]">
              <span>
                Our onboarding team is standing by. Book a free 15-minute setup call and we&apos;ll
                walk you through everything.
              </span>
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button type="button" className="group inline-flex items-center gap-2 bg-[#FCB827] text-[#2A1F16] rounded-full px-8 py-4 font-bold text-[18px] shadow-[0_5px_0_0_#F37D39] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#F37D39] transition-all duration-150">
                <span>Book a Setup Call</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} style={{
                display: "none"
              }} />
              </button>
              <button type="button" className="inline-flex items-center text-white border border-white/30 rounded-full px-8 py-4 hover:bg-white/10 transition-colors duration-200 font-semibold text-[18px]">
                <span>Browse Help Center</span>
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {SUPPORT_AVATARS.map(a => <div key={a.initials} className={`w-10 h-10 rounded-full ${a.bg} ${a.text} border-2 border-[#302127] flex items-center justify-center font-bold text-[13px]`}>
                    <span>{a.initials}</span>
                  </div>)}
              </div>
              <p className="text-white/70 text-[14px] text-left">
                <span className="text-white font-semibold">Average response time: </span>
                <span>under 2 hours.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>;
};