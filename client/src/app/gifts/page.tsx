"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, ShoppingBag, Star, ChevronRight, Cake, Sparkles, User, Users, Baby, CalendarDays } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

const occasions = [
  { id: 'all', label: 'All Occasions', icon: Sparkles },
  { id: 'birthday', label: 'Birthday', icon: Cake },
  { id: 'anniversary', label: 'Anniversary', icon: Heart },
  { id: 'wedding', label: 'Wedding', icon: CalendarDays },
  { id: 'corporate', label: 'Corporate', icon: Users },
  { id: 'decor', label: 'Home Decor', icon: Sparkles },
  { id: 'personalized', label: 'Personalized', icon: User },
];

const giftHampers = [
  {
    id: 1,
    name: "The Royal Silk & Sweet Hamper",
    category: "Anniversary",
    price: 15450,
    tag: "Signature Collection",
    img: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800", // Saree
    secondaryImg: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800", // Cake
    desc: "A luxurious duo: A Kanchi Silk Saree paired with our signature Biscoff Celebration Cake.",
    rating: 4.9
  },
  {
    id: 2,
    name: "Artisan Sweetness Box",
    category: "Birthday",
    price: 3200,
    tag: "Bestseller",
    img: "https://images.pexels.com/photos/6152261/pexels-photo-6152261.jpeg?auto=compress&cs=tinysrgb&w=800", // Sweets
    desc: "A handpicked selection of traditional sweets, spicy boondhi, and a custom greeting card.",
    rating: 4.8
  },
  {
    id: 3,
    name: "The Little Prince/Princess Set",
    category: "Kids",
    price: 4500,
    tag: "New Arrival",
    img: "https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=800", // Kids
    desc: "A Mul Cotton Designer Frock paired with a box of assorted cupcakes for the little ones.",
    rating: 5.0
  },
  {
    id: 4,
    name: "Corporate Executive Delight",
    category: "Corporate",
    price: 8500,
    tag: "Premium",
    img: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800", // Hampers
    desc: "A sophisticated wooden hamper containing homemade spice powders, premium dry fruits, and a silk scarf.",
    rating: 4.7
  },
  {
    id: 5,
    name: "Golden Bloom Brass Diya Set",
    category: "Decor",
    price: 4500,
    tag: "Ethnic Gift",
    img: "https://images.pexels.com/photos/10313835/pexels-photo-10313835.jpeg?auto=compress&cs=tinysrgb&w=800", // India Diya
    desc: "A traditionally crafted set of handcrafted brass diyas, perfect for auspicious occasions and festivals.",
    rating: 4.9
  },
  {
    id: 6,
    name: "Royal Peacock Wall Hanging",
    category: "Decor",
    price: 3800,
    tag: "Handicraft",
    img: "https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=800", // Wall Art/Embroidery
    desc: "Exquisite hand-embroidered silk wall art featuring a vibrant peacock motif, an elegant addition to any home.",
    rating: 4.8
  },
  {
    id: 7,
    name: "Marble Finish Ganesha Idol",
    category: "Decor",
    price: 5400,
    tag: "Auspicious",
    img: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800", // Sculpture
    desc: "A divine Ganesha idol with a smooth marble finish, capturing grace and prosperity in fine detail.",
    rating: 5.0
  },
  {
    id: 8,
    name: "Monogrammed Royal Silk Scarf",
    category: "Personalized",
    price: 3450,
    tag: "Bespoke",
    img: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=800", // Scarf
    desc: "A pure silk scarf featuring your hand-embroidered monogram, an ultimate symbol of artisan elegance.",
    rating: 4.9
  },
  {
    id: 9,
    name: "Classic Photo Celebration Cake",
    category: "Personalized",
    price: 1850,
    tag: "Artisan Bakes",
    img: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800", // Cake
    desc: "A delicious gourmet cake topped with an edible photo of your most cherished memories, meticulously crafted.",
    rating: 4.7
  },
  {
    id: 10,
    name: "Custom Engraved Artisan Box",
    category: "Personalized",
    price: 6800,
    tag: "Premium Hamper",
    img: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800", // Hamper
    desc: "A collection of assorted homemade sweets and boutique fabrics in a box engraved with your recipient's name.",
    rating: 5.0
  }
];

export default function GiftsPage() {
  const [activeOccasion, setActiveOccasion] = useState('all');

  const filtered = activeOccasion === 'all' 
    ? giftHampers 
    : giftHampers.filter(h => h.category.toLowerCase() === activeOccasion);

  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24] overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ff4d6d]/5 rounded-full blur-[150px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#bfa37e]/5 rounded-full blur-[100px] -z-0" />

        <div className="max-w-[1500px] mx-auto px-10 relative z-10 text-center space-y-8">
           <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]"
           >
              Gifting Elevated
           </motion.span>
           <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-fraunces font-black leading-tight"
           >
              Handcrafted <span className="italic font-normal text-[#bfa37e]">Emotions.</span>
           </motion.h1>
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg font-outfit text-[#1a1c24]/40 max-w-2xl mx-auto italic"
           >
              Discover our curated Gift Palace — where artisan boutique fashion meets the sweetness of a workshop bakery.
           </motion.p>
        </div>
      </section>

      {/* Occasion Selection */}
      <section className="pb-20">
         <div className="max-w-[1500px] mx-auto px-10">
            <div className="flex flex-wrap items-center justify-center gap-4">
               {occasions.map((occ) => (
                  <button 
                     key={occ.id}
                     onClick={() => setActiveOccasion(occ.id)}
                     className={`flex items-center gap-3 px-8 py-4 rounded-full text-xs font-outfit font-black uppercase tracking-widest transition-all ${activeOccasion === occ.id ? 'bg-[#1a1c24] text-white shadow-2xl' : 'bg-white border border-[#1a1c24]/5 text-[#1a1c24]/30 hover:border-[#ff4d6d]/30 hover:text-[#ff4d6d]'}`}
                  >
                     <occ.icon className="w-4 h-4" />
                     {occ.label}
                  </button>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Combos */}
      <section className="pb-32">
         <div className="max-w-[1500px] mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
               {filtered.map((hamper, i) => (
                 <motion.div 
                    key={hamper.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white rounded-[4rem] overflow-hidden shadow-soft border border-[#1a1c24]/5 flex flex-col lg:flex-row"
                 >
                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative aspect-square lg:aspect-auto overflow-hidden bg-[#f0ede8]">
                       <img src={hamper.img} alt={hamper.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                       {hamper.secondaryImg && (
                         <div className="absolute bottom-6 right-6 w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform">
                            <img src={hamper.secondaryImg} alt="Secondary" className="w-full h-full object-cover" />
                         </div>
                       )}
                       <div className="absolute top-8 left-8">
                          <span className="px-5 py-2.5 bg-[#1a1c24] text-white text-[9px] font-outfit font-black uppercase tracking-widest rounded-full">{hamper.tag}</span>
                       </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 p-12 flex flex-col justify-between space-y-8">
                       <div className="space-y-4">
                          <div className="flex items-center gap-3">
                             <div className="flex gap-0.5 text-[#ff4d6d]">
                                {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                             </div>
                             <span className="text-[10px] font-outfit font-black text-[#1a1c24]/20 uppercase tracking-widest">{hamper.rating} Rating</span>
                          </div>
                          <h3 className="text-3xl font-fraunces font-black leading-tight group-hover:text-[#ff4d6d] transition-colors">{hamper.name}</h3>
                          <p className="text-sm font-outfit text-[#1a1c24]/40 italic leading-relaxed">{hamper.desc}</p>
                       </div>

                       <div className="flex items-center justify-between border-t border-[#1a1c24]/5 pt-8">
                          <div className="space-y-1">
                             <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20">Artisan Combo Price</p>
                             <p className="text-3xl font-fraunces font-black">₹{hamper.price.toLocaleString()}</p>
                          </div>
                          <button className="w-16 h-16 bg-[#1a1c24] text-white rounded-2xl flex items-center justify-center hover:bg-[#ff4d6d] transition-all shadow-xl">
                             <ShoppingBag className="w-6 h-6" />
                          </button>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Recipient Sections - Inspired by Archies */}
      <section className="py-32 bg-white border-y border-[#1a1c24]/5">
         <div className="max-w-[1500px] mx-auto px-10">
            <div className="text-center space-y-4 mb-20">
               <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#bfa37e]">Personalized curation</span>
               <h2 className="text-5xl font-fraunces font-black">Gifts by Recipient.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {[
                 { label: 'For Her', desc: 'Sarees, Cakes & Silks', icon: User, color: 'bg-pink-50 text-pink-400' },
                 { label: 'For Him', desc: 'Homemade Spices & Artisanal Bakes', icon: User, color: 'bg-blue-50 text-blue-400' },
                 { label: 'For Little Ones', desc: 'Cute Frocks & Celebration Boxes', icon: Baby, color: 'bg-amber-50 text-amber-500' }
               ].map((item, i) => (
                 <div key={i} className="group p-12 rounded-[4rem] bg-[#fbf9f6] border border-[#1a1c24]/5 hover:border-[#ff4d6d]/20 transition-all cursor-pointer shadow-sm hover:shadow-xl text-center space-y-6">
                    <div className={`w-20 h-20 rounded-3xl ${item.color} flex items-center justify-center mx-auto transition-all group-hover:scale-110`}>
                       <item.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-2xl font-fraunces font-bold">{item.label}</h4>
                       <p className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30">{item.desc}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[10px] font-outfit font-black uppercase tracking-widest text-[#ff4d6d] opacity-0 group-hover:opacity-100 transition-all">
                       Explore Palace <ChevronRight className="w-4 h-4" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Gift Concierge CTA */}
      <section className="py-24 bg-[#1a1c24] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4d6d]/10 rounded-full blur-[150px]" />
         <div className="max-w-[1500px] mx-auto px-10 text-center space-y-10 relative z-10">
            <h2 className="text-4xl md:text-6xl font-fraunces font-black text-white leading-tight">
               Build a Custom <span className="italic text-[#bfa37e]">Artisan Box.</span>
            </h2>
            <p className="text-lg text-white/40 font-outfit max-w-2xl mx-auto">
               Can't find the perfect combo? Mix and match from our boutique and bakery to create a truly one-of-a-kind gift.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-4 px-14 py-6 bg-[#ff4d6d] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
               Consult our Gift Artisan <Gift className="w-5 h-5" />
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
