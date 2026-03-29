import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saffron & Spice | Fine Dining Restaurant",
  description: "Experience exquisite culinary artistry at Saffron & Spice. Fine dining with a modern twist on traditional flavors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
