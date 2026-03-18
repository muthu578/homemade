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

      <section className="pt-32 md:pt-48 pb-20 md:pb-32 relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(220,176,175,0.1),transparent_70%)]">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[150px] -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[100px] -z-0 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          
          {/* Search Bar section */}
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16 mb-20 md:mb-32">
            <div className="text-center space-y-6">
              <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">Global Search</span>
              <h1 className="text-5xl md:text-7xl lg:text-[84px] font-fraunces font-black text-[#1a1c24] leading-[1.05] tracking-tight italic">
                Artisan <span className="italic font-normal text-[#bfa37e]">Discoveries.</span>
              </h1>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="relative group mx-auto max-w-3xl">
                <div className="absolute inset-x-0 -bottom-4 h-12 bg-[#ff4d6d]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <Search className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-[#1a1c24]/20 group-hover:text-[#ff4d6d] transition-colors" />
                <input 
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   placeholder="Search cakes, sarees, pickles..."
                   className="w-full pl-16 md:pl-20 pr-16 md:pr-24 py-5 md:py-8 rounded-[2rem] md:rounded-[3rem] bg-white border border-[#1a1c24]/5 text-lg md:text-2xl font-fraunces text-[#1a1c24] placeholder-[#1a1c24]/20 shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] focus:outline-none focus:border-[#ff4d6d]/30 focus:shadow-[0_30px_80px_rgba(255,77,109,0.1)] transition-all font-bold italic"
                />
                <AnimatePresence>
                  {query && (
                    <motion.button 
                      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => setQuery('')} 
                      className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-[#1a1c24]/40 flex items-center justify-center hover:bg-[#ff4d6d] hover:text-white hover:border-[#ff4d6d] transition-all shadow-sm active:scale-90"
                    >
                       <X className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
                 {['Sarees', 'Cakes', 'Pickles', 'Silk', 'Macarons', 'Gifts'].map(tag => (
                   <button key={tag} onClick={() => setQuery(tag)} className={`px-5 md:px-8 py-2.5 md:py-3.5 rounded-full border text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.3em] transition-all active:scale-95 italic ${query === tag ? 'bg-[#1a1c24] text-white border-[#1a1c24] shadow-xl' : 'bg-white border-[#1a1c24]/5 text-[#1a1c24]/40 hover:border-[#ff4d6d]/40 hover:text-[#ff4d6d] hover:bg-[#ff4d6d]/5 shadow-sm'}`}>
                     {tag}
                   </button>
                 ))}
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 md:mb-16 border-b border-[#1a1c24]/5 pb-6 gap-6">
             <h2 className="text-2xl md:text-4xl font-fraunces font-black text-[#1a1c24] italic">
                {query ? `Search results for "${query}"` : 'Recent Artisan Curations'}
             </h2>
             <button className="flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white border border-[#1a1c24]/10 rounded-full text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/50 hover:text-[#ff4d6d] hover:border-[#ff4d6d]/30 transition-all shadow-sm active:scale-95 w-full sm:w-auto italic group">
                <Filter className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" /> Filter Results
             </button>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10">
             <AnimatePresence mode="popLayout">
                {results.map((r, i) => (
                  <motion.div 
                     key={r.id}
                     layout
                     initial={{ opacity: 0, y: 30, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ delay: i * 0.05, duration: 0.5 }}
                     className="group space-y-4 md:space-y-6"
                  >
                     <div className="aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#1a1c24]/5 group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500">
                        <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,28,36,0.5)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 px-4 md:px-5 py-2 md:py-2.5 bg-white/95 backdrop-blur-2xl rounded-full text-[8px] md:text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24] shadow-md italic">
                           {r.category}
                        </div>
                     </div>
                     <div className="space-y-2 px-2 md:px-4">
                        <h3 className="font-fraunces font-black md:text-xl text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors leading-tight italic line-clamp-1">{r.name}</h3>
                        <div className="flex items-center justify-between">
                           <span className="font-fraunces font-black text-[#1a1c24]/50 text-base md:text-xl italic">₹{r.price.toLocaleString()}</span>
                           <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fbf9f6] text-[#1a1c24] flex items-center justify-center hover:bg-[#ff4d6d] hover:text-white transition-all shadow-sm group-hover:scale-110 group-hover:-rotate-12 active:scale-95 border border-[#1a1c24]/5">
                              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                           </button>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </AnimatePresence>
          </div>

          <div className="mt-24 md:mt-40 text-center py-24 md:py-32 px-6 bg-white rounded-[3.5rem] md:rounded-[4rem] shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#ff4d6d]/5 rounded-full blur-[80px] group-hover:bg-[#ff4d6d]/10 transition-colors duration-1000 -z-0 pointer-events-none" />
             <div className="relative z-10 space-y-6">
               <h4 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24]/40 italic">Can't find what you're looking for?</h4>
               <p className="text-sm md:text-lg font-outfit text-[#1a1c24]/30 max-w-lg mx-auto leading-relaxed italic font-medium">"We offer custom and bespoke designs for both boutique and bakery. Let us weave something unique together."</p>
               <div className="pt-6">
                 <Link href="/contact" className="group/btn inline-flex items-center justify-center gap-4 px-12 md:px-14 py-5 md:py-6 bg-[#1a1c24] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-[#ff4d6d] transition-all shadow-xl active:scale-95 italic text-center w-full sm:w-auto">
                    Consult the Artisan <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-2 transition-transform" />
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-10 md:py-16 bg-[#fbf9f6] border-t border-[#1a1c24]/5 text-center px-6">
        <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#1a1c24]/20 italic line-clamp-1">© 2026 PRANAVIKA'S · Discover Artisan</p>
      </footer>
    </main>
  );
}
