"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, ChevronRight, ShoppingBag, Star, Clock, Phone } from 'lucide-react';

import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

const categories = ['All', 'Cakes', 'Gourmet Cakes', 'Desserts & Cupcakes', 'Pastries', 'Brownies', 'Homemade'];

const products = [
  {
    id: 1,
    name: 'Lotus Biscoff Caramel Cake',
    category: 'Gourmet Cakes',
    price: 1200,
    tag: '⭐ Bestseller',
    desc: 'Caramel drip · Biscoff crunch · Cream layers',
    img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '6–8',
    time: '24h notice',
  },
  {
    id: 2,
    name: 'Rose & Pistachio Cake',
    category: 'Gourmet Cakes',
    price: 1350,
    tag: '🌹 Signature',
    desc: 'Delicate rose essence · Crushed pistachios · Whipped cream',
    img: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '6–8',
    time: '24h notice',
  },
  {
    id: 3,
    name: 'Triple Chocolate Fudge',
    category: 'Cakes',
    price: 980,
    tag: '🍫 Fan Fave',
    desc: 'Dark, milk & white chocolate · Ganache drip',
    img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '4–6',
    time: '12h notice',
  },
  {
    id: 4,
    name: 'Rasamalai Fusion Cake',
    category: 'Gourmet Cakes',
    price: 1450,
    tag: '🥛 Indian Fusion',
    desc: 'Saffron cream · Cardamom sponge · Pistachio garnish',
    img: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '8–10',
    time: '48h notice',
  },
  {
    id: 5,
    name: 'Red Velvet Bliss',
    category: 'Cakes',
    price: 880,
    tag: '❤️ Classic',
    desc: 'Velvety red sponge · Cream cheese frosting',
    img: 'https://images.pexels.com/photos/2035426/pexels-photo-2035426.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '4–6',
    time: '12h notice',
  },
  {
    id: 6,
    name: 'Fudge Brownies (Box of 6)',
    category: 'Brownies',
    price: 380,
    tag: '🍫 Homemade',
    desc: 'Dense & gooey · Dark cocoa · Walnut topped',
    img: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '6 pcs',
    time: 'Same day',
  },
  {
    id: 7,
    name: 'Berry Cheesecake Slice',
    category: 'Pastries',
    price: 280,
    tag: '🫐 No-Bake',
    desc: 'Mixed berry compote · Cream cheese · Biscuit base',
    img: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '1 slice',
    time: 'Same day',
  },
  {
    id: 8,
    name: 'French Macarons Box',
    category: 'Desserts & Cupcakes',
    price: 480,
    tag: '🌈 Assorted',
    desc: 'Rose · Pistachio · Chocolate · Salted Caramel',
    img: 'https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '12 pcs',
    time: '24h notice',
  },
  {
    id: 9,
    name: 'Vanilla Whipped Cupcakes',
    category: 'Desserts & Cupcakes',
    price: 350,
    tag: '🧁 Fresh Daily',
    desc: 'Light vanilla sponge · Swiss meringue buttercream',
    img: 'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '6 pcs',
    time: 'Same day',
  },
  {
    id: 10,
    name: 'Mango Mousse Entremet',
    category: 'Gourmet Cakes',
    price: 1650,
    tag: '🥭 Seasonal',
    desc: 'Mirror glaze · Alphonso mango mousse · Coconut dacquoise',
    img: 'https://images.pexels.com/photos/9708317/pexels-photo-9708317.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '8–10',
    time: '48h notice',
  },
  {
    id: 11,
    name: 'Homemade Dates Laddoo',
    category: 'Homemade',
    price: 260,
    tag: '🌿 Healthy',
    desc: 'Seedless dates · Mixed nuts · No refined sugar',
    img: 'https://vellankifoods.com/cdn/shop/products/dry_fruit_laddu_1024x1024.jpg?v=1680179856',
    serves: '10 pcs',
    time: 'Same day',
  },
  {
    id: 12,
    name: 'Croissant Platter',
    category: 'Pastries',
    price: 420,
    tag: '🥐 Freshly Baked',
    desc: 'Butter croissants · Almond & chocolate filled',
    img: 'https://images.pexels.com/photos/1510682/pexels-photo-1510682.jpeg?auto=compress&cs=tinysrgb&w=600',
    serves: '4 pcs',
    time: 'Morning only',
  },
];

const collectionCards = [
  { name: 'Cakes', desc: 'Celebration & custom cakes', img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800', href: '#', count: '40+' },
  { name: 'Desserts & Cupcakes', desc: 'Sweet bites for every mood', img: 'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=800', href: '#', count: '25+' },
  { name: 'Gourmet Cakes', desc: 'Artisan-crafted masterpieces', img: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800', href: '#', count: '18+' },
  { name: 'Pastries', desc: 'Freshly baked every morning', img: 'https://images.pexels.com/photos/1510682/pexels-photo-1510682.jpeg?auto=compress&cs=tinysrgb&w=800', href: '#', count: '15+' },
];

export default function BakeryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-32 overflow-hidden bg-[#fbf9f6]">
        {/* Artisan Bakery gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(220,176,175,0.15),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10 md:space-y-16 text-center lg:text-left"
            >
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="hidden md:block h-px w-16 bg-[#ff4d6d]" />
                  <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d]">Celestial Bakery</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24] leading-[1.1] md:leading-tight italic">
                  Baked with <br className="hidden sm:block" /><span className="text-[#bfa37e] font-normal italic">Pure Love.</span>
                </h1>
                <p className="text-sm md:text-xl text-[#1a1c24]/40 font-outfit leading-relaxed max-w-xl mx-auto lg:mx-0 italic">
                  "From celebration cakes to everyday indulgences — every creation is handcrafted with the finest ingredients and baked fresh to order."
                </p>
              </div>

              {/* Trust badges refined for mobile */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5">
                {[
                  { icon: '🎂', label: 'Bespoke Cakes' },
                  { icon: '🚚', label: 'Vault Delivery' },
                  { icon: '⭐', label: 'Artisan Fresh' },
                  { icon: '🌿', label: 'Pure Ritual' },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white border border-[#1a1c24]/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-shadow">
                    <span className="text-sm md:text-xl">{b.icon}</span>
                    <span className="text-[9px] md:text-[11px] font-outfit font-black text-[#1a1c24]/40 tracking-[0.2em] uppercase">{b.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6 md:pt-10 items-center justify-center lg:justify-start">
                <Link href="#menu" className="group relative w-full sm:w-auto px-12 md:px-16 py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-2xl active:scale-95 overflow-hidden">
                   <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                   <span className="relative z-10 flex items-center justify-center gap-6">Explore Menu <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></span>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto px-12 md:px-16 py-6 md:py-8 border-2 border-[#ff4d6d]/10 text-[#1a1c24] rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-[#ff4d6d] hover:text-white hover:border-[#ff4d6d] transition-all active:scale-95 text-center">
                  Custom Ritual 🎂
                </Link>
              </div>
            </motion.div>

            {/* Right: Hero images - Staggered layout for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[400px] sm:h-[550px] md:h-[650px]"
            >
              {/* Main big card */}
              <div className="absolute top-0 right-0 w-[200px] sm:w-[320px] md:w-[420px] h-[280px] sm:h-[450px] md:h-[550px] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] group z-10 border-[6px] md:border-[12px] border-white rotate-2 hover:rotate-0 transition-all duration-700">
                <img
                  src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Lotus Biscoff Cake"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 right-12">
                  <p className="text-[8px] md:text-[10px] font-outfit font-black uppercase tracking-[0.6em] text-white/50 mb-2 italic">Celestial Creation</p>
                  <h3 className="text-xl md:text-4xl font-fraunces font-black text-white italic">Lotus Biscoff</h3>
                </div>
              </div>
              
              {/* Mini floating card */}
              <div className="absolute bottom-0 left-0 w-[160px] sm:w-[240px] md:w-[320px] h-[140px] sm:h-[220px] md:h-[280px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] border-[6px] md:border-[10px] border-white group z-20 -rotate-3 hover:rotate-0 transition-all duration-700">
                <img
                  src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Cupcakes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />
              </div>

              {/* Floating pill refined */}
              <div className="absolute top-[20%] left-[-5%] sm:left-[5%] bg-white rounded-[2rem] px-8 md:px-12 py-6 md:py-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] z-30 transform -rotate-12 hover:rotate-0 transition-all duration-500 scale-75 sm:scale-100">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ff4d6d]/10 rounded-full flex items-center justify-center text-2xl md:text-3xl animate-bounce">🌟</div>
                  <div>
                    <p className="text-[9px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] mb-1">Ritual Rating</p>
                    <p className="text-2xl md:text-4xl font-fraunces font-black text-[#1a1c24] italic">4.9 / 5</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR COLLECTIONS ── */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-20 md:mb-32 space-y-6">
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Realms</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24] leading-[1.1] italic">
              Something for <br className="hidden md:block" /><span className="text-[#bfa37e] font-normal italic">Every Craving.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {collectionCards.map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-[3rem] md:rounded-[4rem] overflow-hidden cursor-pointer aspect-[4/5] md:aspect-square shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-4"
              >
                <div className="w-full h-full overflow-hidden">
                  <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c24]/80 via-[#1a1c24]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-4">
                  <p className="text-[9px] md:text-[11px] font-outfit font-black uppercase tracking-[0.5em] text-white/40 italic">{col.count} Masterpieces</p>
                  <h4 className="text-2xl md:text-3xl font-fraunces font-black text-white italic leading-tight group-hover:translate-x-2 transition-transform">{col.name}</h4>
                  <p className="text-xs md:text-sm font-outfit font-medium text-white/40 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">{col.desc}</p>
                </div>
                <div className="absolute top-10 right-10 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:rotate-45 active:scale-75 border border-white/20">
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU / PRODUCT GRID ── */}
      <section id="menu" className="py-24 md:py-48 bg-[#fbf9f6] relative overflow-hidden">
        {/* Decorative halos */}
        <div className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#ff4d6d]/5 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#bfa37e]/5 rounded-full blur-[100px] -z-0" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          {/* Header refined */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-10">
            <div className="space-y-6 text-center md:text-left">
              <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Full Archive</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24] leading-[1.1] italic">
                Our Sacred <br className="hidden md:block" /><span className="text-[#bfa37e] font-normal italic">Catalogue.</span>
              </h2>
            </div>
            <Link href="/contact" className="group flex items-center justify-center md:justify-start gap-4 text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.5em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-all pb-4 border-b-2 border-[#1a1c24]/5 hover:border-[#ff4d6d]/20 active:scale-95">
              Launch Custom Ritual <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Filter Pills refined with smooth horizontal scroll */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth mb-16 md:mb-24">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-8 py-4 rounded-full text-[10px] md:text-[11px] font-outfit font-black tracking-[0.3em] uppercase transition-all transform active:scale-90 ${activeCategory === cat
                    ? 'bg-[#1a1c24] text-white shadow-[0_15px_40px_rgba(26,28,36,0.25)]'
                    : 'bg-white text-[#1a1c24]/20 border border-[#1a1c24]/5 hover:border-[#1a1c24]/10 hover:text-[#1a1c24]/40 hover:bg-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid refined for mobile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-14"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08 }}
                  className="group relative bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.03)] hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-4 border border-[#1a1c24]/5"
                >
                  {/* Image with touch-ready discover button */}
                  <div className="relative aspect-square overflow-hidden block">
                     <Link href={`/bakery/${item.id}`} className="block w-full h-full">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                          loading="lazy"
                        />
                     </Link>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c24]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Tag refined */}
                    <div className="absolute top-6 left-6 md:top-8 md:left-8">
                      <div className="px-5 py-2.5 md:px-6 md:py-3 bg-white/95 backdrop-blur-2xl rounded-full border border-white/20 shadow-xl">
                        <span className="text-[9px] md:text-[10px] font-outfit font-black tracking-[0.2em] uppercase text-[#ff4d6d]">{item.tag}</span>
                      </div>
                    </div>

                    {/* Wishlist button refined */}
                    <button
                      onClick={(e) => { e.preventDefault(); toggleWishlist(item.id); }}
                      className={`absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-2xl shadow-2xl transition-all duration-500 active:scale-75 ${wishlist.includes(item.id) ? 'bg-[#ff4d6d] text-white' : 'bg-white/90 text-[#1a1c24]/20 hover:bg-white hover:text-[#ff4d6d]'}`}
                    >
                      <Heart className={`w-5 h-5 md:w-7 md:h-7 transition-all ${wishlist.includes(item.id) ? 'fill-current scale-110' : 'group-hover:scale-110'}`} />
                    </button>
                    
                    {/* Discovery Overlay for touch */}
                    <Link href={`/bakery/${item.id}`} className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 py-5 md:py-7 bg-white rounded-full flex items-center justify-center gap-4 text-[10px] md:text-[11px] font-outfit font-black tracking-[0.4em] uppercase text-[#1a1c24] opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-2xl active:scale-95 border border-white/20">
                       Taste the Vision <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>

                  {/* Info refined */}
                  <div className="p-8 md:p-12 space-y-6 md:space-y-8">
                    <div className="flex items-start justify-between gap-6">
                      <div className="space-y-2">
                         <div className="h-px w-10 bg-[#bfa37e]/30 mb-2" />
                         <Link href={`/bakery/${item.id}`} className="block">
                           <h3 className="text-lg md:text-2xl font-fraunces font-black text-[#1a1c24] leading-tight group-hover:text-[#ff4d6d] transition-colors italic group-hover:translate-x-1 duration-500">
                             {item.name}
                           </h3>
                         </Link>
                      </div>
                      <span className="text-xl md:text-3xl font-fraunces font-black text-[#bfa37e] italic pt-1">₹{item.price}</span>
                    </div>
                    <p className="text-sm md:text-base font-outfit font-medium text-[#1a1c24]/30 leading-relaxed italic line-clamp-2">" {item.desc} "</p>
                    
                    {/* Meta ritual indicators */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#1a1c24]/5">
                      <div className="flex items-center gap-6 text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.2em] text-[#1a1c24]/15 italic">
                        <span className="flex items-center gap-3"><Star className="w-5 h-5 text-[#ff4d6d]/40" /> {item.serves} Realms</span>
                        <span className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#ff4d6d]/40" /> {item.time}</span>
                      </div>
                      <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#fbf9f6] flex items-center justify-center text-[#1a1c24]/10 group-hover:bg-[#1a1c24] group-hover:text-white transition-all transform hover:rotate-45 active:scale-75 shadow-sm">
                        <ShoppingBag className="w-5 h-5 md:w-7 md:h-7" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-32 md:py-64 bg-white relative overflow-hidden">
        {/* Subtle silk texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-24 md:mb-40 space-y-6">
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Witnesses</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24] leading-[1.1] italic">
              Words of <br className="hidden md:block" /><span className="text-[#bfa37e] font-normal italic">True Satisfaction.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { name: 'Priya R.', location: 'Chennai Realm', text: 'The Lotus Biscoff ritual was divine. Every layer hummed with perfection — carameled whispers and biscoff crunches… it vanished from our domain within moments!', stars: 5 },
              { name: 'Ananya S.', location: 'Tirunelveli Vault', text: 'Manifested a custom vision with the masters. They delivered an artifact that surpassed my dreams. It tasted of light and pure artisan grace!', stars: 5 },
              { name: 'Meera K.', location: 'Bangalore Palace', text: 'The Rasamalai fusion was a revelation. A sacred blend of traditional flavors in a modern manifestation. My spirit will definitely return for more!', stars: 5 },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-12 md:p-16 rounded-[4rem] md:rounded-[5rem] bg-[#fbf9f6] border border-[#1a1c24]/5 space-y-10 md:space-y-14 relative group hover:bg-white hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)] transition-all duration-700"
              >
                <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="text-6xl text-[#ff4d6d]/5 font-fraunces">"</div>
                </div>
                <div className="flex gap-2">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <Star key={j} className="w-5 h-5 md:w-6 md:h-6 fill-[#ff4d6d] text-[#ff4d6d] animate-pulse" style={{ animationDelay: `${j * 200}ms` }} />
                  ))}
                </div>
                <p className="text-[#1a1c24]/40 font-outfit italic leading-relaxed text-base md:text-xl">" {t.text} "</p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1a1c24]/5 flex items-center justify-center text-xl md:text-2xl font-fraunces font-black text-[#1a1c24]/20 italic group-hover:bg-[#ff4d6d] group-hover:text-white transition-all duration-500">
                     {t.name[0]}
                  </div>
                  <div>
                    <p className="font-fraunces font-black text-lg md:text-2xl text-[#1a1c24] italic">{t.name}</p>
                    <p className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM ORDER CTA UPDATED ── */}
      <section className="py-24 md:py-48 bg-[#1a1c24] relative overflow-hidden flex flex-col items-center">
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
         <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#ff4d6d]/10 rounded-full blur-[150px] md:blur-[200px]" />
         
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center space-y-10 md:space-y-16 relative z-10 flex flex-col items-center">
            <div className="space-y-6 text-center">
               <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">CUSTOM RITUALS</span>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-white leading-tight italic">
                  Celebrate With <br className="md:hidden" /><span className="italic font-normal text-[#bfa37e]">Pure Vision.</span>
               </h2>
               <p className="text-sm md:text-2xl text-white/30 font-outfit max-w-2xl mx-auto leading-relaxed italic">
                  "We invite you to the altar of creation. Share your dreams, and our master bakers will manifest them into artifacts of pure celestial joy."
               </p>
            </div>
            <Link href="/contact" className="group relative inline-flex items-center justify-center gap-6 px-12 md:px-16 py-6 md:py-8 bg-[#ff4d6d] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:scale-105 active:scale-95 transition-all shadow-2xl italic overflow-hidden">
               <div className="absolute inset-0 bg-[#1a1c24]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
               <span className="relative z-10 flex items-center justify-center gap-4 text-center">Order Custom Cake 🎂</span>
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
