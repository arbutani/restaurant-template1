"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Starters", "Main Course", "Desserts", "Drinks"];

const menuItems = [
  {
    name: "Truffle Arancini",
    category: "Starters",
    price: "₹18",
    description: "Crispy risotto balls with black truffle, parmesan fondue",
    tag: "Chef's Pick",
    image: "/cheese-1914114_1280.jpg",
  },
  {
    name: "Tuna Tartare",
    category: "Starters",
    price: "₹22",
    description: "Fresh tuna, avocado mousse, sesame, crispy wonton",
    tag: "Popular",
    image: "/meal-2069021_1280.jpg",
  },
  {
    name: "Burrata Caprese",
    category: "Starters",
    price: "₹16",
    description: "Creamy burrata, heirloom tomatoes, basil oil, aged balsamic",
    tag: null,
    image: "/pumpkin-soup-3645375_1280.jpg",
  },
  {
    name: "Wagyu Beef Tenderloin",
    category: "Main Course",
    price: "₹65",
    description: "A5 Wagyu, bone marrow jus, roasted garlic, seasonal vegetables",
    tag: "Signature",
    image: "/chicken-7295569_1280.jpg",
  },
  {
    name: "Pan-Seared Salmon",
    category: "Main Course",
    price: "₹38",
    description: "Norwegian salmon, lemon beurre blanc, asparagus, caviar",
    tag: "Popular",
    image: "/free-photo-of-table-of-italian-cuisine.jpeg",
  },
  {
    name: "Lobster Risotto",
    category: "Main Course",
    price: "₹48",
    description: "Maine lobster, saffron risotto, parmesan, microgreens",
    tag: "Chef's Pick",
    image: "/free-photo-of-authentic-indian-feast-with-rich-flavors.jpeg",
  },
  {
    name: "Lamb Rack",
    category: "Main Course",
    price: "₹45",
    description: "Herb-crusted lamb, mint chimichurri, roasted root vegetables",
    tag: null,
    image: "/pasta-3547078_1280.jpg",
  },
  {
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: "₹16",
    description: "Molten dark chocolate, vanilla bean ice cream, gold leaf",
    tag: "Signature",
    image: "/pancakes-5989136_1280.jpg",
  },
  {
    name: "Crème Brûlée",
    category: "Desserts",
    price: "₹14",
    description: "Madagascar vanilla, caramelized sugar, fresh berries",
    tag: "Popular",
    image: "/pexels-photo-6937457.jpeg",
  },
  {
    name: "Aged Negroni",
    category: "Drinks",
    price: "₹18",
    description: "Barrel-aged gin, Campari, sweet vermouth, orange zest",
    tag: "Signature",
    image: "/glass-9864301_1280.webp",
  },
  {
    name: "Saffron Spritz",
    category: "Drinks",
    price: "₹15",
    description: "Prosecco, saffron-infused Aperol, elderflower, soda",
    tag: "Chef's Pick",
    image: "/cafe-8027450_1280.jpg",
  },
];

export default function MenuSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="py-28 px-6 section-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase">
            Our Selection
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Curated <span className="gradient-text">Menu</span>
          </h2>
          <p className="text-white/35 max-w-xl mx-auto leading-relaxed">
            Each dish is a masterpiece crafted from the finest ingredients,
            blending tradition with innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-7 py-3 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-400 ${
                active === cat
                  ? "bg-gradient-to-r from-gold to-gold-light text-dark shadow-lg shadow-gold/25"
                  : "bg-white/[0.03] text-white/40 hover:bg-white/[0.06] hover:text-white/70 border border-white/[0.05]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((item, i) => (
            <div
              key={item.name}
              className="group glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer animate-fade-in-up opacity-0 border-gradient"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-44 h-44 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-dark-card/80" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-3 gap-3">
                    <div className="min-w-0">
                      <h3
                        className="text-lg font-semibold text-white group-hover:text-gold transition-colors duration-300 truncate"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="tag-badge mt-2">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-gold shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-white/35 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}