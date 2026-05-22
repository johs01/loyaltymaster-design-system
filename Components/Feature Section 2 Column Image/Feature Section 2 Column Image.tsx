import React from 'react';
import { motion } from 'framer-motion';
export interface ProblemItem {
  id: string;
  title: string;
  description: string;
}
export interface ProblemSectionProps {
  eyebrow?: string;
  heading?: string;
  problems?: ProblemItem[];
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}
const defaultProblems: ProblemItem[] = [{
  id: '1',
  title: 'Inboxes are overloaded',
  description: 'Your updates compete with dozens of promotions every day.'
}, {
  id: '2',
  title: 'Algorithms hide your posts',
  description: 'Most of your audience never sees social updates in time to act.'
}, {
  id: '3',
  title: 'Missed follow-ups cost revenue',
  description: 'No-shows, empty slots, and quiet periods stack up each week.'
}];

// @component: ProblemSection
export const ProblemSection = ({
  eyebrow = 'The real problem',
  heading = "Your Messages to Your Customers Aren't Getting Through.",
  problems = defaultProblems,
  ctaText = 'See How It Works',
  ctaLink = '#',
  imageSrc = 'https://ik.imagekit.io/loyalty/sendpush/image%20placeholder-640-square.jpg?tr=w-800,q-85:w-1080,c-at_max',
  imageAlt = 'Messages not reaching customers'
}: ProblemSectionProps) => {
  // @return
  return <section className="w-full bg-[#EAF5F8] py-16 md:py-[84px] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[48px] items-center">
        
        {/* Left Column: Content */}
        <motion.div initial={{
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
        ease: [0.22, 1, 0.36, 1]
      }} className="flex flex-col z-10">
          <p className="text-[#979093] text-base leading-none tracking-[-0.2px] uppercase font-bold mb-[14px]">
            {eyebrow}
          </p>
          
          <h2 className="text-[#302127] font-bold text-4xl md:text-[52px] md:leading-[54.6px] tracking-[-0.2px] max-w-[820px] mb-6">
            {heading}
          </h2>
          
          <ol className="grid gap-5 mb-[30px] p-0 list-none">
            {problems.map((problem, index) => <motion.li key={problem.id} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.2
          }} className="bg-white/75 rounded-2xl p-4 md:px-[18px] md:py-4 shadow-[inset_0_0_0_1px_rgba(151,144,147,0.15)] hover:bg-white transition-colors duration-300">
                <h3 className="text-[#302127] font-bold text-xl md:text-[24px] leading-tight md:leading-[24px] tracking-[-0.4px] mb-1.5">
                  {problem.title}
                </h3>
                <p className="text-[#302127] font-normal text-lg md:text-[20px] leading-relaxed md:leading-[31.2px] tracking-[-0.4px] m-0">
                  {problem.description}
                </p>
              </motion.li>)}
          </ol>
          
          <div className="flex">
            <a href={ctaLink} onClick={e => {
            if (ctaLink === '#') e.preventDefault();
          }} className="group relative inline-flex items-center justify-center min-h-[58px] px-7 bg-[#FCB827] text-[#2A1F16] font-bold text-[20px] leading-[20px] tracking-[-0.4px] rounded-full border border-[#F37D39]/30 shadow-[0_5px_0_0_#F37D39,0_8px_14px_0_rgba(48,33,39,0.1)] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#F37D39,0_4px_8px_0_rgba(48,33,39,0.1)] active:translate-y-[5px] active:shadow-[0_0_0_0_#F37D39,0_0_0_0_rgba(48,33,39,0.1)] transition-all duration-200 overflow-hidden">
              <span className="absolute inset-0 bg-[linear-gradient(112deg,transparent_14%,rgba(255,255,255,0.34)_44%,transparent_68%)] opacity-60 pointer-events-none translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span className="relative z-10">{ctaText}</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }} className="relative w-full max-w-[568px] mx-auto aspect-square rounded-[20px] border border-[#979093]/20 bg-white/40 overflow-hidden flex items-center justify-center shadow-sm">
          <img src={imageSrc} alt={imageAlt} loading="lazy" className="w-full h-full object-contain mix-blend-multiply" />
        </motion.div>

      </div>
    </section>;
};