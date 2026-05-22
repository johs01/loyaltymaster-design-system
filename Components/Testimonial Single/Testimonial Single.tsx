import React, { useState } from 'react';
import { motion } from 'framer-motion';
type Testimonial = {
  quote: string;
  author: string;
};
interface TestimonialSectionProps {
  eyebrow?: string;
  heading?: string;
  testimonials?: Testimonial[];
  ctaButtonText?: string;
  ctaPlaceholder?: string;
  onSubmit?: (email: string) => void;
}
const defaultTestimonials: Testimonial[] = [{
  quote: "“We booked 17 extra appointments in one weekend from a single campaign.”",
  author: "Noah T. - Clinic Manager"
}, {
  quote: "“Setup took less than an hour, and now our reminders run automatically every day.”",
  author: "Kayla S. - Salon Owner"
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

// @component: TestimonialSection
export const TestimonialSection = ({
  eyebrow = "More proof",
  heading = "What Real Customers Are Saying",
  testimonials = defaultTestimonials,
  ctaButtonText = "Start Free Trial",
  ctaPlaceholder = "name@email.com",
  onSubmit
}: TestimonialSectionProps) => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    }
    // Prevent default form submission behavior to stay on page
  };

  // @return
  return <section className="w-full py-[60px] md:py-[84px] bg-[#302127] relative overflow-hidden text-white font-sans font-medium">
      <div className="max-w-[840px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} className="flex flex-col items-center">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-white/80 text-[16px] leading-[16px] font-bold uppercase tracking-tight mb-[14px]">
              {eyebrow}
            </p>
            <h2 className="text-4xl md:text-[52px] leading-[1.05] font-bold tracking-tight m-0 text-white max-w-2xl mx-auto">
              {heading}
            </h2>
          </motion.div>

          {/* Testimonial Card */}
          <motion.article variants={itemVariants} className="mt-8 md:mt-[24px] w-full bg-white/[0.06] border border-white/[0.18] rounded-[20px] p-6 md:p-[28px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[24px]">
            {testimonials.map((testimonial, idx) => <div key={idx} className="flex flex-col justify-between">
                <p className="text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] tracking-tight text-white m-0 mb-4 md:mb-6">
                  {testimonial.quote}
                </p>
                <p className="text-[15px] md:text-[16px] leading-[16px] tracking-tight text-white/80 font-semibold m-0">
                  {testimonial.author}
                </p>
              </div>)}
          </motion.article>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-10 md:mt-12 w-full relative max-w-[640px] mx-auto flex flex-col items-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[648px] h-40 bg-[radial-gradient(ellipse_at_center,rgba(252,184,39,0.18),rgba(243,125,57,0.06)_60%,transparent_100%)] -z-10 blur-xl pointer-events-none rounded-full" />
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full bg-white/72 shadow-[0_6px_12px_rgba(48,33,39,0.08)] border-2 border-[#fcb827]/62 rounded-[32px] sm:rounded-[999px] p-1.5 transition-all hover:border-[#fcb827]" style={{
            display: "none"
          }}>
              <label htmlFor="email-proof" className="sr-only">Email address</label>
              <input id="email-proof" type="email" name="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder={ctaPlaceholder} className="flex-1 w-full min-h-[56px] sm:min-h-[62px] text-[18px] sm:text-[22px] font-medium text-[#302127] bg-[#f4eff2] rounded-[24px] sm:rounded-[991px] px-6 outline-none focus:ring-2 focus:ring-[#fcb827]/80 placeholder:text-[#302127]/60" />
              <button type="submit" className="w-full sm:w-auto relative group overflow-hidden flex items-center justify-center min-h-[56px] sm:min-h-[62px] bg-[#fcb827] text-[#2a1f16] text-[18px] sm:text-[20px] font-bold px-8 rounded-[24px] sm:rounded-[991px] border border-[#f37d39]/30 shadow-[0_5px_0_#f37d39,0_8px_14px_rgba(48,33,39,0.1)] transition-all active:translate-y-[2px] active:shadow-[0_3px_0_#f37d39,0_4px_8px_rgba(48,33,39,0.1)] hover:brightness-105">
                {/* Button Inner Shine */}
                <span className="absolute inset-0 w-full h-full bg-[linear-gradient(112deg,transparent_14%,rgba(255,255,255,0.34)_44%,transparent_68%)] opacity-64 pointer-events-none transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 whitespace-nowrap">{ctaButtonText}</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};