export default function Header({ openModal }) {
  return (
    <header>
      <div className="wrap nav">
        <a href="https://www.adroitdesigns.in" className="logo">
          ADROIT DESIGN
        </a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#projects">Projects</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-cta">
          <a href="tel:+919940064343" className="cta" aria-label="Call our office now">
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
