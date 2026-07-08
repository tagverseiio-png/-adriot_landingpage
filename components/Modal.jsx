'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Modal({ isOpen, onClose }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setSubmitting(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async API call
    setTimeout(() => {
      setSubmitting(false);
      onClose();
      router.push('/thankyou');
    }, 1000);
  }

  return (
    <div
      className={`global-modal-overlay${isOpen ? ' active' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Inquiry modal"
    >
      <div className="global-modal">
        <button className="global-modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

          <div>
            <h3>Get a Free Quote</h3>
            <p className="sub">Share your project details and we&apos;ll contact you shortly.</p>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="modalName">Full Name</label>
                <input id="modalName" type="text" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="modalPhone">Phone Number</label>
                <input id="modalPhone" type="tel" name="phone" placeholder="+91" required />
              </div>
              <div>
                <label htmlFor="modalEmail">Email Address</label>
                <input
                  id="modalEmail"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="modalSpace">Space Type</label>
                <select id="modalSpace" name="space">
                  <option>Corporate Office</option>
                  <option>Retail / Showroom</option>
                  <option>Co-working Space</option>
                  <option>Restaurant / F&B</option>
                  <option>Other Commercial Space</option>
                </select>
              </div>
              <div>
                <label htmlFor="modalCity">City / Locality</label>
                <input id="modalCity" type="text" name="city" placeholder="e.g. Chennai" />
              </div>
              <button
                type="submit"
                className="cta"
                id="modalSubmitBtn"
                style={{ marginTop: '16px', pointerEvents: submitting ? 'none' : 'auto' }}
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
      </div>
    </div>
  );
}
