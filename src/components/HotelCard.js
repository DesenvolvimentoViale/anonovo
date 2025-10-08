import React from 'react';

const HotelCard = ({ hotelId, hotel, openModal }) => {
  return (
    <div className="hotel-card" onClick={() => openModal(hotelId)}>
      <img src={hotel.images[0]} alt={hotel.name} />
      <div className="card-content">
        <h3>{hotel.name}</h3>
        <p>
          <i className="fas fa-map-marker-alt"></i> {hotel.location}
        </p>
      </div>
    </div>
  );
};

export default HotelCard;