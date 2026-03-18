"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Search, ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

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
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#bfa37e]/10 rounded-full blur-[100px] -z-0" />

        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#ff4d6d]" />
                <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">The Boutique</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-fraunces font-black text-[#1a1c24] leading-tight">
                Wear Your <br /><span className="italic font-normal text-[#bfa37e]">Story.</span>
              </h1>
              <p className="text-lg text-[#1a1c24]/50 font-outfit leading-relaxed max-w-md">
                Handcrafted Kanchi silks, designer sarees, artisan blouses, and ethnic ensembles — curated for every chapter of your life.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Sarees', 'Lehengas', 'Gowns', 'Fabrics'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveCategory(tag)}
                    className="px-6 py-2.5 rounded-full border border-[#bfa37e]/30 text-xs font-outfit font-bold tracking-widest text-[#bfa37e] hover:bg-[#bfa37e]/10 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Staggered Images */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative h-[480px] hidden lg:block"
            >
              <div className="absolute top-0 left-0 w-[260px] h-[370px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] rotate-[-3deg]">
                <img
                  src="https://anyaonline.in/cdn/shop/files/5_4e137679-25e0-4fec-94de-0661134b06ad_400x.jpg?v=1770902247"
                  alt="Bridal Collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute top-[10%] left-[36%] w-[230px] h-[310px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] z-10 border-4 border-white">
                <img
                  src="https://anyaonline.in/cdn/shop/files/1_f604d26e-5258-405f-a4c1-5fe659b6febb_400x.jpg?v=1771045647"
                  alt="Sarees"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[200px] h-[270px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] rotate-[2deg] border-4 border-white">
                <img
                  src="https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393"
                  alt="Silk Sarees"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              {/* Stats bubble */}
              <div className="absolute bottom-[30%] left-[22%] bg-white rounded-2xl px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-20">
                <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#bfa37e]">Collections</p>
                <p className="text-3xl font-fraunces font-black text-[#1a1c24]">980+</p>
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
            className="bg-white border-b border-[#1a1c24]/5 overflow-hidden"
          >
            <div className="max-w-[1800px] mx-auto px-10 py-4">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1c24]/30" />
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search sarees, blouses, lehengas..."
                  className="w-full pl-12 pr-12 py-4 rounded-full bg-[#fbf9f6] text-sm font-outfit text-[#1a1c24] placeholder-[#1a1c24]/30 border border-[#1a1c24]/10 focus:outline-none focus:border-[#ff4d6d]/40 transition-all"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#1a1c24]/30 hover:text-[#ff4d6d]">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CATEGORY FILTER BAR ── */}
      <section className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-[#1a1c24]/5 py-4">
        <div className="max-w-[1800px] mx-auto px-10 flex items-center justify-between gap-6">
          {/* Category tabs — no scrollbar, wrapped */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-[10px] font-outfit font-bold tracking-[0.2em] uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1a1c24] text-white shadow-md'
                    : 'text-[#1a1c24]/40 hover:text-[#1a1c24] border border-[#1a1c24]/10 hover:border-[#1a1c24]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setSearchOpen(o => !o)}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${searchOpen ? 'bg-[#ff4d6d] border-[#ff4d6d] text-white' : 'border-[#1a1c24]/10 text-[#1a1c24]/40 hover:text-[#ff4d6d] hover:border-[#ff4d6d]/30'}`}
            >
              <Search className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#1a1c24]/10 text-[10px] font-outfit font-bold text-[#1a1c24]/40 hover:text-[#ff4d6d] hover:border-[#ff4d6d]/30 transition-all uppercase tracking-widest">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="py-20">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="flex items-center justify-between mb-12">
            <p className="text-sm font-outfit text-[#1a1c24]/30">
              Showing <span className="font-bold text-[#1a1c24]">{filtered.length}</span> designs
              {activeCategory !== 'All' && <span className="text-[#ff4d6d]"> · {activeCategory}</span>}
            </p>
            <select className="text-[10px] font-outfit font-bold uppercase tracking-widest text-[#1a1c24]/40 bg-transparent border-none outline-none cursor-pointer">
              <option>Sort: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>New Arrivals</option>
            </select>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {filtered.length > 0 ? filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#f0ece6] shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[8px] font-outfit font-black uppercase tracking-[0.3em] text-[#ff4d6d]">
                        {product.tag}
                      </span>
                    </div>

                    {/* Color dot */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/30 backdrop-blur-sm rounded-full">
                      <span className="text-[8px] font-outfit font-bold text-white/80 uppercase tracking-wider">{product.color}</span>
                    </div>

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute bottom-14 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ff4d6d] hover:text-white"
                    >
                      <Heart className={`w-3.5 h-3.5 transition-colors ${wishlist.includes(product.id) ? 'fill-[#ff4d6d] text-[#ff4d6d]' : 'text-[#1a1c24]'}`} />
                    </button>

                    {/* Quick View */}
                    <Link
                      href={`/boutique/${product.id}`}
                      className="absolute bottom-4 left-4 right-4 py-2.5 bg-white/90 backdrop-blur-sm text-[#1a1c24] rounded-full font-outfit font-bold text-[10px] tracking-widest uppercase flex items-center justify-center gap-1.5 hover:bg-[#1a1c24] hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      Quick View <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* Info */}
                  <div className="mt-5 px-1">
                    <p className="text-[8px] font-outfit font-black uppercase tracking-[0.3em] text-[#bfa37e] mb-1">{product.category}</p>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-fraunces font-bold text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors leading-snug">{product.name}</h3>
                      <span className="text-sm font-fraunces font-bold text-[#1a1c24]/40 whitespace-nowrap">₹{product.price.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-4 py-32 text-center">
                  <p className="text-2xl font-fraunces italic text-[#1a1c24]/20">No designs found.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Load More */}
          <div className="text-center mt-20">
            <button className="group px-14 py-5 border-2 border-[#1a1c24]/10 rounded-full text-sm font-outfit font-bold tracking-widest uppercase text-[#1a1c24]/40 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all hover:scale-105">
              Load More Designs
            </button>
          </div>
        </div>
      </section>

      {/* ── CUSTOM ORDER CTA ── */}
      <section className="py-32 bg-[#1a1c24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Bespoke Service</span>
              <h2 className="text-5xl md:text-6xl font-fraunces font-black text-white leading-tight">
                Don't See What <br />You're Looking For?
              </h2>
              <p className="text-lg text-white/40 font-outfit leading-relaxed">
                We take custom orders — share your vision and our artisans will craft the perfect ensemble just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-4 px-12 py-5 bg-[#ff4d6d] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-2xl">
                  Place Custom Order <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/our-story" className="inline-flex items-center gap-4 px-12 py-5 border border-white/10 text-white/60 rounded-full font-bold text-sm hover:border-white/30 hover:text-white transition-all">
                  Meet Our Artisans
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { emoji: '📐', title: 'Custom Sizing', desc: 'Tailored to your exact measurements' },
                { emoji: '🧵', title: 'Fabric Choice', desc: 'Premium Kanchi silks, cottons & blends' },
                { emoji: '✨', title: 'Hand Embroidery', desc: 'Intricate motifs by skilled artisans' },
                { emoji: '🚚', title: 'Home Delivery', desc: 'Safely delivered to your doorstep' },
              ].map((f, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all space-y-3">
                  <span className="text-3xl">{f.emoji}</span>
                  <h4 className="font-fraunces font-bold text-white">{f.title}</h4>
                  <p className="text-xs text-white/30 font-outfit leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="py-8 bg-[#fbf9f6] border-t border-[#1a1c24]/5">
        <div className="max-w-[1800px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20">
            © 2026 PRANAVIKA'S Sweet & Chic · All Rights Reserved
          </p>
          <Link href="/" className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
