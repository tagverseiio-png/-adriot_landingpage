export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <h4 style={{ color: 'var(--brass)', marginBottom: '16px', letterSpacing: '0.1em' }}>QUICK LINKS</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>ARCHITECTURE PROJECTS</a>
              <a href="#interiors" style={{ textDecoration: 'none', color: 'inherit' }}>INTERIORS PROJECTS</a>
              <a href="#ongoing" style={{ textDecoration: 'none', color: 'inherit' }}>ONGOING PROJECTS</a>
              <a href="#shop" style={{ textDecoration: 'none', color: 'inherit' }}>SHOP</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'var(--brass)', marginBottom: '16px', letterSpacing: '0.1em' }}>CONTACT US</h4>
            
            <p style={{ color: 'var(--brass)', fontSize: '12px', marginTop: '16px', marginBottom: '4px' }}>CORPORATE OFFICE (CHENNAI)</p>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>No 8, MCN Nagar Extension, Thoraipakkam, Chennai - 97.</p>
            
            <p style={{ color: 'var(--brass)', fontSize: '12px', marginTop: '16px', marginBottom: '4px' }}>BRANCH OFFICE 1 (BENGALURU)</p>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>SFD, P DOT G EMERALD, 16th A Cross Rd, Karuna Nagar, Electronic City Phase 1, Doddathoguru, Bengaluru - 560100, Karnataka, India</p>
            
            <p style={{ fontSize: '14px', marginTop: '16px' }}>info@adroitdesigns.in, fm@adroitdesigns.in</p>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>00 44-45561113, 00 9940064343, 08041649813</p>
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
