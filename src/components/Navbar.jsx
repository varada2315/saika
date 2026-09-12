import React, { useState, useEffect } from 'react';

export default function Navbar({
  currentPage,
  setCurrentPage,
  cartCount,
  wishlistCount,
  openCart,
  openSearch,
  openWishlist,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-nav"
      className={`w-full bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${
        scrolled ? 'py-3.5 shadow-ambient' : 'py-5'
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-display-lg text-headline-sm tracking-widest text-primary hover:opacity-80 transition-opacity uppercase text-left font-normal"
        >
          SAIKA
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`font-label-caps text-label-caps transition-all duration-300 uppercase tracking-widest relative py-1 ${
                    isActive
                      ? 'text-primary border-b border-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Actions (Search, Wishlist, Cart, Mobile Menu) */}
        <div className="flex items-center space-x-5 text-primary">
          <button
            onClick={openSearch}
            aria-label="search"
            className="hover:opacity-70 transition-opacity duration-300 active:scale-95 flex items-center justify-center p-1"
          >
            <span className="material-symbols-outlined text-[24px]">search</span>
          </button>

          <button
            onClick={openWishlist}
            aria-label="wishlist"
            className="relative hover:opacity-70 transition-opacity duration-300 active:scale-95 flex items-center justify-center p-1"
          >
            <span className="material-symbols-outlined text-[24px]">favorite_border</span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-tertiary text-on-tertiary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>
          
          <button
            onClick={openCart}
            aria-label="shopping_bag"
            className="relative hover:opacity-70 transition-opacity duration-300 active:scale-95 flex items-center justify-center p-1"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="toggle menu"
            className="md:hidden hover:opacity-70 transition-opacity duration-300 active:scale-95 flex items-center justify-center p-1"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant/30 px-margin-mobile py-6 animate-fadeIn">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`font-label-caps text-label-caps text-left w-full py-2 tracking-widest uppercase transition-colors ${
                      isActive ? 'text-primary font-bold' : 'text-on-surface-variant'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
