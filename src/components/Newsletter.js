import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter-section fade-in-section">
      <div className="container">
        <div className="newsletter-box" id="newsletter-container-natal">
          <h2>Fique por dentro das novidades!</h2>
          <p>
            Assine nossa newsletter e receba em primeira mão nossas melhores
            ofertas, pacotes especiais de feriados e dicas exclusivas sobre Foz
            do Iguaçu.
          </p>

          <form
            id="natal-newsletter-form"
            className="newsletter-form"
            method="POST"
            action="#"
          >
            <input
              type="text"
              id="form-name-natal"
              name="name"
              placeholder="Seu nome"
              required=""
            />
            <input
              type="text"
              id="form-lastname-natal"
              name="lastname"
              placeholder="Seu sobrenome"
              required=""
            />
            <input
              type="email"
              id="form-mail-natal"
              name="mail"
              placeholder="Seu melhor e-mail"
              required=""
            />
            <button type="submit" className="cta-button">
              Assinar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;