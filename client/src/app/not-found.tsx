"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Compass, Map, Search } from 'lucide-react';
import { Navbar } from '../components/sections/Navbar';
import { Footer } from '../components/sections/Footer';

export default function Custom404() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24] flex flex-col justify-between overflow-hidden relative">
      <Navbar />

      <section className="flex-1 pt-40 pb-20 px-10 flex flex-col items-center justify-center text-center relative z-10">
        {/* Background elements */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-[#bfa37e]/10 rounded-full blur-[100px] -z-0" />

        <div className="max-w-3xl space-y-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Lost Artisan</span>
            <h1 className="text-[8rem] md:text-[15rem] font-fraunces font-black leading-none italic opacity-5 select-none absolute -top-40 left-1/2 -translate-x-1/2 -z-0">404</h1>
            <h2 className="text-5xl md:text-8xl font-fraunces font-black leading-tight">
               Page <span className="italic font-normal">Misplaced.</span>
            </h2>
            <p className="text-xl font-outfit text-[#1a1c24]/40 leading-relaxed max-w-xl mx-auto italic">
               The piece you're looking for was never woven, or it may have been moved to another atelier.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { icon: Home, label: 'Palace Home', href: '/' },
               { icon: Compass, label: 'The Boutique', href: '/boutique' },
               { icon: Map, label: 'Artisan Story', href: '/our-story' },
               { icon: Search, label: 'Find a Piece', href: '/search' }
             ].map((link, i) => (
                <Link 
                   key={link.label} 
                   href={link.href}
                   className="p-8 bg-white border border-[#1a1c24]/5 rounded-[2.5rem] shadow-soft hover:shadow-xl hover:-translate-y-2 transition-all group"
                >
                   <div className="w-10 h-10 bg-[#fbf9f6] rounded-2xl flex items-center justify-center text-[#ff4d6d]/40 group-hover:bg-[#ff4d6d] group-hover:text-white transition-all mx-auto mb-4">
                      <link.icon className="w-4 h-4" />
                   </div>
                   <span className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/40 group-hover:text-[#1a1c24]">{link.label}</span>
                </Link>
             ))}
          </div>

          <div className="mt-20">
             <Link href="/" className="px-14 py-6 bg-[#1a1c24] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl inline-block">
                Return to Palace Bag
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
