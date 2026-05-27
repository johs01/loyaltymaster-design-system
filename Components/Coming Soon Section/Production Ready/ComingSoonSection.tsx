import { motion } from 'framer-motion';
import { ArrowRight, Hourglass, Mail, Rocket, TimerReset } from 'lucide-react';
import { useState, type FormEvent } from 'react';
const ease = [0.22, 1, 0.36, 1] as const;
const milestones = ['Design lock', 'Content review', 'Launch window'];
export const ComingSoonSection = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted email:', email);
  };
  return <main className="min-h-screen w-full max-w-full overflow-hidden bg-[#FEF0E9] font-[Onest,Arial,sans-serif] text-[#302127]">
      <section className="relative w-full max-w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-16 md:px-12 md:py-[92px]">
        <div className="absolute inset-x-0 top-0 h-[46%] bg-[#EAF5F8]" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-[1280px] gap-8 rounded-[20px] sm:rounded-[24px] border border-[#979093]/20 bg-white p-4 sm:p-6 shadow-[0_18px_42px_rgba(48,33,39,0.12)] md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial={{
          opacity: 0,
          y: 24
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.58,
          ease
        }} className="w-full min-w-0">
            <p className="mb-[14px] text-base font-bold uppercase leading-none text-[#979093]">Coming soon</p>
            <h1 className="m-0 w-full max-w-full break-words font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[70px] font-black leading-[1.02] md:leading-[0.98]" style={{
            fontFamily: "Rodger Test"
          }}>
              The next Loyaltymaster page is <span style={{
              color: '#F97316'
            }}>warming</span> up.
            </h1>
            <p className="mt-5 sm:mt-6 w-full max-w-[610px] text-base sm:text-lg md:text-xl leading-[1.52] text-[#4B4246]">
              A body-only maintenance section that feels intentional, helpful, and on-brand instead of looking like a blank holding page.
            </p>
            <div className="relative mt-7 sm:mt-8 w-full max-w-[583px]">
              <div className="pointer-events-none absolute -bottom-10 left-1/2 h-[150%] w-full -translate-x-1/2 rounded-full opacity-70 blur-2xl" aria-hidden="true" style={{
              backgroundImage: 'radial-gradient(80% 60% at 50% 80%, rgba(252, 184, 39, 0.18), rgba(243, 125, 57, 0.06) 60%, rgba(0, 0, 0, 0) 100%)'
            }} />
              <form onSubmit={handleSubmit} className="relative z-10 flex w-full flex-col gap-2 rounded-[2rem] border-2 border-[#fcb827]/60 bg-white/70 p-1.5 shadow-[0_6px_12px_0_rgba(48,33,39,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-[#fcb827] hover:shadow-[0_8px_20px_0_rgba(48,33,39,0.12)] sm:flex-row sm:items-center sm:rounded-full">
                <label htmlFor="coming-soon-email" className="sr-only">Email address</label>
                <input id="coming-soon-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="name@email.com" className="min-h-[62px] w-full flex-1 rounded-full bg-[#f4eff2] px-6 text-lg font-medium tracking-tight text-[#302127] placeholder:text-[#302127]/40 outline-none transition-colors focus:bg-[#ebe3e7]" />
                <button type="submit" className="group relative isolate flex min-h-[62px] w-full shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#f37d39]/30 bg-[#fcb827] px-8 text-[20px] font-bold tracking-tight text-[#2a1f16] shadow-[0_5px_0_0_#f37d39,0_8px_14px_0_rgba(48,33,39,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#f37d39,0_12px_18px_0_rgba(48,33,39,0.15)] active:translate-y-1 active:shadow-[0_1px_0_0_#f37d39,0_2px_4px_0_rgba(48,33,39,0.1)] sm:w-auto">
                  <span className="absolute inset-0 z-0 block rounded-full opacity-60 pointer-events-none" aria-hidden="true" style={{
                  backgroundImage: 'linear-gradient(112deg, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 0.34) 44%, rgba(255, 255, 255, 0) 68%)'
                }} />
                  <span className="relative z-10 whitespace-nowrap">Start Free in 2 Minutes</span>
                </button>
              </form>
            </div>
            <div className="relative mt-7 sm:mt-8 w-full max-w-[583px]" style={{
            display: "none"
          }}>
              <div className="pointer-events-none absolute -bottom-10 left-1/2 h-[150%] w-full -translate-x-1/2 rounded-full opacity-70 blur-2xl" aria-hidden="true" style={{
              backgroundImage: 'radial-gradient(80% 60% at 50% 80%, rgba(252, 184, 39, 0.18), rgba(243, 125, 57, 0.06) 60%, rgba(0, 0, 0, 0) 100%)'
            }} />
              <form onSubmit={event => event.preventDefault()} className="relative z-10 flex w-full flex-col gap-2 rounded-[2rem] border-2 border-[#fcb827]/60 bg-white/70 p-1.5 shadow-[0_6px_12px_0_rgba(48,33,39,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-[#fcb827] hover:shadow-[0_8px_20px_0_rgba(48,33,39,0.12)] sm:flex-row sm:items-center sm:rounded-full">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input id="email" type="email" required placeholder="name@email.com" className="min-h-[62px] w-full flex-1 rounded-full bg-[#f4eff2] px-6 text-lg font-medium tracking-tight text-[#302127] placeholder:text-[#302127]/40 outline-none transition-colors focus:bg-[#ebe3e7]" />
                <button type="submit" className="group relative isolate flex min-h-[62px] w-full shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#f37d39]/30 bg-[#fcb827] px-8 text-[20px] font-bold tracking-tight text-[#2a1f16] shadow-[0_5px_0_0_#f37d39,0_8px_14px_0_rgba(48,33,39,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#f37d39,0_12px_18px_0_rgba(48,33,39,0.15)] active:translate-y-1 active:shadow-[0_1px_0_0_#f37d39,0_2px_4px_0_rgba(48,33,39,0.1)] sm:w-auto">
                  <span className="absolute inset-0 z-0 block rounded-full opacity-60 pointer-events-none" aria-hidden="true" style={{
                  backgroundImage: 'linear-gradient(112deg, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 0.34) 44%, rgba(255, 255, 255, 0) 68%)'
                }} />
                  <span className="relative z-10 whitespace-nowrap">Notify Me</span>
                </button>
              </form>
            </div>
            <form onSubmit={event => event.preventDefault()} className="mt-7 sm:mt-8 flex w-full max-w-[620px] flex-col gap-2 sm:gap-3 rounded-[28px] sm:rounded-[32px] border-2 border-[#FCB827]/60 bg-white p-[6px] shadow-[0_6px_12px_rgba(48,33,39,0.08)] sm:flex-row" style={{
            display: "none"
          }}>
              <label className="sr-only" htmlFor="coming-email">Email address</label>
              <span className="flex min-h-[54px] sm:min-h-[58px] w-full flex-1 items-center gap-3 rounded-full bg-[#F4EFF2] px-5 text-base sm:text-lg font-semibold text-[#302127]/45">
                <Mail className="h-5 w-5 text-[#F37D39]" aria-hidden="true" style={{
                display: "none"
              }} /> name@email.com
              </span>
              <button className="group inline-flex min-h-[54px] sm:min-h-[58px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#FCB827] px-6 text-base sm:text-lg font-bold text-[#2A1F16] shadow-[0_5px_0_#F37D39]">
                Notify me <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" style={{
                display: "none"
              }} />
              </button>
            </form>
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
        }} className="relative w-full max-w-full overflow-hidden rounded-[16px] sm:rounded-[20px] shadow-[0_18px_42px_rgba(48,33,39,0.18)]">
            <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1400&q=80" alt="Team preparing for a product launch" className="h-auto w-full max-w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-full overflow-hidden bg-[#FDE9E2] px-4 py-10 sm:px-6 sm:py-12 md:px-12">
        <motion.div className="mx-auto grid w-full max-w-[1280px] gap-4 sm:gap-[18px] md:grid-cols-3" variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15
          }
        }
      }} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }}>
          {[{
          icon: Hourglass,
          title: 'Temporary body state',
          body: 'Useful when the page exists but the full conversion route is not ready.',
          cardBg: 'bg-[#FEF0E9]',
          cardBorder: 'border-[#F37D39]/20',
          badgeBg: 'bg-[#F37D39]',
          badgeText: 'text-white'
        }, {
          icon: Rocket,
          title: 'Launch signal',
          body: 'Gives visitors a clear next step without adding global page chrome.',
          cardBg: 'bg-[#EAF5F8]',
          cardBorder: 'border-[#4C93AF]/20',
          badgeBg: 'bg-[#4C93AF]',
          badgeText: 'text-white'
        }, {
          icon: TimerReset,
          title: 'Easy replacement',
          body: 'Designed to be swapped out cleanly when the destination page is ready.',
          cardBg: 'bg-[#FEF9E6]',
          cardBorder: 'border-[#FCB827]/30',
          badgeBg: 'bg-[#FCB827]',
          badgeText: 'text-[#2A1F16]'
        }].map((item, index) => <motion.article key={item.title} variants={{
          hidden: {
            opacity: 0,
            y: 20
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 15
            }
          }
        }} className={`relative flex w-full max-w-full flex-col gap-[14px] rounded-[20px] p-5 sm:p-[26px] border-[1px] shadow-[0_8px_20px_0_rgba(48,33,39,0.06)] transition-all duration-300 hover:-translate-y-1 ${item.cardBg} ${item.cardBorder}`}>
              <div className="flex items-center gap-[12px]">
                <span className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-[20px] font-bold leading-none ${item.badgeBg} ${item.badgeText}`} aria-hidden="true">
                  {index + 1}
                </span>
                <h2 className="m-0 text-[18px] sm:text-[20px] font-bold leading-[24px] tracking-tight text-[#302127]">{item.title}</h2>
              </div>
              <p className="m-0 text-base leading-[1.5] text-[#302127] opacity-90">{item.body}</p>
            </motion.article>)}
        </motion.div>
      </section>
    </main>;
};