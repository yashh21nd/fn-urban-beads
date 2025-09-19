"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  return (
    <section className="max-w-2xl mx-auto mt-12 card text-center animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <>
          <p className="mb-6" style={{ color: 'var(--primary)' }}>Your cart is currently empty. Add some beautiful beads and bracelets!</p>
          <Link href="/products" className="btn">Continue Shopping</Link>
        </>
      ) : (
        <>
          <ul className="mb-6 divide-y" style={{ borderColor: 'var(--card)' }}>
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 py-4 animate-fade-in-up">
                <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-full" style={{ background: 'var(--card)' }} />
                <div className="flex-1 text-left">
                  <div className="font-bold" style={{ color: 'var(--primary-dark)' }}>{item.name}</div>
                  <div className="text-sm font-bold" style={{ color: '#6b3f13' }}>Qty: {item.quantity}</div>
                  {typeof item.price === 'number' && !isNaN(item.price) ? (
                    <div className="font-bold" style={{ color: '#6b3f13', fontSize: '1.1rem' }}>₹{item.price * item.quantity}</div>
                  ) : null}
                </div>
                <button
                  className="ml-2 transition-colors text-xl" style={{ color: 'var(--primary)' }}
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          {/* Total removed as per request */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
                  <div className="flex flex-col items-center mt-8 gap-4">
                    <div className="bg-[var(--card)] rounded-xl p-4 shadow-md text-center max-w-xl mb-2" style={{ color: '#8a5a2c', fontWeight: 600 }}>
                      <p>
                        <span className="font-bold">How to place your order:</span><br />
                        1. Take a screenshot of your cart and note your order number.<br />
                        2. Click <span className="font-bold">Proceed to Checkout</span> to go to our Instagram page.<br />
                        3. Send us your screenshot and order number via Instagram DM to complete your order!
                      </p>
                    </div>
                    <button
                      className="bg-[var(--accent)] hover:bg-[var(--primary-dark)] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-lg"
                      onClick={() => window.open('https://www.instagram.com/__urbanbeads?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
            <button className="btn flex-1 animate-fade-in-up" style={{ background: 'var(--accent-dark)', color: '#fff', borderRadius: '9999px', fontWeight: 700, fontSize: '1.1rem', boxShadow: 'var(--shadow)' }} onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </section>
  );
}
