"use client";



import { useState } from "react";
import { useCart } from "../CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", address: "", contact: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  }

  // No price/total shown, no NaN possible

  return (
    <section className="max-w-xl mx-auto mt-12 card animate-fade-in">
      <h1 className="text-3xl font-extrabold mb-4 text-center">Checkout</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="text-[var(--primary-dark)] font-bold text-left" htmlFor="name">Name</label>
        <input
          className="rounded-lg border border-[var(--accent)] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-dark)] text-[var(--foreground)] font-semibold"
          id="name"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <label className="text-[var(--primary-dark)] font-bold text-left" htmlFor="address">Address</label>
        <input
          className="rounded-lg border border-[var(--accent)] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-dark)] text-[var(--foreground)] font-semibold"
          id="address"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <label className="text-[var(--primary-dark)] font-bold text-left" htmlFor="contact">Contact Number</label>
        <input
          className="rounded-lg border border-[var(--accent)] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-dark)] text-[var(--foreground)] font-semibold"
          id="contact"
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          required
        />
        <button className="btn mt-4 animate-fade-in-up" type="submit">Place Order</button>
      </form>
      {submitted && (
        <div className="mt-6 text-center text-lg font-bold text-[var(--primary-dark)]">Thank you for your order! We will contact you soon.</div>
      )}
    </section>
  );
}
