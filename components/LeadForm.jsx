'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="lead-form" id="contact">
      <div className="wrap form-grid">
        <div>
          <div className="eyebrow">Get Started</div>
          <h2>Get a free quote for your commercial space</h2>
          <p>
            Share your project details and our design team will get back to you within 24
            hours with a free site visit and design estimate.
          </p>
          <div className="form-points">
            <div>Free site visit and measurement</div>
            <div>3D design concept before you commit</div>
            <div>Fixed, no-surprise project quote</div>
            <div>Single point of contact from design to handover</div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <a href="https://wa.me/919940064343" className="cta">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--brass)', fontSize: '24px' }}>
              Thank You!
            </h3>
            <p style={{ color: 'var(--slate)', marginTop: '12px' }}>
              Your request has been received. Our team will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form aria-label="Get a free interior design quote" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" name="name" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="company">Company Name</label>
              <input id="company" type="text" name="company" placeholder="Your company" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" name="phone" placeholder="+91" required />
            </div>
            <div>
              <label htmlFor="space">Space Type</label>
              <select id="space" name="space">
                <option>Corporate Office</option>
                <option>Retail / Showroom</option>
                <option>Co-working Space</option>
                <option>Restaurant / F&B</option>
                <option>Other Commercial Space</option>
              </select>
            </div>
            <div>
              <label htmlFor="size">Project size (approx. sq.ft)</label>
              <select id="size" name="size">
                <option>Below 2,000</option>
                <option>2,000–10,000</option>
                <option>10,000–25,000</option>
                <option>25,000+</option>
              </select>
            </div>
            <button type="submit" className="cta">
              Get My Free Quote
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
