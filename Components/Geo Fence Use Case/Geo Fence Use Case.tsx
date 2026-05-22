import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, RefreshCcw } from 'lucide-react';

// Optional: If you want to use standard icons instead of the square bullets, 
// you can swap the custom span with these. For this recreation, we'll stick 
// close to the original design's custom square bullets.
const CheckSquareIcon = () => <span className="block shrink-0 w-[18px] h-[18px] mt-1 bg-[#FCB827] rounded-[6px]" />;

// @component: GeoFenceUseCase
export const GeoFenceUseCase = () => {
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
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  // @return
  return <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }}>
          {/* Left Content Column */}
          <motion.div variants={itemVariants} className="flex flex-col max-w-xl">
            <p className="text-[#979093] text-sm md:text-base font-bold uppercase tracking-wide mb-3 md:mb-4" style={{
            display: "none"
          }}>
              Use case 02
            </p>
            
            <h2 className="text-3xl md:text-[36px] leading-[1.1] font-bold text-[#302127] mb-4 tracking-[-0.2px]" style={{
            display: "none"
          }}>
              Capture Nearby Customers with Geo-Fenced Messaging
            </h2>
            
            <p className="text-lg md:text-[20px] leading-[1.5] text-[#302127] mb-6 md:mb-8 tracking-[-0.4px]" style={{
            display: "none"
          }}>
              Reach customers while intent is high with offers based on proximity and behavior.
            </p>
            
            <ul className="flex flex-col gap-4 mb-8 md:mb-10">
              <li className="flex items-start gap-3 text-lg md:text-[20px] leading-[1.3] text-[#302127] tracking-[-0.4px]" style={{
              display: "none"
            }}>
                <CheckSquareIcon />
                Set radius-based campaign zones in minutes.
              </li>
              <li className="flex items-start gap-3 text-lg md:text-[20px] leading-[1.3] text-[#302127] tracking-[-0.4px]" style={{
              display: "none"
            }}>
                <CheckSquareIcon />
                Suppress repeat sends to avoid fatigue.
              </li>
              <li className="flex items-start gap-3 text-lg md:text-[20px] leading-[1.3] text-[#302127] tracking-[-0.4px]" style={{
              display: "none"
            }}>
                <CheckSquareIcon />
                Track visits and redemptions from each zone.
              </li>
            </ul>

            <div className="flex">
              <motion.a href="#" onClick={e => e.preventDefault()} className="relative inline-flex items-center justify-center min-h-[58px] px-8 rounded-full bg-[#FCB827] text-[#2A1F16] font-bold text-[20px] tracking-[-0.4px] overflow-hidden group" style={{
              boxShadow: '0px 5px 0px 0px #F37D39, 0px 8px 14px 0px rgba(48, 33, 39, 0.1)',
              border: '1px solid rgba(243, 125, 57, 0.3)'
            }} whileHover={{
              y: -2
            }} whileTap={{
              y: 4,
              boxShadow: '0px 1px 0px 0px #F37D39, 0px 2px 4px 0px rgba(48, 33, 39, 0.1)'
            }}>
                {/* Subtle shine effect overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                
                <span className="relative z-10">See Geo Tools</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div variants={itemVariants} className="relative w-full max-w-[568px] mx-auto lg:ml-auto">
            <div className="relative aspect-square w-full rounded-[20px] border border-[#979093]/20 bg-[#f8fafc] overflow-hidden flex items-center justify-center shadow-sm" style={{
            display: "none"
          }}>
              <img src="https://ik.imagekit.io/loyalty/sendpush/image%20placeholder-640-square.jpg?tr=w-800,q-85:w-1080,c-at_max" alt="Geo-fence visual placeholder" className="w-full h-full object-cover" loading="lazy" style={{
              display: "none"
            }} />
              
              {/* Decorative abstract elements (Optional, to make it feel more "app-like" if the image fails to load or just as an overlay) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `
    }} />
    </section>;
};