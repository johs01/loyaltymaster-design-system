import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, HelpCircle, Plus, Search, Tags } from 'lucide-react';
const ease = [0.22, 1, 0.36, 1] as const;
const categories = ['Getting started', 'Digital cards', 'Rewards', 'Billing', 'Messaging'];
type FAQItem = {
  question: string;
  answer: string;
};
const faqs: FAQItem[] = [{
  question: 'How quickly can I launch a loyalty card?',
  answer: 'Most launches can move from setup to review quickly once the card goal, branding, and first reward are clear.'
}, {
  question: 'Do customers need to download an app?',
  answer: 'No app required. LoyaltyMaster cards live in Apple Wallet and Google Wallet, so customers add their card with a single tap from a link, QR code, or your website. That means a frictionless sign-up and instant access to rewards.'
}, {
  question: 'Can I send push, email, SMS, WhatsApp, and Messenger campaigns?',
  answer: 'Yes. LoyaltyMaster includes built-in campaigns across wallet push, email, SMS, WhatsApp, and Messenger from a single dashboard. You can segment by visit frequency, points balance, or last activity, then schedule or automate sends to bring customers back at the right moment.'
}, {
  question: 'Can the rewards program match my brand?',
  answer: 'Absolutely. Every card, landing page, and message is fully customizable — your logo, colors, imagery, tone of voice, and reward names. Customers see a consistent, premium experience that feels like a natural extension of your brand, not a generic loyalty template.'
}, {
  question: 'What reporting is included?',
  answer: 'Your dashboard tracks sign-ups, active members, visit frequency, redemption rates, revenue per member, and campaign performance in real time. You can break results down by location, segment, or reward, and export the data anytime to share with your team or feed into your existing analytics stack.'
}];
export const FAQIndexSearch = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <main className="min-h-screen w-full overflow-hidden bg-[#FEF0E9] font-[Onest,Arial,sans-serif] text-[#302127]">
      <section className="w-full px-6 py-14 md:px-12 md:py-[76px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-end">
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
            <p className="mb-[14px] text-base font-bold uppercase leading-none text-[#979093]">Frequently asked questions</p>
            <h1 className="m-0 max-w-[700px] font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[50px] font-black leading-[0.98] md:text-[72px]" style={{
            fontFamily: "Rodger Test"
          }}>
              Answers organized for real buying questions.
            </h1>
            <p className="mt-6 max-w-[640px] text-xl leading-[1.52] text-[#4B4246]">
              A full FAQ index with search and categories, not just a single accordion placed on a blank page.
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
              <span className="text-lg font-semibold text-[#302127]/50">Search...</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map(category => <span key={category} className="rounded-full border border-[#979093]/20 bg-[#EAF5F8] px-4 py-2 text-sm font-bold text-[#302127]">{category}</span>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#EAF5F8] px-6 py-14 md:px-12">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-[20px] bg-[#302127] p-6 text-white shadow-[0_14px_30px_rgba(48,33,39,0.14)]">
            <Tags className="h-10 w-10 text-[#FCB827]" aria-hidden="true" style={{
            display: "none"
          }} />
            <h2 className="m-0 mt-5 text-[34px] font-black leading-tight">Browse by topic</h2>
            <div className="mt-6 grid gap-3">
              {categories.map((category, index) => <div key={category} className="flex items-center justify-between rounded-[16px] bg-white/10 px-4 py-3 text-base font-bold">
                  {category}
                  <span className="rounded-full bg-[#FCB827] px-2.5 py-1 text-xs font-black text-[#2A1F16]">{index + 3}</span>
                </div>)}
            </div>
          </aside>

          <motion.div initial={{
          opacity: 0,
          y: 24
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.58,
          ease
        }} className="grid gap-3 mt-[30px]">
            {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return <div key={faq.question} className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-[#f37d39]/30 bg-[#fbfcfd] shadow-[0_10px_18px_0_rgba(48,33,39,0.1)]' : 'border-[#979093]/30 bg-[#faf8f9] hover:border-[#979093]/50 hover:bg-[#f4f1f2]'}`}>
                <button id={`faq-header-${index}`} aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} onClick={() => toggleAccordion(index)} className="flex w-full cursor-pointer items-center justify-between p-[18px_20px] text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f37d39] focus-visible:ring-offset-2">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#FDE9E2]">
                      <HelpCircle className="h-6 w-6 text-[#F37D39]" aria-hidden="true" />
                    </span>
                    <span className={`text-lg font-bold tracking-[-0.4px] md:text-xl transition-colors duration-200 ${isOpen ? 'text-[#f37d39]' : 'text-[#302127]'}`}>{faq.question}</span>
                  </div>
                  <motion.div animate={{
                  rotate: isOpen ? 45 : 0
                }} transition={{
                  duration: 0.2,
                  ease: 'easeOut'
                }} className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center text-[#f37d39]">
                    <Plus className="h-6 w-6 stroke-[3]" aria-hidden="true" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && faq.answer ? <motion.div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-header-${index}`} initial={{
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
                    duration: 0.2,
                    delay: isOpen ? 0.1 : 0
                  }
                }}>
                      <div className="px-[20px] pb-[18px] pt-1 text-base leading-relaxed tracking-[-0.4px] text-[#302127]/80 md:text-lg">
                        <p className="m-0">{faq.answer}</p>
                      </div>
                    </motion.div> : null}
                </AnimatePresence>
              </div>;
          })}
            <motion.a href="#" onClick={event => event.preventDefault()} className="group relative inline-flex min-h-[58px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#FCB827] px-8 text-[20px] font-bold tracking-[-0.4px] text-[#2A1F16]" style={{
            boxShadow: '0px 5px 0px 0px #F37D39, 0px 8px 14px 0px rgba(48, 33, 39, 0.1)',
            border: '1px solid rgba(243, 125, 57, 0.3)'
          }} whileHover={{
            y: -2
          }} whileTap={{
            y: 4,
            boxShadow: '0px 1px 0px 0px #F37D39, 0px 2px 4px 0px rgba(48, 33, 39, 0.1)'
          }}>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" aria-hidden="true" />
              <span className="relative z-10 inline-flex items-center gap-2">
                <span>View all answers</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" style={{
                display: "none"
              }} />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{
      __html: `@keyframes shimmer { 100% { transform: translateX(100%); } }`
    }} />
    </main>;
};