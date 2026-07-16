/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  Heart,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Filter,
  CheckCircle2,
  ChevronDown,
  Info,
  Search,
  Tag,
  ShoppingBag,
  Home
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import CategoryCard from './components/CategoryCard';
import ProductDetail from './components/ProductDetail';
import WishlistDrawer from './components/WishlistDrawer';

import { PRODUCTS, CATEGORIES, REVIEWS, FAQS, INSTAGRAM_POSTS, BRAND_NAME } from './data';
import { Product, Review } from './types';

// Get initial states from URL query parameters (Google SEO and deep linking friendly)
const getInitialRouting = () => {
  if (typeof window === 'undefined') {
    return { initialPage: 'home', initialProduct: null, initialCategory: null };
  }
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page') || 'home';
  const product = params.get('product') || params.get('id');
  const category = params.get('category');

  let initialPage = 'home';
  let initialProduct: string | null = null;
  let initialCategory: 'churidars' | 'kurtas' | 'tops' | null = null;

  if (product && PRODUCTS.some(p => p.id === product)) {
    initialProduct = product;
    initialPage = 'product-detail';
  } else if (category && ['churidars', 'kurtas', 'tops'].includes(category)) {
    initialCategory = category as 'churidars' | 'kurtas' | 'tops';
    initialPage = 'shop';
  } else if (['shop', 'about', 'contact', 'faq', 'privacy', 'shipping-returns'].includes(page)) {
    initialPage = page;
  }

  return { initialPage, initialProduct, initialCategory };
};

export default function App() {
  const initialRoute = getInitialRouting();

  // Navigation Routing States
  const [currentPage, setCurrentPage] = useState<string>(initialRoute.initialPage);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(initialRoute.initialProduct);

  // Shop Page States
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<'churidars' | 'kurtas' | 'tops' | null>(initialRoute.initialCategory);
  const [activeFilterTab, setActiveFilterTab] = useState<'all' | 'new' | 'best-sellers'>('all');
  const [sortOption, setSortOption] = useState<string>('featured');
  const [shopSearchQuery, setShopSearchQuery] = useState<string>('');
  const [isShopSearchFocused, setIsShopSearchFocused] = useState<boolean>(false);


  // Shop Search Suggestions Generator
  const getShopSuggestions = (query: string) => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    const suggestionsList: Array<{
      type: 'category' | 'fabric' | 'product';
      value: string;
      label: string;
      categoryFilter?: 'churidars' | 'kurtas' | 'tops' | null;
    }> = [];

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

  const shopSuggestions = getShopSuggestions(shopSearchQuery);

  // Wishlist & UI Overlay States
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState<Product | null>(null);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  // Contact Form States
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('Product Inquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Dynamic Reviews State with localStorage persistence
  const [reviewsList, setReviewsList] = useState<Review[]>(() => {
    const saved = localStorage.getItem('hyra_essence_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse reviews', e);
      }
    }
    return REVIEWS;
  });

  // Review Form States
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState<number>(5);
  const [reviewComment, setReviewComment] = useState('');
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  // Load and sync Wishlist state
  useEffect(() => {
    const savedWishlist = localStorage.getItem('hyra_essence_wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Failed to load wishlist', e);
      }
    }

    // Set first load timer for luxury splash screen
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  // Sync state changes with URL query parameters for Google crawling & sharing
  useEffect(() => {
    const params = new URLSearchParams();
    if (currentPage === 'product-detail' && selectedProductId) {
      params.set('page', 'product-detail');
      params.set('id', selectedProductId);
    } else if (currentPage === 'shop') {
      params.set('page', 'shop');
      if (selectedCategoryFilter) {
        params.set('category', selectedCategoryFilter);
      }
    } else if (currentPage !== 'home') {
      params.set('page', currentPage);
    }

    const queryStr = params.toString();
    const newUrl = queryStr ? `?${queryStr}` : window.location.pathname;

    if (window.location.search !== (queryStr ? `?${queryStr}` : '')) {
      window.history.pushState(
        { page: currentPage, id: selectedProductId, category: selectedCategoryFilter },
        '',
        newUrl
      );
    }
  }, [currentPage, selectedProductId, selectedCategoryFilter]);

  // Support native browser back and forward button operations (SEO deep-linking friendly)
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const state = e.state;
      if (state) {
        if (state.page) setCurrentPage(state.page);
        if (state.id !== undefined) setSelectedProductId(state.id);
        if (state.category !== undefined) setSelectedCategoryFilter(state.category);
      } else {
        setCurrentPage('home');
        setSelectedProductId(null);
        setSelectedCategoryFilter(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Dynamic SEO Meta Tags, Canonical Link, and Schema.org JSON-LD Markup
  useEffect(() => {
    let title = 'HYRA ESSENCE | Premium Women\'s Ethnic Wear & Contemporary Fashion';
    let description = 'Discover HYRA ESSENCE, a luxury online boutique for premium women\'s ethnic wear. Explore our exquisite handloom Kerala Kasavu Churidars, fine Tussar silk Kurtas, and premium Belgian linen Tops. Hand-crafted elegance designed for modern grace.';
    let keywords = 'Hyra Essence, women ethnic wear, Kasavu Churidars, silk kurtas, linen tops, Kerala handloom fashion, boutique clothing Kochi, Indian designer wear, designer salwar sets';
    let image = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&h=630&q=80';

    if (currentPage === 'shop') {
      if (selectedCategoryFilter) {
        const catObj = CATEGORIES.find(c => c.id === selectedCategoryFilter);
        const catName = catObj ? catObj.name : selectedCategoryFilter;
        title = `Shop Premium ${catName} | HYRA ESSENCE`;
        description = catObj ? catObj.description : `Explore the latest collections of premium women's ${selectedCategoryFilter} at HYRA ESSENCE.`;
        keywords = `Shop ${selectedCategoryFilter}, luxury ${selectedCategoryFilter}, designer ${selectedCategoryFilter} online, Kerala fashion`;
      } else {
        title = 'Shop Luxury Collections | HYRA ESSENCE';
        description = 'Browse the entire catalog of premium women\'s clothing at HYRA ESSENCE. Find elegant handloom Churidars, classic Kurtas, and chic linen Tops with delivery across India.';
        keywords = 'Shop Indian ethnic wear, online clothing boutique, luxury fashion, ladies kurtas, premium bottoms';
      }
    } else if (currentPage === 'product-detail' && selectedProductId) {
      const product = PRODUCTS.find(p => p.id === selectedProductId);
      if (product) {
        title = `${product.name} | Premium ${product.category.toUpperCase()} | HYRA ESSENCE`;
        description = `${product.name} crafted from ${product.fabric}. ${product.description.slice(0, 150)}...`;
        keywords = `${product.name}, ${product.fabric}, buy ${product.name} online, premium ${product.category}, Kochi boutique`;
        if (product.images && product.images[0]) {
          image = product.images[0];
        }
      }
    } else if (currentPage === 'about') {
      title = 'Our Heritage & Story | HYRA ESSENCE';
      description = 'At HYRA ESSENCE, we celebrate the slow craft of weaving. Combining traditional Kerala handlooms with contemporary minimalist silhouettes for modern, graceful women.';
      keywords = 'about Hyra Essence, slow fashion India, organic cotton ethnic wear, traditional Kerala handlooms, sustainable boutique';
    } else if (currentPage === 'contact') {
      title = 'Contact Our Boutique | HYRA ESSENCE';
      description = 'Have inquiries about fabrics, sizing, or custom orders? Reach out to the HYRA ESSENCE team in Kochi, Kerala via WhatsApp or email. We are here to assist you.';
      keywords = 'contact Hyra Essence, customer care, Kochi boutique phone, WhatsApp order clothing, support email';
    } else if (currentPage === 'faq') {
      title = 'Frequently Asked Questions & Care Guide | HYRA ESSENCE';
      description = 'Find complete details on sizing guides, fabric care recommendations (silks & linens), shipping timelines, and our easy exchange policies.';
      keywords = 'Hyra Essence FAQs, wash care silks, delivery times Kerala, return policy online clothing';
    } else if (currentPage === 'privacy') {
      title = 'Privacy Policy | HYRA ESSENCE';
      description = 'Read the privacy policy of HYRA ESSENCE online store. We ensure secure data handling and transparency for all shoppers.';
      keywords = 'privacy policy, secure shopping, data protection, customer security';
    } else if (currentPage === 'shipping-returns') {
      title = 'Shipping, Delivery & Returns | HYRA ESSENCE';
      description = 'Learn about our delivery timelines, sustainable eco-friendly packaging, and seamless return and exchange guidelines.';
      keywords = 'shipping guide, refund policy, product return, fast shipping India';
    }

    // Apply updates to the Document Head
    document.title = title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(isProperty ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', window.location.href, true);

    // Twitter
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    updateMeta('twitter:url', window.location.href);

    // Canonical link
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    // Consolidate duplicate URL parameters for search engine indexing
    canonical.setAttribute('href', window.location.href.split('?')[0]);

    // Dynamic Schema.org structured data injection
    let schemaScript = document.getElementById('dynamic-schema') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    if (currentPage === 'product-detail' && selectedProductId) {
      const product = PRODUCTS.find(p => p.id === selectedProductId);
      if (product) {
        const productSchema = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': product.name,
          'image': product.images,
          'description': product.description,
          'category': product.category,
          'material': product.fabric,
          'offers': {
            '@type': 'Offer',
            'url': window.location.href,
            'priceCurrency': 'INR',
            'price': product.price,
            'priceValidUntil': '2027-12-31',
            'itemCondition': 'https://schema.org/NewCondition',
            'availability': 'https://schema.org/InStock',
            'seller': {
              '@type': 'Organization',
              'name': 'HYRA ESSENCE'
            }
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': product.rating,
            'reviewCount': product.reviewsCount
          }
        };
        schemaScript.textContent = JSON.stringify(productSchema);
      } else {
        schemaScript.textContent = '';
      }
    } else {
      const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': title,
        'description': description,
        'url': window.location.href,
        'publisher': {
          '@type': 'Organization',
          'name': 'HYRA ESSENCE'
        }
      };
      schemaScript.textContent = JSON.stringify(webPageSchema);
    }
  }, [currentPage, selectedProductId, selectedCategoryFilter]);

  const handleToggleWishlist = (id: string) => {
    let updatedWishlist = [...wishlist];
    if (wishlist.includes(id)) {
      updatedWishlist = updatedWishlist.filter((item) => item !== id);
    } else {
      updatedWishlist.push(id);
    }
    setWishlist(updatedWishlist);
    localStorage.setItem('hyra_essence_wishlist', JSON.stringify(updatedWishlist));
  };

  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('hyra_essence_wishlist', JSON.stringify(updatedWishlist));
  };

  const handleQuickView = (product: Product) => {
    setActiveQuickViewProduct(product);
  };

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWishlistExplore = (id: string) => {
    if (id === 'shop-trigger') {
      setSelectedCategoryFilter(null);
      setCurrentPage('shop');
    } else {
      handleProductClick(id);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName.trim() && contactMessage.trim()) {
      setIsContactSubmitted(true);
      setTimeout(() => {
        setIsContactSubmitted(false);
        setContactName('');
        setContactEmail('');
        setContactMessage('');
      }, 5000);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) return;

    const newReview: Review = {
      id: `review-${Date.now()}`,
      userName: reviewName.trim(),
      rating: reviewRating,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      comment: reviewComment.trim(),
      verified: true
    };

    const updatedReviews = [newReview, ...reviewsList];
    setReviewsList(updatedReviews);
    localStorage.setItem('hyra_essence_reviews', JSON.stringify(updatedReviews));

    // Reset Form and show success state
    setIsReviewSubmitted(true);
    setReviewName('');
    setReviewRating(5);
    setReviewComment('');

    setTimeout(() => {
      setIsReviewSubmitted(false);
    }, 4000);
  };

  // Filter and Sort Products Logic
  const getFilteredProducts = () => {
    let list = [...PRODUCTS];

    // 1. Category Filter
    if (selectedCategoryFilter) {
      list = list.filter((p) => p.category === selectedCategoryFilter);
    }

    // 2. Collection Type Filter
    if (activeFilterTab === 'new') {
      list = list.filter((p) => p.isNewArrival);
    } else if (activeFilterTab === 'best-sellers') {
      list = list.filter((p) => p.isBestSeller);
    }

    // 3. Search Query Filter
    if (shopSearchQuery.trim()) {
      const q = shopSearchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // 4. Sort Options
    if (sortOption === 'low-to-high') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-to-low') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  };

  const filteredProducts = getFilteredProducts();

  // Floating WhatsApp message template
  const floatWhatsappUrl = `https://wa.me/919526228491?text=${encodeURIComponent(
    `Hello HYRA ESSENCE! I am visiting your brand website and would love to consult with a fashion advisor about your latest collection.`
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFEF2] selection:bg-[#B89B72]/30 selection:text-[#1D1818] relative">
      
      {/* 1. LUXURY INITIAL LOADING ANIMATION */}
      <AnimatePresence>
        {isFirstLoad && (
          <motion.div
            id="premium-loader"
            className="fixed inset-0 z-50 bg-[#FFFEF2] flex flex-col items-center justify-center text-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-6 px-6"
            >
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 70C35 60 30 55 25 45M28 50C24 45 23 40 25 35M35 60C30 53 30 48 31 43" stroke="#B89B72" strokeWidth="1" strokeLinecap="round" />
                <circle cx="25" cy="35" r="2" fill="#B89B72" />
                <circle cx="31" cy="43" r="1.5" fill="#B89B72" />
                <path d="M40 75C45 78 50 80 57 80" stroke="#B89B72" strokeWidth="1.2" strokeLinecap="round" />
                <rect x="42" y="25" width="4" height="42" fill="#1D1818" rx="0.5" />
                <rect x="39" y="25" width="10" height="2" fill="#1D1818" />
                <rect x="39" y="65" width="10" height="2" fill="#1D1818" />
                <rect x="46" y="44" width="18" height="3" fill="#B89B72" />
                <rect x="60" y="25" width="4" height="42" fill="#1D1818" rx="0.5" />
                <rect x="58" y="25" width="14" height="2" fill="#1D1818" />
                <rect x="58" y="65" width="14" height="2" fill="#1D1818" />
                <rect x="64" y="25" width="13" height="3" fill="#1D1818" />
                <rect x="64" y="44" width="9" height="3" fill="#B89B72" />
                <rect x="64" y="64" width="15" height="3" fill="#1D1818" />
                <path d="M79 67L77 60" stroke="#1D1818" strokeWidth="2" strokeLinecap="round" />
              </svg>
              
              <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-[0.3em] text-[#1D1818] uppercase">
                {BRAND_NAME}
              </h1>
              <div className="w-24 h-[1.5px] bg-[#B89B72] mx-auto scale-x-0 animate-draw-line" />
              <p className="text-[10px] md:text-[13px] font-semibold text-[#666666] tracking-[0.35em] uppercase">
                Elegance In Every Thread
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. STICKY GLASSMORPHIC HEADER */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedCategoryFilter={setSelectedCategoryFilter}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        shopSearchQuery={shopSearchQuery}
        setShopSearchQuery={setShopSearchQuery}
      />

      {/* 3. DYNAMIC PAGES SWITCHBOARD */}
      <main className="flex-grow">
        
        {/* ==================== HOME PAGE ==================== */}
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            
            {/* Split Editorial Hero Section */}
            <section id="hero" className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[75vh] md:min-h-[85vh] bg-[#FFFEF2] overflow-hidden items-center gap-8 px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
              
              {/* Editorial Hero Left Text Content */}
              <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 md:space-y-8 pr-0 lg:pr-8 animate-fade-in">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B89B72] border-b border-[#B89B72]/20 pb-2 w-full lg:w-auto">
                  [ 01 ] Editorial Collection
                </div>
                
                <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.90] text-[#1D1818] uppercase">
                  STYLE THAT <br />
                  <span className="serif-italic text-[#B89B72] font-light normal-case italic">SPEAKS YOU</span>
                </h1>
                
                <p className="text-xs sm:text-sm text-[#1D1818]/80 leading-relaxed max-w-sm font-medium">
                  Timeless silhouettes, crafted with precision for the modern Kerala landscape. Curated luxury made of premium breathable fabrics.
                </p>
                
                {/* Hero Button Actions */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => {
                      setSelectedCategoryFilter(null);
                      setCurrentPage('shop');
                    }}
                    className="px-8 py-4 bg-[#1D1818] text-[#FFFEF2] hover:bg-[#B89B72] hover:text-[#FFFEF2] text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer rounded-none border border-[#1D1818] hover:border-[#B89B72]"
                  >
                    Explore Collection
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCategoryFilter(null);
                      setActiveFilterTab('new');
                      setCurrentPage('shop');
                    }}
                    className="px-8 py-4 border border-[#1D1818] text-[#1D1818] hover:bg-[#1D1818] hover:text-[#FFFEF2] text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer rounded-none"
                  >
                    New Arrivals
                  </button>
                </div>
              </div>

              {/* Editorial Hero Right Image Wrap */}
              <div className="lg:col-span-7 h-[50vh] lg:h-[75vh] w-full bg-[#EFE8DD]/40 relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
                  alt="HYRA Essence Editorial Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 ease-out-expo"
                />
              </div>
            </section>

            {/* Shop By Category Section */}
            <section id="categories-shelf" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
              <div className="mb-14 text-center space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B89B72]">The Collections</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1D1818] tracking-wide">
                  Shop by Category
                </h2>
                <div className="w-12 h-[1px] bg-[#B89B72] mx-auto mt-3" />
              </div>

              {/* Category Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CATEGORIES.map((cat) => (
                  <CategoryCard
                    key={cat.id}
                    id={cat.id}
                    name={cat.name}
                    description={cat.description}
                    image={cat.image}
                    count={cat.count}
                    onClick={(id) => {
                      setSelectedCategoryFilter(id as any);
                      setCurrentPage('shop');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            </section>

            {/* Featured Luxury Spotlight Section */}
            <section id="spotlight" className="bg-[#EFE8DD]/20 py-20 md:py-28 border-y border-[#EFE8DD]/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 text-left">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B89B72]">Curated Spotlight</span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1D1818] tracking-wide">
                      Featured Collection
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCategoryFilter(null);
                      setCurrentPage('shop');
                    }}
                    className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1D1818] hover:text-[#B89B72] transition-colors mt-4 md:mt-0 cursor-pointer"
                  >
                    View All Designs
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>

                {/* Grid layout of Featured products */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3.5 gap-y-6 sm:gap-8 md:gap-12">
                  {PRODUCTS.filter((p) => p.isFeatured).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={handleQuickView}
                      onProductClick={handleProductClick}
                      isWishlisted={wishlist.includes(product.id)}
                      onToggleWishlist={handleToggleWishlist}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose HYRA ESSENCE Bento Shelf */}
            <section id="brand-pillars" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
              <div className="mb-16 text-center space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B89B72]">Our Philosophy</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1D1818] tracking-wide">
                  Why HYRA ESSENCE
                </h2>
                <div className="w-12 h-[1px] bg-[#B89B72] mx-auto mt-3" />
              </div>

              {/* Bento styled pillar cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Pillar 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                  className="bg-[#FFFEF2] border border-[#1D1818]/10 p-8 text-left flex flex-col justify-between rounded-none hover:border-[#B89B72] transition-colors"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-[#1D1818]/5 inline-block text-[#B89B72] rounded-none">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#1D1818]">
                      Hand-Selected Perfection
                    </h3>
                    <p className="text-xs text-[#1D1818]/70 leading-relaxed">
                      Every print, thread weave, and pattern is carefully selected. We focus on slow fashion lines that stand out in quality and timeless style.
                    </p>
                  </div>
                  <span className="text-xs text-[#B89B72] font-bold mt-6 tracking-widest block font-mono">01 / DESIGN</span>
                </motion.div>
                
                {/* Pillar 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className="bg-[#FFFEF2] border border-[#1D1818]/10 p-8 text-left flex flex-col justify-between rounded-none hover:border-[#B89B72] transition-colors"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-[#1D1818]/5 inline-block text-[#B89B72] rounded-none">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#1D1818]">
                      Premium Climate Fabrics
                    </h3>
                    <p className="text-xs text-[#1D1818]/70 leading-relaxed">
                      Crafted primarily from organic linen, pure Tussar/Chanderi silks, and soft Indian cotton. Our fabrics are chosen specifically for maximum comfort in Kerala weather.
                    </p>
                  </div>
                  <span className="text-xs text-[#B89B72] font-bold mt-6 tracking-widest block font-mono">02 / COMFORT</span>
                </motion.div>
                
                {/* Pillar 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="bg-[#FFFEF2] border border-[#1D1818]/10 p-8 text-left flex flex-col justify-between rounded-none hover:border-[#B89B72] transition-colors"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-[#1D1818]/5 inline-block text-[#B89B72] rounded-none">
                      <Truck className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#1D1818]">
                      Eco-Packaging & Shipping
                    </h3>
                    <p className="text-xs text-[#1D1818]/70 leading-relaxed">
                      We offer free shipping across Kerala in beautiful, minimalist, biodegradable cardboard packaging that reduces environmental footprint while keeping unboxing luxurious.
                    </p>
                  </div>
                  <span className="text-xs text-[#B89B72] font-bold mt-6 tracking-widest block font-mono">03 / SUSTAINABLE</span>
                </motion.div>
                
                {/* Pillar 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="bg-[#FFFEF2] border border-[#1D1818]/10 p-8 text-left flex flex-col justify-between rounded-none hover:border-[#B89B72] transition-colors"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-[#1D1818]/5 inline-block text-[#B89B72] rounded-none">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#1D1818]">
                      Seamless WhatsApp Orders
                    </h3>
                    <p className="text-xs text-[#1D1818]/70 leading-relaxed">
                      No cold checkout screens or complex registration forms. Talk to a friendly stylist who can verify your exact size and coordinate secure UPI/GPay bookings directly.
                    </p>
                  </div>
                  <span className="text-xs text-[#B89B72] font-bold mt-6 tracking-widest block font-mono">04 / CUSTOMER</span>
                </motion.div>
              </div>
            </section>

            {/* Testimonials Shelf */}
            <section id="testimonials" className="bg-[#FFFEF2] py-20 md:py-28 border-t border-[#1D1818]/10">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B89B72] block mb-2">
                  Client Love
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1D1818] uppercase tracking-wider mb-12">
                  What Our Visitors Say
                </h2>

                {reviewsList.length > 0 ? (
                  <div className="relative mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {reviewsList.map((rev, index) => (
                        <motion.div
                          key={rev.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
                          className="bg-white p-8 border border-[#1D1818]/10 rounded-none text-left space-y-4 shadow-xs"
                        >
                          <div className="flex text-[#B89B72] text-sm">
                            {'★'.repeat(rev.rating)}
                          </div>
                          <p className="text-xs text-[#1D1818]/80 italic leading-relaxed">
                            "{rev.comment}"
                          </p>
                          <div className="flex justify-between items-center pt-3 border-t border-[#1D1818]/10">
                            <div>
                              <p className="text-xs font-bold text-[#1D1818]">{rev.userName}</p>
                              <p className="text-[9px] text-[#1D1818]/50">{rev.date}</p>
                            </div>
                            {rev.verified && (
                              <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-none uppercase tracking-wider">
                                Verified Order
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-[#1D1818]/60 italic mb-16">
                    No reviews yet. Be the first to share your experience with us!
                  </p>
                )}

                {/* Review Form Submission */}
                <div className="max-w-xl mx-auto bg-white p-8 border border-[#1D1818]/10 rounded-none text-left shadow-xs mt-12">
                  <h3 className="font-serif text-xl font-bold text-[#1D1818] mb-1.5 uppercase tracking-wide">
                    Share Your Experience
                  </h3>
                  <p className="text-[11px] text-[#1D1818]/60 mb-6">
                    Your feedback is essential to our boutique craftsmanship. Let us know how much you loved your order.
                  </p>

                  {isReviewSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-6 flex flex-col items-center text-center space-y-3 rounded-none">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                      <h4 className="font-serif text-base font-bold uppercase tracking-wider">Review Submitted!</h4>
                      <p className="text-[11px] max-w-sm">
                        Thank you for sharing your experience. Your review has been added to our catalog.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleReviewSubmit} className="space-y-5">
                      <div className="flex flex-col space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-[#1D1818]">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anjana Pillai"
                          className="border border-[#1D1818]/20 focus:border-[#B89B72] focus:outline-none rounded-none px-4 py-3 text-xs font-semibold text-[#1D1818] bg-[#FFFEF2]/30 focus:bg-white transition-all mt-1"
                          value={reviewName}
                          onChange={(e) => setReviewName(e.target.value)}
                        />
                      </div>

                      <div className="flex flex-col space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-[#1D1818]">Your Rating</label>
                        <div className="flex gap-1.5 pt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setReviewRating(star)}
                              className="p-1 cursor-pointer hover:scale-110 transition-transform"
                              aria-label={`Rate ${star} stars`}
                            >
                              <span className={`text-2xl leading-none ${star <= reviewRating ? 'text-[#B89B72]' : 'text-neutral-300'}`}>
                                ★
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-[#1D1818]">Review Message</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="What did you think of the fabric quality, stitching, and style?"
                          className="border border-[#1D1818]/20 focus:border-[#B89B72] focus:outline-none rounded-none px-4 py-3 text-xs font-medium placeholder-[#1D1818]/30 text-[#1D1818] bg-[#FFFEF2]/30 focus:bg-white transition-all mt-1 resize-none"
                          value={reviewComment}
                          onChange={(e) => setReviewComment(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#1D1818] text-[#FFFEF2] text-xs font-mono font-bold uppercase tracking-[0.2em] hover:bg-[#B89B72] transition-all duration-300 cursor-pointer rounded-none border border-[#1D1818] hover:border-[#B89B72]"
                      >
                        Submit Review
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>

            {/* Instagram Gallery Section */}
            <section id="instagram-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
              <div className="mb-14 text-center space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B89B72]">Follow us on Instagram</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1D1818] tracking-wide">
                  <a
                    href="https://www.instagram.com/hyra.essence?igsh=MTMxcHFwNG1ib29qdQ=="
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#B89B72] transition-colors"
                  >
                    @HYRA_ESSENCE
                  </a>
                </h2>
                <div className="w-12 h-[1px] bg-[#B89B72] mx-auto mt-3" />
              </div>

              {/* Instagram Feed Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {INSTAGRAM_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="group relative aspect-square bg-[#EFE8DD]/30 overflow-hidden rounded-2xl cursor-pointer"
                  >
                    <img
                      src={post.imageUrl}
                      alt="Instagram Style Showcase"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-[#FAF8F5] text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Heart className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ==================== SHOP PAGE ==================== */}
        {currentPage === 'shop' && (
          <section id="shop-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 animate-fade-in text-left">
            
            {/* Shop Page Heading */}
            <div className="border-b border-[#EFE8DD] pb-8 mb-10 flex flex-col md:flex-row justify-between items-stretch md:items-end gap-5">
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A96B]">The Entire Catalog</span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#111111] tracking-wide mt-1">
                  {selectedCategoryFilter ? selectedCategoryFilter : 'Shop All Collections'}
                </h1>
                <p className="text-xs text-[#666666] mt-2">
                  Showing {filteredProducts.length} exquisite, hand-selected boutique garments.
                </p>
              </div>

              {/* Simple Text Search within Shop with Predictive Suggestions */}
              <div className="w-full md:w-72 relative" id="shop-search-container">
                <input
                  id="shop-search-input"
                  type="text"
                  placeholder="Filter by keyword..."
                  className="w-full bg-[#EFE8DD]/40 border border-[#C8A96B]/50 rounded-2xl text-xs py-2.5 md:py-2 px-10 pl-4 focus:outline-none focus:border-[#C8A96B] placeholder-[#666666]/50 text-[#111111] font-semibold transition-all min-h-[38px]"
                  value={shopSearchQuery}
                  onChange={(e) => setShopSearchQuery(e.target.value)}
                  onFocus={() => setIsShopSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsShopSearchFocused(false), 200)}
                />
                {shopSearchQuery && (
                  <button
                    onClick={() => setShopSearchQuery('')}
                    className="absolute right-10 top-1/2 -translate-y-1/2 text-[10px] uppercase font-bold text-[#666666]/70 hover:text-[#111111] transition-colors px-1"
                  >
                    Clear
                  </button>
                )}
                <Search className="w-3.5 h-3.5 text-[#C8A96B] absolute right-4 top-1/2 -translate-y-1/2" />

                {isShopSearchFocused && shopSearchQuery.trim().length > 0 && shopSuggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-[#FFFEF2] border border-[#EFE8DD] rounded-xl shadow-lg z-50 overflow-hidden max-h-[45vh] sm:max-h-80 overflow-y-auto animate-fade-in">
                    <div className="p-2.5 text-[9px] font-bold uppercase tracking-wider text-[#666666]/70 border-b border-[#EFE8DD] bg-[#EFE8DD]/10">
                      Suggested Matches
                    </div>
                    <div className="divide-y divide-[#EFE8DD]/40">
                      {shopSuggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onMouseDown={() => {
                            if (suggestion.type === 'category' && suggestion.categoryFilter) {
                              setSelectedCategoryFilter(suggestion.categoryFilter);
                              setShopSearchQuery('');
                            } else {
                              setShopSearchQuery(suggestion.value);
                              setSelectedCategoryFilter(null);
                            }
                          }}
                          className="w-full text-left px-4 py-2.5 hover:bg-[#EFE8DD]/20 flex items-center justify-between transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            {suggestion.type === 'category' && <Tag className="w-3 h-3 text-[#C8A96B]" />}
                            {suggestion.type === 'fabric' && <Sparkles className="w-3 h-3 text-[#C8A96B]" />}
                            {suggestion.type === 'product' && <ShoppingBag className="w-3 h-3 text-[#C8A96B]" />}
                            <span className="text-[11px] font-semibold text-[#111111] group-hover:text-[#C8A96B] transition-colors truncate max-w-[140px] sm:max-w-none">
                              {suggestion.label}
                            </span>
                          </div>
                          <span className="text-[8px] font-bold uppercase tracking-wider text-[#666666]/40 group-hover:text-[#C8A96B]/60 shrink-0">
                            {suggestion.type}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Filters Navigation Panel */}
            <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-10 pb-6 border-b border-[#EFE8DD]/50">
              
              {/* Category selector pills */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-wider">
                <button
                  onClick={() => setSelectedCategoryFilter(null)}
                  className={`px-3 md:px-5 py-2 md:py-2.5 rounded-xl transition-all cursor-pointer flex-1 sm:flex-none text-center ${
                    selectedCategoryFilter === null
                      ? 'bg-[#111111] text-[#FAF8F5]'
                      : 'border border-[#EFE8DD] hover:border-[#C8A96B] text-[#111111]'
                  }`}
                >
                  All Categories
                </button>
                <button
                  onClick={() => setSelectedCategoryFilter('churidars')}
                  className={`px-3 md:px-5 py-2 md:py-2.5 rounded-xl transition-all cursor-pointer flex-1 sm:flex-none text-center ${
                    selectedCategoryFilter === 'churidars'
                      ? 'bg-[#111111] text-[#FAF8F5]'
                      : 'border border-[#EFE8DD] hover:border-[#C8A96B] text-[#111111]'
                  }`}
                >
                  Churidars
                </button>
                <button
                  onClick={() => setSelectedCategoryFilter('kurtas')}
                  className={`px-3 md:px-5 py-2 md:py-2.5 rounded-xl transition-all cursor-pointer flex-1 sm:flex-none text-center ${
                    selectedCategoryFilter === 'kurtas'
                      ? 'bg-[#111111] text-[#FAF8F5]'
                      : 'border border-[#EFE8DD] hover:border-[#C8A96B] text-[#111111]'
                  }`}
                >
                  Kurtas
                </button>
                <button
                  onClick={() => setSelectedCategoryFilter('tops')}
                  className={`px-3 md:px-5 py-2 md:py-2.5 rounded-xl transition-all cursor-pointer flex-1 sm:flex-none text-center ${
                    selectedCategoryFilter === 'tops'
                      ? 'bg-[#111111] text-[#FAF8F5]'
                      : 'border border-[#EFE8DD] hover:border-[#C8A96B] text-[#111111]'
                  }`}
                >
                  Tops & Tunics
                </button>
              </div>

              {/* Multi sorting & tags */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs w-full lg:w-auto justify-between sm:justify-start">
                
                {/* Secondary Tab filters: All/New/Best Seller */}
                <div className="flex border border-[#EFE8DD] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveFilterTab('all')}
                    className={`px-3 py-2 transition-all cursor-pointer ${
                      activeFilterTab === 'all' ? 'bg-[#EFE8DD] font-bold text-[#111111]' : 'text-[#666666] hover:text-[#111111]'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveFilterTab('new')}
                    className={`px-3 py-2 transition-all cursor-pointer ${
                      activeFilterTab === 'new' ? 'bg-[#EFE8DD] font-bold text-[#111111]' : 'text-[#666666] hover:text-[#111111]'
                    }`}
                  >
                    New
                  </button>
                  <button
                    onClick={() => setActiveFilterTab('best-sellers')}
                    className={`px-3 py-2 transition-all cursor-pointer ${
                      activeFilterTab === 'best-sellers' ? 'bg-[#EFE8DD] font-bold text-[#111111]' : 'text-[#666666] hover:text-[#111111]'
                    }`}
                  >
                    Bestseller
                  </button>
                </div>

                {/* Sort Option Dropdown */}
                <div className="flex items-center gap-2 border border-[#EFE8DD] px-3.5 py-2 bg-white rounded-xl">
                  <span className="text-[#666666] font-medium">Sort:</span>
                  <select
                    className="focus:outline-none font-bold bg-transparent text-[#111111] cursor-pointer"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Featured First</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                    <option value="rating">Rating Score</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Main Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white border border-[#EFE8DD] rounded-2xl">
                <p className="text-sm font-semibold text-[#666666] uppercase tracking-wider mb-4">No matching garments found</p>
                <button
                  onClick={() => {
                    setSelectedCategoryFilter(null);
                    setShopSearchQuery('');
                    setActiveFilterTab('all');
                  }}
                  className="bg-[#111111] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 cursor-pointer rounded-xl"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3.5 gap-y-6 sm:gap-8 md:gap-12">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={handleQuickView}
                    onProductClick={handleProductClick}
                    isWishlisted={wishlist.includes(product.id)}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ==================== PRODUCT DETAIL PAGE ==================== */}
        {currentPage === 'product-detail' && selectedProductId && (
          <ProductDetail
            productId={selectedProductId}
            onBack={() => {
              setCurrentPage('shop');
            }}
            onProductClick={handleProductClick}
            isWishlisted={wishlist.includes(selectedProductId)}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={handleQuickView}
          />
        )}

        {/* ==================== ABOUT US PAGE ==================== */}
        {currentPage === 'about' && (
          <div className="animate-fade-in text-left">
            
            {/* Header banner */}
            <section className="bg-[#EFE8DD]/40 py-16 md:py-24 border-b border-[#EFE8DD]">
              <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A96B]">Who We Are</span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#111111] tracking-wide">
                  Our Brand Story
                </h1>
                <p className="text-xs text-[#666666] max-w-lg mx-auto leading-relaxed">
                  Redefining Kerala style through meticulously hand-selected natural fabrics, modern silhouettes, and slow-crafted design perfection.
                </p>
              </div>
            </section>

            {/* Brand story details */}
            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-12 md:space-y-16 text-xs md:text-sm text-[#333333] leading-relaxed">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-7 space-y-4">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-[#111111] tracking-wide">
                    The Genesis of HYRA ESSENCE
                  </h2>
                  <p>
                    Founded in Kochi, Kerala, <strong>HYRA ESSENCE</strong> emerged out of a desire to bridge the gap between premium luxury fashion and affordable pricing for the modern, style-conscious woman. We noticed that high-street retail brands lacked the premium fabric breathable qualities suited for our humid coastal environments, while local ethnic options often compromised on sophisticated minimalist design aesthetics.
                  </p>
                  <p>
                    Our response was simple: a design label deeply rooted in Kerala’s rich handloom traditions, combined with contemporary European minimalism (inspired by Zara and Mango) that college students and young professionals adore.
                  </p>
                </div>
                <div className="md:col-span-5 aspect-[4/5] bg-[#EFE8DD]/40 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
                    alt="Kerala Cotton Looming Artisanship"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-5 order-2 md:order-1 aspect-[4/5] bg-[#EFE8DD]/40 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=600&q=80"
                    alt="Sustainable Linen Fabrication"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-7 order-1 md:order-2 space-y-4">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-[#111111] tracking-wide">
                    Our Mission & Ethical Fabrics
                  </h2>
                  <p>
                    Our mission is simple: to make every visitor look and feel stunning, premium, and absolutely confident. Every single Kurta, Salwar Set, and Tunic we curate under the HYRA logo must pass stringent parameters of fabric excellence.
                  </p>
                  <p>
                    We prioritize raw materials that allow your skin to breathe. From authentic organic Belgian flax linens, high-grade mulberry and Tussar silks, to handwoven cotton yarns crafted by local artisans across India. We believe that true luxury lies in the touch of raw, high-quality fabric against the skin.
                  </p>
                  <p>
                    Slow fashion is our guiding light. Instead of massive industrial roll-outs, we produce small, exclusive batches that reduce textile waste, support local weaver cooperatives, and guarantee you wear a design that remains highly exclusive and unique.
                  </p>
                </div>
              </div>

              {/* Three key pillars */}
              <div className="border-t border-[#EFE8DD] pt-12 md:pt-16">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-[#111111] text-center mb-10">
                  Our Uncompromising Commitments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-2">
                    <span className="font-bold text-[#C8A96B] font-mono text-sm uppercase">01 / Pure Origin</span>
                    <h3 className="font-serif text-base font-semibold text-[#111111]">100% Honest Fabrics</h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      We never blend cheap synthetic polyesters. If we label a product as linen, it is certified 100% organic linen. Luxury comfort begins with raw material truth.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-bold text-[#C8A96B] font-mono text-sm uppercase">02 / Local Craft</span>
                    <h3 className="font-serif text-base font-semibold text-[#111111]">Sustaining Communities</h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      We collaborate with artisanal handloom weavers in Chendamangalam, Balaramapuram, and Chanderi. Buying HYRA means actively supporting heritage craft preservation.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-bold text-[#C8A96B] font-mono text-sm uppercase">03 / Client First</span>
                    <h3 className="font-serif text-base font-semibold text-[#111111]">Direct Stylist Consultation</h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      No automated email replies. Our WhatsApp integration guarantees you chat directly with a real human stylist who takes your measurements and customizes packages with care.
                    </p>
                  </div>
                </div>
              </div>

            </section>
          </div>
        )}

        {/* ==================== CONTACT PAGE ==================== */}
        {currentPage === 'contact' && (
          <div className="animate-fade-in text-left">
            
            {/* Page Header */}
            <section className="bg-[#EFE8DD]/40 py-16 md:py-24 border-b border-[#EFE8DD]">
              <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A96B]">Get In Touch</span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#111111] tracking-wide">
                  Connect With Us
                </h1>
                <p className="text-xs text-[#666666] max-w-lg mx-auto leading-relaxed">
                  Have a question about a product, sizing, or custom shipping requests? Our customer experience boutique team in Thalassery is here to assist you.
                </p>
              </div>
            </section>

            {/* Contact Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Form Side (span 7) */}
              <div className="lg:col-span-7 bg-white p-6 md:p-10 border border-[#EFE8DD] rounded-2xl shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#111111] mb-2 tracking-wide">
                  Send A Message
                </h2>
                <p className="text-xs text-[#666666] mb-8">
                  Fill in your details below. We typically respond within 1-2 business hours.
                </p>

                {isContactSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 flex flex-col items-center text-center space-y-3 rounded-xl">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    <h3 className="font-serif text-lg font-bold">Message Received, Thank You!</h3>
                    <p className="text-xs max-w-sm">
                      We have received your request regarding <strong>"{contactSubject}"</strong>. A HYRA fashion advisor will text or email you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-[#111111]">Your Name</label>
                        <input
                          type="text"
                          required
                          className="border border-[#EFE8DD] focus:border-[#C8A96B] focus:outline-none rounded-2xl px-4 py-3 text-xs font-semibold text-[#111111] bg-[#FAF8F5]/50 focus:bg-white transition-all mt-1"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-[#111111]">Email Address</label>
                        <input
                          type="email"
                          required
                          className="border border-[#EFE8DD] focus:border-[#C8A96B] focus:outline-none rounded-2xl px-4 py-3 text-xs font-semibold text-[#111111] bg-[#FAF8F5]/50 focus:bg-white transition-all mt-1"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#111111]">Subject</label>
                      <select
                        className="border border-[#EFE8DD] focus:border-[#C8A96B] focus:outline-none rounded-2xl px-4 py-3 text-xs font-semibold text-[#111111] bg-[#FAF8F5]/50 focus:bg-white transition-all mt-1 cursor-pointer"
                        value={contactSubject}
                        onChange={(e) => setContactSubject(e.target.value)}
                      >
                        <option value="Product Inquiry">Product Inquiry / Check Stock</option>
                        <option value="Sizing Advice">Sizing Guidance Consultation</option>
                        <option value="Shipping Exchange">Exchange or Returns Request</option>
                        <option value="Custom Order">Custom Bulk & Gifting Orders</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#111111]">Your Message</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Detail your request here. Include product names, sizes, or your delivery pin code for quicker assistance."
                        className="border border-[#EFE8DD] focus:border-[#C8A96B] focus:outline-none rounded-2xl px-4 py-3 text-xs font-medium placeholder-[#666666]/45 text-[#111111] bg-[#FAF8F5]/50 focus:bg-white transition-all mt-1 resize-none"
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#111111] text-[#FAF8F5] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A96B] transition-all duration-300 cursor-pointer rounded-2xl shadow-md"
                    >
                      Submit Message
                    </button>
                  </form>
                )}
              </div>

              {/* Info details Side (span 5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                
                {/* Physical details cards */}
                <div className="bg-[#EFE8DD]/30 border border-[#EFE8DD] p-8 space-y-6 rounded-2xl shadow-sm">
                  <h2 className="font-serif text-lg font-bold text-[#111111] uppercase tracking-wider border-b border-[#EFE8DD] pb-4">
                    The Boutique Info
                  </h2>
                  <div className="space-y-4 text-xs text-[#333333]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">HYRA ESSENCE Headquarters</p>
                        <p className="text-[#666666] mt-0.5">Thalassery, Kannur, Kerala 670105</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">WhatsApp Hotline</p>
                        <p className="text-[#666666] mt-0.5">+91 8590457509</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Styling & Gifting Inquiries</p>
                        <p className="text-[#666666] mt-0.5">hyraessence@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Boutique Support Hours</p>
                        <p className="text-[#666666] mt-0.5">Monday to Sunday: 09:30 AM – 08:30 PM IST</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EFE8DD]">
                    <a
                      href="https://wa.me/918590457509"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#111111] hover:bg-[#C8A96B] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-[0.18em] transition-all rounded-xl shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
                      Instant Chat Advisor
                    </a>
                  </div>
                </div>

                {/* Custom Stylized Map Placeholder (Vector Map) */}
                <div className="relative aspect-video w-full bg-[#EFE8DD]/25 border border-[#EFE8DD] overflow-hidden flex flex-col justify-center items-center text-center p-6 space-y-3 shadow-inner rounded-2xl">
                  {/* Styled Grid markings behind */}
                  <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#C8A96B 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                  
                  {/* Golden stylized roads (abstract art) */}
                  <svg className="absolute inset-0 w-full h-full opacity-30 stroke-[#C8A96B] stroke-2" fill="none">
                    <line x1="0" y1="40" x2="300" y2="200" />
                    <line x1="100" y1="0" x2="180" y2="250" />
                    <line x1="20" y1="180" x2="250" y2="30" />
                    <circle cx="140" cy="110" r="45" strokeDasharray="4 4" />
                  </svg>

                  <div className="relative p-3 bg-[#FAF8F5] shadow-md border border-[#EFE8DD] rounded-full inline-block animate-bounce text-[#C8A96B]">
                    <MapPin className="w-6 h-6 fill-[#C8A96B]/20" />
                  </div>
                  
                  <div className="relative space-y-1">
                    <p className="font-serif text-sm font-semibold text-[#111111] tracking-wide">Thalassery, Kannur</p>
                    <p className="text-[10px] text-[#666666]">Google Maps Interactive integration pending launch</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== FAQ PAGE ==================== */}
        {currentPage === 'faq' && (
          <div className="animate-fade-in text-left">
            
            {/* Header banner */}
            <section className="bg-[#EFE8DD]/40 py-16 md:py-24 border-b border-[#EFE8DD]">
              <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A96B]">Self Service Help</span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#111111] tracking-wide">
                  Frequently Asked Questions
                </h1>
                <p className="text-xs text-[#666666] max-w-lg mx-auto leading-relaxed">
                  Browse our answers below regarding ordering, UPI payments, Kerala free delivery, sizing exchanges, and quality fabrics.
                </p>
              </div>
            </section>

            {/* Accordion List section */}
            <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="border-b border-[#EFE8DD] pb-4">
                    <button
                      onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                      className="w-full flex justify-between items-center py-4 text-left font-serif text-base md:text-lg font-semibold text-[#111111] hover:text-[#C8A96B] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className={`text-sm text-[#C8A96B] transform transition-transform duration-300 ${openFaqIdx === idx ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    <div className={`transition-all overflow-hidden duration-300 ${openFaqIdx === idx ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-xs text-[#666666] leading-relaxed pb-4 pt-1 pr-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Secondary ask */}
              <div className="mt-16 bg-[#EFE8DD]/30 border border-[#EFE8DD] p-8 text-center space-y-4 rounded-2xl shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#111111]">Have a custom question not listed here?</h3>
                <p className="text-xs text-[#666666] max-w-md mx-auto">
                  Our WhatsApp support is active 7 days a week. Ask us about chest measurements, print close-ups, or custom salwar tailoring options.
                </p>
                <a
                  href="https://wa.me/918590457509"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#111111] hover:bg-[#C8A96B] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 inline-block rounded-xl shadow-sm"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </section>
          </div>
        )}

        {/* ==================== PRIVACY POLICY PAGE ==================== */}
        {currentPage === 'privacy' && (
          <section className="max-w-3xl mx-auto px-4 py-16 md:py-24 animate-fade-in text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A96B] block mb-2">Legal Compliance</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#111111] mb-10 tracking-wide border-b border-[#EFE8DD] pb-6">
              Privacy Policy
            </h1>
            <div className="text-xs md:text-sm text-[#333333] leading-relaxed space-y-6">
              <p className="font-bold text-xs font-mono uppercase text-[#C8A96B]">Last updated: July 3, 2026</p>
              
              <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">1. Data Collected on WhatsApp Orders</h3>
              <p>
                At <strong>{BRAND_NAME}</strong>, we respect your confidentiality. Because our business model operates primarily via direct customer interaction on WhatsApp, we do not compile cookies, tracking profiles, or store extensive credit card information on this website.
              </p>
              <p>
                When you proceed with an order via WhatsApp, we require:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 font-medium">
                <li>Your full name for parcel shipping</li>
                <li>Your shipping address with landmark and postal PIN code</li>
                <li>Your phone number for courier delivery updates</li>
              </ul>

              <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">2. Safe Payment Transactions</h3>
              <p>
                We do not process credit cards directly on our server. All transaction details (such as UPI IDs, GPay phone numbers, or bank transfers) are coordinated securely within the private chat frame between you and our certified brand coordinator.
              </p>

              <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">3. Newsletter Subscriptions</h3>
              <p>
                If you opt to join our email newsletter list, your address is securely kept in our isolated email directory. We never rent, sell, or trade your contact listings to third-party marketing brokers. You may unsubscribe instantly by emailing us.
              </p>
            </div>
          </section>
        )}

        {/* ==================== SHIPPING & RETURNS PAGE ==================== */}
        {currentPage === 'shipping-returns' && (
          <section className="max-w-3xl mx-auto px-4 py-16 md:py-24 animate-fade-in text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A96B] block mb-2">Shopping Guidelines</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#111111] mb-10 tracking-wide border-b border-[#EFE8DD] pb-6">
              Shipping & Returns Policy
            </h1>
            <div className="text-xs md:text-sm text-[#333333] leading-relaxed space-y-6">
              
              <h3 className="font-serif text-xl font-bold text-[#111111]">1. Delivery Areas & Rates</h3>
              <p>
                We provide <strong>FREE standard delivery across Kerala</strong> with no minimum order constraints.
              </p>
              <p>
                For orders shipping outside Kerala (other Indian states):
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Free shipping applies to order totals above ₹1,500.</li>
                <li>A flat rate of ₹100 is charged on order totals below ₹1,500.</li>
              </ul>

              <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">2. Expected Timelines</h3>
              <p>
                All items are dispatched from our packing boutique in Thalassery, Kerala. Dispatches happen within 24-48 hours.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Within Kerala:</strong> Delivered in 2-3 business days.</li>
                <li><strong>All-India:</strong> Delivered in 4-6 business days.</li>
              </ul>

              <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">3. The 7-Day Size Exchange Commitment</h3>
              <p>
                We understand that choosing clothing sizes online can occasionally be tricky. Hence, we provide a <strong>7-Day Size Exchange Policy</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Contact our WhatsApp team within 7 days of parcel arrival.</li>
                <li>The garment must be unworn, unwashed, with the custom card tag intact.</li>
                <li>We coordinate the reverse pickup of your garment and send the new exchange size with zero stress.</li>
              </ul>
            </div>
          </section>
        )}

      </main>

      {/* 4. FLOATING WhatsApp BUTTON (LIGHT BROWN ACCENT) */}
      <a
        href={floatWhatsappUrl}
        target="_blank"
        rel="noreferrer"
        className={`fixed right-4 lg:right-6 z-40 bg-[#C8A96B] hover:bg-[#B89B72] text-white py-2.5 px-4 sm:py-3 sm:px-5 shadow-[0_8px_30px_rgba(200,169,107,0.35)] hover:shadow-[0_12px_40px_rgba(200,169,107,0.5)] transition-all duration-300 border border-[#C8A96B] cursor-pointer group flex items-center gap-2.5 rounded-full ${
          currentPage === 'product-detail' ? 'bottom-20 sm:bottom-6' : 'bottom-[76px] lg:bottom-6'
        }`}
        aria-label="Direct Chat on WhatsApp"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <svg
          className="w-4.5 h-4.5 text-white group-hover:scale-110 transition-transform duration-300"
          viewBox="0 0 448 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l112.5-29.5c32.9 17.9 69.6 27.3 107.1 27.3 122.4 0 222-99.6 222-222 0-59.3-23.2-115-65.1-157M223.9 445.5c-33.2 0-65.7-8.9-94-25.7l-6.7-4-66.8 17.5 17.8-65.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-sans font-semibold text-white transition-colors">
          Assistance
        </span>
      </a>

      {/* 4b. MOBILE BOTTOM NAVIGATION (effortless one-hand thumb browsing, hidden on product-detail page where special sticky buy bar is shown) */}
      {currentPage !== 'product-detail' && (
        <div className="block lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFEF2]/95 backdrop-blur-md border-t border-[#EFE8DD] shadow-[0_-8px_30px_rgba(0,0,0,0.05)] pb-safe">
          <div className="grid grid-cols-4 items-center h-16 max-w-md mx-auto">
            {/* Home Tab */}
            <button
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center h-full transition-colors cursor-pointer ${
                currentPage === 'home' ? 'text-[#B89B72]' : 'text-[#1D1818]/70 hover:text-[#B89B72]'
              }`}
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Home</span>
            </button>

            {/* Shop Tab */}
            <button
              onClick={() => {
                setSelectedCategoryFilter(null);
                setCurrentPage('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center h-full transition-colors cursor-pointer ${
                currentPage === 'shop' ? 'text-[#B89B72]' : 'text-[#1D1818]/70 hover:text-[#B89B72]'
              }`}
            >
              <ShoppingBag className="w-5 h-5 mb-1" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Shop</span>
            </button>

            {/* Wishlist Tab (Saved items) */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className={`flex flex-col items-center justify-center h-full transition-colors relative cursor-pointer ${
                isWishlistOpen ? 'text-[#B89B72]' : 'text-[#1D1818]/70 hover:text-[#B89B72]'
              }`}
            >
              <div className="relative mb-1">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-[#B89B72] text-[#FFFEF2] text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#FFFEF2]">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider">Saved</span>
            </button>

            {/* WhatsApp Direct Chat Tab */}
            <a
              href={floatWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center h-full text-[#1D1818]/70 hover:text-[#B89B72] transition-colors"
            >
              <MessageSquare className="w-5 h-5 mb-1 text-[#B89B72] fill-[#B89B72]/10" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#1D1818]/70">Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* 5. SLIDING WISHLIST SIDE DRAWER PANEL */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onViewProduct={handleWishlistExplore}
      />

      {/* 6. QUICK VIEW OVERLAY MODAL */}
      {activeQuickViewProduct && (
        <QuickViewModal
          product={activeQuickViewProduct}
          onClose={() => setActiveQuickViewProduct(null)}
          onViewDetails={handleProductClick}
        />
      )}

      {/* 7. ELEGANT FOOTER */}
      <Footer
        setCurrentPage={setCurrentPage}
        setSelectedCategoryFilter={setSelectedCategoryFilter}
      />
    </div>
  );
}
