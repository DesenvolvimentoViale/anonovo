import React from 'react';

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
        <nav>
          <ul className="nav-links">
            <li><a href="#hero-section">Início</a></li>
            <li><a href="#catalog-section">Hotéis</a></li>
            <li><a href="#ceia-section">Ceias</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;