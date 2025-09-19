import ProductList from "../../products/ProductList";

const bracelets = [
  {
    id: 1,
    name: "Floral Hand Bracelet",
    price: 399,
    image: "/placeholder-bracelet.jpg",
    category: "Hand Bracelets",
  },
];

export default function Bracelets() {
  return <ProductList title="Hand Bracelets" products={bracelets} />;
}
