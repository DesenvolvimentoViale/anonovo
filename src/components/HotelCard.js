import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Importa o efeito de blur

const HotelCard = ({ hotelId, hotel, openModal }) => {
  return (
    <div className="hotel-card" onClick={() => openModal(hotelId)}>
      <LazyLoadImage
        alt={hotel.name}
        src={process.env.PUBLIC_URL + hotel.images[0]}
        effect="blur"
        height="250px"
        width="100%"
        style={{ objectFit: 'cover' }}
      />
      <div className="card-content">
        <h3>{hotel.name}</h3>
        <p><i className="fas fa-map-marker-alt"></i> {hotel.location}</p>
      </div>
    </div>
  );
};

export default HotelCard;