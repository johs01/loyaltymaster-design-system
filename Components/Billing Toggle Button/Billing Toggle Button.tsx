import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * A premium, highly refined billing period toggle switch.
 * The "30% OFF" badge is always visible next to the Yearly label in both states.
 */

export type BillingCycle = 'monthly' | 'yearly';
interface BillingToggleProps {
  /**
   * The initial selected billing cycle. Defaults to 'monthly'.
   */
  initialValue?: BillingCycle;
  /**
   * Callback function triggered when the billing cycle changes.
   */
  onChange?: (value: BillingCycle) => void;
  /**
   * Optional additional CSS classes for the container.
   */
  className?: string;
}
export const BillingToggle: React.FC<BillingToggleProps> = ({
  initialValue = 'monthly',
  onChange,
  className
}) => {
  const [selected, setSelected] = React.useState<BillingCycle>(initialValue);
  const handleToggle = (value: BillingCycle) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };
  const isYearly = selected === 'yearly';
  const isMonthly = selected === 'monthly';
  return <div className={cn('inline-flex items-center gap-1 rounded-full border p-1.5', 'border-[#979093]/15 bg-[#f2eef0]', 'shadow-[0_8px_18px_0_rgba(48,33,39,0.06)] transition-colors duration-300', 'w-[290px] select-none', className)} role="group" aria-label="Billing period">
      <button type="button" aria-pressed={isMonthly} onClick={() => handleToggle('monthly')} className={cn('flex min-h-[44px] flex-1 items-center justify-center rounded-full px-4', 'text-[15px] transition-all duration-300 cursor-pointer outline-none', 'focus-visible:ring-2 focus-visible:ring-[#fcb827]/50', isMonthly ? 'bg-[#fcb827] text-[#2a1f16] font-semibold shadow-[0_2px_0_0_rgba(48,33,39,0.10)]' : 'text-[#979093] font-normal hover:text-[#302127]')}>
        <span>Monthly</span>
      </button>

      <button type="button" aria-pressed={isYearly} onClick={() => handleToggle('yearly')} className={cn('flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-full px-4', 'text-[15px] transition-all duration-300 cursor-pointer outline-none', 'focus-visible:ring-2 focus-visible:ring-[#fcb827]/50', isYearly ? 'bg-[#fcb827] text-[#2a1f16] font-semibold shadow-[0_2px_0_0_rgba(48,33,39,0.10)]' : 'text-[#979093] font-normal hover:text-[#302127]')}>
        <span>Yearly</span>
        <span className={cn('flex items-center', 'text-[11px] font-bold tracking-wide leading-none whitespace-nowrap', 'transition-colors duration-300', isYearly ? 'text-[#2a1f16]' : 'bg-[#fcb827] text-[#2a1f16] rounded-full px-2 py-[3px]')}>
          30% OFF
        </span>
      </button>
    </div>;
};