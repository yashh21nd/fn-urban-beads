import Navbar from "./Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urban Beads",
  description: "Handcrafted beads, necklaces, and bracelets. Modern, girly, and floral shopping experience.",
};


import { CartProvider } from "./CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Removed synchronous script as per Next.js best practices */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <CartProvider>
          <Navbar />
          <main className="pt-8">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
