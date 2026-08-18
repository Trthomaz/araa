export const getSiteContent = (lang = 'pt') => {
  const pt = lang === 'pt';
  const T = (a, b) => (pt ? a : b);

  const secoes = [
    {
      titulo: T('Entradas', 'Starters'),
      nota: '',
      itens: [
        { nome: 'Pastel de queijo', desc: T('Mix de queijos brasileiros com chutney de maracujá.', 'Brazilian cheese blend with passion fruit chutney.'), tag: '' },
        { nome: 'Pastel de camarão com catupiry', desc: T('Recheado com camarão e catupiry.', 'Shrimp and catupiry cream cheese pastry.'), tag: '' },
        { nome: 'Pastel de carne seca com coalho', desc: T('Carne seca, queijo coalho e manteiga de garrafa.', 'Sun-dried beef, coalho cheese and clarified butter.'), tag: '' },
        { nome: 'Um sonho de porco', desc: T('Pão sonho, barriga de porco e picles de abacaxi.', 'Sweet bun, pork belly and pickled pineapple.'), tag: '' },
        { nome: 'Caldinho de feijão', desc: T('Com farofinha da casa e couve frita.', 'Bean broth with house farofa and crispy kale.'), tag: '' },
        { nome: 'Pão de queijo com linguiça artesanal', desc: T('Pão de queijo com linguiça artesanal e queijo canastra.', 'Cheese bread with artisanal sausage and canastra cheese.'), tag: '' },
        { nome: 'Dadinho de tapioca', desc: T('E chutney de maracujá.', 'Crispy tapioca cubes with passion fruit chutney.'), tag: T('Vegetariano', 'Vegetarian') },
        { nome: 'Mini hambúrguer (3 un)', desc: T('No brioche, com queijo cheddar, molho especial, picles, bacon e cebola.', 'Brioche buns with cheddar, special sauce, pickles, bacon and onion.'), tag: '' },
        { nome: 'Steak tartar de carne', desc: T('Filé mignon cortado na ponta da faca e batata frita.', 'Hand-cut beef tenderloin tartare with fries.'), tag: '' },
        { nome: 'Batata frita tradicional', desc: T('Com páprica.', 'French fries with paprika.'), tag: '' },
        { nome: 'Batata frita trufada', desc: T('Com azeite trufado e parmesão.', 'Fries with truffle oil and parmesan.'), tag: '' },
        { nome: 'Abóbora coalhada e sementes', desc: T('Abóbora assada com coalhada vegana e sementes de girassol e abóbora.', 'Roasted squash, vegan curd, sunflower and pumpkin seeds.'), tag: T('Vegano', 'Vegan') }
      ]
    },
    {
      titulo: T('Principais', 'Mains'),
      nota: T('individual', 'individual'),
      itens: [
        { nome: 'Barriga de porco com feijão tropeiro', desc: T('Com ovos caipira, couve, linguiça e banana da terra.', 'Pork belly, tropeiro beans, free-range eggs, kale, sausage and plantain.'), tag: '' },
        { nome: 'Peixe com risoto de moqueca', desc: T('Risoto de moqueca com peixe do dia e tomate confit.', 'Moqueca risotto with fish of the day and confit tomato.'), tag: '' },
        { nome: 'Bobó de camarão', desc: T('Arroz branco com castanhas e farofa crocante na manteiga de garrafa.', 'Shrimp bobó, rice with cashews and crispy farofa in clarified butter.'), tag: '' },
        { nome: 'Picadinho de mignon', desc: T('No molho de carne reduzido no fundo da panela, arroz, ovo frito, feijão da casa, farofa crocante e banana-da-terra frita.', 'Diced tenderloin in reduced pan sauce, rice, fried egg, house beans, farofa and fried plantain.'), tag: '' },
        { nome: 'Nhoque vegano', desc: T('Nhoque de batata baroa grelhado com cogumelos shitake e paris, agrião e amêndoas torradas.', 'Grilled parsnip gnocchi, shiitake and button mushrooms, watercress and toasted almonds.'), tag: T('Vegano', 'Vegan') },
        { nome: 'Risoto de abóbora', desc: T('Com missô, sálvia, avelã e radicchio.', 'Squash risotto with miso, sage, hazelnut and radicchio.'), tag: T('Vegetariano', 'Vegetarian') }
      ]
    },
    {
      titulo: T('Grelhados', 'From the grill'),
      nota: T('individual ou para compartilhar', 'individual or to share'),
      itens: [
        { nome: 'Picanha', desc: T('Acompanha arroz branco, vinagrete da casa, batata frita e farofa com ovos.', 'Served with rice, house vinaigrette, fries and farofa with eggs.'), tag: '' },
        { nome: 'Ancho', desc: T('Acompanha arroz branco, vinagrete da casa, batata frita e farofa com ovos.', 'Served with rice, house vinaigrette, fries and farofa with eggs.'), tag: '' },
        { nome: 'Peixe do dia na grelha', desc: T('Acompanha arroz branco, batata frita ou purê, farofa ou legumes.', 'Served with rice, fries or purée, farofa or vegetables.'), tag: '' },
        { nome: 'Galeto', desc: T('Acompanha arroz branco, vinagrete da casa, batata frita e farofa com ovos.', 'Served with rice, house vinaigrette, fries and farofa with eggs.'), tag: '' },
        { nome: 'Churrasco vegano', desc: T('Acompanha arroz branco ou de brócolis, farofa vegana, batata frita e vinagrete da casa.', 'Served with white or broccoli rice, vegan farofa, fries and house vinaigrette.'), tag: T('Vegano', 'Vegan') }
      ]
    },
    {
      titulo: T('Sanduíches', 'Sandwiches'),
      nota: '',
      itens: [
        { nome: 'Wrap de frango', desc: T('Frango, alface americana e molho caesar.', 'Chicken, iceberg lettuce and caesar dressing.'), tag: '' },
        { nome: 'Hambúrguer artesanal', desc: T('180g do blend da casa, pão brioche, queijo cheddar, molho especial, picles, bacon e cebola.', '180g house blend, brioche bun, cheddar, special sauce, pickles, bacon and onion.'), tag: '' },
        { nome: 'Hambúrguer Araá', desc: T('Pão brioche, 180g de hambúrguer angus brisket, queijo cheddar, alface crocante, tomate fresco, cebola roxa e maionese da casa.', 'Brioche bun, 180g angus brisket patty, cheddar, crisp lettuce, tomato, red onion and house mayo.'), tag: '' }
      ]
    },
    {
      titulo: T('Saladas', 'Salads'),
      nota: '',
      itens: [
        { nome: 'Caesar', desc: T('Com alface americana, crouton, molho caesar e parmesão. Adicional de frango grelhado.', 'Iceberg lettuce, croutons, caesar dressing and parmesan. Grilled chicken optional.'), tag: '' },
        { nome: 'Tropical', desc: T('Mix de folhas, geleia de maracujá, queijo coalho, castanha de caju, tomate confit e manga.', 'Mixed greens, passion fruit jam, coalho cheese, cashews, confit tomato and mango.'), tag: T('Vegetariano', 'Vegetarian') }
      ]
    },
    {
      titulo: T('Acompanhamentos', 'Sides'),
      nota: '',
      itens: [
        { nome: 'Arroz branco ou de brócolis', desc: '', tag: '' },
        { nome: 'Farofa de ovos', desc: '', tag: '' },
        { nome: 'Batata frita palito', desc: '', tag: '' },
        { nome: 'Molho à campanha', desc: '', tag: '' },
        { nome: 'Feijão', desc: '', tag: '' }
      ]
    },
    {
      titulo: T('Kids', 'Kids'),
      nota: T('até 10 anos', 'up to 10 years'),
      itens: [
        { nome: 'Picadinho', desc: T('Mini picadinho no molho de carne reduzido, arroz, ovo frito, feijão da casa, farofa crocante e banana da terra frita.', 'Mini diced beef in reduced sauce, rice, fried egg, house beans, farofa and fried plantain.'), tag: '' },
        { nome: 'Linguine ao pomodoro', desc: T('Macarrão com molho pomodoro de tomate pelati e tomates frescos.', 'Linguine with pelati and fresh tomato pomodoro sauce.'), tag: '' }
      ]
    },
    {
      titulo: T('Sobremesas', 'Desserts'),
      nota: '',
      itens: [
        { nome: 'Rabanada', desc: T('Com sorvete de queijo, doce de leite e farofa de cacau.', 'Brazilian french toast with cheese ice cream, dulce de leche and cacao crumble.'), tag: '' },
        { nome: 'Torta Romeu e Julieta', desc: T('Cheesecake com molho de goiaba.', 'Cheesecake with guava sauce.'), tag: '' },
        { nome: 'Torta de chocolate', desc: T('Torta de chocolate belga meio amargo, sorvete de baunilha e crumble de cacau.', 'Dark Belgian chocolate tart, vanilla ice cream and cacao crumble.'), tag: '' }
      ]
    }
  ];

  const faqData = pt ? [
    { q: 'Preciso pagar o bondinho para comer no Araá?', a: 'Sim. O Araá fica dentro do Parque Bondinho Pão de Açúcar, no Morro da Urca, e o acesso é feito com o bilhete do parque. Recomendamos comprar antecipadamente no site oficial do Parque Bondinho. Se você já tem reserva com a gente, chegue com folga para a subida.' },
    { q: 'Como chego até o restaurante?', a: 'A estação do bondinho fica na Av. Pasteur, 520, na Urca. Suba até a primeira parada, o Morro da Urca: estamos no Jardim dos Discos, ao lado do anfiteatro, poucos minutos a pé da estação.' },
    { q: 'Vocês aceitam reserva?', a: 'Sim. Reserve pela plataforma oficial de agendamento ou fale com a gente no WhatsApp. Em fins de semana, feriados e no horário do pôr do sol, a reserva é muito recomendada.' },
    { q: 'Tem estacionamento?', a: 'Há estacionamento pago na estação do bondinho, na Av. Pasteur, sujeito à disponibilidade. Aplicativos de transporte e o ônibus deixam na porta da estação.' },
    { q: 'Recebem crianças? Tem menu kids?', a: 'Recebemos sim, e com muito gosto. Temos menu kids até 10 anos, cadeirinha para bebês e espaço confortável para famílias nos salões.' },
    { q: 'Tem opções vegetarianas e veganas?', a: 'Sim. O cardápio tem entradas, principais e churrasco vegano, além de opções vegetarianas em todas as etapas da refeição. Restrições alimentares? Avise a equipe ao chegar.' },
    { q: 'O restaurante é acessível?', a: 'Sim. O acesso ao Morro da Urca e ao restaurante é feito sem escadas, com piso plano e banheiro adaptado. Se precisar de apoio na chegada, chame no WhatsApp que combinamos tudo antes.' },
    { q: 'Quais formas de pagamento vocês aceitam?', a: 'Cartões de crédito e débito das principais bandeiras, Pix e dinheiro.' },
    { q: 'Posso levar meu vinho? Cobram rolha?', a: 'Pode. Cobramos taxa de rolha por garrafa; consulte o valor com a equipe ou pelo WhatsApp. Também temos carta de vinhos brasileiros e do mundo na adega.' },
    { q: 'É pet friendly?', a: 'Recebemos pets de pequeno porte nas áreas abertas, na guia. O acesso pelo bondinho segue as regras do Parque Bondinho, então confirme com eles antes de subir.' },
    { q: 'E se chover?', a: 'A gente segue funcionando: os salões e o bar são cobertos e climatizados. Em caso de condições severas, a operação depende do funcionamento do bondinho.' }
  ] : [
    { q: 'Do I need a cable car ticket to eat at Araá?', a: 'Yes. Araá is inside Parque Bondinho Pão de Açúcar, on Morro da Urca, and access is through the park ticket. We recommend buying it in advance on the official Parque Bondinho website. If you already have a reservation with us, allow extra time for the ride up.' },
    { q: 'How do I get to the restaurant?', a: 'The cable car station is at Av. Pasteur, 520, in Urca. Ride to the first stop, Morro da Urca: we are at Jardim dos Discos, next to the amphitheatre, a few minutes walk from the station.' },
    { q: 'Do you take reservations?', a: 'Yes. Book through the official reservation platform or message us on WhatsApp. On weekends, holidays and around sunset, booking is strongly recommended.' },
    { q: 'Is there parking?', a: 'There is paid parking at the cable car station on Av. Pasteur, subject to availability. Ride apps and buses drop off right at the station.' },
    { q: 'Are children welcome? Is there a kids menu?', a: 'Very welcome. We have a kids menu for up to 10 years, high chairs and comfortable room for families.' },
    { q: 'Are there vegetarian and vegan options?', a: 'Yes. Starters, mains and a vegan barbecue, plus vegetarian options across the whole menu. Any dietary restriction? Let our team know when you arrive.' },
    { q: 'Is the restaurant accessible?', a: 'Yes. Access to Morro da Urca and the restaurant is step-free, with level flooring and an adapted restroom. Message us on WhatsApp if you need assistance on arrival.' },
    { q: 'Which payment methods do you accept?', a: 'Major credit and debit cards, Pix and cash.' },
    { q: 'Can I bring my own wine? Is there a corkage fee?', a: 'You can. A corkage fee applies per bottle; ask our team or message us on WhatsApp. We also have a Brazilian and international wine list in our cellar.' },
    { q: 'Are you pet friendly?', a: 'Small pets on a leash are welcome in the open areas. Cable car access follows Parque Bondinho rules, so please check with them before coming up.' },
    { q: 'What if it rains?', a: 'We stay open: the dining rooms and bar are covered and air-conditioned. In severe weather, operation depends on the cable car service.' }
  ];

  const ambientes = [
    { src: '/assets/espaco-salao-principal.jpg', nome: T('Salão principal', 'Main dining room') },
    { src: '/assets/espaco-janela-baixa.jpg', nome: T('Salão principal — janela', 'Main room — window') },
    { src: '/assets/espaco-redonda.jpg', nome: T('Salão principal — mesa redonda', 'Main room — round table') },
    { src: '/assets/espaco-corredor.jpg', nome: T('Salão principal — corredor', 'Main room — aisle') },
    { src: '/assets/espaco-salao-jardim.jpg', nome: T('Salão jardim', 'Garden room') },
    { src: '/assets/espaco-jardim-central.jpg', nome: T('Jardim central', 'Central garden') },
    { src: '/assets/espaco-jardim-janela.jpg', nome: T('Jardim janela', 'Garden window') },
    { src: '/assets/espaco-jardim-adega.jpg', nome: T('Jardim adega', 'Cellar garden') },
    { src: '/assets/espaco-jardim-entrada.jpg', nome: T('Jardim entrada', 'Entrance garden') },
    { src: '/assets/espaco-varanda.jpg', nome: T('Varanda', 'Veranda') },
    { src: '/assets/espaco-jardim-varanda.jpg', nome: T('Jardim varanda', 'Garden veranda') },
    { src: '/assets/espaco-janela-alta.jpg', nome: T('Mesa alta na janela', 'High table by the window') },
    { src: '/assets/espaco-bar.jpg', nome: T('Bar — balcão', 'Bar — counter') }
  ];

  const horarios = pt ? [
    { dia: 'Segunda a quinta', hora: '8h30 – 20h' },
    { dia: 'Sexta a domingo', hora: '8h30 – 21h' },
    { dia: 'Café da manhã', hora: '8h30 – 11h30' },
    { dia: 'Brunch (sáb, dom e feriados)', hora: '10h – 14h' },
    { dia: 'Almoço', hora: '12h – 17h' },
    { dia: 'Jantar', hora: '18h – fechamento' }
  ] : [
    { dia: 'Monday to Thursday', hora: '8:30am – 8pm' },
    { dia: 'Friday to Sunday', hora: '8:30am – 9pm' },
    { dia: 'Breakfast', hora: '8:30 – 11:30am' },
    { dia: 'Brunch (Sat, Sun, holidays)', hora: '10am – 2pm' },
    { dia: 'Lunch', hora: '12 – 5pm' },
    { dia: 'Dinner', hora: '6pm – close' }
  ];

  const eventosItens = pt
    ? ['Espaço completo ou áreas privativas para até 200 pessoas', 'Menus assinados: coquetel, almoço servido ou jantar', 'Bar com drinks autorais e carta de vinhos', 'Aniversários, casamentos e eventos corporativos', 'Apoio para produção, decoração e acesso dos convidados']
    : ['Full venue or private areas for up to 200 guests', 'Bespoke menus: cocktail, plated lunch or dinner', 'Bar with signature drinks and a wine list', 'Birthdays, weddings and corporate events', 'Support for production, décor and guest access'];

  return {
    langLabel: pt ? 'EN' : 'PT',
    whatsappUrl: 'https://wa.me/5521966105728',
    reservaUrl: 'https://reservation-widget.tagme.com.br/reservation/schedule/6932e39d799ffa9c8338b779/reservationWidget',
    navMenu: T('Cardápio', 'Menu'),
    navEspaco: T('Espaço', 'The space'),
    navEventos: T('Eventos', 'Events'),
    navLocal: T('Local', 'Find us'),
    navFaq: 'FAQ',
    navReservar: T('Reservar', 'Book a table'),
    heroLead: T('Cada mesa, uma vista. Cada vista, uma história. Cozinha brasileira no alto do Morro da Urca, diante da Baía de Guanabara.', 'Every table has a view. Every view has a story. Brazilian cooking at the top of Morro da Urca, facing Guanabara Bay.'),
    heroCtaReserva: T('Reservar mesa', 'Book a table'),
    heroCtaMenu: T('Ver cardápio', 'See the menu'),
    heroTag1: T('Café da manhã ao jantar', 'Breakfast to dinner'),
    heroTag2: T('Ingredientes 100% brasileiros', '100% Brazilian ingredients'),
    heroTag3: T('Todos os dias', 'Open daily'),
    sobreKicker: T('Essencialmente brasileiro', 'Essentially Brazilian'),
    sobreTitulo: T('A paisagem virou experiência. A comida, conexão.', 'The landscape became an experience. The food, a connection.'),
    sobreP1: T('O Araá nasceu da vontade de reunir, num mesmo lugar, o que o Brasil tem de mais bonito: os sabores das nossas regiões, a força dos ingredientes nativos e o jeito brasileiro de receber. Do litoral ao sertão, do norte ao sul.', 'Araá was born from the wish to bring together, in one place, the best of Brazil: the flavours of our regions, the strength of native ingredients and the Brazilian way of welcoming people. From the coast to the backlands, from north to south.'),
    sobreP2: T('Da manhã à noite, servimos café, brunch, almoço e jantar entre plantas tropicais, cerâmicas e a vista aberta da Baía de Guanabara. Uma cozinha contemporânea com memória de casa de família.', 'From morning to night we serve breakfast, brunch, lunch and dinner among tropical plants, ceramics and the open view of Guanabara Bay. Contemporary cooking with the memory of a family home.'),
    stat1: T('Ingredientes brasileiros', 'Brazilian ingredients'),
    stat2: T('Lugares', 'Seats'),
    stat3: T('Refeições por dia', 'Services a day'),
    menuKicker: T('Do litoral ao sertão', 'From the coast to the backlands'),
    menuTitulo: T('Cardápio', 'Menu'),
    menuLead: T('Releituras de receitas brasileiras com técnica contemporânea. O cardápio muda com a estação e com o que chega de melhor dos nossos produtores.', 'Brazilian recipes reimagined with contemporary technique. The menu changes with the season and with the best our producers bring in.'),
    legendaV: T('✳ Vegetariano', '✳ Vegetarian'),
    legendaVG: T('✳ Vegano', '✳ Vegan'),
    legendaCompartilhar: T('✳ Grelhados: individual ou para compartilhar', '✳ Grill: individual or to share'),
    menuCta: T('Abrir cardápio completo', 'Open the full menu'),
    espacoKicker: T('Nossos ambientes', 'Our rooms'),
    espacoTitulo: T('O espaço', 'The space'),
    espacoLead: T('Salão principal, jardins internos, varandas e bar: escolha onde quer sentar. Mesas na janela para quem quer o Cristo e a baía por companhia, jardins para quem quer o verde por perto.', 'Main dining room, indoor gardens, verandas and bar: choose where you want to sit. Window tables for those who want Christ the Redeemer and the bay as company, gardens for those who want green nearby.'),
    eventosKicker: T('Eventos', 'Events'),
    eventosTitulo: T('Seu evento no Pão de Açúcar', 'Your event at Sugarloaf'),
    eventosP1: T('Aniversários, casamentos, confraternizações e encontros corporativos com o espaço e a cozinha do Araá, no cenário mais icônico do Rio. A gente cuida do menu, do bar e da operação; a vista já vem pronta.', 'Birthdays, weddings, celebrations and corporate gatherings with the space and the kitchen of Araá, in the most iconic setting in Rio. We take care of the menu, the bar and the operation; the view comes ready.'),
    eventosItens,
    eventosCta: T('Falar sobre meu evento', 'Talk about my event'),
    reservasKicker: T('Reservas', 'Reservations'),
    reservasTitulo: T('Garanta sua mesa', 'Secure your table'),
    reservasLead: T('Aceitamos reservas pela plataforma oficial de agendamentos ou pelo WhatsApp. Lembre-se de que o acesso ao Morro da Urca é feito pelo bondinho.', 'We accept reservations through the official booking platform or on WhatsApp. Remember that access to Morro da Urca is by cable car.'),
    reservaCard1Titulo: T('Reserva online', 'Book online'),
    reservaCard1Texto: T('Escolha dia, horário e número de pessoas em poucos cliques. Confirmação imediata.', 'Choose date, time and party size in a few clicks. Instant confirmation.'),
    reservaCard1Cta: T('Reservar agora', 'Book now'),
    reservaCard2Titulo: T('WhatsApp', 'WhatsApp'),
    reservaCard2Texto: T('Grupos grandes, aniversários e pedidos especiais: fale direto com a nossa equipe.', 'Large groups, birthdays and special requests: talk directly to our team.'),
    reservaCard2Cta: T('Chamar no WhatsApp', 'Message us'),
    reservaCard3Titulo: T('Bilhete do bondinho', 'Cable car ticket'),
    reservaCard3Texto: T('O acesso ao restaurante é pelo Parque Bondinho. Compre seu bilhete antecipadamente e suba até o Morro da Urca.', 'Access to the restaurant is through Parque Bondinho. Buy your ticket in advance and ride up to Morro da Urca.'),
    reservaCard3Cta: T('Comprar bilhete', 'Buy ticket'),
    localKicker: T('Onde estamos', 'Where we are'),
    localTitulo: T('Morro da Urca, Rio de Janeiro', 'Morro da Urca, Rio de Janeiro'),
    enderecoLabel: T('Endereço', 'Address'),
    horarioLabel: T('Funcionamento', 'Opening hours'),
    horarios,
    horarioNota: T('Funcionamos todos os dias, acompanhando a operação do Parque Bondinho. Última entrada no parque: 18h30 (seg a qui) e 19h30 (sex a dom). Horários sujeitos a confirmação.', 'Open every day, following Parque Bondinho operating hours. Last park entry: 6:30pm (Mon–Thu) and 7:30pm (Fri–Sun). Times subject to confirmation.'),
    localCta1: T('Abrir no Google Maps', 'Open in Google Maps'),
    faqTitulo: T('Perguntas frequentes', 'Frequently asked questions'),
    faqs: faqData,
    footerNav: T('Navegar', 'Navigate'),
    footerContato: T('Contato', 'Contact'),
    footerHorario: T('Todos os dias, 8h30 às 20h (seg a qui) e até 21h (sex a dom).', 'Every day, 8:30am to 8pm (Mon–Thu) and until 9pm (Fri–Sun).'),
    footerCredito: T('Gastronomia ✳ Brasilidade', 'Gastronomy ✳ Brazilianness'),
    secoes,
    ambientes
  };
};
