import React, { useState } from 'react';

export default function SearchModal({ isOpen, onClose, products, onSelectProduct }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim() === ''
    ? []
    : products.filter(
        p => p.name.toLowerCase().includes(query.toLowerCase()) || p.subtitle.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-surface/95 backdrop-blur-md flex flex-col p-6 md:p-12 animate-fadeIn">
      {/* Close button */}
      <div className="flex justify-end max-w-container-max mx-auto w-full">
        <button
          onClick={onClose}
          className="text-primary hover:opacity-70 p-2 transition-opacity"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
      </div>

      <div className="max-w-3xl mx-auto w-full mt-8 md:mt-16 flex-1">
        <div className="relative border-b-2 border-primary pb-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search collections, artisan pieces, jewelry..."
            autoFocus
            className="w-full bg-transparent font-display-lg text-2xl md:text-4xl text-primary placeholder:text-outline-variant focus:outline-none pr-10"
          />
          <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-primary text-3xl">
            search
          </span>
        </div>

        {/* Results / Quick Suggestions */}
        <div className="mt-12">
          {query.trim() === '' ? (
            <div>
              <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-4">
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Artisan Vase', 'Solid Gold', 'Washed Linen', 'Lounge Chair', 'Crockery'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 bg-surface-container-low text-primary font-label-caps text-xs tracking-wider uppercase hover:bg-surface-container transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProduct(p);
                    onClose();
                  }}
                  className="flex gap-4 p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer border border-outline-variant/30"
                >
                  <img src={p.image} alt={p.name} className="w-16 h-20 object-cover" />
                  <div>
                    <h4 className="font-headline-sm text-base text-primary">{p.name}</h4>
                    <p className="font-body-md text-xs text-on-surface-variant">{p.subtitle}</p>
                    <span className="font-label-caps text-xs text-secondary mt-2 block">${p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-on-surface-variant font-body-md text-center py-12">
              No products found matching "{query}".
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
