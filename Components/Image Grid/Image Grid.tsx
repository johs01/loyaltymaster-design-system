import React from 'react';
import { motion } from 'framer-motion';
export interface LogoItem {
  id: string;
  name: string;
  url: string;
}
export interface LogoGridShowcaseProps {
  title?: string;
  logos?: LogoItem[];
  backgroundColor?: string;
}
const DEFAULT_LOGOS: LogoItem[] = [{
  id: 'google',
  name: 'Google',
  url: 'https://ik.imagekit.io/loyalty/sendpush/Google%20logo.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'stripe',
  name: 'Stripe',
  url: 'https://ik.imagekit.io/loyalty/sendpush/Stripe%20Payment.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'google-pay',
  name: 'Google Pay',
  url: 'https://ik.imagekit.io/loyalty/sendpush/Google%20Pay%20Logo.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'apple-pay',
  name: 'Apple Pay',
  url: 'https://ik.imagekit.io/loyalty/sendpush/Apple%20Pay%20Logo.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'aws',
  name: 'AWS',
  url: 'https://ik.imagekit.io/loyalty/sendpush/AWS.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'digital-ocean',
  name: 'DigitalOcean',
  url: 'https://ik.imagekit.io/loyalty/sendpush/Digital%20Ocean.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'clover',
  name: 'Clover POS',
  url: 'https://ik.imagekit.io/loyalty/sendpush/Clover%20POS%20Logo.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'touchbistro',
  name: 'TouchBistro',
  url: 'https://ik.imagekit.io/loyalty/sendpush/Touch%20Bistro.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'toast',
  name: 'Toast',
  url: 'https://ik.imagekit.io/loyalty/sendpush/Toast%20integrated%20with%20Loyaltymaster.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'make-ready',
  name: 'Make Ready',
  url: 'https://ik.imagekit.io/loyalty/sendpush/Loyaltymaster%20is%20Make%20Ready.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'zapier',
  name: 'Zapier Ready',
  url: 'https://ik.imagekit.io/loyalty/sendpush/Loyaltymaster%20is%20Zapier%20Ready.webp?tr=w-200,q-80:w-3840,c-at_max'
}, {
  id: 'gdpr',
  name: 'GDPR Ready',
  url: 'https://ik.imagekit.io/loyalty/sendpush/GDPR%20Ready.webp?tr=w-200,q-80:w-3840,c-at_max'
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

// @component: LogoGridShowcase
export const LogoGridShowcase = ({
  title = "Powering the world's most focused product teams",
  logos = DEFAULT_LOGOS,
  backgroundColor = '#FEF0E9'
}: LogoGridShowcaseProps) => {
  // @return
  return <section className="w-full relative py-8 pb-10" style={{
    backgroundColor
  }} aria-label="Trusted platform and integration partners">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-50px'
      }} transition={{
        duration: 0.5,
        ease: 'easeOut'
      }} className="text-center mb-6">
          <p className="text-[#979093] text-base font-medium tracking-[-0.2px] m-0">
            {title}
          </p>
        </motion.div>

        <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-0 m-0 list-none">
          {logos.map(logo => <motion.li key={logo.id} variants={itemVariants} className="relative min-h-[84px] bg-white flex items-center justify-center border border-[#979093]/[0.26] rounded-2xl shadow-[0_8px_20px_0_rgba(48,33,39,0.06)] overflow-hidden group p-4 transition-transform duration-300 hover:-translate-y-1">
              <img src={logo.url} alt={logo.name} loading="lazy" className="block max-w-full max-h-[42px] object-contain relative z-10 transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 block bg-gradient-to-b from-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0 pointer-events-none" aria-hidden="true" />
            </motion.li>)}
        </motion.ul>
      </div>
    </section>;
};