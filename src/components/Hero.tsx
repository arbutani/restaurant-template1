"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      heroRef.current.style.setProperty("--mouse-x", `${x}%`);
      heroRef.current.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/free-photo-of-authentic-indian-feast-with-rich-flavors.jpeg"
          alt="Restaurant ambiance"
          fill
          className="object-cover opacity-15 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/50 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60" />
      </div>

      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-300"
        style={{
          background:
            "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201,169,110,0.15), transparent 40%)",
        }}
      />

      <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[100px] animate-float" />
      <div
        className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-wine/[0.06] rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-gold/[0.03] rounded-full blur-[80px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent animate-fade-in-up opacity-0 delay-800" />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in-up opacity-0">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/20 text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-10 bg-gold/[0.04]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Fine Dining Experience
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8 animate-fade-in-up opacity-0 delay-200 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Where Every
          <br />
          <span className="gradient-text text-shadow-glow">Bite</span> Tells a{" "}
          <span className="gradient-text text-shadow-glow">Story</span>
        </h1>

        <p className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in-up opacity-0 delay-400 font-light">
          Experience the perfect harmony of traditional flavors and modern
          culinary artistry. Every dish crafted with passion, served with
          elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-600">
          <a href="#menu" className="btn-primary">
            Explore Menu
          </a>
          <a href="#contact" className="btn-secondary">
            Reserve a Table
          </a>
        </div>

        <div className="flex items-center justify-center gap-12 mt-20 animate-fade-in-up opacity-0 delay-700">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "50K+", label: "Happy Guests" },
            { value: "4.9", label: "Rating" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center group">
              <p className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="text-[11px] text-white/30 mt-2 uppercase tracking-widest">
                {stat.label}
              </p>
              {i < 2 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in-up opacity-0 delay-800">
        <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-gold/80 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
}
