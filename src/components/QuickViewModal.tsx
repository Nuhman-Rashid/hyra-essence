/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, MessageSquare, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../data';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onViewDetails: (productId: string) => void;
}

export default function QuickViewModal({ product, onClose, onViewDetails }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  // Prefilled WhatsApp order text with selected size
  const whatsappMessage = encodeURIComponent(
    `Hello HYRA ESSENCE! I would love to order the "${product.name}" (${product.id}) via your website.\n\n` +
    `• Selected Size: ${selectedSize}\n` +
    `• Fabric: ${product.fabric}\n` +
    `• Price: ₹${product.price}\n\n` +
    `Could you please help me confirm shipping details? Thank you!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="relative bg-[#FAF8F5] max-w-4xl w-full max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-2xl border border-[#EFE8DD]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#111111] hover:text-[#C8A96B] transition-colors cursor-pointer bg-[#FAF8F5]/80 rounded-full"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Images Section */}
        <div className="md:w-1/2 flex flex-col p-4 md:p-6 bg-[#EFE8DD]/20 border-b md:border-b-0 md:border-r border-[#EFE8DD]">
          <div className="relative aspect-[3/4] overflow-hidden bg-white rounded-xl">
            <img
              src={product.images[activeImageIdx]}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
          
          {/* Thumbnail triggers */}
          {product.images.length > 1 && (
            <div className="flex gap-2.5 mt-3 justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-14 aspect-[3/4] border rounded-lg overflow-hidden transition-all ${
                    idx === activeImageIdx
                      ? 'border-[#C8A96B] p-0.5'
                      : 'border-[#EFE8DD] opacity-65 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Product Details Section */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[70vh] md:max-h-[80vh]">
          <div className="flex flex-col space-y-4">
            
            {/* Fabric tag & category */}
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A96B]">
              {product.category} · {product.fabric.split('with')[0].trim()}
            </span>

            {/* Product Title */}
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#111111] leading-tight">
              {product.name}
            </h2>

            {/* Pricing */}
            <div className="flex items-baseline space-x-3 py-1">
              <span className="font-semibold text-xl text-[#111111]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#666666]/60 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {/* Micro description */}
            <p className="text-xs text-[#333333]/80 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="py-2">
              <div className="flex justify-between text-[11px] font-bold text-[#111111] uppercase tracking-wider mb-2">
                <span>Select Size</span>
                <span className="text-[#C8A96B] lowercase font-medium">Standard fit</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-10 h-10 px-2.5 text-xs font-semibold tracking-wider transition-all border rounded-lg cursor-pointer ${
                      selectedSize === size
                        ? 'border-[#111111] bg-[#111111] text-[#FAF8F5]'
                        : 'border-[#EFE8DD] hover:border-[#C8A96B] text-[#111111]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Highlight & Delivery Badges */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#EFE8DD]/70 text-[10px] text-[#666666]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C8A96B] shrink-0" />
                <span>100% Premium Fabric</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#C8A96B] shrink-0" />
                <span>Free Kerala Shipping</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col space-y-3.5 pt-6 mt-6 border-t border-[#EFE8DD]">
            
            {/* Primary Buy: WhatsApp order with prefilled size */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#C8A96B] hover:bg-[#B89B72] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-xl shadow-md group"
            >
              <svg
                className="w-4 h-4 text-white transition-colors duration-300"
                viewBox="0 0 448 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l112.5-29.5c32.9 17.9 69.6 27.3 107.1 27.3 122.4 0 222-99.6 222-222 0-59.3-23.2-115-65.1-157M223.9 445.5c-33.2 0-65.7-8.9-94-25.7l-6.7-4-66.8 17.5 17.8-65.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Order via WhatsApp in Size {selectedSize}
            </a>

            {/* Secondary: Full Product details */}
            <button
              onClick={() => {
                onViewDetails(product.id);
                onClose();
              }}
              className="w-full py-3.5 border border-[#111111] hover:bg-[#EFE8DD]/40 text-[#111111] text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              View Full Product Details
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
