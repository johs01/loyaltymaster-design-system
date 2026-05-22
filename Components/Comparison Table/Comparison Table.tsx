import React from 'react';
import { motion } from 'framer-motion';
export interface Column {
  id: string;
  label: string;
  isHighlighted?: boolean;
}
export interface RowData {
  feature: string;
  values: Record<string, string>;
}
export interface ComparisonTableProps {
  eyebrow?: string;
  title?: string;
  columns?: Column[];
  data?: RowData[];
  ctaText?: string;
  ctaHref?: string;
}
const defaultColumns: Column[] = [{
  id: 'setupflow',
  label: 'SetupFlow',
  isHighlighted: true
}, {
  id: 'bulkSms',
  label: 'Bulk SMS App'
}, {
  id: 'emailTool',
  label: 'Email Tool'
}, {
  id: 'manual',
  label: 'Manual Follow-Up'
}];
const defaultData: RowData[] = [{
  feature: 'Geo-fenced targeting',
  values: {
    setupflow: 'Yes',
    bulkSms: 'No',
    emailTool: 'No',
    manual: 'No'
  }
}, {
  feature: 'Behavior automations',
  values: {
    setupflow: 'Yes',
    bulkSms: 'Limited',
    emailTool: 'Limited',
    manual: 'No'
  }
}, {
  feature: 'Revenue attribution',
  values: {
    setupflow: 'Yes',
    bulkSms: 'No',
    emailTool: 'No',
    manual: 'No'
  }
}, {
  feature: 'Fast setup',
  values: {
    setupflow: 'Under 1 hour',
    bulkSms: '2-3 days',
    emailTool: '1-2 days',
    manual: 'Ongoing'
  }
}];

// @component: ComparisonTable
export const ComparisonTable = ({
  eyebrow = 'Comparison',
  title = 'See How SetupFlow Beats Generic Campaign Tools',
  columns = defaultColumns,
  data = defaultData,
  ctaText = 'See Pricing and Plans',
  ctaHref = '#'
}: ComparisonTableProps) => {
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // @return
  return <section className="bg-[#eaf5f8] py-16 md:py-[84px] w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }} className="flex flex-col items-center">
          {/* Header area */}
          <motion.div variants={itemVariants} className="text-center mb-7 w-full max-w-3xl">
            {eyebrow && <p className="text-[#979093] text-base font-bold uppercase tracking-tight mb-3.5">
                {eyebrow}
              </p>}
            {title && <h2 className="text-[#302127] text-4xl md:text-[52px] leading-tight md:leading-[1.05] font-bold tracking-tight m-0">
                {title}
              </h2>}
          </motion.div>

          {/* Table Container */}
          <motion.div variants={itemVariants} className="w-full relative mt-7 overflow-x-auto rounded-2xl border border-[rgba(151,144,147,0.34)] bg-white shadow-sm">
            <table className="w-full text-left border-collapse table-fixed min-w-[800px]">
              <thead>
                <tr>
                  <th className="w-[30%] lg:w-[378px] bg-[#faf8f9] text-[#302127] font-bold text-base py-4 px-4 md:px-[18px] border-b border-[rgba(151,144,147,0.2)] rounded-tl-2xl">
                    Feature
                  </th>
                  {columns.map((col, index) => <th key={col.id} className={`
                        w-auto lg:w-[201px] text-[#302127] font-bold text-base py-4 px-4 md:px-[18px] border-b border-[rgba(151,144,147,0.2)]
                        ${col.isHighlighted ? 'bg-[#fcb827]/14' : 'bg-[#faf8f9]'}
                        ${index === columns.length - 1 ? 'rounded-tr-2xl' : ''}
                      `}>
                      {col.label}
                    </th>)}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => <tr key={rowIndex} className="transition-colors hover:bg-black/[0.02]">
                    <td className="text-[#302127] font-medium text-base py-4 px-4 md:px-[18px] border-t border-[rgba(151,144,147,0.22)]">
                      {row.feature}
                    </td>
                    {columns.map(col => <td key={`${rowIndex}-${col.id}`} className={`
                          text-base py-4 px-4 md:px-[18px] border-t border-[rgba(151,144,147,0.22)]
                          ${col.isHighlighted ? 'bg-[#fcb827]/14 text-[#302127] font-bold' : 'text-[#302127] font-medium'}
                        `}>
                        {row.values[col.id]}
                      </td>)}
                  </tr>)}
              </tbody>
            </table>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-10 mb-4 flex justify-center w-full">
            <a href={ctaHref} onClick={e => {
            if (ctaHref === '#') e.preventDefault();
          }} className="
                group relative inline-flex items-center justify-center min-h-[58px] 
                px-7 rounded-full bg-[#fcb827] text-[#2a1f16] font-bold text-[20px] 
                tracking-tight overflow-hidden transition-all duration-300
                shadow-[0px_5px_0px_0px_#f37d39,0px_8px_14px_0px_rgba(48,33,39,0.1)]
                hover:translate-y-[-2px] hover:shadow-[0px_7px_0px_0px_#f37d39,0px_12px_20px_0px_rgba(48,33,39,0.15)]
                active:translate-y-[3px] active:shadow-[0px_2px_0px_0px_#f37d39,0px_4px_8px_0px_rgba(48,33,39,0.1)]
              ">
              {/* Shine effect matching original style */}
              <span className="absolute inset-0 w-full h-full opacity-60 pointer-events-none transition-transform duration-700 -translate-x-full group-hover:translate-x-full" style={{
              backgroundImage: 'linear-gradient(112deg, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 0.34) 44%, rgba(255, 255, 255, 0) 68%)'
            }} />
              <span className="relative z-10">{ctaText}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};