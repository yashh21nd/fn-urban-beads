"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../CartContext";

export default function ProductList({ title, products }: { title: string; products: any[] }) {
  const { addToCart } = useCart();
  const [clickedId, setClickedId] = useState<number | null>(null);
  return (
    <section className="max-w-4xl mx-auto mt-12">
      <h1 className="text-3xl font-extrabold mb-8 text-center">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="card flex flex-col items-center animate-fade-in-up will-change-transform">
            <div className="w-40 h-40 rounded-full flex items-center justify-center mb-4 overflow-hidden" style={{ background: 'var(--card)' }}>
              <Image
                src={product.image}
                alt={product.name}
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-extrabold mb-2" style={{ color: '#a07a3a', fontWeight: 900 }}>{product.name}</h2>
            {/* Price removed as per request */}
            {product.description && (
              <p className="text-sm mb-2" style={{ color: 'var(--primary)' }}>{product.description}</p>
            )}
            <button
              className={`btn w-full mt-2 transition-transform ${clickedId === product.id ? "scale-110 animate-fade-in" : ""}`}
              style={{ background: 'linear-gradient(90deg, var(--primary-dark), var(--primary))', color: '#a07a3a', borderRadius: '9999px', fontWeight: 700, fontSize: '1.1rem', boxShadow: 'var(--shadow)' }}
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                });
                setClickedId(product.id);
                setTimeout(() => setClickedId(null), 400);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
