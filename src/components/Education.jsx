import portfolioData from '../data/portfolioData';
import './Section.css';

const { education } = portfolioData;

function Education() {
  return (
    <section id="education" className="section section-education">
      <div className="section-container">
        <h2 className="section-title title-education">
          <span className="section-emojis">
            <span className="section-emoji-float" style={{ animationDelay: '0s' }}>🎓</span>
            <span className="section-emoji-float" style={{ animationDelay: '0.4s' }}>📚</span>
          </span>
          Education
          <span className="section-emojis">
            <span className="section-emoji-float" style={{ animationDelay: '0.8s' }}>🔬</span>
            <span className="section-emoji-float" style={{ animationDelay: '1.2s' }}>💡</span>
          </span>
        </h2>
        <div className="timeline">
          {education.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card edu-card">
                <div className="edu-card-layout">
                  <div className="edu-card-main">
                    <span className="timeline-year">{item.year}</span>
                    <div className="card-title-row">
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={item.institution}
                          className="card-logo"
                        />
                      )}
                      <h3>{item.degree}</h3>
                    </div>
                    {item.field && <h4>{item.field}</h4>}
                    {item.minor && <h4 className="edu-minor">{item.minor}</h4>}
                    {item.institution && item.institution !== item.degree && (
                      <p className="timeline-institution">{item.institution}</p>
                    )}
                    {item.description && <p>{item.description}</p>}
                    {item.coursework && (
                      <div className="edu-coursework">
                        <p className="edu-coursework-label">Coursework:</p>
                        <ul className="edu-coursework-list">
                          {item.coursework.map((course, i) => (
                            <li key={i}>{course}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="edu-card-side">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="institution-link-inline"
                        title={`Visit ${item.institution}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                    {item.location && (
                      <div className="edu-side-item">
                        <span className="edu-side-icon">📍</span>
                        <span className="edu-side-text">{item.location}</span>
                      </div>
                    )}
                    
                    {item.gpa && (
                      <div className="edu-side-item">
                        <span className="edu-side-icon">📊</span>
                        <span className="edu-side-label">GPA</span>
                        <span className="edu-side-text">{item.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
