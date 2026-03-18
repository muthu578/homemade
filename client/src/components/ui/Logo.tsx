import React from 'react';
import Image from 'next/image';

export const Logo = ({ className, showText = true }: { className?: string, showText?: boolean }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-16 h-16 transition-transform hover:scale-105 active:scale-95 duration-500">
        <Image 
          src="/logo.png" 
          alt="Pranavika Monogram" 
          fill 
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col ml-1">
          <span className="text-[1.2rem] font-serif font-black tracking-[0.25em] text-secondary uppercase leading-none">
            PRANAVIKA'S
          </span>
          <span className="text-[1.1rem] text-primary italic font-medium mt-1 leading-none" style={{ fontFamily: 'var(--font-serif)' }}>
            Sweet & Chic
          </span>
        </div>
      )}
    </div>
  );
};
