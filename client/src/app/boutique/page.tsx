"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Search, ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

const categories = ['All', 'Sarees', 'Ethnic Wear', 'Gowns', 'Salwar Suits', 'Designer Blouses', 'Lehengas', 'Fabrics'];

const products = [
  {
    id: 1,
    name: 'Off White Kanchi Silk Saree',
    category: 'Sarees',
    price: 7960,
    tag: 'New Arrival',
    img: 'https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393',
    color: 'Off White',
  },
  {
    id: 2,
    name: 'Dark Violet Zari Creeper Saree',
    category: 'Sarees',
    price: 3750,
    tag: 'Bestseller',
    img: 'https://anyaonline.in/cdn/shop/files/1_f604d26e-5258-405f-a4c1-5fe659b6febb_400x.jpg?v=1771045647',
    color: 'Violet',
  },
  {
    id: 3,
    name: 'Bottle Green Bridal Silk Saree',
    category: 'Sarees',
    price: 5540,
    tag: 'Bridal',
    img: 'https://anyaonline.in/cdn/shop/files/5_4e137679-25e0-4fec-94de-0661134b06ad_400x.jpg?v=1770902247',
    color: 'Green',
  },
  {
    id: 4,
    name: 'Pink Banarasi Silk Saree',
    category: 'Sarees',
    price: 17400,
    tag: 'Premium',
    img: 'https://anyaonline.in/cdn/shop/files/1_3d4bcb96-0782-4338-9c5a-1a0740261f36_400x.jpg?v=1757499348',
    color: 'Pink',
  },
  {
    id: 5,
    name: 'Apple Green Banarasi Silk Saree',
    category: 'Sarees',
    price: 44700,
    tag: 'Trending',
    img: 'https://anyaonline.in/cdn/shop/files/1_61dcbcee-17c5-44ad-8578-b3899d70b6cd_400x.jpg?v=1684480583',
    color: 'Green',
  },
  {
    id: 6,
    name: 'Alli Green Kanchi Cotton Saree',
    category: 'Sarees',
    price: 4900,
    tag: 'Limited',
    img: 'https://anyaonline.in/cdn/shop/files/WhatsAppImage2025-04-23at11.51.58AM_2_400x.jpg?v=1745404995',
    color: 'Green',
  },
  {
    id: 7,
    name: 'Black Banarasi Silk Fabric',
    category: 'Fabrics',
    price: 160,
    tag: 'Per metre',
    img: 'https://anyaonline.in/cdn/shop/files/16_4_0a2324c8-4fe4-405c-bfe2-d469231e15e1_400x.jpg?v=1771594438',
    color: 'Black',
  },
  {
    id: 8,
    name: 'Navy Blue Kanchi Silk Fabric',
    category: 'Fabrics',
    price: 280,
    tag: 'Per metre',
    img: 'https://anyaonline.in/cdn/shop/files/19_fb0d9b47-2344-480d-83be-75af517ab1d4_400x.jpg?v=1771593834',
    color: 'Navy Blue',
  },
  {
    id: 9,
    name: 'Cream Floral Printed Khadi Frock',
    category: 'Ethnic Wear',
    price: 2350,
    tag: 'Artisan',
    img: 'https://anyaonline.in/cdn/shop/products/akashya3_400x.jpg?v=1638539806',
    color: 'Cream',
  },
  {
    id: 10,
    name: 'Blue Floral Multi Khadi Frock',
    category: 'Ethnic Wear',
    price: 2350,
    tag: 'Exclusive',
    img: 'https://anyaonline.in/cdn/shop/products/akashya7_400x.jpg?v=1638591046',
    color: 'Blue',
  },
  {
    id: 11,
    name: 'Anandha Dhratchai Kanchi Fabric',
    category: 'Fabrics',
    price: 3500,
    tag: 'Per metre',
    img: 'https://anyaonline.in/cdn/shop/files/1_050c940b-3534-4785-9049-54dc44c8bfee_400x.jpg?v=1711605466',
    color: 'Rexona',
  },
  {
    id: 12,
    name: 'White Cotton Mul Fish Frock',
    category: 'Ethnic Wear',
    price: 2000,
    tag: 'Handcrafted',
    img: 'https://anyaonline.in/cdn/shop/products/akashya9_400x.jpg?v=1638591487',
    color: 'White',
  },
];

export default function BoutiquePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = products.filter(p => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-32 overflow-hidden bg-[#fbf9f6]">
        {/* Subtle decorative elements with artisan blur */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[180px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[150px] -z-0" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 md:space-y-12 text-center lg:text-left"
            >
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="hidden md:block h-px w-16 bg-[#ff4d6d]" />
                  <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d]">Artisan Boutique</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24] leading-[1.1] md:leading-tight italic">
                  Wear Your <br className="hidden sm:block" /><span className="text-[#bfa37e] font-normal italic">Story.</span>
                </h1>
                <p className="text-sm md:text-xl text-[#1a1c24]/40 font-outfit leading-relaxed max-w-xl mx-auto lg:mx-0 italic">
                  Handcrafted Kanchi silks, designer sarees, artisan blouses, and ethnic ensembles — curated for every chapter of your life.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-4 md:pt-6">
                {['Sarees', 'Lehengas', 'Gowns', 'Fabrics'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveCategory(tag)}
                    className="px-6 md:px-10 py-3 md:py-4 rounded-full border-2 border-[#bfa37e]/10 text-[10px] md:text-xs font-outfit font-black tracking-[0.3em] uppercase text-[#bfa37e] hover:bg-[#bfa37e] hover:text-white hover:border-[#bfa37e] transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Staggered Images - Improved for mobile with better spacing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[300px] sm:h-[450px] md:h-[550px]"
            >
              <div className="absolute top-0 left-0 w-[160px] sm:w-[220px] md:w-[280px] h-[220px] sm:h-[320px] md:h-[400px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] rotate-[-6deg] z-0 group">
                <img
                  src="https://anyaonline.in/cdn/shop/files/5_4e137679-25e0-4fec-94de-0661134b06ad_400x.jpg?v=1770902247"
                  alt="Bridal Collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute top-[10%] left-[25%] w-[150px] sm:w-[200px] md:w-[260px] h-[200px] sm:h-[280px] md:h-[350px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] z-20 border-[6px] md:border-[10px] border-white group">
                <img
                  src="https://anyaonline.in/cdn/shop/files/1_f604d26e-5258-405f-a4c1-5fe659b6febb_400x.jpg?v=1771045647"
                  alt="Sarees"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[140px] sm:w-[180px] md:w-[240px] h-[180px] sm:h-[250px] md:h-[320px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] rotate-[4deg] z-10 border-[6px] md:border-[10px] border-white group">
                <img
                  src="https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393"
                  alt="Silk Sarees"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              {/* Stats bubble updated for mobile */}
              <div className="absolute bottom-[10%] left-[10%] md:bottom-[20%] md:left-[15%] bg-white rounded-3xl px-6 md:px-10 py-4 md:py-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] z-30 transform -rotate-3 hover:rotate-0 transition-transform">
                <p className="text-[8px] md:text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e]">Collections</p>
                <p className="text-2xl md:text-5xl font-fraunces font-black text-[#1a1c24] italic">980+</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SEARCH BAR (expandable) ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-b border-[#1a1c24]/5 overflow-hidden sticky top-16 z-50 shadow-xl"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a1c24]/20 group-focus-within:text-[#ff4d6d] transition-colors" />
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Seach sarees, blouses, gowns..."
                  className="w-full pl-16 pr-16 py-5 md:py-7 rounded-full bg-[#fbf9f6] text-sm md:text-lg font-outfit text-[#1a1c24] placeholder-[#1a1c24]/20 border-2 border-transparent focus:border-[#ff4d6d]/10 focus:bg-white outline-none transition-all shadow-inner"
                />
                {searchQuery && (
                   <button onClick={() => setSearchQuery('')} className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1a1c24]/5 flex items-center justify-center text-[#1a1c24]/30 hover:bg-[#ff4d6d] hover:text-white transition-all">
                     <X className="w-4 h-4" />
                   </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CATEGORY FILTER BAR ── */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-2xl border-b border-[#1a1c24]/5 py-4 md:py-6">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6 overflow-hidden">
          {/* Category tabs — horizontally scrollable refined */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth flex-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 md:px-8 py-3 rounded-full text-[10px] md:text-[11px] font-outfit font-black tracking-[0.2em] uppercase transition-all transform active:scale-95 ${
                  activeCategory === cat
                    ? 'bg-[#1a1c24] text-white shadow-[0_10px_30px_rgba(26,28,36,0.3)]'
                    : 'bg-[#fbf9f6] text-[#1a1c24]/30 hover:text-[#1a1c24] border border-transparent hover:border-[#1a1c24]/10 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right actions improved for mobile touch */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setSearchOpen(o => !o)}
              className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all shadow-sm active:scale-90 ${searchOpen ? 'bg-[#ff4d6d] text-white rotate-90 shadow-[0_10px_30px_rgba(255,77,109,0.3)]' : 'bg-[#fbf9f6] text-[#1a1c24]/40 hover:bg-white hover:text-[#ff4d6d] border border-transparent hover:border-[#ff4d6d]/20'}`}
            >
              {searchOpen ? <X className="w-5 h-5 md:w-7 md:h-7" /> : <Search className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
            <button className="flex items-center gap-3 pl-6 pr-8 md:pl-10 md:pr-12 h-10 md:h-14 rounded-full bg-[#fbf9f6] border border-transparent hover:border-[#ff4d6d]/20 text-[10px] md:text-[11px] font-outfit font-black text-[#1a1c24]/30 hover:text-[#ff4d6d] hover:bg-white transition-all uppercase tracking-widest shadow-sm active:scale-95">
              <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Advanced Filter</span>
              <span className="sm:hidden">Filter</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="py-16 md:py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-20 gap-8">
            <div className="space-y-1 text-center md:text-left">
               <p className="text-[10px] md:text-xs font-outfit font-black text-[#1a1c24]/30 tracking-[0.4em] uppercase">
                 Artisan Selection
               </p>
               <h3 className="text-xl md:text-3xl font-fraunces font-black text-[#1a1c24] italic">
                 {activeCategory} <span className="text-[#1a1c24]/10 font-normal">({filtered.length} Designs)</span>
               </h3>
            </div>
            <div className="relative group">
               <select className="appearance-none text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/40 bg-[#fbf9f6] hover:bg-white hover:text-[#1a1c24] px-10 py-4 rounded-full border border-transparent hover:border-[#1a1c24]/10 transition-all cursor-pointer outline-none shadow-sm pr-12 group-hover:shadow-md">
                 <option>Sort: Royal Featured</option>
                 <option>Price: Ascent</option>
                 <option>Price: Descent</option>
                 <option>Latest Arrivals</option>
               </select>
               <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1c24]/20 group-hover:text-[#ff4d6d] transition-colors">
                  <ChevronRight className="w-4 h-4 rotate-90" />
               </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12"
            >
              {filtered.length > 0 ? filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="group relative"
                >
                  {/* Image Card updated for mobile touch */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-[#fbf9f6] shadow-[0_20px_60px_rgba(0,0,0,0.04)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-[#1a1c24]/5">
                    <Link href={`/boutique/${product.id}`} className="block w-full h-full">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                        loading="lazy"
                      />
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c24]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Tag refined */}
                    <div className="absolute top-5 left-5 md:top-8 md:left-8">
                      <div className="px-4 py-2 md:px-5 md:py-2.5 bg-white/95 backdrop-blur-2xl rounded-full text-[8px] md:text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-[#ff4d6d] shadow-xl border border-white/20">
                        {product.tag}
                      </div>
                    </div>

                    {/* Quick Info dot */}
                    <div className="absolute top-5 right-5 md:top-8 md:right-8 group/dot">
                       <div className="px-4 py-2 md:px-5 md:py-2.5 bg-black/30 backdrop-blur-xl rounded-full border border-white/10 flex items-center gap-3 group-hover/dot:bg-[#ff4d6d] transition-all cursor-pointer">
                          <span className="text-[8px] md:text-[10px] font-outfit font-black text-white/90 uppercase tracking-widest">{product.color}</span>
                          <div className="w-2 h-2 rounded-full bg-white shadow-lg animate-pulse" />
                       </div>
                    </div>

                    {/* Wishlist Button - accessible */}
                    <button
                      onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
                      className={`absolute bottom-20 md:bottom-28 right-6 md:right-8 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-2xl shadow-2xl transition-all duration-500 active:scale-75 ${wishlist.includes(product.id) ? 'bg-[#ff4d6d] text-white' : 'bg-white/90 text-[#1a1c24]/20 hover:bg-white hover:text-[#ff4d6d]'}`}
                    >
                      <Heart className={`w-5 h-5 md:w-7 md:h-7 transition-all ${wishlist.includes(product.id) ? 'fill-current scale-110' : 'group-hover:scale-110'}`} />
                    </button>

                    {/* Quick Discovery Button - perfect for touch */}
                    <Link
                      href={`/boutique/${product.id}`}
                      className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 py-5 md:py-7 bg-white/95 backdrop-blur-2xl text-[#1a1c24] rounded-full font-outfit font-black text-[10px] md:text-xs tracking-[0.4em] uppercase flex items-center justify-center gap-4 hover:bg-[#ff4d6d] hover:text-white transition-all shadow-2xl translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 active:scale-95 border border-white/20"
                    >
                      Discovery Design <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>

                  {/* Info refined */}
                  <div className="mt-8 md:mt-10 px-4 md:px-6">
                    <div className="flex items-center gap-4 mb-3">
                       <div className="h-px w-8 bg-[#bfa37e]/30" />
                       <p className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic">{product.category}</p>
                    </div>
                    <div className="space-y-4">
                       <Link href={`/boutique/${product.id}`} className="block">
                          <h3 className="text-sm md:text-xl font-fraunces font-black text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors leading-snug line-clamp-1 italic group-hover:translate-x-1 duration-500">{product.name}</h3>
                       </Link>
                       <div className="flex items-center justify-between py-1 border-t border-[#1a1c24]/5">
                          <span className="text-base md:text-2xl font-fraunces font-black text-[#1a1c24] italic">₹{product.price.toLocaleString()}<span className="text-[10px] md:text-xs font-outfit font-black text-[#1a1c24]/20 tracking-tighter ml-1">TRIBUTE</span></span>
                          <Link href={`/boutique/${product.id}`} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#fbf9f6] flex items-center justify-center text-[#1a1c24]/10 group-hover:bg-[#1a1c24] group-hover:text-white transition-all transform hover:rotate-45">
                             <ArrowRight className="w-4 h-4" />
                          </Link>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full py-40 md:py-64 text-center space-y-10">
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="w-32 h-32 md:w-48 md:h-48 bg-[#fbf9f6] rounded-full flex items-center justify-center mx-auto shadow-inner relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[#ff4d6d]/5 scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-full" />
                     <Search className="w-10 h-10 md:w-16 md:h-16 text-[#1a1c24]/5 group-hover:text-[#ff4d6d]/20 transition-colors" />
                  </motion.div>
                  <div className="space-y-4">
                     <h3 className="text-2xl md:text-5xl font-fraunces font-black text-[#1a1c24]/20 italic">No designs found <br />in the archive.</h3>
                     <p className="text-sm md:text-xl font-outfit text-[#1a1c24]/30 italic">Try resetting the ritual or explore other domains.</p>
                  </div>
                  <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }} className="px-10 md:px-14 py-4 md:py-6 bg-[#1a1c24] text-white rounded-full text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] hover:bg-[#ff4d6d] transition-all shadow-2xl active:scale-95">Purify Ritual Filters</button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Load More Refined */}
          <div className="text-center mt-24 md:mt-40">
            <button className="group relative px-14 md:px-24 py-6 md:py-8 border-2 border-[#1a1c24]/5 rounded-full text-[10px] md:text-xs font-outfit font-black tracking-[0.5em] uppercase text-[#1a1c24]/20 hover:text-[#1a1c24] hover:border-[#1a1c24]/20 transition-all transform hover:scale-[1.02] active:scale-95 shadow-sm hover:shadow-2xl overflow-hidden">
               <div className="absolute inset-0 bg-white/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 italic" />
               <span className="relative z-10 flex items-center gap-6">Explore More Archive <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></span>
            </button>
          </div>
        </div>
      </section>

      {/* ── CUSTOM ORDER CTA UPDATED ── */}
      <section className="py-24 md:py-48 bg-[#1a1c24] relative overflow-hidden flex flex-col items-center">
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
         <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#ff4d6d]/10 rounded-full blur-[150px] md:blur-[200px]" />
         
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center space-y-10 md:space-y-16 relative z-10 flex flex-col items-center">
            <div className="space-y-6 text-center">
               <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">Private Atelier</span>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-white leading-tight italic">
                  Bespoke <br className="md:hidden" /><span className="italic font-normal text-[#bfa37e]">Visionaries.</span>
               </h2>
               <p className="text-sm md:text-2xl text-white/30 font-outfit max-w-2xl mx-auto leading-relaxed italic">
                  "We invite you to the ritual of creation. Share your dreams, and our master artisans will manifest them into artifacts of pure grace."
               </p>
            </div>
            <Link href="/contact" className="group relative inline-flex items-center justify-center gap-6 px-12 md:px-16 py-6 md:py-8 bg-[#ff4d6d] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:scale-105 active:scale-95 transition-all shadow-2xl italic overflow-hidden">
               <div className="absolute inset-0 bg-[#1a1c24]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
               <span className="relative z-10 flex items-center justify-center gap-4 text-center">Design Custom Outfit 👗</span>
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
