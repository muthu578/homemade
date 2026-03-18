"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Share2, Ruler, ShieldCheck, Truck, Star, Check } from 'lucide-react';
import { Navbar } from '../../../components/sections/Navbar';
import { Footer } from '../../../components/sections/Footer';

// Mock data for demo consistency
const products = [
  { id: 1, name: 'Sanjna Rose Red Gown', category: 'Gowns', price: 12500, tag: 'Signature', img: 'https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393', desc: 'A stunning rose red gown with intricate hand-embroidery, designed for grand celebrations.' },
  { id: 2, name: 'Kanchi Silk Zari Saree', category: 'Sarees', price: 9500, tag: 'Best Seller', img: 'https://anyaonline.in/cdn/shop/files/1_3d4bcb96-0782-4338-9c5a-1a0740261f36_400x.jpg?v=1757499348', desc: 'Authentic Kanchipuram silk featuring traditional golden zari weave and artistic border motifs.' },
  { id: 3, name: 'Mul Cotton Floral Frock', category: 'Ethnic Wear', price: 2800, tag: 'Handcrafted', img: 'https://anyaonline.in/cdn/shop/files/4_6446979a-1eb8-42f0-9740-10f545465e64_400x.jpg?v=1757499348', desc: 'Breathable Mulmul cotton frock with hand-printed floral patterns, perfect for everyday elegance.' },
];

export default function BoutiqueProductPage() {
  const params = useParams();
  const id = Number(params.id);
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  // Find the product or use a default one
  const product = products.find(p => p.id === id) || products[0];

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
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
            {/* Gallery (Mocking with single img or repeat) */}
            <div className="space-y-6">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-soft border border-[#1a1c24]/5"
               >
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
               </motion.div>
               <div className="flex gap-4">
                  {[0, 1, 2].map((i) => (
                    <button 
                       key={i} 
                       onClick={() => setActiveImg(i)}
                       className={`w-24 h-32 rounded-2xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-[#ff4d6d]' : 'border-transparent opacity-60'}`}
                    >
                       <img src={product.img} alt="Thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
               </div>
            </div>

            {/* Content Side */}
            <div className="space-y-12">
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <span className="px-3 py-1 bg-[#ff4d6d]/5 text-[#ff4d6d] text-[9px] font-outfit font-black uppercase tracking-widest rounded-full">{product.category} Palace</span>
                     <div className="flex gap-0.5 text-[#ff4d6d]">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                     </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-fraunces font-black leading-tight text-[#1a1c24]">{product.name}</h1>
                  <p className="text-3xl font-fraunces font-black text-[#1a1c24]/80">₹{product.price.toLocaleString()}</p>
               </div>

               <p className="text-lg font-outfit text-[#1a1c24]/50 italic leading-relaxed max-w-xl">
                  "{product.desc}"
               </p>

               {/* Size Selector */}
               <div className="space-y-6">
                  <div className="flex justify-between items-center">
                     <h4 className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30">Artisan Size</h4>
                     <button className="flex items-center gap-2 text-[10px] font-outfit font-black uppercase tracking-widest text-[#ff4d6d] hover:underline">
                        <Ruler className="w-3 h-3" /> Measurements
                     </button>
                  </div>
                  <div className="flex gap-4">
                     {['S', 'M', 'L', 'XL', 'Custom'].map(size => (
                        <button 
                           key={size}
                           onClick={() => setSelectedSize(size)}
                           className={`px-8 py-4 rounded-2xl text-xs font-outfit font-bold transition-all ${selectedSize === size ? 'bg-[#1a1c24] text-white shadow-xl' : 'bg-white border border-[#1a1c24]/5 text-[#1a1c24]/40 hover:border-[#ff4d6d]/40'}`}
                        >
                           {size}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Actions */}
               <div className="flex gap-4 pt-4">
                  <button 
                    onClick={handleAddToCart}
                    className={`flex-[2] py-6 rounded-full font-bold text-sm transition-all shadow-2xl flex items-center justify-center gap-3 ${added ? 'bg-green-500 text-white' : 'bg-[#1a1c24] text-white hover:scale-[1.02]'}`}
                  >
                     {added ? <><Check className="w-5 h-5" /> Added to Bag</> : <><ShoppingBag className="w-5 h-5" /> Add to Palace Bag</>}
                  </button>
                  <button className="w-18 h-18 border-2 border-[#1a1c24]/5 rounded-full flex items-center justify-center hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all px-6">
                     <Heart className="w-6 h-6" />
                  </button>
               </div>

               {/* Features */}
               <div className="grid grid-cols-2 gap-8 pt-12 border-t border-[#1a1c24]/5">
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-[#ff4d6d]/5 rounded-2xl flex items-center justify-center text-[#ff4d6d] flex-shrink-0"><ShieldCheck className="w-5 h-5" /></div>
                     <div className="space-y-1">
                        <p className="text-[10px] font-outfit font-black uppercase tracking-widest">Heritage Quality</p>
                        <p className="text-[10px] font-outfit text-[#1a1c24]/30 uppercase tracking-widest">100% Authentic Handloom</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-[#bfa37e]/5 rounded-2xl flex items-center justify-center text-[#bfa37e] flex-shrink-0"><Truck className="w-5 h-5" /></div>
                     <div className="space-y-1">
                        <p className="text-[10px] font-outfit font-black uppercase tracking-widest">Global Escort</p>
                        <p className="text-[10px] font-outfit text-[#1a1c24]/30 uppercase tracking-widest">Tracked Secure Delivery</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
