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
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(220,176,175,0.15),transparent_70%)]">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[150px] -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[100px] -z-0 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 text-center space-y-8 md:space-y-12">
           <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
           >
              <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">Gifting Elevated</span>
           </motion.div>
           <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[100px] font-fraunces font-black leading-[1.05] tracking-tight italic"
           >
              Handcrafted <span className="italic font-normal text-[#bfa37e] block sm:inline">Emotions.</span>
           </motion.h1>
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-2xl font-outfit text-[#1a1c24]/30 max-w-3xl mx-auto italic leading-relaxed"
           >
              "Discover our curated Gift Palace — where artisan boutique fashion meets the sweetness of a workshop bakery."
           </motion.p>
        </div>
      </section>

      {/* Occasion Selection */}
      <section className="pb-16 md:pb-24">
         <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex flex-row flex-nowrap overflow-x-auto sm:flex-wrap items-center sm:justify-center gap-3 md:gap-4 pb-4 md:pb-0 no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0">
               {occasions.map((occ) => (
                  <button 
                     key={occ.id}
                     onClick={() => setActiveOccasion(occ.id)}
                     className={`flex-shrink-0 flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs font-outfit font-black uppercase tracking-widest transition-all italic active:scale-95 ${activeOccasion === occ.id ? 'bg-[#1a1c24] text-white shadow-2xl' : 'bg-white border border-[#1a1c24]/5 text-[#1a1c24]/30 hover:border-[#ff4d6d]/30 hover:text-[#ff4d6d]'}`}
                  >
                     <occ.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                     {occ.label}
                  </button>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Combos */}
      <section className="pb-24 md:pb-48">
         <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-16">
               <AnimatePresence mode="popLayout">
                 {filtered.map((hamper, i) => (
                   <motion.div 
                      key={hamper.id}
                      layout
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-[#1a1c24]/5 flex flex-col hover:-translate-y-2 transition-transform active:scale-[0.98]"
                   >
                      {/* Visual Side */}
                      <div className="w-full relative aspect-[4/3] md:aspect-auto md:h-[450px] overflow-hidden bg-[#f0ede8]">
                         <img src={hamper.img} alt={hamper.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                         {hamper.secondaryImg && (
                           <div className="absolute -bottom-6 -right-6 md:bottom-6 md:right-6 w-28 h-28 md:w-40 md:h-40 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-4 md:border-[6px] border-white shadow-2xl rotate-6 md:rotate-3 group-hover:rotate-0 transition-transform duration-700">
                              <img src={hamper.secondaryImg} alt="Secondary" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                           </div>
                         )}
                         <div className="absolute top-6 left-6 md:top-8 md:left-8 px-4 md:px-6 py-2 md:py-3 bg-white/95 backdrop-blur-2xl text-[#1a1c24] text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.3em] rounded-full shadow-lg italic">
                            {hamper.tag}
                         </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full p-8 md:p-12 flex flex-col justify-between space-y-8 md:space-y-10 bg-[#fbf9f6]">
                         <div className="space-y-4 md:space-y-6">
                            <div className="flex items-center gap-3">
                               <div className="flex gap-1 text-[#ff4d6d]">
                                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" />)}
                               </div>
                               <span className="text-[9px] md:text-[10px] font-outfit font-black text-[#1a1c24]/20 uppercase tracking-[0.3em] italic">{hamper.rating} Rating</span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-fraunces font-black leading-tight text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors italic">{hamper.name}</h3>
                            <p className="text-sm md:text-base font-outfit text-[#1a1c24]/40 italic leading-relaxed">"{hamper.desc}"</p>
                         </div>

                         <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#1a1c24]/5 pt-8 gap-6">
                            <div className="w-full sm:w-auto flex items-center justify-between sm:flex-col sm:items-start space-y-1">
                               <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-[#ff4d6d] italic">Artisan Combo Price</p>
                               <p className="text-2xl md:text-4xl font-fraunces font-black text-[#1a1c24] italic">₹{hamper.price.toLocaleString()}</p>
                            </div>
                            <button className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-[#1a1c24] text-white rounded-full flex items-center justify-center gap-4 hover:bg-[#ff4d6d] transition-all shadow-2xl active:scale-95 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] italic">
                               <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                               <span className="sm:hidden">Add to Cart</span>
                            </button>
                         </div>
                      </div>
                   </motion.div>
                 ))}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* Recipient Sections - Inspired by Archies */}
      <section className="py-24 md:py-48 bg-white border-y border-[#1a1c24]/5 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ff4d6d]/5 rounded-full blur-[100px] pointer-events-none" />
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
            <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-24">
               <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">Personalized Curation</span>
               <h2 className="text-4xl md:text-7xl lg:text-[84px] font-fraunces font-black text-[#1a1c24] leading-tight italic">
                  Gifts by <span className="text-[#bfa37e] font-normal">Recipient.</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
               {[
                 { label: 'For Her', desc: 'Sarees, Cakes & Silks', icon: User, color: 'bg-[#ff4d6d]/5 text-[#ff4d6d]' },
                 { label: 'For Him', desc: 'Homemade Spices & Artisanal Bakes', icon: User, color: 'bg-blue-50 text-blue-400' },
                 { label: 'For Little Ones', desc: 'Cute Frocks & Celebration Boxes', icon: Baby, color: 'bg-[#bfa37e]/10 text-[#bfa37e]' }
               ].map((item, i) => (
                 <div key={i} className="group p-10 md:p-14 rounded-[3.5rem] bg-[#fbf9f6] border border-[#1a1c24]/5 hover:bg-white hover:border-[#ff4d6d]/20 transition-all cursor-pointer shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] text-center space-y-6 md:space-y-8 active:scale-95">
                    <div className={`w-24 h-24 md:w-28 md:h-28 rounded-[2rem] ${item.color} flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                       <item.icon className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                    <div className="space-y-3">
                       <h4 className="text-2xl md:text-3xl font-fraunces font-black text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors italic">{item.label}</h4>
                       <p className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 leading-relaxed italic">"{item.desc}"</p>
                    </div>
                    <div className="inline-flex items-center gap-3 text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 italic">
                       Explore Palace <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Gift Concierge CTA */}
      <section className="py-24 md:py-48 bg-[#1a1c24] relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
         <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#ff4d6d]/10 rounded-full blur-[150px] md:blur-[200px]" />
         
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center space-y-10 md:space-y-16 relative z-10">
            <div className="space-y-6 text-center">
               <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Gifting Protocol</span>
               <h2 className="text-4xl md:text-7xl lg:text-8xl font-fraunces font-black text-white leading-tight italic">
                  Build a Custom <br className="md:hidden" /><span className="italic font-normal text-[#bfa37e]">Artisan Box.</span>
               </h2>
               <p className="text-sm md:text-2xl text-white/30 font-outfit max-w-2xl mx-auto leading-relaxed italic">
                  "Can't find the perfect combo? Mix and match from our boutique and bakery to create a truly one-of-a-kind gift scroll."
               </p>
            </div>
            <Link href="/contact" className="group relative inline-flex items-center justify-center gap-6 px-12 md:px-16 py-6 md:py-8 bg-[#ff4d6d] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:scale-110 active:scale-95 transition-all shadow-2xl italic overflow-hidden">
               <div className="absolute inset-0 bg-[#1a1c24]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
               <span className="relative z-10 flex items-center justify-center gap-4 text-center">Consult our Gift Artisan <Gift className="w-5 h-5 group-hover:-rotate-12 transition-transform" /></span>
            </Link>
         </div>
      </section>

      <Footer />

    </main>
  );
}
