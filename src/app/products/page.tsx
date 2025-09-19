"use client";

import { useState } from "react";
import ProductList from "./ProductList";

const allProducts = [
  // Necklaces
  { id: 1, name: "n-1", image: "/n-1.jpg", category: "Necklaces", price: 299 },
  { id: 2, name: "n-2", image: "/n-2.jpg", category: "Necklaces", price: 299 },
  { id: 3, name: "n-3", image: "/n-3.jpg", category: "Necklaces", price: 299 },
  { id: 4, name: "n-4", image: "/n-4.jpg", category: "Necklaces", price: 299 },
  { id: 5, name: "n-5", image: "/n-5.jpg", category: "Necklaces", price: 299 },
  // Beads
  { id: 6, name: "b-1", image: "/b-1.jpg", category: "Beads", price: 199 },
  { id: 7, name: "b-2", image: "/b-2.jpg", category: "Beads", price: 199 },
  { id: 8, name: "b-3", image: "/b-3.jpg", category: "Beads", price: 199 },
  { id: 9, name: "b-4", image: "/b-4.jpg", category: "Beads", price: 199 },
  { id: 10, name: "b-5", image: "/b-5.jpg", category: "Beads", price: 199 },
  // Earrings
  { id: 11, name: "e-1", image: "/e-1.jpg", category: "Earrings", price: 249 },
  { id: 12, name: "e-2", image: "/e-2.jpg", category: "Earrings", price: 249 },
  { id: 13, name: "e-3", image: "/e-3.jpg", category: "Earrings", price: 249 },
  // Phone Charms
  { id: 14, name: "p-1", image: "/p-1.jpg", category: "Phone Charms", price: 149 },
  { id: 15, name: "p-2", image: "/p-2.jpg", category: "Phone Charms", price: 149 },
  { id: 16, name: "p-3", image: "/p-3.jpg", category: "Phone Charms", price: 149 },
  { id: 17, name: "p-4", image: "/p-4.jpg", category: "Phone Charms", price: 149 },
  { id: 18, name: "p-5", image: "/p-5.jpg", category: "Phone Charms", price: 149 },
  { id: 19, name: "p-6", image: "/p-6.jpg", category: "Phone Charms", price: 149 },
  { id: 20, name: "p-7", image: "/p-7.jpg", category: "Phone Charms", price: 149 },
  { id: 21, name: "p-8", image: "/p-8.jpg", category: "Phone Charms", price: 149 },
  { id: 22, name: "p-9", image: "/p-9.jpg", category: "Phone Charms", price: 149 },
];

const categories = [
  "Necklaces",
  "Earrings",
  "Beads",
  "Phone Charms",
];

export default function Products() {
  const [active, setActive] = useState(categories[0]);
  const filtered = allProducts.filter((p) => p.category === active);
  return (
    <section className="max-w-5xl mx-auto mt-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Shop Products</h1>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn px-6 py-2 rounded-full font-bold transition-colors border-2 ${active === cat ? "scale-105" : ""}`}
            style={active === cat ? { background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: 'var(--foreground)', border: '2px solid var(--primary)' } : { background: 'var(--card)', color: 'var(--primary)', border: '2px solid var(--accent)' }}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <ProductList title={active} products={filtered} />
    </section>
  );
}
