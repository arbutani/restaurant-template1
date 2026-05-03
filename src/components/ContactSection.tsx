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
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
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

  const inputClasses = (field: string) =>
    `input-field transition-all duration-300 ${
      errors[field] ? "border-red-500/50" : focused === field ? "border-gold/40" : ""
    }`;

  return (
    <section id="contact" className="py-28 px-6 section-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase">
            Get In Touch
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reserve Your <span className="gradient-text">Table</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 glass-card-strong rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-6 animate-bounce-in">
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Reservation Confirmed!
                </h3>
                <p className="text-white/40 text-sm mb-8 max-w-md">
                  We&apos;ve sent a confirmation email. We look forward to serving you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="text-[11px] text-white/30 uppercase tracking-wider mb-2.5 block font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="John Doe"
                      className={inputClasses("name")}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-2 absolute">{errors.name}</p>}
                  </div>
                  <div className="relative">
                    <label className="text-[11px] text-white/30 uppercase tracking-wider mb-2.5 block font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="john@example.com"
                      className={inputClasses("email")}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-2 absolute">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="text-[11px] text-white/30 uppercase tracking-wider mb-2.5 block font-medium">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      onFocus={() => setFocused("date")}
                      onBlur={() => setFocused(null)}
                      className={inputClasses("date")}
                    />
                    {errors.date && <p className="text-red-400 text-xs mt-2 absolute">{errors.date}</p>}
                  </div>
                  <div className="relative">
                    <label className="text-[11px] text-white/30 uppercase tracking-wider mb-2.5 block font-medium">
                      Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      onFocus={() => setFocused("time")}
                      onBlur={() => setFocused(null)}
                      className={inputClasses("time")}
                    >
                      <option value="" className="bg-dark">Select time</option>
                      <option value="18:00" className="bg-dark">6:00 PM</option>
                      <option value="18:30" className="bg-dark">6:30 PM</option>
                      <option value="19:00" className="bg-dark">7:00 PM</option>
                      <option value="19:30" className="bg-dark">7:30 PM</option>
                      <option value="20:00" className="bg-dark">8:00 PM</option>
                      <option value="20:30" className="bg-dark">8:30 PM</option>
                      <option value="21:00" className="bg-dark">9:00 PM</option>
                      <option value="21:30" className="bg-dark">9:30 PM</option>
                    </select>
                    {errors.time && <p className="text-red-400 text-xs mt-2 absolute">{errors.time}</p>}
                  </div>
                </div>
                <div className="relative">
                  <label className="text-[11px] text-white/30 uppercase tracking-wider mb-2.5 block font-medium">
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    onFocus={() => setFocused("guests")}
                    onBlur={() => setFocused(null)}
                    className={inputClasses("guests")}
                  >
                    <option value="" className="bg-dark">Number of guests</option>
                    <option value="1" className="bg-dark">1 Guest</option>
                    <option value="2" className="bg-dark">2 Guests</option>
                    <option value="3" className="bg-dark">3 Guests</option>
                    <option value="4" className="bg-dark">4 Guests</option>
                    <option value="5" className="bg-dark">5 Guests</option>
                    <option value="6" className="bg-dark">6 Guests</option>
                    <option value="8" className="bg-dark">8+ Guests</option>
                  </select>
                  {errors.guests && <p className="text-red-400 text-xs mt-2 absolute">{errors.guests}</p>}
                </div>
                <div>
                  <label className="text-[11px] text-white/30 uppercase tracking-wider mb-2.5 block font-medium">
                    Special Requests
                  </label>
                  <textarea
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    onFocus={() => setFocused("requests")}
                    onBlur={() => setFocused(null)}
                    rows={3}
                    placeholder="Any dietary requirements or special occasions..."
                    className={inputClasses("requests")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4.5 btn-primary text-base"
                >
                  Book Now
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Location",
                  detail: "123 Gourmet Avenue, Bandra West, Mumbai 400050",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone",
                  detail: "+91 22 4567 8901",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  detail: "reservations@saffronandspice.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Hours",
                  detail: "Tue - Sun: 6:00 PM - 11:00 PM | Mon: Closed",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-5 flex gap-4 items-start hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-white/35 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card-strong rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✨</span>
                <p
                  className="text-lg font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Private Events
                </p>
              </div>
              <p className="text-white/35 text-sm leading-relaxed mb-5">
                Host your special occasions in our private dining room. Seats up
                to 24 guests with a customized menu curated by our executive
                chef.
              </p>
              <a
                href="mailto:events@saffronandspice.com"
                className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all"
              >
                Inquire Now 
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}