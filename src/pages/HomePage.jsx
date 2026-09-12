import React, { useState } from 'react';
import ShopTheLook from '../components/ShopTheLook';
import BestSellersSlider from '../components/BestSellersSlider';
import NewsletterSection from '../components/NewsletterSection';

export default function HomePage({
  setCurrentPage,
  products,
  onQuickAdd,
  onAddToCart,
  toggleWishlist,
  wishlist,
  showToast,
}) {
  const [activeMoodIndex, setActiveMoodIndex] = useState(0);

  const heroMoods = [
    {
      title: "Little Details.\nLasting Joy.",
      tag: "The Saika Store",
      subtitle: "A curated destination for aesthetic lifestyle products, thoughtful gifts, and elegant essentials you’ll love to own and share.",
      image: "/images/hero_home.png",
      cta: "Explore What’s Coming",
    },
    {
      title: "Tactile Luxury.\nSubtle Harmony.",
      tag: "Quiet Luxury 2024",
      subtitle: "Objects defined by form, function, and raw material authenticity. Designed to inspire calm in modern spaces.",
      image: "/images/about_origins.png",
      cta: "View Collection",
    },
    {
      title: "Modern Classicism.\nArtisanal Spirit.",
      tag: "Handcrafted Essentials",
      subtitle: "Elevate daily routines with stoneware ceramics, solid 14k gold, and pure washed linen.",
      image: "/images/contact_banner.png",
      cta: "Discover More",
    },
  ];

  const currentHero = heroMoods[activeMoodIndex];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section with Mood Carousel */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 bg-surface-container-low overflow-hidden transition-all duration-700">
        <div
          className="absolute inset-0 parallax opacity-40 mix-blend-multiply bg-cover bg-center transition-all duration-1000 transform scale-105"
          style={{ backgroundImage: `url('${currentHero.image}')` }}
        />
        
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center py-16">
          <div className="md:col-span-8 md:col-start-3 text-center fade-in-up">
            <span className="inline-block px-4 py-2 bg-[#D4C9B0] text-primary-container font-label-caps text-label-caps mb-8 tracking-widest uppercase shadow-sm">
              {currentHero.tag}
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary-container mb-6 leading-tight whitespace-pre-line">
              {currentHero.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
              {currentHero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('collections');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else setCurrentPage('shop');
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-container text-on-primary font-label-caps text-label-caps hover:bg-primary transition-colors duration-300 shadow-ambient uppercase tracking-widest"
              >
                {currentHero.cta}
              </button>

              <button
                onClick={() => setCurrentPage('shop')}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-primary-container hairline-border-gold font-label-caps text-label-caps hover:bg-[#D4AF37]/10 transition-colors duration-300 uppercase tracking-widest"
              >
                Shop All
              </button>
            </div>
          </div>
        </div>

        {/* Hero Mood Switcher Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroMoods.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMoodIndex(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeMoodIndex === idx ? 'w-8 bg-[#3C2A21]' : 'w-2 bg-[#3C2A21]/40 hover:bg-[#3C2A21]/70'
              }`}
              aria-label={`Switch to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Collections (Bento Grid Style) */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface" id="collections">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-headline-md text-headline-md text-primary-container mb-4">Curated Collections</h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[650px]">
            {/* Lifestyle & Home */}
            <div
              onClick={() => setCurrentPage('shop')}
              className="md:col-span-8 md:row-span-2 relative group overflow-hidden bg-surface-container shadow-ambient cursor-pointer min-h-[350px]"
            >
              <img
                src="/images/collection_lifestyle.png"
                alt="Lifestyle & Home"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-primary-container/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 bg-surface/90 text-primary-container font-label-caps text-[10px] uppercase tracking-widest mb-3">
                  Curated
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Lifestyle &amp; Home</h3>
                <button className="inline-flex items-center text-on-primary font-label-caps text-label-caps group-hover:underline uppercase tracking-wider">
                  Shop Collection <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Fashion Accessories */}
            <div
              onClick={() => setCurrentPage('shop')}
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-surface-container shadow-ambient cursor-pointer min-h-[300px]"
            >
              <img
                src="/images/collection_accessories.png"
                alt="Fashion Accessories"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-primary-container/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">Fashion Accessories</h3>
                <button className="inline-flex items-center text-on-primary font-label-caps text-label-caps group-hover:underline uppercase tracking-wider">
                  Discover <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Premium Crockery */}
            <div
              onClick={() => setCurrentPage('shop')}
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-surface-container shadow-ambient cursor-pointer min-h-[300px]"
            >
              <img
                src="/images/collection_crockery.png"
                alt="Premium Crockery"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-primary-container/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">Premium Crockery</h3>
                <button className="inline-flex items-center text-on-primary font-label-caps text-label-caps group-hover:underline uppercase tracking-wider">
                  View Range <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Shop The Room Hotspots */}
      <ShopTheLook onAddToCart={onAddToCart} showToast={showToast} />

      {/* Trending Best Sellers Slider */}
      <BestSellersSlider
        products={products}
        onQuickAdd={onQuickAdd}
        toggleWishlist={toggleWishlist}
        wishlist={wishlist}
        showToast={showToast}
      />

      {/* Brand Story */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-[#FAF9F6] relative border-t hairline-border">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 fade-in-up">
            <img
              src="/images/brand_philosophy.png"
              alt="Brand Story Texture"
              className="w-full h-auto aspect-[3/4] object-cover shadow-ambient border border-outline-variant/30"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 fade-in-up delay-100 mt-8 md:mt-0">
            <h2 className="font-headline-md text-headline-md text-primary-container mb-6">Our Philosophy</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              The Saika Store is dedicated to curating elegant, high-quality lifestyle products that elevate the everyday. We believe in the power of "Quiet Luxury"—where substance, tactility, and intentionality take precedence over the superfluous.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Every piece in our collection is chosen with a discerning eye for design and craftsmanship, ensuring that the objects you surround yourself with are not just functional, but genuinely spark joy.
            </p>
            <button
              onClick={() => setCurrentPage('about')}
              className="inline-flex items-center px-6 py-3 bg-transparent text-primary-container hairline-border-gold font-label-caps text-label-caps hover:bg-[#D4AF37]/10 transition-colors duration-300 uppercase tracking-widest"
            >
              Read Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection showToast={showToast} />
    </div>
  );
}
