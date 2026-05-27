import { motion } from 'framer-motion';
const heroImage = 'https://storage.googleapis.com/storage.magicpath.ai/component-assets/408989725962158080/408989725962158081/cb5c44db0739b4c334a379c9a31258afdf8765dfe2290d639a3f684ab158c5e4.png';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};
const stagger = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};
const storyParagraphs = ['For years, large corporations used gift cards, loyalty cards, VIP cards, and digital rewards programs to keep customers coming back. Big-box brands had the budget and the teams to make repeat business feel automatic.', 'Small and medium-sized businesses were left with the harder version of the same problem: high setup costs, unclear technology, and no practical mentor to turn a good customer idea into immediate results.', 'Loyaltymaster levels that field with a user-friendly digital loyalty and rewards platform built for operators who need clear value, fast launch, and a repeatable way to bring customers back.', 'From the first scan to the next visit, every interaction can become part of a branded customer journey that works without breaking the bank.'];
const rewardPoints = [{
  title: 'App-free for customers',
  body: 'Works inside Apple Wallet and Google Wallet, so customers join without another download.'
}, {
  title: 'Multi-channel follow-up',
  body: 'Reach people through push, email, SMS, WhatsApp, and Messenger from one program.'
}, {
  title: 'Automated referral growth',
  body: 'Built-in prompts make it natural for new customers to bring in the next customer.'
}, {
  title: 'Real-time reporting',
  body: 'See how rewards are performing and adjust offers while the campaign is live.'
}];
const timeline = ['Scan', 'Join', 'Reward', 'Return'];
export const ArticleBody = () => {
  return <article className="min-h-screen w-full overflow-hidden bg-[#FEF0E9] font-[Onest,Arial,sans-serif] text-[#302127]">
      <section className="relative w-full overflow-hidden bg-[#FEF0E9] px-6 py-14 md:px-12 md:py-[76px]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-11 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.98fr)] lg:gap-14">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-[620px]">
            
            <motion.p variants={fadeUp} className="mb-[14px] text-base font-bold uppercase leading-none text-[#979093]">
              About us
            </motion.p>
            <motion.h1 variants={fadeUp} className="m-0 max-w-[620px] font-['Rodger_Bold','Arial_Black',Arial,sans-serif] text-[52px] font-black leading-[0.98] text-[#302127] md:text-[72px]" style={{
            fontFamily: "Rodger Test",
            fontWeight: "700"
          }}>
              
              From First Scan to Loyal Fan
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-[590px] text-xl leading-[1.52] text-[#302127]">
              A practical article body for explaining how Loyaltymaster turns everyday customer moments into repeat visits.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 grid max-w-[580px] gap-5">
              {storyParagraphs.map(paragraph => <p key={paragraph} className="m-0 text-[19px] leading-[1.56] text-[#4B4246]">
                  {paragraph}
                </p>)}
            </motion.div>
          </motion.div>

          <motion.figure initial={{
          opacity: 0,
          scale: 0.96,
          y: 24
        }} animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} transition={{
          duration: 0.66,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1]
        }} className="relative m-0">
            
            <div className="relative overflow-hidden rounded-[20px] border border-[#979093]/20 bg-white shadow-[0_16px_34px_rgba(48,33,39,0.12)]">
              <img src={heroImage} alt="Customer joining a digital loyalty rewards program at a local coffee shop" className="h-[520px] w-full object-cover lg:h-[610px]" />
              <div className="absolute inset-x-5 bottom-5 rounded-[18px] border border-white/70 bg-white/90 p-5 shadow-[0_10px_24px_rgba(48,33,39,0.16)] backdrop-blur-md">
                <p className="m-0 text-sm font-bold uppercase leading-none text-[#979093]">Customer journey</p>
                <div className="mt-4 grid grid-cols-4 gap-2" aria-label="Digital rewards journey">
                  {timeline.map((step, index) => <div key={step} className="relative rounded-[14px] bg-[#FAF8F9] px-3 py-3 text-center">
                      <span className="mx-auto mb-2 block h-[18px] w-[18px] rounded-[7px] bg-[#FCB827] shadow-[0_5px_0_#F37D39]" aria-hidden="true" />
                      <span className="block text-sm font-bold leading-tight text-[#302127]">{step}</span>
                      {index < timeline.length - 1 ? <span className="absolute right-[-8px] top-1/2 z-10 h-0.5 w-4 bg-[#F37D39]" aria-hidden="true" /> : null}
                    </div>)}
                </div>
              </div>
            </div>
          </motion.figure>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#EAF5F8] px-6 py-14 md:px-12 md:py-[72px]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(460px,1fr)] lg:gap-14">
          <motion.div initial={{
          opacity: 0,
          y: 28
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.58,
          ease: [0.22, 1, 0.36, 1]
        }}>
            
            <p className="mb-[14px] text-base font-bold uppercase leading-none text-[#979093]">Electronic rewards</p>
            <h2 className="m-0 max-w-[690px] font-['Rodger_Bold','Arial_Black',Arial,sans-serif] text-[42px] font-black leading-[1.04] text-[#302127] md:text-[56px]">
              Buy 9, Get 1 Free, without paper cards or tech headaches.
            </h2>
            <p className="mt-6 max-w-[720px] text-xl leading-[1.54] text-[#302127]">
              Electronic rewards bring familiar loyalty mechanics into a branded digital program. Customers can scan, join, earn, and return without carrying a card or installing an app.
            </p>
            <blockquote className="mt-8 border-l-[6px] border-[#F37D39] bg-white px-6 py-5 text-[22px] font-bold leading-[1.32] text-[#302127] shadow-[0_8px_18px_rgba(48,33,39,0.06)]">
              You can be up and running in 48 business hours with a program tailored to your business.
            </blockquote>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate="visible" className="grid gap-4">
            
            {rewardPoints.map(point => <motion.div variants={fadeUp} key={point.title} className="rounded-[20px] border border-[#979093]/20 bg-white p-5 shadow-[0_8px_20px_rgba(48,33,39,0.06)]">
              
                <div className="flex items-start gap-4">
                  <span className="mt-1 block h-[18px] w-[18px] shrink-0 rounded-[6px] bg-[#FCB827] shadow-[0_5px_0_#F37D39]" aria-hidden="true" />
                  <div>
                    <h3 className="m-0 text-[22px] font-bold leading-tight text-[#302127]">{point.title}</h3>
                    <p className="m-0 mt-2 text-[17px] leading-[1.52] text-[#5A5055]">{point.body}</p>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#302127] px-6 py-10 text-white md:px-12">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="m-0 text-sm font-bold uppercase leading-none text-white/55">Ready for the next visit</p>
            <h2 className="m-0 mt-3 max-w-[760px] font-['Rodger_Bold','Arial_Black',Arial,sans-serif] text-[34px] font-black leading-[1.06] md:text-[44px]">
              Keep the prose readable, warm, and conversion-ready.
            </h2>
          </div>
          <a href="#" onClick={event => event.preventDefault()} className="group relative inline-flex min-h-[58px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#F37D39]/30 bg-[#FCB827] px-7 text-[20px] font-bold text-[#2A1F16] shadow-[0_5px_0_#F37D39,0_8px_14px_rgba(48,33,39,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_7px_0_#F37D39,0_12px_18px_rgba(48,33,39,0.2)] active:translate-y-1">
            
            <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(112deg,transparent_14%,rgba(255,255,255,0.42)_44%,transparent_68%)] opacity-60 transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
            <span className="relative z-10">Build the next loyalty page</span>
          </a>
        </div>
      </section>
    </article>;
};
