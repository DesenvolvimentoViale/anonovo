import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import HotelCard from './components/HotelCard';
import HotelModal from './components/HotelModal';
import DinnerSection from './components/DinnerSection';
import FamilySection from './components/FamilySection';
import LocationSection from './components/LocationSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import { hotelData } from './data/hotelData';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = (hotelId) => {
    const hotel = hotelData[hotelId];
    setSelectedHotel(hotel);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedHotel(null);
  };

  return (
    <div className="App">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <section id="catalog-section" className="catalog">
          <div className="container">
            <div className="section-header">
              <h2>Celebrações Inesquecíveis</h2>
              <p>Escolha o cenário perfeito para sua festa de Ano Novo.</p>
            </div>
            <div className="hotel-grid">
              {Object.keys(hotelData).map((hotelId) => (
                <HotelCard
                  key={hotelId}
                  hotelId={hotelId}
                  hotel={hotelData[hotelId]}
                  openModal={openModal}
                />
              ))}
            </div>
          </div>
        </section>
        
        <DinnerSection />
        <FamilySection />
        <LocationSection />
        <Newsletter />

      </main>
      <Footer />

      {modalOpen && <HotelModal hotel={selectedHotel} closeModal={closeModal} />}
    </div>
  );
}

export default App;