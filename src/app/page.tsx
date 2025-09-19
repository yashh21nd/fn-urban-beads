
import ProductList from "./products/ProductList";

const peoplesChoice = [
  // 3 necklaces
  { id: 1, name: "n-1", image: "/n-1.jpg", category: "Necklaces" },
  { id: 2, name: "n-2", image: "/n-2.jpg", category: "Necklaces" },
  { id: 3, name: "n-3", image: "/n-3.jpg", category: "Necklaces" },
  // 2 beads
  { id: 4, name: "b-1", image: "/b-1.jpg", category: "Beads" },
  { id: 5, name: "b-2", image: "/b-2.jpg", category: "Beads" },
  // 2 earrings
  { id: 6, name: "e-1", image: "/e-1.jpg", category: "Earrings" },
  { id: 7, name: "e-2", image: "/e-2.jpg", category: "Earrings" },
  // 3 phone charms
  { id: 8, name: "p-1", image: "/p-1.jpg", category: "Phone Charms" },
  { id: 9, name: "p-2", image: "/p-2.jpg", category: "Phone Charms" },
  { id: 10, name: "p-3", image: "/p-3.jpg", category: "Phone Charms" },
];

export default function Home() {
  return (
    <div className="font-sans min-h-screen" style={{ background: 'var(--background)', backgroundImage: 'url(/background.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <section className="w-full bg-gradient-to-r from-[var(--accent)] to-[var(--card)] rounded-3xl shadow-lg mb-12 py-12 flex flex-col items-center justify-center animate-fade-in" style={{ backdropFilter: 'blur(2px)', background: 'rgba(43, 28, 15, 0.7)' }}>
        <h1 className="text-5xl font-extrabold tracking-wider mb-2 drop-shadow-lg text-center" style={{ color: 'var(--primary-dark)' }}>Welcome to Urban Beads</h1>
        <p className="text-lg font-medium text-center max-w-2xl" style={{ color: 'var(--primary)' }}>Discover handcrafted, authentic, and creative jewelry. Shop our unique collection of beads, necklaces, earrings, and phone charms made with love and artistry.</p>
      </section>
      <section className="w-full flex flex-col items-center justify-center mb-12 animate-fade-in">
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl shadow-xl overflow-hidden mb-8" style={{ background: 'rgba(196, 154, 108, 0.18)', backdropFilter: 'blur(2px)' }}>
          {/* Decorative SVG background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.22 }}>
            <g>
              <path d="M60 120 Q80 80 120 100 T180 120 Q200 140 240 120 T300 100 Q320 80 360 120" stroke="#a97c50" strokeWidth="4" fill="none"/>
              <path d="M400 60 Q420 100 460 80 T520 60 Q540 40 580 80 T640 100 Q660 120 700 80" stroke="#7c5c3b" strokeWidth="3" fill="none"/>
              <ellipse cx="200" cy="60" rx="18" ry="8" fill="#bfa07a"/>
              <ellipse cx="600" cy="120" rx="14" ry="6" fill="#bfa07a"/>
              <path d="M120 160 Q140 140 160 160 T200 160" stroke="#a97c50" strokeWidth="2" fill="none"/>
              <path d="M680 40 Q700 60 720 40" stroke="#a97c50" strokeWidth="2" fill="none"/>
            </g>
          </svg>
          <div className="relative z-10 py-10 px-6 md:px-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider mb-2 drop-shadow-lg text-center" style={{ color: '#8a5a2c', letterSpacing: '0.04em' }}>
              What Customers Love
            </h2>
            <p className="text-lg font-medium text-center mb-6" style={{ color: '#fffbe8' }}>
              Our most adored pieces, handpicked by you!
            </p>
          </div>
        </div>
        <div className="w-full">
          <ProductList title="" products={peoplesChoice} />
        </div>
      </section>
    </div>
  );
}
