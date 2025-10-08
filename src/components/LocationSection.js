import React from 'react';

const LocationSection = () => {
  return (
    <section id="location-section" className="location-detailed fade-in-section">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <h2>Um hotel perfeitamente localizado no seu destino</h2>
            <div className="location-group">
              <h3>NOSSAS UNIDADES</h3>
              <ul className="location-list">
                <li><i className="fas fa-building"></i><span>Viale Tower Hotel</span></li>
                <li><i className="fas fa-water"></i><span>Viale Cataratas Hotel & Eventos</span></li>
                <li><i className="fas fa-hotel"></i><span>Viale Iguassu</span></li>
                <li><i className="fas fa-star"></i><span>DoubleTree by Hilton Foz do Iguaçu</span></li>
              </ul>
            </div>
            <div className="location-group">
              <h3>ATRAÇÕES TURÍSTICAS</h3>
              <ul className="location-list">
                <li><i className="fas fa-camera-retro"></i><span>Cataratas do Iguaçu</span><span className="distance">13 km ~ 20 min</span></li>
                <li><i className="fas fa-kiwi-bird"></i><span>Parque das Aves</span><span className="distance">11 km ~ 20 min</span></li>
                <li><i className="fas fa-plane"></i><span>Aeroporto (IGU)</span><span className="distance">13 km ~ 18 min</span></li>
              </ul>
            </div>
          </div>
          <div className="location-map">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1CZixQlUNRN4ynUHrDmyF8-BpBVani-U&ehbc=2E312F&noprof=1" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização dos Hotéis Viale"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;