import React, { useCallback, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const CARD_PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"%3E%3Crect width="16" height="16" fill="%23f0ede7"/%3E%3C/svg%3E';

const HotelCard = ({ hotelId, hotel, openModal, eager = false }) => {
  const [isLoaded, setIsLoaded] = useState(eager);

  const handleAfterLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="hotel-card" onClick={() => openModal(hotelId)}>
      <div className={`card-media${isLoaded ? ' is-loaded' : ''}`}>
        <LazyLoadImage
          alt={hotel.name}
          src={process.env.PUBLIC_URL + hotel.images[0]}
          effect="opacity"
          height={250}
          width="100%"
          style={{ objectFit: 'cover' }}
          placeholderSrc={CARD_PLACEHOLDER}
          visibleByDefault={eager}
          threshold={eager ? 0 : 320}
          delayMethod="throttle"
          delayTime={120}
          afterLoad={handleAfterLoad}
          wrapperClassName="card-media-wrapper"
          decoding="async"
          loading={eager ? 'eager' : 'lazy'}
        />
      </div>
      <div className="card-content">
        <h3>{hotel.name}</h3>
        <p><i className="fas fa-map-marker-alt"></i> {hotel.location}</p>
      </div>
    </div>
  );
};

export default HotelCard;