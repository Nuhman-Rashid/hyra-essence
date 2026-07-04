/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Trash2, MessageSquare, Heart } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveFromWishlist: (id: string) => void;
  onViewProduct: (id: string) => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveFromWishlist,
  onViewProduct,
}: WishlistDrawerProps) {
  if (!isOpen) return null;

  const savedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-fade-in">
      {/* Background click close trigger */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between z-10 animate-fade-in">
        
        {/* Header */}
        <div className="p-6 border-b border-[#EFE8DD] flex justify-between items-center text-left">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
            <span className="font-serif text-lg font-bold uppercase tracking-wider text-[#111111]">
              My Wishlist ({savedProducts.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#111111] hover:text-[#C8A96B] transition-colors cursor-pointer"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {savedProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
              <div className="p-4 bg-[#EFE8DD]/40 rounded-full">
                <Heart className="w-8 h-8 text-[#C8A96B]/60" />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#111111] uppercase tracking-wider">
                Your Wishlist is Empty
              </h3>
              <p className="text-xs text-[#666666] max-w-xs leading-relaxed">
                Add beautiful garments that speak of elegance while browsing our collections, and easily review them here.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onViewProduct('shop-trigger'); // Custom signal to go to shop page
                }}
                className="bg-[#111111] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 hover:bg-[#C8A96B] transition-colors cursor-pointer rounded-xl"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {savedProducts.map((p) => {
                const whatsappMsg = encodeURIComponent(
                  `Hello HYRA ESSENCE! I would love to order the "${p.name}" (${p.id}) saved in my Wishlist.\n\n` +
                  `• Price: ₹${p.price}\n` +
                  `• Fabric: ${p.fabric}\n` +
                  `Please help me confirm my size and checkout. Thank you!`
                );

                return (
                  <div
                    key={p.id}
                    className="flex gap-4 p-3 bg-white border border-[#EFE8DD] rounded-xl animate-fade-in text-left relative"
                  >
                    {/* Thumbnail */}
                    <div
                      className="w-20 aspect-[3/4] overflow-hidden bg-[#EFE8DD]/25 rounded-lg shrink-0 cursor-pointer"
                      onClick={() => {
                        onViewProduct(p.id);
                        onClose();
                      }}
                    >
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-bold text-[#666666] uppercase tracking-wider block">
                          {p.fabric.split('with')[0].trim()}
                        </span>
                        <h4
                          onClick={() => {
                            onViewProduct(p.id);
                            onClose();
                          }}
                          className="font-serif text-sm font-semibold text-[#111111] hover:text-[#C8A96B] transition-colors line-clamp-1 cursor-pointer"
                        >
                          {p.name}
                        </h4>
                        <div className="flex items-baseline space-x-2 pt-0.5">
                          <span className="text-xs font-semibold text-[#111111]">
                            ₹{p.price.toLocaleString('en-IN')}
                          </span>
                          {p.originalPrice && (
                            <span className="text-[10px] text-[#666666]/60 line-through">
                              ₹{p.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Direct Actions */}
                      <div className="flex items-center gap-2.5 pt-2">
                        {/* WhatsApp order directly */}
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#111111] hover:bg-[#C8A96B] px-3 py-1.5 rounded-lg transition-all duration-300"
                        >
                          <MessageSquare className="w-3 h-3 text-[#C8A96B] fill-[#C8A96B]" />
                          Order
                        </a>

                        {/* View product */}
                        <button
                          onClick={() => {
                            onViewProduct(p.id);
                            onClose();
                          }}
                          className="text-[9px] font-bold uppercase tracking-wider text-[#666666] hover:text-black transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Trash remove button (Absolute top right) */}
                    <button
                      onClick={() => onRemoveFromWishlist(p.id)}
                      className="absolute top-2 right-2 text-[#666666]/60 hover:text-red-700 p-1.5 transition-colors cursor-pointer"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Floating WhatsApp bottom bar if items saved */}
        {savedProducts.length > 0 && (
          <div className="p-6 bg-[#EFE8DD]/30 border-t border-[#EFE8DD]">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hello HYRA ESSENCE! I would love to check the availability of some items in my wishlist:\n` +
                savedProducts.map((p) => `- ${p.name} (₹${p.price})`).join('\n') +
                `\n\nPlease assist me! Thank you.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#111111] hover:bg-[#C8A96B] text-[#FAF8F5] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-xl shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
              Inquire All on WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
