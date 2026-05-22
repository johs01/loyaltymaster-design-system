import React, { useState } from 'react';
import { motion } from 'framer-motion';
const CHECKLIST_ITEMS = ["Own your audience and contact data from day one.", "Trigger reminders, offers, and follow-ups in minutes.", "Keep customers engaged with timely personalized updates."];
const staggerContainer = {
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
const fadeUpVariant = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20
    }
  }
};
const imageVariant = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    x: 20
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      delay: 0.3
    }
  }
};

// @component: MessagingHero
export const MessagingHero = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation for email submission would go here
    console.log('Submitted email:', email);
  };

  // @return
  return <section className="relative w-full overflow-hidden bg-[#fef0e9] py-16 md:py-24 lg:py-[84px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[583px_minmax(0,1fr)] lg:gap-12">
          
          {/* Left Column - Content */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col">
            <motion.p variants={fadeUpVariant} className="mb-4 text-sm font-bold uppercase tracking-wide text-[#979093]">
              Customer messaging system
            </motion.p>
            
            <motion.h1 variants={fadeUpVariant} className="mb-6 max-w-[760px] text-5xl font-bold leading-[1.05] tracking-tight text-[#302127] md:text-6xl lg:text-[72px]">
              Have Your Own Customer List. Message Them Anytime - Free.
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="mb-8 max-w-[640px] text-lg leading-relaxed tracking-tight text-[#302127]/90 md:text-[20px]">
              Build your direct customer list, automate outreach, and send high-converting campaigns without relying on social algorithms.
            </motion.p>
            
            <motion.ul variants={fadeUpVariant} className="mb-10 flex flex-col gap-4">
              {CHECKLIST_ITEMS.map((item, index) => <li key={index} className="flex items-start gap-3 text-lg tracking-tight text-[#302127] md:text-[20px]">
                  <span className="mt-1.5 block h-[18px] w-[18px] shrink-0 rounded-md bg-[#fcb827]" aria-hidden="true" />
                  <span>{item}</span>
                </li>)}
            </motion.ul>
            
            {/* CTA Section */}
            <motion.div variants={fadeUpVariant} className="relative w-full max-w-[583px]">
              {/* Radial glow behind form */}
              <div className="pointer-events-none absolute -bottom-10 left-1/2 h-[150%] w-full -translate-x-1/2 rounded-full opacity-70 blur-2xl" style={{
              backgroundImage: 'radial-gradient(80% 60% at 50% 80%, rgba(252, 184, 39, 0.18), rgba(243, 125, 57, 0.06) 60%, rgba(0, 0, 0, 0) 100%)'
            }} />
              
              <form onSubmit={handleSubmit} className="relative z-10 flex w-full flex-col gap-2 rounded-[2rem] border-2 border-[#fcb827]/60 bg-white/70 p-1.5 shadow-[0_6px_12px_0_rgba(48,33,39,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-[#fcb827] hover:shadow-[0_8px_20px_0_rgba(48,33,39,0.12)] sm:flex-row sm:items-center sm:rounded-full">
                <label htmlFor="hero-email" className="sr-only">Email address</label>
                <input id="hero-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="name@email.com" className="min-h-[62px] w-full flex-1 rounded-full bg-[#f4eff2] px-6 text-lg font-medium tracking-tight text-[#302127] placeholder:text-[#302127]/40 outline-none transition-colors focus:bg-[#ebe3e7] md:text-[22px]" />
                <button type="submit" className="group relative isolate flex min-h-[62px] w-full shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#f37d39]/30 bg-[#fcb827] px-8 text-[20px] font-bold tracking-tight text-[#2a1f16] shadow-[0_5px_0_0_#f37d39,0_8px_14px_0_rgba(48,33,39,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#f37d39,0_12px_18px_0_rgba(48,33,39,0.15)] active:translate-y-1 active:shadow-[0_1px_0_0_#f37d39,0_2px_4px_0_rgba(48,33,39,0.1)] sm:w-auto">
                  {/* Glossy gradient overlay */}
                  <span className="absolute inset-0 z-0 block rounded-full opacity-60 pointer-events-none" style={{
                  backgroundImage: 'linear-gradient(112deg, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 0.34) 44%, rgba(255, 255, 255, 0) 68%)'
                }} />
                  <span className="relative z-10 whitespace-nowrap">Start Free in 2 Minutes</span>
                </button>
              </form>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div initial="hidden" animate="show" variants={imageVariant} className="relative mx-auto w-full max-w-[553px] lg:ml-auto lg:mr-0">
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[20px] border border-[#979093]/20 bg-white/40 shadow-xl backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
              <img src="https://ik.imagekit.io/loyalty/sendpush/Image02.png?tr=w-800,q-85:w-3840,c-at_max" alt="Customer messaging platform dashboard" className="h-full w-full object-contain p-2" loading="eager" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>;
};