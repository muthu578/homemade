"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Star, Check, ShieldCheck, Gift, Sparkles } from 'lucide-react';
import { Navbar } from '../../../components/sections/Navbar';
import { Footer } from '../../../components/sections/Footer';

// Mock gift data - simplified for [id] route
const giftHampers = [
  { id: 1, name: "SHOW IT OFF", category: "Anniversary", price: 4800, tag: "Limelight Surprise", img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/showitoff3.jpg?v=1719503711", desc: "A life-size banner reveal amidst a crowd to make your loved one feel like a star.", rating: 4.9 },
  { id: 11, name: "CUSTOMIZED MAGAZINE", category: "Personalized", price: 1249, tag: "Bespoke Read", img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/12x16Magazine.jpg?v=1717869848", desc: "An entire magazine customized for your love story, making them the cover star.", rating: 4.9 },
  // ... add more if needed, or find from main list
];

export default function GiftProductPage() {
   const params = useParams();
   const id = Number(params.id);
   const [added, setAdded] = useState(false);

   // Fallback to item 11 (Magazine) if not found since it's the one in the user screenshot
   const product = giftHampers.find(p => p.id === id) || giftHampers[1];

   const handleAddToCart = () => {
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
   };

   return (
      <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24]">
         <Navbar />

         <section className="pt-24 md:pt-32 pb-12 md:pb-20">
            <div className="max-w-[1500px] mx-auto px-6 md:px-10">

               <Link href="/gifts" className="inline-flex items-center gap-2 text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 hover:text-[#ff4d6d] transition-colors mb-8 md:mb-12">
                  <ArrowLeft className="w-4 h-4" /> Back to Gift Palace
               </Link>

               <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Gallery */}
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="aspect-square max-h-[500px] md:max-h-none rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-soft border border-[#1a1c24]/5 bg-white p-4 mx-auto lg:mx-0 w-full"
                  >
                     <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000" />
                  </motion.div>

                  {/* Content Sidebar */}
                  <div className="space-y-8 md:space-y-12 text-center lg:text-left">
                     <div className="space-y-4">
                        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4">
                           <span className="px-5 py-2 bg-white rounded-full text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] text-[#ff4d6d] shadow-sm border border-[#ff4d6d]/10 italic">{product.category} Palace Ritual</span>
                           <div className="flex gap-1 text-[#ff4d6d]">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                           </div>
                           <span className="text-[10px] font-outfit font-black text-[#1a1c24]/20 uppercase tracking-widest">{product.rating}</span>
                        </div>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black leading-tight text-[#1a1c24] italic">{product.name}</h1>
                        <div className="flex items-baseline justify-center lg:justify-start gap-4">
                           <p className="text-3xl md:text-5xl font-fraunces font-black text-[#bfa37e] italic">₹{product.price.toLocaleString()}</p>
                           <span className="text-[10px] md:text-xs font-outfit font-black text-[#1a1c24]/15 uppercase tracking-[0.4em] italic">Combo Value</span>
                        </div>
                     </div>

                     <p className="text-base md:text-xl font-outfit text-[#1a1c24]/40 italic leading-relaxed max-w-xl mx-auto lg:mx-0">
                        " {product.desc} "
                     </p>

                     {/* Quality Tags */}
                     <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4">
                        {[
                           { icon: Gift, label: 'Bespoke Curation' },
                           { icon: Sparkles, label: 'Hand-picked Artifacts' },
                           { icon: ShieldCheck, label: 'Artisan Quality' }
                        ].map((pill, i) => (
                           <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#1a1c24]/5 shadow-sm text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/40">
                              <pill.icon className="w-4 h-4 text-[#ff4d6d]/40" />
                              {pill.label}
                           </div>
                        ))}
                     </div>

                     {/* Actions */}
                     <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-[#1a1c24]/5">
                        <button
                           onClick={handleAddToCart}
                           className={`flex-1 py-7 md:py-9 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] transition-all duration-700 shadow-2xl flex items-center justify-center gap-4 ${added ? 'bg-green-600 text-white' : 'bg-[#1a1c24] text-white hover:bg-[#ff4d6d]'}`}
                        >
                           {added ? <Check className="w-6 h-6" /> : <ShoppingBag className="w-6 h-6" />}
                           {added ? 'Added to Vault' : 'Manifest & Order'}
                        </button>
                        <button className="w-full sm:w-24 h-14 sm:h-auto border-2 border-[#1a1c24]/5 rounded-full flex items-center justify-center hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] transition-all">
                           <Heart className="w-6 h-6" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </main>
   );
}
