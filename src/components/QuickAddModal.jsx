import React, { useState, useEffect } from 'react';
import { formatCurrency } from '../utils/currency';

export default function QuickAddModal({ product, onClose, onAddToCart, onSelectProduct }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product?.id]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 bg-surface w-full max-w-2xl border border-outline-variant/50 shadow-2xl p-6 md:p-10 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:opacity-70 p-1"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square bg-surface-container-low overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="inline-block px-3 py-1 bg-[#D4C9B0] text-primary-container font-label-caps text-[10px] uppercase tracking-widest mb-3">
                {product.category || 'Curated'}
              </span>
              <h2 className="font-headline-md text-2xl text-primary mb-2">{product.name}</h2>
              <p className="font-body-md text-sm text-on-surface-variant mb-4">{product.subtitle}</p>
              <span className="font-label-caps text-lg text-secondary block mb-6">{formatCurrency(product.price)}</span>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mb-6">
                {product.description || 'Handcrafted with raw tactility and timeless aesthetic. Part of our curated quiet luxury collection.'}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-label-caps text-xs text-outline uppercase tracking-wider">Quantity</span>
                <div className="flex items-center border border-outline-variant/50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm hover:bg-surface-container transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-label-caps">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm hover:bg-surface-container transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className="w-full bg-primary-container text-on-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-colors shadow-ambient"
              >
                Add to Bag — {formatCurrency(product.price * quantity, { decimals: true })}
              </button>

              {onSelectProduct && (
                <button
                  onClick={() => {
                    onClose();
                    onSelectProduct(product);
                  }}
                  className="w-full py-2.5 text-center font-label-caps text-[11px] text-primary hover:text-secondary uppercase tracking-widest underline underline-offset-4 transition-colors"
                >
                  View Full Product Details &amp; Gallery →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
