import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
const ease = [0.22, 1, 0.36, 1] as const;
export const NewsletterSignupSection = () => {
  const [email, setEmail] = useState('');
  return <main className="min-h-screen w-full bg-[#1f0a02] font-[Onest,Inter,Arial,sans-serif] text-white">
      <section className="grid w-full grid-cols-1 lg:grid-cols-2 lg:min-h-screen">
        {/* LEFT: deep burnt orange to vivid orange gradient + form */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#7a3300] via-[#C45200] to-[#E8620A] px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24" style={{
        background: "#ffffff"
      }}>
          {/* soft radial glow accents */}
          <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#FFB07C]/25 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-[#2a0e02]/60 blur-3xl" />

          <motion.div initial={{
          opacity: 0,
          y: 24
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease
        }} className="relative z-10 mx-auto flex h-full w-full max-w-[520px] flex-col justify-center">
            <p className="mb-5 text-xs font-bold uppercase leading-none tracking-[0.22em] text-white/70" style={{
            color: "#171717"
          }}>
              Loyaltymaster Newsletter
            </p>

            <h1 className="m-0 font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[44px] font-black leading-[1.02] tracking-tight md:text-[56px] lg:text-[60px]" style={{
            fontFamily: "Rodger Test",
            color: "#171717"
          }}>
              Be the First to Know!
            </h1>

            <p className="mt-5 max-w-[440px] text-left text-base leading-[1.55] text-white/75 md:text-lg" style={{
            color: "#171717"
          }}>
              Join our newsletter for exclusive rewards, loyalty tips, and early access to new features.
            </p>

            <form onSubmit={e => e.preventDefault()} className="mt-8 flex w-full max-w-[583px] flex-col gap-2 rounded-3xl border-2 border-[#fcb827]/60 bg-white/70 p-1.5 shadow-[0_6px_12px_0_rgba(48,33,39,0.08)] backdrop-blur-sm sm:flex-row sm:items-center sm:rounded-full">
              <label htmlFor="wf-email-newsletter" className="sr-only">
                <span>Email address</span>
              </label>
              <input id="wf-email-newsletter" type="email" name="email" autoComplete="email" placeholder="name@email.com" required className="w-full min-w-0 rounded-full bg-[#f4eff2] px-6 min-h-[62px] font-sans text-lg font-medium leading-none tracking-[-0.4px] text-[#302127] placeholder:text-[#302127]/40 outline-none transition-colors focus:bg-white sm:flex-1" />
              <motion.button whileHover={{
              y: -1
            }} whileTap={{
              y: 2
            }} type="submit" className="relative isolate flex w-full shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-full border border-[#f37d39]/30 bg-[#fcb827] px-8 min-h-[62px] text-[20px] font-bold leading-none tracking-[-0.4px] text-[#2a1f16] shadow-[0_5px_0_0_#f37d39,0_8px_14px_0_rgba(48,33,39,0.1)] transition-all duration-200 sm:w-auto">
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 block rounded-full opacity-60 mix-blend-overlay" style={{
                backgroundImage: 'linear-gradient(112deg, transparent 14%, rgba(255, 255, 255, 0.8) 44%, transparent 68%)',
                transform: 'translateX(10%)'
              }} />
                <span style={{
                fontSize: "16px"
              }}>Subscribe</span>
              </motion.button>
            </form>

            <form onSubmit={event => event.preventDefault()} className="mt-10 flex flex-col gap-4">
              <label htmlFor="newsletter-email" className="text-sm font-semibold text-white/85" style={{
              display: "none"
            }}>
                Enter your email:
              </label>
              <input id="newsletter-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" className="w-full rounded-full border border-white/25 bg-white/10 px-6 py-4 text-base text-white placeholder:text-white/50 outline-none backdrop-blur-sm transition focus:border-white/60 focus:bg-white/15" style={{
              display: "none"
            }} />

              <button type="submit" className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E8620A] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(232,98,10,0.45)] transition hover:bg-[#F47B20] active:translate-y-[1px]" style={{
              display: "none"
            }}>
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <button type="button" className="mt-2 self-center text-sm font-semibold text-white/70 underline underline-offset-4 transition hover:text-white" style={{
              display: "none"
            }}>
                No Thanks
              </button>
            </form>
          </motion.div>
        </div>

        {/* RIGHT: full-bleed lifestyle image with subtle dark orange overlay */}
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80" alt="Stylish shopper carrying retail bags in a warm, sunlit boutique scene" className="absolute inset-0 h-full w-full object-cover" />
          {/* subtle dark orange overlay to blend with left panel */}
          <div aria-hidden="true" className="absolute inset-0" style={{
          backgroundColor: 'rgba(180,70,0,0.25)'
        }} />

          {/* watermark wordmark */}
          <div className="relative z-10 flex h-full w-full items-end justify-end p-10 md:p-14">
            <div className="text-right">
              <p className="font-['Rodger_Test','Arial_Black',Arial,sans-serif] text-[44px] font-black leading-none tracking-tight text-white/95 md:text-[64px]" style={{
              display: "none"
            }}>
                LoyaltyMaster
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em] text-white/70">
                Rewards · Reimagined
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>;
};