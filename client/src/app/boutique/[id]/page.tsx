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

      <section className="pt-24 md:pt-48 pb-16 md:pb-32 bg-[#fbf9f6]">
        {/* Decorative halos */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[150px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[120px] -z-0" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/boutique" className="group inline-flex items-center gap-4 text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-all mb-10 md:mb-16">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> 
              <span className="italic">Return to Boutique Archive</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Gallery Section refined for mobile */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="space-y-8 md:space-y-12"
            >
               <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-[#1a1c24]/5 group">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                  <div className="absolute top-8 right-8">
                     <button className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-2xl flex items-center justify-center shadow-2xl text-[#1a1c24]/30 hover:text-[#ff4d6d] transition-all active:scale-90">
                        <Share2 className="w-6 h-6" />
                     </button>
                  </div>
                  {/* Tag overlay */}
                  <div className="absolute bottom-8 left-8">
                     <span className="px-6 py-2.5 bg-[#1a1c24]/80 backdrop-blur-xl rounded-full text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-white/80 border border-white/10 italic">Authentic Heirloom</span>
                  </div>
               </div>
               
               {/* Thumbnail strip - improved for mobile touch */}
               <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-2">
                  {[0, 1, 2].map((i) => (
                    <button 
                       key={i} 
                       onClick={() => setActiveImg(i)}
                       className={`relative flex-shrink-0 w-20 h-24 md:w-32 md:h-40 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-500 transform active:scale-90 ${activeImg === i ? 'ring-4 ring-[#ff4d6d]/40 scale-105 shadow-xl' : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}`}
                    >
                       <img src={product.img} alt="Thumb" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                  <div className="flex-shrink-0 w-20 h-24 md:w-32 md:h-40 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#fbf9f6] border-2 border-dashed border-[#1a1c24]/5 flex flex-col items-center justify-center text-[#1a1c24]/10">
                     <Star className="w-6 h-6 mb-2" />
                     <span className="text-[7px] font-outfit font-black uppercase tracking-widest">360 View</span>
                  </div>
               </div>
            </motion.div>

            {/* Content Side refined */}
            <div className="flex flex-col gap-12 md:gap-16">
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8 md:space-y-10"
               >
                  <div className="space-y-6">
                     <div className="flex flex-wrap items-center gap-4">
                        <span className="px-5 py-2 bg-white rounded-full text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] text-[#ff4d6d] shadow-sm border border-[#ff4d6d]/10 italic">{product.category} Palace Ritual</span>
                        <div className="flex gap-1.5 text-[#ff4d6d]">
                           {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />)}
                        </div>
                     </div>
                     <h1 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black leading-tight text-[#1a1c24] italic tracking-tight">{product.name}</h1>
                     <div className="flex items-baseline gap-4">
                        <p className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24]/80 italic">₹{product.price.toLocaleString()}</p>
                        <span className="text-[10px] md:text-xs font-outfit font-black text-[#1a1c24]/20 uppercase tracking-[0.2em] italic">Honorary Tribute</span>
                     </div>
                  </div>

                  <p className="text-sm md:text-xl font-outfit text-[#1a1c24]/40 italic leading-relaxed max-w-xl group">
                     " <span className="group-hover:text-[#1a1c24]/60 transition-colors duration-500">{product.desc}</span> "
                  </p>
               </motion.div>

               {/* Size Selector refined */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-8 md:space-y-10"
               >
                  <div className="flex justify-between items-center border-b border-[#1a1c24]/5 pb-4">
                     <h4 className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 italic">Artisan Silhouette</h4>
                     <button className="flex items-center gap-3 text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.2em] text-[#ff4d6d] hover:tracking-[0.4em] transition-all italic">
                        <Ruler className="w-4 h-4" /> Dimension Guide
                     </button>
                  </div>
                  <div className="flex flex-wrap gap-3 md:gap-5">
                     {['S', 'M', 'L', 'XL', 'Custom'].map(size => (
                        <button 
                           key={size}
                           onClick={() => setSelectedSize(size)}
                           className={`px-8 py-5 md:px-12 md:py-7 rounded-[1.5rem] md:rounded-[2.5rem] text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.2em] transition-all duration-500 transform active:scale-90 ${selectedSize === size ? 'bg-[#1a1c24] text-white shadow-[0_20px_60px_rgba(26,28,36,0.3)] scale-105' : 'bg-white border border-[#1a1c24]/5 text-[#1a1c24]/20 hover:border-[#ff4d6d]/30 hover:text-[#ff4d6d]'}`}
                        >
                           {size}
                        </button>
                     ))}
                  </div>
               </motion.div>

               {/* Actions Section improved for mobile */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-6 pt-6"
               >
                  <button 
                    onClick={handleAddToCart}
                    className={`flex-1 py-7 md:py-10 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] transition-all duration-700 shadow-2xl flex items-center justify-center gap-4 active:scale-95 overflow-hidden group relative ${added ? 'bg-green-600 text-white shadow-green-500/20' : 'bg-[#1a1c24] text-white hover:bg-[#ff4d6d]'}`}
                  >
                     <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 italic" />
                     {added ? <><Check className="w-6 h-6 animate-bounce" /> Added to Sanctum</> : <><ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" /> Add to Palace Bag</>}
                  </button>
                  <button className="w-full sm:w-24 h-14 sm:h-auto border-2 border-[#1a1c24]/5 rounded-full flex items-center justify-center hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all active:scale-75 shadow-sm">
                     <Heart className={`w-6 h-6 md:w-8 md:h-8 hover:fill-current`} />
                  </button>
               </motion.div>

               {/* Features refined with artisan icons */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-16 md:pt-24 border-t border-[#1a1c24]/5">
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6 group">
                     <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center text-[#ff4d6d] flex-shrink-0 shadow-sm border border-[#1a1c24]/5 group-hover:bg-[#ff4d6d] group-hover:text-white transition-all duration-500 transform group-hover:rotate-12"><ShieldCheck className="w-7 h-7" /></div>
                     <div className="space-y-2">
                        <p className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.4em] italic leading-tight">Heritage Quality</p>
                        <p className="text-[10px] md:text-[11px] font-outfit font-medium text-[#1a1c24]/20 uppercase tracking-[0.2em] italic">100% Authentic Handloom Artifact</p>
                     </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6 group">
                     <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center text-[#bfa37e] flex-shrink-0 shadow-sm border border-[#1a1c24]/5 group-hover:bg-[#bfa37e] group-hover:text-white transition-all duration-500 transform group-hover:-rotate-12"><Truck className="w-7 h-7" /></div>
                     <div className="space-y-2">
                        <p className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.4em] italic leading-tight">Global Escort</p>
                        <p className="text-[10px] md:text-[11px] font-outfit font-medium text-[#1a1c24]/20 uppercase tracking-[0.2em] italic">Tracked Secure Palace Delivery</p>
                     </div>
                  </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
