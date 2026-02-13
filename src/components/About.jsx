import { useState, useEffect, useRef } from 'react';
import portfolioData from '../data/portfolioData';
import './Section.css';

const { personal } = portfolioData;

const phrases = [
  'debugging my way through life.',
  'chasing one function at a time.',
  'fluent in bits and bytes.',
  'powered by algorithms.',
  'learning, building, shipping.',
  'building on first principles.',
];

function TypingAnimation() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && displayText === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeoutRef.current = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <div className="typing-wrapper">
      <span className="typing-static">I am </span>
      <span className="typing-dynamic">
        {displayText}
        <span className="typing-cursor">|</span>
      </span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section section-about">
      <div className="section-container">
        <h2 className="section-title title-about">
          <span className="section-emojis">
            <span className="section-emoji-float" style={{ animationDelay: '0s' }}>👤</span>
            <span className="section-emoji-float" style={{ animationDelay: '0.4s' }}>🙋</span>
          </span>
          About Me
          <span className="section-emojis">
            <span className="section-emoji-float" style={{ animationDelay: '0.8s' }}>💫</span>
            <span className="section-emoji-float" style={{ animationDelay: '1.2s' }}>✨</span>
          </span>
        </h2>
        <div className="about-content">
          <div className="about-avatar">
            <img
              className="avatar-image"
              src={personal.avatarUrl}
              alt={personal.name}
            />
            <p className="avatar-name">{personal.name}</p>
            <p className="avatar-degree-secondary">B.E in Computer Engineering</p>
          </div>
          <div className="about-text">
            {personal.bio.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="about-actions">
              <div className="social-icons">
                <a href={`mailto:${personal.email}`} className="social-icon" title="Email" aria-label="Email">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                </a>
                <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn" aria-label="LinkedIn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a 
                  href={personal.socialLinks.leetcode} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon" 
                  title="LeetCode" 
                  aria-label="LeetCode"
                >
                  <svg width="22" height="22" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M30 5L10 25L30 45" />
                    <path d="M20 25H45" />
                  </svg>
                </a>
                <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub" aria-label="GitHub">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a href={personal.socialLinks.discord} target="_blank" rel="noopener noreferrer" className="social-icon" title="Discord" aria-label="Discord">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                    <ellipse cx="9.5" cy="13.5" rx="2" ry="1.75" />
                    <ellipse cx="14.5" cy="13.5" rx="2" ry="1.75" />
                  </svg>
                </a>
                

              </div>
              <a href={personal.resumeUrl} className="resume-btn" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </div>
          </div>
        </div>
        <TypingAnimation />
      </div>
    </section>
  );
}

export default About;
