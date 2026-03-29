import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="gradient-text">Saffron</span>
              <span className="text-white/60 font-light"> & </span>
              <span className="gradient-text">Spice</span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              A culinary journey that transcends the ordinary. Where every meal
              is an experience, and every visit creates a lasting memory.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-gold/20 hover:text-gold transition-all duration-300 text-xs font-medium"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Menu", "About", "Contact", "Reservations"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/40 text-sm hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Hours
            </h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="flex justify-between">
                <span>Tue - Thu</span>
                <span>6PM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span>6PM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>5PM - 9PM</span>
              </li>
              <li className="flex justify-between text-white/20">
                <span>Monday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            &copy; 2026 Saffron & Spice. All rights reserved.
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
