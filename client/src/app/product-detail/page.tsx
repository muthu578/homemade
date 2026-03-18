"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Share2, Ruler, ShieldCheck, Truck, Star } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImg, setActiveImg] = useState(0);

  const product = {
    name: "Classic Kanchi Silk Saree",
    price: 7960,
    rating: 4.8,
    reviews: 124,
    description: "A timeless masterpiece of hand-woven Kanchipuram silk, featuring intricate golden zari work and a deep ruby red finish. Perfect for weddings and festive celebrations.",
    images: [
      'https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393',
      'https://anyaonline.in/cdn/shop/files/1_3d4bcb96-0782-4338-9c5a-1a0740261f36_400x.jpg?v=1757499348',
      'https://anyaonline.in/cdn/shop/files/4_6446979a-1eb8-42f0-9740-10f545465e64_400x.jpg?v=1757499348'
    ],
    details: [
      "Fabric: 100% Pure Mulberry Silk",
      "Work: Hand-woven Golden Zari",
      "Length: 6.2 Meters with Blouse Piece",
      "Care: Dry Clean Only"
    ]
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24]">
      <Navbar />

      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          
          <Link href="/boutique" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 hover:text-[#ff4d6d] transition-colors mb-8 md:mb-12 italic">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Boutique
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Gallery */}
            <div className="space-y-4 md:space-y-6">
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.06)] border border-[#1a1c24]/5"
               >
                  <img src={product.images[activeImg]} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
               </motion.div>
               <div className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-2">
                  {product.images.map((img, i) => (
                    <button 
                       key={i} 
                       onClick={() => setActiveImg(i)}
                       className={`w-20 h-28 md:w-28 md:h-36 flex-shrink-0 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 transition-all duration-300 ${activeImg === i ? 'border-[#ff4d6d] shadow-[0_10px_30px_rgba(255,77,109,0.2)]' : 'border-transparent opacity-60 hover:opacity-100 bg-[#fbf9f6]'}`}
                    >
                       <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
               </div>
            </div>

            {/* Content */}
            <div className="space-y-10 md:space-y-12 py-4 md:py-6">
               <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="flex gap-1 text-[#ff4d6d]">
                        {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i < 4 ? 'fill-current' : 'fill-none opacity-30'}`} />)}
                     </div>
                     <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/50 italic">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-fraunces font-black leading-tight italic">{product.name}</h1>
                  <p className="text-3xl md:text-5xl font-fraunces font-black text-[#ff4d6d] italic flex items-baseline gap-4">
                     ₹{product.price.toLocaleString()}
                     <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 not-italic">Taxes Included</span>
                  </p>
               </div>

               <p className="text-base md:text-xl font-outfit text-[#1a1c24]/60 leading-relaxed max-w-xl italic font-medium">
                  "{product.description}"
               </p>

               <div className="space-y-6 md:space-y-8 bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-[#1a1c24]/5 shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                     <h4 className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/40 italic">Select Blouse Size</h4>
                     <button className="flex items-center gap-2 text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d] hover:text-[#1a1c24] transition-colors italic">
                        <Ruler className="w-3 h-3 md:w-4 md:h-4" /> Size Guide
                     </button>
                  </div>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                     {['S', 'M', 'L', 'XL', 'Custom'].map(size => (
                        <button 
                           key={size}
                           onClick={() => setSelectedSize(size)}
                           className={`px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-outfit font-black uppercase tracking-widest transition-all ${selectedSize === size ? 'bg-[#1a1c24] text-white shadow-[0_15px_30px_rgba(26,28,36,0.2)] -translate-y-1' : 'bg-[#fbf9f6] border border-[#1a1c24]/5 text-[#1a1c24]/40 hover:border-[#ff4d6d]/40 hover:bg-white'}`}
                        >
                           {size}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
                  <button className="flex-[2] py-5 md:py-6 bg-[#1a1c24] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-[#ff4d6d] hover:scale-[1.02] transition-all shadow-[0_20px_50px_rgba(26,28,36,0.15)] hover:shadow-[#ff4d6d]/40 flex items-center justify-center gap-3 active:scale-95 italic">
                     Add to Palace <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <div className="flex gap-4 sm:flex-[1]">
                     <button className="flex-1 py-5 md:py-6 border-2 border-[#1a1c24]/5 bg-white text-[#1a1c24]/40 rounded-full font-black text-sm hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all flex items-center justify-center shadow-sm active:scale-95 group">
                        <Heart className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                     </button>
                     <button className="flex-1 py-5 md:py-6 border-2 border-[#1a1c24]/5 bg-white text-[#1a1c24]/40 rounded-full flex items-center justify-center hover:bg-[#1a1c24] hover:border-[#1a1c24] hover:text-white transition-all shadow-sm active:scale-95 group">
                        <Share2 className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                     </button>
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 pt-10 md:pt-14 border-t border-[#1a1c24]/5">
                  <div className="flex gap-5 items-start bg-white p-6 rounded-[2rem] border border-[#1a1c24]/5">
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#bfa37e]/10 flex items-center justify-center flex-shrink-0">
                        <Truck className="w-5 h-5 md:w-6 md:h-6 text-[#bfa37e]" />
                     </div>
                     <div className="space-y-1.5 md:space-y-2">
                        <h5 className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1a1c24] italic">Artisan Shipping</h5>
                        <p className="text-[9px] md:text-[10px] font-outfit text-[#1a1c24]/40 leading-relaxed uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium">Handled with custom care • 3-5 Lunar Days</p>
                     </div>
                  </div>
                  <div className="flex gap-5 items-start bg-white p-6 rounded-[2rem] border border-[#1a1c24]/5">
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                     </div>
                     <div className="space-y-1.5 md:space-y-2">
                        <h5 className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1a1c24] italic">Authentic Silk</h5>
                        <p className="text-[9px] md:text-[10px] font-outfit text-[#1a1c24]/40 leading-relaxed uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium">Silk Mark certified • Pure Zari Guaranteed</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Tabs */}
      <section className="py-20 md:py-32 bg-white border-y border-[#1a1c24]/5 relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
         <div className="max-w-[1500px] mx-auto px-6 md:px-10 relative z-10">
            <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
               <h3 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-black text-center italic">Artisan <span className="italic font-normal text-[#bfa37e]">Specifications.</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                  <div className="space-y-6 md:space-y-8 bg-[#fbf9f6] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-[#1a1c24]/5">
                     <h4 className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d] italic flex items-center gap-4">
                        <span className="w-8 h-px bg-[#ff4d6d]/30" /> Fabric & Craft
                     </h4>
                     <ul className="space-y-4 md:space-y-6">
                        {product.details.map((d, i) => (
                           <li key={i} className="flex gap-4 text-sm md:text-base font-outfit text-[#1a1c24]/60 italic font-medium leading-relaxed">
                              <span className="text-[#bfa37e] text-lg leading-none">✦</span> {d}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="space-y-6 md:space-y-8 bg-[#1a1c24] text-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl">
                     <h4 className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic flex items-center gap-4">
                        <span className="w-8 h-px bg-[#bfa37e]/30" /> Artist's Note
                     </h4>
                     <p className="text-base md:text-xl font-outfit text-white/50 leading-relaxed font-medium italic">
                        "Each thread in this Kanchipuram silk is chosen for its luster. The ruby red is achieved through traditional botanical dyes, ensuring a hue that deepens with character over generations."
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
