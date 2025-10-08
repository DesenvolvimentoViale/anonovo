import React from 'react';
import heroBackgroundImage from '../assets/tower/Viale Tower01109.jpg';

const Hero = () => {
  return (
    <section 
      className="hero" 
      id="hero-section" 
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <div className="hero-content">
        <h1>Viva o melhor Reveillon em Foz</h1>
        <p>
          Descubra o encanto das festas de fim de ano com ceias espetaculares e
          uma atmosfera mágica em nossos hotéis.
        </p>
        <a
          href="https://book.omnibees.com/chain/1557?CheckIn=29122025&CheckOut=01012026&ad=2&ch=0&NRooms=1"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button-transparent"
        >
          Garanta a sua hospedagem
        </a>
      </div>
    </section>
  );
};

export default Hero;