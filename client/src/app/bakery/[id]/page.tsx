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

      <section className="pt-32 pb-20">
        <div className="max-w-[1500px] mx-auto px-10">
          
          <Link href="/bakery" className="inline-flex items-center gap-2 text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 hover:text-[#ff4d6d] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Bakery
          </Link>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Gallery */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="aspect-square rounded-[4rem] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.15)] group relative"
            >
               <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute top-8 left-8">
                  <span className="px-6 py-3 bg-white/95 backdrop-blur-sm shadow-xl rounded-full text-xs font-outfit font-black uppercase tracking-widest text-[#ff4d6d]">{product.tag}</span>
               </div>
            </motion.div>

            {/* Content Sidebar */}
            <div className="space-y-12">
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <span className="px-3 py-1 bg-[#bfa37e]/10 text-[#bfa37e] text-[9px] font-outfit font-black uppercase tracking-widest rounded-full">{product.category} Boutique</span>
                     <div className="flex gap-0.5 text-[#ff4d6d]">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3" />)}
                     </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-fraunces font-black leading-tight">{product.name}</h1>
                  <p className="text-3xl font-fraunces font-black text-[#1a1c24]/70">₹{product.price.toLocaleString()}</p>
               </div>

               <p className="text-lg font-outfit text-[#1a1c24]/50 leading-relaxed max-w-xl italic">
                  "{product.desc}"
               </p>

               {/* Meta Details Pills */}
               <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Users, label: `Serves ${product.serves}` },
                    { icon: Clock, label: product.time },
                    { icon: ShieldCheck, label: 'Eggless Available' },
                    { icon: Flame, label: 'Fresh Daily' }
                  ].map((pill, i) => (
                    <div key={i} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#1a1c24]/5 shadow-sm text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/40">
                       <pill.icon className="w-4 h-4 text-[#ff4d6d]/40" />
                       {pill.label}
                    </div>
                  ))}
               </div>

               {/* Actions */}
               <div className="flex gap-4 pt-4 border-t border-[#1a1c24]/5">
                  <button 
                    onClick={handleAddToCart}
                    className={`flex-[2] py-6 rounded-full font-bold text-sm transition-all shadow-2xl flex items-center justify-center gap-3 ${added ? 'bg-green-500 text-white' : 'bg-[#1a1c24] text-white hover:scale-[1.02]'}`}
                  >
                     {added ? <><Check className="w-5 h-5" /> Added to Bag</> : <><ShoppingBag className="w-5 h-5" /> Order for Delivery</>}
                  </button>
                  <button className="w-18 h-18 border-2 border-[#1a1c24]/5 rounded-full flex items-center justify-center hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] transition-all px-6">
                     <Heart className="w-6 h-6" />
                  </button>
               </div>
               
               <p className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 text-center md:text-left flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4" /> Secure Artisan Checkout Guaranteed
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-sell or Nutrition Section */}
      <section className="py-24 bg-white border-y border-[#1a1c24]/5">
         <div className="max-w-[1500px] mx-auto px-10 text-center space-y-12">
            <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#bfa37e]">Craftsmanship</h4>
            <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-12">
               {[
                 { title: 'Fine Ingredients', desc: 'Premium cocoa, organic fruits & artisan flours.' },
                 { title: 'No Preservatives', desc: 'Baked from scratch after your order is confirmed.' },
                 { title: 'Custom Notes', desc: 'Free handwritten greeting card with every cake.' }
               ].map((item, i) => (
                 <div key={i} className="space-y-3">
                    <h5 className="font-fraunces font-bold text-[#1a1c24]">{item.title}</h5>
                    <p className="text-xs font-outfit text-[#1a1c24]/40 leading-relaxed font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
