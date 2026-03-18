"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ShoppingBag, Filter, X } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

const mockResults = [
  { id: 1, name: 'Lotus Biscoff Cake', category: 'Bakery', price: 1200, img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Kanchi Silk Saree', category: 'Boutique', price: 7960, img: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'Mango Thokku Pickle', category: 'Homemade', price: 220, img: 'https://images.pexels.com/photos/6152261/pexels-photo-6152261.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(mockResults);

  return (
    <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-[1800px] mx-auto px-10">
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto space-y-12 mb-20">
            <div className="text-center space-y-4">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Global Search</span>
              <h1 className="text-5xl md:text-7xl font-fraunces font-black text-[#1a1c24]">Artisan Discoveries.</h1>
            </div>

            <div className="relative group">
              <div className="absolute inset-x-0 -bottom-2 h-10 bg-[#ff4d6d]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-[#1a1c24]/20 group-hover:text-[#ff4d6d] transition-colors" />
              <input 
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}
                 placeholder="Search cakes, sarees, pickles..."
                 className="w-full pl-20 pr-32 py-8 rounded-[2.5rem] bg-white border border-[#1a1c24]/5 text-xl font-fraunces text-[#1a1c24] placeholder-[#1a1c24]/20 shadow-[0_10px_60px_rgba(0,0,0,0.04)] focus:outline-none focus:border-[#ff4d6d]/40 transition-all font-bold"
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#1a1c24]/10 flex items-center justify-center hover:bg-[#ff4d6d] hover:text-white transition-all shadow-md">
                   <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
               {['Sarees', 'Cakes', 'Pickles', 'Silk', 'Macarons', 'Gifts'].map(tag => (
                 <button key={tag} onClick={() => setQuery(tag)} className="px-6 py-2.5 rounded-full border border-[#1a1c24]/10 text-xs font-outfit font-bold text-[#1a1c24]/40 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all">
                   {tag}
                 </button>
               ))}
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-12 border-b border-[#1a1c24]/5 pb-8">
             <h2 className="text-2xl font-fraunces font-bold text-[#1a1c24]">
                {query ? `Search results for "${query}"` : 'Recent Artisan Curations'}
             </h2>
             <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#1a1c24]/10 rounded-full text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/40 hover:text-[#ff4d6d] transition-colors">
                <Filter className="w-3 h-3" /> Filter Results
             </button>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
             <AnimatePresence>
                {results.map((r, i) => (
                  <motion.div 
                     key={r.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.05 }}
                     className="group space-y-4"
                  >
                     <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-soft border border-[#1a1c24]/5">
                        <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[8px] font-outfit font-black uppercase tracking-widest text-[#1a1c24] shadow-sm">
                           {r.category}
                        </div>
                     </div>
                     <div className="space-y-1 px-2">
                        <h3 className="font-fraunces font-bold text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors">{r.name}</h3>
                        <div className="flex items-center justify-between">
                           <span className="font-fraunces font-black text-[#1a1c24] text-lg">₹{r.price.toLocaleString()}</span>
                           <button className="w-8 h-8 rounded-full bg-[#1a1c24] text-white flex items-center justify-center hover:bg-[#ff4d6d] transition-all shadow-md group-hover:translate-x-1">
                              <ShoppingBag className="w-3.5 h-3.5" />
                           </button>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </AnimatePresence>
          </div>

          <div className="mt-24 text-center py-20 bg-white rounded-[4rem] shadow-[0_10px_60px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5">
             <h4 className="text-xl font-fraunces font-bold text-[#1a1c24]/30">Can't find what you're looking for?</h4>
             <p className="text-sm font-outfit text-[#1a1c24]/20 mt-4 max-w-sm mx-auto">We offer custom designs for both boutique and bakery. Let's create something unique together.</p>
             <Link href="/contact" className="inline-flex items-center gap-3 mt-8 text-sm font-outfit font-bold text-[#ff4d6d] hover:underline decoration-2 underline-offset-4">
                Chat with an Artisan <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#fbf9f6] border-t border-[#1a1c24]/5 text-center">
        <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20">© 2026 PRANAVIKA'S Sweet & Chic — Discover Artisan</p>
      </footer>
    </main>
  );
}
