import React from 'react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlist,
  onAddToCart,
  removeFromWishlist,
  setCurrentPage,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface border-l border-outline-variant/30 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-outline-variant/30">
            <h2 className="font-label-caps text-label-caps text-primary uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">favorite</span>
              Wishlist ({wishlist.length})
            </h2>
            <button
              onClick={onClose}
              className="text-primary hover:opacity-70 transition-opacity p-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {wishlist.length === 0 ? (
              <div className="text-center py-16 text-on-surface-variant">
                <span className="material-symbols-outlined text-5xl mb-3 opacity-30">favorite_border</span>
                <p className="font-body-md text-base mb-1">Your wishlist is empty</p>
                <p className="text-xs text-outline mb-6">Save your favorite quiet luxury items for later.</p>
                <button
                  onClick={() => {
                    onClose();
                    setCurrentPage('shop');
                  }}
                  className="inline-block bg-primary-container text-on-primary px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-colors"
                >
                  Discover Collections
                </button>
              </div>
            ) : (
              wishlist.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-outline-variant/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover bg-surface-container-low border border-outline-variant/30"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-headline-sm text-base text-primary">{item.name}</h3>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-outline hover:text-error transition-colors p-1"
                        >
                          <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                      </div>
                      <p className="font-body-md text-xs text-on-surface-variant mt-1">{item.subtitle}</p>
                      <span className="font-label-caps text-sm text-secondary font-bold mt-2 block">
                        ${item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart(item);
                        removeFromWishlist(item.id);
                      }}
                      className="w-full mt-3 bg-primary-container text-on-primary py-2 font-label-caps text-[10px] uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-1"
                    >
                      Move to Bag <span className="material-symbols-outlined text-xs">shopping_bag</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
