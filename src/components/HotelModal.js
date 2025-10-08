import React, { useState } from 'react';

const HotelModal = ({ hotel, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === hotel.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? hotel.images.length - 1 : prevIndex - 1
    );
  };
  
  const amenityIcons = {
    default: 'fa-check-circle',
    'Ceia de Reveillon': 'fa-utensils',
    'Estrutura': 'fa-building',
    'Diferenciais': 'fa-star',
    'Coquetel de Fim de Ano': 'fa-glass-cheers',
    'Hospede-se conosco': 'fa-concierge-bell',
    'Vantagens': 'fa-thumbs-up',
  };

  // O link agora é dinâmico, adicionando o ID do hotel
  const reservaUrl = `https://book.omnibees.com/chain/1557?q=${hotel.id}&CheckIn=29122025&CheckOut=01012026&ad=2&ch=0&NRooms=1`;

  return (
    <div className="modal-overlay active" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div
            className="modal-carousel-track"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {hotel.images.map((image, index) => (
              <div className="modal-carousel-slide" key={index}>
                <img src={image} alt={`${hotel.name} ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="modal-carousel-controls">
            <button
              className="modal-carousel-button prev-btn"
              aria-label="Anterior"
              onClick={prevImage}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="modal-carousel-button next-btn"
              aria-label="Próximo"
              onClick={nextImage}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="modal-header-overlay">
            <button
              className="close-modal-btn"
              aria-label="Fechar"
              onClick={closeModal}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="modal-details-wrapper">
          <div className="modal-hotel-details">
            <h2>{hotel.name}</h2>
            <p>
              <i className="fas fa-map-marker-alt"></i> {hotel.location}
            </p>
          </div>
          <div className="modal-body">
            <h3>Sobre a Celebração</h3>
            <p
              className="modal-description"
              dangerouslySetInnerHTML={{ __html: hotel.description }}
            ></p>
            {Object.entries(hotel.amenities).map(([category, items]) => (
              <div key={category}>
                <h3>{category}</h3>
                {items.map((item, index) => (
                  <div className="amenity-item" key={index}>
                    <i
                      className={`fas ${
                        amenityIcons[category] || amenityIcons.default
                      }`}
                    ></i>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <div className="modal-price">
              <span className="amount">{hotel.price}</span>
            </div>
            <a
              href={reservaUrl} // Link atualizado e dinâmico
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Fazer Reserva
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelModal;