import React from 'react';

const NAV_LINKS = [
  { href: '#hero-section', label: 'Início' },
  { href: '#catalog-section', label: 'Hotéis' },
  { href: '#ceia-section', label: 'Ceias' },
];

const Header = ({ isScrolled }) => {
  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar">
        <a href="https://www.vialehoteis.com.br/" className="logo">
          <img
            src="https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Logos/Viale_Hoteis_H-_Branca__-_Alpha.png"
            alt="Viale Hotéis Logo"
          />
        </a>

        <nav aria-label="Navegação principal">
          <ul id="primary-navigation" className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
