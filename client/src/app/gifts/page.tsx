"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, ShoppingBag, Star, ChevronRight, Cake, Sparkles, User, Users, Baby, CalendarDays } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

const occasions = [
  { id: 'all', label: 'All Occasions', icon: Sparkles },
  { id: 'anniversary', label: 'Anniversary', icon: Heart },
  { id: 'birthday', label: 'Birthday', icon: Cake },
  { id: 'personalized', label: 'Personalized', icon: User },
  { id: 'gifts', label: 'Premium Gifts', icon: Gift },
];

const giftHampers = [
  {
    id: 1,
    name: "SHOW IT OFF",
    category: "Anniversary",
    price: 4800,
    tag: "Limelight Surprise",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/showitoff3.jpg?v=1719503711",
    desc: "A life-size banner reveal amidst a crowd to make your loved one feel like a star.",
    rating: 4.9
  },
  {
    id: 2,
    name: "Gifts From Strangers",
    category: "Anniversary",
    price: 7200,
    tag: "Pyaar Play",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/CopyofPyarplay-1.png?v=1713444660",
    desc: "Random strangers wishing and gifting your loved one at intervals for a day to remember.",
    rating: 4.8
  },
  {
    id: 3,
    name: "STOP OVER A DRIVE",
    category: "Anniversary",
    price: 10200,
    tag: "Roadside Magic",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/1.jpg?v=1719506234",
    desc: "Hand-picked gifts at regular intervals during a drive, with a biker squad message reveal.",
    rating: 5.0
  },
  {
    id: 4,
    name: "THE LIGHT STUDDED SURPRISE",
    category: "Anniversary",
    price: 21000,
    tag: "Neon Glow",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/Website_1X1-44.jpg?v=1717773820",
    desc: "A series of neon lights turning on one by one to form a beautiful customized message.",
    rating: 4.7
  },
  {
    id: 5,
    name: "THE TALE OF LOVE",
    category: "Anniversary",
    price: 10999,
    tag: "Memory Lane",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/Website_1X1-33.jpg?v=1717771724",
    desc: "Walk through your romantic love story on the shore with a breezy, beautiful path of love.",
    rating: 4.9
  },
  {
    id: 6,
    name: "THE MUSICAL FLASHMOB",
    category: "Birthday",
    price: 15000,
    tag: "Artistic Reveal",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/Musicalflashmob_7.jpg?v=1715944053",
    desc: "Live artists singing and playing instruments appearing out of the blue during a stroll.",
    rating: 4.8
  },
  {
    id: 7,
    name: "THE FLUTTERING HEARTS",
    category: "Birthday",
    price: 8640,
    tag: "Balloon Blast",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/Copyofboxofballoons_1_copy.png?v=1713441107",
    desc: "A huge box opened to witness love and happiness flying out in the form of balloons.",
    rating: 5.0
  },
  {
    id: 8,
    name: "Love By The Sea",
    category: "Birthday",
    price: 31200,
    tag: "Ultra Luxury",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/IMG_9866.jpg?v=1713348677",
    desc: "An exemplary cabana set-up by the beach with yellow lighting pathways and glowing vibes.",
    rating: 4.9
  },
  {
    id: 9,
    name: "THE LOVEY DOVEY ROOM DECOR",
    category: "Birthday",
    price: 9600,
    tag: "Heavenly Room",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/CopyofLoveydovey.jpg?v=1715242810",
    desc: "Transforming a room with candles, balloons, rose petals, and pictures in a sinfully elegant way.",
    rating: 4.7
  },
  {
    id: 10,
    name: "The Hidden Door",
    category: "Birthday",
    price: 11799,
    tag: "Private Dining",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/TheHiddenDoor3_2eb37332-a446-4582-a7ea-eb885094e3de.webp?v=1764583564",
    desc: "An intimate, beautifully curated tea villa surprise with soft aesthetics and warm lighting.",
    rating: 5.0
  },
  {
    id: 11,
    name: "CUSTOMIZED MAGAZINE",
    category: "Personalized",
    price: 1249,
    tag: "Bespoke Read",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/12x16Magazine.jpg?v=1717869848",
    desc: "An entire magazine customized for your love story, making them the cover star.",
    rating: 4.9
  },
  {
    id: 12,
    name: "CLIP YOUR LOVE",
    category: "Personalized",
    price: 1350,
    tag: "Handmade Frame",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/photoclipframemock.jpg?v=1717869706",
    desc: "A beautiful handmade frame with clips showcasing all your cherished memories.",
    rating: 4.8
  },
  {
    id: 13,
    name: "50 REASONS WHY",
    category: "Personalized",
    price: 1750,
    tag: "Love Minimal",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/1.-50-REASONS-WHY.jpg?v=1715314264",
    desc: "Express the 50 fantabulous reasons why you have fallen for them in a minimal style.",
    rating: 5.0
  },
  {
    id: 14,
    name: "KIT KAT BOX",
    category: "Gifts",
    price: 3500,
    tag: "Chocoholic Delight",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/Kit-kat-4.jpg?v=1715314715",
    desc: "A mouth-watering chocolate package reminding them that they deserve a break.",
    rating: 4.7
  },
  {
    id: 15,
    name: "IT’S OUT THERE",
    category: "Personalized",
    price: 2500,
    tag: "Wanderlust Map",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/5.-ITS-OUT-THERE.jpg?v=1715314566",
    desc: "A world map portraying the travelogue moments of global traveling couples.",
    rating: 4.9
  },
  {
    id: 16,
    name: "LOVE CONTRACT",
    category: "Gifts",
    price: 499,
    tag: "Sacred Binding",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/lovecontractmockup.jpg?v=1717870390",
    desc: "A special binding contract for you and your loved one to sign your promises.",
    rating: 4.8
  },
  {
    id: 17,
    name: "MOON AND BACK FRAME",
    category: "Gifts",
    price: 950,
    tag: "Astro Love",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/TOTHEMOONANDBACK.jpg?v=1717870884",
    desc: "A lovely customized frame expressing love that reaches the moon and back.",
    rating: 5.0
  },
  {
    id: 18,
    name: "LOVE CHEQUE",
    category: "Gifts",
    price: 899,
    tag: "Ritual Tender",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/lovechequemockup.jpg?v=1717870269",
    desc: "A book of cheque leaves containing cute activities to redeem with your partner.",
    rating: 4.9
  },
  {
    id: 19,
    name: "LOVE HAMPER BOX",
    category: "Gifts",
    price: 4999,
    tag: "Artisan Box",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/lovebox.jpg?v=1717870473",
    desc: "A super cute, exclusively custom-made love hamper box for your dearie.",
    rating: 4.7
  },
  {
    id: 20,
    name: "CLOSE TO HEART",
    category: "Personalized",
    price: 1050,
    tag: "Location Lock",
    img: "https://cdn.shopify.com/s/files/1/0647/4199/8783/files/2.-WHERE-I-MET-YOU-1.jpg?v=1715313957",
    desc: "Cherish your special 'where I met you' location in a beautifully framed heart map.",
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
      <section className="pb-12 md:pb-20">
         <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6 lg:flex-wrap lg:justify-center">
               {occasions.map((occ) => (
                  <button 
                     key={occ.id}
                     onClick={() => setActiveOccasion(occ.id)}
                     className={`flex-shrink-0 px-8 py-3.5 md:py-4 rounded-full text-[9px] md:text-[11px] font-outfit font-black tracking-[0.3em] uppercase transition-all italic ${activeOccasion === occ.id ? 'bg-[#1a1c24] text-white shadow-2xl' : 'text-[#1a1c24]/30 border border-[#1a1c24]/5 bg-white hover:border-[#ff4d6d]/50 hover:text-[#ff4d6d]'}`}
                  >
                     {occ.label}
                  </button>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Combos */}
      <section className="pb-24 md:pb-48">
         <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
               <AnimatePresence mode="popLayout">
                 {filtered.map((hamper, i) => (
                   <motion.div 
                      key={hamper.id}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.05, duration: 0.45 }}
                      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-[#1a1c24]/5 flex flex-col hover:-translate-y-3 transition-all duration-500 active:scale-[0.98]"
                   >
                      {/* Image Side */}
                      <div className="relative aspect-square overflow-hidden bg-[#f0ede8]">
                         <img src={hamper.img} alt={hamper.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                         <div className="absolute top-5 left-5 px-4 py-2 bg-white/95 backdrop-blur-2xl text-[#1a1c24] text-[8px] md:text-[9px] font-outfit font-black uppercase tracking-[0.2em] rounded-full shadow-md italic">
                            {hamper.tag}
                         </div>
                         <button className="absolute top-5 right-5 w-10 h-10 bg-white/95 backdrop-blur-2xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ff4d6d] hover:text-white shadow-xl">
                            <Heart className="w-4 h-4" />
                         </button>
                      </div>

                      {/* Content Side */}
                      <div className="p-7 md:p-8 flex flex-col flex-1 justify-between gap-6 bg-[#fbf9f6]">
                         <div className="space-y-4">
                            <div className="flex items-center gap-2">
                               <div className="flex gap-0.5 text-[#ff4d6d]">
                                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                               </div>
                               <span className="text-[8px] font-black text-[#1a1c24]/20 uppercase tracking-[0.2em] italic">{hamper.rating}</span>
                            </div>
                            <h3 className="text-lg md:text-xl font-fraunces font-black leading-tight text-[#1a1c24] group-hover:text-[#ff4d6d] transition-colors italic line-clamp-2">{hamper.name}</h3>
                            <p className="text-[11px] font-outfit text-[#1a1c24]/40 italic leading-relaxed line-clamp-2">"{hamper.desc}"</p>
                         </div>

                         <div className="flex items-center justify-between border-t border-[#1a1c24]/5 pt-6 mt-auto">
                            <div className="flex flex-col">
                               <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#ff4d6d] italic">Combo Value</span>
                               <span className="text-xl md:text-2xl font-fraunces font-black text-[#1a1c24] italic">₹{hamper.price.toLocaleString()}</span>
                            </div>
                            <button className="w-12 h-12 bg-[#1a1c24] text-white rounded-full flex items-center justify-center hover:bg-[#ff4d6d] transition-all shadow-lg active:scale-90">
                               <ShoppingBag className="w-4 h-4" />
                            </button>
                         </div>
                      </div>
                   </motion.div>
                 ))}
               </AnimatePresence>
            </div>
         </div>
      </section>


      {/* Recipient Sections */}
      <section className="py-20 md:py-32 bg-white border-y border-[#1a1c24]/5 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#dcb0af]/5 rounded-full blur-[100px] pointer-events-none" />
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
            <div className="text-center space-y-4 md:space-y-6 mb-16 md:mb-20">
               <span className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#dcb0af] italic">The Curation Matrix</span>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24] leading-tight italic">
                  Gifts by <span className="text-[#bfa37e] font-normal">Recipient.</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
               {[
                 { label: 'For Her', desc: 'Sarees, Cakes & Silks', icon: User, color: 'bg-[#dcb0af]/5 text-[#dcb0af]' },
                 { label: 'For Him', desc: 'Homemade Spices & Artisanal Bakes', icon: User, color: 'bg-blue-50 text-blue-400' },
                 { label: 'For Little Ones', desc: 'Cute Frocks & Celebration Boxes', icon: Baby, color: 'bg-[#bfa37e]/10 text-[#bfa37e]' }
               ].map((item, i) => (
                 <div key={i} className="group p-8 md:p-10 rounded-[3rem] bg-[#fbf9f6] border border-[#1a1c24]/5 hover:bg-white hover:border-[#dcb0af]/20 transition-all cursor-pointer shadow-sm hover:shadow-2xl text-center space-y-6 active:scale-95">
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-[2rem] ${item.color} flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                       <item.icon className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-xl md:text-2xl font-fraunces font-black text-[#1a1c24] group-hover:text-[#dcb0af] transition-colors italic">{item.label}</h4>
                       <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.2em] text-[#1a1c24]/30 leading-relaxed italic">"{item.desc}"</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>


      {/* Gift Concierge CTA */}
      <section className="py-24 md:py-48 bg-[#1a1c24] relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
         <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#dcb0af]/10 rounded-full blur-[150px] md:blur-[200px]" />
         
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center space-y-10 md:space-y-16 relative z-10">
            <div className="space-y-6 text-center">
               <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#dcb0af] italic">The Gifting Protocol</span>
               <h2 className="text-4xl md:text-7xl lg:text-8xl font-fraunces font-black text-white leading-tight italic">
                  Build a Custom <br className="md:hidden" /><span className="italic font-normal text-[#bfa37e]">Artisan Box.</span>
               </h2>
               <p className="text-sm md:text-2xl text-white/30 font-outfit max-w-2xl mx-auto leading-relaxed italic">
                  "Can't find the perfect combo? Mix and match from our boutique and bakery to create a truly one-of-a-kind gift scroll."
               </p>
            </div>
            <Link href="/gifts/builder" className="group relative inline-flex items-center justify-center gap-6 px-12 md:px-16 py-6 md:py-8 bg-[#dcb0af] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:scale-110 active:scale-95 transition-all shadow-2xl italic overflow-hidden">
               <div className="absolute inset-0 bg-[#2d241c]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
               <span className="relative z-10 flex items-center justify-center gap-4 text-center">Enter Gift Builder <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" /></span>
            </Link>
         </div>
      </section>


      <Footer />

    </main>
  );
}
