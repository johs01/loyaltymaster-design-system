import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
};
const TESTIMONIALS: Testimonial[] = [{
  id: 't1',
  quote: '“SetupFlow gave us one place to run reminders, promos, and follow-ups. We filled more open slots in the first few weeks without adding extra admin work.”',
  name: 'Maya Rivera',
  role: 'Operations Lead, Riverfront Wellness',
  initials: 'MR',
  avatarBg: '#4c93af',
  avatarText: '#ffffff'
}, {
  id: 't2',
  quote: '“We switched from manual texting to SetupFlow and saw campaign response jump fast. The team launches offers in minutes and tracks real impact each week.”',
  name: 'Jordan Patel',
  role: 'Owner, Northside Auto Care',
  initials: 'JP',
  avatarBg: '#f37d39',
  avatarText: '#ffffff'
}, {
  id: 't3',
  quote: '“The automations are simple to set up and the reporting is clear. It helped us keep patients engaged and reduce missed appointments month over month.”',
  name: 'Elena Brooks',
  role: 'General Manager, Elm Street Clinic',
  initials: 'EB',
  avatarBg: '#fcb827',
  avatarText: '#302127'
}];
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
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// @component: TestimonialsSection
export const TestimonialsSection = () => {
  // @return
  return <section className="relative w-full bg-white py-[68px] pb-[84px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }} variants={itemVariants} className="text-center">
          <p className="mb-[14px] text-[16px] font-bold uppercase leading-none tracking-[-0.2px] text-[#979093]">
            Customer feedback
          </p>
          <h2 className="m-0 text-[40px] font-bold leading-[1.05] tracking-[-0.2px] text-[#302127] md:text-[52px]">
            Loved by Teams Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-[820px] text-[18px] font-normal leading-relaxed tracking-[-0.4px] text-[#979093] md:text-[20px]">
            See what local teams are saying about how SetupFlow improves response rates, reduces manual work, and keeps customers coming back.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }} variants={containerVariants} className="mt-[34px] grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(testimonial => <motion.article key={testimonial.id} variants={itemVariants} className="group relative flex flex-col gap-[14px] overflow-hidden rounded-[16px] border border-[#979093]/30 bg-[#faf8f9] p-5 md:p-[22px]">
              <div className="flex items-center gap-1 text-[#fcb827]" role="img" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-5 w-5 fill-current" strokeWidth={0} />)}
              </div>

              <p className="m-0 text-[18px] font-normal italic leading-normal tracking-[-0.4px] text-[#302127]">
                {testimonial.quote}
              </p>

              <div className="mt-auto pt-2 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[16px] font-bold tracking-[-0.2px] shadow-[0_6px_12px_0_rgba(48,33,39,0.12)]" style={{
              backgroundColor: testimonial.avatarBg,
              color: testimonial.avatarText
            }} aria-hidden="true">
                  {testimonial.initials}
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="m-0 text-[16px] font-semibold leading-none tracking-[-0.2px] text-[#bfb8bc]">
                    {testimonial.name}
                  </p>
                  <p className="m-0 text-[14px] font-medium leading-none tracking-[-0.2px] text-[#979093]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover Overlay equivalent to the inline absolute span */}
              <div className="pointer-events-none absolute inset-0 rounded-[16px] bg-gradient-to-b from-white/40 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
            </motion.article>)}
        </motion.div>
      </div>
    </section>;
};