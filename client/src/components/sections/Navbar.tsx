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
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          {/* Center: Navigation */}
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
          <div className="flex items-center space-x-4 md:space-x-8 flex-shrink-0">
            <Link href="/search" className="text-secondary/60 hover:text-primary transition-all hover:scale-110">
              <Search className="w-5 h-5 stroke-[1.5]" />
            </Link>
            <Link href="/profile" className="hidden sm:block text-secondary/60 hover:text-primary transition-all hover:scale-110">
              <User className="w-5 h-5 stroke-[1.5]" />
            </Link>
            <Link href="/cart" className="relative group p-2 transition-all hover:scale-110">
              <ShoppingBag className="w-6 h-6 stroke-[1.2] text-secondary/60 group-hover:text-primary transition-colors" />
              <span className="absolute top-0 right-1 w-4 h-4 bg-[#ff4d6d] text-[9px] font-black text-white rounded-full flex items-center justify-center border-2 border-background">
                2
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
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
            className="fixed inset-0 z-40 lg:hidden bg-background pt-24 px-10 pb-10 flex flex-col justify-between"
          >
            <div className="space-y-8">
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
                    className="flex items-center justify-between py-4 group"
                  >
                    <span className="text-3xl font-fraunces font-bold text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors">{link.name}</span>
                    <ArrowRight className="w-6 h-6 text-[#ff4d6d] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-auto">
              <Link
                href="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#1a1c24]/5"
              >
                <div className="w-10 h-10 rounded-full bg-[#ff4d6d]/5 flex items-center justify-center text-[#ff4d6d]">
                  <User className="w-5 h-5" />
                </div>
                <span className="font-outfit font-bold text-sm">Account</span>
              </Link>
              <Link
                href="/support"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#1a1c24]/5"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Menu className="w-5 h-5" />
                </div>
                <span className="font-outfit font-bold text-sm">Help Center</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
