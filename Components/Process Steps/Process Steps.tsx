import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';
type StepTheme = 'orange' | 'blue' | 'yellow';
interface Step {
  id: number;
  title: string;
  description: string;
  theme: StepTheme;
}
const steps: Step[] = [{
  id: 1,
  title: 'Connect Your Contacts',
  description: 'Import your existing list and map customer tags in a few clicks.',
  theme: 'orange'
}, {
  id: 2,
  title: 'Turn On Automations',
  description: 'Choose campaign templates for reminders, promos, and reactivation.',
  theme: 'blue'
}, {
  id: 3,
  title: 'Track Revenue Lift',
  description: 'Monitor campaign performance and optimize every week.',
  theme: 'yellow'
}];
const themeStyles: Record<StepTheme, {
  bg: string;
  border: string;
  badge: string;
}> = {
  orange: {
    bg: 'bg-[#FEF0E9]',
    border: 'border-[#F37D39]/20',
    badge: 'bg-[#F37D39] text-white'
  },
  blue: {
    bg: 'bg-[#EAF5F8]',
    border: 'border-[#4C93AF]/20',
    badge: 'bg-[#4C93AF] text-white'
  },
  yellow: {
    bg: 'bg-[#FEF9E6]',
    border: 'border-[#FCB827]/30',
    badge: 'bg-[#FCB827] text-[#2A1F16]'
  }
};
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

// @component: ProcessStepsSection
export const ProcessStepsSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  // @return
  return <section className="relative w-full bg-[#FDE9E2] py-16 md:py-[84px] overflow-hidden selection:bg-[#F37D39]/30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
        
        {/* Header Section */}
        <motion.div className="text-center max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={itemVariants}>
          <p className="uppercase text-[#979093] font-bold text-base tracking-tight mb-[14px]">
            Simple process
          </p>
          <h2 className="text-[#302127] font-bold text-[36px] md:text-[52px] leading-[1.05] tracking-tight m-0">
            Our Solution Is Stupidly Simple to Use and Insanely Effective
          </h2>
        </motion.div>

        {/* Process Cards Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-[34px]" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }}>
          {steps.map(step => {
          const styles = themeStyles[step.theme];
          return <motion.article key={step.id} variants={itemVariants} className={cn("relative rounded-[20px] p-[26px] px-6 flex flex-col gap-[14px]", "shadow-[0_8px_20px_0_rgba(48,33,39,0.06)] border-[1px] transition-all hover:-translate-y-1 duration-300", styles.bg, styles.border)}>
                <div className="flex items-center gap-[12px]">
                  <span className={cn("w-[40px] h-[40px] flex items-center justify-center rounded-full font-bold text-[20px] leading-none shrink-0", styles.badge)}>
                    {step.id}
                  </span>
                  <h3 className="text-[#302127] font-bold text-[20px] leading-[24px] tracking-tight m-0">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#302127] font-normal text-[20px] leading-[31.2px] tracking-tight m-0 opacity-90">
                  {step.description}
                </p>
              </motion.article>;
        })}
        </motion.div>

        {/* CTA Form Section */}
        <motion.div className="mt-[56px] max-w-[640px] mx-auto relative z-10" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4,
        duration: 0.5
      }}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-[8px] p-[6px] bg-white/75 backdrop-blur-sm border-[2px] border-[#FCB827]/60 rounded-[32px] sm:rounded-full shadow-[0_6px_12px_0_rgba(48,33,39,0.08)] transition-all focus-within:border-[#FCB827]">
            <label htmlFor="email-capture" className="sr-only">
              Email address
            </label>
            <input id="email-capture" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@email.com" required disabled={isSubmitted} className="flex-1 w-full min-h-[62px] px-[24px] bg-[#F4EFF2] rounded-full text-[20px] sm:text-[22px] font-medium text-[#302127] placeholder:text-[#302127]/40 outline-none focus:ring-2 focus:ring-[#F37D39]/40 transition-shadow disabled:opacity-70" />
            <motion.button type="submit" disabled={isSubmitted} initial="rest" whileHover={isSubmitted ? "rest" : "hover"} whileTap={isSubmitted ? "rest" : "tap"} variants={{
            rest: {
              y: 0,
              boxShadow: '0 5px 0 0 #F37D39, 0 8px 14px 0 rgba(48,33,39,0.1)'
            },
            hover: {
              y: 2,
              boxShadow: '0 3px 0 0 #F37D39, 0 4px 8px 0 rgba(48,33,39,0.1)'
            },
            tap: {
              y: 5,
              boxShadow: '0 0px 0 0 #F37D39, 0 0px 0 0 rgba(48,33,39,0.1)'
            }
          }} className="group relative overflow-hidden flex items-center justify-center shrink-0 w-full sm:w-auto min-h-[62px] px-[26px] bg-[#FCB827] text-[#2A1F16] font-bold text-[20px] leading-[20px] tracking-tight rounded-full outline-none disabled:cursor-not-allowed">
              {/* Shimmer Effect */}
              {!isSubmitted && <motion.div className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" variants={{
              hover: {
                x: ['-100%', '100%'],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }
              }
            }} initial={{
              x: '-100%'
            }} />}
              
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitted ? <motion.span initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} className="flex items-center gap-2">
                    <Check className="w-5 h-5 stroke-[3]" />
                    Got it!
                  </motion.span> : 'Start in Under 10 Minutes'}
              </span>
            </motion.button>
          </form>
          
          {/* Subtle glow effect behind the form matching the original CSS */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[648px] rounded-full bg-[radial-gradient(80%_60%_at_50%_80%,rgba(252,184,39,0.18),rgba(243,125,57,0.06)_60%,transparent_100%)] -z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>;
};