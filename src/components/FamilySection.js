import React from 'react';

// Selecionando as melhores imagens das suas pastas para o layout
import festaImage from '../assets/dt/REVEILLON173.jpg';      // Imagem maior, mais festiva
import ceiaImage from '../assets/cataratas/DSC09521.jpg';   // Imagem da mesa de sobremesas
import buffetImage from '../assets/dt/REVEILLON86.jpg';     // Imagem do buffet

const FamilySection = () => {
  return (
    <section className="feature-section fade-in-section" id="ceia-section">
      <div className="container">
        <div className="two-column-layout">
          <div className="image-content">
            <div className="collage-grid">
              <img src={festaImage} alt="Festa de Reveillon Viale Hotéis" />
              <img src={ceiaImage} alt="Mesa de Sobremesas de Reveillon" />
              <img src={buffetImage} alt="Buffet de Reveillon" />
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