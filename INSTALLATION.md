# Installation Guide

## Prerequisites

- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **npm** 9+ (comes with Node.js)

## Step-by-Step Installation

### 1. Extract the Template

Unzip the downloaded template to your desired folder.

### 2. Open Terminal

Open a terminal/command prompt in the project root directory (the folder containing `package.json`).

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, and Tailwind CSS.

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Homepage:** http://localhost:3000
- **Dashboard:** http://localhost:3000/dashboard

### 5. Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy

```bash
npm i -g vercel
vercel
```

Follow the prompts to link your Vercel account and deploy.

### Option 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Click "Deploy" — Vercel auto-detects Next.js

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint code checks |

## Project Structure

```
├── app/
│   ├── globals.css          # Theme, colors, animations
│   ├── layout.tsx           # Root layout + fonts
│   ├── page.tsx             # Homepage
│   └── dashboard/page.tsx   # Admin dashboard
├── src/components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── MenuSection.tsx      # Menu with filters
│   ├── AboutSection.tsx     # About section
│   ├── ContactSection.tsx   # Reservation form
│   ├── Footer.tsx           # Site footer
│   └── Dashboard.tsx        # Admin dashboard
├── public/                  # Images
├── package.json
├── LICENSE
├── INSTALLATION.md
└── README.md
```

## Troubleshooting

### Port 3000 already in use

```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

### npm install fails

```bash
# Clear cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build errors

```bash
# Make sure you have the correct Node.js version
node -v  # Should be 18.17+

# Rebuild
rm -rf .next
npm run build
```

## Support

For customization help, refer to the `README.md` file which includes:
- How to change restaurant name and branding
- How to change colors and fonts
- How to update menu items
- How to replace images
- How to update contact information
