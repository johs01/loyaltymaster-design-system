import React, { useState } from 'react';
import { motion } from 'framer-motion';

// @component: EmailCTASection
export const EmailCTASection = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prevent redirect/submission as requested
  };

  // @return
  return <section className="relative box-border w-full py-24 bg-[#302127] overflow-hidden flex justify-center" aria-labelledby="final-cta-heading">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: "-100px"
    }} transition={{
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1]
    }} className="relative w-full max-w-[840px] px-6 md:px-12 text-center flex flex-col items-center z-10">
        <h2 id="final-cta-heading" className="m-0 font-sans text-4xl md:text-[52px] font-bold leading-[1.1] md:leading-[54.6px] tracking-[-0.2px] text-white">
          Stop Losing Customers to Silence.
        </h2>
        
        <p className="mt-[18px] mb-[26px] mx-auto max-w-[680px] text-lg md:text-[20px] leading-[1.4] md:leading-[26px] tracking-[-0.2px] text-white/80">
          Turn every customer interaction into repeat revenue with direct messaging you control.
        </p>

        <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row items-center w-full max-w-[640px] gap-2 p-[6px] bg-white/70 shadow-[0_6px_12px_0_rgba(48,33,39,0.08)] border-2 border-[#fcb827]/60 rounded-[32px] sm:rounded-full transition-all duration-300 focus-within:bg-white/90 focus-within:shadow-[0_8px_20px_0_rgba(48,33,39,0.12)] focus-within:border-[#fcb827]">
          {/* Subtle glow effect behind the form */}
          <div className="absolute inset-0 pointer-events-none rounded-[32px] sm:rounded-full" style={{
          backgroundImage: 'radial-gradient(80% 60% at 50% 80%, rgba(252, 184, 39, 0.18), rgba(243, 125, 57, 0.06) 60%, rgba(0, 0, 0, 0) 100%)',
          opacity: 1,
          zIndex: -1
        }} />

          <label htmlFor="wf-email-final" className="sr-only">
            Email address
          </label>
          
          <input id="wf-email-final" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" placeholder="name@email.com" required className="w-full sm:flex-1 min-w-0 min-h-[54px] sm:min-h-[62px] px-6 font-sans text-lg sm:text-[22px] font-medium leading-none tracking-[-0.4px] text-[#302127] placeholder:text-[#302127]/40 bg-[#f4eff2] rounded-full outline-none transition-colors focus:bg-white" />

          <motion.button whileHover={{
          y: -1
        }} whileTap={{
          y: 2,
          boxShadow: "0px 2px 0px 0px #f37d39, 0px 4px 8px 0px rgba(48, 33, 39, 0.1)"
        }} type="submit" className="relative isolate overflow-hidden flex items-center justify-center shrink-0 w-full sm:w-auto min-h-[54px] sm:min-h-[62px] px-8 bg-[#fcb827] text-[#2a1f16] text-lg sm:text-[20px] font-bold leading-none tracking-[-0.4px] whitespace-nowrap rounded-full border border-[#f37d39]/30 shadow-[0px_5px_0px_0px_#f37d39,0px_8px_14px_0px_rgba(48,33,39,0.1)] transition-all duration-200">
            {/* Glossy reflection highlight */}
            <span className="absolute inset-0 block rounded-full opacity-60 pointer-events-none mix-blend-overlay" style={{
            backgroundImage: 'linear-gradient(112deg, transparent 14%, rgba(255, 255, 255, 0.8) 44%, transparent 68%)',
            transform: 'translateX(10%)'
          }} />
            Get Your First Campaign Ready
          </motion.button>
        </form>
      </motion.div>
    </section>;
};