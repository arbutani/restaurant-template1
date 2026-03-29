"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Starters", "Main Course", "Desserts", "Drinks"];

const menuItems = [
  {
    name: "Truffle Arancini",
    category: "Starters",
    price: "$18",
    description: "Crispy risotto balls with black truffle, parmesan fondue",
    tag: "Chef's Pick",
    image: "/cheese-1914114_1280.jpg",
  },
  {
    name: "Tuna Tartare",
    category: "Starters",
    price: "$22",
    description: "Fresh tuna, avocado mousse, sesame, crispy wonton",
    tag: "Popular",
    image: "/meal-2069021_1280.jpg",
  },
  {
    name: "Burrata Caprese",
    category: "Starters",
    price: "$16",
    description: "Creamy burrata, heirloom tomatoes, basil oil, aged balsamic",
    tag: null,
    image: "/pumpkin-soup-3645375_1280.jpg",
  },
  {
    name: "Wagyu Beef Tenderloin",
    category: "Main Course",
    price: "$65",
    description: "A5 Wagyu, bone marrow jus, roasted garlic, seasonal vegetables",
    tag: "Signature",
    image: "/chicken-7295569_1280.jpg",
  },
  {
    name: "Pan-Seared Salmon",
    category: "Main Course",
    price: "$38",
    description: "Norwegian salmon, lemon beurre blanc, asparagus, caviar",
    tag: "Popular",
    image: "/free-photo-of-table-of-italian-cuisine.jpeg",
  },
  {
    name: "Lobster Risotto",
    category: "Main Course",
    price: "$48",
    description: "Maine lobster, saffron risotto, parmesan, microgreens",
    tag: "Chef's Pick",
    image: "/free-photo-of-authentic-indian-feast-with-rich-flavors.jpeg",
  },
  {
    name: "Lamb Rack",
    category: "Main Course",
    price: "$45",
    description: "Herb-crusted lamb, mint chimichurri, roasted root vegetables",
    tag: null,
    image: "/pasta-3547078_1280.jpg",
  },
  {
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: "$16",
    description: "Molten dark chocolate, vanilla bean ice cream, gold leaf",
    tag: "Signature",
    image: "/pancakes-5989136_1280.jpg",
  },
  {
    name: "Crème Brûlée",
    category: "Desserts",
    price: "$14",
    description: "Madagascar vanilla, caramelized sugar, fresh berries",
    tag: "Popular",
    image: "/pexels-photo-6937457.jpeg",
  },
  {
    name: "Aged Negroni",
    category: "Drinks",
    price: "$18",
    description: "Barrel-aged gin, Campari, sweet vermouth, orange zest",
    tag: "Signature",
    image: "/glass-9864301_1280.webp",
  },
  {
    name: "Saffron Spritz",
    category: "Drinks",
    price: "$15",
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
    <section id="menu" className="py-24 px-6 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
            Our Selection
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Curated <span className="gradient-text">Menu</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Each dish is a masterpiece crafted from the finest ingredients,
            blending tradition with innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-gold text-dark shadow-lg shadow-gold/25"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.name}
              className="group glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer animate-fade-in-up opacity-0"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-40 h-40 sm:h-auto shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-card/80 hidden sm:block" />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3
                        className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="inline-block mt-1 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-gold/10 text-gold border border-gold/20">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-xl font-bold text-gold">{item.price}</span>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">
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
