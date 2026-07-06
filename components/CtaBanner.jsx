export default function CtaBanner({ openModal }) {
  return (
    <section className="cta-banner">
      <div className="wrap inner">
        <h3>
          Planning a large office, retail chain or business park fit-out this year?
          Let&apos;s scope it together.
        </h3>
        <button className="cta" onClick={openModal}>
          Request a Free Site Visit
        </button>
      </div>
    </section>
  );
}
