"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, ChevronRight, ShoppingBag, Star, Clock, Phone } from 'lucide-react';

import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

const categories = ['All', 'Cakes', 'Pastries', 'Snacks', 'Breads & Biscuits', 'Dry Cakes', 'Burgers & Pizzas'];

const products = [
  // ── CAKES (1KG / 500G) ──
  {
    id: 1,
    name: "Choco Chips Cake (1 Kg)",
    category: "Cakes",
    price: 1289,
    tag: "🍫 Bestseller",
    img: "https://cdn.dotpe.in/reports/item/31338/Choco_Chips_Cake_Serves_12_1_KG_jpg",
    desc: "A slice of dark chocolate and truffle layered and studded with premium choco chips.",
    serves: "12",
    time: "24h notice"
  },
  {
    id: 2,
    name: "Eggless Red Velvet Cream Cheese (1 Kg)",
    category: "Cakes",
    price: 1400,
    tag: "❤️ Signature",
    img: "https://cdn.dotpe.in/reports/item/31338/Eggless_Red_Velvet_Cream_Cheese_Cake_Serves_12_1_KG_jpg",
    desc: "Tender red velvet layers paired with our signature smooth cream cheese frosting.",
    serves: "12",
    time: "48h notice"
  },
  {
    id: 3,
    name: "Pineapple Cake (1 Kg)",
    category: "Cakes",
    price: 840,
    tag: "🍍 Tropical",
    img: "https://cdn.dotpe.in/reports/item/31338/Pineapple_Cake_Serves_12_1_KG_jpg",
    desc: "Sweet, tropical pineapple flavor in a moist, layered cake with fresh cream.",
    serves: "12",
    time: "12h notice"
  },
  {
    id: 4,
    name: "Black Forest Cake (1 Kg)",
    category: "Cakes",
    price: 840,
    tag: "🍒 Classic",
    img: "https://cdn.dotpe.in/reports/item/31338/Black_forest_jpg",
    desc: "Classic layers of moist chocolate cake, whipped cream, and cherries.",
    serves: "12",
    time: "12h notice"
  },
  {
    id: 5,
    name: "Almond Delight Cake (1 Kg)",
    category: "Cakes",
    price: 1190,
    tag: "🌰 Nutty",
    img: "https://cdn.dotpe.in/reports/item/31338/Almond_Delight_Cake_serves_12_1_KG_jpg",
    desc: "Infused with the delicate flavor of roasted almonds and nutty textures.",
    serves: "12",
    time: "24h notice"
  },
  {
    id: 6,
    name: "Caramel Delight Cake (1 Kg)",
    category: "Cakes",
    price: 1191,
    tag: "🍯 Sweet",
    img: "https://cdn.dotpe.in/reports/item/31338/Caramel_Delight_Cake_Serves_12_1_KG_jpg",
    desc: "Rich caramel goodness in every slice with smooth glaze.",
    serves: "12",
    time: "24h notice"
  },
  {
    id: 7,
    name: "Belgium Chocolate Cake (500g)",
    category: "Cakes",
    price: 770,
    tag: "🍫 Premium",
    img: "https://cdn.dotpe.in/reports/item/31338/Belgium_Chocolate_Pastry_JPG",
    desc: "Indulge in the rich and decadent flavor of premium imported Belgium chocolate.",
    serves: "6",
    time: "12h notice"
  },
  {
    id: 8,
    name: "Honey Rose Cake (500g)",
    category: "Cakes",
    price: 650,
    tag: "🌹 Floral",
    img: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Delicate honey-infused sponge with rose essence ribbons.",
    serves: "6",
    time: "24h notice"
  },

  // ── PASTRIES ──
  {
    id: 9,
    name: "Brazilian Coffee Pastry",
    category: "Pastries",
    price: 139,
    tag: "☕ Intense",
    img: "https://cdn.dotpe.in/reports/item/31338/brazellian_pastry_JPG",
    desc: "Bold flavors of Brazilian coffee celebrate the depth of infused desserts.",
    serves: "1",
    time: "Instant"
  },
  {
    id: 10,
    name: "Swiss Rocher Pastry",
    category: "Pastries",
    price: 139,
    tag: "🌰 Crispy",
    img: "https://cdn.dotpe.in/reports/item/31338/Swiss_rocker_pastry_jpg",
    desc: "Rich hazelnut and chocolate pastry inspired by Swiss chocolate truffles.",
    serves: "1",
    time: "Instant"
  },
  {
    id: 11,
    name: "Belgium Chocolate Pastry",
    category: "Pastries",
    price: 139,
    tag: "🍫 Silk",
    img: "https://cdn.dotpe.in/reports/item/31338/Belgium_Chocolate_Pastry_JPG",
    desc: "Filled with smooth, creamy premium Belgian chocolate ganache.",
    serves: "1",
    time: "Instant"
  },
  {
    id: 12,
    name: "Rose Tres De Leche",
    category: "Pastries",
    price: 189,
    tag: "🥛 Milky",
    img: "https://cdn.dotpe.in/item/6690393/KSB_10191.jpg",
    desc: "Rose-soaked sponge with a velvety mix of three milks.",
    serves: "2",
    time: "Instant"
  },
  {
    id: 13,
    name: "Pineapple Pastry",
    category: "Pastries",
    price: 97,
    tag: "🍍 Fresh",
    img: "https://cdn.dotpe.in/reports/item/31338/Pineapple_Pastry_jpg",
    desc: "Light, airy pastry infused with bold, tropical pineapple flavor.",
    serves: "1",
    time: "Instant"
  },
  {
    id: 14,
    name: "Butterscotch Pastry",
    category: "Pastries",
    price: 97,
    tag: "🧈 Buttery",
    img: "https://cdn.dotpe.in/reports/item/31338/Butterscotch_Pastry_jpg",
    desc: "Creamy and buttery bakery style classic butterscotch delight.",
    serves: "1",
    time: "Instant"
  },
  {
    id: 15,
    name: "Blackforest Pastry",
    category: "Pastries",
    price: 97,
    tag: "🍫 Classic",
    img: "https://cdn.dotpe.in/reports/item/31338/BlackForest_Pastry_jpg",
    desc: "Moist chocolate cake with whipped cream and cherry toppings.",
    serves: "1",
    time: "Instant"
  },

  // ── SNACKS ──
  {
    id: 16,
    name: "Ginger Chicken Puff",
    category: "Snacks",
    price: 55,
    tag: "🍗 Spicy",
    img: "https://cdn.dotpe.in/reports/item/31338/Ginger_Chicken_Puff_jpg",
    desc: "The perfect mix of tender chicken and ginger spice in flaky crust.",
    serves: "1",
    time: "Hot"
  },
  {
    id: 17,
    name: "Egg Puff",
    category: "Snacks",
    price: 39,
    tag: "🥚 Protein",
    img: "https://cdn.dotpe.in/reports/item/31338/Egg_Puff_jpg",
    desc: "An all-time favorite snack with savory egg filling in a gold puff.",
    serves: "1",
    time: "Hot"
  },
  {
    id: 18,
    name: "Paneer Puff",
    category: "Snacks",
    price: 50,
    tag: "🧀 Veggie",
    img: "https://cdn.dotpe.in/reports/item/31338/Paneer_Puff_jpg",
    desc: "A flaky puff filled with artisan paneer and aromatic spices.",
    serves: "1",
    time: "Hot"
  },
  {
    id: 19,
    name: "Veg. Samosa",
    category: "Snacks",
    price: 32,
    tag: "🥟 Classic",
    img: "https://cdn.dotpe.in/reports/item/31338/Veg_Samosa_jpg",
    desc: "Indian classic appetizer made with spicy boiled potatoes.",
    serves: "1",
    time: "Hot"
  },
  {
    id: 20,
    name: "Veg Puff",
    category: "Snacks",
    price: 32,
    tag: "🥦 Garden",
    img: "https://cdn.dotpe.in/reports/item/31338/Veg_Puff_jpg",
    desc: "A flaky puff with an aromatic mix of fresh vegetables.",
    serves: "1",
    time: "Hot"
  },
  {
    id: 21,
    name: "Chicken Cheese Roll",
    category: "Snacks",
    price: 125,
    tag: "🍗 Cheesy",
    img: "https://cdn.dotpe.in/reports/item/31338/Chicken_Cheese_Roll_jpg",
    desc: "Zesty chicken filling wrapped in a golden cheesy bread roll.",
    serves: "1",
    time: "10 min"
  },
  {
    id: 22,
    name: "Veg. Hot Dog",
    category: "Snacks",
    price: 109,
    tag: "🌭 Quick",
    img: "https://cdn.dotpe.in/reports/item/31338/Veg_Hot_Dog_jpg",
    desc: "Savory vegetable sausage nestled in a soft artisan long bun.",
    serves: "1",
    time: "10 min"
  },

  // ── BURGERS & PIZZAS ──
  {
    id: 23,
    name: "Paneer Tikka Burger",
    category: "Burgers & Pizzas",
    price: 169,
    tag: "🍔 Fusion",
    img: "https://cdn.dotpe.in/reports/item/31338/Paneer_Tikka_Burger_jpg",
    desc: "Melt-in-mouth paneer cubes marinated in Indian spiced yogurt.",
    serves: "1",
    time: "15 min"
  },
  {
    id: 24,
    name: "Chicken Tikka Burger",
    category: "Burgers & Pizzas",
    price: 189,
    tag: "🍗 Bold",
    img: "https://cdn.dotpe.in/reports/item/31338/Chicken_Tikka_Burger_jpg",
    desc: "Lip-smacking burger stuffed with boneless tender chicken tikka.",
    serves: "1",
    time: "15 min"
  },
  {
    id: 25,
    name: "Paneer Tikka Pizza (7\")",
    category: "Burgers & Pizzas",
    price: 309,
    tag: "🍕 Loaded",
    img: "https://cdn.dotpe.in/reports/item/31338/PANEER_TIKKA_PIZZA_7_INCHES_SERVES_2_3_jpg",
    desc: "Soft paneer cubes baked with loaded cheese on artisan crust.",
    serves: "2",
    time: "20 min"
  },
  {
    id: 26,
    name: "Veg. Supreme Pizza (7\")",
    category: "Burgers & Pizzas",
    price: 289,
    tag: "🍕 Veggie",
    img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Bell peppers, corn, olives, and double cheese overload.",
    serves: "2",
    time: "20 min"
  },

  // ── BREADS & BISCUITS ──
  {
    id: 27,
    name: "Osmania Biscuits Big (400g)",
    category: "Breads & Biscuits",
    price: 254,
    tag: "🥨 Iconic",
    img: "https://cdn.dotpe.in/reports/item/31338/Osmania_Biscuits_Big_400Gms_jpg",
    desc: "Traditional Irani style sweet and salt biscuits, Hyderabadi legend.",
    serves: "10 pcs",
    time: "Ready"
  },
  {
    id: 28,
    name: "Brown Bread (300g)",
    category: "Breads & Biscuits",
    price: 74,
    tag: "🍞 Healthy",
    img: "https://cdn.dotpe.in/reports/item/31338/Brown_Bread_300Gms_jpg",
    desc: "Fiber-rich whole wheat brown bread, baked fresh daily.",
    serves: "Loaf",
    time: "Ready"
  },
  {
    id: 29,
    name: "Small White Bread (300g)",
    category: "Breads & Biscuits",
    price: 54,
    tag: "🍞 Staple",
    img: "https://cdn.dotpe.in/reports/item/31338/Small_Bread_300Gms_jpg",
    desc: "Super soft white bread loaf, perfect for sandwiches.",
    serves: "Loaf",
    time: "Ready"
  },
  {
    id: 30,
    name: "Pav Bhaji Bread (300g)",
    category: "Breads & Biscuits",
    price: 54,
    tag: "🥯 Soft",
    img: "https://cdn.dotpe.in/reports/item/31338/Pav_Bazi_Bread_300Gms_jpg",
    desc: "Buttery soft pav buns designed for street-style pav bhaji.",
    serves: "6 pcs",
    time: "Ready"
  },
  {
    id: 31,
    name: "Fruit Bread (300g)",
    category: "Breads & Biscuits",
    price: 69,
    tag: "🍒 Sweet",
    img: "https://images.pexels.com/photos/1510682/pexels-photo-1510682.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Studded with colorful tutti-frutti and sweet surprises.",
    serves: "Loaf",
    time: "Ready"
  },

  // ── DRY CAKE ──
  {
    id: 32,
    name: "Plum Cake Medium (300g)",
    category: "Dry Cakes",
    price: 269,
    tag: "🎄 Festive",
    img: "https://cdn.dotpe.in/reports/item/31338/Plum_Cake_Medium_300_Grams_jpg",
    desc: "Rich plum cake overloaded with traditional soaked dried fruits.",
    serves: "4",
    time: "Ready"
  },
  {
    id: 33,
    name: "Vanilla Muffins Pack",
    category: "Dry Cakes",
    price: 133,
    tag: "🧁 Light",
    img: "https://cdn.dotpe.in/reports/item/31338/Vanilla_Muffins_Pack_jpg",
    desc: "Classic soft vanilla-infused muffins for a light tea-time snack.",
    serves: "4 pcs",
    time: "Ready"
  },
  {
    id: 34,
    name: "Hazelnut Mud Cake (340g)",
    category: "Dry Cakes",
    price: 490,
    tag: "🍫 Intense",
    img: "https://cdn.dotpe.in/item/6690385/KSB_1415.jpg",
    desc: "Dense and rich hazelnut chocolate mud cake, a cocoa ritual.",
    serves: "3",
    time: "Ready"
  },
  {
    id: 35,
    name: "Honey Almond Cookies Box",
    category: "Breads & Biscuits",
    price: 280,
    tag: "🍪 Crunchy",
    img: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Crispy cookies with golden honey and roasted almond slivers.",
    serves: "Box",
    time: "Ready"
  },
  // ── ADDITIONAL 20+ ITEMS TO REACH 55+ ──
  { id: 36, name: "Tiramisu Pastry", category: "Pastries", price: 159, tag: "☕ Coffee", img: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Italian ritual of coffee and mascarpone layers.", serves: "1", time: "Instant" },
  { id: 37, name: "Blueberry Cheesecake", category: "Pastries", price: 179, tag: "🫐 Luxe", img: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Creamy cheesecake with wild blueberry compote.", serves: "1", time: "Instant" },
  { id: 38, name: "Red Velvet Pastry", category: "Pastries", price: 129, tag: "❤️ Lush", img: "https://images.pexels.com/photos/2035426/pexels-photo-2035426.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Velvety sponge with artisan cream cheese.", serves: "1", time: "Instant" },
  { id: 39, name: "White Forest Cake (1 Kg)", category: "Cakes", price: 890, tag: "⚪ Pure", img: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Snowy white chocolate shavings and vanilla cream.", serves: "12", time: "12h notice" },
  { id: 40, name: "Death By Chocolate (1 Kg)", category: "Cakes", price: 1450, tag: "💀 Intense", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Layers of truffle, ganache, and chocolate chunks.", serves: "12", time: "24h notice" },
  { id: 41, name: "Chicken Mayo Sandwich", category: "Burgers & Pizzas", price: 149, tag: "🥪 Creamy", img: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Tender chicken bits in house-made creamy mayo.", serves: "1", time: "10 min" },
  { id: 42, name: "Schezwan Veg Burger", category: "Burgers & Pizzas", price: 139, tag: "🔥 Spicy", img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Fiery Schezwan sauce with a crunchy veg patty.", serves: "1", time: "15 min" },
  { id: 43, name: "Kaju Osmania (400g)", category: "Breads & Biscuits", price: 320, tag: "💎 Cashew", img: "https://cdn.dotpe.in/reports/item/31338/Osmania_Biscuits_Big_400Gms_jpg", desc: "Luxury Osmania biscuits loaded with premium cashews.", serves: "10 pcs", time: "Ready" },
  { id: 44, name: "Butter Cookies Box", category: "Breads & Biscuits", price: 210, tag: "🧈 Melts", img: "https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Rich butter cookies that melt away effortlessly.", serves: "Box", time: "Ready" },
  { id: 45, name: "Choco Walnut Brownie", category: "Dry Cakes", price: 95, tag: "🍫 Gooey", img: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Dense brownie with toasted walnuts and cocoa.", serves: "1", time: "Ready" },
  { id: 46, name: "Mango Entremet (1 Kg)", category: "Cakes", price: 1650, tag: "🥭 Seasonal", img: "https://images.pexels.com/photos/9708317/pexels-photo-9708317.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Mirror glaze mango with coconut dacquoise.", serves: "10", time: "48h notice" },
  { id: 47, name: "Chicken Tikka Pizza (7\")", category: "Burgers & Pizzas", price: 349, tag: "🍕 Tandoori", img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Tandoori chicken chunks and mint mayo drizzle.", serves: "2", time: "20 min" },
  { id: 48, name: "Fruit Rusk Pack", category: "Breads & Biscuits", price: 145, tag: "☕ Dip", img: "https://images.pexels.com/photos/1510682/pexels-photo-1510682.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Double-baked fruit bread rusks for tea-time.", serves: "Pack", time: "Ready" },
  { id: 49, name: "Milk Bread (300g)", category: "Breads & Biscuits", price: 59, tag: "🥛 Sweet", img: "https://cdn.dotpe.in/reports/item/31338/Small_Bread_300Gms_jpg", desc: "Sweetened milk-based bread, soft as a cloud.", serves: "Loaf", time: "Ready" },
  { id: 50, name: "Banana Walnut Dry Cake", category: "Dry Cakes", price: 299, tag: "🍌 Healthy", img: "https://cdn.dotpe.in/reports/item/31338/Plum_Cake_Medium_300_Grams_jpg", desc: "Overripe bananas with walnuts in moist loaf.", serves: "4", time: "Ready" },
  { id: 51, name: "Chicken Club Sandwich", category: "Burgers & Pizzas", price: 199, tag: "🥪 Tower", img: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Triple layers with chicken, egg, and fresh veggies.", serves: "1", time: "15 min" },
  { id: 52, name: "Veg. Nuggets (10 pcs)", category: "Snacks", price: 120, tag: "🍗 Crunchy", img: "https://cdn.dotpe.in/reports/item/31338/Veg_Samosa_jpg", desc: "Bite-sized crispy vegetable nuggets.", serves: "10 pcs", time: "Hot" },
  { id: 53, name: "Chocolate Macarons (6 pcs)", category: "Pastries", price: 350, tag: "🌈 French", img: "https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Delicate French almond cookies with ganache.", serves: "6 pcs", time: "Ready" },
  { id: 54, name: "Chicken Burger", category: "Burgers & Pizzas", price: 159, tag: "🍔 Juicy", img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Classic chicken patty burger with secret sauce.", serves: "1", time: "15 min" },
  { id: 55, name: "Mixed Grain Bread", category: "Breads & Biscuits", price: 89, tag: "🌾 Super", img: "https://cdn.dotpe.in/reports/item/31338/Brown_Bread_300Gms_jpg", desc: "Loaded with flax, sunflower, and pumpkin seeds.", serves: "Loaf", time: "Ready" },
  { id: 56, name: "Swiss Roll (Slice)", category: "Dry Cakes", price: 75, tag: "🌀 Spiral", img: "https://cdn.dotpe.in/reports/item/31338/Vanilla_Muffins_Pack_jpg", desc: "Spiral vanilla sponge with strawberry jam.", serves: "1", time: "Ready" }
];


const collectionCards = [
  { name: 'Cakes', desc: 'Heavenly layers for your celebrations', img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800', href: '#', count: '100+' },
  { name: 'Pastries', desc: 'Indulgent bites of pure joy', img: 'https://cdn.dotpe.in/reports/item/31338/Belgium_Chocolate_Pastry_JPG', href: '#', count: '40+' },
  { name: 'Snacks', desc: 'Gourmet puffs and artisan rolls', img: 'https://cdn.dotpe.in/reports/item/31338/Ginger_Chicken_Puff_jpg', href: '#', count: '25+' },
  { name: 'Burgers & Pizzas', desc: 'Artisan fusion at its finest', img: 'https://cdn.dotpe.in/reports/item/31338/Paneer_Tikka_Burger_jpg', href: '#', count: '15+' },
];


export default function BakeryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-32 overflow-hidden bg-[#fbf9f6]">
        {/* Artisan Bakery gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(220,176,175,0.15),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10 md:space-y-16 text-center lg:text-left"
            >
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="hidden md:block h-px w-16 bg-[#ff4d6d]" />
                  <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d]">Celestial Bakery</span>
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-[#1a1c24] leading-[1.1] md:leading-tight italic">
                  Baked with <br className="hidden sm:block" /><span className="text-[#bfa37e] font-normal italic">Pure Love.</span>
                </h1>
                <p className="text-sm md:text-xl text-[#1a1c24]/40 font-outfit leading-relaxed max-w-xl mx-auto lg:mx-0 italic">
                  "From celebration cakes to everyday indulgences — every creation is handcrafted with the finest ingredients and baked fresh to order."
                </p>
              </div>

              {/* Trust badges refined for mobile */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5">
                {[
                  { icon: '🎂', label: 'Bespoke Cakes' },
                  { icon: '🚚', label: 'Vault Delivery' },
                  { icon: '⭐', label: 'Artisan Fresh' },
                  { icon: '🌿', label: 'Pure Ritual' },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white border border-[#1a1c24]/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-shadow">
                    <span className="text-sm md:text-xl">{b.icon}</span>
                    <span className="text-[9px] md:text-[11px] font-outfit font-black text-[#1a1c24]/40 tracking-[0.2em] uppercase">{b.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-10 items-center justify-center lg:justify-start">
                <Link href="#menu" className="group relative w-full sm:w-auto px-10 py-5 bg-[#1a1c24] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl active:scale-95 overflow-hidden">
                   <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                   <span className="relative z-10 flex items-center justify-center gap-4">Explore Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></span>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto px-10 py-5 border-2 border-[#ff4d6d]/10 text-[#1a1c24] rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-[#ff4d6d] hover:text-white hover:border-[#ff4d6d] transition-all active:scale-95 text-center">
                  Custom Ritual 🎂
                </Link>
              </div>
            </motion.div>

            {/* Right: Hero images - Staggered layout for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[400px] sm:h-[550px] md:h-[650px]"
            >
              {/* Main big card */}
              <div className="absolute top-0 right-0 w-[200px] sm:w-[320px] md:w-[420px] h-[280px] sm:h-[450px] md:h-[550px] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] group z-10 border-[6px] md:border-[12px] border-white rotate-2 hover:rotate-0 transition-all duration-700">
                <img
                  src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Lotus Biscoff Cake"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 right-12">
                  <p className="text-[8px] md:text-[10px] font-outfit font-black uppercase tracking-[0.6em] text-white/50 mb-2 italic">Celestial Creation</p>
                  <h3 className="text-xl md:text-4xl font-fraunces font-black text-white italic">Lotus Biscoff</h3>
                </div>
              </div>
              
              {/* Mini floating card */}
              <div className="absolute bottom-0 left-0 w-[160px] sm:w-[240px] md:w-[320px] h-[140px] sm:h-[220px] md:h-[280px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] border-[6px] md:border-[10px] border-white group z-20 -rotate-3 hover:rotate-0 transition-all duration-700">
                <img
                  src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Cupcakes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                loading="lazy" />
              </div>

              {/* Floating pill refined */}
              <div className="absolute top-[20%] left-[-5%] sm:left-[5%] bg-white rounded-[2rem] px-8 md:px-12 py-6 md:py-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] z-30 transform -rotate-12 hover:rotate-0 transition-all duration-500 scale-75 sm:scale-100">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ff4d6d]/10 rounded-full flex items-center justify-center text-2xl md:text-3xl animate-bounce">🌟</div>
                  <div>
                    <p className="text-[9px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] mb-1">Ritual Rating</p>
                    <p className="text-2xl md:text-4xl font-fraunces font-black text-[#1a1c24] italic">4.9 / 5</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR COLLECTIONS ── */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-20 md:mb-32 space-y-6">
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Realms</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-[#1a1c24] leading-[1.1] italic">
              Something for <br className="hidden md:block" /><span className="text-[#bfa37e] font-normal italic">Every Craving.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {collectionCards.map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-[3rem] md:rounded-[4rem] overflow-hidden cursor-pointer aspect-[4/5] md:aspect-square shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-4"
              >
                <div className="w-full h-full overflow-hidden">
                  <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c24]/80 via-[#1a1c24]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-4">
                  <p className="text-[9px] md:text-[11px] font-outfit font-black uppercase tracking-[0.5em] text-white/40 italic">{col.count} Masterpieces</p>
                  <h4 className="text-2xl md:text-3xl font-fraunces font-black text-white italic leading-tight group-hover:translate-x-2 transition-transform">{col.name}</h4>
                  <p className="text-xs md:text-sm font-outfit font-medium text-white/40 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">{col.desc}</p>
                </div>
                <div className="absolute top-10 right-10 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:rotate-45 active:scale-75 border border-white/20">
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU / PRODUCT GRID ── */}
      <section id="menu" className="py-12 md:py-20 bg-[#fbf9f6] relative overflow-hidden">
        {/* Decorative halos */}
        <div className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#ff4d6d]/5 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#bfa37e]/5 rounded-full blur-[100px] -z-0" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          {/* Header refined */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-10">
            <div className="space-y-6 text-center md:text-left">
              <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Full Archive</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-[#1a1c24] leading-[1.1] italic">
                Our Sacred <br className="hidden md:block" /><span className="text-[#bfa37e] font-normal italic">Catalogue.</span>
              </h2>
            </div>
            <Link href="/contact" className="group flex items-center justify-center md:justify-start gap-4 text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.5em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-all pb-4 border-b-2 border-[#1a1c24]/5 hover:border-[#ff4d6d]/20 active:scale-95">
              Launch Custom Ritual <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Filter Pills refined with smooth horizontal scroll */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 scroll-smooth mb-16 md:mb-24 lg:flex-wrap lg:justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-[9px] md:text-[10px] font-outfit font-black tracking-[0.2em] uppercase transition-all transform active:scale-90 ${activeCategory === cat
                    ? 'bg-[#1a1c24] text-white shadow-lg'
                    : 'bg-white text-[#1a1c24]/20 border border-[#1a1c24]/5 hover:border-[#1a1c24]/10 hover:text-[#1a1c24]/40'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid refined for mobile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 md:gap-12"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group bg-[#fbf9f6] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_120px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-4 border border-[#1a1c24]/5 active:scale-95"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-[#f0ede8]">
                    <Link href={`/bakery/${item.id}`} className="block w-full h-full">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                        loading="lazy"
                      />
                    </Link>
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-2xl rounded-full shadow-lg">
                      <span className="text-[9px] font-outfit font-black text-[#1a1c24] uppercase tracking-widest italic">{item.tag}</span>
                    </div>
                    <button
                      onClick={(e) => { e.preventDefault(); toggleWishlist(item.id); }}
                      className="absolute top-6 right-6 w-12 h-12 bg-white/95 backdrop-blur-2xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ff4d6d] hover:text-white shadow-2xl transform active:scale-75"
                    >
                      <Heart className={`w-5 h-5 transition-colors ${wishlist.includes(item.id) ? 'fill-current text-white' : 'text-[#1a1c24]'}`} />
                    </button>
                    <div className="absolute inset-x-0 bottom-6 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 px-8">
                       <Link href={`/bakery/${item.id}`} className="w-full py-3 bg-white/95 backdrop-blur-md text-[#1a1c24] text-center rounded-full text-[9px] font-black uppercase tracking-[0.25em] shadow-xl border border-white/20 italic hover:bg-[#ff4d6d] hover:text-white transition-colors">Swift Manifest</Link>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8 space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic">{item.category}</p>
                        <div className="flex items-center gap-2 text-[8px] font-outfit font-black text-[#1a1c24]/20 uppercase">
                          <Clock className="w-3 h-3" /> {item.time}
                        </div>
                      </div>
                      <Link href={`/bakery/${item.id}`}>
                        <h3 className="text-base md:text-xl font-fraunces font-black text-[#1a1c24] leading-tight group-hover:text-[#ff4d6d] transition-colors line-clamp-1 italic">{item.name}</h3>
                      </Link>
                    </div>
                    <p className="text-[11px] md:text-xs font-outfit text-[#1a1c24]/30 leading-relaxed font-medium italic line-clamp-2 h-10">" {item.desc} "</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#1a1c24]/5">
                      <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-fraunces font-black text-[#1a1c24] italic">₹{item.price.toLocaleString()}</span>
                        <span className="text-[9px] font-outfit font-black text-[#1a1c24]/20 tracking-widest uppercase italic">SERVES {item.serves}</span>
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

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Subtle silk texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-24 md:mb-40 space-y-6">
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Witnesses</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-[#1a1c24] leading-[1.1] italic">
              Words of <br className="hidden md:block" /><span className="text-[#bfa37e] font-normal italic">True Satisfaction.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { name: 'Priya R.', location: 'Chennai Realm', text: 'The Lotus Biscoff ritual was divine. Every layer hummed with perfection — carameled whispers and biscoff crunches… it vanished from our domain within moments!', stars: 5 },
              { name: 'Ananya S.', location: 'Tirunelveli Vault', text: 'Manifested a custom vision with the masters. They delivered an artifact that surpassed my dreams. It tasted of light and pure artisan grace!', stars: 5 },
              { name: 'Meera K.', location: 'Bangalore Palace', text: 'The Rasamalai fusion was a revelation. A sacred blend of traditional flavors in a modern manifestation. My spirit will definitely return for more!', stars: 5 },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-12 md:p-16 rounded-[4rem] md:rounded-[5rem] bg-[#fbf9f6] border border-[#1a1c24]/5 space-y-10 md:space-y-14 relative group hover:bg-white hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)] transition-all duration-700"
              >
                <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="text-6xl text-[#ff4d6d]/5 font-fraunces">"</div>
                </div>
                <div className="flex gap-2">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <Star key={j} className="w-5 h-5 md:w-6 md:h-6 fill-[#ff4d6d] text-[#ff4d6d] animate-pulse" style={{ animationDelay: `${j * 200}ms` }} />
                  ))}
                </div>
                <p className="text-[#1a1c24]/40 font-outfit italic leading-relaxed text-base md:text-xl">" {t.text} "</p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1a1c24]/5 flex items-center justify-center text-xl md:text-2xl font-fraunces font-black text-[#1a1c24]/20 italic group-hover:bg-[#ff4d6d] group-hover:text-white transition-all duration-500">
                     {t.name[0]}
                  </div>
                  <div>
                    <p className="font-fraunces font-black text-lg md:text-2xl text-[#1a1c24] italic">{t.name}</p>
                    <p className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM ORDER CTA UPDATED ── */}
      <section className="py-12 md:py-20 bg-[#1a1c24] relative overflow-hidden flex flex-col items-center">
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
         <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#ff4d6d]/10 rounded-full blur-[150px] md:blur-[200px]" />
         
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center space-y-10 md:space-y-16 relative z-10 flex flex-col items-center">
            <div className="space-y-6 text-center">
               <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">CUSTOM RITUALS</span>
               <h2 className="text-2xl md:text-4xl lg:text-5xl font-fraunces font-black text-white leading-tight italic">
                  Celebrate With <br className="md:hidden" /><span className="italic font-normal text-[#bfa37e]">Pure Vision.</span>
               </h2>
               <p className="text-sm md:text-2xl text-white/30 font-outfit max-w-2xl mx-auto leading-relaxed italic">
                  "We invite you to the altar of creation. Share your dreams, and our master bakers will manifest them into artifacts of pure celestial joy."
               </p>
            </div>
            <Link href="/contact" className="group relative inline-flex items-center justify-center gap-6 px-10 py-5 bg-[#ff4d6d] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-xl italic overflow-hidden">
               <div className="absolute inset-0 bg-[#1a1c24]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
               <span className="relative z-10 flex items-center justify-center gap-4 text-center">Order Custom Cake 🎂</span>
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
