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
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
      </div>

      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212,168,67,0.3), transparent 50%)",
        }}
      />

      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up opacity-0">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-medium tracking-[0.2em] uppercase mb-8">
            Fine Dining Experience
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 animate-fade-in-up opacity-0 delay-200"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Where Every
          <br />
          <span className="gradient-text">Bite</span> Tells a
          <br />
          <span className="gradient-text">Story</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 delay-400">
          Experience the perfect harmony of traditional flavors and modern
          culinary artistry. Every dish crafted with passion, served with
          elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-600">
          <a
            href="#menu"
            className="px-8 py-4 bg-gold text-dark font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-gold/50 hover:text-gold transition-all duration-300 hover:-translate-y-0.5"
          >
            Reserve a Table
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 mt-16 animate-fade-in-up opacity-0 delay-700">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "50K+", label: "Happy Guests" },
            { value: "4.9", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gold">
                {stat.value}
              </p>
              <p className="text-xs text-white/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
}
