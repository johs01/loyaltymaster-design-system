import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Calendar, MapPin, LineChart, Inbox } from 'lucide-react';
const features = [{
  id: 1,
  title: 'Smart Segments',
  description: 'Group customers by recency, spend, visit habits, and campaign response.',
  icon: Users,
  color: '#F37D39'
}, {
  id: 2,
  title: 'Behavior Triggers',
  description: 'Launch message flows based on customer actions in real time.',
  icon: Zap,
  color: '#4C93AF'
}, {
  id: 3,
  title: 'Campaign Calendar',
  description: 'Plan seasonal offers and auto-activate them on schedule.',
  icon: Calendar,
  color: '#FCB827'
}, {
  id: 4,
  title: 'Geo Messaging',
  description: 'Send localized offers when customers are near your business.',
  icon: MapPin,
  color: '#4C93AF'
}, {
  id: 5,
  title: 'Revenue Tracking',
  description: 'Measure conversions and attributed revenue from every campaign.',
  icon: LineChart,
  color: '#F37D39'
}, {
  id: 6,
  title: 'One Inbox',
  description: 'Review responses, opt-outs, and follow-up tasks in one place.',
  icon: Inbox,
  color: '#FCB827'
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
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// @component: FeaturesGrid
export const FeaturesGrid = () => {
  // @return
  return <section className="w-full bg-white py-[84px] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div className="text-center max-w-4xl mx-auto" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.56,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <p className="text-[#979093] text-base font-bold uppercase tracking-[-0.2px] mb-[14px]">
            Capabilities
          </p>
          <h2 className="text-[#302127] text-4xl md:text-[52px] leading-tight md:leading-[54.6px] font-bold tracking-[-0.2px] mb-4">
            All the Power, None of the Complexity
          </h2>
          <p className="text-[#302127] text-lg md:text-[20px] leading-relaxed md:leading-[31.2px] tracking-[-0.4px] max-w-[760px] mx-auto mt-4">
            Built for fast-moving teams that want results without extra tools.
          </p>
        </motion.div>

        <motion.div className="mt-[44px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }}>
          {features.map(feature => <motion.article key={feature.id} variants={itemVariants} className="relative bg-[#FAF8F9] rounded-[16px] p-[22px_20px] group cursor-default">
              {/* Card Hover Effect */}
              <span className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-240 ease-out pointer-events-none" />

              <div className="w-[28px] h-[28px] rounded-[8px] mb-[14px] flex items-center justify-center shadow-sm" style={{
            backgroundColor: feature.color
          }}>
                <feature.icon className="w-[14px] h-[14px] text-white" strokeWidth={2.5} />
              </div>

              <h3 className="text-[#302127] text-[24px] leading-[24px] font-bold tracking-[-0.4px] mb-0 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-[#302127] text-[18px] leading-[24px] tracking-[-0.4px] mt-[10px] relative z-10 opacity-90">
                {feature.description}
              </p>
            </motion.article>)}
        </motion.div>
      </div>
    </section>;
};