const services = [
  {
    num: '01',
    title: 'Turnkey Office Fit-Outs',
    desc: 'Single-point responsibility for design, civil, electrical, HVAC and furniture execution.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '02',
    title: 'Co-working & IT Park Spaces',
    desc: 'High-density, code-compliant interiors built for fast turnaround and flexible scaling.',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '03',
    title: 'Corporate Office Interiors',
    desc: 'Workstations, cabins, meeting rooms and breakout zones designed for focus, collaboration and brand identity.',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '04',
    title: 'Retail & Showroom Design',
    desc: 'Store layouts and visual merchandising design that improve footfall, dwell time and conversion.',
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '05',
    title: 'Reception & Lobby Design',
    desc: 'First-impression spaces that reflect brand value through material, lighting and form.',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '06',
    title: 'Restaurant & F&B Interiors',
    desc: 'Kitchen-to-dining flow planning combined with atmosphere-driven design.',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What We Design</div>
          <h2>Commercial interiors across every business format</h2>
          <p>
            From 50,000 sq.ft corporate campuses and business parks to boutique 10-seat offices — our
            design and execution team handles it end to end.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title} style={{ width: '100%', height: '220px', objectFit: 'cover', marginBottom: '24px', borderRadius: '4px' }} />
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
