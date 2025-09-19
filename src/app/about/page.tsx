import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto mt-12 flex flex-col gap-10">
      <section className="animate-fade-in-up" style={{ background: 'var(--card)', borderRadius: '2rem', boxShadow: '0 4px 32px 0 rgba(166, 124, 82, 0.10)', padding: '2.5rem 2rem', marginBottom: '2rem', border: '2px solid var(--primary)' }}>
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#111', fontWeight: 900, letterSpacing: '0.04em' }}>About Urban Beads</h1>
        <p className="text-lg mb-2 font-bold" style={{ color: 'var(--primary-dark)' }}>
          Urban Beads is dedicated to quality, authenticity, and creativity. Each hand bracelet and bead is meticulously handcrafted, ensuring every piece is unique, durable, and designed to inspire. We pride ourselves on using the finest materials and infusing every product with a sense of artistry and care.
        </p>
        <p className="text-base mb-2 font-bold" style={{ color: 'var(--primary-dark)' }}>
          Our collection celebrates the beauty of handmade jewelry, blending modern style with timeless elegance. Whether you’re looking for a statement necklace or a delicate bracelet, Urban Beads offers something special for every occasion.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="https://instagram.com/urbanbeads.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)] bg-[var(--accent)] hover:bg-[var(--primary)] transition-colors text-[var(--primary-dark)] font-bold text-lg shadow"
            aria-label="Visit Urban Beads on Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <rect width="20" height="20" x="2" y="2" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="17" cy="7" r="1.2" fill="currentColor" />
            </svg>
            @urbanbeads.in
          </a>
        </div>
      </section>
      <div className="flex flex-col md:flex-row gap-8">
        <section className="flex-1 animate-fade-in-up flex flex-col items-center" style={{ background: 'var(--card)', borderRadius: '2rem', boxShadow: '0 4px 32px 0 rgba(166, 124, 82, 0.10)', padding: '2.5rem 2rem', border: '2px solid var(--primary)' }}>
          <Image src="/mandiraprofile.png" alt="Mandira More Urban Beads" width={120} height={120} style={{ objectFit: 'cover', borderRadius: '50%', marginBottom: '1rem', border: '3px solid var(--primary)' }} />
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#111', fontWeight: 900, letterSpacing: '0.04em' }}>Mandira More</h2>
          <p className="text-base mb-1 font-bold" style={{ color: 'var(--primary-dark)' }}>
            Mandira More is the creative mind and founder behind Urban Beads. A passionate artisan, Mandira brings her love for design and detail to every piece she creates.
          </p>
          <p className="text-base font-bold" style={{ color: 'var(--primary-dark)' }}>
            She is a proud graduate of KHS and holds a BBA in International Business (BBA IB). Her education and experience inspire her to blend global trends with local craftsmanship, making Urban Beads a truly unique brand.
          </p>
        </section>
        <section className="flex-1 animate-fade-in-up flex flex-col items-center" style={{ background: 'var(--card)', borderRadius: '2rem', boxShadow: '0 4px 32px 0 rgba(166, 124, 82, 0.10)', padding: '2.5rem 2rem', border: '2px solid var(--primary)' }}>
          <Image src="/preetinaidu.jpg" alt="Preeti Naidu profile" width={120} height={120} style={{ objectFit: 'cover', borderRadius: '50%', marginBottom: '1rem', border: '3px solid var(--primary)' }} />
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#111', fontWeight: 900, letterSpacing: '0.04em' }}>Preeti Naidu</h2>
          <p className="text-base mb-1 font-bold" style={{ color: 'var(--primary-dark)' }}>
            Preeti Naidu is the co-owner of Urban Beads and a creative entrepreneur. She is a BCom graduate and has always been passionate about building something meaningful.
          </p>
          <p className="text-base font-bold" style={{ color: 'var(--primary-dark)' }}>
            During her college days, Preeti envisioned starting a small-scale business with Mandira. Her drive, vision, and collaborative spirit have helped shape Urban Beads into a brand that celebrates friendship, creativity, and the joy of handmade artistry.
          </p>
        </section>
      </div>
      <section className="animate-fade-in-up flex flex-col md:flex-row items-center gap-8 mt-12" style={{ background: 'var(--card)', borderRadius: '2rem', boxShadow: '0 4px 32px 0 rgba(166, 124, 82, 0.10)', padding: '2.5rem 2rem', border: '2px solid var(--primary)' }}>
  <Image src="/workshop.jpg" alt="Urban Beads Workshop at KHS Campus" width={220} height={160} style={{ borderRadius: '1.5rem', objectFit: 'cover', boxShadow: '0 2px 16px 0 rgba(166, 124, 82, 0.10)' }} />
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: '#111', letterSpacing: '0.04em' }}>Workshop</h2>
          <p className="text-base font-bold mb-2" style={{ color: 'var(--primary-dark)' }}>
            The Urban Beads Workshop was held at the KHS campus, bringing together creativity, craftsmanship, and community. This special event featured a vibrant display and sale of handmade jewelry, including a wide variety of beads earrings, hand bracelets, necklaces, and phone charms. Every piece was crafted from authentic, high-quality materials, ensuring both beauty and durability.
          </p>
          <p className="text-base mb-2" style={{ color: 'var(--primary-dark)' }}>
            The workshop was a celebration of artistry and entrepreneurship, providing a platform for students and visitors to explore unique, handcrafted accessories. The positive energy and enthusiasm at the event were truly inspiring, as attendees admired the intricate designs and learned about the creative process behind each item. Urban Beads is proud to have fostered a space where passion and skill could shine, and where every customer left with a smile and a one-of-a-kind piece.
          </p>
          <p className="text-base" style={{ color: 'var(--primary-dark)' }}>
            This workshop not only showcased the talent and dedication of the Urban Beads team, but also strengthened the sense of community within the KHS campus. The event was filled with joy, learning, and meaningful connections, making it a memorable experience for everyone involved. Thank you to all who supported and participated in making the Urban Beads Workshop a resounding success!
          </p>
        </div>
      </section>
    </div>
  );
}
