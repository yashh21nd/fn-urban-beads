import ProductList from "../../products/ProductList";

const beads = [
  {
    id: 3,
    name: "Classic Beads Set",
    price: 299,
    image: "/placeholder-beads.jpg",
    category: "Beads",
  },
];

export default function Beads() {
  return <ProductList title="Beads" products={beads} />;
}
