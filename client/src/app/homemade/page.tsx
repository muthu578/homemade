"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, ShoppingBag, ChevronRight } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

const categories = [
  'All', 'Sweets', 'Namkeen & Snacks', 'Pickles', 'Spice Powders',
  'Daily Essentials', 'Healthy Bites', 'Gift Hampers',
];

type Product = {
  id: number; name: string; category: string; price: number;
  unit: string; tag: string; img: string; desc: string;
  emoji: string; bg: string;
};

const fallback = (e: React.SyntheticEvent<HTMLImageElement>, emoji: string, bg: string) => {
  const target = e.currentTarget;
  target.style.display = 'none';
  const parent = target.parentElement;
  if (parent) {
    parent.style.background = bg;
    const div = document.createElement('div');
    div.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:4rem;';
    div.textContent = emoji;
    parent.appendChild(div);
  }
};

const products: Product[] = [
  // SWEETS — images from vellankifoods.com CDN (confirmed food photos)
  { id: 1,  name: 'Besan Ladoo',        category: 'Sweets',           price: 320, unit: '500g',   tag: '🟡 Classic',      emoji: '🟡', bg: 'linear-gradient(135deg,#f6d365,#fda085)', img: 'https://vellankifoods.com/cdn/shop/products/boondi_laddu_1024x1024.jpg?v=1680179373', desc: 'Roasted gram flour · Ghee · Cardamom · Cashew' },
  { id: 2,  name: 'Rava Ladoo',         category: 'Sweets',           price: 280, unit: '400g',   tag: '✨ Festive',      emoji: '✨', bg: 'linear-gradient(135deg,#fddb92,#d1fdff)', img: 'https://vellankifoods.com/cdn/shop/products/dry_fruit_laddu_1024x1024.jpg?v=1680179856', desc: 'Semolina · Ghee · Coconut · Cardamom' },
  { id: 3,  name: 'Mysore Pak',         category: 'Sweets',           price: 360, unit: '400g',   tag: '🧡 Traditional',  emoji: '🧡', bg: 'linear-gradient(135deg,#f7971e,#ffd200)', img: 'https://vellankifoods.com/cdn/shop/products/ghee_mysore_pak_hard_1024x1024.jpg?v=1680180076', desc: 'Gram flour · Pure ghee · Sugar syrup — melt-in-mouth texture' },
  { id: 4,  name: 'Kaju Katli',         category: 'Sweets',           price: 480, unit: '250g',   tag: '💚 Premium',      emoji: '💚', bg: 'linear-gradient(135deg,#d4fc79,#96e6a1)', img: 'https://vellankifoods.com/cdn/shop/products/kaju_burfi_1024x1024.jpg?v=1680180421', desc: 'Pure cashew paste · Silver warq · Rose water' },
  { id: 5,  name: 'Adhirasam',          category: 'Sweets',           price: 300, unit: '6 pcs',  tag: '🟤 Chettinad',    emoji: '🟤', bg: 'linear-gradient(135deg,#c79081,#dfa579)', img: 'https://vellankifoods.com/cdn/shop/files/ghee_badusha_3f582bc9-f636-4d45-9907-c1e3265b4336_1024x1024.jpg?v=1690805799', desc: 'Rice flour · Jaggery · Sesame · Deep fried — a Chettinad classic' },
  { id: 6,  name: 'Palkova',            category: 'Sweets',           price: 260, unit: '250g',   tag: '🥛 Homemade',     emoji: '🥛', bg: 'linear-gradient(135deg,#fff9c4,#ffe082)', img: 'https://vellankifoods.com/cdn/shop/files/cashew_bite_1_1024x1024.jpg?v=1689242804', desc: 'Slow-cooked full-fat milk · Sugar · Cardamom' },
  { id: 7,  name: 'Coconut Barfi',      category: 'Sweets',           price: 240, unit: '300g',   tag: '🥥 Fresh',        emoji: '🥥', bg: 'linear-gradient(135deg,#e0f7fa,#b2ebf2)', img: 'https://vellankifoods.com/cdn/shop/products/chikki_vundalu_peanut_vundalu_1024x1024.jpg?v=1680179690', desc: 'Fresh grated coconut · Jaggery · Cardamom · Ghee' },

  // NAMKEEN & SNACKS
  { id: 8,  name: 'Ribbon Pakoda',      category: 'Namkeen & Snacks', price: 160, unit: '200g',   tag: '🌶 Crispy',       emoji: '🌶', bg: 'linear-gradient(135deg,#f77062,#fe5196)', img: 'https://vellankifoods.com/cdn/shop/files/HFF08909copy_1024x1024.jpg?v=1751712036', desc: 'Rice flour · Pottukadalai · Sesame · Chilli' },
  { id: 9,  name: 'Murukku',            category: 'Namkeen & Snacks', price: 180, unit: '200g',   tag: '🌀 Traditional',  emoji: '🌀', bg: 'linear-gradient(135deg,#f6d365,#fda085)', img: 'https://vellankifoods.com/cdn/shop/files/WhatsApp_Image_2025-03-05_at_14.35.45_1_1024x1024.jpg?v=1743227569', desc: 'Rice flour · Jeera · Ajwain · Sesame seeds' },
  { id: 10, name: 'Mixture',            category: 'Namkeen & Snacks', price: 140, unit: '200g',   tag: '🥜 Savory',       emoji: '🥜', bg: 'linear-gradient(135deg,#e8a87c,#d4660a)', img: 'https://vellankifoods.com/cdn/shop/products/maramarala_mixture_1024x1024.jpg?v=1679899010', desc: 'Sev · Peanuts · Fried lentils · Curry leaves · Spices' },
  { id: 11, name: 'Thattai',            category: 'Namkeen & Snacks', price: 150, unit: '200g',   tag: '🍪 Crunchy',      emoji: '🍪', bg: 'linear-gradient(135deg,#ffecd2,#fcb69f)', img: 'https://vellankifoods.com/cdn/shop/products/karam_gavvalu_1024x1024.jpg?v=1679898901', desc: 'Rice wafer · Sesame · Coconut · Curry leaf — Chettinad specialty' },
  { id: 12, name: 'Kara Sev',           category: 'Namkeen & Snacks', price: 160, unit: '200g',   tag: '🌶 Spicy',        emoji: '🌶', bg: 'linear-gradient(135deg,#ff9a9e,#fecfef)', img: 'https://vellankifoods.com/cdn/shop/products/kara_boondi_1024x1024.jpg?v=1679898838', desc: 'Besan · Black pepper · Carom seeds · Refined oil' },
  { id: 13, name: 'Mullu Murukku',      category: 'Namkeen & Snacks', price: 190, unit: '250g',   tag: '⭐ Bestseller',   emoji: '⭐', bg: 'linear-gradient(135deg,#ffeaa7,#dfe6e9)', img: 'https://vellankifoods.com/cdn/shop/products/JowarFlaxesMixture1_1024x1024.jpg?v=1725097763', desc: 'Urad dal · Rice flour · Ghee · Cumin · Star-shaped crunch' },
  { id: 14, name: 'Seedai',             category: 'Namkeen & Snacks', price: 170, unit: '200g',   tag: '🌾 Festival',     emoji: '🌾', bg: 'linear-gradient(135deg,#f9ca24,#f0932b)', img: 'https://vellankifoods.com/cdn/shop/products/karam_palli_1024x1024.jpg?v=1679898971', desc: 'Rice balls · Sesame · Coconut · Butter — Krishna Jayanthi special' },

  // PICKLES
  { id: 15, name: 'Mango Thokku',       category: 'Pickles',          price: 220, unit: '250g',   tag: '🥭 Tangy',        emoji: '🥭', bg: 'linear-gradient(135deg,#f9ca24,#f0932b)', img: 'https://vellankifoods.com/cdn/shop/files/allam_mamidi_ginger_mango_pickle_a1459065-18d2-461b-9fc7-f82febc74c5c_1024x1024.jpg?v=1689761372', desc: 'Raw mango · Gingelly oil · Mustard · Fenugreek · Red chilli' },
  { id: 16, name: 'Lemon Pickle',       category: 'Pickles',          price: 200, unit: '250g',   tag: '🍋 Classic',      emoji: '🍋', bg: 'linear-gradient(135deg,#f6d365,#fda085)', img: 'https://vellankifoods.com/cdn/shop/products/greenchilli_pickles_1024x1024.jpg?v=1680180298', desc: 'Whole lemon · Salt · Chilli · Sesame oil — tangy & spiced' },
  { id: 17, name: 'Garlic Pickle',      category: 'Pickles',          price: 230, unit: '250g',   tag: '🧄 Bold',         emoji: '🧄', bg: 'linear-gradient(135deg,#d4fc79,#96e6a1)', img: 'https://vellankifoods.com/cdn/shop/products/garlic_pickle_1024x1024.jpg?v=1680180055', desc: 'Whole garlic · Vinegar · Mustard seeds · Red chilli powder' },
  { id: 18, name: 'Gooseberry Pickle',  category: 'Pickles',          price: 210, unit: '250g',   tag: '🫒 Immunity',     emoji: '🫒', bg: 'linear-gradient(135deg,#96fbc4,#f9f586)', img: 'https://vellankifoods.com/cdn/shop/products/gongura_pickle_1_1024x1024.jpg?v=1680180276', desc: 'Indian gooseberry · Salt · Spices · No preservatives' },
  { id: 19, name: 'Mixed Veg Pickle',   category: 'Pickles',          price: 240, unit: '300g',   tag: '🌈 Assorted',     emoji: '🌈', bg: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', img: 'https://vellankifoods.com/cdn/shop/products/ginger_pickles_with_tamarind_1024x1024.jpg?v=1680180240', desc: 'Carrot · Raw mango · Ginger · Lime — spiced in gingelly oil' },

  // SPICE POWDERS
  { id: 20, name: 'Sambar Powder',      category: 'Spice Powders',    price: 180, unit: '200g',   tag: '🌶 Aromatic',     emoji: '🌶', bg: 'linear-gradient(135deg,#f77062,#fe5196)', img: 'https://vellankifoods.com/cdn/shop/products/sambar_podi_sambar_powder_1024x1024.jpg?v=1679899583', desc: 'Sun-dried spices · Coriander · Cumin · Red chilli · No fillers' },
  { id: 21, name: 'Rasam Powder',       category: 'Spice Powders',    price: 160, unit: '150g',   tag: '🌿 Fresh Ground', emoji: '🌿', bg: 'linear-gradient(135deg,#f9ca24,#6c5ce7)', img: 'https://vellankifoods.com/cdn/shop/products/rasam_podi_1024x1024.jpg?v=1679899472', desc: 'Black pepper · Cumin · Coriander · Dried chilli — home ground' },
  { id: 22, name: 'Idli Podi',          category: 'Spice Powders',    price: 150, unit: '200g',   tag: '⭐ Must Have',    emoji: '🫙', bg: 'linear-gradient(135deg,#fd7043,#ef5350)', img: 'https://vellankifoods.com/cdn/shop/products/idli_karam_1024x1024.jpg?v=1680180395', desc: 'Urad dal · Chana dal · Sesame · Red chilli · Garlic podi option' },
  { id: 23, name: 'Chettinad Masala',   category: 'Spice Powders',    price: 200, unit: '150g',   tag: '🟤 Signature',    emoji: '🟤', bg: 'linear-gradient(135deg,#c79081,#dfa579)', img: 'https://vellankifoods.com/cdn/shop/products/kandi_karam_1024x1024.jpg?v=1680180518', desc: 'Kalpasi · Marathi mokku · Star anise · 12 whole spices — authentic blend' },
  { id: 24, name: 'Chilli Garlic Powder', category: 'Spice Powders',  price: 170, unit: '150g',   tag: '🔥 Fiery',        emoji: '🔥', bg: 'linear-gradient(135deg,#ff416c,#ff4b2b)', img: 'https://vellankifoods.com/cdn/shop/products/karivepaku_karam_podi_curry_leaves_powder_1024x1024.jpg?v=1680180627', desc: 'Red chilli · Roasted garlic · Salt — perfect dip powder' },

  // DAILY ESSENTIALS
  { id: 25, name: 'Ginger Garlic Paste', category: 'Daily Essentials', price: 140, unit: '200g',  tag: '🧄 Fresh',        emoji: '🧄', bg: 'linear-gradient(135deg,#d4fc79,#96e6a1)', img: 'https://vellankifoods.com/cdn/shop/products/pulihora_paste_1024x1024.jpg?v=1679899441', desc: 'Fresh ginger · Garlic · No preservatives — grind to order' },
  { id: 26, name: 'Coconut Oil',         category: 'Daily Essentials', price: 350, unit: '500ml', tag: '🥥 Pure',         emoji: '🥥', bg: 'linear-gradient(135deg,#e0f7fa,#b2ebf2)', img: 'https://vellankifoods.com/cdn/shop/products/tamarind_paste_1024x1024.jpg?v=1679899644', desc: 'First cold-pressed coconut oil · Unrefined · Traditional wood press' },
  { id: 27, name: 'A2 Desi Ghee',       category: 'Daily Essentials', price: 520, unit: '250g',   tag: '💛 A2 Desi',      emoji: '💛', bg: 'linear-gradient(135deg,#fff9c4,#ffe082)', img: 'https://vellankifoods.com/cdn/shop/products/turmeric_powder_pasupu_podi_1024x1024.jpg?v=1679899683', desc: 'A2 desi cow milk · Bilona churned · Pure & fragrant · No additives' },

  // HEALTHY BITES
  { id: 28, name: 'Dates & Nut Laddoo', category: 'Healthy Bites',    price: 320, unit: '12 pcs', tag: '🌿 Sugar-Free',   emoji: '🌿', bg: 'linear-gradient(135deg,#96fbc4,#f9f586)', img: 'https://vellankifoods.com/cdn/shop/files/DryFruitChikki_1024x1024.jpg?v=1725097563', desc: 'Seedless dates · Mixed nuts · No refined sugar · Vegan' },
  { id: 29, name: 'Sesame Chikki',      category: 'Healthy Bites',    price: 150, unit: '200g',   tag: '🌾 Crunchy',      emoji: '🌾', bg: 'linear-gradient(135deg,#f9ca24,#f0932b)', img: 'https://vellankifoods.com/cdn/shop/products/nuvvula_til_karam_1024x1024.jpg?v=1680181248', desc: 'White sesame · Jaggery · No artificial flavour · Iron-rich' },
  { id: 30, name: 'Peanut Chikki',      category: 'Healthy Bites',    price: 130, unit: '200g',   tag: '🥜 Energy',       emoji: '🥜', bg: 'linear-gradient(135deg,#e8a87c,#d4660a)', img: 'https://vellankifoods.com/cdn/shop/products/kaju_pakoda_1024x1024.jpg?v=1679898658', desc: 'Roasted peanuts · Jaggery syrup · No preservatives' },
  { id: 31, name: 'Oats Almond Ladoo', category: 'Healthy Bites',     price: 290, unit: '10 pcs', tag: '🌿 Nutritious',   emoji: '🌿', bg: 'linear-gradient(135deg,#d4fc79,#96e6a1)', img: 'https://vellankifoods.com/cdn/shop/products/dry_fruit_laddu_1024x1024.jpg?v=1680179856', desc: 'Oats · Almond · Jaggery · Honey · No refined sugar' },
  { id: 32, name: 'Dry Fruit Box',      category: 'Healthy Bites',    price: 680, unit: 'Box',    tag: '✨ Premium',      emoji: '🌰', bg: 'linear-gradient(135deg,#c79081,#dfa579)', img: 'https://vellankifoods.com/cdn/shop/files/DryFruitChikki_1024x1024.jpg?v=1725097563', desc: 'Cashew · Almond · Walnut · Pistachio · Dates — gift-ready box' },

  // GIFT HAMPERS
  { id: 33, name: 'Celebration Hamper', category: 'Gift Hampers',     price: 1200, unit: 'Box',   tag: '🎁 Gift Ready',   emoji: '🎁', bg: 'linear-gradient(135deg,#f093fb,#f5576c)', img: 'https://vellankifoods.com/cdn/shop/products/boondi_laddu_1024x1024.jpg?v=1680179373', desc: 'Laddoos · Chikkis · Pickles · Snacks · Sweets — curated celebration box' },
  { id: 34, name: 'Diwali Deluxe Hamper', category: 'Gift Hampers',   price: 2200, unit: 'Box',   tag: '✨ Diwali',       emoji: '🪔', bg: 'linear-gradient(135deg,#f7971e,#ffd200)', img: 'https://vellankifoods.com/cdn/shop/products/kaju_burfi_1024x1024.jpg?v=1680180421', desc: 'Kaju Katli · Mysore Pak · Murukku · Ghee · Spices · Dry fruits' },
  { id: 35, name: 'Pickle Tasting Set', category: 'Gift Hampers',     price: 680, unit: '3 jars', tag: '🫙 Assorted',     emoji: '🫙', bg: 'linear-gradient(135deg,#96fbc4,#f9f586)', img: 'https://vellankifoods.com/cdn/shop/products/garlic_pickle_1024x1024.jpg?v=1680180055', desc: 'Mango · Lemon · Gooseberry — three favourite pickles in one gift' },
  { id: 36, name: 'Spice Lovers Box',   category: 'Gift Hampers',     price: 750, unit: '5 items', tag: '🌶 Spice Kit',   emoji: '🌶', bg: 'linear-gradient(135deg,#f77062,#fe5196)', img: 'https://vellankifoods.com/cdn/shop/products/sambar_podi_sambar_powder_1024x1024.jpg?v=1679899583', desc: 'Sambar · Rasam · Idli Podi · Chettinad Masala · Chilli Garlic — complete kitchen kit' },
];

const collectionBanners = [
  { name: 'Sweets',           icon: '🍬', img: 'https://vellankifoods.com/cdn/shop/products/boondi_laddu_1024x1024.jpg?v=1680179373',                                                                    count: '7 items' },
  { name: 'Namkeen & Snacks', icon: '🌶', img: 'https://vellankifoods.com/cdn/shop/files/HFF08909copy_1024x1024.jpg?v=1751712036',                                                                       count: '7 items' },
  { name: 'Pickles',          icon: '🫙', img: 'https://vellankifoods.com/cdn/shop/products/garlic_pickle_1024x1024.jpg?v=1680180055',                                                                    count: '5 items' },
  { name: 'Spice Powders',    icon: '🌿', img: 'https://vellankifoods.com/cdn/shop/products/sambar_podi_sambar_powder_1024x1024.jpg?v=1679899583',                                                        count: '5 items' },
  { name: 'Daily Essentials', icon: '💛', img: 'https://vellankifoods.com/cdn/shop/products/turmeric_powder_pasupu_podi_1024x1024.jpg?v=1679899683',                                                     count: '3 items' },
  { name: 'Gift Hampers',     icon: '🎁', img: 'https://vellankifoods.com/cdn/shop/files/DryFruitChikki_1024x1024.jpg?v=1725097563',                                                                     count: '4 items' },
];






export default function HomemadePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);
  const toggleWishlist = (id: number) => setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  return (
    <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(191,163,126,0.15),transparent_70%)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="space-y-8 md:space-y-12 text-center lg:text-left">
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="hidden sm:block h-px w-12 bg-[#ff4d6d]" />
                  <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Sacred Kitchen</span>
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-[#1a1c24] leading-[1.05] tracking-tight italic">
                  Made with <br /><span className="italic font-normal text-[#bfa37e]">Grandma's Rituals.</span>
                </h1>
              </div>
              <p className="text-base md:text-2xl text-[#1a1c24]/30 font-outfit leading-relaxed max-w-xl mx-auto lg:mx-0 italic">
                "Traditional Chettinad souls passed through generations — sweets, snacks, and sacred spices manifested fresh for your table."
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                {['🥭 Pickles', '🌶 Snacks', '🍬 Sweets', '🌿 Spices', '🎁 Hampers'].map(t => (
                  <span key={t} className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-white border border-[#bfa37e]/10 text-[9px] md:text-[11px] font-outfit font-black text-[#bfa37e] shadow-sm uppercase tracking-widest italic">{t}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link href="#products" className="group relative inline-flex items-center justify-center gap-6 px-10 py-5 bg-[#1a1c24] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-xl overflow-hidden italic">
                   <div className="absolute inset-0 bg-[#ff4d6d]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                   <span className="relative z-10 flex items-center justify-center gap-4">Manifest Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></span>
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-6 px-10 py-5 border-2 border-[#1a1c24]/5 bg-white text-[#1a1c24] rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] transition-all hover:scale-105 italic">
                  Custom Hampers 🎁
                </Link>
              </div>
            </motion.div>

            {/* Right: 3 staggered images - Refined for mobile visibility */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative h-[450px] md:h-[650px] hidden sm:block">
              <div className="absolute top-0 right-0 w-[80%] lg:w-[400px] h-[350px] md:h-[500px] rounded-[4rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.12)] border-[10px] border-white group z-0">
                <img src="https://vellankifoods.com/cdn/shop/files/DryFruitChikki_1024x1024.jpg?v=1725097563" alt="Gift Hamper" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-white/80 italic">Most Gifted</p>
                  <h3 className="text-2xl md:text-3xl font-fraunces font-black text-white mt-1 italic">Celebration Hamper</h3>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-[60%] lg:w-[280px] h-[220px] md:h-[320px] rounded-[3rem] overflow-hidden border-[8px] border-white shadow-artisan group z-10 hover:-translate-y-2 transition-transform">
                <img src="https://vellankifoods.com/cdn/shop/files/allam_mamidi_ginger_mango_pickle_a1459065-18d2-461b-9fc7-f82febc74c5c_1024x1024.jpg?v=1689761372" alt="Pickle" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
              </div>
              <div className="absolute top-[40%] left-[10%] bg-white/95 backdrop-blur-2xl rounded-[2rem] px-8 py-6 shadow-2xl z-20 border border-[#bfa37e]/10 animate-float">
                <p className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#ff4d6d] italic mb-1">Ritual Standard</p>
                <p className="text-xl md:text-2xl font-fraunces font-black text-[#1a1c24] italic">Pure & Sacred</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY HOMEMADE ── Refined spacing */}
      <section className="py-10 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { emoji: '🫙', title: 'Small Batch', desc: 'Manifested in micro-quantities for divine freshness' },
              { emoji: '🌿', title: 'Pure Soul', desc: 'No artificial whispers, colours or preservatives' },
              { emoji: '👵', title: 'Ancestral Way', desc: 'Time-tested rituals passed down through hearts' },
              { emoji: '📦', title: 'Sacred Seal', desc: 'Hygienically hand-packed in tamper-proof artifacts' },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-10 md:p-12 rounded-[3.5rem] bg-[#fbf9f6] border border-[#1a1c24]/5 space-y-6 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all group text-center lg:text-left active:scale-95">
                <span className="text-5xl md:text-6xl block group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">{f.emoji}</span>
                <div className="space-y-3">
                   <h4 className="font-fraunces font-black text-lg md:text-xl text-[#1a1c24] italic">{f.title}</h4>
                   <p className="text-[11px] md:text-xs font-outfit text-[#1a1c24]/30 leading-relaxed font-medium italic">" {f.desc} "</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTION BANNERS ── Responsive grid */}
      <section className="py-20 md:py-48 bg-[#fbf9f6] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16 md:mb-32 space-y-6 md:space-y-8">
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">Scroll the Archives</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-[#1a1c24] leading-tight italic">
              Browse the <br className="sm:hidden" /><span className="italic font-normal text-[#bfa37e]">Sacred Library.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {collectionBanners.map((col, i) => (
              <motion.button key={col.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                onClick={() => setActiveCategory(col.name)}
                className="group relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden cursor-pointer aspect-square shadow-xl active:scale-90 transition-transform">
                <div className="w-full h-full">
                  <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c24]/90 via-[#1a1c24]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left space-y-1">
                  <span className="text-2xl md:text-3xl">{col.icon}</span>
                  <p className="text-xs md:text-base font-fraunces font-black text-white leading-tight italic">{col.name}</p>
                  <p className="text-[8px] md:text-[10px] font-outfit font-black text-white/40 uppercase tracking-[0.2em] italic">{col.count}</p>
                </div>
                <div className={`absolute inset-0 border-[3px] md:border-[5px] rounded-[2.5rem] md:rounded-[3.5rem] transition-all duration-500 ${activeCategory === col.name ? 'border-[#ff4d6d]' : 'border-transparent group-hover:border-white/30'}`} />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── Responsive Grid refined */}
      <section id="products" className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 md:w-[600px] h-96 md:h-[600px] bg-[#ff4d6d]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 md:w-[600px] h-96 md:h-[600px] bg-[#bfa37e]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-10 md:gap-16">
            <div className="space-y-6 text-center lg:text-left">
              <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Full Manifestation</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-[#1a1c24] leading-tight italic">
                {activeCategory === 'All' ? <>Our Favorite <span className="italic font-normal text-[#bfa37e]">Rituals.</span></> : <>{activeCategory} <span className="italic font-normal text-[#bfa37e]">Series.</span></>}
              </h2>
            </div>
            <p className="text-[10px] md:text-[12px] font-outfit font-black text-[#1a1c24]/20 text-center lg:text-right uppercase tracking-[0.4em] italic">
              Manifesting <span className="text-[#ff4d6d]">{filtered.length}</span> unique creations
            </p>
          </div>

          {/* Filter Pills refined */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-12 md:pb-20 -mx-6 px-6 lg:flex-wrap lg:justify-center">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-[9px] md:text-[10px] font-outfit font-black tracking-[0.2em] uppercase transition-all italic ${activeCategory === cat ? 'bg-[#1a1c24] text-white shadow-xl' : 'text-[#1a1c24]/30 border border-[#1a1c24]/5 bg-[#fbf9f6] hover:border-[#ff4d6d]/50 hover:text-[#ff4d6d]'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid refined for mobile 2-cols */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 md:gap-12">
              {filtered.map((item, i) => (
                <motion.div key={item.id}
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group bg-[#fbf9f6] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_120px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-4 border border-[#1a1c24]/5 active:scale-95">
                  {/* Image */}
                  <Link href={`/homemade/${item.id}`} className="relative aspect-square overflow-hidden block bg-[#f0ede8]">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-2xl rounded-full shadow-lg">
                      <span className="text-[9px] font-outfit font-black text-[#1a1c24] uppercase tracking-widest italic">{item.tag}</span>
                    </div>
                    <button onClick={(e) => { e.preventDefault(); toggleWishlist(item.id); }}
                      className="absolute top-6 right-6 w-12 h-12 bg-white/95 backdrop-blur-2xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ff4d6d] hover:text-white shadow-2xl transform active:scale-75">
                      <Heart className={`w-5 h-5 transition-colors ${wishlist.includes(item.id) ? 'fill-current text-white' : 'text-[#1a1c24]'}`} />
                    </button>
                    <div className="absolute inset-x-0 bottom-6 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 px-8">
                       <div className="w-full py-3 bg-white/95 backdrop-blur-md text-[#1a1c24] text-center rounded-full text-[9px] font-black uppercase tracking-[0.3em] italic shadow-xl border border-white/20">Swift Manifest</div>
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="p-8 space-y-4">
                    <div className="space-y-1">
                      <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic">{item.category}</p>
                      <Link href={`/homemade/${item.id}`}>
                        <h3 className="text-base md:text-xl font-fraunces font-black text-[#1a1c24] leading-tight group-hover:text-[#ff4d6d] transition-colors line-clamp-1 italic">{item.name}</h3>
                      </Link>
                    </div>
                    <p className="text-[11px] md:text-xs font-outfit text-[#1a1c24]/30 leading-relaxed font-medium italic line-clamp-2 h-10">" {item.desc} "</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#1a1c24]/5">
                      <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-fraunces font-black text-[#1a1c24] italic">₹{item.price}</span>
                        <span className="text-[9px] font-outfit font-black text-[#1a1c24]/20 tracking-widest uppercase italic">{item.unit}</span>
                      </div>
                      <button className="flex items-center justify-center w-14 h-14 bg-[#1a1c24] text-white rounded-full hover:bg-[#ff4d6d] transition-all shadow-xl active:scale-90">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CUSTOM HAMPER CTA ── Refined stacking */}
      <section className="py-12 md:py-20 bg-[#1a1c24] relative overflow-hidden flex flex-col items-center">
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
         <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#ff4d6d]/10 rounded-full blur-[150px] md:blur-[200px]" />
         
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center space-y-10 md:space-y-16 relative z-10 flex flex-col items-center">
            <div className="space-y-6 text-center">
               <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Gifting Protocol</span>
               <h2 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-white leading-tight italic">
                  Craft Your Own <br className="md:hidden" /><span className="italic font-normal text-[#bfa37e]">Gift Scroll.</span>
               </h2>
               <p className="text-sm md:text-2xl text-white/30 font-outfit max-w-2xl mx-auto leading-relaxed italic">
                  "Weave your own ritual box with divine sweets, snacks, and sacred threads. Hand-packed in premium artifacts for your most celestial celebrations."
               </p>
            </div>
            <Link href="/contact" className="group relative inline-flex items-center justify-center gap-6 px-10 py-5 bg-[#ff4d6d] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-xl italic overflow-hidden">
               <div className="absolute inset-0 bg-[#1a1c24]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
               <span className="relative z-10 flex items-center justify-center gap-4 text-center">Design Custom Hamper 🎁</span>
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
