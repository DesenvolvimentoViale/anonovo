import React from 'react';

const Hero = () => {
  // ATENÇÃO: Verifique se o nome do arquivo é EXATAMENTE este, incluindo maiúsculas.
  const imageUrl = process.env.PUBLIC_URL + '/assets/dt/REVEILLON177.jpg';

  return (
    <section 
      className="hero" 
      id="hero-section" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="hero-content">
        <h1>Viva a Magia do Reveillon em Foz</h1>
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