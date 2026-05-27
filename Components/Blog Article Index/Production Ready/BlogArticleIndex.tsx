import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Newspaper, Search, Tags } from 'lucide-react';
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
const stagger = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06
    }
  }
};
const articles = [{
  title: 'How digital loyalty cards turn one visit into the next one',
  category: 'Customer retention',
  read: '6 min',
  summary: 'A practical look at repeat business mechanics for small and medium-sized teams.',
  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  imageAlt: 'Customer completing a purchase at a small business checkout counter'
}, {
  title: 'Electronic rewards without another customer app',
  category: 'Rewards',
  read: '4 min',
  summary: 'Why wallet-based programs remove friction at the exact moment customers are ready.',
  image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&q=80',
  imageAlt: 'Person using a phone to view digital rewards and offers'
}, {
  title: 'When to use push, email, SMS, WhatsApp, or Messenger',
  category: 'Messaging',
  read: '7 min',
  summary: 'Channel choices for campaigns that need clear timing and measurable returns.',
  image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
  imageAlt: 'Mobile phone showing customer messaging notifications'
}];
const paths = ['Getting started', 'Reward strategy', 'Branded cards', 'Campaign ideas'];
export const BlogArticleIndex = () => {
  return <article className="min-h-screen w-full overflow-hidden bg-[#FEF0E9] font-[Onest,Arial,sans-serif] text-[#302127]">
      <section className="w-full px-6 py-14 md:px-12 md:py-[76px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:items-end">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="mb-[14px] text-base font-bold uppercase leading-none text-[#979093]">
              Blog
            </motion.p>
            <motion.h1 variants={fadeUp} className="m-0 max-w-[720px] font-['Rodger_Test',serif] font-heading text-[50px] font-black font-bold leading-[0.98] md:text-[74px]" style={{
            fontFamily: "Rodger Test",
            fontWeight: "700"
          }}>
              Loyalty ideas built for busy operators.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-[650px] text-xl leading-[1.52] text-[#4B4246]">
              A warm editorial index for articles, guides, and repeat-business thinking without the generic card-grid feel.
            </motion.p>
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
        }} className="rounded-[20px] border border-[#979093]/20 bg-white p-5 shadow-[0_16px_34px_rgba(48,33,39,0.1)]">
            <div className="flex items-center gap-3 rounded-full bg-[#FAF8F9] px-5 py-4">
              <Search className="h-5 w-5 text-[#F37D39]" aria-hidden="true" />
              <span className="text-lg font-semibold text-[#302127]/70">Search</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Retention', 'Rewards', 'Wallet cards', 'Messaging'].map(tag => <span key={tag} className="rounded-full border border-[#979093]/20 bg-[#EAF5F8] px-4 py-2 text-sm font-bold text-[#302127]">
                  {tag}
                </span>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#EAF5F8] px-6 py-14 md:px-12 md:py-[72px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-[1.1fr_0.72fr]">
          <motion.a href="#" onClick={event => event.preventDefault()} initial={{
          opacity: 0,
          y: 26
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.58,
          ease
        }} className="group grid overflow-hidden rounded-[20px] border border-[#979093]/20 bg-white shadow-[0_12px_28px_rgba(48,33,39,0.08)] md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[320px] bg-[#302127] p-6 text-white">
              <div className="absolute inset-0 opacity-80" style={{
              backgroundImage: 'radial-gradient(circle at 24% 22%, rgba(252,184,39,0.9), transparent 23%), radial-gradient(circle at 80% 72%, rgba(243,125,57,0.65), transparent 24%)'
            }} />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <Newspaper className="h-12 w-12 text-[#FCB827]" aria-hidden="true" style={{
                display: "none"
              }} />
                <div>
                  <p className="m-0 text-sm font-bold uppercase text-white/65">Featured guide</p>
                  <p className="m-0 mt-2 text-[34px] font-black leading-[1.02]">The practical repeat-business playbook</p>
                </div>
              </div>
            </div>
            <div className="p-7 md:p-8">
              <p className="m-0 flex items-center gap-2 text-sm font-bold uppercase text-[#979093]">
                <Clock className="h-4 w-4" aria-hidden="true" /> 8 min read
              </p>
              <h2 className="m-0 mt-4 text-[34px] font-black leading-[1.08] text-[#302127] md:text-[46px]">
                What customers need before they come back again
              </h2>
              <p className="mt-5 text-lg leading-[1.55] text-[#5A5055]">
                Use a readable editorial pattern with metadata, summaries, featured content, and clear routes into deeper learning.
              </p>
              <motion.a href="#" onClick={event => event.preventDefault()} whileHover={{
              y: -2
            }} whileTap={{
              y: 4,
              boxShadow: '0px 1px 0px 0px #F37D39, 0px 2px 4px 0px rgba(48, 33, 39, 0.1)'
            }} style={{
              boxShadow: '0px 5px 0px 0px #F37D39, 0px 8px 14px 0px rgba(48, 33, 39, 0.1)',
              border: '1px solid rgba(243, 125, 57, 0.3)'
            }} className="group relative mt-7 inline-flex min-h-[58px] items-center overflow-hidden rounded-full bg-[#FCB827] px-8 text-[20px] font-bold tracking-[-0.4px] text-[#2A1F16]">
                <span className="relative z-10">Read featured article</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none group-hover:animate-[shimmer_1.5s_infinite]" aria-hidden="true" />
              </motion.a>
              <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
            </div>
          </motion.a>

          <motion.aside variants={stagger} initial="hidden" animate="visible" className="grid gap-4">
            <motion.div variants={fadeUp} className="rounded-[20px] bg-[#302127] p-6 text-white shadow-[0_12px_28px_rgba(48,33,39,0.12)]">
              <BookOpen className="h-9 w-9 text-[#FCB827]" aria-hidden="true" style={{
              display: "none"
            }} />
              <h3 className="m-0 mt-4 text-[28px] font-black leading-tight">Reading paths</h3>
              <div className="mt-5 grid gap-3">
                {paths.map(path => <div key={path} className="flex items-center justify-between rounded-[16px] bg-white/10 px-4 py-3 text-base font-bold">
                    {path}
                    <ArrowRight className="h-4 w-4 text-[#FCB827]" aria-hidden="true" />
                  </div>)}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-[20px] border border-[#979093]/20 bg-white p-6">
              <Tags className="h-8 w-8 text-[#F37D39]" aria-hidden="true" style={{
              display: "none"
            }} />
              <p className="m-0 mt-3 text-lg font-bold">Browse by business outcome, not publishing date.</p>
            </motion.div>
          </motion.aside>
        </div>
      </section>

      <section className="w-full bg-[#FEF0E9] px-6 py-14 md:px-12">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mx-auto grid w-full max-w-[1280px] items-start gap-5 md:grid-cols-3">
          {articles.map(article => <motion.a key={article.title} variants={fadeUp} href="#" onClick={event => event.preventDefault()} className="group flex flex-col rounded-[20px] border border-[#979093]/20 bg-white p-6 shadow-[0_8px_20px_rgba(48,33,39,0.06)] transition-transform duration-200 hover:-translate-y-1">
              <p className="m-0 text-sm font-bold uppercase text-[#979093]">{article.category}</p>
              <h3 className="m-0 mt-4 font-['Rodger_Test',serif] text-[26px] font-bold leading-[1.08] text-[#302127]">{article.title}</h3>
              <p className="mt-4 text-base leading-[1.52] text-[#5A5055]">{article.summary}</p>
              <div className="mt-6 flex items-center justify-between text-sm font-bold text-[#302127]">
                <span>{article.read}</span>
                <ArrowRight className="h-5 w-5 text-[#F37D39] transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <img src={article.image} alt={article.imageAlt} className="-mx-6 -mb-6 mt-auto block h-[180px] w-[calc(100%+3rem)] rounded-b-xl object-cover object-center" />
            </motion.a>)}
        </motion.div>
      </section>
    </article>;
};
