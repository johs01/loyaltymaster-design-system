import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease
    }
  }
};
const expectations = ['Review your business model', 'Map first reward card flow', 'Confirm launch timeline'];
const questionCards = [{
  id: 'brand-assets',
  title: 'Can I use my own brand assets?',
  description: 'Answered inside the meeting, with the setup route made visible.',
  color: '#F37D39'
}, {
  id: 'customer-app',
  title: 'Will customers need to download an app?',
  description: 'Answered inside the meeting, with the setup route made visible.',
  color: '#FCB827'
}, {
  id: 'first-card-live',
  title: 'How fast can the first card go live?',
  description: 'Answered inside the meeting, with the setup route made visible.',
  color: '#4C93AF'
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export const BookingDemoRequestSection = () => {
  return <main className="min-h-screen w-full overflow-hidden bg-[#FEF0E9] font-[Onest,Arial,sans-serif] text-[#302127]">
      <section className="w-full px-6 py-14 md:px-12 md:py-[76px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={{
          visible: {
            transition: {
              staggerChildren: 0.08
            }
          },
          hidden: {}
        }}>
            <motion.p variants={fadeUp} className="mb-[14px] text-base font-bold uppercase leading-none text-[#979093]">
              Book a virtual meeting
            </motion.p>
            <motion.h1 variants={fadeUp} className="m-0 max-w-[650px] font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[50px] font-black leading-[0.98] md:text-[72px]" style={{
            fontFamily: "Rodger Test",
            fontWeight: "700"
          }}>Book a demo with a Loyaltymaster expert</motion.h1>
            <motion.div variants={fadeUp} className="mt-7 flex h-[240px] w-full items-center justify-center rounded-[20px] border border-[#979093]/20 bg-[#E5E7EB] p-5 shadow-[0_18px_38px_rgba(48,33,39,0.12)] md:hidden">
              <div className="flex flex-col items-center justify-center text-center">
                <svg className="h-14 w-14 text-[#9CA3AF]" viewBox="0 0 64 64" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="14" width="44" height="36" rx="6" stroke="currentColor" strokeWidth="4" />
                  <circle cx="25" cy="27" r="5" fill="currentColor" />
                  <path d="M16 45L29 34L38 42L44 37L52 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="m-0 mt-3 text-sm font-medium text-[#6B7280]">Image Placeholder</p>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 max-w-[610px] text-xl leading-[1.52] text-[#4B4246]">
              A booking section that feels guided and practical, with expectation copy and a polished embed wrapper instead of a raw scheduling iframe.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 grid gap-3">
              {expectations.map(item => <div key={item} className="flex items-center gap-3 text-lg font-bold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#FCB827] shadow-[0_4px_0_#F37D39]">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" style={{
                  display: "none"
                }} />
                  </span>
                  {item}
                </div>)}
            </motion.div>
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
          delay: 0.1,
          ease
        }} className="hidden min-h-[420px] items-center justify-center rounded-[20px] border border-[#979093]/20 bg-[#E5E7EB] p-5 shadow-[0_18px_38px_rgba(48,33,39,0.12)] md:flex">
            <div className="flex flex-col items-center justify-center text-center">
              <svg className="h-14 w-14 text-[#9CA3AF]" viewBox="0 0 64 64" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="14" width="44" height="36" rx="6" stroke="currentColor" strokeWidth="4" />
                <circle cx="25" cy="27" r="5" fill="currentColor" />
                <path d="M16 45L29 34L38 42L44 37L52 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="m-0 mt-3 text-sm font-medium text-[#6B7280]">Image Placeholder</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#EAF5F8] px-6 py-14 md:px-12">
        <motion.div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }}>
          {questionCards.map(card => <motion.article key={card.id} variants={itemVariants} className="relative cursor-default rounded-[16px] bg-[#FAF8F9] p-[22px_20px] group">
              <span className="pointer-events-none absolute inset-0 rounded-[16px] bg-gradient-to-b from-white/50 to-transparent opacity-0 transition-opacity duration-240 ease-out group-hover:opacity-100" aria-hidden="true" />
              <div className="mb-[14px] flex h-[28px] w-[28px] items-center justify-center rounded-[8px] shadow-sm" style={{
            backgroundColor: card.color
          }}>
                <svg className="h-[14px] w-[14px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{
              display: 'none'
            }}>
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
              </div>
              <h3 className="relative z-10 mb-0 text-[24px] font-bold leading-[24px] tracking-[-0.4px] text-[#302127]" style={{
            fontFamily: 'Rodger Test, serif'
          }}>{card.title}</h3>
              <p className="relative z-10 mt-[10px] text-[18px] leading-[24px] tracking-[-0.4px] text-[#302127] opacity-90">{card.description}</p>
            </motion.article>)}
        </motion.div>
      </section>
    </main>;
};
