"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
            Our Story
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Legacy of <span className="gradient-text">Excellence</span>
          </h2>
          <div className="space-y-5 text-white/50 leading-relaxed">
            <p>
              Founded in 2010, Saffron & Spice was born from a passion for
              creating unforgettable dining experiences. Our founder, Chef Arjun
              Mehta, combined his training in Paris with the rich culinary
              heritage of India to create something truly unique.
            </p>
            <p>
              Every ingredient is sourced from local organic farms and premium
              suppliers worldwide. Our kitchen is a canvas where tradition meets
              innovation, resulting in dishes that are both familiar and
              surprising.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              { icon: "🏆", label: "Michelin Starred", value: "Since 2015" },
              { icon: "👨‍🍳", label: "Master Chefs", value: "12 Experts" },
              { icon: "🌿", label: "Organic Sourced", value: "100% Fresh" },
              { icon: "🍷", label: "Wine Collection", value: "500+ Labels" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-4 hover-lift"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-white font-semibold mt-2 text-sm">
                  {item.label}
                </p>
                <p className="text-gold text-xs mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden relative">
            <Image
              src="/free-photo-of-chef-pouring-saucepan-in-industrial-kitchen.jpeg"
              alt="Chef preparing a gourmet dish"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <p
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Crafted with Passion
              </p>
              <p className="text-white/60 text-sm mt-1">
                Our executive chef brings 15+ years of culinary excellence
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
}
