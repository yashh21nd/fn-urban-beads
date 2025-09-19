"use client";
import ProductList from "../../products/ProductList";

const necklaces = [
  {
    id: 2,
    name: "Pastel Bead Necklace",
    price: 499,
    image: "/placeholder-necklace.jpg",
    category: "Necklaces",
  },
];

export default function Necklaces() {
  return <ProductList title="Necklaces" products={necklaces} />;
}
