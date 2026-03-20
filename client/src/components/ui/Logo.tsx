import React from 'react';
import Link from 'next/link';

export const Logo = ({ className = "", isFooter = false }: { className?: string, isFooter?: boolean }) => {
  return (
    <Link href="/" className={`flex items-center group transition-all duration-500 ${isFooter ? 'gap-2 md:gap-3' : 'gap-4 md:gap-5'} ${className}`}>
      {/* Icon Part */}
      <div className={`relative flex-shrink-0 group-hover:rotate-2 transition-transform duration-700 ${isFooter ? 'h-12 w-12 md:h-14 md:w-14' : 'h-20 w-20 md:h-20 md:w-20'}`}>
        <img
          src="/mascot.png"
          alt="Pranvika Creations"
          className="h-full w-full object-contain rounded-full shadow-sm group-hover:shadow-md transition-all border border-[#8b735b]/10 bg-white"
        />
        {/* Subtle Artisan Glow */}
        <div className="absolute inset-0 bg-[#efb5b5]/10 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-110 -z-10" />
      </div>

      {/* Brand Text Identity */}
      <div className={`flex flex-col justify-center select-none ${isFooter ? 'pt-1' : 'pt-2'}`}>
        <div className="flex items-baseline gap-1.5 md:gap-2">
          <span className={`${isFooter ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'} font-dancing-script font-bold text-[#5c4a3a] group-hover:text-primary transition-colors`}>
            Pranvika's
          </span>
          <span className={`${isFooter ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'} font-dancing-script font-medium text-[#efb5b5] group-hover:text-[#ff4d6d] transition-colors`}>
            Creations
          </span>
        </div>
        <div className={`${isFooter ? 'mt-0.5' : 'mt-1'} px-1`}>
          <span className={`${isFooter ? 'text-[7px] md:text-[8px]' : 'text-[11px] md:text-[8px]'} font-outfit font-black text-[#efb5b5] tracking-[0.45em] md:tracking-[0.6em] uppercase block group-hover:text-[#ff4d6d] transition-colors`}>
            Boutique · Bakery · Gifts · Homemade
          </span>
        </div>
      </div>
    </Link>
  );
};

