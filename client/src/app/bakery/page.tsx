"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, ChevronRight, ShoppingBag, Star, Clock, Phone } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

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
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(220,176,175,0.2),transparent_60%)]" />
        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#ff4d6d]" />
                <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Artisan Bakery</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-fraunces font-black text-[#1a1c24] leading-[1.05]">
                Baked with <span className="italic font-normal text-[#bfa37e]">Love.</span>
              </h1>
              <p className="text-lg text-[#1a1c24]/50 font-outfit leading-relaxed max-w-md">
                From celebration cakes to everyday indulgences — every creation is handcrafted with the finest ingredients and baked fresh to order.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: '🎂', label: 'Custom Cakes' },
                  { icon: '🚚', label: 'Home Delivery' },
                  { icon: '⭐', label: '100% Fresh' },
                  { icon: '🌿', label: 'No Preservatives' },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#1a1c24]/5 shadow-sm">
                    <span>{b.icon}</span>
                    <span className="text-xs font-outfit font-bold text-[#1a1c24]/60 tracking-wide">{b.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="#menu" className="group inline-flex items-center gap-4 px-12 py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-2xl">
                  Explore Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-5 border-2 border-[#ff4d6d]/20 text-[#1a1c24] rounded-full font-bold text-sm hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] transition-all">
                  Custom Order 🎂
                </Link>
              </div>
            </motion.div>

            {/* Right: Hero images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative h-[540px] hidden lg:block"
            >
              {/* Main big card */}
              <div className="absolute top-0 right-0 w-[380px] h-[480px] rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] group">
                <img
                  src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Lotus Biscoff Cake"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[8px] font-outfit font-black uppercase tracking-[0.4em] text-white/60">Signature Cake</p>
                  <h3 className="text-xl font-fraunces font-bold text-white mt-1">Lotus Biscoff</h3>
                </div>
              </div>
              {/* Mini floating card */}
              <div className="absolute bottom-4 left-4 w-[240px] h-[200px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-4 border-white group">
                <img
                  src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Cupcakes"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              {/* Floating pill */}
              <div className="absolute top-[35%] left-0 bg-white rounded-2xl px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff4d6d]/10 rounded-full flex items-center justify-center text-lg">🌟</div>
                  <div>
                    <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#bfa37e]">Rated</p>
                    <p className="text-xl font-fraunces font-black text-[#1a1c24]">4.9 / 5</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR COLLECTIONS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Our Collections</span>
            <h2 className="text-5xl md:text-6xl font-fraunces font-black text-[#1a1c24] leading-tight">
              Something for <span className="italic font-normal">Every Craving.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {collectionCards.map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-1">
                  <p className="text-[8px] font-outfit font-black uppercase tracking-[0.4em] text-white/50">{col.count} items</p>
                  <h4 className="text-xl font-fraunces font-bold text-white leading-tight">{col.name}</h4>
                  <p className="text-xs font-outfit text-white/60">{col.desc}</p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU / PRODUCT GRID ── */}
      <section id="menu" className="py-32 bg-[#fbf9f6] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff4d6d]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#bfa37e]/5 rounded-full blur-[100px]" />

        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Best Sellers & More</span>
              <h2 className="text-5xl md:text-7xl font-fraunces font-black text-[#1a1c24] leading-tight">
                Our Full <span className="italic font-normal">Menu.</span>
              </h2>
            </div>
            <Link href="/contact" className="group flex items-center gap-3 text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/40 hover:text-[#ff4d6d] transition-all pb-3 border-b border-[#1a1c24]/10 hover:border-[#ff4d6d]">
              Custom Order <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 mb-14">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-outfit font-bold tracking-[0.2em] uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1a1c24] text-white shadow-md'
                    : 'text-[#1a1c24]/40 border border-[#1a1c24]/10 hover:border-[#1a1c24]/30 hover:text-[#1a1c24]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image */}
                  <Link href={`/bakery/${item.id}`} className="relative aspect-square overflow-hidden block">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-[9px] font-outfit font-black">{item.tag}</span>
                    </div>

                    {/* Wishlist */}
                    <button
                      onClick={(e) => { e.preventDefault(); toggleWishlist(item.id); }}
                      className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ff4d6d] hover:text-white shadow-lg"
                    >
                      <Heart className={`w-3.5 h-3.5 transition-colors ${wishlist.includes(item.id) ? 'fill-[#ff4d6d] text-[#ff4d6d]' : 'text-[#1a1c24]'}`} />
                    </button>
                  </Link>

                  {/* Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <Link href={`/bakery/${item.id}`}>
                        <h3 className="text-base font-fraunces font-bold text-[#1a1c24] leading-snug group-hover:text-[#ff4d6d] transition-colors line-clamp-2">
                          {item.name}
                        </h3>
                      </Link>
                      <span className="text-sm font-fraunces font-bold text-[#bfa37e] whitespace-nowrap">₹{item.price}</span>
                    </div>
                    <p className="text-xs font-outfit text-[#1a1c24]/40 leading-relaxed">{item.desc}</p>
                    {/* Meta */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-3 text-[9px] font-outfit font-bold uppercase tracking-wider text-[#1a1c24]/30">
                        <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {item.serves}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.time}</span>
                      </div>
                      <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1a1c24] text-white rounded-full text-[9px] font-outfit font-black uppercase tracking-widest hover:bg-[#ff4d6d] transition-colors">
                        <ShoppingBag className="w-3 h-3" /> Add
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
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Testimonials</span>
            <h2 className="text-5xl font-fraunces font-black text-[#1a1c24]">
              What Our <span className="italic font-normal">Customers Say.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Priya R.', location: 'Chennai', text: 'The Lotus Biscoff cake was absolutely divine! Every layer was perfect — the caramel drip, the biscoff crumble… it disappeared within minutes at the party!', stars: 5 },
              { name: 'Ananya S.', location: 'Coimbatore', text: 'Ordered a custom birthday cake with very specific design requirements. The team delivered exactly what I envisioned — and it tasted even better than it looked!', stars: 5 },
              { name: 'Meera K.', location: 'Bangalore', text: 'The Rasamalai fusion cake was a revelation. Perfect blend of traditional Indian flavours in an elegant modern presentation. Will definitely order again!', stars: 5 },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-[#fbf9f6] border border-[#1a1c24]/5 space-y-6 hover:-translate-y-1 transition-transform"
              >
                <div className="flex gap-1">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#ff4d6d] text-[#ff4d6d]" />
                  ))}
                </div>
                <p className="text-[#1a1c24]/60 font-outfit italic leading-relaxed text-sm">"{t.text}"</p>
                <div>
                  <p className="font-fraunces font-bold text-[#1a1c24]">{t.name}</p>
                  <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#bfa37e]">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM ORDER CTA ── */}
      <section className="py-32 bg-[#1a1c24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff4d6d]/10 rounded-full blur-[150px]" />
        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Custom Orders</span>
              <h2 className="text-5xl md:text-6xl font-fraunces font-black text-white leading-tight">
                Celebrate with a Cake Made <span className="italic text-[#bfa37e]">Just for You.</span>
              </h2>
              <p className="text-lg text-white/40 font-outfit leading-relaxed">
                Birthdays, weddings, anniversaries, baby showers — we craft custom cakes that turn your moments into memories. Share your vision and we'll bring it to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-4 px-12 py-5 bg-[#ff4d6d] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-2xl">
                  Order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center gap-3 px-12 py-5 border border-white/10 text-white/60 rounded-full font-bold text-sm hover:border-white/30 hover:text-white transition-all">
                  <Phone className="w-4 h-4" /> Call to Order
                </a>
              </div>
            </div>
            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { emoji: '🎨', title: 'Custom Design', desc: 'Your photo, theme, or concept recreated in cake' },
                { emoji: '🌿', title: 'Fresh Ingredients', desc: 'No preservatives. Baked fresh for every order.' },
                { emoji: '📦', title: 'Elegant Packaging', desc: 'Delivered in premium bakery boxes with care' },
                { emoji: '🎂', title: 'Any Occasion', desc: 'Birthdays, weddings, baby showers & more' },
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
