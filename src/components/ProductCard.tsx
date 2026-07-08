/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, MessageSquare } from 'lucide-react';
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

        {/* Product Images (Fades between primary and secondary on hover) */}
        <img
          src={product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out-expo ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} Alternate View`}
            referrerPolicy="no-referrer"
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out-expo scale-100 group-hover:scale-105 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
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
      <div className="mt-4 flex flex-col space-y-1 text-left cursor-pointer" onClick={() => onProductClick(product.id)}>
        
        {/* Fabric description */}
        <span className="text-[10px] font-semibold text-[#666666] tracking-wider uppercase">
          {product.fabric.split('with')[0].trim()}
        </span>

        {/* Product title */}
        <h3 className="font-serif text-base font-semibold text-[#1D1818] tracking-wide group-hover:text-[#B89B72] transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Available Sizes preview */}
        <div className="text-[9px] text-[#666666]/70 uppercase tracking-widest font-medium py-0.5">
          Sizes: {product.sizes.join(' · ')}
        </div>

        {/* Price & Action Container */}
        <div className="flex justify-between items-center pt-2">
          
          {/* Price tags */}
          <div className="flex items-baseline space-x-2">
            <span className="font-semibold text-[#1D1818] text-sm">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#666666]/60 line-through">
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
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#FFFEF2] bg-[#1D1818] hover:bg-[#B89B72] px-3.5 py-2 rounded-xl transition-all duration-300"
          >
            <MessageSquare className="w-3 h-3 text-[#B89B72] fill-[#B89B72]" />
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
