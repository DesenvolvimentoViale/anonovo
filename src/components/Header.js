import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#hero-section', label: 'Início' },
  { href: '#catalog-section', label: 'Hotéis' },
  { href: '#ceia-section', label: 'Ceias' },
];

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="container navbar">
        <a href="https://www.vialehoteis.com.br/" className="logo">
          <img
            src="https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Logos/Viale_Hoteis_H-_Branca__-_Alpha.png"
            alt="Viale Hotéis Logo"
          />
        </a>

        <button
          type="button"
          className={`mobile-menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          <span className="mobile-menu-toggle__bar" aria-hidden="true" />
          <span className="mobile-menu-toggle__bar" aria-hidden="true" />
          <span className="mobile-menu-toggle__bar" aria-hidden="true" />
        </button>

        <nav>
          <ul
            id="primary-navigation"
            className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}
            aria-hidden={!isMenuOpen && typeof window !== 'undefined' && window.innerWidth <= 991}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`menu-backdrop ${isMenuOpen ? 'is-visible' : ''}`}
        aria-hidden="true"
        onClick={toggleMenu}
      />
    </header>
  );
};

export default Header;
