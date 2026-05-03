import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saffron & Spice | Fine Dining Restaurant",
  description: "Experience exquisite culinary artistry at Saffron & Spice. Fine dining with a modern twist on traditional flavors.",
  keywords: "fine dining, restaurant, Indian cuisine, gourmet, luxury dining, Mumbai",
  openGraph: {
    title: "Saffron & Spice | Fine Dining Restaurant",
    description: "Experience exquisite culinary artistry at Saffron & Spice.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}