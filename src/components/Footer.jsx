import React, { useState } from 'react';
import FooterInfoModal from './FooterInfoModal';

export default function Footer({ setCurrentPage }) {
  const [activePolicyKey, setActivePolicyKey] = useState(null);

  const handleNavClick = (pageId, category = 'All') => {
    setCurrentPage(pageId, category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shopLinks = [
    { label: 'Collections', category: 'All' },
    { label: 'Lifestyle', category: 'Lifestyle' },
    { label: 'Accessories', category: 'Accessories' },
    { label: 'Crockery', category: 'Crockery' },
    { label: 'Home Accents', category: 'Home Accents' },
  ];

  const supportLinks = [
    { label: 'Shipping & Returns', policyKey: 'shipping' },
    { label: 'Refund & Exchange Policy', policyKey: 'returns' },
    { label: 'Material & Care Guide', policyKey: 'care' },
    { label: 'Concierge FAQs', policyKey: 'faq' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', policyKey: 'privacy' },
    { label: 'Terms & Conditions', policyKey: 'terms' },
    { label: 'Cookie Policy', policyKey: 'cookies' },
  ];

  return (
    <>
      <footer className="bg-surface-container-lowest text-secondary font-body-md text-body-md w-full pt-section-padding pb-12 border-t border-outline-variant/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Brand Summary */}
          <div className="sm:col-span-2 lg:col-span-4 mb-6 lg:mb-0">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              aria-label="The Saika Store Home"
              className="inline-flex items-center text-primary mb-6 hover:opacity-85 transition-opacity group"
            >
              <img
                src="/images/saika_logo.jpg"
                alt="The Saika Store"
                className="w-20 h-20 rounded-full object-cover border border-outline-variant/35 shadow-ambient shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
            </button>
            <p className="text-on-surface-variant text-sm max-w-xs uppercase tracking-wider mb-6">
              © 2024 SAIKA STORE. THE LITTLE THINGS THAT SPARK JOY.
            </p>
            <div className="space-y-1.5 text-xs text-on-surface-variant">
              <p>
                Concierge:{' '}
                <a
                  href="mailto:Thesaikastore@gmail.com"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  Thesaikastore@gmail.com
                </a>
              </p>
              <p>
                Instagram:{' '}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  @The_saika_store
                </a>
              </p>
            </div>
          </div>

          {/* Shop Menu */}
          <div className="lg:col-span-2 mb-6 lg:mb-0">
            <h4 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick('shop', link.category)}
                    className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About Menu */}
          <div className="lg:col-span-2 mb-6 lg:mb-0">
            <h4 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest">
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('about')}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('contact')}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActivePolicyKey('care')}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
                >
                  Craft &amp; Materials
                </button>
              </li>
            </ul>
          </div>

          {/* Support Menu */}
          <div className="lg:col-span-2 mb-6 lg:mb-0">
            <h4 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item.policyKey}>
                  <button
                    type="button"
                    onClick={() => setActivePolicyKey(item.policyKey)}
                    className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Menu */}
          <div className="lg:col-span-2">
            <h4 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.policyKey}>
                  <button
                    type="button"
                    onClick={() => setActivePolicyKey(item.policyKey)}
                    className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-14 pt-8 border-t border-outline-variant/35 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-label-caps uppercase tracking-widest text-on-surface-variant">
          <span>The Saika Store — Quiet Luxury Essentials</span>
          <span>
            Built by <span className="text-primary font-semibold">Growitate</span>
          </span>
        </div>
      </footer>

      <FooterInfoModal
        policyKey={activePolicyKey}
        onClose={() => setActivePolicyKey(null)}
        onSelectPolicy={setActivePolicyKey}
        onContactClick={() => {
          setActivePolicyKey(null);
          handleNavClick('contact');
        }}
      />
    </>
  );
}
