
"use client";
import Link from "next/link";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
  <nav className="w-full flex items-center justify-between py-4 px-8" style={{ background: 'rgba(237, 224, 209, 0.85)', boxShadow: 'var(--shadow)', borderBottom: '4px solid var(--accent)' }}>
  <div className="text-3xl font-extrabold tracking-widest drop-shadow-lg font-serif" style={{ color: 'var(--primary-dark)' }}>
        Urban Beads
      </div>
      <div className="flex gap-8 text-lg font-medium flex-1 justify-center">
        <Link href="/" className="transition-colors" style={{ color: 'var(--primary-dark)' }}>Home</Link>
        <Link href="/about" className="transition-colors" style={{ color: 'var(--primary-dark)' }}>About</Link>
        <Link href="/products" className="transition-colors" style={{ color: 'var(--primary-dark)' }}>Shop</Link>
      </div>
      <Link href="/cart" className="relative group ml-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 transition-colors" style={{ color: '#a67c52' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437m0 0L7.5 15.75A2.25 2.25 0 009.66 18h4.68a2.25 2.25 0 002.16-2.25V7.5H6.375m0 0L5.106 4.273A1.125 1.125 0 004.125 3H2.25m4.125 4.5h13.125a.375.375 0 01.375.375v.75a.375.375 0 01-.375.375H6.375m0 0v9.375A2.25 2.25 0 008.625 18h6.75a2.25 2.25 0 002.25-2.25V7.5" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 text-xs font-bold rounded-full px-2 py-0.5 animate-bounce" style={{ background: 'var(--primary)', color: 'var(--foreground)' }}>
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
}
