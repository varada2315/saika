import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import QuickAddModal from './components/QuickAddModal';
import Toast from './components/Toast';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const PRODUCTS = [
  {
    id: 1,
    name: 'The Artisan Vase',
    subtitle: 'Hand-thrown stoneware ceramic',
    price: 120,
    category: 'Lifestyle',
    image: '/images/shop_artisan_vase.png',
    detailImage: '/images/shop_artisan_vase_detail.png',
  },
  {
    id: 2,
    name: 'Essential Chain',
    subtitle: '14k Solid Gold minimal necklace',
    price: 350,
    category: 'Accessories',
    image: '/images/shop_essential_chain.png',
    detailImage: '/images/shop_essential_chain.png',
  },
  {
    id: 3,
    name: 'Washed Linen Set',
    subtitle: 'Set of 4 natural linen napkins',
    price: 65,
    category: 'Lifestyle',
    image: '/images/shop_linen_set.png',
    detailImage: '/images/brand_philosophy.png',
  },
  {
    id: 4,
    name: 'The Lounge Chair',
    subtitle: 'Oak & Boucle upholstered armchair',
    price: 1200,
    category: 'Home Accents',
    image: '/images/shop_lounge_chair.png',
    detailImage: '/images/shop_lounge_chair_detail.png',
  },
  {
    id: 5,
    name: 'Handcrafted Crockery Set',
    subtitle: 'Matte terracotta & stone gray',
    price: 180,
    category: 'Crockery',
    image: '/images/collection_crockery.png',
    detailImage: '/images/collection_crockery.png',
  },
  {
    id: 6,
    name: 'Mocha Leather Cardholder',
    subtitle: 'Full-grain Italian leather',
    price: 95,
    category: 'Accessories',
    image: '/images/collection_accessories.png',
    detailImage: '/images/collection_accessories.png',
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'The Artisan Vase',
      subtitle: 'Hand-thrown stoneware ceramic',
      price: 120,
      quantity: 1,
      image: '/images/shop_artisan_vase.png',
    },
  ]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickAddProduct, setQuickAddProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          quantity: quantity,
          image: product.image,
        },
      ];
    });
    showToast(`${product.name} added to your bag`);
    setIsCartOpen(true);
  };

  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Top Header Wrapper containing Marquee Bar & Navbar stacked */}
      <header className="fixed top-0 w-full z-40 flex flex-col">
        <AnnouncementBar
          onCopyCode={(code) => {
            navigator.clipboard.writeText(code);
            showToast(`Promo code ${code} copied to clipboard!`);
          }}
        />

        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          openCart={() => setIsCartOpen(true)}
          openWishlist={() => setIsWishlistOpen(true)}
          openSearch={() => setIsSearchOpen(true)}
        />
      </header>

      <div className="flex-grow pt-24 md:pt-28">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            products={PRODUCTS}
            onQuickAdd={(p) => setQuickAddProduct(p)}
            onAddToCart={handleAddToCart}
            toggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            showToast={showToast}
          />
        )}
        {currentPage === 'shop' && (
          <ShopPage
            products={PRODUCTS}
            onQuickAdd={(p) => setQuickAddProduct(p)}
            toggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            showToast={showToast}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </div>

      <Footer setCurrentPage={setCurrentPage} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeItem={handleRemoveItem}
        setCurrentPage={setCurrentPage}
        showToast={showToast}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onAddToCart={handleAddToCart}
        removeFromWishlist={handleRemoveFromWishlist}
        setCurrentPage={setCurrentPage}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setQuickAddProduct(p)}
      />

      <QuickAddModal
        product={quickAddProduct}
        onClose={() => setQuickAddProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
