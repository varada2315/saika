import React, { useEffect, useRef } from 'react';
import {
  FOOTER_POLICIES,
  FOOTER_POLICY_GROUPS,
  getFooterPolicy,
} from '../data/footerPolicies';

/**
 * Architectural two-pane dialog displaying Saika's privacy, legal, shipping,
 * care, and concierge documentation with clean grid alignment.
 */
export default function FooterInfoModal({
  policyKey,
  onClose,
  onSelectPolicy,
  onContactClick,
}) {
  const policy = getFooterPolicy(policyKey);
  const contentScrollRef = useRef(null);

  useEffect(() => {
    if (!policy) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [policy, onClose]);

  useEffect(() => {
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [policyKey]);

  if (!policy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="footer-policy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
    >
      {/* Frosted Backdrop */}
      <div
        className="fixed inset-0 bg-primary/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative z-10 w-full max-w-4xl bg-surface border border-outline-variant/60 shadow-2xl flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Editorial Header */}
        <header className="px-6 py-5 md:px-8 md:py-6 border-b border-outline-variant/40 bg-surface-container-low/80 flex items-start justify-between gap-6 shrink-0">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2.5">
              <span className="inline-flex items-center px-3 py-1 bg-primary-container text-on-primary font-label-caps text-[10px] uppercase tracking-widest leading-none">
                {policy.category}
              </span>
              <span className="font-label-caps text-[10px] text-outline uppercase tracking-widest">
                Effective · {policy.lastUpdated}
              </span>
            </div>
            <h2
              id="footer-policy-modal-title"
              className="font-headline-md text-2xl md:text-3xl text-primary leading-tight"
            >
              {policy.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${policy.title}`}
            className="w-9 h-9 shrink-0 flex items-center justify-center border border-outline-variant/50 bg-surface text-primary hover:bg-primary-container hover:text-on-primary hover:border-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </header>

        {/* Mobile Quick-Switch Bar (wrapped cleanly so nothing clips) */}
        <nav
          aria-label="Policy sections"
          className="md:hidden px-6 py-3 border-b border-outline-variant/30 bg-surface-container-lowest flex flex-wrap gap-1.5 shrink-0"
        >
          {FOOTER_POLICY_GROUPS.flatMap((group) => group.keys).map((key) => {
            const item = FOOTER_POLICIES[key];
            if (!item) return null;
            const isActive = item.key === policy.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => onSelectPolicy(item.key)}
                className={`font-label-caps text-[10px] uppercase tracking-wider px-2.5 py-1.5 border transition-colors ${
                  isActive
                    ? 'bg-primary-container text-on-primary border-primary-container'
                    : 'bg-surface text-on-surface-variant border-outline-variant/40 hover:border-primary hover:text-primary'
                }`}
              >
                {item.shortLabel}
              </button>
            );
          })}
        </nav>

        {/* Split Two-Pane Body */}
        <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Desktop Left Index Rail */}
          <aside className="hidden md:flex md:col-span-4 flex-col justify-between bg-surface-container-low/55 border-r border-outline-variant/40 p-6 overflow-y-auto">
            <nav aria-label="Store policies" className="space-y-6">
              {FOOTER_POLICY_GROUPS.map((group) => (
                <div key={group.id}>
                  <h3 className="font-label-caps text-[10px] text-outline uppercase tracking-widest mb-2.5 px-3">
                    {group.label}
                  </h3>
                  <ul className="space-y-1">
                    {group.keys.map((key) => {
                      const item = FOOTER_POLICIES[key];
                      if (!item) return null;
                      const isActive = item.key === policy.key;
                      return (
                        <li key={item.key}>
                          <button
                            type="button"
                            onClick={() => onSelectPolicy(item.key)}
                            className={`w-full text-left px-3 py-2.5 border-l-2 font-body-md text-xs transition-all flex items-center justify-between gap-2 ${
                              isActive
                                ? 'border-primary-container bg-surface text-primary font-semibold shadow-ambient'
                                : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface/60 hover:border-outline-variant'
                            }`}
                          >
                            <span>{item.shortLabel}</span>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] shrink-0" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Concierge Contact Block Aligned to Bottom of Rail */}
            <div className="mt-8 pt-5 border-t border-outline-variant/35 px-3 space-y-1.5">
              <span className="font-label-caps text-[10px] text-outline uppercase tracking-widest block">
                Client Concierge
              </span>
              <a
                href="mailto:Thesaikastore@gmail.com"
                className="block font-body-md text-xs text-primary hover:text-secondary transition-colors break-all"
              >
                Thesaikastore@gmail.com
              </a>
              <a
                href="tel:8208220160"
                className="block font-body-md text-xs text-on-surface-variant hover:text-primary transition-colors"
              >
                +91 8208220160
              </a>
            </div>
          </aside>

          {/* Right Editorial Content Column */}
          <div
            ref={contentScrollRef}
            className="md:col-span-8 overflow-y-auto px-6 py-6 md:px-9 md:py-8 space-y-7 bg-surface"
          >
            {/* Lead Statement */}
            <div className="bg-surface-container-low/70 border border-outline-variant/30 border-l-2 border-l-[#D4AF37] px-5 py-4">
              <p className="font-body-md text-xs md:text-sm text-primary leading-relaxed">
                {policy.intro}
              </p>
            </div>

            {/* 3-Column Aligned Highlights Bar */}
            {policy.highlights && policy.highlights.length > 0 && (
              <dl className="grid grid-cols-1 sm:grid-cols-3 border border-outline-variant/40 bg-surface-container-lowest divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/35">
                {policy.highlights.map((item) => (
                  <div key={item.label} className="px-4 py-3.5">
                    <dt className="font-label-caps text-[9px] text-outline uppercase tracking-widest mb-1">
                      {item.label}
                    </dt>
                    <dd className="font-body-md text-xs font-medium text-primary leading-snug">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {/* Numbered Editorial Clauses */}
            <div className="divide-y divide-outline-variant/30 border-t border-outline-variant/30">
              {policy.sections.map((section, idx) => (
                <section
                  key={section.heading}
                  className="py-6 first:pt-6 last:pb-2 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-start"
                >
                  <div className="sm:col-span-4">
                    <span className="font-label-caps text-[10px] text-tertiary tracking-widest block mb-1">
                      0{idx + 1}
                    </span>
                    <h3 className="font-label-caps text-[11px] text-primary uppercase tracking-widest leading-5">
                      {section.heading}
                    </h3>
                  </div>

                  <div className="sm:col-span-8 space-y-3">
                    {section.body && (
                      <p className="font-body-md text-xs md:text-[13.5px] text-on-surface-variant leading-6 md:leading-7">
                        {section.body}
                      </p>
                    )}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2.5">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 font-body-md text-xs md:text-[13.5px] text-on-surface-variant leading-6"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[9px] w-1.5 h-1.5 rotate-45 bg-[#D4AF37] shrink-0"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action Footer */}
        <footer className="px-6 py-4 md:px-8 border-t border-outline-variant/40 bg-surface-container-low/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="font-body-md text-[11px] text-on-surface-variant text-center sm:text-left">
            Questions regarding this document?{' '}
            <span className="text-primary font-medium">Our concierge responds within 24 hours.</span>
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onContactClick}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-transparent text-primary-container hairline-border-gold font-label-caps text-[11px] uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-colors text-center whitespace-nowrap"
            >
              Contact Concierge
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-7 py-2.5 bg-primary-container text-on-primary font-label-caps text-[11px] uppercase tracking-widest hover:bg-primary transition-colors shadow-ambient text-center"
            >
              Close
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
