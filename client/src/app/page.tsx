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
  
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/20 overflow-x-hidden">
      <Navbar />

      {/* Redesigned Hero Banner - Improved for Mobile */}
      <section ref={containerRef} className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(220,176,175,0.18),transparent_65%)] pt-32 md:pt-48">
        
        {/* Decorative Halos for mobile texture */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#ff4d6d]/5 rounded-full blur-[100px] -z-0 opacity-50 md:hidden" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#bfa37e]/5 rounded-full blur-[80px] -z-0 opacity-50 md:hidden" />

        {/* Left Side: Bakery Highlight - Only on Desktop */}
        <motion.div 
          style={{ y: smoothY1 }}
          className="absolute left-[5%] top-[20%] z-20 hidden 2xl:block"
        >
          <div className="relative group">
            <div className="w-[300px] h-[400px] rounded-[3rem] overflow-hidden shadow-artisan rotate-[-3deg] transition-all duration-700 group-hover:rotate-0 border-[6px] border-white active:scale-95">
               <img 
                 src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Artisan Lotus Cake" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="mt-8 space-y-2 transform -rotate-3 group-hover:rotate-0 transition-transform duration-700">
               <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]/60 italic">Sacred Bakery</span>
               <h4 className="text-3xl font-fraunces font-black text-[#1a1c24] italic">Lotus Caramel</h4>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Boutique Highlight - Only on Desktop */}
        <motion.div 
          style={{ y: smoothY2 }}
          className="absolute right-[5%] top-[25%] z-20 hidden 2xl:block"
        >
          <div className="relative group">
            <div className="w-[320px] h-[460px] rounded-[3rem] overflow-hidden shadow-artisan rotate-[2deg] transition-all duration-700 group-hover:rotate-0 border-[6px] border-white active:scale-95">
               <img 
                 src="https://anyaonline.in/cdn/shop/files/5_4e137679-25e0-4fec-94de-0661134b06ad_400x.jpg?v=1770902247" 
                 alt="Atelier Collection" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="mt-8 space-y-2 transform rotate-2 group-hover:rotate-0 transition-transform duration-700 text-right">
               <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#bfa37e]/60 italic">Atelier Series</span>
               <h4 className="text-3xl font-fraunces font-black text-[#1a1c24] italic">Spring Ritual</h4>
            </div>
          </div>
        </motion.div>

        {/* Center: Main Headings refined */}
        <div className="relative z-30 flex flex-col items-center text-center px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Pranavika Manifesto</span>
              <h1 className="text-4xl md:text-6xl lg:text-[75px] font-fraunces font-black leading-[1.05] tracking-tight text-[#1a1c24] italic">
                Where <span className="text-[#ff4d6d]">Artistry</span> Meets <br className="hidden sm:block" />
                <span className="text-[#bfa37e] font-normal">Divine Moments</span>
              </h1>
            </div>
            
            <p className="max-w-3xl mx-auto text-base md:text-2xl text-[#1a1c24]/40 font-outfit font-medium italic leading-relaxed">
              "Bespoke threads & sacred crumbs. Experience a world <br className="hidden md:block" />
              curated for those who worship the rituals of life."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 pt-6 md:pt-10">
              <Link href="/boutique" className="w-full sm:w-auto group/btn relative px-10 md:px-16 py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all">
                 <div className="absolute inset-0 bg-[#ff4d6d]/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                 <span className="relative z-10 flex items-center justify-center gap-4">
                    The Atelier <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                 </span>
              </Link>
              <Link href="/bakery" className="w-full sm:w-auto px-10 md:px-16 py-6 md:py-8 border-2 border-[#1a1c24]/5 bg-white text-[#1a1c24] rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] hover:border-[#ff4d6d] hover:bg-[#ff4d6d]/5 shadow-xl hover:scale-105 active:scale-95 transition-all italic">
                 The Sanctum
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Icons for Background texture */}
        <div className="absolute top-[20%] left-[45%] opacity-15 animate-drift">
           <div className="w-24 h-24 bg-[#ff4d6d]/10 rounded-full blur-2xl" />
        </div>
        <div className="absolute bottom-[20%] right-[40%] opacity-20 animate-drift" style={{ animationDelay: '2s' }}>
           <div className="w-48 h-48 bg-[#bfa37e]/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Weekly Spotlight Section refined */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-10 md:gap-16">
            <div className="space-y-6 md:space-y-8">
              <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Weekly Manifesto</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24] leading-[1.1] tracking-tight italic">
                Most Desired <br /> <span className="italic font-normal text-[#bfa37e]">Creations.</span>
              </h2>
            </div>
            <Link href="/boutique" className="group flex items-center gap-6 text-[11px] md:text-[13px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 hover:text-[#ff4d6d] transition-all pb-4 border-b border-[#1a1c24]/5 hover:border-[#ff4d6d] self-start md:self-auto italic">
               Explore Full Series <ChevronRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { 
                tag: 'Signature Ritual', 
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
                tag: 'Limited Manifest', 
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
              <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: i * 0.1 }}
                 className="group relative"
              >
                 <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] bg-[#fbf9f6] transition-all duration-700 hover:-translate-y-4 border border-[#1a1c24]/5 active:scale-95">
                    <img 
                       src={item.img} 
                       alt={item.name} 
                       className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                    />
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                       <button className="w-14 h-14 bg-white/95 backdrop-blur-2xl rounded-full flex items-center justify-center text-[#1a1c24] shadow-2xl hover:bg-[#ff4d6d] hover:text-white transition-all transform active:scale-75">
                          <Heart className="w-5 h-5" />
                       </button>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#1a1c24]/80 to-transparent">
                       <button className="w-full py-4 bg-white text-[#1a1c24] rounded-full font-black text-[10px] uppercase tracking-[0.3em] italic">Swift Manifest</button>
                    </div>
                 </div>
                 
                 <div className="mt-8 space-y-4 px-2">
                    <div className="flex justify-between items-start gap-4">
                       <div className="space-y-1">
                          <p className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d] italic">{item.type}</p>
                          <h4 className="text-2xl font-fraunces font-black text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors line-clamp-1 italic">{item.name}</h4>
                       </div>
                       <span className="text-2xl font-fraunces font-black text-[#1a1c24]/30 italic">₹{item.price}</span>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOUTIQUE SHOWCASE ── Improved stacking for mobile */}
      <section className="py-24 md:py-48 bg-[#fbf9f6] overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

            {/* Left: Images stacked with offset - Refined for mobile */}
            <div className="relative h-[450px] md:h-[750px] order-1">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 className="absolute top-0 right-0 lg:left-0 w-[85%] lg:w-[450px] h-[350px] md:h-[550px] rounded-[4rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.1)] border-[8px] md:border-[15px] border-white z-0"
               >
                 <img src="https://anyaonline.in/cdn/shop/files/WhatsApp_Image_2026-02-23_at_12.02.24_PM_800x.jpg?v=1771828434" alt="Boutique Collection" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" />
               </motion.div>
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="absolute bottom-0 left-0 lg:right-0 lg:left-auto w-[65%] lg:w-[350px] h-[280px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-artisan border-[6px] md:border-[12px] border-white z-10 active:scale-95 transition-transform"
               >
                 <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80" alt="Boutique Style" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" />
               </motion.div>
               {/* Floating badge refined */}
               <div className="absolute top-[40%] right-[10%] lg:left-[50%] lg:-translate-x-1/2 -translate-y-1/2 z-20 bg-[#1a1c24] rounded-full w-24 h-24 md:w-36 md:h-36 flex flex-col items-center justify-center shadow-2xl text-center px-4 animate-float border-4 border-white/10">
                 <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-widest text-[#ff4d6d] italic mb-1">Ritual</span>
                 <span className="text-sm md:text-xl font-fraunces font-black text-white leading-tight italic">Spring<br/>2026</span>
               </div>
            </div>

            {/* Right: Text refined */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10 md:space-y-16 order-2"
            >
              <div className="space-y-6">
                <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Atelier Sanctum</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24] leading-[1.1] italic">
                  Crafted for <br /><span className="italic font-normal text-[#bfa37e]">Every Manifestation.</span>
                </h2>
              </div>
              <p className="text-sm md:text-2xl text-[#1a1c24]/30 font-outfit leading-relaxed max-w-xl italic">
                "From celestial unions to twilight whispers — our curated atelier manifests handpicked ethnic souls, designer silhouettes, and timeless artifacts."
              </p>
              <div className="flex flex-wrap gap-3 md:gap-5 pt-4">
                {['Ethnic Souls', 'Celestial Gowns', 'Salwar Rituals', 'Sacred Blouses'].map(tag => (
                  <span key={tag} className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#bfa37e]/20 text-[9px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] text-[#bfa37e] hover:bg-[#bfa37e] hover:text-white transition-all cursor-default italic bg-white shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/boutique" className="group relative inline-flex items-center justify-center gap-6 w-full sm:w-auto px-12 md:px-20 py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:scale-105 active:scale-95 transition-all shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden">
                 <div className="absolute inset-0 bg-[#ff4d6d]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                 <span className="relative z-10 flex items-center justify-center gap-6">Manifest Your Style <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SWEETS & TREATS GRID ── Improved for mobile grid */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#ff4d6d]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#bfa37e]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-20 md:mb-32 space-y-8 md:space-y-12">
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Sacred Bakery</span>
            <h2 className="text-3xl md:text-5xl lg:text-[75px] font-fraunces font-black text-[#1a1c24] leading-tight italic">
              Sweet <span className="italic font-normal text-[#bfa37e]">Temptations.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-2xl text-[#1a1c24]/30 font-outfit italic leading-relaxed">
              "Every crumb whispers a secret — manifests with love, adorned with heavenly artistry."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 group relative rounded-[4rem] overflow-hidden min-h-[500px] md:h-full lg:h-[800px] shadow-[0_60px_120px_rgba(0,0,0,0.1)] cursor-pointer order-2 lg:order-1 border-[10px] border-white active:scale-95 transition-transform"
            >
              <img src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Lotus Biscoff Cake" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c24]/90 via-[#1a1c24]/10 to-transparent" />
              <div className="absolute bottom-12 md:bottom-20 left-10 md:left-16 right-10 md:right-16 space-y-6">
                <p className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d] italic">Sacred Signature</p>
                <h3 className="text-4xl md:text-6xl font-fraunces font-black text-white italic">Lotus Biscoff</h3>
                <p className="text-xs md:text-lg text-white/40 font-outfit font-medium italic">Celestial Caramel drip · Biscoff crunch · Sacred Cream layers</p>
                <button className="px-10 py-5 bg-white text-[#1a1c24] rounded-full font-black text-[10px] uppercase tracking-[0.4em] italic mt-6 hover:bg-[#ff4d6d] hover:text-white transition-all shadow-2xl">Order Ritual</button>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 order-1 lg:order-2">
              {[
                { name: 'Red Velvet Dreams', cat: 'Custom Rituals', price: '₹850', img: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80' },
                { name: 'Fudge Souls', cat: 'Sacred Bakes', price: '₹320', img: 'https://images.unsplash.com/photo-1607920592519-bab8af50f04c?auto=format&fit=crop&q=80' },
                { name: 'Berry Heavens', cat: 'Etherial Series', price: '₹650', img: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80' },
                { name: 'Macarons Verses', cat: 'Gift Scrolls', price: '₹480', img: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group relative rounded-[3rem] overflow-hidden h-[300px] md:h-[380px] shadow-artisan cursor-pointer border-[6px] border-white active:scale-95 transition-transform"
                >
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#1a1c24] to-transparent">
                    <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-white/40 mb-2 italic">{item.cat}</p>
                    <div className="flex justify-between items-end gap-4">
                      <h4 className="text-xl md:text-2xl font-fraunces font-black text-white leading-tight italic truncate">{item.name}</h4>
                      <span className="text-lg font-fraunces font-black text-[#ff4d6d] italic">{item.price}</span>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-12 h-12 bg-white/95 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-2xl hover:bg-[#ff4d6d] hover:text-white transition-all transform active:scale-75">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-20 md:mt-32">
            <Link href="/bakery" className="group relative inline-flex items-center justify-center gap-6 w-full sm:w-auto px-12 md:px-20 py-6 md:py-8 border-2 border-[#1a1c24]/5 bg-white text-[#1a1c24] rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] hover:scale-105 active:scale-95 transition-all shadow-xl italic">
              Explore Full Sanctum Menu <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BRAND PROMISE STRIP ── Refined for mobile stacking */}
      <section className="py-24 md:py-48 bg-[#1a1c24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-24 md:mb-32 space-y-6 md:space-y-10">
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Pranavika Soul</span>
            <h2 className="text-3xl md:text-6xl font-fraunces font-black text-white leading-tight italic">
              Artistry You Can <span className="text-[#bfa37e] font-normal">Taste & Wear.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
            {[
              { emoji: '🎂', title: 'Sacred Rituals', desc: 'Cakes & bakes manifested to your exact vision for celestial unions.' },
              { emoji: '🧵', title: 'Atelier Crafted', desc: 'Every stitch and silhouette tailored for your most sacred moments.' },
              { emoji: '🎁', title: 'Gift Scrolls', desc: 'Curated boxes of sweet artifacts and fashion treasures for loved ones.' },
              { emoji: '✨', title: '100% Artisan', desc: 'No shortcuts. Handcrafted with divine ingredients & ethereal fabric.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15 }}
                className="p-10 md:p-14 rounded-[3.5rem] border border-white/5 bg-white/[0.03] backdrop-blur-2xl hover:bg-white/[0.08] transition-all group space-y-8 md:space-y-10 active:scale-95"
              >
                <div className="text-5xl md:text-7xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700 w-fit">{item.emoji}</div>
                <div className="space-y-4 md:space-y-6">
                   <h4 className="text-2xl md:text-3xl font-fraunces font-black text-white group-hover:text-[#ff4d6d] transition-colors italic">{item.title}</h4>
                   <p className="text-[11px] md:text-base text-white/30 font-outfit font-medium italic leading-relaxed group-hover:text-white/50 transition-colors">" {item.desc} "</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
