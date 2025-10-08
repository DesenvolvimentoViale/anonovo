import React, { useState } from 'react';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    mail: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.lastname || !formData.mail) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      setIsSubmitting(false);
      return;
    }

    const endpointUrl = 'https://app-3SMTDNLIFO.marketingautomation.services/webforms/receivePostback/MzY0NjA0MjIyAQA/d881b313-1065-4871-9e08-72224c697abf';

    const formUrlEncoded = new URLSearchParams();
    formUrlEncoded.append('name', formData.name);
    formUrlEncoded.append('lastname', formData.lastname);
    formUrlEncoded.append('email', formData.mail);
    
    try {
      await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formUrlEncoded.toString(),
        mode: 'no-cors'
      });

      setIsSubmitted(true);

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Ocorreu um erro ao tentar se cadastrar. Por favor, tente novamente.');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#fff' }}>
              <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: '#28a745', marginBottom: '15px' }}></i>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Obrigado!</h3>
              <p style={{ fontSize: '1.1rem' }}>Seu cadastro foi realizado com sucesso!</p>
            </div>
          ) : (
            <>
              <h2>Fique por dentro das novidades!</h2>
              <p>Assine nossa newsletter e receba em primeira mão nossas promoções, pacotes especiais e as últimas notícias da Viale Hotéis.</p>
              <form id="crm-newsletter-form" className="newsletter-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
                <input type="text" name="lastname" placeholder="Seu sobrenome" value={formData.lastname} onChange={handleChange} required />
                <input type="email" name="mail" placeholder="Seu melhor e-mail" value={formData.mail} onChange={handleChange} required />
                <button type="submit" className="cta-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Assinar'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;