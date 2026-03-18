import React from 'react';
import Link from 'next/link';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex flex-col items-center group transition-all duration-700 ${className}`}>
      <div className="relative w-20 h-20 md:w-24 md:h-24 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
        <img
          src="/logo_v3.png"
          alt="PRANAVIKA'S Monogram"
          className="w-full h-full object-contain filter drop-shadow-sm transition-opacity duration-1000 group-hover:opacity-90"
        />
        {/* Subtle Artisan Glow */}
        <div className="absolute inset-0 bg-primary/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full scale-75 -z-10" />
      </div>
    </Link>
  );
};
