import React, { useState } from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeItem,
  setCurrentPage,
  showToast,
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [giftWrap, setGiftWrap] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const giftWrapFee = giftWrap ? 5 : 0;
  const subtotal = Math.max(0, rawSubtotal - discountAmount + giftWrapFee);

  const freeShippingThreshold = 150;
  const progressPercent = Math.min(100, (rawSubtotal / freeShippingThreshold) * 100);
  const amountNeededForFreeShipping = freeShippingThreshold - rawSubtotal;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SAIKA10') {
      setDiscountPercent(10);
      showToast('Promo code SAIKA10 applied: 10% OFF!');
    } else {
      showToast('Invalid promo code. Try SAIKA10.');
    }
  };

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
          <div className="p-6 border-b border-outline-variant/30">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
                Shopping Bag ({cart.reduce((a, c) => a + c.quantity, 0)})
              </h2>
              <button
                onClick={onClose}
                className="text-primary hover:opacity-70 transition-opacity p-1"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="bg-surface-container-low p-3 border border-outline-variant/30">
              <div className="text-[11px] font-label-caps text-on-surface-variant mb-1 flex justify-between">
                <span>
                  {amountNeededForFreeShipping <= 0
                    ? '🎉 You unlocked Free Express Shipping!'
                    : `Add $${amountNeededForFreeShipping.toFixed(2)} more for Free Shipping`}
                </span>
                <span>{progressPercent.toFixed(0)}%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-on-surface-variant">
                <span className="material-symbols-outlined text-5xl mb-3 opacity-30">shopping_bag</span>
                <p className="font-body-md text-base mb-1">Your shopping bag is empty</p>
                <p className="text-xs text-outline mb-6">Discover our latest quiet luxury collections.</p>
                <button
                  onClick={() => {
                    onClose();
                    setCurrentPage('shop');
                  }}
                  className="inline-block bg-primary-container text-on-primary px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-colors"
                >
                  Explore Shop
                </button>
              </div>
            ) : (
              cart.map((item) => (
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
                          onClick={() => removeItem(item.id)}
                          className="text-outline hover:text-error transition-colors p-1"
                        >
                          <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                      </div>
                      <p className="font-body-md text-xs text-on-surface-variant mt-1">{item.subtitle}</p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-outline-variant/50">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-xs hover:bg-surface-container transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-label-caps">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-xs hover:bg-surface-container transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-label-caps text-sm text-primary font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout & Options */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low/60 space-y-4">
              {/* Gift wrap checkbox */}
              <label className="flex items-center gap-2 cursor-pointer text-xs font-body-md text-on-surface-variant">
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                  className="rounded border-outline-variant text-primary focus:ring-primary"
                />
                <span>Add Signature Luxury Gift Wrapping (+$5.00)</span>
              </label>

              {/* Promo input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (SAIKA10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs border border-outline-variant/50 bg-surface uppercase font-label-caps focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-container text-on-primary font-label-caps text-[10px] tracking-widest uppercase hover:bg-primary"
                >
                  Apply
                </button>
              </form>

              {discountPercent > 0 && (
                <div className="flex justify-between text-xs text-secondary font-label-caps">
                  <span>Discount ({discountPercent}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-2 border-t border-outline-variant/30">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Total
                </span>
                <span className="font-headline-sm text-2xl text-primary font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => {
                  showToast('Order placed successfully! Thank you for shopping with Saika.');
                  onClose();
                }}
                className="w-full bg-primary-container text-on-primary py-4 font-label-caps text-label-caps hover:bg-primary transition-colors tracking-widest uppercase shadow-ambient"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
