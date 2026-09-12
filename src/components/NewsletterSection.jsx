import React, { useState } from 'react';

export default function NewsletterSection({ showToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showToast('Subscribed! Use code SAIKA10 for 10% off.');
  };

  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-[#3C2A21] text-on-primary relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="font-label-caps text-label-caps text-[#D4AF37] uppercase tracking-widest block mb-4">
          The Saika Journal
        </span>
        <h2 className="font-display-lg text-3xl md:text-5xl text-on-primary mb-6">
          Join the Circle
        </h2>
        <p className="font-body-lg text-body-lg text-[#AA9084] max-w-xl mx-auto mb-10 leading-relaxed">
          Receive private invitations to new collection launches, editorial lookbooks, and exclusive member privileges.
        </p>

        {subscribed ? (
          <div className="bg-[#FAF9F6] text-[#3C2A21] p-8 border border-[#D4AF37] animate-fadeIn">
            <span className="material-symbols-outlined text-4xl text-[#735C00] mb-2">mark_email_read</span>
            <h3 className="font-headline-sm text-xl mb-2">Welcome to The Saika Circle</h3>
            <p className="font-body-md text-sm text-[#4F4540] mb-4">
              Your exclusive 10% welcome code is: <strong className="text-secondary font-bold">SAIKA10</strong>
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText('SAIKA10');
                showToast('Promo code SAIKA10 copied!');
              }}
              className="px-6 py-2 bg-[#3C2A21] text-on-primary font-label-caps text-xs tracking-widest uppercase hover:bg-black transition-colors"
            >
              Copy Promo Code
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 bg-surface/10 border border-outline-variant/30 text-on-primary placeholder:text-[#AA9084] px-4 py-4 font-body-md focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#D4AF37] text-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-[#ffe088] transition-colors shadow-ambient whitespace-nowrap font-bold"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
