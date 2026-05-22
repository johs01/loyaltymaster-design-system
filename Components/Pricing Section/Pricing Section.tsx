import React, { useState } from 'react';
import { motion } from 'framer-motion';
type Plan = {
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
const plans: Plan[] = [{
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
const containerVariants = {
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
const itemVariants = {
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

// @component: PricingSection
export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  // @return
  return <section className="relative w-full bg-white py-20 px-6 md:px-12 font-sans text-[#302127]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header Section */}
        <motion.div initial="hidden" whileInView="show" viewport={{
        once: true,
        margin: '-100px'
      }} variants={containerVariants} className="text-center">
          <motion.p variants={itemVariants} className="mb-3 text-[16px] font-bold uppercase tracking-wide text-[#979093]">
            Pricing
          </motion.p>
          <motion.h2 variants={itemVariants} className="m-0 mx-auto max-w-3xl text-[40px] font-bold leading-tight tracking-tight md:text-[52px]">
            Pricing That Scales With Your Campaign Goals
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 mx-auto max-w-[760px] text-[18px] leading-relaxed text-[#302127] md:text-[20px]">
            Start lean, scale when your audience and campaign volume grow. Every plan includes SetupFlow templates,
            automation tools, and performance reporting.
          </motion.p>

          {/* Toggle */}
          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#979093]/20 bg-[#f4eff2] p-1.5 shadow-[0_8px_18px_0_rgba(48,33,39,0.08)]" role="group" aria-label="Billing period">
              <button type="button" aria-pressed={!isYearly} onClick={() => setIsYearly(false)} className={`flex min-h-[48px] items-center justify-center rounded-full px-5 text-[16px] font-bold transition-all duration-300 ${!isYearly ? 'bg-[#fcb827] text-[#2a1f16] shadow-[0_4px_0_0_rgba(48,33,39,0.12)]' : 'text-[#979093] hover:text-[#302127]'}`}>
                Monthly
              </button>
              <button type="button" aria-pressed={isYearly} onClick={() => setIsYearly(true)} className={`flex min-h-[48px] items-center justify-center gap-2 rounded-full px-5 text-[16px] font-bold transition-all duration-300 ${isYearly ? 'bg-[#fcb827] text-[#2a1f16] shadow-[0_4px_0_0_rgba(48,33,39,0.12)]' : 'text-[#979093] hover:text-[#302127]'}`}>
                <span>Yearly</span>
                <span className="flex items-center rounded-full bg-[#fcb827] px-2 py-1 text-[11px] font-bold tracking-wider text-[#2a1f16]">
                  30% OFF
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div initial="hidden" whileInView="show" viewport={{
        once: true,
        margin: '-50px'
      }} variants={containerVariants} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => <motion.article key={plan.name} variants={itemVariants} className={`relative flex flex-col justify-between gap-6 rounded-[20px] border p-6 lg:p-8 ${plan.isPro ? 'border-[#f37d39]/40 bg-gradient-to-b from-[#fcb827]/20 via-white/90 to-[#faf8f9] shadow-[0_12px_24px_0_rgba(243,125,57,0.16)]' : 'border-[#979093]/20 bg-[#faf8f9] shadow-[0_8px_20px_0_rgba(48,33,39,0.08)]'}`}>
              {/* Optional top glare effect for Pro */}
              {plan.isPro && <span className="pointer-events-none absolute inset-[1px] rounded-[20px]" style={{
            background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0) 46%)'
          }} />}

              <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="text-[28px] font-bold tracking-tight text-[#302127]">{plan.name}</h3>
                  {plan.badge && <span className="rounded-full border border-[#f37d39]/30 bg-[#f37d39]/10 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#f37d39]">
                      {plan.badge}
                    </span>}
                </div>
                <p className="mt-3 text-[16px] leading-relaxed text-[#302127]">{plan.description}</p>

                <div className="mt-6 flex-grow">
                  {plan.price ? <>
                      <div className="flex items-end gap-2">
                        <span className="text-[44px] font-bold leading-none tracking-tight text-[#302127]">
                          ${isYearly ? plan.price.yearly : plan.price.monthly}
                        </span>
                        <span className="mb-1.5 text-[16px] font-semibold text-[#979093]">/month</span>
                      </div>
                      <p className="mt-2 text-[14px] font-medium text-[#bfb8bc]">
                        Billed <span className="text-[#302127]">{isYearly ? 'annually' : 'monthly'}</span>
                        {plan.isPro && ', per workspace'}.
                      </p>
                    </> : <>
                      <p className="text-[42px] font-bold leading-none tracking-tight text-[#302127]">
                        {plan.customPrice}
                      </p>
                      <p className="mt-2.5 text-[14px] font-medium leading-snug text-[#979093]">{plan.customNote}</p>
                    </>}
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-6">
                <a href="#" onClick={e => e.preventDefault()} className="group relative flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full border border-[#f37d39]/30 bg-[#fcb827] px-5 text-[16px] font-bold text-[#2a1f16] shadow-[0_5px_0_0_#f37d39,0_8px_14px_0_rgba(48,33,39,0.1)] transition-transform hover:-translate-y-[2px]">
                  {/* Button Glare Effect */}
                  <span className="pointer-events-none absolute inset-0 opacity-60 transition-transform duration-300 group-hover:translate-x-4" style={{
                backgroundImage: 'linear-gradient(112deg, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 0.34) 44%, rgba(255, 255, 255, 0) 68%)'
              }} />
                  <span className="relative z-10">{plan.cta}</span>
                </a>

                <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                  {plan.features.map((feature, i) => <li key={i} className="flex items-start gap-3 text-[16px] leading-relaxed text-[#302127]">
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
            View all billing details
          </a>
        </motion.div>
      </div>
    </section>;
};