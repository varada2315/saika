import React, { useState } from 'react';
import { LOOKBOOK_PRODUCTS } from '../data/products';
import { formatCurrency } from '../utils/currency';

export default function ShopTheLook({ onAddToCart, onSelectProduct }) {
  const [activePin, setActivePin] = useState(null);

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
          {LOOKBOOK_PRODUCTS.map((pin) => (
            <div
              key={pin.id}
              style={{ left: pin.hotspot.x, top: pin.hotspot.y }}
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
                  <div
                    onClick={() => onSelectProduct?.(pin)}
                    className="flex gap-3 items-center mb-3 cursor-pointer group/card"
                  >
                    <img src={pin.image} alt={pin.name} className="w-14 h-14 object-cover" />
                    <div>
                      <h4 className="font-headline-sm text-sm text-primary leading-tight group-hover/card:text-secondary transition-colors">
                        {pin.name}
                      </h4>
                      <p className="text-[11px] text-on-surface-variant font-body-md">{pin.subtitle}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-label-caps text-xs text-secondary font-bold">{formatCurrency(pin.price)}</span>
                        <span className="text-[10px] text-tertiary">★ {pin.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct?.(pin)}
                      className="border border-primary-container text-primary-container py-2 font-label-caps text-[10px] uppercase tracking-widest hover:bg-surface-container transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onAddToCart(pin)}
                      className="bg-primary-container text-on-primary py-2 font-label-caps text-[10px] uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-1"
                    >
                      Quick Add <span className="material-symbols-outlined text-xs">shopping_bag</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
