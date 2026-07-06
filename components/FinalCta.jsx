export default function FinalCta({ openModal }) {
  return (
    <section className="final-cta">
      <div className="wrap">
        <h2>Let&apos;s design a commercial space your business is proud of</h2>
        <p>Book a free consultation with our senior design team today — no obligation, no pressure.</p>
        <div className="final-cta-row">
          <a href="tel:+91XXXXXXXXXX" className="cta">
            Call +91-XXXXXXXXXX
          </a>
          <button className="cta outline" onClick={openModal}>
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
