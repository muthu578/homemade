"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, ArrowLeft, Trash2, Scissors, UtensilsCrossed, Package } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

export default function WishlistPage() {
  const [items, setItems] = useState([
    { id: 1, name: 'Sanjna Rose Red Gown', category: 'Boutique', price: 12500, img: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800', type: 'fashion' },
    { id: 2, name: 'Lotus Biscoff Cake', category: 'Bakery', price: 1200, img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800', type: 'food' },
    { id: 3, name: 'Traditional Mysore Pak', category: 'Homemade', price: 450, img: 'https://images.pexels.com/photos/6152261/pexels-photo-6152261.jpeg?auto=compress&cs=tinysrgb&w=800', type: 'food' },
  ]);

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24]">
      <Navbar />

      <section className="pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(220,176,175,0.1),transparent_70%)] relative">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[150px] -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[100px] -z-0 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          
          <div className="flex flex-col md:flex-row items-center md:items-baseline justify-between mb-12 md:mb-20 gap-6 md:gap-8 text-center md:text-left">
            <div className="space-y-4 w-full">
              <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] block italic">Personal Collection</span>
              <h1 className="text-3xl md:text-5xl lg:text-[84px] font-fraunces font-black text-[#1a1c24] leading-tight italic">My <span className="italic font-normal text-[#bfa37e]">Wishlist.</span></h1>
            </div>
            <p className="text-xl md:text-2xl font-fraunces font-black text-[#bfa37e] italic whitespace-nowrap lg:ml-auto w-full md:w-auto">{items.length} Artisan Pieces</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <AnimatePresence mode="popLayout">
               {items.length > 0 ? items.map((item) => (
                 <motion.div
                   key={item.id}
                   layout
                   initial={{ opacity: 0, scale: 0.95, y: 30 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.9, y: 20 }}
                   transition={{ duration: 0.5 }}
                   className="group bg-white rounded-[3rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
                 >
                   {/* Image Container */}
                   <div className="relative aspect-[4/5] overflow-hidden bg-[#f0ede8] flex-shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                      
                      {/* Gradient overlay on mobile */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:hidden opacity-0" />

                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 flex gap-2">
                         <div className="px-4 py-2 bg-white/95 backdrop-blur-2xl rounded-full flex items-center gap-2 shadow-sm border border-[#1a1c24]/5">
                            {item.type === 'fashion' ? <Scissors className="w-3.5 h-3.5 text-[#ff4d6d]" /> : <UtensilsCrossed className="w-3.5 h-3.5 text-[#bfa37e]" />}
                            <span className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24] italic">{item.category}</span>
                         </div>
                      </div>

                      {/* Remove Button */}
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur-2xl rounded-full flex items-center justify-center text-[#1a1c24]/30 hover:bg-black hover:text-white transition-all shadow-md active:scale-90 border border-[#1a1c24]/5 group/trash"
                      >
                         <Trash2 className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/trash:scale-110 group-hover/trash:-rotate-12" />
                      </button>
                      
                      {/* Hover Overlay for desktop */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block" />
                   </div>
                   
                   {/* Info Area */}
                   <div className="p-8 md:p-10 space-y-8 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                         <h3 className="text-2xl md:text-3xl font-fraunces font-black text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors leading-tight line-clamp-2 italic">{item.name}</h3>
                         <div className="flex items-center justify-between group-hover:px-2 transition-all">
                            <span className="text-xl md:text-2xl font-fraunces font-black text-[#1a1c24] italic">₹{item.price.toLocaleString()}</span>
                            <span className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-green-600 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/10 italic">In Stock</span>
                         </div>
                      </div>
                      
                      {/* Action Grid */}
                      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 border-t border-[#1a1c24]/5">
                         <button className="flex-[2] py-5 md:py-6 bg-[#1a1c24] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-[#ff4d6d] hover:scale-105 transition-all shadow-xl shadow-[#1a1c24]/10 active:scale-95 flex items-center justify-center gap-3 italic">
                            Add to Bag <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                         </button>
                         <Link href={`/${item.category.toLowerCase()}/${item.id}`} className="flex-1 py-5 md:py-6 border-2 border-[#1a1c24]/5 bg-[#fbf9f6] text-[#1a1c24]/60 rounded-full flex items-center justify-center hover:bg-white hover:border-[#1a1c24]/20 hover:text-[#ff4d6d] transition-all active:scale-95 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] italic">
                            View
                         </Link>
                      </div>
                   </div>
                 </motion.div>
               )) : (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="col-span-1 sm:col-span-2 lg:col-span-3 py-12 md:py-20 text-center space-y-10 md:space-y-14 bg-white rounded-[3.5rem] md:rounded-[4rem] shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 px-6 mx-auto w-full max-w-4xl"
                 >
                    <div className="w-32 md:w-40 h-32 md:h-40 bg-[#fbf9f6] text-[#1a1c24]/10 rounded-full flex items-center justify-center mx-auto shadow-inner">
                       <Heart className="w-16 h-16 md:w-20 md:h-20" />
                    </div>
                    <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto">
                       <h2 className="text-4xl md:text-6xl font-fraunces font-black text-[#1a1c24] italic leading-tight">A blank <span className="italic font-normal text-[#bfa37e]">silk.</span></h2>
                       <p className="font-outfit text-base md:text-xl text-[#1a1c24]/30 leading-relaxed italic font-medium">"Your wishlist is currently dreaming of artisan treasures. Explore the atelier to find something that enchants you."</p>
                    </div>
                    <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
                       <Link href="/boutique" className="group inline-flex items-center justify-center gap-4 px-12 md:px-14 py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-[0_30px_60px_rgba(26,28,36,0.15)] active:scale-95 w-full sm:w-auto italic">
                          Explore Boutique <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-2 transition-transform" />
                       </Link>
                       <Link href="/bakery" className="group inline-flex items-center justify-center gap-4 px-12 md:px-14 py-6 md:py-8 border-2 border-[#1a1c24]/5 bg-[#fbf9f6] text-[#1a1c24]/60 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-white hover:border-[#1a1c24]/20 hover:text-[#ff4d6d] transition-all active:scale-95 w-full sm:w-auto italic text-center">
                          Taste Bakery
                       </Link>
                    </div>
                 </motion.div>
               )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
