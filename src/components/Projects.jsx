import portfolioData from '../data/portfolioData';
import './Section.css';

const { projects } = portfolioData;

function Projects() {
  return (
    <section id="projects" className="section section-projects">
      <div className="section-container">
        <h2 className="section-title title-projects">
          <span className="section-emojis">
            <span className="section-emoji-float" style={{ animationDelay: '0s' }}>🛠️</span>
            <span className="section-emoji-float" style={{ animationDelay: '0.4s' }}>💻</span>
          </span>
          Projects
          <span className="section-emojis">
            <span className="section-emoji-float" style={{ animationDelay: '0.8s' }}>🔧</span>
            <span className="section-emoji-float" style={{ animationDelay: '1.2s' }}>🎯</span>
          </span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-icon"
                  title="View on GitHub"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
              <p className="project-body">{project.body}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
