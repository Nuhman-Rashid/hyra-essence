/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Search, ChevronDown, MessageSquare, MapPin, Tag, Sparkles, ShoppingBag } from 'lucide-react';
import { BRAND_NAME, CATEGORIES, PRODUCTS } from '../data';

interface SearchSuggestion {
  type: 'category' | 'fabric' | 'product';
  value: string;
  label: string;
  categoryFilter?: 'churidars' | 'kurtas' | 'tops' | null;
}

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setSelectedCategoryFilter: (category: 'churidars' | 'kurtas' | 'tops' | null) => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  shopSearchQuery?: string;
  setShopSearchQuery?: (query: string) => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  setSelectedCategoryFilter,
  wishlistCount,
  onOpenWishlist,
  shopSearchQuery,
  setShopSearchQuery,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const queryValue = shopSearchQuery !== undefined ? shopSearchQuery : localSearchQuery;
  const setQueryValue = setShopSearchQuery !== undefined ? setShopSearchQuery : setLocalSearchQuery;

  // Generate suggestions based on queryValue
  const getSuggestions = (query: string): SearchSuggestion[] => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    const suggestionsList: SearchSuggestion[] = [];

    // 1. Categories
    CATEGORIES.forEach((cat) => {
      if (cat.name.toLowerCase().includes(q) || cat.id.toLowerCase().includes(q)) {
        suggestionsList.push({
          type: 'category',
          value: cat.name,
          label: cat.name,
          categoryFilter: cat.id as 'churidars' | 'kurtas' | 'tops',
        });
      }
    });

    // 2. Fabric Types
    const fabricKeywords = ['Linen', 'Cotton', 'Silk', 'Organza', 'Chanderi', 'Tussar', 'Khadi', 'Kasavu'];
    fabricKeywords.forEach((fab) => {
      if (fab.toLowerCase().includes(q) && !suggestionsList.some(s => s.type === 'fabric' && s.value === fab)) {
        suggestionsList.push({
          type: 'fabric',
          value: fab,
          label: `${fab} Fabrics`,
        });
      }
    });

    // 3. Products
    PRODUCTS.forEach((prod) => {
      if (prod.name.toLowerCase().includes(q)) {
        suggestionsList.push({
          type: 'product',
          value: prod.name,
          label: prod.name,
        });
      }
    });

    return suggestionsList.slice(0, 8);
  };

  const headerSuggestions = getSuggestions(queryValue);

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    if (suggestion.type === 'category' && suggestion.categoryFilter) {
      setSelectedCategoryFilter(suggestion.categoryFilter);
      setQueryValue('');
    } else {
      setQueryValue(suggestion.value);
      setSelectedCategoryFilter(null);
    }
    setIsSearchOpen(false);
    setCurrentPage('shop');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (category: 'churidars' | 'kurtas' | 'tops') => {
    setSelectedCategoryFilter(category);
    setCurrentPage('shop');
    setIsMobileMenuOpen(false);
    setIsCategoriesDropdownOpen(false);
  };

  const handleNavClick = (page: string) => {
    if (page === 'shop') {
      setSelectedCategoryFilter(null);
    }
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#1D1818] text-[#FFFEF2] py-2 px-4 text-xs font-medium uppercase tracking-[0.15em] text-center flex justify-between items-center overflow-hidden border-b border-[#222222]">
        <div className="animate-fade-in mx-auto flex items-center justify-center gap-6 text-[10px] md:text-xs">
          <span>Elegance in every thread</span>
          <span className="hidden md:inline text-[#B89B72]">•</span>
          <span className="hidden md:inline">Free Delivery across Kerala</span>
          <span className="text-[#B89B72]">•</span>
          <span>Order directly via WhatsApp</span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FFFEF2]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.02)] border-b border-[#EFE8DD]'
            : 'bg-[#FFFEF2] border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Left side navigation (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-[0.18em]">
              <button
                id="nav-home"
                onClick={() => handleNavClick('home')}
                className={`transition-colors duration-300 hover:text-[#B89B72] cursor-pointer ${
                  currentPage === 'home' ? 'text-[#B89B72]' : 'text-[#1D1818]'
                }`}
              >
                Home
              </button>
              
              <button
                id="nav-shop"
                onClick={() => handleNavClick('shop')}
                className={`transition-colors duration-300 hover:text-[#B89B72] cursor-pointer ${
                  currentPage === 'shop' ? 'text-[#B89B72]' : 'text-[#1D1818]'
                }`}
              >
                Shop
              </button>

              {/* Mega Dropdown for Categories */}
              <div
                className="relative"
                onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
                onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
              >
                <button
                  id="nav-categories"
                  className="flex items-center gap-1 transition-colors duration-300 hover:text-[#B89B72] uppercase tracking-[0.18em] cursor-pointer"
                >
                  Categories <ChevronDown className="w-3.5 h-3.5 mt-[-2px] text-[#B89B72]" />
                </button>
                
                {isCategoriesDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-56 bg-[#FFFEF2] border border-[#EFE8DD] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-none overflow-hidden animate-fade-in">
                    <div className="py-2">
                      <button
                        onClick={() => handleCategoryClick('churidars')}
                        className="w-full text-left px-6 py-3 text-[11px] uppercase tracking-wider text-[#1D1818]/85 hover:bg-[#EFE8DD] hover:text-[#1D1818] transition-all font-semibold"
                      >
                        Churidars
                      </button>
                      <button
                        onClick={() => handleCategoryClick('kurtas')}
                        className="w-full text-left px-6 py-3 text-[11px] uppercase tracking-wider text-[#1D1818]/85 hover:bg-[#EFE8DD] hover:text-[#1D1818] transition-all font-semibold"
                      >
                        Kurtas
                      </button>
                      <button
                        onClick={() => handleCategoryClick('tops')}
                        className="w-full text-left px-6 py-3 text-[11px] uppercase tracking-wider text-[#1D1818]/85 hover:bg-[#EFE8DD] hover:text-[#1D1818] transition-all font-semibold"
                      >
                        Tops & Tunics
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                id="nav-about"
                onClick={() => handleNavClick('about')}
                className={`transition-colors duration-300 hover:text-[#B89B72] cursor-pointer ${
                  currentPage === 'about' ? 'text-[#B89B72]' : 'text-[#1D1818]'
                }`}
              >
                About
              </button>
            </nav>

            {/* Mobile Menu Icon (Left) */}
            <div className="flex lg:hidden items-center">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#1D1818] p-1.5 focus:outline-none cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Centered Premium Logo */}
            <div
              id="header-logo-container"
              onClick={() => handleNavClick('home')}
              className="flex flex-col items-center justify-center cursor-pointer group text-center select-none pt-1 pb-2 px-3 transition-all duration-300"
            >
              {/* Gold Crest Monogram Logo from the provided reference */}
              <svg
                id="header-logo-svg"
                className="w-[42px] h-[34px] sm:w-[48px] sm:h-[38px] md:w-[58px] md:h-[46px] transition-transform duration-300 group-hover:scale-105"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Floral gold branch styling */}
                <path d="M40 70C35 60 30 55 25 45M28 50C24 45 23 40 25 35M35 60C30 53 30 48 31 43" stroke="#B89B72" strokeWidth="1" strokeLinecap="round" />
                <circle cx="25" cy="35" r="2" fill="#B89B72" />
                <circle cx="31" cy="43" r="1.5" fill="#B89B72" />
                <path d="M40 75C45 78 50 80 57 80" stroke="#B89B72" strokeWidth="1.2" strokeLinecap="round" />
                
                {/* High-end serif interlinked monogram H and E */}
                {/* H Left stem */}
                <rect x="42" y="25" width="4" height="42" fill="#1D1818" rx="0.5" />
                <rect x="39" y="25" width="10" height="2" fill="#1D1818" />
                <rect x="39" y="65" width="10" height="2" fill="#1D1818" />
                
                {/* H bar */}
                <rect x="46" y="44" width="18" height="3" fill="#B89B72" />
                
                {/* E Left stem (interlinked, overlapping beautifully) */}
                <rect x="60" y="25" width="4" height="42" fill="#1D1818" rx="0.5" />
                <rect x="58" y="25" width="14" height="2" fill="#1D1818" />
                <rect x="58" y="65" width="14" height="2" fill="#1D1818" />
                
                {/* E top arm */}
                <rect x="64" y="25" width="13" height="3" fill="#1D1818" />
                
                {/* E mid arm */}
                <rect x="64" y="44" width="9" height="3" fill="#B89B72" />
                
                {/* E bottom arm */}
                <rect x="64" y="64" width="15" height="3" fill="#1D1818" />
                <path d="M79 67L77 60" stroke="#1D1818" strokeWidth="2" strokeLinecap="round" />
              </svg>
              
              <span
                id="header-brand-name"
                className="font-serif text-sm sm:text-base md:text-xl font-bold tracking-[0.25em] text-[#1D1818] uppercase mt-1.5 md:mt-2.5 transition-all duration-300 group-hover:text-[#B89B72]"
              >
                {BRAND_NAME}
              </span>
              
              <span
                id="header-brand-slogan"
                className="text-[6px] sm:text-[7.5px] md:text-[8px] font-medium tracking-[0.32em] text-[#B89B72] uppercase mt-0.5 md:mt-1"
              >
                Elegance in Every Thread
              </span>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4 md:space-x-6 text-[#1D1818]">
              
              {/* Search bar button */}
              <button
                id="search-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 hover:text-[#B89B72] transition-colors duration-300 relative cursor-pointer"
                aria-label="Search items"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon with count */}
              <button
                id="wishlist-btn"
                onClick={onOpenWishlist}
                className="p-1.5 hover:text-[#B89B72] transition-colors duration-300 relative cursor-pointer"
                aria-label="View Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#B89B72] text-[#FFFEF2] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#FFFEF2]">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Quick WhatsApp contact icon (Desktop) */}
              <a
                href="https://wa.me/918590457509?text=Hello%20HYRA%20ESSENCE!%20I%20am%20browsing%20your%20gorgeous%20website%20and%20would%20love%20to%20learn%20more."
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FFFEF2] bg-[#1D1818] hover:bg-[#B89B72] px-4 py-2.5 rounded-xl transition-all duration-300"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#B89B72] group-hover:text-white" />
                Connect
              </a>
            </div>
          </div>
        </div>

        {/* Floating Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-[#FFFEF2] border-b border-[#EFE8DD] py-4 md:py-5 px-4 md:px-6 shadow-lg animate-fade-in z-50">
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
              <div className="relative flex-1">
                <input
                  id="search-input"
                  type="text"
                  placeholder="What are you looking for? (e.g. Kasavu, Linen...)"
                  className="w-full bg-[#EFE8DD]/40 border border-[#B89B72]/50 rounded-2xl text-xs md:text-sm py-2.5 md:py-3 px-4 md:px-4.5 pr-12 focus:outline-none focus:border-[#B89B72] font-semibold placeholder-[#666666]/60 text-[#1D1818]"
                  value={queryValue}
                  onChange={(e) => setQueryValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setIsSearchOpen(false);
                      setCurrentPage('shop');
                    }
                  }}
                />
                {queryValue && (
                  <button
                    onClick={() => setQueryValue('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] md:text-xs uppercase font-bold text-[#666666] hover:text-[#1D1818] px-1 py-0.5"
                  >
                    Clear
                  </button>
                )}

                {/* Suggestions Dropdown for Header */}
                {isFocused && queryValue.trim().length > 0 && headerSuggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-[#FFFEF2] border border-[#EFE8DD] rounded-2xl shadow-xl z-50 overflow-hidden max-h-[50vh] sm:max-h-80 overflow-y-auto animate-fade-in">
                    <div className="p-3 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-[#666666]/70 border-b border-[#EFE8DD] bg-[#EFE8DD]/20">
                      Suggested Matches
                    </div>
                    <div className="divide-y divide-[#EFE8DD]/50">
                      {headerSuggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onMouseDown={() => handleSuggestionClick(suggestion)}
                          className="w-full text-left px-4 md:px-5 py-3 md:py-3.5 hover:bg-[#EFE8DD]/30 flex items-center justify-between transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5 md:gap-3">
                            {suggestion.type === 'category' && <Tag className="w-3.5 h-3.5 text-[#B89B72]" />}
                            {suggestion.type === 'fabric' && <Sparkles className="w-3.5 h-3.5 text-[#B89B72]" />}
                            {suggestion.type === 'product' && <ShoppingBag className="w-3.5 h-3.5 text-[#B89B72]" />}
                            <span className="text-xs font-semibold text-[#1D1818] group-hover:text-[#B89B72] transition-colors truncate max-w-[150px] sm:max-w-none">
                              {suggestion.label}
                            </span>
                          </div>
                          <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-[#666666]/50 group-hover:text-[#B89B72]/70 shrink-0">
                            {suggestion.type}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Actions row on mobile, side-by-side on desktop */}
              <div className="flex items-center gap-2.5 justify-end">
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setCurrentPage('shop');
                  }}
                  className="flex-1 sm:flex-none text-center bg-[#1D1818] hover:bg-[#B89B72] text-[#FFFEF2] text-xs font-bold uppercase tracking-widest px-5 py-2.5 md:py-3 rounded-2xl transition-all min-h-[40px] flex items-center justify-center cursor-pointer"
                >
                  Search
                </button>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2.5 text-[#666666] hover:text-[#1D1818] hover:bg-[#EFE8DD]/30 rounded-full transition-colors cursor-pointer"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="w-[300px] bg-[#FFFEF2] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex justify-between items-center pb-6 border-b border-[#EFE8DD]">
                <span className="font-serif text-sm font-bold tracking-widest text-[#1D1818] uppercase">
                  Menu
                </span>
                <button
                  id="close-mobile-menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-[#1D1818] hover:text-[#B89B72] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="py-6 flex flex-col space-y-5 text-sm font-semibold uppercase tracking-widest text-[#1D1818]">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`text-left py-2 hover:text-[#B89B72] ${
                    currentPage === 'home' ? 'text-[#B89B72]' : ''
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('shop')}
                  className={`text-left py-2 hover:text-[#B89B72] ${
                    currentPage === 'shop' ? 'text-[#B89B72]' : ''
                  }`}
                >
                  All Products
                </button>

                {/* Categories sublist */}
                <div className="py-1">
                  <div className="text-[10px] tracking-[0.2em] font-bold text-[#B89B72] uppercase mb-3">
                    Categories
                  </div>
                  <div className="pl-4 flex flex-col space-y-3 border-l border-[#EFE8DD]">
                    <button
                      onClick={() => handleCategoryClick('churidars')}
                      className="text-left text-xs uppercase tracking-wider text-[#1D1818]/85 hover:text-[#B89B72]"
                    >
                      Churidars
                    </button>
                    <button
                      onClick={() => handleCategoryClick('kurtas')}
                      className="text-left text-xs uppercase tracking-wider text-[#1D1818]/85 hover:text-[#B89B72]"
                    >
                      Kurtas
                    </button>
                    <button
                      onClick={() => handleCategoryClick('tops')}
                      className="text-left text-xs uppercase tracking-wider text-[#1D1818]/85 hover:text-[#B89B72]"
                    >
                      Tops & Tunics
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleNavClick('about')}
                  className={`text-left py-2 hover:text-[#B89B72] ${
                    currentPage === 'about' ? 'text-[#B89B72]' : ''
                  }`}
                >
                  Our Brand Story
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`text-left py-2 hover:text-[#B89B72] ${
                    currentPage === 'contact' ? 'text-[#B89B72]' : ''
                  }`}
                >
                  Contact Us
                </button>
                <button
                  onClick={() => handleNavClick('faq')}
                  className={`text-left py-2 hover:text-[#B89B72] ${
                    currentPage === 'faq' ? 'text-[#B89B72]' : ''
                  }`}
                >
                  FAQs
                </button>
              </div>
            </div>

            {/* Footer details in Drawer */}
            <div className="border-t border-[#EFE8DD] pt-6 flex flex-col space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#666666]">
                <MapPin className="w-4 h-4 text-[#B89B72]" />
                <span>Kochi, Kerala, India</span>
              </div>
              <a
                href="https://wa.me/918590457509"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#1D1818] text-[#FFFEF2] text-xs font-bold uppercase tracking-widest text-center py-3 hover:bg-[#B89B72] rounded-xl transition-all"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
