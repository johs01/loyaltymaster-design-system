import React, { useState } from 'react';
import { motion } from 'framer-motion';
export interface TenantTrialCTAProps {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onSubmit?: (data: FormData) => void;
}
const defaultProps: TenantTrialCTAProps = {
  eyebrow: '30-Day Trial',
  title: 'Start Your Tenant Trial in Minutes',
  description: 'Complete this quick form to launch your 30-day trial and start messaging your customers with SetupFlow.',
  buttonText: 'Start 30-Day Trial'
};

// @component: TenantTrialCTA
export const TenantTrialCTA = (props: TenantTrialCTAProps) => {
  const {
    eyebrow,
    title,
    description,
    buttonText,
    onSubmit,
    className = ''
  } = {
    ...defaultProps,
    ...props
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubmit?.(formData);
    }, 1200);
  };

  // @return
  return <section className={`w-full bg-[#FEF0E9] py-24 md:py-28 px-4 overflow-hidden relative ${className}`}>
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
          {eyebrow && <p className="text-[#979093] text-base leading-none tracking-[-0.2px] uppercase font-bold mb-3.5">
              {eyebrow}
            </p>}
          
          {title && <h2 className="text-[#302127] text-4xl md:text-[52px] leading-tight md:leading-[54.6px] tracking-[-0.2px] font-bold m-0 font-sans">
              {title}
            </h2>}
          
          {description && <p className="text-[#302127] text-lg md:text-[20px] leading-relaxed md:leading-[31.2px] tracking-[-0.4px] font-normal mt-4 max-w-[720px] mx-auto">
              {description}
            </p>}
        </motion.div>

        <motion.form onSubmit={handleSubmit} className="mt-8 p-6 md:p-7 rounded-[20px] bg-gradient-to-b from-white/90 to-white border border-[#979093]/30 shadow-[0_12px_24px_0_rgba(48,33,39,0.1)] relative flex flex-col gap-[18px]" initial={{
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
          {/* Decorative inner border/glow */}
          <span className="absolute inset-[1px] rounded-[20px] bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

          {isSuccess ? <motion.div initial={{
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
              <button type="button" onClick={() => setIsSuccess(false)} className="mt-6 text-sm font-bold text-[#979093] hover:text-[#302127] transition-colors">
                Submit another request
              </button>
            </motion.div> : <>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                    Full Name <span className="text-[#F37D39]">*</span>
                  </label>
                  <input id="fullName" name="fullName" type="text" autoComplete="name" required placeholder="Jane Smith" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="businessName" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                    Business Name <span className="text-[#F37D39]">*</span>
                  </label>
                  <input id="businessName" name="businessName" type="text" autoComplete="organization" required placeholder="Acme Wellness Studio" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="businessEmail" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                    Business Email <span className="text-[#F37D39]">*</span>
                  </label>
                  <input id="businessEmail" name="businessEmail" type="email" autoComplete="email" required placeholder="name@business.com" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="businessLocation" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                    Business Location <span className="text-[#F37D39]">*</span>
                  </label>
                  <input id="businessLocation" name="businessLocation" type="text" autoComplete="address-level2" required placeholder="City, State, Country" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                </div>

                <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                  <label htmlFor="businessWebsite" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                    Business Website
                  </label>
                  <input id="businessWebsite" name="businessWebsite" type="url" autoComplete="url" placeholder="https://example.com" aria-describedby="website-help" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                  <p id="website-help" className="text-[#979093] text-[13px] font-medium m-0 leading-[16px] tracking-[-0.2px]">
                    Optional - include this if your business has a website.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-2">
                <button type="submit" disabled={isSubmitting} className="group w-full min-h-[58px] bg-[#FCB827] text-[#2A1F16] text-[20px] font-bold tracking-[-0.4px] rounded-full border border-[#F37D39]/30 shadow-[0_5px_0_0_#F37D39,0_8px_14px_0_rgba(48,33,39,0.1)] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#F37D39,0_4px_8px_0_rgba(48,33,39,0.1)] active:translate-y-[5px] active:shadow-[0_0_0_0_#F37D39,0_0_0_0_rgba(48,33,39,0)] transition-all duration-200 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                  {isSubmitting ? <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#2A1F16]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </> : buttonText}
                </button>
              </div>
            </>}
        </motion.form>
      </div>

      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>;
};