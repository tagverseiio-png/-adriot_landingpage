export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col-left">
            <div className="quick-links-inner">
              <h4 style={{ color: 'var(--brass)', marginBottom: '20px', letterSpacing: '0.1em', fontSize: '15px', textAlign: 'center' }}>QUICK LINKS</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '14px 60px', justifyContent: 'flex-start' }}>
                <a href="#services" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '12px', letterSpacing: '0.05em' }}>SERVICES</a>
                <a href="#process" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '12px', letterSpacing: '0.05em' }}>OUR PROCESS</a>
                <a href="#projects" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '12px', letterSpacing: '0.05em' }}>PROJECTS SHOWCASE</a>
                <a href="#why-us" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '12px', letterSpacing: '0.05em' }}>WHY CHOOSE US</a>
                <a href="#testimonials" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '12px', letterSpacing: '0.05em' }}>TESTIMONIALS</a>
                <a href="#faq" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '12px', letterSpacing: '0.05em' }}>FAQ</a>
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'var(--brass)', marginBottom: '20px', letterSpacing: '0.1em', fontSize: '15px' }}>CONTACT US</h4>

            <p style={{ fontSize: '13px', marginTop: '0' }}>info@adroitdesigns.in, fm@adroitdesigns.in</p>
            <p style={{ fontSize: '13px', marginTop: '6px' }}>+91  9940064343</p>

            <p style={{ color: 'var(--brass)', fontSize: '11px', marginTop: '20px', marginBottom: '4px' }}>CORPORATE OFFICE (CHENNAI)</p>
            <p style={{ fontSize: '13px', lineHeight: '1.5' }}>No 8, MCN Nagar Extension, Thoraipakkam, Chennai - 97.</p>

            <p style={{ color: 'var(--brass)', fontSize: '11px', marginTop: '16px', marginBottom: '4px' }}>BRANCH OFFICE 1 (BENGALURU)</p>
            <p style={{ fontSize: '13px', lineHeight: '1.5' }}>SFD, P DOT G EMERALD, 16th A Cross Rd, Karuna Nagar,<br />Electronic City Phase 1, Doddathoguru, Bengaluru - 560100, Karnataka, India</p>

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <a href="https://www.linkedin.com/company/adroit-design-india-pvt-ltd/" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'var(--brass)', color: 'var(--white)',
                transition: 'transform 0.25s ease'
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
        <div className="wrap foot-bottom">
          <span>© 2026 Adroit Design. All rights reserved.</span>
          <span>Chennai · Coimbatore · Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}
