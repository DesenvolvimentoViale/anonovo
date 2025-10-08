import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer fade-in-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
            <h3>Links Rápidos</h3>
            <ul>
              <li>
                <a href="#hero-section">Início</a>
              </li>
              <li>
                <a href="#catalog-section">Hotéis de Reveillon</a>
              </li>
              <li>
                <a href="#gastronomia-section">Ceias</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Sobre</h3>
            <ul>
              <li>
                <a href="https://www.vialehoteis.com.br/">Nossa História</a>
              </li>
              <li>
                <a href="https://www.vialehoteis.com.br/">Imprensa</a>
              </li>
              <li>
                <a href="https://www.vialehoteis.com.br/">Trabalhe Conosco</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contato</h3>
            <ul>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=554521057299&text=Ol%C3%A1+vim+do+site+de+Reveillon+e+quero+mais+informa%C3%A7%C3%B5es!&type=phone_number&app_absent=0">
                  Central de Reservas
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=554521057299&text=Ol%C3%A1+vim+do+site+de+Reveillon+e+quero+mais+informa%C3%A7%C3%B5es!&type=phone_number&app_absent=0">
                  Eventos Corporativos
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=554521057299&text=Ol%C3%A1+vim+do+site+de+Reveillon+e+quero+mais+informa%C3%A7%C3%B5es!&type=phone_number&app_absent=0">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-middle">
          <a href="#" className="footer-logo">
            <img
              src="https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Logos/Viale_Hoteis_H-_Branca__-_Alpha.png"
              alt="Viale Hotéis Logo"
            />
          </a>
          <div className="footer-socials">
            <a
              href="https://api.whatsapp.com/send/?phone=554521057299&text=Ol%C3%A1+vim+do+site+de+Reveillon+e+quero+mais+informa%C3%A7%C3%B5es!&type=phone_number&app_absent=0"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.facebook.com/vialecataratashotel"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/viale.cataratas/"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p>© 2026 Viale Hotéis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;