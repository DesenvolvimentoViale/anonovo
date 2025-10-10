import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const carouselImagePaths = [
  '/assets/dt/REVEILLON517.jpg',
  '/assets/cataratas/DSC09521.jpg',
  '/assets/dt/REVEILLON86.jpg',
  '/assets/dt/REVEILLON46.jpg'
];

const DinnerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImagePaths.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="feature-section dinner-section alt-bg">
      <div className="container">
        <div className="two-column-layout">
          <div className="image-content">
            <div className="auto-carousel-container">
              {carouselImagePaths.map((imagePath, index) => (
                <div key={index} className={`auto-carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                  <LazyLoadImage 
                    src={process.env.PUBLIC_URL + imagePath} 
                    alt={`Ceia de Reveillon ${index + 1}`} 
                    effect="blur" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-content">
            <div className="gastronomy-header">
              <div className="gastronomy-icon"><i className="fas fa-utensils"></i></div>
              <h2>Ceia de Reveillon Inesquecível</h2>
              <p className="gastronomy-subtitle">CUIDADO EM TODOS OS DETALHES</p>
            </div>
            <p>Celebre a noite da virada com uma ceia preparada por nossos chefs. Oferecemos um banquete com pratos clássicos, opções contemporâneas e uma mesa de sobremesas que encanta a todos, tudo em um ambiente decorado e com música ao vivo.</p>
            <div className="options-list">
              <button className="option-pill"><span>Opções vegetarianas</span><i className="fas fa-arrow-right"></i></button>
              <button className="option-pill"><span>Opções sem glúten</span><i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DinnerSection;