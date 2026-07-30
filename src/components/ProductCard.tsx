/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../data';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onProductClick: (productId: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  key?: string;
}

export default function ProductCard({
  product,
  onQuickView,
  onProductClick,
  isWishlisted,
  onToggleWishlist,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 40;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX || !touchEndX || !product.images || product.images.length <= 1) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setActiveImageIdx((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
    } else if (isRightSwipe) {
      setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : product.images.length - 1));
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Prefilled WhatsApp message for instant purchase
  const whatsappMessage = encodeURIComponent(
    `Hello HYRA ESSENCE! I would love to order the "${product.name}" (${product.id}).\n` +
    `Price: ₹${product.price}\n` +
    `Fabric: ${product.fabric}\n` +
    `Please assist me in booking my order. Thank you!`
  );

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <article
      className="group relative flex flex-col bg-transparent animate-fade-in"
      onMouseEnter={() => {
        setIsHovered(true);
        if (product.images && product.images.length > 1 && activeImageIdx === 0) {
          setActiveImageIdx(1);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImageIdx(0);
      }}
    >
      {/* Visual stage / Image container */}
      <div className="relative w-full aspect-[3/4] bg-[#EFE8DD]/30 overflow-hidden rounded-2xl cursor-pointer" onClick={() => onProductClick(product.id)}>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
          {product.isNewArrival && (
            <span className="bg-[#1D1818] text-[#FFFEF2] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-[#B89B72] text-[#FFFEF2] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">
              Best Seller
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-amber-800 text-[#FFFEF2] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 z-10 p-2 bg-[#FFFEF2]/85 backdrop-blur-sm rounded-full text-[#1D1818] hover:text-[#B89B72] hover:bg-[#FFFEF2] shadow-sm transition-all duration-300 cursor-pointer"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 transition-all duration-300 ${
              isWishlisted ? 'fill-[#B89B72] stroke-[#B89B72] scale-110' : 'stroke-[#1D1818]'
            }`}
          />
        </button>

        {/* Product Images (Interactive Swipe Style & Hover Carousel) */}
        {(!product.images || product.images.length === 0 || !product.images[0]) ? (
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#FAF8F5] border border-[#EFE8DD]/50 p-6 text-center">
            <div className="w-10 h-10 rounded-full bg-[#EFE8DD]/60 flex items-center justify-center mb-3 text-[#C8A96B]">
              <Eye className="w-5 h-5 opacity-60" />
            </div>
            <span className="font-serif text-lg tracking-[0.25em] font-bold text-[#1D1818]/80 mb-1">HYRA</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#B89B72] font-semibold">Photo Coming Soon</span>
          </div>
        ) : (
          <div
            className="absolute inset-0 w-full h-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} - View ${idx + 1}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out-expo ${
                  idx === activeImageIdx
                    ? 'opacity-100 scale-100 group-hover:scale-105 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              />
            ))}

            {/* Swipe Arrows (appear on hover when multiple photos exist) */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : product.images.length - 1));
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#FFFEF2]/85 hover:bg-[#FFFEF2] text-[#1D1818] hover:text-[#C8A96B] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIdx((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#FFFEF2]/85 hover:bg-[#FFFEF2] text-[#1D1818] hover:text-[#C8A96B] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Bottom Dot Indicators / Swipe Style */}
                <div className="absolute bottom-3 group-hover:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-auto transition-all duration-500">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIdx(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeImageIdx ? 'w-3.5 bg-[#C8A96B]' : 'w-1.5 bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Go to photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Quick View slide-up overlay */}
        <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-[#FFFEF2]/95 backdrop-blur-xs py-3 px-4 flex justify-between items-center border-t border-[#EFE8DD] shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1D1818] hover:text-[#B89B72] transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onProductClick(product.id);
            }}
            className="text-[10px] font-bold uppercase tracking-widest text-[#B89B72] hover:text-[#1D1818] transition-colors cursor-pointer"
          >
            Details
          </button>
        </div>
      </div>

      {/* Info details */}
      <div className="mt-2.5 sm:mt-4 flex flex-col space-y-0.5 sm:space-y-1 text-left cursor-pointer" onClick={() => onProductClick(product.id)}>
        
        {/* Fabric description */}
        <span className="text-[9px] sm:text-[10px] font-semibold text-[#666666] tracking-wider uppercase truncate">
          {product.fabric.split('with')[0].trim()}
        </span>

        {/* Product title */}
        <h3 className="font-serif text-xs sm:text-base font-semibold text-[#1D1818] tracking-wide group-hover:text-[#B89B72] transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Available Sizes preview */}
        <div className="text-[8px] sm:text-[9px] text-[#666666]/70 uppercase tracking-widest font-medium py-0.5 truncate">
          Sizes: {product.sizes.join(' · ')}
        </div>

        {/* Price & Action Container */}
        <div className="flex items-center justify-between pt-1.5 sm:pt-2 gap-1 flex-wrap sm:flex-nowrap">
          
          {/* Price tags */}
          <div className="flex items-baseline space-x-1 sm:space-x-2">
            <span className="font-semibold text-[#1D1818] text-xs sm:text-sm">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-[#666666]/60 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Core Buy Action: WhatsApp order */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white bg-[#C8A96B] hover:bg-[#B89B72] px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition-all duration-300 group shadow-xs shrink-0"
          >
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white transition-colors duration-300"
              viewBox="0 0 448 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l112.5-29.5c32.9 17.9 69.6 27.3 107.1 27.3 122.4 0 222-99.6 222-222 0-59.3-23.2-115-65.1-157M223.9 445.5c-33.2 0-65.7-8.9-94-25.7l-6.7-4-66.8 17.5 17.8-65.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
