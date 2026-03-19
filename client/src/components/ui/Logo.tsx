import React from 'react';
import Link from 'next/link';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center gap-4 group transition-all duration-700 ${className}`}>
      {/* Icon Wrapper */}
      <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 group-hover:rotate-6 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
        <img
          src="/pranavika_logo.png"
          alt="PRANAVIKA'S Monogram"
          className="w-full h-full object-contain filter drop-shadow-sm transition-opacity duration-1000 group-hover:opacity-90 grayscale group-hover:grayscale-0"
        />
        {/* Subtle Artisan Glow */}
        <div className="absolute inset-0 bg-[#dcb0af]/20 blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full scale-125 -z-10" />
      </div>

      {/* Brand Text Wrapper */}
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-fraunces font-black leading-none tracking-tight text-[#2d241c] group-hover:text-[#ff4d6d] transition-colors duration-500">
          PRANAVIKA’S
        </span>
        {/* <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] mt-1 leading-none">
          Sweet & Chic
        </span> */}
        <span className="text-[12px] font-outfit font-medium text-[#2d241c]/40 tracking-[0.1em] mt-1 lowercase hidden md:block italic">
          Fashion · Cakes · Homemade · Gifts
        </span>
      </div>

    </Link>
  );
};

