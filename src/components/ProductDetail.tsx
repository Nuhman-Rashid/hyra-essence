/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, ArrowLeft, ShieldCheck, Truck, RotateCcw, Sparkles, HelpCircle, Eye } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data';

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
  onProductClick: (id: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: Product) => void;
}

export default function ProductDetail({
  productId,
  onBack,
  onProductClick,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
}: ProductDetailProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState<boolean>(false);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({ backgroundPosition: '0% 0%' });

  useEffect(() => {
    const foundProduct = PRODUCTS.find((p) => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
      setActiveImageIdx(0);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center animate-fade-in">
        <p className="text-sm font-semibold text-[#111111] uppercase tracking-widest mb-4">Product Not Found</p>
        <button onClick={onBack} className="bg-[#111111] text-[#FAF8F5] text-xs font-bold uppercase tracking-widest px-6 py-3 cursor-pointer">
          Go Back to Collections
        </button>
      </div>
    );
  }

  // Related products from the same category
  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  // Dynamic zoom interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transform: 'scale(1.5)',
      transformOrigin: `${x}% ${y}%`
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: 'scale(1)', transformOrigin: 'center' });
  };

  // Prefilled WhatsApp text message
  const whatsappMessage = encodeURIComponent(
    `Hello HYRA ESSENCE! I would love to order the following from your premium collection:\n\n` +
    `• Product: ${product.name}\n` +
    `• Product ID: ${product.id}\n` +
    `• Selected Size: ${selectedSize}\n` +
    `• Fabric: ${product.fabric}\n` +
    `• Price: ₹${product.price}\n\n` +
    `Please confirm the availability and let me know how to finalize the order. Thank you!`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 animate-fade-in">
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#111111] hover:text-[#C8A96B] mb-8 md:mb-12 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Gallery
      </button>

      {/* Main product showcase layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left column - Images (span 7) */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
          
          {/* Vertical thumbnail list (desktop) */}
          <div className="order-2 md:order-1 flex md:flex-col gap-2.5 overflow-x-auto md:overflow-visible shrink-0 pb-2 md:pb-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`w-16 md:w-20 aspect-[3/4] border rounded-lg overflow-hidden transition-all shrink-0 cursor-pointer ${
                  idx === activeImageIdx
                    ? 'border-[#C8A96B] p-0.5 bg-[#FAF8F5]'
                    : 'border-[#EFE8DD] opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Active image stage with interactive zoom */}
          <div className="order-1 md:order-2 flex-1 relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#EFE8DD]/20 border border-[#EFE8DD]/40">
            <div
              className="w-full h-full overflow-hidden cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={product.images[activeImageIdx]}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-200"
                style={zoomStyle}
              />
            </div>

            {/* Float zoom text indicator */}
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-[8px] tracking-widest text-white uppercase px-2 py-1 flex items-center gap-1 pointer-events-none">
              <Eye className="w-3 h-3" />
              Hover to Zoom
            </div>
          </div>
        </div>

        {/* Right column - Configuration details (span 5) */}
        <div className="lg:col-span-5 flex flex-col space-y-6 md:space-y-8 text-left">
          
          <div className="border-b border-[#EFE8DD] pb-6 space-y-4">
            {/* Fabric Highlight tag */}
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A96B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{product.fabric.split('with')[0].trim()}</span>
            </div>

            {/* Product Title */}
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#111111] leading-tight">
              {product.name}
            </h1>

            {/* Price Tags */}
            <div className="flex items-baseline space-x-4">
              <span className="font-semibold text-2xl text-[#111111]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-base text-[#666666]/60 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="bg-[#C8A96B]/15 text-[#C8A96B] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                  </span>
                </>
              )}
            </div>

            {/* Small review summary */}
            <div className="flex items-center gap-2 text-xs text-[#666666]">
              <div className="flex text-[#C8A96B] font-bold">
                {'★'.repeat(Math.floor(product.rating))}
                {product.rating % 1 !== 0 && '½'}
              </div>
              <span>({product.reviewsCount} verified customer reviews)</span>
            </div>
          </div>

          {/* Deep Description */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#111111] tracking-wide">
              The Story
            </h3>
            <p className="text-xs text-[#333333]/85 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Fabric & Specs List */}
          <div className="bg-[#EFE8DD]/30 p-5 space-y-3.5 rounded-xl">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#111111]">
              Details & Fit
            </h4>
            <ul className="text-xs text-[#333333]/90 space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#C8A96B] font-bold mt-[-1px]">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Size Configuration Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-wider text-[#111111]">
              <span>Available Sizes</span>
              <button
                onClick={() => setIsSizeChartOpen(!isSizeChartOpen)}
                className="text-[#C8A96B] hover:text-[#111111] transition-colors flex items-center gap-1 uppercase cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Size Chart
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-12 h-12 px-3 text-xs font-bold tracking-widest border rounded-lg transition-all cursor-pointer ${
                    selectedSize === size
                      ? 'border-[#111111] bg-[#111111] text-[#FAF8F5]'
                      : 'border-[#EFE8DD] hover:border-[#C8A96B] text-[#111111]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Expandable Size Chart Table */}
            {isSizeChartOpen && (
              <div className="border border-[#EFE8DD] bg-white p-4 animate-fade-in shadow-sm rounded-xl">
                <div className="flex justify-between items-center pb-3 border-b border-[#EFE8DD] mb-3">
                  <span className="font-serif text-sm font-semibold uppercase tracking-wider text-[#111111]">
                    Kerala Standard Size Measurements (Inches)
                  </span>
                  <button onClick={() => setIsSizeChartOpen(false)} className="text-[#666666] hover:text-black">
                    ✕
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-center text-[10px] text-[#333333]">
                    <thead>
                      <tr className="bg-[#FAF8F5] border-b border-[#EFE8DD]">
                        <th className="py-2.5 font-bold uppercase">Size</th>
                        <th className="py-2.5 font-bold uppercase">Bust</th>
                        <th className="py-2.5 font-bold uppercase">Waist</th>
                        <th className="py-2.5 font-bold uppercase">Shoulder</th>
                        <th className="py-2.5 font-bold uppercase">Length</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EFE8DD]/50">
                      <tr>
                        <td className="py-2 font-semibold bg-[#EFE8DD]/10">XS</td>
                        <td className="py-2">32"</td>
                        <td className="py-2">26"</td>
                        <td className="py-2">14"</td>
                        <td className="py-2">40"</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold bg-[#EFE8DD]/10">S</td>
                        <td className="py-2">34"</td>
                        <td className="py-2">28"</td>
                        <td className="py-2">14.5"</td>
                        <td className="py-2">42"</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold bg-[#EFE8DD]/10">M</td>
                        <td className="py-2">36"</td>
                        <td className="py-2">30"</td>
                        <td className="py-2">15"</td>
                        <td className="py-2">44"</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold bg-[#EFE8DD]/10">L</td>
                        <td className="py-2">38"</td>
                        <td className="py-2">32"</td>
                        <td className="py-2">15.5"</td>
                        <td className="py-2">44"</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold bg-[#EFE8DD]/10">XL</td>
                        <td className="py-2">40"</td>
                        <td className="py-2">34"</td>
                        <td className="py-2">16"</td>
                        <td className="py-2">45"</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold bg-[#EFE8DD]/10">XXL</td>
                        <td className="py-2">42"</td>
                        <td className="py-2">36"</td>
                        <td className="py-2">16.5"</td>
                        <td className="py-2">45"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[9px] text-[#666666]/70 mt-2 text-left italic">
                  *Measurements represent actual garment dimension. For body bust size, add 2" margin for standard comfortable fitting.
                </p>
              </div>
            )}
          </div>

          {/* Checkout & Wishlist Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#EFE8DD]">
            
            {/* Primary buy */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#111111] hover:bg-[#C8A96B] text-[#FAF8F5] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-xl shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
              Order on WhatsApp in size {selectedSize}
            </a>

            {/* Wishlist toggle */}
            <button
              onClick={() => onToggleWishlist(product.id)}
              className="px-6 py-4 border border-[#111111] hover:bg-[#EFE8DD]/40 text-[#111111] transition-colors flex items-center justify-center gap-2 cursor-pointer rounded-xl"
              aria-label="Toggle wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C8A96B] stroke-[#C8A96B]' : ''}`} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {isWishlisted ? 'Saved' : 'Wishlist'}
              </span>
            </button>
          </div>

          {/* Info Trust Pillars Accordion style info */}
          <div className="border-t border-[#EFE8DD] pt-6 space-y-4 text-xs text-[#333333]">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-left">Quality Craftsmanship & Wash Care</p>
                <p className="text-[#666666] text-left text-[11px] mt-0.5 leading-relaxed">{product.washCare}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-left">Free Express Kerala Shipping</p>
                <p className="text-[#666666] text-left text-[11px] mt-0.5 leading-relaxed">{product.deliveryInfo}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <RotateCcw className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-left">7-Day Easy Size Exchanges</p>
                <p className="text-[#666666] text-left text-[11px] mt-0.5 leading-relaxed">
                  Ordered the wrong size? Contact us via WhatsApp within 7 days of delivery for a hassle-free exchange. We pick up and redeliver with zero friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS SECTION */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 md:mt-28 border-t border-[#EFE8DD] pt-16">
          <div className="flex justify-between items-end mb-10 text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A96B]">Complementary Looks</span>
              <h2 className="font-serif text-3xl font-bold text-[#111111] tracking-wide mt-1">
                You May Also Love
              </h2>
            </div>
          </div>

          {/* Related items shelf */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => onProductClick(p.id)}
                className="group flex flex-col cursor-pointer bg-transparent"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EFE8DD]/30">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(p);
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transition-all shadow-md hover:bg-[#C8A96B] hover:text-[#FAF8F5]"
                  >
                    Quick View
                  </button>
                </div>
                <div className="mt-4 flex flex-col text-left space-y-1">
                  <span className="text-[9px] font-bold text-[#666666] uppercase tracking-wider">{p.fabric.split('with')[0].trim()}</span>
                  <h3 className="font-serif text-sm font-semibold text-[#111111] group-hover:text-[#C8A96B] transition-colors">{p.name}</h3>
                  <span className="font-semibold text-xs text-[#111111]">₹{p.price.toLocaleString('en-IN')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
