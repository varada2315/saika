import React, { useState } from 'react';

export default function ShopPage({ products, onQuickAdd, toggleWishlist, wishlist, showToast }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [hoveredId, setHoveredId] = useState(null);

  const categories = ['All', 'Lifestyle', 'Accessories', 'Crockery', 'Home Accents'];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return a.id - b.id;
  });

  return (
    <main className="flex-grow w-full animate-fadeIn">
      {/* Hero Section Banner with Background Image */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 bg-surface-container-low overflow-hidden border-b hairline-border mb-12">
        <div
          className="absolute inset-0 parallax opacity-40 mix-blend-multiply bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero_shop.png')" }}
        />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-center fade-in-up">
          <span className="inline-block px-4 py-2 bg-[#D4C9B0] text-primary-container font-label-caps text-label-caps mb-6 tracking-widest uppercase shadow-sm">
            Curated Catalog
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary-container mb-4">
            Collections
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Curated pieces for a mindful lifestyle. Discover our latest arrivals blending form and function seamlessly.
          </p>
        </div>
      </section>

      {/* Controls & Product Grid Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-padding">
        {/* Sorting & Category Filters */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-outline-variant/30 pb-6">
          {/* Category Filters */}
          <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label-caps text-xs whitespace-nowrap px-5 py-2.5 border transition-all tracking-widest uppercase ${
                  activeCategory === cat
                    ? 'border-primary bg-primary-container text-on-primary font-bold shadow-sm'
                    : 'border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="font-label-caps text-[11px] text-outline uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-outline-variant/50 px-3 py-2 font-label-caps text-xs uppercase tracking-wider text-primary focus:outline-none focus:border-primary cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </header>

        {/* Product Grid (Asymmetric layout with interactive hover) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {sortedProducts.map((product, idx) => {
            let colSpan = "md:col-span-4";
            let aspectClass = "aspect-[3/4]";
            if (idx === 0) {
              colSpan = "md:col-span-8";
              aspectClass = "aspect-[4/3]";
            } else if (idx === 3) {
              colSpan = "md:col-span-6";
              aspectClass = "aspect-[16/10]";
            }

            const isWishlisted = wishlist.some((w) => w.id === product.id);
            const isHovered = hoveredId === product.id;
            const displayImage = isHovered && product.detailImage ? product.detailImage : product.image;

            return (
              <article
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`${colSpan} group cursor-pointer relative flex flex-col justify-between p-4 bg-surface-container-lowest border border-outline-variant/30 hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`w-full ${aspectClass} bg-surface-container-low mb-6 overflow-hidden relative shadow-ambient`}>
                  <img
                    src={displayImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Wishlist Toggle Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product);
                      showToast(isWishlisted ? `Removed from wishlist` : `Added ${product.name} to wishlist`);
                    }}
                    className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all ${
                      isWishlisted
                        ? 'bg-secondary text-on-secondary'
                        : 'bg-surface/80 text-primary hover:bg-surface'
                    }`}
                    aria-label="Wishlist"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isWishlisted ? 'favorite' : 'favorite_border'}
                    </span>
                  </button>

                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => onQuickAdd(product)}
                      className="bg-primary-container text-on-primary font-label-caps text-label-caps px-8 py-4 tracking-widest uppercase hover:bg-primary transition-colors shadow-lg"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest block mb-1">
                      {product.category}
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-1 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">{product.subtitle}</p>
                  </div>
                  <span className="font-label-caps text-label-caps text-secondary font-bold tracking-wider text-base">
                    ${product.price}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
