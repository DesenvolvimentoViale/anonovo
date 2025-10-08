import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const FamilySection = () => {
  return (
    <section className="feature-section" id="ceia-section">
      <div className="container">
        <div className="two-column-layout layout-reversed">
          <div className="image-content">
            <div className="collage-grid">
              <LazyLoadImage src={process.env.PUBLIC_URL + "/assets/dt/REVEILLON173.jpg"} alt="Festa de Reveillon Viale Hotéis" effect="blur" />
              <LazyLoadImage src={process.env.PUBLIC_URL + "/assets/cataratas/DSC09521.jpg"} alt="Mesa de Sobremesas de Reveillon" effect="blur" />
              <LazyLoadImage src={process.env.PUBLIC_URL + "/assets/dt/REVEILLON86.jpg"} alt="Buffet de Reveillon" effect="blur" />
            </div>
          </div>
          <div className="text-content">
            <h2>Reveillon em Família</h2>
            <p>
              No Viale Cataratas e no DoubleTree by Hilton, sua noite da virada ganha um sabor especial. Nossa ceia foi pensada para reunir famílias em torno da mesa, com pratos que despertam memórias e uma mesa de sobremesas preparada com carinho. Tudo em um ambiente festivo e acolhedor, para você celebrar momentos únicos com quem ama.
            </p>
            <ul className="amenities-grid">
              <li><i className="fas fa-utensils"></i> Buffet Completo</li>
              <li><i className="fas fa-glass-cheers"></i> Bebidas Inclusas</li>
              <li><i className="fas fa-birthday-cake"></i> Mesa de Sobremesas</li>
              <li><i className="fas fa-music"></i> Música ao Vivo</li>
              <li><i className="fas fa-car"></i> Estacionamento Gratuito</li>
              <li><i className="fas fa-child"></i> Espaço Kids</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;