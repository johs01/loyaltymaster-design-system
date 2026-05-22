import React from 'react';
import { motion } from 'framer-motion';
export interface AwardItem {
  id: string;
  src: string;
  alt: string;
}
export interface AwardsStripProps {
  /**
   * Optional custom class name for the section
   */
  className?: string;
  /**
   * Array of award images to display
   */
  awards?: AwardItem[];
  /**
   * Optional background color override
   */
  backgroundColor?: string;
}
const DEFAULT_AWARDS: AwardItem[] = [{
  id: 'award-group-1',
  src: 'https://ik.imagekit.io/loyalty/sendpush/Awards1-3.svg?tr=q-90:w-3840,c-at_max',
  alt: 'Industry Awards 1 to 3'
}, {
  id: 'award-group-2',
  src: 'https://ik.imagekit.io/loyalty/sendpush/Awards%204-6.svg?tr=q-90:w-3840,c-at_max',
  alt: 'Industry Awards 4 to 6'
}, {
  id: 'award-group-3',
  src: 'https://ik.imagekit.io/loyalty/sendpush/Awards%207-9.svg?tr=q-90:w-3840,c-at_max',
  alt: 'Industry Awards 7 to 9'
}];
const easing = [0.22, 1, 0.36, 1];

// @component: AwardsStrip
export const AwardsStrip = ({
  className = '',
  awards = DEFAULT_AWARDS,
  backgroundColor = '#fef0e9'
}: AwardsStripProps) => {
  // @return
  return <section className={`w-full overflow-hidden pt-16 pb-14 ${className}`} style={{
    backgroundColor
  }} aria-label="Awards and Recognitions">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {awards.map((award, index) => <motion.div key={award.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-50px'
        }} transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: easing
        }} className="flex min-w-[280px] flex-1 basis-0 items-center justify-center">
              <img className="h-auto max-h-[148px] w-full max-w-[374px] object-contain align-middle" src={award.src} alt={award.alt} loading="lazy" />
            </motion.div>)}
        </div>
      </div>
    </section>;
};