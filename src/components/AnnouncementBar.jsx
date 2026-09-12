import React, { useState } from 'react';

export default function AnnouncementBar({ onCopyCode }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary-container text-on-primary text-[11px] font-label-caps tracking-widest py-2 px-4 uppercase relative z-50 border-b border-outline/30 flex justify-between items-center overflow-hidden">
      <div className="flex-1 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee pl-4">
          <span className="mx-6">✨ COMPLIMENTARY EXPRESS SHIPPING ON ORDERS OVER $150</span>
          <span className="mx-6">•</span>
          <span className="mx-6 cursor-pointer underline hover:text-[#D4AF37]" onClick={() => onCopyCode('SAIKA10')}>
            USE CODE <strong className="text-[#D4AF37]">SAIKA10</strong> FOR 10% OFF FIRST ORDER
          </span>
          <span className="mx-6">•</span>
          <span className="mx-6">NEW AUTUMN ESSENTIALS NOW IN STOCK</span>
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-on-primary/60 hover:text-on-primary transition-colors p-1"
        aria-label="close announcement"
      >
        <span className="material-symbols-outlined text-[14px]">close</span>
      </button>
    </div>
  );
}
