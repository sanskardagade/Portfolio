import { useState } from 'react';
import portfolioData from '../data/portfolioData';
import './Section.css';

const { experience } = portfolioData;

function Experience() {
  const [openCategories, setOpenCategories] = useState({ 0: true });

  const toggleCategory = (index) => {
    setOpenCategories((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="experience" className="section section-experience">
      <div className="section-container">
        <h2 className="section-title title-experience">
          <span className="section-emojis">
            <span className="section-emoji-float" style={{ animationDelay: '0s' }}>💼</span>
            <span className="section-emoji-float" style={{ animationDelay: '0.4s' }}>🚀</span>
          </span>
          Experience
          <span className="section-emojis">
            <span className="section-emoji-float" style={{ animationDelay: '0.8s' }}>⚡</span>
            <span className="section-emoji-float" style={{ animationDelay: '1.2s' }}>🏆</span>
          </span>
        </h2>
        <div className="experience-categories">
          {experience.map((category, catIndex) => (
            <div key={catIndex} className="exp-category">
              <button
                className={`exp-category-header ${openCategories[catIndex] ? 'open' : ''}`}
                onClick={() => toggleCategory(catIndex)}
              >
                <span className="exp-category-title">{category.title}</span>
                {openCategories[catIndex] && (
                  <span className="exp-category-count">{category.items.length}</span>
                )}
                <svg
                  className="exp-chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {!openCategories[catIndex] && (
                <div className="exp-collapsed-preview">
                  {category.items.map((item, idx) => (
                    <span key={idx} className="exp-collapsed-item">{item.role}</span>
                  ))}
                </div>
              )}
              <div className={`exp-category-body ${openCategories[catIndex] ? 'open' : ''}`}>
                <div className="timeline">
                  {category.items.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot" />
                      <div className="timeline-content card exp-card">
                        <div className="exp-card-layout">
                          <div className="exp-card-main">
                            <span className="timeline-year">{item.period}</span>
                            <div className="card-title-row">
                              {item.logo && (
                                <img
                                  src={item.logo}
                                  alt={item.organization}
                                  className="card-logo"
                                />
                              )}
                              <h3>{item.role}</h3>
                            </div>
                            <p className="timeline-institution">{item.organization}</p>
                            <ul className="experience-list">
                              {item.points.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="exp-card-side">
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="institution-link-inline"
                                title={`Visit ${item.organization}`}
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                              </a>
                            )}
                            {item.location && (
                              <div className="exp-side-item">
                                <span className="exp-side-icon">📍</span>
                                <span className="exp-side-text">{item.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
