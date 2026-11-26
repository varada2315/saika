import React, { useEffect, useState } from 'react';
import { formatCurrency } from '../utils/currency';

/**
 * Individual product detail page featuring a 4-image gallery,
 * purchase controls, and related pieces.
 */
export default function ProductPage({
  product,
  allProducts,
  onAddToCart,
  toggleWishlist,
  wishlist,
  onSelectProduct,
  onNavigate,
  showToast,
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setQuantity(1);
    setIsLightboxOpen(false);
  }, [product?.id]);

  if (!product) return null;

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [{ src: product.image, label: 'Studio View' }];
  const currentImage = images[activeImageIndex] || images[0];
  const isWishlisted = wishlist.some((w) => w.id === product.id);

  const relatedProducts = (allProducts || [])
    .filter((item) => item.id !== product.id && item.inShopGrid !== false)
    .slice(0, 3);

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
  };

  return (
    <main className="flex-grow w-full bg-surface animate-fadeIn">
      {/* Breadcrumb Bar */}
      <div className="border-b border-outline-variant/30 bg-surface-container-low/60">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-label-caps uppercase tracking-widest text-on-surface-variant"
          >
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <span className="text-outline">/</span>
            <button
              onClick={() => onNavigate('shop')}
              className="hover:text-primary transition-colors"
            >
              Shop
            </button>
            <span className="text-outline">/</span>
            <button
              onClick={() => onNavigate('shop', product.category)}
              className="hover:text-primary transition-colors"
            >
              {product.category}
            </button>
            <span className="text-outline">/</span>
            <span className="text-primary font-bold">{product.name}</span>
          </nav>

          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-1.5 text-[11px] font-label-caps uppercase tracking-widest text-primary hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Collections
          </button>
        </div>
      </div>

      {/* Main Product Showcase */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: 4-Image Editorial Gallery */}
          <div className="lg:col-span-7">
            {/* Main Image Frame */}
            <div className="relative aspect-square bg-surface-container-low border border-outline-variant/30 overflow-hidden shadow-ambient group">
              <img
                src={currentImage.src}
                alt={`${product.name} — ${currentImage.label}`}
                onClick={() => setIsLightboxOpen(true)}
                className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Expand Lightbox Button */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                aria-label="Enlarge product image"
                className="absolute top-4 right-4 p-2.5 bg-surface/90 text-primary hover:bg-surface border border-outline-variant/40 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">zoom_in</span>
              </button>

              {/* Prev / Next Gallery Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous product image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface/90 text-primary border border-outline-variant/40 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-primary-container hover:text-on-primary transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next product image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface/90 text-primary border border-outline-variant/40 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-primary-container hover:text-on-primary transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </>
              )}
            </div>

            {/* 4-Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-3 md:gap-4 mt-4">
              {images.map((img, idx) => {
                const isActive = idx === activeImageIndex;
                return (
                  <button
                    key={img.src + idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View ${img.label}`}
                    className={`group/thumb relative aspect-square overflow-hidden bg-surface-container-low border transition-all text-left ${
                      isActive
                        ? 'border-primary-container ring-1 ring-primary-container shadow-md'
                        : 'border-outline-variant/40 opacity-75 hover:opacity-100 hover:border-primary/60'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={`${product.name} thumbnail ${idx + 1}: ${img.label}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                    />
                    <span
                      className={`absolute inset-x-0 bottom-0 px-2 py-1 text-[9px] font-label-caps uppercase tracking-wider truncate transition-colors ${
                        isActive
                          ? 'bg-primary-container text-on-primary'
                          : 'bg-surface/85 text-primary'
                      }`}
                    >
                      {img.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Details, Features & Purchase Controls */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary-container text-on-primary font-label-caps text-[10px] uppercase tracking-widest">
                {product.category}
              </span>
            </div>

            <h1 className="font-display-lg-mobile md:font-headline-md text-3xl md:text-4xl text-primary mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-4">{product.subtitle}</p>

            {/* Price Row */}
            <div className="pb-6 mb-6 border-b border-outline-variant/40">
              <span className="font-label-caps text-2xl text-secondary font-bold tracking-wider">
                {formatCurrency(product.price)}
              </span>
            </div>

            {/* Editorial Description */}
            <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Quantity & Action Buttons */}
            <div className="space-y-4">
              <div className="flex items-stretch gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-outline-variant/60 bg-surface-container-lowest">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="px-4 py-3.5 text-sm text-primary hover:bg-surface-container transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-label-caps min-w-[2.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="px-4 py-3.5 text-sm text-primary hover:bg-surface-container transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 bg-primary-container text-on-primary px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-colors shadow-ambient flex items-center justify-center gap-2"
                >
                  <span>Add to Bag — {formatCurrency(product.price * quantity, { decimals: true })}</span>
                </button>
              </div>

              {/* Save to Wishlist Button */}
              <button
                type="button"
                onClick={() => {
                  toggleWishlist(product);
                  showToast(
                    isWishlisted
                      ? 'Removed from wishlist'
                      : `Added ${product.name} to wishlist`
                  );
                }}
                className={`w-full py-3.5 font-label-caps text-label-caps uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${
                  isWishlisted
                    ? 'bg-secondary text-on-secondary border border-secondary'
                    : 'bg-transparent text-primary-container hairline-border-gold hover:bg-[#D4AF37]/10'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isWishlisted ? 'favorite' : 'favorite_border'}
                </span>
                {isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t hairline-border">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div>
                <span className="font-label-caps text-[11px] text-outline uppercase tracking-widest block mb-2">
                  Complete the Sanctuary
                </span>
                <h2 className="font-headline-md text-headline-md text-primary">
                  You May Also Like
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('shop')}
                className="font-label-caps text-xs uppercase tracking-widest text-primary hover:text-secondary transition-colors underline underline-offset-4"
              >
                Explore All Pieces
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {relatedProducts.map((item) => (
                <article
                  key={item.id}
                  onClick={() => onSelectProduct(item)}
                  className="group cursor-pointer bg-surface-container-lowest border border-outline-variant/30 p-4 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <div className="flex justify-between items-start gap-3">
                      <h3 className="font-headline-sm text-base text-primary group-hover:text-secondary transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-label-caps text-sm text-secondary font-bold whitespace-nowrap">
                        {formatCurrency(item.price)}
                      </span>
                    </div>
                    <p className="font-body-md text-xs text-on-surface-variant mt-1 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Zoom Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-primary/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-surface border border-outline-variant/40 p-4 md:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-label-caps text-xs text-primary uppercase tracking-widest">
                {product.name} — {currentImage.label}
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close enlarged view"
                className="text-primary hover:opacity-70 p-1"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="relative aspect-square max-h-[75vh] mx-auto bg-surface-container-low overflow-hidden">
              <img
                src={currentImage.src}
                alt={`${product.name} — ${currentImage.label}`}
                className="w-full h-full object-contain"
              />
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface/90 text-primary border border-outline-variant/40 flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-colors"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface/90 text-primary border border-outline-variant/40 flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-colors"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

