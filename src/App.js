import React, { useState, useEffect } from 'react';
import './App.css';

// Importação de todos os componentes da página
import Header from './components/Header';
import Hero from './components/Hero';
import HotelCard from './components/HotelCard';
import HotelModal from './components/HotelModal';
import DinnerSection from './components/DinnerSection';
import FamilySection from './components/FamilySection';
import LocationSection from './components/LocationSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Importação dos dados dos hotéis
import { hotelData } from './data/hotelData';

function App() {
  // Estado para controlar o modal (aberto/fechado)
  const [modalOpen, setModalOpen] = useState(false);
  // Estado para guardar os dados do hotel selecionado
  const [selectedHotel, setSelectedHotel] = useState(null);
  // Estado para controlar o estilo do header quando a página é rolada
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para adicionar e remover o listener de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para abrir o modal com os dados do hotel clicado
  const openModal = (hotelId) => {
    const hotel = hotelData[hotelId];
    setSelectedHotel(hotel);
    setModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedHotel(null);
  };

  return (
    <div className="App">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <section id="catalog-section" className="catalog fade-in-section">
          <div className="container">
            <div className="section-header">
              <h2>Celebrações Inesquecíveis</h2>
              <p>Escolha o cenário perfeito para sua festa de Ano Novo.</p>
            </div>
            <div className="hotel-grid">
              {/* Mapeia os dados dos hotéis para criar os cards dinamicamente */}
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
        
        {/* Seções de conteúdo que criamos */}
        <DinnerSection />
        <FamilySection />
        <LocationSection />
        <Newsletter />

      </main>
      <Footer />

      {/* Renderiza o modal apenas se modalOpen for verdadeiro */}
      {modalOpen && <HotelModal hotel={selectedHotel} closeModal={closeModal} />}
    </div>
  );
}

export default App;