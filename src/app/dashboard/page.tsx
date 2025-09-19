import Link from "next/link";

const categories = [
  {
    name: "Necklaces",
    href: "/dashboard/necklaces",
    color: "from-[var(--accent)] to-[var(--card)]",
    icon: (
      <svg className="w-12 h-12" style={{ color: 'var(--primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M8 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    name: "Hand Bracelets",
    href: "/dashboard/bracelets",
    color: "from-[var(--card)] to-[var(--background)]",
    icon: (
      <svg className="w-12 h-12" style={{ color: 'var(--accent-dark)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="6" width="12" height="12" rx="6" strokeWidth="2" /><path d="M9 12h6" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
  {
    name: "Beads",
    href: "/dashboard/beads",
    color: "from-[var(--background)] to-white",
    icon: (
      <svg className="w-12 h-12" style={{ color: 'var(--accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="4" strokeWidth="2" /><circle cx="12" cy="4" r="2" /><circle cx="12" cy="20" r="2" /><circle cx="4" cy="12" r="2" /><circle cx="20" cy="12" r="2" /></svg>
    ),
  },
  {
    name: "Phone Charms",
    href: "/dashboard/phone-charms",
    color: "from-[var(--card)] to-white",
    icon: (
      <svg className="w-12 h-12" style={{ color: 'var(--accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="7" y="2" width="10" height="20" rx="4" strokeWidth="2" /><circle cx="12" cy="18" r="1.5" /></svg>
    ),
  },

];

export default function Dashboard() {
  return (
    <section className="max-w-6xl mx-auto mt-10">
  <div className="w-full bg-gradient-to-r from-[var(--accent)] to-[var(--card)] rounded-3xl shadow-lg mb-12 py-10 flex flex-col items-center justify-center animate-fade-in">
  <h1 className="text-5xl font-extrabold tracking-wider mb-2 drop-shadow-lg" style={{ color: 'var(--primary-dark)' }}>DASHBOARD</h1>
  <p className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>Manage and explore all categories</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {categories.map((cat, index) => (
          <Link key={cat.name} href={cat.href}>
            <div className={`card flex flex-col items-center justify-center h-56 cursor-pointer bg-gradient-to-br ${cat.color} hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in-up`}
            >
              <div className="mb-4">{cat.icon}</div>
              <span className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-dark)' }}>{cat.name}</span>
              <span style={{ color: 'var(--primary)' }}>View Products</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
