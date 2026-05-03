"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const socials = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-dark border-t border-white/[0.05] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="gradient-text">Saffron</span>
                <span className="text-white/40 font-light mx-1">&</span>
                <span className="gradient-text">Spice</span>
              </span>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm mb-8">
              A culinary journey that transcends the ordinary. Where every meal
              is an experience, and every visit creates a lasting memory.
            </p>

            <div className="flex gap-3">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-white/30 hover:bg-gold/10 hover:text-gold transition-all duration-300 border border-white/[0.05] hover:border-gold/20"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Menu", "About", "Contact", "Reservations"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/35 text-sm hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Hours
            </h4>
            <ul className="space-y-3 text-sm text-white/35">
              <li className="flex justify-between">
                <span>Tue - Thu</span>
                <span className="text-white/50">6PM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-white/50">6PM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/50">5PM - 9PM</span>
              </li>
              <li className="flex justify-between text-white/20">
                <span>Monday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Newsletter
            </h4>
            {subscribed ? (
              <div className="glass-card rounded-xl p-4 text-center">
                <span className="text-gold text-sm">✓ Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="input-field text-sm py-3"
                  required
                />
                <button type="submit" className="w-full btn-primary text-sm py-3">
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-white/20 text-xs mt-3">
              Get exclusive offers & updates
            </p>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © 2026 Saffron & Spice. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/20 text-xs hover:text-white/40 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/20 text-xs hover:text-white/40 transition-colors"
            >
              Terms of Service
            </a>
            <Link
              href="/dashboard"
              className="text-white/20 text-xs hover:text-gold transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}