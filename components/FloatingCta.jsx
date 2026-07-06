export default function FloatingCta({ openModal }) {
  return (
    <button className="cta floating-cta" onClick={openModal} aria-label="Get a free quote">
      Get Free Quote
    </button>
  );
}
