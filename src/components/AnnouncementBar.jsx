import React, { useState } from 'react';
import { FREE_SHIPPING_THRESHOLD, formatCurrency } from '../utils/currency';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary-container text-on-primary text-[10px] sm:text-[11px] font-label-caps tracking-widest py-2.5 px-10 md:px-14 uppercase relative z-50 border-b border-outline/30 flex items-center justify-center">
      <div className="max-w-container-max w-full flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center leading-snug">
        <span>
          <span aria-hidden="true" className="mr-1.5">✨</span>
          Complimentary Express Shipping on Orders Over {formatCurrency(FREE_SHIPPING_THRESHOLD)}
        </span>
        <span aria-hidden="true" className="hidden sm:inline text-[#D4AF37]/80">
          •
        </span>
        <span>New Autumn Essentials Now In Stock</span>
      </div>

      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-on-primary/65 hover:text-on-primary transition-colors"
        aria-label="Close announcement"
      >
        <span className="material-symbols-outlined text-[15px] leading-none">close</span>
      </button>
    </div>
  );
}
