const cards = [
  { stat: '100%', desc: 'In-house design + execution team — no third-party handoffs' },
  { stat: '45 Days', desc: 'Average turnaround for a mid-size office fit-out' },
  { stat: '0', desc: 'Hidden costs — fixed quote before work begins' },
  { stat: '5 Yr', desc: 'Warranty on civil and carpentry work' },
];

export default function WhyUs({ openModal }) {
  return (
    <section className="why">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Why Businesses Choose Us</div>
          <h2>Built for companies who can&apos;t afford project delays</h2>
        </div>
        <div className="why-grid">
          {cards.map((c) => (
            <div key={c.stat} className="why-card">
              <b>{c.stat}</b>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button className="cta" onClick={openModal}>
            Talk to a Design Consultant
          </button>
        </div>
      </div>
    </section>
  );
}
