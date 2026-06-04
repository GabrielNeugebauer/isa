

export default function SplashScreen({ onContinue }) {
  const handleShareClick = () => {
    alert('Se gostou disso, vai amar o que está por vir.');
  };

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="logo-container">
          <img
            src="./public/scooby.png"
            alt="Logo"
            className="logo-image"
          />
          <span className="logo-text">ScoobyDoo</span>
        </div>

        <div className="quote-container">
          <span className="quote-mark">"</span>
          <p className="quote-text">
            Se uma pessoa é incapaz de deixar uma marca no mundo, será que ela existe? Não sei, mas você deixou a sua!
          </p>
          <p className="quote-author">A vida invisível de Addie Larue</p>
        </div>
      </div>

      <div className="splash-actions">
        <button className="btn btn-primary" onClick={onContinue}>
          Continuar
        </button>
        <button className="btn btn-secondary" onClick={handleShareClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          Compartilhar
        </button>
      </div>
    </div>
  );
}
