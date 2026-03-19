import React from 'react';
import Link from 'next/link';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center gap-3 md:gap-4 group transition-all duration-500 ${className}`}>
      {/* Icon Part */}
      <div className="relative h-12 w-12 md:h-16 md:w-16 flex-shrink-0 group-hover:rotate-3 transition-transform duration-700">
        <img
          src="/mascot.png"
          alt="Pranvika Creations"
          className="h-full w-full object-contain rounded-full shadow-sm group-hover:shadow-md transition-all border border-[#8b735b]/10 bg-white"
        />
        {/* Subtle Artisan Glow */}
        <div className="absolute inset-0 bg-[#efb5b5]/10 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-110 -z-10" />
      </div>

      {/* Brand Text Part */}
      <div className="flex flex-col justify-center select-none pt-1">
        <div className="flex flex-col -space-y-1.5 md:-space-y-3">
          <span className="text-xl md:text-3xl font-fraunces font-black leading-tight tracking-tight text-[#4a3f35] group-hover:text-primary transition-colors">
            Pranvika
          </span>
          <span className="text-lg md:text-2xl font-dancing-script font-bold text-[#efb5b5] group-hover:text-[#ff4d6d] transition-colors ml-4 md:ml-6">
            Creations
          </span>
        </div>
        <span className="text-[7px] md:text-[9px] font-outfit font-bold text-[#4a3f35]/30 tracking-[0.25em] uppercase mt-2 hidden lg:block group-hover:text-[#efb5b5] transition-colors">
          Boutique · Bakery · Gifts · Homemade
        </span>
      </div>
    </Link>
  );
};

