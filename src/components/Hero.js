import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Hero = () => {
  const heroImage = process.env.PUBLIC_URL + '/assets/dt/REVEILLON177.jpg';

  return (
    <section className="hero" id="hero-section">
      <div className="hero-media" aria-hidden="true">
        <LazyLoadImage
          src={heroImage}
          alt=""
          effect="opacity"
          wrapperClassName="hero-media-wrapper"
          visibleByDefault
          decoding="async"
        />
      </div>
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