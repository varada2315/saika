import React from 'react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#3C2A21] text-on-primary px-6 py-4 border-l-4 border-[#D4AF37] shadow-2xl flex items-center gap-4 animate-fadeIn max-w-sm">
      <span className="material-symbols-outlined text-[#D4AF37]">check_circle</span>
      <span className="font-body-md text-xs tracking-wider flex-1">{message}</span>
      <button onClick={onClose} className="text-on-primary/60 hover:text-on-primary p-1">
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
}
