const steps = [
  {
    step: '01',
    title: 'Brief & Site Audit',
    desc: 'We study your space, headcount, brand guidelines and budget before any design begins.',
  },
  {
    step: '02',
    title: 'Concept & 3D Design',
    desc: 'Layout planning, mood boards and 3D visuals so you approve the look before execution starts.',
  },
  {
    step: '03',
    title: 'Execution & Fit-Out',
    desc: 'Civil, electrical, false ceiling, furniture and finishing — managed by a dedicated site team.',
  },
  {
    step: '04',
    title: 'Handover & Support',
    desc: 'Final walkthrough, snag-list closure and post-handover maintenance support.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Our Process</div>
          <h2>A clear, structured path from brief to handover</h2>
        </div>
        <div className="process-list">
          {steps.map((s) => (
            <div key={s.step} className="process-row">
              <div className="step">{s.step}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
