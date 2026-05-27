import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Building2, Mail, MonitorSmartphone, WalletCards } from 'lucide-react';
const ease = [0.22, 1, 0.36, 1] as const;
const fields = ['Business name', 'Contact person', 'Email address', 'Phone number'];
const cardFeatures = ['Apple Wallet ready', 'Google Wallet ready', 'Branded colors', 'Launch support'];
export const BrandedCardApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isTrialSubmitting, setIsTrialSubmitting] = useState(false);
  const [isTrialSuccess, setIsTrialSuccess] = useState(false);
  const handleTenantTrialSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };
  const handleTrialSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTrialSubmitting(true);
    setTimeout(() => {
      setIsTrialSubmitting(false);
      setIsTrialSuccess(true);
    }, 1200);
  };
  return <main className="min-h-screen w-full overflow-hidden bg-[#FEF0E9] font-[Onest,Arial,sans-serif] text-[#302127]">
      <section className="w-full px-6 py-14 md:px-12 md:py-[76px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 lg:grid-cols-[0.86fr_1fr] lg:items-start">
          <motion.div initial={{
          opacity: 0,
          y: 24
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.58,
          ease
        }} className="text-left">
            <p className="mb-[14px] text-base font-bold uppercase leading-none text-[#979093]">Branded card application</p>
            <h1 className="m-0 max-w-[640px] font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[50px] font-black leading-[0.98] md:text-[72px]" style={{
            fontFamily: "Rodger Test"
          }}>Get a Branded Customer Loyalty Program</h1>
            <h2 className="mt-4 text-[28px] md:text-[36px] font-black leading-tight text-[#F97316]" style={{
            fontWeight: "700"
          }}>Ready to Launch — 48 Hours!</h2>
            <p className="mt-6 max-w-[600px] text-xl leading-[1.52] text-[#4B4246]" style={{
            fontWeight: "400"
          }}>Skip the tech headaches. We design your digital loyalty cards, set up your rewards program, and you can start to enroll your customers.<br />With this Limited Time Offer you Save Hundreds off our standard Design & Setup fees.</p>
                <motion.div className="text-left" initial={{
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
          }}>
                  <p className="text-[#979093] text-base leading-none tracking-[-0.2px] uppercase font-bold mb-3.5" style={{
              display: "none",
              fontWeight: "700"
            }}>30-Day Trial</p>
                  <h2 className="text-[#302127] text-4xl md:text-[52px] leading-tight md:leading-[54.6px] tracking-[-0.2px] font-bold m-0 font-sans" style={{
              display: "none"
            }}>Start Your Tenant Trial in Minutes</h2>
                  <p className="text-[#302127] text-lg md:text-[20px] leading-relaxed md:leading-[31.2px] tracking-[-0.4px] font-normal mt-4 max-w-[720px] mx-auto" style={{
              fontWeight: "700",
              fontSize: "20px"
            }}>Complete this quick form to launch your 30-day trial and start messaging your customers with SetupFlow.</p>
                </motion.div>
                <motion.form onSubmit={handleTrialSubmit} className="mt-8 p-6 md:p-7 rounded-[20px] bg-gradient-to-b from-white/90 to-white border border-[#979093]/30 shadow-[0_12px_24px_0_rgba(48,33,39,0.1)] relative flex flex-col gap-[18px]" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <h3 className="text-[#302127] text-2xl font-bold mb-2">You're all set!</h3>
                      <p className="text-[#4C93AF] font-medium">Your 30-day trial has been activated.</p>
                      <button type="button" onClick={() => setIsTrialSuccess(false)} className="mt-6 text-sm font-bold text-[#979093] hover:text-[#302127] transition-colors">Submit another request</button>
                    </motion.div> : <>
                      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                        <div className="flex flex-col gap-2"><label htmlFor="trialFullName" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">Full Name <span className="text-[#F37D39]">*</span></label><input id="trialFullName" name="fullName" type="text" required placeholder="Jane Smith" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" /></div>
                        <div className="flex flex-col gap-2"><label htmlFor="trialBusinessName" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">Business Name <span className="text-[#F37D39]">*</span></label><input id="trialBusinessName" name="businessName" type="text" required placeholder="Acme Wellness Studio" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" /></div>
                        <div className="flex flex-col gap-2"><label htmlFor="trialEmail" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">Business Email <span className="text-[#F37D39]">*</span></label><input id="trialEmail" name="businessEmail" type="email" required placeholder="name@business.com" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" /></div>
                        <div className="flex flex-col gap-2"><label htmlFor="trialLocation" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">Business Location <span className="text-[#F37D39]">*</span></label><input id="trialLocation" name="businessLocation" type="text" required placeholder="City, State, Country" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" /></div>
                        <div className="flex flex-col gap-2 col-span-1 md:col-span-2"><label htmlFor="trialWebsite" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">Business Website</label><input id="trialWebsite" name="businessWebsite" type="url" placeholder="https://example.com" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" /></div>
                      </div>
                      <div className="relative z-10 mt-2">
                        <button type="submit" disabled={isTrialSubmitting} className="group w-full min-h-[58px] bg-[#FCB827] text-[#2A1F16] text-[20px] font-bold tracking-[-0.4px] rounded-full border border-[#F37D39]/30 shadow-[0_5px_0_0_#F37D39,0_8px_14px_0_rgba(48,33,39,0.1)] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#F37D39] active:translate-y-[5px] active:shadow-none transition-all duration-200 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                          {isTrialSubmitting ? <>Processing...</> : 'Start 30-Day Trial'}
                        </button>
                      </div>
                    </>}
                </motion.form>
              <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
            <div className="mt-8 rounded-[20px] bg-[#302127] p-6 text-white" style={{
            display: "none"
          }}>
              <WalletCards className="h-10 w-10 text-[#FCB827]" aria-hidden="true" />
              <p className="m-0 mt-4 text-[28px] font-black leading-tight">Designed for approval, setup, and handoff.</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {cardFeatures.map(feature => <div key={feature} className="rounded-[14px] bg-white/10 px-4 py-3 text-sm font-bold">{feature}</div>)}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.97,
          y: 24
        }} animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} transition={{
          duration: 0.64,
          delay: 0.08,
          ease
        }} className="grid gap-4">
            <div className="flex aspect-square w-full flex-col items-center justify-center rounded-xl bg-[#E5E7EB]">
              <svg className="h-12 w-12 text-[#9CA3AF]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <rect x="8" y="10" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="3" />
                <circle cx="18" cy="20" r="3" fill="currentColor" />
                <path d="M12 34L21 26L28 32L32 28L38 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-3 text-sm font-semibold text-[#9CA3AF]">Image Placeholder</p>
            </div>
            <section aria-labelledby="branded-card-highlights" className="relative overflow-hidden rounded-[20px] bg-white border border-[#979093]/25 p-6 md:p-7 shadow-[0_12px_24px_0_rgba(48,33,39,0.08)]">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#FCB827]/40 blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-[#F37D39]/25 blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FDE9E2] px-3 py-1 text-xs font-bold uppercase tracking-[0.04em] text-[#F37D39]">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" style={{
                  display: "none"
                }} />
                  <span>What's included</span>
                </span>
                <h3 id="branded-card-highlights" className="mt-4 text-[26px] md:text-[30px] font-black leading-[1.1] tracking-[-0.4px] text-[#302127]">
                  Everything you need to launch your loyalty card.
                </h3>
                <ul className="mt-5 grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-3 rounded-[14px] bg-[#FAF8F9] px-4 py-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FCB827] text-[#2A1F16]">
                      <WalletCards className="h-4 w-4" aria-hidden="true" style={{
                      display: "none"
                    }} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[15px] font-bold text-[#302127]">Apple &amp; Google Wallet ready</span>
                      <span className="text-[13px] font-medium text-[#4B4246]">Customers add your card in one tap — no app downloads required.</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 rounded-[14px] bg-[#FAF8F9] px-4 py-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4C93AF] text-white">
                      <Building2 className="h-4 w-4" aria-hidden="true" style={{
                      display: "none"
                    }} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[15px] font-bold text-[#302127]">Designed to match your brand</span>
                      <span className="text-[13px] font-medium text-[#4B4246]">Your logo, colors, and tone — handled by our design team.</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 rounded-[14px] bg-[#FAF8F9] px-4 py-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F37D39] text-white">
                      <MonitorSmartphone className="h-4 w-4" aria-hidden="true" style={{
                      display: "none"
                    }} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[15px] font-bold text-[#302127]">Live in 48 hours</span>
                      <span className="text-[13px] font-medium text-[#4B4246]">Submit today, start enrolling customers by the end of the week.</span>
                    </span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#979093]/20 pt-5" style={{
                display: "none"
              }}>
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#979093]">
                    <Mail className="h-4 w-4 text-[#F37D39]" aria-hidden="true" style={{
                    display: "none"
                  }} />
                    <span style={{
                    display: "none"
                  }}>Personal onboarding support</span>
                  </span>
                  <a href="#apply" className="group inline-flex items-center gap-1.5 text-[14px] font-bold text-[#302127] hover:text-[#F37D39] transition-colors">
                    <span>See the full program</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </section>
            <section className="w-full bg-[#FEF0E9] py-24 md:py-28 px-4 overflow-hidden relative" style={{
            display: "none"
          }}>
              <div className="max-w-[796px] mx-auto px-4 md:px-12 relative">
                <motion.div className="text-center" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                ease
              }}>
                  <p className="text-[#979093] text-base leading-none tracking-[-0.2px] uppercase font-bold mb-3.5" style={{
                  display: "none"
                }}>30-Day Trial</p>
                  <h2 className="text-[#302127] text-4xl md:text-[52px] leading-tight md:leading-[54.6px] tracking-[-0.2px] font-bold m-0 font-sans">Start Your Tenant Trial in Minutes</h2>
                  <p className="text-[#302127] text-lg md:text-[20px] leading-relaxed md:leading-[31.2px] tracking-[-0.4px] font-normal mt-4 max-w-[720px] mx-auto">Complete this quick form to launch your 30-day trial and start messaging your customers with SetupFlow.</p>
                </motion.div>

                <motion.form onSubmit={handleTenantTrialSubmit} className="mt-8 p-6 md:p-7 rounded-[20px] bg-gradient-to-b from-white/90 to-white border border-[#979093]/30 shadow-[0_12px_24px_0_rgba(48,33,39,0.1)] relative flex flex-col gap-[18px]" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.15,
                ease
              }}>
                  <span className="absolute inset-[1px] rounded-[20px] bg-gradient-to-br from-white/40 to-transparent pointer-events-none" aria-hidden="true" />

                  {isSuccess ? <motion.div initial={{
                  opacity: 0,
                  scale: 0.95
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} className="relative z-10 rounded-2xl border border-[#4C93AF]/30 bg-[#4C93AF]/10 p-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4C93AF] text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-[#302127]">You're all set!</h3>
                    <p className="font-medium text-[#4C93AF]">Your 30-day trial has been activated.</p>
                    <button type="button" onClick={() => setIsSuccess(false)} className="mt-6 text-sm font-bold text-[#979093] transition-colors hover:text-[#302127]">
                      <span>Submit another request</span>
                    </button>
                  </motion.div> : <div className="relative z-10 contents">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="tenant-full-name" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                          <span><span>Full Name</span> <span className="text-[#F37D39]">*</span></span>
                        </label>
                        <input id="tenant-full-name" name="fullName" type="text" autoComplete="name" required placeholder="Jane Smith" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="tenant-business-name" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                          <span><span>Business Name</span> <span className="text-[#F37D39]">*</span></span>
                        </label>
                        <input id="tenant-business-name" name="businessName" type="text" autoComplete="organization" required placeholder="Acme Wellness Studio" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="tenant-business-email" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                          <span><span>Business Email</span> <span className="text-[#F37D39]">*</span></span>
                        </label>
                        <input id="tenant-business-email" name="businessEmail" type="email" autoComplete="email" required placeholder="name@business.com" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="tenant-business-location" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                          <span><span>Business Location</span> <span className="text-[#F37D39]">*</span></span>
                        </label>
                        <input id="tenant-business-location" name="businessLocation" type="text" autoComplete="address-level2" required placeholder="City, State, Country" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                      </div>

                      <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                        <label htmlFor="tenant-business-website" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                          <span>Business Website</span>
                        </label>
                        <input id="tenant-business-website" name="businessWebsite" type="url" autoComplete="url" placeholder="https://example.com" aria-describedby="tenant-website-help" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                        <p id="tenant-website-help" className="m-0 text-[13px] font-medium leading-[16px] tracking-[-0.2px] text-[#979093]">Optional - include this if your business has a website.</p>
                      </div>
                    </div>

                    <div className="relative z-10 mt-2">
                      <button type="submit" disabled={isSubmitting} className="group flex w-full min-h-[58px] items-center justify-center gap-2 bg-[#FCB827] text-[#2A1F16] text-[20px] font-bold tracking-[-0.4px] rounded-full border border-[#F37D39]/30 shadow-[0_5px_0_0_#F37D39,0_8px_14px_0_rgba(48,33,39,0.1)] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#F37D39] active:translate-y-[5px] active:shadow-none transition-all duration-200 relative overflow-hidden disabled:cursor-not-allowed disabled:opacity-70">
                        <span className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_2s_infinite]" aria-hidden="true" />
                        {isSubmitting ? <span className="inline-flex items-center justify-center gap-2">
                          <svg className="h-5 w-5 animate-spin text-[#2A1F16]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Processing...</span>
                        </span> : <span>Start 30-Day Trial</span>}
                      </button>
                    </div>
                  </div>}
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
            <form onSubmit={event => event.preventDefault()} className="rounded-[20px] border border-[#979093]/20 bg-white p-5 shadow-[0_18px_38px_rgba(48,33,39,0.12)]" style={{
            display: "none"
          }}>
            <div className="grid gap-4 md:grid-cols-2">
              {fields.map((field, index) => <label key={field} className="grid gap-2">
                  <span className="text-sm font-bold uppercase text-[#979093]">{field}</span>
                  <span className="flex min-h-[58px] items-center gap-3 rounded-[16px] bg-[#FAF8F9] px-4 text-base font-semibold text-[#302127]/50">
                    {index === 0 ? <Building2 className="h-5 w-5 text-[#F37D39]" aria-hidden="true" /> : <Mail className="h-5 w-5 text-[#F37D39]" aria-hidden="true" />}
                    {field}
                  </span>
                </label>)}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
              <label className="grid gap-2">
                <span className="text-sm font-bold uppercase text-[#979093]">Card goal</span>
                <span className="min-h-[132px] rounded-[16px] bg-[#FAF8F9] px-4 py-4 text-base font-semibold leading-[1.5] text-[#302127]/50">
                  More repeat visits, referrals, and reward engagement.
                </span>
              </label>
              <div className="relative overflow-hidden rounded-[18px] bg-[#EAF5F8] p-5">
                <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-[#FCB827]/70 blur-2xl" />
                <MonitorSmartphone className="relative z-10 h-9 w-9 text-[#F37D39]" aria-hidden="true" />
                <div className="relative z-10 mt-5 rounded-[18px] bg-[#302127] p-5 text-white shadow-[0_14px_26px_rgba(48,33,39,0.18)]">
                  <p className="m-0 text-sm font-bold uppercase text-white/55">Wallet preview</p>
                  <p className="m-0 mt-3 text-[28px] font-black leading-tight">Your Business Rewards</p>
                  <div className="mt-6 h-3 rounded-full bg-[#FCB827]" />
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-4 rounded-[18px] bg-[#FDE9E2] p-5 md:flex-row md:items-center md:justify-between">
              <span className="flex items-center gap-3 text-base font-bold">
                <BadgeCheck className="h-6 w-6 text-[#F37D39]" aria-hidden="true" /> Application review before card build
              </span>
              <button className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#FCB827] px-6 text-lg font-bold text-[#2A1F16] shadow-[0_5px_0_#F37D39]">
                Submit request <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
          </form>
          </motion.div>
        </div>
      </section>
    </main>;
};
