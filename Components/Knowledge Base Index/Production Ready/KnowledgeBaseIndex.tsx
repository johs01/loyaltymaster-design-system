import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FileText, FolderOpen, Search, ShieldCheck } from 'lucide-react';
import React, { useState } from 'react';
const ease = [0.22, 1, 0.36, 1] as const;
const categories = [{
  title: 'Digital reward cards',
  count: 12,
  articles: ['Create a card', 'Wallet setup', 'Brand fields']
}, {
  title: 'Campaign channels',
  count: 9,
  articles: ['Push messaging', 'SMS follow-up', 'Email sequences']
}, {
  title: 'Customer journeys',
  count: 7,
  articles: ['Referral flow', 'Return visit path', 'VIP rewards']
}];
const quickLinks = ['Getting started checklist', 'Card launch guide', 'Reward campaign examples', 'Billing and subscriptions'];
const ctaStagger = {
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
      type: "spring",
      stiffness: 70,
      damping: 20
    }
  }
};
export const KnowledgeBaseIndex = () => {
  const [email, setEmail] = useState('');
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', email);
  };
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
    }, 1200);
  };
  return <main className="min-h-screen w-full overflow-hidden bg-[#FEF0E9] font-[Onest,Arial,sans-serif] text-[#302127]">
      <section className="w-full px-6 py-14 md:px-12 md:py-[76px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-end">
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
            <p className="mb-[14px] text-base font-bold uppercase leading-none text-[#979093]">Knowledge base</p>
            <h1 className="m-0 max-w-[700px] font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[50px] font-black leading-[0.98] md:text-[72px]" style={{
            fontFamily: "Rodger Test"
          }}>Any Questions?</h1>
            <p className="mt-6 max-w-[640px] text-xl leading-[1.52] text-[#4B4246]">
              A docs-style body for encyclopedia pages, with search, categories, and article routes distinct from the blog index.
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
        }} className="rounded-[20px] border border-[#979093]/20 bg-white p-5 shadow-[0_16px_34px_rgba(48,33,39,0.1)]">
            <div className="flex min-h-[64px] items-center gap-3 rounded-full bg-[#FAF8F9] px-5">
              <Search className="h-6 w-6 text-[#F37D39]" aria-hidden="true" />
              <span className="text-lg font-semibold text-[#302127]/50">Search ...</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {['28 articles', '6 categories', '24/7 reference'].map(metric => <div key={metric} className="rounded-[16px] bg-[#EAF5F8] px-3 py-4 text-sm font-black">{metric}</div>)}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <aside className="w-full lg:w-72 lg:shrink-0 rounded-[20px] bg-[#302127] p-6 md:p-8 pl-6 md:pl-8 text-white shadow-[0_14px_30px_rgba(48,33,39,0.14)]">
          <BookOpen className="h-10 w-10 text-[#FCB827]" aria-hidden="true" style={{
          display: "none"
        }} />
          <h2 className="m-0 mt-5 text-[34px] font-black leading-tight" style={{
          fontFamily: "Rodger Test"
        }}>Start here</h2>
          <div className="mt-6 grid gap-3">
            {quickLinks.map(link => <div key={link} className="flex items-center gap-3 rounded-[16px] bg-white/10 px-4 py-3 text-base font-bold">
                <FileText className="h-4 w-4 text-[#FCB827]" aria-hidden="true" />
                {link}
              </div>)}
          </div>
          <div className="mt-6 rounded-[18px] bg-white/10 p-4">
            <ShieldCheck className="h-6 w-6 text-[#FCB827]" aria-hidden="true" />
            <p className="m-0 mt-3 text-base font-bold leading-[1.45]">Docs are structured for self-service without losing the human support route.</p>
          </div>
        </aside>

        <section className="flex-1 min-w-0 w-full bg-[#EAF5F8] px-6 py-14 md:px-12 rounded-[20px]">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8">
            <div className="grid gap-5 md:grid-cols-3">
              {categories.map(category => <article key={category.title} className="rounded-[20px] border border-[#979093]/20 bg-white p-6 shadow-[0_8px_20px_rgba(48,33,39,0.06)]">
                  <FolderOpen className="h-9 w-9 text-[#F37D39]" aria-hidden="true" style={{
                display: "none"
              }} />
                  <h2 className="m-0 mt-4 text-[26px] font-black leading-tight" style={{
                fontFamily: "Rodger Test"
              }}>{category.title}</h2>
                  <p className="m-0 mt-2 text-sm font-bold uppercase text-[#979093]">{category.count} articles</p>
                  <div className="mt-5 grid gap-3">
                    {category.articles.map(article => <a key={article} href="#" onClick={event => event.preventDefault()} className="flex items-center justify-between rounded-[14px] bg-[#FAF8F9] px-4 py-3 text-sm font-bold">
                        {article}
                        <ArrowRight className="h-4 w-4 text-[#F37D39]" aria-hidden="true" style={{
                    display: "none"
                  }} />
                      </a>)}
                  </div>
                </article>)}
            </div>
          </div>
        </section>
      </div>

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
          ease
        }}>
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#979093]">
              <span style={{
              display: "none"
            }}>Contact us</span>
            </p>
            <h2 className="m-0 font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[34px] md:text-[48px] font-black leading-[1.05] tracking-[-0.4px] text-[#302127]" style={{
            fontFamily: "Rodger Test"
          }}>
              <span>If you can't find an answer to a question</span>
            </h2>
            <p className="mt-5 text-center text-[17px] md:text-[18px] leading-[1.6] text-[#4B4246] font-[Onest,Arial,sans-serif]">
              Then please fill in the form below and make contact with us
            </p>
          </motion.div>

          <motion.form onSubmit={handleContactSubmit} className="mt-8 p-6 md:p-7 rounded-[20px] bg-gradient-to-b from-white/90 to-white border border-[#979093]/30 shadow-[0_12px_24px_0_rgba(48,33,39,0.1)] relative flex flex-col gap-[18px]" initial={{
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
          ease
        }}>
            <span className="absolute inset-[1px] rounded-[20px] bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

            {contactSuccess ? <motion.div initial={{
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
                <h3 className="text-[#302127] text-2xl font-bold mb-2">
                  <span>Message received!</span>
                </h3>
                <p className="text-[#4C93AF] font-medium">
                  <span>We'll get back to you within one business day.</span>
                </p>
                <button type="button" onClick={() => setContactSuccess(false)} className="mt-6 text-sm font-bold text-[#979093] hover:text-[#302127] transition-colors">
                  <span>Send another message</span>
                </button>
              </motion.div> : <>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contactFullName" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                      <span>Full Name </span><span className="text-[#F37D39]">*</span>
                    </label>
                    <input id="contactFullName" name="fullName" type="text" autoComplete="name" required placeholder="Jane Smith" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contactBusinessName" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                      <span>Business Name </span><span className="text-[#F37D39]">*</span>
                    </label>
                    <input id="contactBusinessName" name="businessName" type="text" autoComplete="organization" required placeholder="Acme Coffee Co." className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contactBusinessEmail" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                      <span>Business Email </span><span className="text-[#F37D39]">*</span>
                    </label>
                    <input id="contactBusinessEmail" name="businessEmail" type="email" autoComplete="email" required placeholder="name@business.com" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contactPhone" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                      <span>Phone Number</span>
                    </label>
                    <input id="contactPhone" name="phoneNumber" type="tel" autoComplete="tel" placeholder="+1 (555) 123-4567" className="w-full min-h-[56px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                  </div>

                  <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                    <label htmlFor="contactMessage" className="text-[#302127] text-[15px] font-bold tracking-[-0.2px]">
                      <span>Message </span><span className="text-[#F37D39]">*</span>
                    </label>
                    <textarea id="contactMessage" name="message" required placeholder="Tell us how we can help..." className="w-full min-h-[120px] bg-[#FAF8F9] text-[#302127] text-[18px] font-medium border border-[#979093]/35 rounded-[16px] px-[18px] py-[14px] resize-none outline-none transition-all duration-200 focus:border-[#4C93AF] focus:ring-1 focus:ring-[#4C93AF] focus:bg-white placeholder:text-[#979093]/50" />
                  </div>
                </div>

                <div className="relative z-10 mt-2">
                  <button type="submit" disabled={contactSubmitting} className="group w-full min-h-[58px] bg-[#FCB827] text-[#2A1F16] text-[20px] font-bold tracking-[-0.4px] rounded-full border border-[#F37D39]/30 shadow-[0_5px_0_0_#F37D39,0_8px_14px_0_rgba(48,33,39,0.1)] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#F37D39,0_4px_8px_0_rgba(48,33,39,0.1)] active:translate-y-[5px] active:shadow-[0_0_0_0_#F37D39,0_0_0_0_rgba(48,33,39,0)] transition-all duration-200 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                    {contactSubmitting ? <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#2A1F16]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </> : <span className="relative z-10">Send Message</span>}
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
      </section>

      <section className="relative w-full overflow-hidden bg-[#fef0e9] py-20 md:py-28 lg:py-32" style={{
      background: "#ffffff"
    }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
          <motion.div variants={ctaStagger} initial="hidden" whileInView="show" viewport={{
          once: true,
          amount: 0.3
        }} className="flex flex-col items-center text-center">
            <motion.p variants={ctaFadeUp} className="mb-4 text-sm font-bold uppercase tracking-wide text-[#979093]">
              <span style={{
              display: "none"
            }}>Get started</span>
            </motion.p>
            <motion.h2 variants={ctaFadeUp} className="m-0 max-w-[820px] font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[40px] font-black leading-[1.02] md:text-[64px]" style={{
            fontFamily: "Rodger Test"
          }}>
              <span>Start Growing Your Loyalty Program Today.</span>
            </motion.h2>
            <motion.p variants={ctaFadeUp} className="mt-5 max-w-[620px] text-lg leading-[1.52] text-[#4B4246] md:text-xl">
              <span>Launch your first reward card in minutes — no contracts, no setup fees.</span>
            </motion.p>

            <motion.div variants={ctaFadeUp} className="relative mt-10 w-full max-w-[583px]">
              <div className="pointer-events-none absolute -bottom-10 left-1/2 h-[150%] w-full -translate-x-1/2 rounded-full opacity-70 blur-2xl" style={{
              backgroundImage: 'radial-gradient(80% 60% at 50% 80%, rgba(252, 184, 39, 0.28), rgba(243, 125, 57, 0.1) 60%, rgba(0, 0, 0, 0) 100%)'
            }} />
              <form onSubmit={handleSubmit} className="relative z-10 flex w-full flex-col gap-2 rounded-[2rem] border-2 border-[#fcb827]/60 bg-white/70 p-1.5 shadow-[0_6px_12px_0_rgba(48,33,39,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-[#fcb827] hover:shadow-[0_8px_20px_0_rgba(48,33,39,0.12)] sm:flex-row sm:items-center sm:rounded-full">
                <label htmlFor="kb-cta-email" className="sr-only">Email address</label>
                <input id="kb-cta-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="name@email.com" className="min-h-[62px] w-full flex-1 rounded-full bg-[#f4eff2] px-6 text-lg font-medium tracking-tight text-[#302127] placeholder:text-[#302127]/40 outline-none transition-colors focus:bg-[#ebe3e7] md:text-[22px]" />
                <button type="submit" className="group relative isolate flex min-h-[62px] w-full shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#f37d39]/30 bg-[#fcb827] px-8 text-[20px] font-bold tracking-tight text-[#2a1f16] shadow-[0_5px_0_0_#f37d39,0_8px_14px_0_rgba(48,33,39,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#f37d39,0_12px_18px_0_rgba(48,33,39,0.15)] active:translate-y-1 active:shadow-[0_1px_0_0_#f37d39,0_2px_4px_0_rgba(48,33,39,0.1)] sm:w-auto">
                  <span className="absolute inset-0 z-0 block rounded-full opacity-60 pointer-events-none" style={{
                  backgroundImage: 'linear-gradient(112deg, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 0.34) 44%, rgba(255, 255, 255, 0) 68%)'
                }} />
                  <span className="relative z-10 whitespace-nowrap">Start Free in 2 Minutes</span>
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>;
};