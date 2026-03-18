"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShoppingBag, ArrowRight, Heart, Star, ChevronRight, Scissors, Instagram, Facebook, Twitter } from 'lucide-react';
import { Navbar } from '../components/sections/Navbar';
import { Footer } from '../components/sections/Footer';
import { Logo } from '../components/ui/Logo';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/20 overflow-x-hidden">
      <Navbar />

      {/* Redesigned Hero Banner */}
      <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(220,176,175,0.15),transparent_60%)] pt-24">
        
        {/* Left Side: Bakery Highlight */}
        <motion.div 
          style={{ y: smoothY1 }}
          className="absolute left-[5%] top-[20%] z-20 hidden lg:block"
        >
          <div className="relative group">
            <div className="w-[340px] h-[440px] rounded-[3rem] overflow-hidden shadow-artisan rotate-[-3deg] transition-all duration-700 group-hover:rotate-0">
               <img 
                 src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Artisan Lotus Cake" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="mt-8 space-y-1 transform -rotate-3 group-hover:rotate-0 transition-transform duration-700">
               <span className="text-[10px] font-outfit font-bold uppercase tracking-[0.4em] text-secondary/60">Signature Bakery</span>
               <h4 className="text-3xl font-fraunces font-bold text-[#1a1c24]">Lotus Caramel</h4>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Boutique Highlight */}
        <motion.div 
          style={{ y: smoothY2 }}
          className="absolute right-[5%] top-[25%] z-20 hidden lg:block"
        >
          <div className="relative group">
            <div className="w-[360px] h-[500px] rounded-[3rem] overflow-hidden shadow-artisan rotate-[2deg] transition-all duration-700 group-hover:rotate-0">
               <img 
                 src="https://anyaonline.in/cdn/shop/files/5_4e137679-25e0-4fec-94de-0661134b06ad_400x.jpg?v=1770902247" 
                 alt="Atelier Collection" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <div className="mt-8 space-y-1 transform rotate-2 group-hover:rotate-0 transition-transform duration-700 text-right">
               <span className="text-[10px] font-outfit font-bold uppercase tracking-[0.4em] text-secondary/60">Atelier Series</span>
               <h4 className="text-3xl font-fraunces font-bold text-[#1a1c24]">Spring Curation</h4>
            </div>
          </div>
        </motion.div>

        {/* Center: Main Headings */}
        <div className="relative z-30 flex flex-col items-center text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-fraunces font-black leading-tight tracking-tight text-[#1a1c24]">
              Where <span className="text-[#ff4d6d] italic">Artistry</span> Meets <br />
              Your Finest Moments
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#1a1c24]/80 font-medium italic leading-relaxed">
              Experience a world curated for those who appreciate the <br />
              fine threads and secret recipes of life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
              <Link href="/boutique" className="group/btn relative px-12 py-5 bg-[#1a1c24] text-white rounded-full font-bold overflow-hidden shadow-2xl hover:scale-105 transition-all">
                 <span className="relative z-10 flex items-center gap-3">
                    Explore Atelier <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                 </span>
              </Link>
              <Link href="/bakery" className="px-12 py-5 border-2 border-[#ff4d6d]/20 bg-white text-secondary rounded-full font-bold hover:border-[#ff4d6d] hover:bg-[#ff4d6d]/5 transition-all hover:scale-105">
                 <span className="flex items-center gap-3">
                    Visit Grand Bakery
                 </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Icons for Background texture */}
        <div className="absolute top-[20%] left-[45%] opacity-10 animate-drift">
           <div className="w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
        </div>
        <div className="absolute bottom-[20%] right-[40%] opacity-20 animate-drift" style={{ animationDelay: '2s' }}>
           <div className="w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Weekly Spotlight Section */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 gap-12">
            <div className="space-y-6">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">The Weekly Selection</span>
              <h2 className="text-6xl md:text-8xl font-fraunces font-black text-[#1a1c24] leading-tight tracking-tight">
                Most Desired <br /> <span className="italic font-normal">Creations.</span>
              </h2>
            </div>
            <Link href="/shop" className="group flex items-center gap-4 text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/40 hover:text-[#ff4d6d] transition-all pb-3 border-b border-[#1a1c24]/10 hover:border-[#ff4d6d]">
               View All Series <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                tag: 'Signature Series', 
                name: 'Lotus Biscoff', 
                price: '450', 
                type: 'Artisan Bakery',
                img: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              { 
                tag: 'Atelier Series', 
                name: 'Silk Drape', 
                price: '7960', 
                type: 'Boutique Couture',
                img: 'https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_800x.jpg?v=1771048393'
              },
              { 
                tag: 'Limited Edition', 
                name: 'Berry Tart', 
                price: '380', 
                type: 'Artisan Bakery',
                img: 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              { 
                tag: 'Spring Collection', 
                name: 'Pink Banarasi', 
                price: '17400', 
                type: 'Boutique Couture',
                img: 'https://anyaonline.in/cdn/shop/files/1_3d4bcb96-0782-4338-9c5a-1a0740261f36_800x.jpg?v=1757499348'
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                 <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-artisan bg-accent/20 transition-all duration-700 hover:-translate-y-2">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                       <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-secondary shadow-xl hover:bg-[#ff4d6d] hover:text-white transition-all">
                          <Heart className="w-5 h-5" />
                       </button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 </div>
                 
                 <div className="mt-8 space-y-3 px-2">
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#ff4d6d] mb-1">{item.type}</p>
                          <h4 className="text-2xl font-fraunces font-bold text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors">{item.name}</h4>
                       </div>
                       <span className="text-xl font-fraunces font-bold text-[#1a1c24] opacity-40">${item.price}</span>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOUTIQUE SHOWCASE ── */}
      <section className="py-40 bg-[#fbf9f6] overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Left: Images stacked with offset */}
            <div className="relative h-[680px] hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="absolute top-0 left-0 w-[380px] h-[500px] rounded-[3rem] overflow-hidden shadow-artisan"
              >
                <img src="https://anyaonline.in/cdn/shop/files/WhatsApp_Image_2026-02-23_at_12.02.24_PM_800x.jpg?v=1771828434" alt="Boutique Collection" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="absolute bottom-0 right-0 w-[300px] h-[400px] rounded-[3rem] overflow-hidden shadow-artisan border-4 border-white"
              >
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80" alt="Boutique Style" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
              {/* Floating badge */}
              <div className="absolute top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-artisan text-center px-2">
                <span className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#bfa37e]">New</span>
                <span className="text-xs font-fraunces font-bold text-[#1a1c24] leading-tight">Spring<br/>2026</span>
              </div>
            </div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">The Boutique</span>
              <h2 className="text-6xl md:text-7xl font-fraunces font-black text-[#1a1c24] leading-tight">
                Crafted for <br /><span className="italic font-normal">Every Occasion.</span>
              </h2>
              <p className="text-lg text-[#1a1c24]/50 font-outfit leading-relaxed max-w-md">
                From grand celebrations to intimate evenings — our curated atelier brings you handpicked ethnic wear, designer silhouettes, and timeless classics.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {['Ethnic Wear', 'Gowns', 'Salwar Suits', 'Designer Blouses'].map(tag => (
                  <span key={tag} className="px-5 py-2 rounded-full border border-[#bfa37e]/30 text-xs font-outfit font-bold tracking-widest text-[#bfa37e] hover:bg-[#bfa37e]/10 transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/boutique" className="group inline-flex items-center gap-4 px-12 py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-2xl">
                Shop the Boutique <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SWEETS & TREATS GRID ── */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#ff4d6d]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#bfa37e]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Artisan Bakery</span>
            <h2 className="text-6xl md:text-8xl font-fraunces font-black text-[#1a1c24] leading-tight">
              Sweet <span className="italic font-normal">Temptations.</span>
            </h2>
            <p className="max-w-xl mx-auto text-lg text-[#1a1c24]/50 font-outfit">
              Every bite tells a story — baked with love, decorated with artistry.
            </p>
          </div>

          {/* Large Featured + Small Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature card — large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 group relative rounded-[3rem] overflow-hidden h-[600px] shadow-artisan cursor-pointer"
            >
              <img src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Lotus Biscoff Cake" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 space-y-2">
                <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-white/60">Signature Cake</p>
                <h3 className="text-3xl font-fraunces font-bold text-white">Lotus Biscoff</h3>
                <p className="text-sm text-white/60 font-outfit">Caramel drip · Biscoff crunch · Cream layers</p>
              </div>
            </motion.div>

            {/* Mini cards — 2x2 grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-8">
              {[
                { name: 'Red Velvet Dreams', cat: 'Custom Cakes', price: '₹850', img: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80' },
                { name: 'Fudge Brownies', cat: 'Homemade Bakes', price: '₹320', img: 'https://images.unsplash.com/photo-1607920592519-bab8af50f04c?auto=format&fit=crop&q=80' },
                { name: 'Berry Cheesecake', cat: 'No-Bake Series', price: '₹650', img: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80' },
                { name: 'Macarons Box', cat: 'Gift Hampers', price: '₹480', img: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative rounded-[2.5rem] overflow-hidden h-[280px] shadow-artisan cursor-pointer"
                >
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[8px] font-outfit font-black uppercase tracking-[0.3em] text-white/60 mb-1">{item.cat}</p>
                    <div className="flex justify-between items-end">
                      <h4 className="text-lg font-fraunces font-bold text-white leading-tight">{item.name}</h4>
                      <span className="text-sm font-fraunces font-bold text-white/70">{item.price}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl hover:bg-[#ff4d6d] hover:text-white transition-all">
                      <Heart className="w-4 h-4 text-[#ff4d6d] group-hover:text-white" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-20">
            <Link href="/bakery" className="group inline-flex items-center gap-4 px-12 py-5 border-2 border-[#ff4d6d]/20 bg-white text-[#1a1c24] rounded-full font-bold text-sm hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] hover:scale-105 transition-all">
              Explore Full Bakery Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BRAND PROMISE STRIP ── */}
      <section className="py-32 bg-[#1a1c24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Why PRANAVIKA'S</span>
            <h2 className="text-5xl md:text-6xl font-fraunces font-black text-white leading-tight">
              Artistry You Can <span className="text-[#bfa37e] italic">Taste & Wear.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎂', title: 'Custom Orders', desc: 'Cakes & bakes made to your exact vision, for any celebration.' },
              { icon: '✂️', title: 'Atelier Crafted', desc: 'Every stitch and silhouette tailored for your perfect moment.' },
              { icon: '📦', title: 'Gift Hampers', desc: 'Curated boxes of sweets and fashion goodies for loved ones.' },
              { icon: '⭐', title: '100% Artisan', desc: 'No shortcuts. Handcrafted with premium ingredients & fabric.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group space-y-6"
              >
                <span className="text-4xl">{item.icon}</span>
                <h4 className="text-xl font-fraunces font-bold text-white group-hover:text-[#bfa37e] transition-colors">{item.title}</h4>
                <p className="text-sm text-white/40 font-outfit leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM FOOTER ── */}
      <footer className="bg-[#fbf9f6] relative overflow-hidden">
        {/* Top glow line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#bfa37e]/30 to-transparent" />
        
        {/* Main footer body */}
        <div className="max-w-[1800px] mx-auto px-10 py-28">
          <div className="grid lg:grid-cols-5 gap-20 mb-24">
            
            {/* Brand col — wider */}
            <div className="lg:col-span-2 space-y-10">
              <Logo />
              <p className="text-sm text-[#1a1c24]/40 font-outfit italic leading-relaxed max-w-xs">
                Where fine threads meet finest flavours. Crafting memories through artisan fashion and homemade baking since 2020.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-6">
                {[
                  { icon: <Instagram className="w-4 h-4" />, href: '/', label: 'Instagram' },
                  { icon: <Facebook className="w-4 h-4" />, href: '/', label: 'Facebook' },
                  { icon: <Twitter className="w-4 h-4" />, href: '/', label: 'Twitter' },
                ].map(({ icon, href, label }) => (
                  <Link key={label} href={href} aria-label={label}
                    className="w-10 h-10 rounded-full border border-[#1a1c24]/10 flex items-center justify-center text-[#1a1c24]/30 hover:border-[#ff4d6d] hover:text-[#ff4d6d] hover:bg-[#ff4d6d]/5 transition-all">
                    {icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Nav Columns */}
            {[
              { heading: 'Explore', links: [{ label: 'The Boutique', href: '/boutique' }, { label: 'The Bakery', href: '/bakery' }, { label: 'Homemade', href: '/homemade' }, { label: 'Gift Hampers', href: '/gifts' }] },
              { heading: 'About', links: [{ label: 'Our Story', href: '/our-story' }, { label: 'Artisans', href: '/artisans' }, { label: 'Careers', href: '/careers' }, { label: 'Contact Us', href: '/contact' }] },
              { heading: 'Policies', links: [{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Use', href: '/terms' }, { label: 'Returns', href: '/returns' }] },
            ].map((col) => (
              <div key={col.heading} className="space-y-8">
                <h5 className="text-[9px] font-outfit font-black uppercase tracking-[0.5em] text-[#1a1c24]/25">{col.heading}</h5>
                <ul className="space-y-5">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="text-sm font-fraunces italic text-[#1a1c24]/55 hover:text-[#ff4d6d] transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter strip */}
          <div className="py-14 px-14 rounded-[2.5rem] bg-[#1a1c24] flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
            <div className="space-y-2">
              <h4 className="text-xl font-fraunces font-bold text-white">Stay in the loop</h4>
              <p className="text-sm text-white/40 font-outfit">New arrivals, seasonal menus & exclusive drops.</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 md:w-72 px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/30 text-sm font-outfit border border-white/10 focus:outline-none focus:border-[#ff4d6d]/50"
              />
              <button className="px-8 py-4 bg-[#ff4d6d] text-white rounded-full text-sm font-outfit font-bold hover:scale-105 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#1a1c24]/5">
            <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20">
              © 2026 PRANAVIKA'S Sweet & Chic · All Rights Reserved
            </p>
            <div className="flex gap-8">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
