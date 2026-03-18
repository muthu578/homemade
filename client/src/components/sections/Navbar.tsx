import React from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Menu, Search } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/boutique" className="text-secondary font-serif font-medium hover:text-primary transition-colors">Boutique</Link>
            <Link href="/bakery" className="text-secondary font-serif font-medium hover:text-primary transition-colors">Bakery</Link>
            <Link href="/homemade" className="text-secondary font-serif font-medium hover:text-primary transition-colors">Homemade</Link>
            <Link href="/blog" className="text-secondary font-serif font-medium hover:text-primary transition-colors">Blog</Link>
          </div>

          {/* Icon Actions */}
          <div className="flex items-center space-x-5">
            <button className="p-2.5 rounded-full hover:bg-muted text-secondary/70 hover:text-secondary transition-all">
              <Search className="w-5 h-5 shadow-sm" />
            </button>
            <button className="p-2.5 rounded-full hover:bg-muted text-secondary/70 hover:text-secondary transition-all relative">
              <ShoppingCart className="w-5 h-5 shadow-sm" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-primary text-secondary text-[10px] font-bold rounded-full flex items-center justify-center border border-background shadow-xs">
                2
              </span>
            </button>
            <button className="p-2.5 rounded-full hover:bg-muted text-secondary/70 hover:text-secondary transition-all">
              <User className="w-5 h-5 shadow-sm" />
            </button>
            <button className="md:hidden p-2.5 rounded-full hover:bg-muted text-secondary/70 hover:text-secondary transition-all">
              <Menu className="w-5 h-5 shadow-sm" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
