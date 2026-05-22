import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';
type FooterLink = {
  label: string;
  href?: string;
};
type FooterColumn = {
  heading: string;
  links: FooterLink[];
};
const productLinks: FooterLink[] = [{
  label: 'Pricing'
}, {
  label: 'Use Cases'
}, {
  label: 'FAQ'
}, {
  label: 'Loyalty Cards'
}, {
  label: 'Customer Retention'
}, {
  label: 'Social Media vs. Direct'
}];
const companyLinks: FooterLink[] = [{
  label: 'Contact us'
}, {
  label: 'Our Blog'
}, {
  label: 'What we do'
}, {
  label: 'Our Mission Statement'
}, {
  label: 'Our details'
}];
const documentLinks: FooterLink[] = [{
  label: 'Acceptable Use Policy'
}, {
  label: 'Subscription Agreement'
}];
const legalLinks: FooterLink[] = [{
  label: 'Privacy Policy'
}, {
  label: 'Terms of Use'
}, {
  label: 'Cookie Policy'
}];
const revealVariants = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.06
    }
  })
};
const FooterLinkItem: React.FC<{
  label: string;
}> = ({
  label
}) => <li>
    <a href="#" onClick={e => e.preventDefault()} className="inline-flex items-center text-[15px] font-medium leading-[18px] tracking-[-0.2px] text-[#979093] transition-colors duration-200 ease-out hover:text-[#302127]">
      {label}
    </a>
  </li>;
const Column: React.FC<{
  heading: string;
  links: FooterLink[];
  order: number;
}> = ({
  heading,
  links,
  order
}) => <motion.div custom={order} initial="hidden" whileInView="visible" viewport={{
  once: true,
  margin: '-50px'
}} variants={revealVariants}>
    <h3 className="m-0 text-[15px] font-bold leading-[15px] tracking-[-0.2px] text-[#302127]">
      {heading}
    </h3>
    <ul className="mt-[14px] grid list-none gap-y-[10px] p-0">
      {links.map(link => <FooterLinkItem key={link.label} label={link.label} />)}
    </ul>
  </motion.div>;

// @component: LoyaltymasterFooter
export const LoyaltymasterFooter = () => {
  // @return
  return <footer id="site-footer" className="w-full bg-white px-4 pb-10 pt-0 sm:px-6 lg:px-12">
      <div className="mx-auto w-full max-w-[1280px]">
        <motion.div initial={{
        opacity: 0,
        y: 24
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-80px'
      }} transition={{
        duration: 0.56,
        ease: [0.22, 1, 0.36, 1]
      }} className="relative overflow-clip rounded-[20px] border border-[rgba(151,144,147,0.28)] p-[30px]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.92), rgb(250,248,249))',
        boxShadow: '0 14px 28px 0 rgba(48,33,39,0.1)'
      }}>
          {/* Inner highlight overlay */}
          <span aria-hidden="true" className="pointer-events-none absolute inset-[1px] rounded-[20px] opacity-80" style={{
          backgroundImage: 'linear-gradient(150deg, rgba(255,255,255,0.44) 0%, rgba(255,255,255,0) 48%)'
        }} />

          {/* Main grid */}
          <div className="relative z-[1] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.12fr]">
            {/* Brand column */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: '-50px'
          }} variants={revealVariants} className="grid items-start gap-[14px]">
              <div className="flex items-center gap-[10px]">
                <a href="#" onClick={e => e.preventDefault()} aria-label="Loyaltymaster home" className="flex items-center gap-[10px] font-bold tracking-[-0.2px] text-[#302127] no-underline">
                  <span aria-hidden="true" className="flex items-center" style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '22px',
                  lineHeight: '19.8px',
                  color: '#302127'
                }}>
                    <span style={{
                    letterSpacing: '-0.8px',
                    fontWeight: 900
                  }}>
                      sendPUSH
                    </span>
                    <span style={{
                    fontSize: '21.6px',
                    fontWeight: 400,
                    margin: '0 5.6px'
                  }}>
                      |
                    </span>
                    <span style={{
                    letterSpacing: '-0.8px',
                    fontSize: '21.8px',
                    fontWeight: 400
                  }}>
                      Loyaltymaster
                    </span>
                  </span>
                </a>
              </div>

              <p className="m-0 max-w-[330px] text-[16px] font-medium leading-[22px] tracking-[-0.2px] text-[#979093]">
                Loyaltymaster helps B2B teams run reminders, offers, and follow-ups
                from one place.
              </p>

              <a href="#" onClick={e => e.preventDefault()} className="group relative inline-flex min-h-[48px] w-[190px] items-center justify-center gap-2 self-start overflow-hidden rounded-full px-5 text-[16px] font-bold leading-4 tracking-[-0.2px] text-[#2A1F16]" style={{
              backgroundColor: '#FCB827',
              border: '1px solid rgba(243,125,57,0.3)',
              boxShadow: '0 5px 0 0 #F37D39, 0 8px 14px 0 rgba(48,33,39,0.1)',
              transition: 'transform 0.28s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.28s cubic-bezier(0.2,0.8,0.2,1), background-color 0.28s'
            }} onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 0 0 #F37D39, 0 10px 18px 0 rgba(48,33,39,0.14)';
            }} onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 0 0 #F37D39, 0 8px 14px 0 rgba(48,33,39,0.1)';
            }}>
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-60" style={{
                backgroundImage: 'linear-gradient(112deg, rgba(255,255,255,0) 14%, rgba(255,255,255,0.34) 44%, rgba(255,255,255,0) 68%)'
              }} />
                <Calendar className="relative z-[1]" style={{
                width: 15,
                height: 15
              }} strokeWidth={1.7} />
                <span className="relative z-[1]">Book a Demo</span>
              </a>
            </motion.div>

            {/* Product column */}
            <Column heading="Product" links={productLinks} order={2} />

            {/* Company + Documents column */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: '-50px'
          }} variants={revealVariants}>
              <h3 className="m-0 text-[15px] font-bold leading-[15px] tracking-[-0.2px] text-[#302127]">
                Company
              </h3>
              <ul className="mt-[14px] grid list-none gap-y-[10px] p-0">
                {companyLinks.map(link => <FooterLinkItem key={link.label} label={link.label} />)}
              </ul>
              <h3 className="mt-[26px] text-[15px] font-bold leading-[15px] tracking-[-0.2px] text-[#302127]">
                Documents
              </h3>
              <ul className="mt-[14px] grid list-none gap-y-[10px] p-0">
                {documentLinks.map(link => <FooterLinkItem key={link.label} label={link.label} />)}
              </ul>
            </motion.div>

            {/* Contact column */}
            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: '-50px'
          }} variants={revealVariants}>
              <h3 className="m-0 text-[15px] font-bold leading-[15px] tracking-[-0.2px] text-[#302127]">
                Contact
              </h3>
              <ul className="mt-[14px] grid list-none gap-y-[10px] p-0">
                <li className="flex items-start gap-[10px] text-[15px] font-medium leading-[19px] tracking-[-0.2px] text-[#979093]">
                  <Phone className="mt-[1px] shrink-0 text-[#BFB8BC]" style={{
                  width: 16,
                  height: 16
                }} strokeWidth={1.6} />
                  <a href="#" onClick={e => e.preventDefault()} className="text-[#979093] transition-colors hover:text-[#302127]">
                    +27 (82) 702-9134
                  </a>
                </li>
                <li className="flex items-start gap-[10px] text-[15px] font-medium leading-[19px] tracking-[-0.2px] text-[#979093]">
                  <Mail className="mt-[1px] shrink-0 text-[#BFB8BC]" style={{
                  width: 16,
                  height: 16
                }} strokeWidth={1.6} />
                  <a href="#" onClick={e => e.preventDefault()} className="text-[#979093] transition-colors hover:text-[#302127]">
                    admin@loyaltymaster.com
                  </a>
                </li>
                <li className="flex items-start gap-[10px] text-[15px] font-medium leading-[19px] tracking-[-0.2px] text-[#979093]">
                  <MapPin className="mt-[1px] shrink-0 text-[#BFB8BC]" style={{
                  width: 16,
                  height: 16
                }} strokeWidth={1.6} />
                  <span>Pharos Ave, Plettenberg Bay, WC 6600</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-30px'
        }} variants={revealVariants} className="relative z-[1] mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t pt-4" style={{
          borderTopColor: 'rgba(151,144,147,0.22)'
        }}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalLinks.map(link => <a key={link.label} href="#" onClick={e => e.preventDefault()} className="text-[14px] font-medium leading-4 tracking-[-0.2px] text-[#979093] transition-colors hover:text-[#302127]">
                  {link.label}
                </a>)}
            </div>
            <p className="m-0 text-[14px] font-medium leading-4 tracking-[-0.2px] text-[#979093]">
              © 2026 Loyaltymaster. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>;
};