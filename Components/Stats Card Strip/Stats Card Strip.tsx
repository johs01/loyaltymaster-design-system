import React from 'react';
import { motion } from 'framer-motion';

// Non-exported helpers and constants
const statsData = [{
  value: '95%',
  label: 'Message deliverability'
}, {
  value: '+28%',
  label: 'Repeat customer visits'
}, {
  value: '3x',
  label: 'Faster follow-ups'
}, {
  value: '35%',
  label: 'More booking recoveries'
}] as any[];
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
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// @component: StatsCardGrid
export const StatsCardGrid = () => {
  // @return
  return <section className="w-full bg-white py-9 relative font-sans">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }}>
          {statsData.map((stat, index) => <motion.article key={index} variants={itemVariants} className="relative bg-white rounded-[20px] shadow-[0_8px_20px_0_rgba(48,33,39,0.06)] text-center p-6 group overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <p className="text-[#302127] font-bold text-[44px] leading-[44px] tracking-[-0.8px] m-0 relative z-10">
                {stat.value}
              </p>
              <p className="text-[#979093] text-[18px] leading-[22px] tracking-[-0.2px] font-medium mt-2.5 mb-0 relative z-10">
                {stat.label}
              </p>
              {/* Decorative hover overlay matching the original span's gradient */}
              <span className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 rounded-[20px] pointer-events-none" />
            </motion.article>)}
        </motion.div>
      </div>
    </section>;
};