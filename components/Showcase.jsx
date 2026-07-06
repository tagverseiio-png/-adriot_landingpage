import Image from 'next/image';

const projects = [
  {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    alt: 'Corporate office interior design project',
    tag: 'Corporate HQ — Chennai · 18,000 sq.ft · Delivered in 52 days',
  },
  {
    src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
    alt: 'Retail showroom interior design project',
    tag: 'Retail Showroom — Coimbatore · Multi-store rollout · 40 days per store',
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    alt: 'Co-working office space interior design',
    tag: 'Co-working Hub — Bengaluru · 22,000 sq.ft · 200+ workstations',
  },
];

export default function Showcase({ openModal }) {
  return (
    <section className="showcase" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Recent Work</div>
          <h2>A few commercial spaces we&apos;ve recently delivered</h2>
        </div>
        <div className="show-grid">
          {projects.map((p) => (
            <div key={p.tag} className="show-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} />
              <div className="show-tag">{p.tag}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="cta dark" onClick={openModal}>
            See Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
