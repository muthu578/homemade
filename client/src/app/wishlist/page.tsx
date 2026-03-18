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

      <section className="pt-32 pb-20">
        <div className="max-w-[1500px] mx-auto px-10">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Personal Collection</span>
              <h1 className="text-5xl md:text-7xl font-fraunces font-black">My Wishlist.</h1>
            </div>
            <p className="text-xl font-fraunces font-bold text-[#bfa37e]">{items.length} Artisan Pieces</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
               {items.length > 0 ? items.map((item) => (
                 <motion.div
                   key={item.id}
                   layout
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9, x: -20 }}
                   className="group bg-white rounded-[3rem] overflow-hidden shadow-soft border border-[#1a1c24]/5"
                 >
                   <div className="relative aspect-square overflow-hidden bg-[#f0ede8]">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute top-6 left-6 flex gap-2">
                         <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2">
                            {item.type === 'fashion' ? <Scissors className="w-3 h-3 text-[#ff4d6d]" /> : <UtensilsCrossed className="w-3 h-3 text-[#bfa37e]" />}
                            <span className="text-[9px] font-outfit font-black uppercase tracking-widest">{item.category}</span>
                         </div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1a1c24]/30 hover:bg-black hover:text-white transition-all shadow-lg"
                      >
                         <Trash2 className="w-4 h-4" />
                      </button>
                   </div>
                   
                   <div className="p-10 space-y-6">
                      <div className="space-y-2">
                         <h3 className="text-2xl font-fraunces font-bold group-hover:text-[#ff4d6d] transition-colors">{item.name}</h3>
                         <p className="text-xl font-fraunces font-black text-[#1a1c24]/70">₹{item.price.toLocaleString()}</p>
                      </div>
                      
                      <div className="flex gap-4">
                         <button className="flex-[3] py-5 bg-[#1a1c24] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3">
                            Move to Bag <ShoppingBag className="w-4 h-4" />
                         </button>
                         <Link href={`/${item.category.toLowerCase()}/${item.id}`} className="flex-1 py-5 border border-[#1a1c24]/10 text-[#1a1c24]/40 rounded-full flex items-center justify-center hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all">
                            View
                         </Link>
                      </div>
                   </div>
                 </motion.div>
               )) : (
                 <div className="lg:col-span-3 py-40 text-center space-y-8">
                    <div className="w-24 h-24 bg-[#ff4d6d]/5 text-[#ff4d6d]/20 rounded-full flex items-center justify-center mx-auto">
                       <Heart className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                       <h2 className="text-3xl font-fraunces font-bold text-[#1a1c24]">Your wishlist is a blank silk.</h2>
                       <p className="font-outfit text-[#1a1c24]/30">Explore our palace to find something that enchants you.</p>
                    </div>
                    <Link href="/" className="inline-flex items-center gap-3 px-10 py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl">
                       Start Exploring <ArrowLeft className="w-5 h-5 rotate-180" />
                    </Link>
                 </div>
               )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
