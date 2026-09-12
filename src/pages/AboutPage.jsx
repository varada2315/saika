import React from 'react';

export default function AboutPage({ setCurrentPage }) {
  return (
    <main className="animate-fadeIn">
      {/* Hero Section Banner with Background Image */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-24 pb-16 bg-surface-container-low overflow-hidden border-b hairline-border mb-12">
        <div
          className="absolute inset-0 parallax opacity-40 mix-blend-multiply bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero_about.png')" }}
        />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-center fade-in-up">
          <span className="inline-block px-4 py-2 bg-[#D4C9B0] text-primary-container font-label-caps text-label-caps mb-6 tracking-widest uppercase shadow-sm">
            Our Story &amp; Craft
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary-container mb-6 leading-tight">
            The Little Things That Spark Joy.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            A curated collection of lifestyle essentials designed to elevate the everyday. We believe in substance, tactility, and intentionality over overt branding.
          </p>
        </div>
      </section>

      {/* Alternating Section 1 - Our Origins */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t hairline-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 md:col-start-2 order-2 md:order-1 pr-0 md:pr-12 fade-in-up">
            <h2 className="font-headline-md text-headline-md text-primary mb-6">Our Origins</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              Saika was born from a desire to find beauty in simplicity. Our founders, weary of the noise of fast fashion and disposable trends, sought to create a space dedicated to 'Quiet Luxury'.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We source meticulously, focusing on natural materials, ethical production, and timeless design. Every item in our store has been chosen because it brings a quiet sense of joy and utility to daily life.
            </p>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 mb-8 md:mb-0 fade-in-up delay-100">
            <img
              src="/images/about_origins.png"
              alt="Our Origins studio setting"
              className="w-full h-auto object-cover rounded-sm shadow-[0_20px_40px_-15px_rgba(60,42,33,0.08)] border border-outline-variant/30"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Mission Card */}
          <div className="bg-[#D4C9B0]/20 p-12 md:p-16 rounded-sm shadow-[0_10px_30px_-10px_rgba(60,42,33,0.04)] border border-[#D4C9B0]/30 hover:-translate-y-1 transition-transform duration-500 ease-out flex flex-col justify-center fade-in-up">
            <div className="w-12 h-[1px] bg-primary/50 mb-8"></div>
            <h3 className="font-label-caps text-label-caps text-primary mb-4 tracking-widest uppercase">Our Mission</h3>
            <p className="font-headline-sm text-headline-sm text-primary leading-relaxed">
              To curate thoughtfully designed lifestyle products that encourage mindful living and everyday elegance.
            </p>
          </div>
          {/* Vision Card */}
          <div className="bg-surface-container-low p-12 md:p-16 rounded-sm shadow-[0_10px_30px_-10px_rgba(60,42,33,0.04)] border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-500 ease-out flex flex-col justify-center fade-in-up delay-100">
            <div className="w-12 h-[1px] bg-primary/50 mb-8"></div>
            <h3 className="font-label-caps text-label-caps text-primary mb-4 tracking-widest uppercase">Our Vision</h3>
            <p className="font-headline-sm text-headline-sm text-primary leading-relaxed">
              To become a sanctuary for those seeking refined, timeless pieces that transcend seasonal trends.
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Section 2 - The Art of Curation */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t hairline-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-2 mb-8 md:mb-0 fade-in-up">
            <img
              src="/images/about_curation.png"
              alt="The Art of Curation"
              className="w-full h-auto object-cover rounded-sm shadow-[0_20px_40px_-15px_rgba(60,42,33,0.08)] border border-outline-variant/30"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8 pl-0 md:pl-12 fade-in-up delay-100">
            <h2 className="font-headline-md text-headline-md text-primary mb-6">The Art of Curation</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              We don't just sell products; we assemble a collection. Our process involves rigorous consideration of form, function, and the subtle tactility of materials.
            </p>
            <button
              onClick={() => {
                setCurrentPage('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 shadow-ambient"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
