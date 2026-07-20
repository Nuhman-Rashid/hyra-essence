/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MessageSquare, Instagram, MapPin, ArrowRight, Heart } from 'lucide-react';
import { BRAND_NAME, CATEGORIES } from '../data';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  setSelectedCategoryFilter: (category: string | null) => void;
}

export default function Footer({ setCurrentPage, setSelectedCategoryFilter }: FooterProps) {
  const handleNavClick = (page: string) => {
    if (page === 'shop') {
      setSelectedCategoryFilter(null);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategoryFilter(category);
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#FFFEF2] text-[#1D1818] pt-16 pb-8 border-t border-[#1D1818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Newsletter & Brand intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1D1818]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <span className="font-serif text-2xl font-bold tracking-[0.25em] text-[#1D1818] uppercase">
              {BRAND_NAME}
            </span>
            <p className="text-[#1D1818]/70 text-xs leading-relaxed max-w-sm">
              Curating affordable luxury, stylish elegance, and timeless comfort for the confident, modern young women of Kerala. Experience exquisite craftsmanship in every single thread.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://wa.me/919526228491"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1D1818]/5 hover:bg-[#B89B72] hover:text-[#FFFEF2] transition-all duration-300"
                aria-label="Contact on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/hyra.essence?igsh=MTMxcHFwNG1ib29qdQ=="
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1D1818]/5 hover:bg-[#B89B72] hover:text-[#FFFEF2] transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:hyraessence@gmail.com"
                className="p-2.5 rounded-full bg-[#1D1818]/5 hover:bg-[#B89B72] hover:text-[#FFFEF2] transition-all duration-300"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* WhatsApp Group Join Section */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <h3 className="font-serif text-lg font-medium text-[#1D1818] uppercase tracking-wider">
              Join Our WhatsApp Community
            </h3>
            <p className="text-[#1D1818]/70 text-xs max-w-lg leading-relaxed">
              Become a part of our exclusive WhatsApp group to receive instant alerts on new stock arrivals, premium collection launches, and special group-only discount offers.
            </p>
            
            <div className="pt-1">
              <a
                href="https://chat.whatsapp.com/F8lCXkoADL69EQEb92CvtC?s=cl&p=a&ilr=0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1D1818] hover:bg-[#25D366] text-[#FFFEF2] text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] duration-300"
              >
                <MessageSquare className="w-4 h-4 text-[#B89B72]" />
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Links columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-xs border-b border-[#1D1818]/10">
          
          {/* Column 1 - Explore */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[#B89B72]">
              Explore
            </h4>
            <div className="flex flex-col space-y-2.5 text-[#1D1818]/70">
              <button onClick={() => handleNavClick('home')} className="hover:text-[#B89B72] text-left transition-colors cursor-pointer">
                Home
              </button>
              <button onClick={() => handleNavClick('shop')} className="hover:text-[#B89B72] text-left transition-colors cursor-pointer">
                New Arrivals
              </button>
              <button onClick={() => handleNavClick('about')} className="hover:text-[#B89B72] text-left transition-colors cursor-pointer">
                Our Brand Story
              </button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-[#B89B72] text-left transition-colors cursor-pointer">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Column 2 - Categories */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[#B89B72]">
              Collections
            </h4>
            <div className="flex flex-col space-y-2.5 text-[#1D1818]/70">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="hover:text-[#B89B72] text-left transition-colors cursor-pointer text-xs"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 - Assistance */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[#B89B72]">
              Assistance
            </h4>
            <div className="flex flex-col space-y-2.5 text-[#1D1818]/70">
              <button onClick={() => handleNavClick('faq')} className="hover:text-[#B89B72] text-left transition-colors cursor-pointer">
                FAQs
              </button>
              <button onClick={() => handleNavClick('shipping-returns')} className="hover:text-[#B89B72] text-left transition-colors cursor-pointer">
                Shipping & Returns
              </button>
              <button onClick={() => handleNavClick('privacy')} className="hover:text-[#B89B72] text-left transition-colors cursor-pointer">
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Column 4 - Boutiques Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[#B89B72]">
              Headquarters
            </h4>
            <div className="flex flex-col space-y-2.5 text-[#1D1818]/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B89B72] shrink-0 mt-0.5" />
                <span>Thalassery,<br />Kannur, Kerala 670105</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#B89B72]" />
                <span>+91 9526228491</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B89B72]" />
                <span>hyraessence@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Credits */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-[#1D1818]/50 text-center space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </div>
          <div className="flex items-center justify-center gap-1">
            <span>Handcrafted for modern elegance in Kerala</span>
            <Heart className="w-3.5 h-3.5 text-[#B89B72] fill-[#B89B72]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
