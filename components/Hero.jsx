export default function Hero({ openModal }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Commercial Interior Design Company</div>
          <h1>
            Build spaces that match<br />the scale of your business
          </h1>
          <p>
            We partner with builders, developers and large enterprises to design and execute commercial
            interiors — corporate offices, retail chains, IT parks and business campuses — delivered on
            schedule and on budget, with a single point of accountability from concept to handover.
          </p>
          <div className="hero-ctas">
            <button className="cta" onClick={openModal}>
              Get a Free Consultation
            </button>
            <a href="#projects" className="cta outline">
              View Our Projects
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div>
            <b>250+</b>
            <span>Offices Delivered</span>
          </div>
          <div>
            <b>1.2M</b>
            <span>Sq.Ft Designed</span>
          </div>
          <div>
            <b>12 Yrs</b>
            <span>Industry Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
