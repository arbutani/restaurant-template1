# Saffron & Spice — Fine Dining Restaurant Website Template

A premium, fully responsive restaurant website template built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**. Features a stunning dark/gold luxury theme with smooth animations, a complete restaurant homepage, and an admin dashboard.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)

---

## Features

### Public Website
- **Hero Section** — Full-screen hero with background image, mouse-tracking gradient, floating animations, and stats bar
- **Menu Section** — Filterable menu with 11 items across 4 categories (Starters, Main Course, Desserts, Drinks), each with images and tags
- **About Section** — Restaurant story with chef image and feature stat cards
- **Reservation Form** — Fully functional form with validation, state management, and success confirmation
- **Contact Section** — Location, phone, email, hours with SVG icons and private events CTA
- **Footer** — Brand info, social links, quick links, operating hours
- **Responsive Navbar** — Transparent-to-solid on scroll, mobile hamburger menu, smooth scroll navigation

### Admin Dashboard (`/dashboard`)
- **Overview** — Stats cards, recent orders table, tonight's reservations, insights
- **Orders** — Full order management table with status badges
- **Menu** — Menu item management with availability toggles
- **Reservations** — Reservation cards with guest/table details
- **Staff** — Staff directory with roles and shift status
- **Analytics** — Revenue breakdown, peak hours chart, category performance
- **Settings** — Restaurant details and operating hours configuration

### Design
- Dark luxury theme with gold (#d4a843) accents
- Glass-morphism card design with backdrop blur
- 10+ CSS animations (fadeInUp, float, shimmer, pulse-glow, etc.)
- Custom scrollbar styling
- Google Fonts (Inter + Playfair Display)
- Fully responsive (mobile, tablet, desktop)

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.
Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to view the admin dashboard.

---

## Project Structure

```
my-app/
├── app/
│   ├── globals.css          # Theme colors, animations, utility classes
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Homepage (composes all sections)
│   └── dashboard/
│       └── page.tsx         # Admin dashboard route
├── src/
│   └── components/
│       ├── Navbar.tsx       # Fixed navbar with scroll effect
│       ├── Hero.tsx         # Full-screen hero with animations
│       ├── MenuSection.tsx  # Filterable menu with images
│       ├── AboutSection.tsx # Restaurant story section
│       ├── ContactSection.tsx # Reservation form + contact info
│       ├── Footer.tsx       # Site footer
│       └── Dashboard.tsx    # Full admin dashboard
├── public/                  # Images (restaurant, food, chef photos)
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind (via postcss)
```

---

## Customization Guide

### Change Restaurant Name & Branding

1. **Navbar** — `src/components/Navbar.tsx:37-39`
2. **Footer** — `src/components/Footer.tsx:10-15`
3. **Dashboard** — `src/components/Dashboard.tsx` (sidebar header)
4. **Layout metadata** — `app/layout.tsx:4-7`

### Change Colors

Edit `app/globals.css` theme block:

```css
@theme {
  --color-gold: #d4a843;       /* Primary accent */
  --color-gold-light: #e8c96b; /* Lighter accent */
  --color-gold-dark: #b8922e;  /* Darker accent */
  --color-dark: #0f0f0f;       /* Background */
  --color-dark-lighter: #1a1a1a; /* Secondary background */
  --color-dark-card: #242424;  /* Card background */
}
```

### Change Fonts

Update `app/layout.tsx` Google Fonts link and `app/globals.css` body font-family.

### Update Menu Items

Edit the `menuItems` array in `src/components/MenuSection.tsx:7-85`.

### Update Contact Information

Edit the contact details array in `src/components/ContactSection.tsx:121-150`.

### Replace Images

Drop your images into the `public/` folder and update the `src` paths in components:
- Hero background: `src/components/Hero.tsx:31`
- About chef image: `src/components/AboutSection.tsx:58`
- Menu item images: `src/components/MenuSection.tsx:7-85`

---

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/saffron-spice)

Or manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.1 | React framework, routing, SSR |
| React | 19.2.4 | UI library |
| Tailwind CSS | v4 | Utility-first CSS |
| TypeScript | 5 | Type safety |
| Google Fonts | — | Inter + Playfair Display |

---

## License

This template is licensed for personal and commercial use. You may use it to build websites for yourself or clients. Redistribution of the template source code as-is is not permitted.

---

## Support

For questions or issues, please refer to the customization guide above. This template is designed to be easily customizable without deep technical knowledge.
