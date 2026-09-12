import React from 'react';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-lowest text-secondary font-body-md text-body-md w-full py-section-padding border-t border-outline-variant/50">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-4 mb-8 md:mb-0">
          <button
            onClick={() => handleNavClick('home')}
            className="font-display-lg text-headline-md text-primary block mb-6 tracking-widest text-left"
          >
            SAIKA
          </button>
          <p className="text-on-surface-variant text-sm max-w-xs uppercase tracking-wider">
            © 2024 SAIKA STORE. THE LITTLE THINGS THAT SPARK JOY.
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-7 mb-8 md:mb-0">
          <h4 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest">
            Shop
          </h4>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => handleNavClick('shop')}
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
              >
                Collections
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('shop')}
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
              >
                New Arrivals
              </button>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 mb-8 md:mb-0">
          <h4 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest">
            About
          </h4>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => handleNavClick('about')}
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
              >
                Our Story
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest">
            Support
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#shipping"
                onClick={(e) => { e.preventDefault(); alert("Shipping & Returns policy: Free shipping worldwide on orders over $150."); }}
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
              >
                Shipping &amp; Returns
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                onClick={(e) => { e.preventDefault(); alert("Privacy Policy: Your privacy and personal data are strictly protected."); }}
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-left font-body-md text-sm"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
