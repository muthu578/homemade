"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShoppingBag, ArrowRight, Heart, Star, Sparkles, ChevronRight, Play, Scroll, Scissors, Utensils, UtensilsCrossed } from 'lucide-react';
import { Navbar } from '../components/sections/Navbar';
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
                 src="/bakery-hero.jpg" 
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
                 src="/boutique-hero.jpg" 
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
                price: '45', 
                type: 'Artisan Bakery',
                img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80'
              },
              { 
                tag: 'Atelier Series', 
                name: 'Silk Drape', 
                price: '280', 
                type: 'Boutique Couture',
                img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80'
              },
              { 
                tag: 'Limited Edition', 
                name: 'Berry Tart', 
                price: '38', 
                type: 'Artisan Bakery',
                img: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80'
              },
              { 
                tag: 'Spring Collection', 
                name: 'Ivory Gown', 
                price: '420', 
                type: 'Boutique Couture',
                img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80'
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

      {/* Brand Footer */}
      <footer className="py-28 bg-[#fbf9f6] border-t border-[#1a1c24]/5 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/10 blur-[80px] rounded-full" />

        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-20">
            
            {/* Brand Block */}
            <div className="flex flex-col items-start gap-6 max-w-xs">
              <Logo />
              <p className="text-sm text-[#1a1c24]/40 font-outfit italic leading-relaxed mt-2">
                Crafting memories through the fine threads of fashion and the secret recipes of artisan baking.
              </p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-8">
                <h5 className="text-[9px] font-outfit font-black uppercase tracking-[0.5em] text-[#1a1c24]/30">Explore</h5>
                <ul className="space-y-5">
                  {['The Boutique', 'The Bakery', 'Homemade'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace('the ', '')}`} className="text-sm font-fraunces italic text-[#1a1c24]/60 hover:text-[#ff4d6d] transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <h5 className="text-[9px] font-outfit font-black uppercase tracking-[0.5em] text-[#1a1c24]/30">About</h5>
                <ul className="space-y-5">
                  {['Our Story', 'Artisans', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-fraunces italic text-[#1a1c24]/60 hover:text-[#ff4d6d] transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block space-y-8">
                <h5 className="text-[9px] font-outfit font-black uppercase tracking-[0.5em] text-[#1a1c24]/30">Legal</h5>
                <ul className="space-y-5">
                  {['Privacy Policy', 'Terms of Use'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-fraunces italic text-[#1a1c24]/60 hover:text-[#ff4d6d] transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="pt-12 border-t border-[#1a1c24]/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20">
              © 2026 PRANAVIKA'S • All Rights Reserved
            </p>
            <div className="flex gap-10">
              {['Instagram', 'Pinterest', 'Twitter'].map((social) => (
                <Link key={social} href="/" className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-colors">
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
