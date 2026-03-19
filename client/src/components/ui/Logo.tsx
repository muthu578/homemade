import React from 'react';
import Link from 'next/link';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center gap-3 md:gap-4 group transition-all duration-500 ${className}`}>
      {/* Icon Part */}
      <div className="relative h-12 w-12 md:h-16 md:w-16 flex-shrink-0 group-hover:rotate-3 transition-transform duration-700">
        <img
          src="/mascot.png"
          alt="PRANAVIKA Mascot"
          className="h-full w-full object-contain rounded-full shadow-sm group-hover:shadow-md transition-all border border-gold/10"
        />
        {/* Subtle Artisan Glow */}
        <div className="absolute inset-0 bg-[#dcb0af]/10 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-110 -z-10" />
      </div>

      {/* Brand Text Part */}
      <div className="flex flex-col justify-center select-none pt-1">
        <span className="text-xl md:text-2xl font-fraunces font-black leading-[0.7] tracking-wider text-[#2d241c] group-hover:text-primary transition-colors">
          Pranvika Creations
        </span>

        <span className="text-[8px] md:text-[10px] font-outfit font-bold text-[#2d241c]/30 tracking-[0.2em] uppercase mt-1.5 hidden lg:block group-hover:text-[#ff4d6d]/40 transition-colors">
          Boutique · Bakery · Gifts · Homemade
        </span>
      </div>
    </Link>
  );
};

