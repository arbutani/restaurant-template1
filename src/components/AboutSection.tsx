"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 section-gradient-lighter relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/[0.08] rounded-full blur-[60px]" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-wine/[0.06] rounded-full blur-[80px]" />
          
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
            <Image
              src="/free-photo-of-chef-pouring-saucepan-in-industrial-kitchen.jpeg"
              alt="Chef preparing a gourmet dish"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/10 to-transparent" />
            
            <div className="absolute inset-x-4 bottom-4">
              <div className="glass-card-strong rounded-2xl p-5">
                <p
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Crafted with Passion
                </p>
                <p className="text-white/50 text-sm">
                  Our executive chef brings 15+ years of culinary excellence
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/20 rounded-3xl -z-10" />
          <div className="absolute -top-6 -right-6 w-24 h-24 border border-gold/10 rounded-2xl -z-10" />
        </div>

        <div className="lg:pl-8">
          <span className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase">
            Our Story
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Legacy of <span className="gradient-text">Excellence</span>
          </h2>
          <div className="space-y-6 text-white/45 leading-relaxed font-light">
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

          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              { icon: "🏆", label: "Michelin Starred", value: "Since 2015", accent: "text-gold" },
              { icon: "👨‍🍳", label: "Master Chefs", value: "12 Experts", accent: "text-gold" },
              { icon: "🌿", label: "Organic Sourced", value: "100% Fresh", accent: "text-sage" },
              { icon: "🍷", label: "Wine Collection", value: "500+ Labels", accent: "text-wine" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-2xl p-5 hover-lift hover-glow"
              >
                <span className="text-2.5xl mb-3 block">{item.icon}</span>
                <p className="text-white/70 font-medium text-sm">
                  {item.label}
                </p>
                <p className={`text-xs mt-1 ${item.accent}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}