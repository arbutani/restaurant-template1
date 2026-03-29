"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guests) newErrors.guests = "Number of guests is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", date: "", time: "", guests: "", requests: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reserve Your <span className="gradient-text">Table</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Reservation Confirmed!
                </h3>
                <p className="text-white/40 text-sm mb-6">
                  We&apos;ve sent a confirmation email. We look forward to serving you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 border border-gold/40 text-gold text-sm rounded-full hover:bg-gold hover:text-dark transition-all"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full bg-white/5 border ${errors.name ? "border-red-500/50" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full bg-white/5 border ${errors.email ? "border-red-500/50" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.date ? "border-red-500/50" : "border-white/10"} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors`}
                    />
                    {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
                      Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.time ? "border-red-500/50" : "border-white/10"} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors`}
                    >
                      <option value="">Select time</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                    </select>
                    {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.guests ? "border-red-500/50" : "border-white/10"} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors`}
                  >
                    <option value="">Number of guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8+ Guests</option>
                  </select>
                  {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
                    Special Requests
                  </label>
                  <textarea
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any dietary requirements or special occasions..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-dark font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
                >
                  Book Now
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Location",
                  detail: "123 Gourmet Avenue, Bandra West, Mumbai 400050",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone",
                  detail: "+91 22 4567 8901",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  detail: "reservations@saffronandspice.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Hours",
                  detail: "Tue - Sun: 6:00 PM - 11:00 PM | Mon: Closed",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {item.title}
                    </p>
                    <p className="text-white/40 text-sm mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-6 mt-8">
              <p
                className="text-xl font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Private Events
              </p>
              <p className="text-white/40 text-sm mt-2 leading-relaxed">
                Host your special occasions in our private dining room. Seats up
                to 24 guests with a customized menu curated by our executive
                chef.
              </p>
              <a
                href="mailto:events@saffronandspice.com"
                className="inline-block mt-4 text-gold text-sm font-medium hover:underline"
              >
                Inquire Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
