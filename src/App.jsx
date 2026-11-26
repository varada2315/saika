import React, { useState, useEffect } from 'react';
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
import ProductPage from './pages/ProductPage';
import {
  ALL_PRODUCTS,
  CATALOG_PRODUCTS,
  getProductByIdOrSlug,
} from './data/products';

function parseHashRoute() {
  if (typeof window === 'undefined') return { page: 'home', productSlug: null };
  const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
  if (!rawHash) return { page: 'home', productSlug: null };

  if (rawHash.startsWith('product/')) {
    const slug = decodeURIComponent(rawHash.slice('product/'.length));
    const matched = getProductByIdOrSlug(slug);
    if (matched) return { page: 'product', productSlug: matched.slug };
    return { page: 'shop', productSlug: null };
  }

  if (['home', 'shop', 'about', 'contact'].includes(rawHash)) {
    return { page: rawHash, productSlug: null };
  }
  return { page: 'home', productSlug: null };
}

export default function App() {
  const initialRoute = parseHashRoute();
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [selectedProductSlug, setSelectedProductSlug] = useState(initialRoute.productSlug);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([
    {
      id: CATALOG_PRODUCTS[0].id,
      slug: CATALOG_PRODUCTS[0].slug,
      name: CATALOG_PRODUCTS[0].name,
      subtitle: CATALOG_PRODUCTS[0].subtitle,
      price: CATALOG_PRODUCTS[0].price,
      quantity: 1,
      image: CATALOG_PRODUCTS[0].image,
    },
  ]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickAddProduct, setQuickAddProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const next = parseHashRoute();
      setCurrentPage(next.page);
      setSelectedProductSlug(next.productSlug);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId, category = 'All') => {
    setSelectedCategory(pageId === 'shop' ? category : 'All');
    setSelectedProductSlug(null);
    setCurrentPage(pageId);
    const nextHash = pageId === 'home' ? '#/' : `#/${pageId}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProductPage = (productOrId) => {
    const targetKey =
      typeof productOrId === 'object' && productOrId !== null
        ? productOrId.slug ?? productOrId.id
        : productOrId;
    const resolved = getProductByIdOrSlug(targetKey);
    if (!resolved) return;

    setSelectedProductSlug(resolved.slug);
    setCurrentPage('product');
    const nextHash = `#/product/${resolved.slug}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeProduct = getProductByIdOrSlug(selectedProductSlug);

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
          slug: product.slug,
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
        <AnnouncementBar />

        <Navbar
          currentPage={currentPage}
          setCurrentPage={navigateTo}
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
            setCurrentPage={navigateTo}
            products={CATALOG_PRODUCTS}
            onQuickAdd={(p) => setQuickAddProduct(p)}
            onAddToCart={handleAddToCart}
            onSelectProduct={openProductPage}
            toggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            showToast={showToast}
          />
        )}
        {currentPage === 'shop' && (
          <ShopPage
            products={CATALOG_PRODUCTS}
            initialCategory={selectedCategory}
            onQuickAdd={(p) => setQuickAddProduct(p)}
            onSelectProduct={openProductPage}
            toggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            showToast={showToast}
          />
        )}
        {currentPage === 'product' && activeProduct && (
          <ProductPage
            product={activeProduct}
            allProducts={ALL_PRODUCTS}
            onAddToCart={handleAddToCart}
            toggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            onSelectProduct={openProductPage}
            onNavigate={navigateTo}
            showToast={showToast}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage setCurrentPage={navigateTo} />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </div>

      <Footer setCurrentPage={navigateTo} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeItem={handleRemoveItem}
        setCurrentPage={navigateTo}
        onSelectProduct={openProductPage}
        showToast={showToast}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onAddToCart={handleAddToCart}
        removeFromWishlist={handleRemoveFromWishlist}
        setCurrentPage={navigateTo}
        onSelectProduct={openProductPage}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={ALL_PRODUCTS}
        onSelectProduct={openProductPage}
      />

      <QuickAddModal
        product={quickAddProduct}
        onClose={() => setQuickAddProduct(null)}
        onAddToCart={handleAddToCart}
        onSelectProduct={openProductPage}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
