"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, ShoppingBag, ChevronRight } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

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
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(191,163,126,0.18),transparent_60%)]" />
        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#ff4d6d]" />
                <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Homemade Goodness</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-fraunces font-black text-[#1a1c24] leading-tight">
                Made with <br /><span className="italic font-normal text-[#bfa37e]">Grandma's Love.</span>
              </h1>
              <p className="text-lg text-[#1a1c24]/50 font-outfit leading-relaxed max-w-md">
                Traditional Chettinad recipes passed through generations — sweets, snacks, pickles, spice powders, and curated hampers made fresh with no preservatives.
              </p>
              <div className="flex flex-wrap gap-3">
                {['🥭 Pickles', '🌶 Snacks', '🍬 Sweets', '🌿 Spices', '🎁 Hampers'].map(t => (
                  <span key={t} className="px-5 py-2.5 rounded-full bg-white border border-[#bfa37e]/20 text-xs font-outfit font-bold text-[#bfa37e] shadow-sm">{t}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#products" className="group inline-flex items-center gap-4 px-12 py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-2xl">
                  Shop Homemade <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-5 border-2 border-[#ff4d6d]/20 text-[#1a1c24] rounded-full font-bold text-sm hover:bg-[#ff4d6d]/5 hover:border-[#ff4d6d] transition-all">
                  Custom Hampers 🎁
                </Link>
              </div>
            </motion.div>

            {/* Right: 3 staggered images */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative h-[540px] hidden lg:block">
              <div className="absolute top-0 right-0 w-[340px] h-[440px] rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] group">
                <img src="https://vellankifoods.com/cdn/shop/files/DryFruitChikki_1024x1024.jpg?v=1725097563" alt="Gift Hamper" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-[8px] font-outfit font-black uppercase tracking-[0.4em] text-white/60">Most Gifted</p>
                  <h3 className="text-xl font-fraunces font-bold text-white mt-1">Celebration Hamper</h3>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-[220px] h-[230px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                <img src="https://vellankifoods.com/cdn/shop/files/allam_mamidi_ginger_mango_pickle_a1459065-18d2-461b-9fc7-f82febc74c5c_1024x1024.jpg?v=1689761372" alt="Pickle" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="absolute bottom-[30%] left-[25%] bg-white rounded-2xl px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-10">
                <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#bfa37e]">36+ Products</p>
                <p className="text-xl font-fraunces font-black text-[#1a1c24]">No Preservatives</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY HOMEMADE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { emoji: '🫙', title: 'Small Batch', desc: 'Made in small quantities for freshness' },
              { emoji: '🌿', title: 'Pure Ingredients', desc: 'No artificial colours, flavours or preservatives' },
              { emoji: '👵', title: 'Traditional Recipes', desc: 'Time-tested Chettinad recipes' },
              { emoji: '📦', title: 'Hygienic Packing', desc: 'Sealed fresh in tamper-proof containers' },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-[#fbf9f6] border border-[#1a1c24]/5 text-center space-y-3 hover:-translate-y-1 transition-transform">
                <span className="text-4xl">{f.emoji}</span>
                <h4 className="font-fraunces font-bold text-[#1a1c24]">{f.title}</h4>
                <p className="text-xs font-outfit text-[#1a1c24]/40 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTION BANNERS ── */}
      <section className="py-24 bg-[#fbf9f6]">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="text-center mb-14 space-y-4">
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Shop By Category</span>
            <h2 className="text-4xl md:text-5xl font-fraunces font-black text-[#1a1c24]">
              Browse Our <span className="italic font-normal">Collections.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {collectionBanners.map((col, i) => (
              <motion.button key={col.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                onClick={() => setActiveCategory(col.name)}
                className="group relative rounded-[2rem] overflow-hidden cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left space-y-0.5">
                  <span className="text-xl">{col.icon}</span>
                  <p className="text-sm font-fraunces font-bold text-white leading-tight">{col.name}</p>
                  <p className="text-[8px] font-outfit text-white/50 uppercase tracking-wider">{col.count}</p>
                </div>
                <div className={`absolute inset-0 border-2 rounded-[2rem] transition-all ${activeCategory === col.name ? 'border-[#ff4d6d]' : 'border-transparent group-hover:border-white/30'}`} />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#ff4d6d]/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#bfa37e]/4 rounded-full blur-[100px]" />
        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="space-y-3">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Our Products</span>
              <h2 className="text-4xl md:text-6xl font-fraunces font-black text-[#1a1c24] leading-tight">
                {activeCategory === 'All' ? <>Homemade <span className="italic font-normal">Favorites.</span></> : <>{activeCategory} <span className="italic font-normal">Collection.</span></>}
              </h2>
            </div>
            <p className="text-sm font-outfit text-[#1a1c24]/30">
              Showing <span className="font-bold text-[#ff4d6d]">{filtered.length}</span> products
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-14">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-outfit font-bold tracking-[0.2em] uppercase transition-all ${activeCategory === cat ? 'bg-[#1a1c24] text-white shadow-md' : 'text-[#1a1c24]/40 border border-[#1a1c24]/10 hover:border-[#1a1c24]/30 hover:text-[#1a1c24]'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filtered.map((item, i) => (
                <motion.div key={item.id}
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group bg-[#fbf9f6] rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 border border-[#1a1c24]/5">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden" style={{ background: '#f0ede8' }}>
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" onError={(e) => fallback(e, item.emoji, item.bg)} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-[8px] font-outfit font-black">{item.tag}</span>
                    </div>
                    <button onClick={() => toggleWishlist(item.id)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ff4d6d] shadow-md">
                      <Heart className={`w-3 h-3 transition-colors ${wishlist.includes(item.id) ? 'fill-[#ff4d6d] text-[#ff4d6d]' : 'text-[#1a1c24]'}`} />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-2">
                    <p className="text-[8px] font-outfit font-black uppercase tracking-[0.3em] text-[#bfa37e]">{item.category}</p>
                    <h3 className="text-sm font-fraunces font-bold text-[#1a1c24] leading-snug group-hover:text-[#ff4d6d] transition-colors">{item.name}</h3>
                    <p className="text-[10px] font-outfit text-[#1a1c24]/35 leading-relaxed line-clamp-2">{item.desc}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <span className="text-base font-fraunces font-bold text-[#1a1c24]">₹{item.price}</span>
                        <span className="text-[8px] font-outfit text-[#1a1c24]/30 ml-2">{item.unit}</span>
                      </div>
                      <button className="flex items-center gap-1 px-4 py-2 bg-[#1a1c24] text-white rounded-full text-[9px] font-outfit font-black uppercase tracking-wider hover:bg-[#ff4d6d] transition-colors">
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

      {/* ── CUSTOM HAMPER CTA ── */}
      <section className="py-28 bg-[#1a1c24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4d6d]/10 rounded-full blur-[150px]" />
        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Custom Gift Hampers</span>
              <h2 className="text-5xl md:text-6xl font-fraunces font-black text-white leading-tight">
                Create Your Own <span className="italic text-[#bfa37e]">Gift Hamper.</span>
              </h2>
              <p className="text-lg text-white/40 font-outfit leading-relaxed">
                Build a custom hamper with your favourite sweets, snacks, pickles, and spices. We'll pack them beautifully in a premium gift box — perfect for any occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-4 px-12 py-5 bg-[#ff4d6d] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-2xl">
                  Build My Hamper <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-5 border border-white/10 text-white/60 rounded-full font-bold text-sm hover:border-white/30 hover:text-white transition-all">
                  Bulk / Corporate Orders
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { emoji: '🎁', title: 'Custom Selection', desc: 'Pick any items from our full range' },
                { emoji: '🎀', title: 'Premium Packaging', desc: 'Gift-wrapped in beautiful boxes with ribbon' },
                { emoji: '🚚', title: 'Pan-India Delivery', desc: 'Safely shipped anywhere in India' },
                { emoji: '🏢', title: 'Corporate Orders', desc: 'Bulk discounts for offices & events' },
              ].map((f, i) => (
                <div key={i} className="p-7 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all space-y-3">
                  <span className="text-3xl">{f.emoji}</span>
                  <h4 className="font-fraunces font-bold text-white">{f.title}</h4>
                  <p className="text-xs text-white/30 font-outfit leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#fbf9f6] border-t border-[#1a1c24]/5">
        <div className="max-w-[1800px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20">© 2026 PRANAVIKA'S Sweet & Chic</p>
          <Link href="/" className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-colors">← Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
