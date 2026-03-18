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

      <section className="pt-32 pb-20">
        <div className="max-w-[1500px] mx-auto px-10">
          
          <Link href="/boutique" className="inline-flex items-center gap-2 text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 hover:text-[#ff4d6d] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Boutique
          </Link>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Gallery */}
            <div className="space-y-6">
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-soft border border-border/5"
               >
                  <img src={product.images[activeImg]} alt={product.name} className="w-full h-full object-cover" />
               </motion.div>
               <div className="flex gap-4">
                  {product.images.map((img, i) => (
                    <button 
                       key={i} 
                       onClick={() => setActiveImg(i)}
                       className={`w-24 h-32 rounded-2xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-[#ff4d6d]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                       <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
               </div>
            </div>

            {/* Content */}
            <div className="space-y-12 py-6">
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <div className="flex gap-1 text-[#ff4d6d]">
                        {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < 4 ? 'fill-current' : 'fill-none opacity-30'}`} />)}
                     </div>
                     <span className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-fraunces font-black leading-tight">{product.name}</h1>
                  <p className="text-3xl font-fraunces font-black text-[#ff4d6d]">₹{product.price.toLocaleString()}</p>
               </div>

               <p className="text-lg font-outfit text-[#1a1c24]/60 leading-relaxed max-w-xl italic">
                  "{product.description}"
               </p>

               <div className="space-y-6">
                  <div className="flex justify-between items-center">
                     <h4 className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30">Select Blouse Size</h4>
                     <button className="flex items-center gap-2 text-[10px] font-outfit font-black uppercase tracking-widest text-[#ff4d6d] hover:underline">
                        <Ruler className="w-3 h-3" /> Size Guide
                     </button>
                  </div>
                  <div className="flex gap-4">
                     {['S', 'M', 'L', 'XL', 'Custom'].map(size => (
                        <button 
                           key={size}
                           onClick={() => setSelectedSize(size)}
                           className={`px-8 py-4 rounded-2xl text-xs font-outfit font-bold transition-all ${selectedSize === size ? 'bg-[#1a1c24] text-white shadow-xl translate-y-[-2px]' : 'bg-white border border-[#1a1c24]/5 text-[#1a1c24]/40 hover:border-[#ff4d6d]/40'}`}
                        >
                           {size}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="flex gap-4 pt-6">
                  <button className="flex-[2] py-6 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-[1.02] transition-all shadow-2xl flex items-center justify-center gap-3">
                     Add to Palace <ShoppingBag className="w-5 h-5" />
                  </button>
                  <button className="flex-1 py-6 border-2 border-[#1a1c24]/5 text-[#1a1c24]/40 rounded-full font-bold text-sm hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all flex items-center justify-center gap-3">
                     <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-16 h-16 border-2 border-[#1a1c24]/5 text-[#1a1c24]/40 rounded-full flex items-center justify-center hover:bg-white transition-all">
                     <Share2 className="w-5 h-5" />
                  </button>
               </div>

               <div className="grid grid-cols-2 gap-8 pt-12 border-t border-[#1a1c24]/5">
                  <div className="flex gap-4 items-start">
                     <Truck className="w-5 h-5 text-[#bfa37e] mt-1" />
                     <div className="space-y-1">
                        <h5 className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]">Artisan Shipping</h5>
                        <p className="text-[10px] font-outfit text-[#1a1c24]/40 leading-relaxed uppercase tracking-widest">Handled with custom care • 3-5 Days</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <ShieldCheck className="w-5 h-5 text-green-500 mt-1" />
                     <div className="space-y-1">
                        <h5 className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]">Authentic Silk</h5>
                        <p className="text-[10px] font-outfit text-[#1a1c24]/40 leading-relaxed uppercase tracking-widest">Silk Mark certified • Pure Zari Guaranteed</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Tabs */}
      <section className="py-24 bg-white border-y border-[#1a1c24]/5">
         <div className="max-w-[1500px] mx-auto px-10">
            <div className="max-w-3xl mx-auto space-y-12">
               <h3 className="text-3xl font-fraunces font-bold text-center">Artisan Specifications</h3>
               <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                     <h4 className="text-[10px] font-outfit font-black uppercase tracking-wider text-[#ff4d6d]">Fabric & Craft</h4>
                     <ul className="space-y-4">
                        {product.details.map((d, i) => (
                           <li key={i} className="flex gap-3 text-sm font-outfit text-[#1a1c24]/60 italic">
                              <span className="text-[#bfa37e]">✦</span> {d}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="space-y-6">
                     <h4 className="text-[10px] font-outfit font-black uppercase tracking-wider text-[#ff4d6d]">Artist's Note</h4>
                     <p className="text-sm font-outfit text-[#1a1c24]/40 leading-relaxed font-medium">
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
