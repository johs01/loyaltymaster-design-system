import { motion } from 'framer-motion';
import { CalendarDays, FileText, Lock, ShieldCheck } from 'lucide-react';
const ease = [0.22, 1, 0.36, 1] as const;
const sections = ['Introduction', 'Information we collect', 'How we use information', 'Cookies and tracking', 'Your rights'];
const clauses = [{
  title: 'Information and account details',
  body: 'This pattern supports dense policy text with readable line length, clear headings, and enough spacing for long legal clauses.'
}, {
  title: 'Digital wallet and campaign data',
  body: 'Structured legal copy can explain how customer, campaign, and wallet-card information is processed without becoming a marketing page.'
}, {
  title: 'Retention, security, and contact routes',
  body: 'Support links, metadata, and document update notes remain visible while the main document stays calm and scannable.'
}];
export const LegalDocumentBody = () => {
  return <article className="min-h-screen w-full overflow-hidden bg-[#FEF0E9] font-[Onest,Arial,sans-serif] text-[#302127]">
      <section className="w-full px-6 py-14 md:px-12 md:py-[76px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.aside initial={{
          opacity: 0,
          y: 24
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.58,
          ease
        }} className="lg:sticky lg:top-8 lg:self-start">
            <p className="mb-[14px] text-base font-bold uppercase leading-none text-[#979093]" style={{
            fontFamily: "Rodger Test"
          }}>Legal document body</p>
            <h1 className="m-0 mb-6 max-w-[560px] font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[44px] font-black leading-[0.98] tracking-tight text-[#302127] md:text-[64px]">
              Loyaltymaster Privacy Policy
            </h1>
            <div className="mt-8 rounded-[20px] bg-[#302127] p-6 text-white shadow-[0_14px_30px_rgba(48,33,39,0.14)]" style={{
            display: "none"
          }}>
              <FileText className="h-10 w-10 text-[#FCB827]" aria-hidden="true" />
              <p className="m-0 mt-4 text-sm font-bold uppercase text-white/55">Document contents</p>
              <div className="mt-5 grid gap-2">
                {sections.map(section => <a key={section} href="#" onClick={event => event.preventDefault()} className="rounded-[14px] bg-white/10 px-4 py-3 text-sm font-bold text-white">
                    {section}
                  </a>)}
              </div>
            </div>
          </motion.aside>

          <motion.div initial={{
          opacity: 0,
          scale: 0.98,
          y: 24
        }} animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} transition={{
          duration: 0.64,
          delay: 0.08,
          ease
        }} className="relative left-1/2 -translate-x-1/2 col-span-full min-h-screen w-screen rounded-none border-0 bg-white p-6 shadow-none md:p-8" style={{
          paddingRight: "32px",
          paddingBottom: "32px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap"
        }}>
            <div className="flex flex-col gap-4 border-b border-[#979093]/20 pb-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF5F8] px-4 py-2 text-sm font-bold">
                    <CalendarDays className="h-4 w-4 text-[#F37D39]" aria-hidden="true" /> <span>Updated May 2026</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FDE9E2] px-4 py-2 text-sm font-bold">
                    <Lock className="h-4 w-4 text-[#F37D39]" aria-hidden="true" /> <span>Body only</span>
                  </span>
                </div>
                <p className="m-0 text-sm font-bold uppercase text-[#979093]">Privacy policy example</p>
                <h2 className="m-0 mt-2 text-[38px] font-black leading-tight" style={{
                fontFamily: "Rodger Test"
              }}>Loyaltymaster Privacy Policy</h2>
              </div>
            </div>
            <div className="mt-7 grid gap-7">
              {clauses.map(clause => <section key={clause.title}>
                  <h3 className="m-0 text-[28px] font-black leading-tight">{clause.title}</h3>
                  <p className="m-0 mt-3 max-w-[760px] text-[18px] leading-[1.68] text-[#4B4246]">{clause.body}</p>
                  <p className="m-0 mt-4 max-w-[760px] text-[18px] leading-[1.68] text-[#4B4246]">
                    The layout avoids narrow gray walls of text by pairing strong headings, visible anchors, and restrained document metadata.
                  </p>
                </section>)}
            </div>
            <div className="mt-8 rounded-[18px] bg-[#EAF5F8] p-5">
              <ShieldCheck className="h-7 w-7 text-[#F37D39]" aria-hidden="true" />
              <p className="m-0 mt-3 text-lg font-bold leading-[1.45]">
                Legal pages should remain trustworthy, readable, and clearly separate from conversion sections.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </article>;
};