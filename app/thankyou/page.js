'use client';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <>
      <style>{`
        .ty-container {
          min-height: 100vh;
          background-color: #0A0A0A;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Montserrat', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 2rem;
          color: white;
        }

        .ty-content {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          text-align: left;
          position: relative;
          z-index: 10;
        }



        .ty-check {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: rgba(201, 169, 97, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: scale(0);
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .ty-check svg {
          width: 32px;
          height: 32px;
          color: #C9A961;
        }

        .ty-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          text-transform: uppercase;
          color: white;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
          font-family: 'Michroma', 'Oswald', 'Archivo', sans-serif;
          line-height: 1.1;
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 100ms;
        }

        .ty-subtext {
          color: #B0B0B0;
          font-size: clamp(1.125rem, 2vw, 1.25rem);
          max-width: 500px;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          font-weight: 300;
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 200ms;
        }

        .ty-ctas {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 300ms;
        }

        .ty-btn-primary {
          background-color: #C9A961;
          color: #000;
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.875rem;
          text-decoration: none;
          transition: transform 0.2s;
          display: inline-block;
          text-align: center;
          border: 1px solid #C9A961;
        }

        .ty-btn-primary:hover {
          transform: scale(1.05);
        }

        .ty-btn-secondary {
          background-color: transparent;
          color: white;
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.875rem;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
          text-align: center;
          border: 1px solid white;
        }

        .ty-btn-secondary:hover {
          background-color: #C9A961;
          border-color: #C9A961;
          color: #000;
        }

        .ty-trust {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #222;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 400ms;
        }

        .ty-trust-stat {
          color: #C9A961;
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }

        .ty-trust-label {
          color: #B0B0B0;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .ty-floating-right {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          z-index: 50;
        }

        .ty-float-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          transition: transform 0.2s;
          color: white;
        }

        .ty-float-btn:hover {
          transform: scale(1.1);
        }

        .ty-float-call {
          background-color: #C9A961;
          color: #000;
        }

        .ty-float-wa {
          background-color: #25D366;
        }

        .ty-floating-left {
          position: fixed;
          bottom: 1.5rem;
          left: 1.5rem;
          z-index: 50;
        }

        .ty-launcher {
          width: 56px;
          height: 56px;
          background-color: #111;
          border: 2px solid #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s;
          cursor: pointer;
        }

        .ty-launcher:hover {
          border-color: #C9A961;
        }

        @keyframes scaleIn {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .ty-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .ty-title {
            font-size: 2rem;
          }
          .ty-ctas {
            flex-direction: column;
            width: 100%;
          }
          .ty-trust {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>

      <main className="ty-container">
        <div className="ty-content">
          


          <div className="ty-check">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="ty-title">Thank You!</h1>

          <p className="ty-subtext">
            Your request has been received. Our team will contact you within 24 hours to discuss your project.
          </p>

          <div className="ty-ctas">
            <Link href="/" className="ty-btn-primary">Back to Home</Link>
            <Link href="/#projects" className="ty-btn-secondary">View Our Projects</Link>
          </div>

          <div className="ty-trust">
            <div>
              <div className="ty-trust-stat">24 Hrs</div>
              <div className="ty-trust-label">Response Time</div>
            </div>
            <div>
              <div className="ty-trust-stat">250+</div>
              <div className="ty-trust-label">Clients</div>
            </div>
            <div>
              <div className="ty-trust-stat">12 Yrs</div>
              <div className="ty-trust-label">Experience</div>
            </div>
          </div>
        </div>

        <div className="ty-floating-right">
          <a href="tel:+919999999999" className="ty-float-btn ty-float-call">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <a href="https://wa.me/919999999999" className="ty-float-btn ty-float-wa">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>

        <div className="ty-floating-left">
          <button className="ty-launcher">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </main>
    </>
  );
}
