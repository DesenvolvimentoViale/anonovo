// Importando as imagens para cada hotel
import vialeCataratasImg1 from '../assets/cataratas/DSC00009.jpg';
import vialeCataratasImg2 from '../assets/cataratas/DSC09461.jpg';
import vialeCataratasImg3 from '../assets/cataratas/DSC09521.jpg';
import vialeCataratasImg4 from '../assets/cataratas/DSC09550.jpg';

import vialeTowerImg1 from '../assets/tower/Viale Tower00142.jpg';
import vialeTowerImg2 from '../assets/tower/Viale Tower00519.jpg';
import vialeTowerImg3 from '../assets/tower/Viale Tower00897.jpg';
import vialeTowerImg4 from '../assets/tower/Viale Tower01164.jpg';

import doubleTreeImg1 from '../assets/dt/REVEILLON10.jpg';
import doubleTreeImg2 from '../assets/dt/REVEILLON86.jpg';
import doubleTreeImg3 from '../assets/dt/REVEILLON164.jpg';
import doubleTreeImg4 from '../assets/dt/REVEILLON245.jpg';

// Novas importações para o Viale Iguassu (usando imagens genéricas de café da manhã)
import vialeIguassuImg1 from '../assets/cataratas/DSC00214.jpg';
import vialeIguassuImg2 from '../assets/cataratas/DSC00021.jpg';


export const hotelData = {
  vialecataratas: {
    id: '2521',
    name: 'Reveillon no Viale Cataratas',
    location: 'Avenida das Cataratas',
    price: 'Consulte',
    images: [
      vialeCataratasImg1,
      vialeCataratasImg2,
      vialeCataratasImg3,
      vialeCataratasImg4,
    ],
    amenities: {
      'Ceia de Reveillon': [
        'Música ao vivo',
        'Bebidas inclusas (água, refrigerante, suco e cerveja)',
        'Cardápio especial',
        'Recreação para os pequenos',
      ],
      Diferenciais: ['Ambiente familiar', 'Atendimento premiado', 'Fácil acesso'],
    },
    description:
      'Celebre o Reveillon no Viale Cataratas com uma Ceia Especial preparada pelos nossos chefs, recreação e bebidas inclusas. Uma experiência completa para tornar a data ainda mais memorável!<br><br><strong>Estadia mínima de 3 noites.</strong>',
  },
  vialetower: {
    id: '8158',
    name: 'Hospede-se para o Reveillon no Viale Tower',
    location: 'Centro de Foz do Iguaçu',
    price: 'Consulte',
    images: [
      vialeTowerImg1,
      vialeTowerImg2,
      vialeTowerImg3,
      vialeTowerImg4,
    ],
    amenities: {
      'Coquetel de Fim de Ano': [
        'Vista panorâmica',
        'Drinks exclusivos',
        'Comida finger food',
        'Música ao vivo',
      ],
      Diferenciais: [
        'Rooftop Sky Bar',
        'Piscina com borda infinita',
        'Ambiente sofisticado',
      ],
    },
    description:
      'Passe o Reveillon no coração de Foz do Iguaçu e aproveite a vista mais encantadora da cidade no Viale Tower. A hospedagem inclui um coquetel exclusivo no rooftop no dia 31/12.<br><br><strong>Estadia mínima de 3 noites.</strong>',
  },
  doubletree: {
    id: '5293',
    name: 'Reveillon no DoubleTree by Hilton',
    location: 'Próximo às Cataratas',
    price: 'Consulte',
    images: [
        doubleTreeImg1,
        doubleTreeImg2,
        doubleTreeImg3,
        doubleTreeImg4,
    ],
    amenities: {
        'Ceia de Reveillon': [
            'Decoração temática',
            'Buffet completo de Ano Novo',
            'Bebidas inclusas (refrigerantes, sucos e água)',
            'Recreação para os pequenos'
        ],
        'Estrutura': [
            'Piscinas',
            'Espaço Kids',
            'Acomodações de alto padrão'
        ]
    },
    description: 'Viva a magia do Ano Novo no DoubleTree by Hilton! Desfrute de uma Ceia Especial de Reveillon, recreação para toda a família e uma celebração inesquecível.<br><br><strong>Estadia mínima de 3 noites.</strong>'
  },
  // Adicionando o Viale Iguassu novamente
  vialeiguassu: {
    id: '11956',
    name: 'Reveillon no Viale Iguassu',
    location: 'Em frente ao shopping',  //
    price: 'Consulte', //
    images: [
      vialeIguassuImg1,
      vialeIguassuImg2
    ],
    amenities: {
      'Vantagens': [
        'Frente ao Shopping JL', //
        'Conforto e praticidade', //
        'Café da manhã reforçado' //
      ]
    },
    description: 'No Viale Iguassu, seu Reveillon fica ainda mais prático e aconchegante. Hospede-se em frente ao shopping e desfrute de todo o conforto que só o hotel pode oferecer. A hospedagem não possui ceia.<br><br><strong>Estadia mínima de 3 noites.</strong>'
  }
};