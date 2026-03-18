"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Star, Check, ShieldCheck, Leaf, Flame, Droplets } from 'lucide-react';
import { Navbar } from '../../../components/sections/Navbar';
import { Footer } from '../../../components/sections/Footer';

// Mock homemade data
const products = [
   { id: 1, name: 'Traditional Mysore Pak', category: 'Traditional Sweets', price: 450, unit: '500g', img: 'https://vellankifoods.com/cdn/shop/files/mysore_pak_1024x1024.jpg?v=1680179124', desc: 'Authentic Mysore Pak made with pure ghee and high-quality gram flour, melting in your mouth with every bite.' },
   { id: 17, name: 'Special Mango Thokku', category: 'Pickles & Pastes', price: 220, unit: '250g', img: 'https://vellankifoods.com/cdn/shop/files/allam_mamidi_ginger_mango_pickle_a1459065-18d2-461b-9fc7-f82febc74c5c_1024x1024.jpg?v=1689761372', desc: 'Handcrafted spicy mango thokku made with seasonal raw mangoes and traditional spices. No artificial preservatives.' },
   { id: 9, name: 'Spicy Karaboondhi', category: 'Spicy Snacks', price: 180, unit: '250g', img: 'https://vellankifoods.com/cdn/shop/files/karaboondhi_1024x1024.jpg?v=1680179856', desc: 'Crunchy and spicy boondhi loaded with curry leaves and peanuts, a perfect companion for your tea time.' },
];

export default function HomemadeProductPage() {
   const params = useParams();
   const id = Number(params.id);
   const [added, setAdded] = useState(false);

   const product = products.find(p => p.id === id) || products[0];

   const handleAddToCart = () => {
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
   };

   return (
      <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24]">
         <Navbar />

         <section className="pt-24 md:pt-32 pb-12 md:pb-20">
            <div className="max-w-[1500px] mx-auto px-6 md:px-10">

               <Link href="/homemade" className="inline-flex items-center gap-2 text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 hover:text-[#ff4d6d] transition-colors mb-8 md:mb-12">
                  <ArrowLeft className="w-4 h-4" /> Back to Homemade
               </Link>

               <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Gallery */}
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="aspect-square max-h-[400px] md:max-h-none rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-soft border border-[#1a1c24]/5 bg-white p-8 md:p-12 mx-auto lg:mx-0 w-full"
                  >
                     <img src={product.img} alt={product.name} className="w-full h-full object-contain transition-transform duration-1000" />
                  </motion.div>

                  {/* Content Sidebar */}
                  <div className="space-y-8 md:space-y-12 text-center lg:text-left">
                     <div className="space-y-4">
                        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3">
                           <span className="px-4 py-1.5 bg-[#1a1c24]/5 text-[#1a1c24]/60 text-[9px] font-outfit font-black uppercase tracking-widest rounded-full">{product.category} Palace</span>
                           <div className="flex gap-0.5 text-[#ff4d6d]">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                           </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-fraunces font-black leading-tight text-[#1a1c24]">{product.name}</h1>
                        <div className="flex items-baseline justify-center lg:justify-start gap-4">
                           <p className="text-2xl md:text-3xl font-fraunces font-black text-[#1a1c24]/80">₹{product.price.toLocaleString()}</p>
                           <span className="text-xs md:text-sm font-outfit text-[#1a1c24]/20 uppercase tracking-[0.2em]">/ {product.unit}</span>
                        </div>
                     </div>

                     <p className="text-base md:text-lg font-outfit text-[#1a1c24]/50 leading-relaxed max-w-xl mx-auto lg:mx-0 italic">
                        "{product.desc}"
                     </p>

                     {/* Health & Quality Tags */}
                     <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4">
                        {[
                           { icon: Leaf, label: '100% Homemade' },
                           { icon: Flame, label: 'No Preservatives' },
                           { icon: Droplets, label: 'Pure Ghee Used' },
                           { icon: ShieldCheck, label: 'FSSAI Certified' }
                        ].map((pill, i) => (
                           <div key={i} className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-white border border-[#1a1c24]/5 shadow-sm text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/40 hover:border-[#ff4d6d] transition-all cursor-default">
                              <pill.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ff4d6d]/40" />
                              {pill.label}
                           </div>
                        ))}
                     </div>

                     {/* Actions */}
                     <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#1a1c24]/5">
                        <button
                           onClick={handleAddToCart}
                           className={`flex-[2] py-5 md:py-6 rounded-full font-bold text-sm transition-all shadow-2xl flex items-center justify-center gap-3 ${added ? 'bg-green-500 text-white' : 'bg-[#1a1c24] text-white hover:scale-[1.02]'}`}
                        >
                           {added ? <><Check className="w-5 h-5" /> Added to Case</> : <><ShoppingBag className="w-5 h-5" /> Add to Gourmet Box</>}
                        </button>
                        <button className="h-14 md:h-18 px-8 md:px-10 border-2 border-[#1a1c24]/5 rounded-full flex items-center justify-center hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] transition-all">
                           <Heart className="w-6 h-6" />
                        </button>
                     </div>

                     <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 flex items-center justify-center lg:justify-start gap-3">
                        <ShieldCheck className="w-4 h-4" /> Traditional Artisan Standards
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Origin Story */}
         <section className="py-16 md:py-24 bg-white border-y border-[#1a1c24]/5">
            <div className="max-w-[1500px] mx-auto px-6 md:px-10">
               <div className="max-w-3xl mx-auto text-center space-y-8 md:space-y-12">
                  <h3 className="text-2xl md:text-3xl font-fraunces font-bold italic text-[#bfa37e]">The Recipe Story</h3>
                  <p className="text-base md:text-lg font-outfit text-[#1a1c24]/50 leading-relaxed max-w-2xl mx-auto italic font-medium">
                     "Our {product.name} is prepared using a three-generation old recipe from our founder's family kitchen in Tirunelveli. Every batch is handmade in small quantities to ensure that the aroma and taste remain exactly like home."
                  </p>
                  <div className="w-px h-16 md:h-20 bg-gradient-to-b from-[#bfa37e] to-transparent mx-auto" />
               </div>
            </div>
         </section>

         <Footer />
      </main>
   );
}
