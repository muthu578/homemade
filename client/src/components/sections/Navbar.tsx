"use client";
import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/80 backdrop-blur-md py-2 border-b border-border/10">
      <div className="max-w-[1800px] mx-auto px-10 flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Logo />
        </div>

        {/* Center: Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-12 flex-1">
          {['BOUTIQUE', 'BAKERY', 'HOMEMADE'].map((link) => (
            <Link key={link} href={`/${link.toLowerCase()}`} className="group relative">
              <span className="text-xs font-outfit font-bold tracking-[0.25em] text-[#bfa37e] group-hover:text-primary transition-colors">
                {link}
              </span>
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-8 flex-shrink-0">
          <button className="text-secondary/60 hover:text-primary transition-all hover:scale-110">
             <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="text-secondary/60 hover:text-primary transition-all hover:scale-110">
             <User className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="relative group p-2">
             <ShoppingBag className="w-6 h-6 stroke-[1.2] text-secondary/60 group-hover:text-primary transition-colors" />
             <span className="absolute top-0 right-1 w-4 h-4 bg-[#ff4d6d] text-[9px] font-black text-white rounded-full flex items-center justify-center border-2 border-background">
                2
             </span>
          </button>
          <button className="lg:hidden p-2 text-secondary">
             <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};
