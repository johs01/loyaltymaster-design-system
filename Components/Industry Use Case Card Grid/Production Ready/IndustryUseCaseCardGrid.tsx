import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ArrowRight, Car, Coffee, Dumbbell, HeartPulse, Scissors, Store, Utensils, WalletCards } from 'lucide-react';
const ease = [0.22, 1, 0.36, 1] as const;
const ctaStaggerContainer = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
const ctaFadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 70,
      damping: 20
    }
  }
};
const industries = [{
  icon: Coffee,
  title: 'Coffee shops',
  detail: 'Stamp-style rewards and instant return prompts.',
  image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80'
}, {
  icon: Utensils,
  title: 'Restaurants',
  detail: 'Occasion offers, birthday rewards, and referrals.',
  image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80'
}, {
  icon: Scissors,
  title: 'Salons',
  detail: 'Appointment rebooking nudges and VIP cards.',
  image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80'
}, {
  icon: Dumbbell,
  title: 'Fitness studios',
  detail: 'Membership engagement and class return flows.',
  image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80'
}, {
  icon: Store,
  title: 'Retail stores',
  detail: 'Digital points and seasonal campaign reminders.',
  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80'
}, {
  icon: Car,
  title: 'Auto services',
  detail: 'Service reminders and repeat visit incentives.',
  image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80'
}, {
  icon: HeartPulse,
  title: 'Wellness clinics',
  detail: 'Care-plan loyalty and follow-up messaging.',
  image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80'
}, {
  icon: WalletCards,
  title: 'Local services',
  detail: 'Simple card programs for repeat customers.',
  image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80'
}];
export const IndustryUseCaseCardGrid = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', email);
  };
  return <main className="min-h-screen w-full overflow-hidden bg-[#FEF0E9] font-[Onest,Arial,sans-serif] text-[#302127]">
      <section className="w-full px-6 py-14 md:px-12 md:py-[76px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <div className="grid gap-10 lg:items-end">
            <motion.div initial={{
            opacity: 0,
            y: 24
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.58,
            ease
          }}>
              <p className="mb-[14px] text-base font-bold uppercase leading-none text-[#979093]">Ideal for</p>
              <h1 className="m-0 max-w-[690px] font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[50px] font-black leading-[0.98] md:text-[72px]" style={{
              fontFamily: "Rodger Test"
            }}>Turn Visitors into Regulars</h1>
              <h2 className="m-0 mt-4 font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[28px] font-black leading-[1.05] text-[#F37D39] md:text-[34px]" style={{
              fontFamily: "Rodger Test"
            }}>Ideal-for Shops Everywhere</h2>
              <p className="m-0 mt-6 max-w-[640px] text-[17px] leading-[1.7] text-[#4B4246]">
                <span style={{
                fontWeight: "700"
              }}>With Loyaltymaster your Brand Lives inside Apple &amp; Google Wallet — no new app to install.</span>
                <br />
                <span>Renowned brands such as Starbucks credit 40% of their sales to repeat customers, thanks to their loyalty program. With Loyaltymaster, you can chase the same numbers without the Starbucks' budget.</span>
                <br />
                <span>Just imagine the possibilities it could bring to your business.</span>
                <br />
                <span style={{
                fontWeight: "700",
                color: "#4b4246"
              }}>Repeat sales are the lifeblood of your business and customer loyalty is the oxygen it needs.</span>
              </p>
              <p className="mt-6 max-w-[640px] text-xl leading-[1.52] text-[#4B4246]" style={{
              display: "none"
            }}>
                Industry cards that feel visual and specific, while still matching the warm multi-section design language.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.96,
            y: 24
          }} animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }} transition={{
            duration: 0.64,
            delay: 0.08,
            ease
          }} className="rounded-[20px] bg-[#302127] p-6 text-white shadow-[0_16px_34px_rgba(48,33,39,0.16)]" style={{
            display: "none"
          }}>
              <p className="m-0 text-sm font-bold uppercase text-white/55">Common pattern</p>
              <h2 className="m-0 mt-3 text-[38px] font-black leading-tight">One platform, different repeat-business moments.</h2>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {['Scan', 'Reward', 'Return'].map(step => <div key={step} className="rounded-[16px] bg-white/10 px-4 py-4 text-center text-base font-bold">
                    <span className="mx-auto mb-3 block h-6 w-6 rounded-[9px] bg-[#FCB827] shadow-[0_4px_0_#F37D39]" />
                    {step}
                  </div>)}
              </div>
            </motion.div>
          </div>
          <motion.img initial={{
          opacity: 0,
          scale: 0.98
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.7,
          ease
        }} src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Modern retail loyalty scene" className="h-full max-h-[640px] min-h-[360px] w-full justify-self-end rounded-[20px] object-cover shadow-[0_16px_34px_rgba(48,33,39,0.16)]" />
        </div>
      </section>

      <section className="w-full bg-[#EAF5F8] px-6 py-14 md:px-12">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        ease
      }} className="mx-auto grid w-full max-w-[1280px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(industry => {
          return <a key={industry.title} href="#" onClick={event => event.preventDefault()} className="group overflow-hidden rounded-[20px] border border-[#979093]/20 bg-white shadow-[0_8px_20px_rgba(48,33,39,0.06)] transition-transform duration-200 hover:-translate-y-1">
                <div role="img" aria-label={industry.title} className="h-[140px] w-full" style={{
              backgroundImage: `url(${industry.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
                <div className="p-5">
                  <h2 className="m-0 text-[24px] font-black leading-tight">{industry.title}</h2>
                  <p className="m-0 mt-3 text-base leading-[1.5] text-[#5A5055]">{industry.detail}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#302127]">
                    View use case <ArrowRight className="h-4 w-4 text-[#F37D39] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </a>;
        })}
        </motion.div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#FEF0E9] px-6 py-20 md:px-12 md:py-28">
        <motion.div variants={ctaStaggerContainer} initial="hidden" whileInView="show" viewport={{
        once: true,
        amount: 0.3
      }} className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-2 sm:px-6">
          <motion.p variants={ctaFadeUp} className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#979093]">
            Get started
          </motion.p>
          <motion.h2 variants={ctaFadeUp} className="m-0 max-w-[820px] text-center font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[40px] font-black leading-[1.02] text-[#302127] md:text-[56px]" style={{
          fontFamily: 'Rodger Test'
        }}>
            <span>Start Growing Your Loyalty Program Today</span>
          </motion.h2>
          <motion.p variants={ctaFadeUp} className="mt-5 max-w-[600px] text-center text-[17px] leading-[1.6] text-[#4B4246]">
            <span>Join thousands of local businesses turning one-time visitors into lifelong regulars.</span>
          </motion.p>

          <motion.div variants={ctaFadeUp} className="relative mt-10 w-full max-w-[583px]">
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 left-1/2 h-[150%] w-full -translate-x-1/2 rounded-full opacity-70 blur-2xl" style={{
            backgroundImage: 'radial-gradient(80% 60% at 50% 80%, rgba(252, 184, 39, 0.28), rgba(243, 125, 57, 0.10) 60%, rgba(0, 0, 0, 0) 100%)'
          }} />

            <form onSubmit={handleSubmit} className="relative z-10 flex w-full flex-col gap-2 rounded-[2rem] border-2 border-[#fcb827]/60 bg-white/70 p-1.5 shadow-[0_6px_12px_0_rgba(48,33,39,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-[#fcb827] hover:shadow-[0_8px_20px_0_rgba(48,33,39,0.12)] sm:flex-row sm:items-center sm:rounded-full">
              <label htmlFor="cta-bottom-email" className="sr-only">
                Email address
              </label>
              <input id="cta-bottom-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="name@email.com" className="min-h-[62px] w-full flex-1 rounded-full bg-[#f4eff2] px-6 text-lg font-medium tracking-tight text-[#302127] placeholder:text-[#302127]/40 outline-none transition-colors focus:bg-[#ebe3e7] md:text-[22px]" />
              <button type="submit" className="group relative isolate flex min-h-[62px] w-full shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#f37d39]/30 bg-[#fcb827] px-8 text-[20px] font-bold tracking-tight text-[#2a1f16] shadow-[0_5px_0_0_#f37d39,0_8px_14px_0_rgba(48,33,39,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#f37d39,0_12px_18px_0_rgba(48,33,39,0.15)] active:translate-y-1 active:shadow-[0_1px_0_0_#f37d39,0_2px_4px_0_rgba(48,33,39,0.1)] sm:w-auto">
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 block rounded-full opacity-60" style={{
                backgroundImage: 'linear-gradient(112deg, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 0.34) 44%, rgba(255, 255, 255, 0) 68%)'
              }} />
                <span className="relative z-10 whitespace-nowrap">Start Free in 2 Minutes</span>
              </button>
            </form>

            <motion.p variants={ctaFadeUp} className="mt-5 text-center text-sm text-[#5A5055]">
              <span>No credit card required · 2-minute setup · Cancel anytime</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </main>;
};