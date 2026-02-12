import { useState } from 'react';
import { useTheme } from './ThemeContext';
import portfolioData from '../data/portfolioData';
import './Header.css';

const { personal } = portfolioData;

// Logo uses CSS gradient via background-clip: text

const navItems = [
  { name: 'About', colorClass: 'nav-about' },
  { name: 'Education', colorClass: 'nav-education' },
  { name: 'Experience', colorClass: 'nav-experience' },
  { name: 'Projects', colorClass: 'nav-projects' },
  { name: 'Certificates', colorClass: 'nav-certificates' },
  { name: 'Contact', colorClass: 'nav-contact' },
];

function Header({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleClick = (section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a className="header-logo" href="#about" onClick={() => handleClick('About')}>
          <span className="logo-text">&lt; Sanskar/&gt;</span>
        </a>
        <div className="header-right">
          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className={`nav-link ${item.colorClass} ${activeSection === item.name ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.name);
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={
              theme === 'dark'
                ? 'Switch to light mode'
                : theme === 'light'
                ? 'Switch to glass mode'
                : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
