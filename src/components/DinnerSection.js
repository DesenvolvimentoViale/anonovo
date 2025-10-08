import React, { useState, useEffect } from 'react';

// 1. Importe várias imagens para o carrossel
import dinnerImage1 from '../assets/dt/REVEILLON517.jpg';
import dinnerImage2 from '../assets/cataratas/DSC09521.jpg';
import dinnerImage3 from '../assets/dt/REVEILLON86.jpg';
import dinnerImage4 from '../assets/dt/REVEILLON46.jpg';

// Array com todas as imagens importadas
const carouselImages = [dinnerImage1, dinnerImage2, dinnerImage3, dinnerImage4];

const DinnerSection = () => {
  // 2. Estado para controlar qual slide está ativo
  const [currentSlide, setCurrentSlide] = useState(0);

  // 3. Efeito para trocar o slide automaticamente
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 3000); // Muda a imagem a cada 3 segundos

    // Limpa o timer quando o componente é desmontado para evitar vazamento de memória
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="feature-section alt-bg fade-in-section">
      <div className="container">
        <div className="two-column-layout">
          <div className="image-content">
            {/* 4. Estrutura do carrossel no lugar da imagem única */}
            <div className="auto-carousel-container">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`auto-carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={image} alt={`Ceia de Reveillon ${index + 1}`} />
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
              <a href="#" className="option-pill"><span>Opções vegetarianas</span><i className="fas fa-arrow-right"></i></a>
              <a href="#" className="option-pill"><span>Opções sem glúten</span><i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DinnerSection;