"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Star, Check, Clock, Users, ShieldCheck, Flame } from 'lucide-react';
import { Navbar } from '../../../components/sections/Navbar';
import { Footer } from '../../../components/sections/Footer';

// Mock bakery data
const products = [
  { id: 1, name: 'Lotus Biscoff Caramel Cake', category: 'Gourmet Cakes', price: 1200, tag: '⭐ Bestseller', img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'A heavenly fusion of caramelized Biscoff crunch, rich cream layers, and a luscious caramel drip.', serves: '6–8', time: '24h notice' },
  { id: 2, name: 'Rose & Pistachio Cake', category: 'Gourmet Cakes', price: 1350, tag: '🌹 Signature', img: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Delicate rose-infused sponge layered with crushed pistachios and silky whipped cream.', serves: '6–8', time: '24h notice' },
  { id: 3, name: 'Triple Chocolate Fudge', category: 'Cakes', price: 980, tag: '🍫 Fan Fave', img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Indulgent triple-layered cake with dark, milk, and white chocolate ganache for true cocoa lovers.', serves: '4–6', time: '12h notice' },
];

export default function BakeryProductPage() {
  const params = useParams();
  const id = Number(params.id);
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === id) || products[0];

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24]">
      <Navbar />

      <section className="pt-24 md:pt-48 pb-16 md:pb-32 bg-[#fbf9f6] relative overflow-hidden">
        {/* Decorative halos */}
        <div className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[150px] -z-0" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[120px] -z-0" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/bakery" className="group inline-flex items-center gap-4 text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-all mb-10 md:mb-16">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> 
              <span className="italic">Return to Bakery Sanctum</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Gallery Section refined */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="relative aspect-square rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.12)] group border-[6px] md:border-[12px] border-white active:scale-95 transition-transform"
            >
               <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c24]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               
               {/* Tag refined */}
               <div className="absolute top-8 left-8 md:top-12 md:left-12">
                  <div className="px-6 py-3 md:px-8 md:py-4 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-full border border-white/20">
                    <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.3em] text-[#ff4d6d] italic">{product.tag}</span>
                  </div>
               </div>
            </motion.div>

            {/* Content Side refined */}
            <div className="flex flex-col gap-10 md:gap-14">
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8 md:space-y-10"
               >
                  <div className="space-y-6">
                     <div className="flex flex-wrap items-center gap-4">
                        <span className="px-5 py-2 bg-white rounded-full text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] text-[#bfa37e] shadow-sm border border-[#bfa37e]/10 italic">{product.category} Ritual</span>
                        <div className="flex gap-1.5 text-[#ff4d6d]">
                           {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />)}
                        </div>
                     </div>
                     <h1 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black leading-tight text-[#1a1c24] italic tracking-tight">{product.name}</h1>
                     <div className="flex items-baseline gap-4">
                        <p className="text-3xl md:text-5xl font-fraunces font-black text-[#bfa37e] italic">₹{product.price.toLocaleString()}</p>
                        <span className="text-[10px] md:text-xs font-outfit font-black text-[#1a1c24]/20 uppercase tracking-[0.2em] italic">Artisan Value</span>
                     </div>
                  </div>

                  <p className="text-sm md:text-xl font-outfit text-[#1a1c24]/40 italic leading-relaxed max-w-xl group">
                     " <span className="group-hover:text-[#1a1c24]/60 transition-colors duration-500">{product.desc}</span> "
                  </p>
               </motion.div>

               {/* Meta Details Pills refined for mobile wrap */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-wrap gap-3 md:gap-4"
               >
                  {[
                    { icon: Users, label: `Serves ${product.serves} Realms` },
                    { icon: Clock, label: product.time },
                    { icon: ShieldCheck, label: 'Eggless Available' },
                    { icon: Flame, label: 'Manifested Daily' }
                  ].map((pill, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white border border-[#1a1c24]/5 shadow-sm text-[9px] md:text-[11px] font-outfit font-black uppercase tracking-[0.2em] text-[#1a1c24]/30 italic hover:border-[#ff4d6d]/20 transition-all cursor-default">
                       <pill.icon className="w-4 h-4 md:w-5 md:h-5 text-[#ff4d6d]/40" />
                       {pill.label}
                    </div>
                  ))}
               </motion.div>

               {/* Actions refined */}
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
                     <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                     {added ? <><Check className="w-6 h-6 animate-bounce" /> Added to Vault</> : <><ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" /> Order for Delivery</>}
                  </button>
                  <button className="w-full sm:w-24 h-14 sm:h-auto border-2 border-[#1a1c24]/5 rounded-full flex items-center justify-center hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all active:scale-75 shadow-sm">
                     <Heart className="w-6 h-6 md:w-8 md:h-8 hover:fill-current" />
                  </button>
               </motion.div>
               
               <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[9px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/15 text-center md:text-left flex items-center justify-center md:justify-start gap-4 italic"
               >
                  <ShieldCheck className="w-5 h-5 text-[#ff4d6d]/20" /> Secure Artisan Checkout · Verified Palace Quality
               </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section refined */}
      <section className="py-12 md:py-20 bg-white border-y border-[#1a1c24]/5 relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center relative z-10 space-y-20 md:space-y-32">
            <div className="space-y-6">
               <h4 className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#bfa37e] italic">The Secret Rituals</h4>
               <h2 className="text-4xl md:text-7xl font-fraunces font-black text-[#1a1c24] italic">Sacred Quality.</h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
               {[
                 { emoji: '🌿', title: 'Soul Ingredients', desc: 'Premium cocoa, organic fruits & artisan flours curated for the divine.' },
                 { emoji: '🔥', title: 'Fresh Manifest', desc: 'Baked from scratch upon your ritual confirmation. Zero preservatives.' },
                 { emoji: '💌', title: 'Custom Verses', desc: 'Handwritten greeting scrolls included with every celestial masterpiece.' }
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 group"
                 >
                    <div className="text-5xl md:text-6xl mb-6 transform group-hover:scale-125 transition-transform group-hover:rotate-12 duration-500">{item.emoji}</div>
                    <div className="space-y-4">
                       <h5 className="text-2xl md:text-3xl font-fraunces font-black text-[#1a1c24] italic group-hover:text-[#ff4d6d] transition-colors">{item.title}</h5>
                       <p className="text-sm md:text-base font-outfit text-[#1a1c24]/30 leading-relaxed font-medium italic">" {item.desc} "</p>
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
