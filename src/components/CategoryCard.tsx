/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
  onClick: (id: string) => void;
  key?: string;
}

export default function CategoryCard({ id, name, description, image, count, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className="group relative w-full aspect-[4/5] bg-[#EFE8DD]/30 overflow-hidden rounded-2xl cursor-pointer shadow-sm animate-fade-in"
    >
      {/* Background Zoom Image */}
      <img
        src={image}
        alt={name}
        referrerPolicy="no-referrer"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out-expo scale-100 group-hover:scale-105"
      />

      {/* Dark overlay for text readability and premium look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-left text-[#FAF8F5]">
        
        {/* Count badge */}
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A96B] mb-2">
          {count} Curated Pieces
        </span>

        {/* Category Title */}
        <h3 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide mb-3 text-[#FAF8F5] group-hover:text-[#C8A96B] transition-colors">
          {name}
        </h3>

        {/* Category Description */}
        <p className="text-xs text-[#FAF8F5]/80 leading-relaxed max-w-sm mb-6 opacity-85 group-hover:opacity-100 transition-opacity">
          {description}
        </p>

        {/* Elegant action link */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C8A96B] group-hover:text-[#FAF8F5] transition-all">
          <span>Explore Collection</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}
