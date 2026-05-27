import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
type FAQItem = {
  question: string;
  answer: string;
};
const faqs: FAQItem[] = [{
  question: 'How quickly can I launch my first campaign?',
  answer: 'Most teams launch in under one hour using prebuilt flows and templates.'
}, {
  question: 'Can I import customers from my current tools?',
  answer: 'Yes. CSV import and common integrations are supported for fast migration.'
}, {
  question: 'Will this work for multiple locations?',
  answer: 'Yes. You can segment by location and run local campaigns from one account.'
}, {
  question: 'How do you handle opt-outs and compliance?',
  answer: 'Built-in consent handling and auto opt-out management are included by default.'
}, {
  question: 'Do I need technical support to set this up?',
  answer: 'No. Setup is no-code and designed for operators, marketers, and founders.'
}, {
  question: 'Can I measure actual revenue impact?',
  answer: 'Yes. Dashboard reports tie messages to bookings, visits, and attributed revenue.'
}];
export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section className="relative w-full bg-white py-[84px]">
      <div className="mx-auto w-full max-w-[840px] px-6 md:px-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }} className="text-center">
          <p className="mb-[14px] text-base font-bold uppercase tracking-[-0.2px] text-[#979093]">
            <span>FAQ</span>
          </p>
          <h2 className="m-0 text-4xl font-bold leading-[1.05] tracking-[-0.2px] text-[#302127] md:text-[52px]" style={{
          fontFamily: 'Rodger Test, Arial Black, Arial, sans-serif'
        }}>
            <span>Frequently Asked Questions</span>
          </h2>
        </motion.div>

        <div className="mt-[30px] grid gap-3">
          {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return <motion.div key={faq.question} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-50px'
          }} transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }} className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-[#f37d39]/30 bg-[#fbfcfd] shadow-[0_10px_18px_0_rgba(48,33,39,0.1)]' : 'border-[#979093]/30 bg-[#faf8f9] hover:border-[#979093]/50 hover:bg-[#f4f1f2]'}`}>
                <button id={`faq-header-${index}`} aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} onClick={() => toggleAccordion(index)} className="flex w-full cursor-pointer items-center justify-between p-[18px_20px] text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f37d39] focus-visible:ring-offset-2">
                  <span className={`text-lg font-bold tracking-[-0.4px] md:text-xl ${isOpen ? 'text-[#f37d39]' : 'text-[#302127]'} transition-colors duration-200`}>
                    {faq.question}
                  </span>
                  <motion.span animate={{
                rotate: isOpen ? 45 : 0
              }} transition={{
                duration: 0.2,
                ease: 'easeOut'
              }} className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center text-[#f37d39]">
                    <Plus className="h-6 w-6 stroke-[3]" aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && <motion.div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-header-${index}`} initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                height: {
                  duration: 0.3,
                  ease: 'easeOut'
                },
                opacity: {
                  duration: 0.2,
                  delay: isOpen ? 0.1 : 0
                }
              }}>
                      <div className="px-[20px] pb-[18px] pt-1 text-base leading-relaxed tracking-[-0.4px] text-[#302127]/80 md:text-lg">
                        <p className="m-0">{faq.answer}</p>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
};
