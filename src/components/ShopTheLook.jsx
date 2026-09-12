import React, { useState } from 'react';

export default function ShopTheLook({ onAddToCart, showToast }) {
  const [activePin, setActivePin] = useState(null);

  const hotspots = [
    {
      id: 1,
      name: 'Stoneware Ceramic Vase',
      price: 120,
      image: '/images/shop_artisan_vase.png',
      x: '53%',
      y: '58%',
      subtitle: 'Sage beige matte finish',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Hand-poured Soy Candle',
      price: 45,
      image: '/images/collection_lifestyle.png',
      x: '71%',
      y: '70%',
      subtitle: 'Amber & Santal fragrance',
      rating: 5.0,
    },
    {
      id: 3,
      name: 'Washed Linen Cushion',
      price: 75,
      image: '/images/shop_linen_set.png',
      x: '25%',
      y: '62%',
      subtitle: 'Fringed edge natural linen',
      rating: 4.8,
    },
  ];

  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t hairline-border">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#D4C9B0] text-primary-container font-label-caps text-[10px] uppercase tracking-widest mb-4">
            Interactive Lookbook
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mb-3">Shop The Room</h2>
          <p className="font-body-md text-on-surface-variant max-w-lg mx-auto text-sm">
            Click on the interactive pins to explore individual pieces from our curated sanctuary layout.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] overflow-hidden shadow-2xl rounded-sm border border-outline-variant/30 group">
          <img
            src="/images/collection_lifestyle.png"
            alt="Shop the Room Lifestyle layout"
            className="w-full h-full object-cover filter brightness-[0.95]"
          />

          {/* Hotspot Pins */}
          {hotspots.map((pin) => (
            <div
              key={pin.id}
              style={{ left: pin.x, top: pin.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              {/* Pulse animation ring */}
              <button
                onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
                onMouseEnter={() => setActivePin(pin.id)}
                className="relative group/pin flex items-center justify-center p-2 focus:outline-none"
                aria-label={`View ${pin.name}`}
              >
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#D4AF37] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-[#3C2A21] text-[#D4AF37] border border-[#D4AF37] items-center justify-center text-xs font-bold shadow-lg transition-transform group-hover/pin:scale-110">
                  +
                </span>
              </button>

              {/* Popover Card */}
              {activePin === pin.id && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 bg-surface/95 backdrop-blur-md p-4 shadow-2xl border border-[#D4AF37] z-30 animate-fadeIn text-left">
                  <div className="flex gap-3 items-center mb-3">
                    <img src={pin.image} alt={pin.name} className="w-14 h-14 object-cover" />
                    <div>
                      <h4 className="font-headline-sm text-sm text-primary leading-tight">{pin.name}</h4>
                      <p className="text-[11px] text-on-surface-variant font-body-md">{pin.subtitle}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-label-caps text-xs text-secondary font-bold">${pin.price}</span>
                        <span className="text-[10px] text-tertiary">★ {pin.rating}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onAddToCart({
                        id: pin.id + 10,
                        name: pin.name,
                        subtitle: pin.subtitle,
                        price: pin.price,
                        image: pin.image,
                      });
                      showToast(`${pin.name} added to your bag`);
                    }}
                    className="w-full bg-primary-container text-on-primary py-2 font-label-caps text-[10px] uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-1"
                  >
                    Quick Add <span className="material-symbols-outlined text-xs">shopping_bag</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
