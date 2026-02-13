import portfolioData from '../data/portfolioData';
import './Section.css';

const { certificates } = portfolioData;

function Certificates() {
  return (
    <section id="certificates" className="section section-certificates">
      <div className="section-container">
        <h2 className="section-title title-certificates">
          <span className="section-emojis">
            {/* <span className="section-emoji-float" style={{ animationDelay: '0s' }}>📜</span>
            <span className="section-emoji-float" style={{ animationDelay: '0.4s' }}>🏅</span> */}
          </span>
          Certificates
          <span className="section-emojis">
            {/* <span className="section-emoji-float" style={{ animationDelay: '0.8s' }}>🎖️</span>
            <span className="section-emoji-float" style={{ animationDelay: '1.2s' }}>✅</span> */}
          </span>
        </h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="card cert-card">
              {cert.logo && (
                <img src={cert.logo} alt={cert.name} className="cert-logo" />
              )}
              <h3 className="cert-name">{cert.name}</h3>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                  title="View certificate"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
