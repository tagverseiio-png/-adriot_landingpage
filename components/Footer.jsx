export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a href="https://www.adroitdesigns.in" className="logo">
              ADROIT DESIGN
            </a>
            <p style={{ marginTop: '10px', maxWidth: '260px' }}>
              Commercial interior design and fit-out company for offices, retail and corporate
              spaces.
            </p>
          </div>
          <div>
            <p>
              <strong style={{ color: 'var(--white)' }}>Contact</strong>
            </p>
            <p style={{ marginTop: '8px' }}>+91-XXXXXXXXXX</p>
            <p>hello@yourdomain.com</p>
          </div>
          <div>
            <p>
              <strong style={{ color: 'var(--white)' }}>Services</strong>
            </p>
            <p style={{ marginTop: '8px' }}>Office Interiors</p>
            <p>Retail Design</p>
            <p>Turnkey Fit-Outs</p>
          </div>
        </div>
        <div className="wrap foot-bottom">
          <span>© 2026 Studio Interiors. All rights reserved.</span>
          <span>Chennai · Coimbatore · Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}
