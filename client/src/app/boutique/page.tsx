"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Search, ChevronRight, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

const categories = ['All', 'Banarasi', 'Kanchipuram', 'Luxe Sarees', 'Lehengas', 'Semi Pattu', 'Designer Blouses', 'Fabrics'];

const products = [
  {
    id: 1,
    name: "Banarasi silk Maggam Lehenga with stitched Blouse",
    category: "Lehengas",
    price: 4199,
    tag: "Premium",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_2e05dc0d-dd47-43e9-8148-a93e3239692b.jpg?v=1763885739&width=533",
    color: "Multi",
    desc: "Intricate Zardosi mudi Maggam work on Banaras silk with soft cotton lining."
  },
  {
    id: 2,
    name: "Ambani inspired Banarasi Soft Katan silk",
    category: "Banarasi",
    price: 1450,
    tag: "Trending",
    img: "https://kvsshopping.com/cdn/shop/files/DAF05EB6-CDFF-4D0F-B7A1-2EA78E0CB80D.jpg?v=1738144278&width=533",
    color: "Purple",
    desc: "Soft Katan Silk with full Sona Rupa Zari weaving and a rich Jacquard pallu."
  },
  {
    id: 3,
    name: "Kanchipuram Semi Pattu Saree Luxe Look",
    category: "Kanchipuram",
    price: 3999,
    tag: "Bestseller",
    img: "https://kvsshopping.com/cdn/shop/files/6E8C2381-6646-4B3F-B12C-3819D772A0DA.jpg?v=1753532528&width=533",
    color: "Gold",
    desc: "Heavy Brocket Quality semi silk with traditional Kuttu weaving and grand patterns."
  },
  {
    id: 4,
    name: "Pure Banarasi Handloom Mashru silk Semi Pattu",
    category: "Banarasi",
    price: 3599,
    tag: "Handloom",
    img: "https://kvsshopping.com/cdn/shop/files/6891E3A7-6F10-4135-A544-0451C09F86AF.jpg?v=1747568006&width=533",
    color: "Red",
    desc: "Mashru silk with a Semi Pattu finish, combining traditional motifs with luxury texture."
  },
  {
    id: 5,
    name: "Bloom Viscose Tissue Designer Lehenga",
    category: "Lehengas",
    price: 1850,
    tag: "New Arrival",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_66a82eb7-3da9-4e36-ad5c-8f9816175be4.jpg?v=1773546721&width=533",
    color: "Pink",
    desc: "Floral-inspired lehenga from premium Tissue, with elegant embroidery and modern sheen."
  },
  {
    id: 6,
    name: "Co-ord Set Tasar Silk Designer Lehenga",
    category: "Lehengas",
    price: 1599,
    tag: "Trendy",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_1c20f02a-1e0c-4763-80f9-52df486d23e9.jpg?v=1773466908&width=533",
    color: "Brown",
    desc: "Contemporary Tasar Silk set designed with a matching co-ord style blouse."
  },
  {
    id: 7,
    name: "Celebrity inspired Kanjivaram with Lace",
    category: "Luxe Sarees",
    price: 2150,
    tag: "Celebrity Choice",
    img: "https://kvsshopping.com/cdn/shop/files/28085CF6-C5A9-4993-B1C5-34EFCA4DFC45.jpg?v=1737546015&width=533",
    color: "Peach",
    desc: "Trendy Kanjivaram silk saree accented with designer lace work for a modern vibe."
  },
  {
    id: 8,
    name: "Banarasi Kora Organza Embroidery Saree",
    category: "Banarasi",
    price: 1499,
    tag: "Budget Luxe",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_2e1b199e-499d-482c-a093-4789bcdba9ae.jpg?v=1754323690&width=533",
    color: "Green",
    desc: "Lightweight Organza fabric featuring delicate thread embroidery for festive looks."
  },
  {
    id: 9,
    name: "Banarasi Bridal Kanjeevaram Saree",
    category: "Banarasi",
    price: 3150,
    tag: "Bridal",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_d2241e3f-033a-4b31-a3a5-16c843bad4d0.jpg?v=1760597412&width=533",
    color: "Maroon",
    desc: "Heavy bridal saree with Banarasi weaving and Kanjeevaram gold-toned Zari motifs."
  },
  {
    id: 10,
    name: "Chinnon Designer Viscose Lehenga",
    category: "Lehengas",
    price: 1750,
    tag: "Flowy",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_92f419c8-6787-45f6-8d10-413c45d1f4ea.jpg?v=1773365377&width=533",
    color: "Blue",
    desc: "Flowy Designer Viscose Chinon set, known for its soft drape and embroidery."
  },
  {
    id: 11,
    name: "Traditional Elegance Silk Lehenga",
    category: "Lehengas",
    price: 1799,
    tag: "Classic",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_6e14fa40-61bc-41b1-9629-746a48307922.jpg?v=1773127875&width=533",
    color: "Green",
    desc: "A classic blend of tradition and trend, featuring high-quality silk and ethnic motifs."
  },
  {
    id: 12,
    name: "Semi Kanchipattu Maggam Lehenga Set",
    category: "Lehengas",
    price: 4799,
    tag: "Boutique Exclusive",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_136e34b0-4016-4f91-a624-e70bff13319f.jpg?v=1770217704&width=533",
    color: "Violet",
    desc: "Kanchipattu silk lehenga paired with a heavy Maggam work designer blouse."
  },
  {
    id: 13,
    name: "Luxe Handwork Saree with Pearl Blouse",
    category: "Luxe Sarees",
    price: 2450,
    tag: "Stitched Blouse",
    img: "https://kvsshopping.com/cdn/shop/files/C1C1E969-C29F-4B18-B81C-016DC8E753F5.jpg?v=1749928608&width=533",
    color: "White",
    desc: "Embellished with pearls and a ready-to-wear stitched designer boutique blouse."
  },
  {
    id: 14,
    name: "Paithani Luxe with Stitched Blouse",
    category: "Luxe Sarees",
    price: 2850,
    tag: "Traditional",
    img: "https://kvsshopping.com/cdn/shop/files/4BEBCE08-872B-4218-AB1F-90BBBB115268.jpg?v=1745335808&width=533",
    color: "Blue",
    desc: "Maharastrian Paithani saree with peacock motifs and a fully stitched blouse."
  },
  {
    id: 15,
    name: "Handloom Pure Luxe Mashru Silk",
    category: "Banarasi",
    price: 4250,
    tag: "Pure Silk",
    img: "https://kvsshopping.com/cdn/shop/files/74ADFC94-85BB-4343-B7D7-B3113EEC0962.jpg?v=1749239870&width=533",
    color: "Pink",
    desc: "Expertly handloomed Pure Semi Pattu saree in premium Mashru Silk texture."
  },
  {
    id: 16,
    name: "Banarasi Classic Mashru Semi Pattu",
    category: "Semi Pattu",
    price: 3499,
    tag: "Artisan Choice",
    img: "https://kvsshopping.com/cdn/shop/files/IMG-6208.jpg?v=1748971159&width=533",
    color: "Gold",
    desc: "Mashru Silk saree with a defined Semi Pattu border and traditional silk weaving."
  },
  {
    id: 17,
    name: "Vasudha Kalamkari Designer Art Lehenga",
    category: "Lehengas",
    price: 2599,
    tag: "Hand Painted",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_15feb7e5-5bcd-40f4-aac2-f2f84d98b480.jpg?v=1769515952&width=533",
    color: "Yellow",
    desc: "Traditional Kalamkari floral art on a premium boutique designer lehenga."
  },
  {
    id: 18,
    name: "South Indian Narayan Pattu Lehenga",
    category: "Lehengas",
    price: 1699,
    tag: "Ethnic",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_aa979823-8064-469c-b7e4-3ff698c2c076.jpg?v=1768585958&width=533",
    color: "Red",
    desc: "Authentic Narayana Pattu set, capturing South Indian festive traditions."
  },
  {
    id: 19,
    name: "Ready to wear Saree Luxe Lovers",
    category: "Luxe Sarees",
    price: 5499,
    tag: "Pre-Stitched",
    img: "https://kvsshopping.com/cdn/shop/files/rn-image_picker_lib_temp_8ae9badc-3855-4b05-b0a3-3dce8a8648a8.jpg?v=1759584874&width=533",
    color: "Black",
    desc: "Premium pre-stitched saree with a heavily embroidered designer boutique blouse."
  },
  {
    id: 20,
    name: "Glamour Trending Handwork Luxe Saree",
    category: "Luxe Sarees",
    price: 2899,
    tag: "Party Wear",
    img: "https://kvsshopping.com/cdn/shop/files/321C25D1-A3DB-4A9F-8E3E-573532C9EDD6.jpg?v=1757007305&width=533",
    color: "Emerald",
    desc: "Space Silk fabric with glamorous hand-worked patterns for luxury gifting."
  }
];


export default function BoutiquePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = products.filter(p => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-32 overflow-hidden bg-[#fbf9f6]">
        {/* Subtle decorative elements with artisan blur */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[180px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[150px] -z-0" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 md:space-y-12 text-center lg:text-left"
            >
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="hidden md:block h-px w-16 bg-[#ff4d6d]" />
                  <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d]">Artisan Boutique</span>
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-[#1a1c24] leading-[1.1] md:leading-tight italic">
                  Wear Your <br className="hidden sm:block" /><span className="text-[#bfa37e] font-normal italic">Story.</span>
                </h1>
                <p className="text-sm md:text-xl text-[#1a1c24]/40 font-outfit leading-relaxed max-w-xl mx-auto lg:mx-0 italic">
                  Handcrafted Kanchi silks, designer sarees, artisan blouses, and ethnic ensembles — curated for every chapter of your life.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 md:pt-6">
                {['Sarees', 'Lehengas', 'Gowns', 'Fabrics'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveCategory(tag)}
                    className="px-8 py-4 rounded-full border-2 border-[#bfa37e]/10 text-[9px] md:text-[10px] font-outfit font-black tracking-[0.2em] uppercase text-[#bfa37e] hover:bg-[#bfa37e] hover:text-white hover:border-[#bfa37e] transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Staggered Images - Improved for mobile with better spacing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[300px] sm:h-[450px] md:h-[550px]"
            >
              <div className="absolute top-0 left-0 w-[160px] sm:w-[220px] md:w-[280px] h-[220px] sm:h-[320px] md:h-[400px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] rotate-[-6deg] z-0 group">
                <img
                  src="https://anyaonline.in/cdn/shop/files/5_4e137679-25e0-4fec-94de-0661134b06ad_400x.jpg?v=1770902247"
                  alt="Bridal Collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute top-[10%] left-[25%] w-[150px] sm:w-[200px] md:w-[260px] h-[200px] sm:h-[280px] md:h-[350px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] z-20 border-[6px] md:border-[10px] border-white group">
                <img
                  src="https://anyaonline.in/cdn/shop/files/1_f604d26e-5258-405f-a4c1-5fe659b6febb_400x.jpg?v=1771045647"
                  alt="Sarees"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                loading="lazy" />
              </div>
              <div className="absolute bottom-0 right-0 w-[140px] sm:w-[180px] md:w-[240px] h-[180px] sm:h-[250px] md:h-[320px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] rotate-[4deg] z-10 border-[6px] md:border-[10px] border-white group">
                <img
                  src="https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393"
                  alt="Silk Sarees"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                loading="lazy" />
              </div>
              {/* Stats bubble updated for mobile */}
              <div className="absolute bottom-[10%] left-[10%] md:bottom-[20%] md:left-[15%] bg-white rounded-3xl px-6 md:px-10 py-4 md:py-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] z-30 transform -rotate-3 hover:rotate-0 transition-transform">
                <p className="text-[8px] md:text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e]">Collections</p>
                <p className="text-2xl md:text-5xl font-fraunces font-black text-[#1a1c24] italic">980+</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SEARCH BAR (expandable) ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-b border-[#1a1c24]/5 overflow-hidden sticky top-16 z-50 shadow-xl"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a1c24]/20 group-focus-within:text-[#ff4d6d] transition-colors" />
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Seach sarees, blouses, gowns..."
                  className="w-full pl-16 pr-16 py-5 md:py-7 rounded-full bg-[#fbf9f6] text-sm md:text-lg font-outfit text-[#1a1c24] placeholder-[#1a1c24]/20 border-2 border-transparent focus:border-[#ff4d6d]/10 focus:bg-white outline-none transition-all shadow-inner"
                />
                {searchQuery && (
                   <button onClick={() => setSearchQuery('')} className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1a1c24]/5 flex items-center justify-center text-[#1a1c24]/30 hover:bg-[#ff4d6d] hover:text-white transition-all">
                     <X className="w-4 h-4" />
                   </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CATEGORY FILTER BAR ── */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-2xl border-b border-[#1a1c24]/5 py-4 md:py-6">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6 overflow-hidden">
          {/* Category tabs — horizontally scrollable refined */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 scroll-smooth flex-1 lg:flex-wrap lg:justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-[9px] md:text-[10px] font-outfit font-black tracking-[0.2em] uppercase transition-all transform active:scale-95 ${
                  activeCategory === cat
                    ? 'bg-[#1a1c24] text-white shadow-lg'
                    : 'bg-[#fbf9f6] text-[#1a1c24]/30 hover:text-[#1a1c24] border border-transparent hover:border-[#1a1c24]/10 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right actions improved for mobile touch */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setSearchOpen(o => !o)}
              className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all shadow-sm active:scale-90 ${searchOpen ? 'bg-[#ff4d6d] text-white rotate-90 shadow-[0_10px_30px_rgba(255,77,109,0.3)]' : 'bg-[#fbf9f6] text-[#1a1c24]/40 hover:bg-white hover:text-[#ff4d6d] border border-transparent hover:border-[#ff4d6d]/20'}`}
            >
              {searchOpen ? <X className="w-5 h-5 md:w-7 md:h-7" /> : <Search className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
            <button className="flex items-center gap-3 pl-6 pr-8 md:pl-10 md:pr-12 h-10 md:h-14 rounded-full bg-[#fbf9f6] border border-transparent hover:border-[#ff4d6d]/20 text-[10px] md:text-[11px] font-outfit font-black text-[#1a1c24]/30 hover:text-[#ff4d6d] hover:bg-white transition-all uppercase tracking-widest shadow-sm active:scale-95">
              <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Advanced Filter</span>
              <span className="sm:hidden">Filter</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="py-16 md:py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-20 gap-8">
            <div className="space-y-1 text-center md:text-left">
               <p className="text-[10px] md:text-xs font-outfit font-black text-[#1a1c24]/30 tracking-[0.4em] uppercase">
                 Artisan Selection
               </p>
               <h3 className="text-xl md:text-3xl font-fraunces font-black text-[#1a1c24] italic">
                 {activeCategory} <span className="text-[#1a1c24]/10 font-normal">({filtered.length} Designs)</span>
               </h3>
            </div>
            <div className="relative group">
               <select className="appearance-none text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/40 bg-[#fbf9f6] hover:bg-white hover:text-[#1a1c24] px-10 py-4 rounded-full border border-transparent hover:border-[#1a1c24]/10 transition-all cursor-pointer outline-none shadow-sm pr-12 group-hover:shadow-md">
                 <option>Sort: Royal Featured</option>
                 <option>Price: Ascent</option>
                 <option>Price: Descent</option>
                 <option>Latest Arrivals</option>
               </select>
               <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1c24]/20 group-hover:text-[#ff4d6d] transition-colors">
                  <ChevronRight className="w-4 h-4 rotate-90" />
               </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 md:gap-12"
            >
              {filtered.length > 0 ? filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group bg-[#fbf9f6] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_120px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-4 border border-[#1a1c24]/5 active:scale-95"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-[#f0ede8]">
                    <Link href={`/boutique/${product.id}`} className="block w-full h-full">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                        loading="lazy"
                      />
                    </Link>
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-2xl rounded-full shadow-lg">
                      <span className="text-[9px] font-outfit font-black text-[#1a1c24] uppercase tracking-widest italic">{product.tag}</span>
                    </div>
                    <button
                      onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
                      className="absolute top-6 right-6 w-12 h-12 bg-white/95 backdrop-blur-2xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ff4d6d] hover:text-white shadow-2xl transform active:scale-75"
                    >
                      <Heart className={`w-5 h-5 transition-colors ${wishlist.includes(product.id) ? 'fill-current text-white' : 'text-[#1a1c24]'}`} />
                    </button>
                    <div className="absolute inset-x-0 bottom-6 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 px-8">
                       <Link href={`/boutique/${product.id}`} className="w-full py-3 bg-white/95 backdrop-blur-md text-[#1a1c24] text-center rounded-full text-[9px] font-black uppercase tracking-[0.25em] shadow-xl border border-white/20 italic hover:bg-[#ff4d6d] hover:text-white transition-colors">Swift Manifest</Link>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8 space-y-4">
                    <div className="space-y-1">
                      <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic">{product.category}</p>
                      <Link href={`/boutique/${product.id}`}>
                        <h3 className="text-base md:text-xl font-fraunces font-black text-[#1a1c24] leading-tight group-hover:text-[#ff4d6d] transition-colors line-clamp-1 italic">{product.name}</h3>
                      </Link>
                    </div>
                    <p className="text-[11px] md:text-xs font-outfit text-[#1a1c24]/30 leading-relaxed font-medium italic line-clamp-2 h-10">" {product.desc || `Authentic ${product.category} crafted for boutique excellence.`} "</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#1a1c24]/5">
                      <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-fraunces font-black text-[#1a1c24] italic">₹{product.price.toLocaleString()}</span>
                        <span className="text-[9px] font-outfit font-black text-[#1a1c24]/20 tracking-widest uppercase italic">PER SCROLL</span>
                      </div>
                      <button className="flex items-center justify-center w-14 h-14 bg-[#1a1c24] text-white rounded-full hover:bg-[#ff4d6d] transition-all shadow-xl active:scale-90">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full py-40 md:py-64 text-center space-y-10">
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="w-32 h-32 md:w-48 md:h-48 bg-[#fbf9f6] rounded-full flex items-center justify-center mx-auto shadow-inner relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[#ff4d6d]/5 scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-full" />
                     <Search className="w-10 h-10 md:w-16 md:h-16 text-[#1a1c24]/5 group-hover:text-[#ff4d6d]/20 transition-colors" />
                  </motion.div>
                  <div className="space-y-4">
                     <h3 className="text-2xl md:text-5xl font-fraunces font-black text-[#1a1c24]/20 italic">No designs found <br />in the archive.</h3>
                     <p className="text-sm md:text-xl font-outfit text-[#1a1c24]/30 italic">Try resetting the ritual or explore other domains.</p>
                  </div>
                  <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }} className="px-10 md:px-14 py-4 md:py-6 bg-[#1a1c24] text-white rounded-full text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] hover:bg-[#ff4d6d] transition-all shadow-2xl active:scale-95">Purify Ritual Filters</button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>


          {/* Load More Refined */}
          <div className="text-center mt-24 md:mt-40">
            <button className="group relative px-14 md:px-24 py-6 md:py-8 border-2 border-[#1a1c24]/5 rounded-full text-[10px] md:text-xs font-outfit font-black tracking-[0.5em] uppercase text-[#1a1c24]/20 hover:text-[#1a1c24] hover:border-[#1a1c24]/20 transition-all transform hover:scale-[1.02] active:scale-95 shadow-sm hover:shadow-2xl overflow-hidden">
               <div className="absolute inset-0 bg-white/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 italic" />
               <span className="relative z-10 flex items-center gap-6">Explore More Archive <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></span>
            </button>
          </div>
        </div>
      </section>

      {/* ── CUSTOM ORDER CTA UPDATED ── */}
      <section className="py-12 md:py-20 bg-[#1a1c24] relative overflow-hidden flex flex-col items-center">
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
         <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#ff4d6d]/10 rounded-full blur-[150px] md:blur-[200px]" />
         
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center space-y-10 md:space-y-16 relative z-10 flex flex-col items-center">
            <div className="space-y-6 text-center">
               <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">Private Atelier</span>
               <h2 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-white leading-tight italic">
                  Bespoke <br className="md:hidden" /><span className="italic font-normal text-[#bfa37e]">Visionaries.</span>
               </h2>
               <p className="text-sm md:text-2xl text-white/30 font-outfit max-w-2xl mx-auto leading-relaxed italic">
                  "We invite you to the ritual of creation. Share your dreams, and our master artisans will manifest them into artifacts of pure grace."
               </p>
            </div>
            <Link href="/contact" className="group relative inline-flex items-center justify-center gap-6 px-10 py-5 bg-[#ff4d6d] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-xl italic overflow-hidden">
               <div className="absolute inset-0 bg-[#1a1c24]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
               <span className="relative z-10 flex items-center justify-center gap-4 text-center">Design Custom Outfit 👗</span>
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
