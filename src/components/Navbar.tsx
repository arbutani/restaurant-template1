"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "menu", "about", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-2xl shadow-2xl shadow-black/30 py-3 border-b border-white/[0.03]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight relative group"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="gradient-text">Saffron</span>
          <span className="text-white/40 font-light mx-1">&</span>
          <span className="gradient-text">Spice</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-gold to-transparent transition-all duration-500 group-hover:w-full" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-full ${
                activeSection === link.href.slice(1)
                  ? "text-gold"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {activeSection === link.href.slice(1) && (
                <span className="absolute inset-0 bg-gold/8 rounded-full -z-10" />
              )}
              {link.label}
            </a>
          ))}
          <div className="w-px h-5 bg-white/10 mx-3" />
          <Link
            href="/dashboard"
            className="text-[13px] font-semibold px-6 py-2.5 rounded-full bg-gradient-to-r from-gold to-gold-light text-dark hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Dashboard
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-3 px-5 py-6 bg-dark-card/95 backdrop-blur-2xl rounded-2xl border border-white/[0.05] flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                activeSection === link.href.slice(1)
                  ? "text-gold bg-gold/8"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-white/5 my-2" />
          <Link
            href="/dashboard"
            className="text-center text-sm font-semibold px-5 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-dark"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
