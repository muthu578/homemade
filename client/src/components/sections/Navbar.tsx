"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'BOUTIQUE', href: '/boutique' },
    { name: 'BAKERY', href: '/bakery' },
    { name: 'HOMEMADE', href: '/homemade' },
    { name: 'GIFTS', href: '/gifts' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/80 backdrop-blur-md py-2 border-b border-border/10">
        <div className="max-w-[1800px] mx-auto px-4 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-1 min-w-0 pr-2">
            <Logo className="scale-75 md:scale-100 origin-left" />
          </div>

          {/* Center: Navigation (Desktop) */}
          <div className="hidden lg:flex items-center justify-center space-x-12 flex-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="group relative">
                <span className="text-xs font-outfit font-bold tracking-[0.25em] text-[#bfa37e] group-hover:text-primary transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-1 md:space-x-8 flex-shrink-0">
            {/* <Link href="/search" className="hidden md:flex p-2 text-secondary/60 hover:text-primary transition-all hover:scale-110">
              <Search className="w-5 h-5 stroke-[1.5]" />
            </Link> */}
            <Link href="/profile" className="hidden md:flex p-2 text-secondary/60 hover:text-primary transition-all hover:scale-110">
              <User className="w-5 h-5 stroke-[1.5]" />
            </Link>
            <Link href="/cart" className="relative group p-2 transition-all hover:scale-110 flex items-center">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 stroke-[1.2] text-secondary/60 group-hover:text-primary transition-colors" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#efb5b5] text-[8px] font-black text-white rounded-full flex items-center justify-center border border-white">
                2
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#5c4a3a] hover:text-primary transition-colors relative z-50 ml-1"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden bg-background pt-24 px-10 pb-10 flex flex-col"
          >
            <div className="flex flex-col space-y-6 overflow-y-auto no-scrollbar pb-20">
              {/* Extra Mobile Actions */}
              <div className="flex items-center gap-6 pb-8 border-b border-border/10">
                <Link href="/search" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-secondary/60">
                  <Search className="w-5 h-5" />
                  <span className="text-xs font-bold font-outfit tracking-widest uppercase">Search</span>
                </Link>
                <Link href="/profile" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-secondary/60">
                  <User className="w-5 h-5" />
                  <span className="text-xs font-bold font-outfit tracking-widest uppercase">Account</span>
                </Link>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between py-2 group"
                  >
                    <span className="text-3xl font-dancing-script font-bold text-[#5c4a3a] group-hover:text-[#efb5b5] transition-colors">{link.name}</span>
                    <ArrowRight className="w-5 h-5 text-[#efb5b5] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 mt-auto pt-6">
              <Link
                href="/support"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-3 p-4 bg-[#efb5b5]/5 rounded-2xl border border-[#efb5b5]/10"
              >
                <div className="w-10 h-10 rounded-full bg-[#efb5b5]/10 flex items-center justify-center text-[#efb5b5]">
                  <Menu className="w-5 h-5" />
                </div>
                <span className="font-outfit font-bold text-sm text-[#5c4a3a]">Help Center</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
