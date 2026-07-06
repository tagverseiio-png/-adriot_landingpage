const faqs = [
  {
    q: 'How much does commercial interior design cost?',
    a: 'Cost depends on space size, finish level and scope of civil work. We provide a fixed, itemised quote after the free site visit — no guesswork.',
  },
  {
    q: 'How long does an office fit-out take?',
    a: 'Most office interiors of 3,000–10,000 sq.ft are completed in 35–60 days, depending on the extent of civil and MEP work involved.',
  },
  {
    q: 'Do you handle both design and execution?',
    a: 'Yes. We are a single-point commercial interior design and fit-out company — design, civil, electrical, furniture and handover are all managed in-house.',
  },
  {
    q: 'Which cities do you serve?',
    a: 'We currently execute commercial interior projects across Chennai, Coimbatore, Bengaluru and surrounding regions.',
  },
  {
    q: 'Do you work with builders and developers on multiple projects or phased handovers?',
    a: 'Yes. We work directly with builders and developers on phased fit-outs, base-building coordination, and multi-tenant or multi-floor rollouts, with a single project team managing all phases.',
  },
];

export default function Faq({ openModal }) {
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Frequently Asked</div>
          <h2>Common questions about commercial interior design</h2>
        </div>
        {faqs.map((f) => (
          <div key={f.q} className="faq-item">
            <h4>{f.q}</h4>
            <p>{f.a}</p>
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="cta dark" onClick={openModal}>
            Ask Us a Question
          </button>
        </div>
      </div>
    </section>
  );
}
