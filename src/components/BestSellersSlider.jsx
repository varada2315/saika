import React, { useState } from 'react';
import { BEST_SELLER_IDS } from '../data/products';
import { formatCurrency } from '../utils/currency';

export default function BestSellersSlider({
  products,
  onQuickAdd,
  onSelectProduct,
  toggleWishlist,
  wishlist,
  showToast,
}) {
  const [hoveredId, setHoveredId] = useState(null);

  const bestSellers = BEST_SELLER_IDS.map((id) =>
    products.find((item) => item.id === id)
  ).filter(Boolean);

  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface border-t hairline-border">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-2">
              Most Loved
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">Trending Now</h2>
          </div>
          <p className="font-body-md text-on-surface-variant text-sm max-w-md">
            Our most sought-after objects, acclaimed by interior designers and quiet luxury connoisseurs alike.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {bestSellers.map((item) => {
            const isWishlisted = wishlist.some((w) => w.id === item.id);
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => onSelectProduct?.(item)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group cursor-pointer relative bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between p-4 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image Container with Hover Detail Swap */}
                <div className="relative w-full aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden">
                  <img
                    src={isHovered && item.detailImage ? item.detailImage : item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Wishlist Heart Icon */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(item);
                      showToast(isWishlisted ? `Removed from wishlist` : `Added ${item.name} to wishlist`);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                      isWishlisted
                        ? 'bg-secondary text-on-secondary'
                        : 'bg-surface/80 text-primary hover:bg-surface'
                    }`}
                    aria-label="Wishlist"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {isWishlisted ? 'favorite' : 'favorite_border'}
                    </span>
                  </button>

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary-container/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAdd(item);
                      }}
                      className="w-full bg-primary-container text-on-primary font-label-caps text-[11px] py-3 uppercase tracking-widest hover:bg-primary transition-colors shadow-lg"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-label-caps text-on-surface-variant uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-tertiary">
                      <span>★ {item.rating}</span>
                      <span className="text-on-surface-variant text-[10px] ml-1">({item.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-headline-sm text-base text-primary mb-1 group-hover:text-secondary transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant mb-4 line-clamp-1">{item.subtitle}</p>

                  <div className="flex justify-between items-center pt-2 border-t border-outline-variant/20">
                    <span className="font-label-caps text-sm text-primary font-bold">{formatCurrency(item.price)}</span>
                    
                    {/* Swatches */}
                    <div className="flex gap-1.5">
                      {(item.finishes || []).map((finish) => (
                        <span
                          key={finish.name}
                          title={finish.name}
                          style={{ backgroundColor: finish.hex }}
                          className="w-2.5 h-2.5 rounded-full border border-outline-variant/50"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
