export type Imovel = {
  id: string;
  slug: string;
  nome: string;
  incorporadora?: string;
  /** Marca curta usada em selos/CTAs (ex.: "Cyrela", "Tegra"). Cai para incorporadora. */
  marca?: string;
  /** Linha "Realização ..." exibida no hero (ex.: "Cyrela · Living · Leblon Realty"). */
  realizacaoLabel?: string;
  /** Imagem de fundo do hero mobile. */
  heroImageMobile?: string;
  bairro: string;
  cidade: string;
  estado: string;
  enderecoResumo?: string;
  precoInicial?: string;
  precoInicialNumerico?: number;
  sinalInicial?: string;
  parcelasIniciais?: string;
  materialPdfPath?: string;
  tipologias: string[];
  metragens?: string[];
  fichaTecnica?: {
    label: string;
    value: string;
  }[];
  plantas?: {
    titulo: string;
    metragem: string;
    descricao: string;
    imagem?: string;
    /** Sobrescrevem os textos padrão por índice do BlocoTipologias. */
    decisao?: string;
    perfil?: string;
    cuidado?: string;
  }[];
  diferenciais: string[];
  conceito?: {
    tagline: string;
    frase: string;
    titulo: string;
    texto: string;
    textoInvestidor?: string;
    imagem?: string;
    imagemAlt?: string;
    pilares: { titulo: string; texto: string }[];
  };
  condicoesResumo?: {
    label: string;
    value: string;
    subtitle?: string;
    icon: string;
  }[];
  torres?: {
    destaque: string;
    nome: string;
    tipologia: string;
  }[];
  /** Cabeçalho e métricas do BlocoLazer. Cai no texto padrão quando ausente. */
  lazerHeader?: {
    titulo: string;
    texto?: string;
    metricas?: { valor: string; label: string }[];
  };
  lazerCategorias?: {
    titulo: string;
    resumo: string;
    itens: string[];
    imagem?: string;
    alt?: string;
  }[];
  /** Cabeçalho do BlocoServicos. Cai no texto padrão quando ausente. */
  servicosHeader?: {
    titulo: string;
    texto?: string;
  };
  servicos?: {
    titulo: string;
    descricao: string;
    icon: string;
  }[];
  preferenceLiving?: {
    titulo: string;
    texto: string;
    opcoes: string[];
    beneficios: { titulo: string; texto: string }[];
  };
  incorporadores?: {
    nome: string;
    descricao: string;
    selo: string;
  }[];
  descricaoCurta: string;
  heroResumo?: string;
  descricaoLonga: string;
  publicoIdeal?: string[];
  argumentosComerciais?: string[];
  objecoes?: string[];
  imagens: {
    src: string;
    alt: string;
    destaque?: boolean;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalPath: string;
    ogTitle: string;
    ogDescription: string;
    ogImage?: string;
  };
  faq: {
    pergunta: string;
    resposta: string;
  }[];
  whatsapp: {
    numero: string;
    mensagem: string;
  };
  tracking: {
    formEventName: string;
    whatsappEventName: string;
    pageViewEventName: string;
  };
  localizacao: {
    titulo: string;
    descricao: string;
    imagem?: string;
    imagemAlt?: string;
    pontos: string[];
    categorias?: {
      titulo: string;
      icon: string;
      itens: { nome: string; tempo: string }[];
    }[];
    mapsUrl: string;
  };
  condicoesAviso: string;
};

export const imoveis: Imovel[] = [
  {
    id: "we-barra",
    slug: "we-barra-by-living-barra-da-tijuca",
    nome: "WE Barra by Living / Cyrela",
    incorporadora: "Living",
    marca: "Cyrela",
    realizacaoLabel: "Cyrela · Living · Leblon Realty",
    bairro: "Barra da Tijuca",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    enderecoResumo: "Av. das Américas com Salvador Allende",
    precoInicial: "2 quartos a partir de R$ 600 mil",
    precoInicialNumerico: 600000,
    sinalInicial: "a partir de R$ 45 mil",
    parcelasIniciais: "a partir de R$ 2.500",
    materialPdfPath: "/materiais/we-barra-apresentacao.pdf",
    tipologias: [
      "Apartamentos de 2 quartos",
      "Apartamentos de 3 quartos",
      "Apartamentos de 4 quartos",
      "Gardens",
      "Coberturas lineares",
      "Coberturas duplex"
    ],
    metragens: [
      "2 quartos: 63m² a 71m²",
      "3 quartos: 83m² a 84m²",
      "4 quartos: 99m² a 118m²",
      "Gardens: 95m² a 184m²",
      "Coberturas duplex: 125m² a 199m²",
      "Coberturas lineares: 142m² a 232m²"
    ],
    fichaTecnica: [
      {
        label: "Endereço",
        value: "Av. das Américas com Salvador Allende, Barra da Tijuca"
      },
      {
        label: "Unidades",
        value: "605 unidades em 6 torres"
      },
      {
        label: "Blocos",
        value: "6 blocos"
      },
      {
        label: "Tipologias",
        value: "Coberturas, Garden e aptos tipo de 2, 3 e 4 quartos"
      },
      {
        label: "Terreno",
        value: "Mais de 25 mil m²"
      },
      {
        label: "Lazer",
        value: "Mais de 5 mil m²"
      },
      {
        label: "Vagas",
        value: "683 vagas de garagem"
      },
      {
        label: "Elevadores",
        value: "3 elevadores por torre"
      },
      {
        label: "Entrega prevista",
        value: "Maio/2029"
      },
      {
        label: "Arquitetura",
        value: "SGAA - Sergio Gattass Arquitetos Associados"
      },
      {
        label: "Paisagismo",
        value: "Takeda Design"
      },
      {
        label: "Incorporação",
        value: "Living Residencial (Cyrela) e Leblon Realty"
      }
    ],
    plantas: [
      {
        titulo: "2 quartos",
        metragem: "63m² e 70m²",
        descricao: "Opção de ticket mais acessível, boa para liquidez, locação e entrada em lançamento na Barra.",
        imagem: "/images/we-barra-planta-70m-material.jpg"
      },
      {
        titulo: "3 quartos",
        metragem: "83m²",
        descricao: "Equilíbrio entre metragem, procura familiar e potencial de revenda para quem quer morar ou investir.",
        imagem: "/images/we-barra-planta-83m-material.jpg"
      },
      {
        titulo: "4 quartos",
        metragem: "100m² e 118m²",
        descricao: "Plantas maiores para famílias, com mais conforto e maior valorização absoluta quando bem posicionadas.",
        imagem: "/images/we-barra-planta-100m-material.jpg"
      },
      {
        titulo: "Garden",
        metragem: "95m² a 184m²",
        descricao: "Produto de maior escassez com área privativa no térreo, ideal para quem busca diferenciação e espaço externo.",
        imagem: "/images/we-barra-cobertura-142m-material.jpg"
      },
      {
        titulo: "Cob. Duplex",
        metragem: "125m² a 199m²",
        descricao: "Cobertura em dois andares com terraço, privacidade e posicionamento de alto padrão na Barra da Tijuca.",
        imagem: "/images/we-barra-cobertura-142m-material.jpg"
      },
      {
        titulo: "Cob. Linear",
        metragem: "142m² a 232m²",
        descricao: "Maior metragem do empreendimento, com vista ampla, área externa e produto de altíssima escassez.",
        imagem: "/images/we-barra-cobertura-142m-material.jpg"
      }
    ],
    diferenciais: [
      "Mais de 5 mil m² de lazer",
      "Terreno amplo de mais de 25 mil m²",
      "Lazer completo com piscinas, academia, gourmet, festas, coworking e brinquedoteca",
      "Sky Lounge/rooftop e áreas externas como diferenciais de desejo",
      "Plantas de 2 a 4 quartos com suíte, gardens e coberturas"
    ],
    conceito: {
      tagline: "Inspirado nos hotéis W",
      frase: "Morar como quem viaja o mundo",
      titulo: "Design de hotel, conforto para morar",
      texto:
        "Inserido em um dos terrenos mais cobiçados da Barra da Tijuca, com uma localização estratégica, surge o WE BARRA by Living da Cyrela, uma solução definitiva para quem busca viver com conforto e praticidade ou para investir com inteligência. No encontro da Avenida das Américas com a Salvador Allende, o projeto centraliza o essencial: mobilidade privilegiada, conveniência absoluta com sua amplitude de serviços e itens de lazer, além da proximidade com os grandes polos comerciais e a orla da Barra da Tijuca.",
      textoInvestidor:
        "Para quem escolhe investir: aposte em um ativo de alto desempenho. WE Barra by Living da Cyrela oferece localização estratégica e a disponibilidade de plantas com alta demanda.",
      pilares: [
        {
          titulo: "Design hoteleiro",
          texto:
            "Ambientes assinados, inspirados na sofisticação dos grandes hotéis do mundo."
        },
        {
          titulo: "Bem-estar como destino",
          texto:
            "Mais de 5.254 m² de lazer, wellness e SPA para viver bem todos os dias."
        },
        {
          titulo: "Assinatura Cyrela",
          texto:
            "A engenharia de alto padrão de quem constrói há mais de 60 anos."
        }
      ]
    },
    torres: [
      { destaque: "2 quartos", nome: "Ibiza e Miami", tipologia: "63m² a 71m² - gardens e coberturas" },
      { destaque: "3 quartos", nome: "Aspen e Roma", tipologia: "83m² a 84m² - gardens e coberturas" },
      { destaque: "4 quartos", nome: "Maldivas e Dubai", tipologia: "99m² a 118m² - gardens e coberturas" }
    ],
    lazerCategorias: [
      {
        titulo: "Piscinas & Pool House",
        resumo: "O coracao do lazer, do nado serio ao banho de sol.",
        itens: [
          "Piscina adulto com raia de 25m",
          "Deck molhado",
          "Piscina infantil",
          "Solario das piscinas",
          "Pool House",
          "Pool Bar com consumacao na taxa"
        ],
        imagem: "/images/we-barra-piscina-resort.jpg",
        alt: "Piscina com raia de 25m e area de lazer do WE Barra by Living"
      },
      {
        titulo: "Wellness & SPA",
        resumo: "Um andar inteiro dedicado ao seu bem-estar.",
        itens: [
          "Fitness equipado",
          "Wellness SPA",
          "Wellness Massage",
          "Sauna umida",
          "Sala de Pilates",
          "Espaco Yoga",
          "Splan - espelho de treino inteligente"
        ],
        imagem: "/images/we-barra-fitness.jpg",
        alt: "Academia e espaco fitness do WE Barra by Living"
      },
      {
        titulo: "Sky & Rooftop",
        resumo: "No alto, a vista que so um endereco assim oferece.",
        itens: [
          "Sky Lounge",
          "Sky Gourmet",
          "Rooftop no 11º pavimento",
          "Lounges com vista para a Barra"
        ],
        imagem: "/images/we-barra-sky-rooftop.jpg",
        alt: "Sky Lounge no rooftop do WE Barra by Living ao entardecer"
      },
      {
        titulo: "Social & Gourmet",
        resumo: "Espacos pensados para receber e celebrar.",
        itens: [
          "Salao de Festas",
          "Espaco Gourmet",
          "Churrasqueira Gourmet",
          "Lounge WE",
          "Space Family",
          "Jogos Adulto",
          "Espaco Games"
        ],
        imagem: "/images/we-barra-gourmet.jpg",
        alt: "Espaco gourmet do WE Barra by Living"
      },
      {
        titulo: "Kids & Esporte",
        resumo: "Para a garotada brincar e gastar energia com seguranca.",
        itens: [
          "Brinquedoteca",
          "Playground",
          "Quadra recreativa",
          "Espaco Games"
        ],
        imagem: "/images/we-barra-brinquedoteca.jpg",
        alt: "Brinquedoteca do WE Barra by Living"
      },
      {
        titulo: "Trabalho & Criacao",
        resumo: "Home office sem sair de casa, com estrutura profissional.",
        itens: ["Coworking exclusivo para moradores", "Espaco Blogger"],
        imagem: "/images/we-barra-coworking.jpg",
        alt: "Coworking do WE Barra by Living"
      }
    ],
    servicos: [
      {
        titulo: "Shuttle exclusivo",
        descricao:
          "Transporte exclusivo dos moradores até a estação de metrô do Jardim Oceânico, com paradas intermediárias.",
        icon: "bus"
      },
      {
        titulo: "Balsa para a praia",
        descricao:
          "Balsas que atravessam a Lagoa de Marapendi levando moradores direto a Praia da Barra.",
        icon: "ship"
      },
      {
        titulo: "Prancharia & lava-pes",
        descricao:
          "Espaço para guarda de pranchas e higienização dos pés - feito para quem vive o mar.",
        icon: "waves"
      },
      {
        titulo: "Central de Facilidades",
        descricao:
          "Concierge que auxilia na contratação de serviços: arrumação, passadeira, assistência técnica e mais.",
        icon: "concierge"
      },
      {
        titulo: "Central de Encomendas",
        descricao:
          "Recebimento e guarda temporária de encomendas dos moradores com segurança.",
        icon: "package"
      },
      {
        titulo: "Pet Care, Minimarket & Oficina",
        descricao:
          "Conveniências no subsolo para resolver o dia a dia sem precisar sair de casa.",
        icon: "store"
      }
    ],
    preferenceLiving: {
      titulo: "Preference Living: seu apê do seu jeito, ainda na planta",
      texto:
        "Personalize seu apartamento antes da entrega das chaves, direto com a construtora. Mude a planta, integre ambientes e escolha acabamentos com pagamento parcelado e garantia Living.",
      opcoes: [
        "Sala ampliada + cozinha integrada",
        "Closet e despensa",
        "Modificações de planta e acabamentos",
        "Infra para ar-condicionado, smart home e Wi-Fi"
      ],
      beneficios: [
        {
          titulo: "Exclusividade",
          texto:
            "Escolha a melhor configuração do seu apartamento direto com a construtora."
        },
        {
          titulo: "Sem obras depois",
          texto:
            "Evite reformas após a mudança. Mais tranquilidade e rapidez para morar."
        },
        {
          titulo: "Pague parcelado",
          texto:
            "Parcele a personalização conforme seu planejamento, com garantia Living."
        }
      ]
    },
    incorporadores: [
      {
        nome: "Cyrela",
        descricao:
          "Há mais de 60 anos construindo com engenharia de alto padrão, ética e transparência. Centenas de milhares de famílias em lares Cyrela.",
        selo: "60+ anos"
      },
      {
        nome: "Living",
        descricao:
          "A marca do Grupo Cyrela especialista em construir bem-estar, onde cada solução tem o viver bem como essência.",
        selo: "Grupo Cyrela"
      },
      {
        nome: "Leblon Realty",
        descricao:
          "Gestora especializada no setor imobiliário, com sócios que somam mais de 30 anos à frente de grandes projetos.",
        selo: "30+ anos"
      }
    ],
    descricaoCurta:
      "Lançamento Living Cyrela na Barra da Tijuca, inspirado nos hotéis W: 605 unidades em 6 torres, 2 a 4 quartos, gardens e coberturas, com mais de 5 mil m² de lazer de resort.",
    heroResumo:
      "Apartamentos de 2 a 4 quartos, gardens e coberturas na Av. das Américas, no coração da Barra da Tijuca.",
    descricaoLonga:
      "Inspirado nos hotéis internacionais da rede W, o WE Barra by Living / Cyrela fica na Barra da Tijuca, no encontro da Av. das Américas com Salvador Allende. São 605 unidades em 6 torres - Aspen, Ibiza, Miami, Roma, Maldivas e Dubai - com apartamentos de 2, 3 e 4 quartos, gardens e coberturas, além de 5.254 m² de lazer com piscina de raia de 25m, SPA, Sky Lounge e serviços como shuttle ao metrô e balsa para a praia. Fale com a especialista para receber condições, plantas, unidades disponíveis e simulação de fluxo.",
    publicoIdeal: [
      "Compradores que desejam morar na Barra da Tijuca",
      "Famílias avaliando apartamentos novos de 2, 3 ou 4 quartos",
      "Investidores buscando lançamentos com apelo de liquidez",
      "Clientes que precisam comparar entrada, parcelas e tipologias"
    ],
    argumentosComerciais: [
      "2 quartos a partir de R$ 600 mil, sujeito a confirmação",
      "Sinal comunicado a partir de R$ 40 mil",
      "Mensais comunicadas a partir de R$ 2.000 durante a obra",
      "Janela de lançamento com maior poder de escolha de unidade",
      "Análise de tipologia, andar, coluna, vista e orientação",
      "Tabela, ficha técnica, imagens e plantas para comparação",
      "Simulação para comparar entrada, parcelas, INCC e saldo"
    ],
    objecoes: [
      "Valores e disponibilidade podem mudar sem aviso prévio.",
      "A condição final depende da unidade, tipologia, fluxo de pagamento e aprovação comercial.",
      "Imagens e plantas são prévias, referenciais e podem ser alteradas a critério da incorporadora."
    ],
    imagens: [
      {
        src: "/images/we-barra-pool-house-material.jpg",
        alt: "Imagem prévia da pool house do WE Barra by Living com vista para piscina",
        destaque: true
      },
      {
        src: "/images/we-barra-pool-house-bar-material.jpg",
        alt: "Imagem prévia da pool house com bar e vista para o lazer do WE Barra by Living"
      },
      {
        src: "/images/we-barra-salao-festas-material.jpg",
        alt: "Imagem prévia do salão de festas do WE Barra by Living"
      },
      {
        src: "/images/we-barra-sky-lounge-material.jpg",
        alt: "Imagem prévia do sky lounge do WE Barra by Living"
      },
      {
        src: "/images/we-barra-piscina-material.jpg",
        alt: "Imagem prévia da piscina e área de lazer do WE Barra by Living"
      },
      {
        src: "/images/we-barra-ficha-tecnica-material.jpg",
        alt: "Ficha técnica visual do WE Barra by Living"
      },
      {
        src: "/images/we-barra-planta-70m-material.jpg",
        alt: "Planta prévia de 2 quartos com 70m² do WE Barra by Living"
      }
    ],
    seo: {
      title:
        "WE Barra by Living | Lançamento Cyrela inspirado nos hotéis W na Barra",
      description:
        "WE Barra by Living, lançamento Cyrela inspirado nos hotéis W: 605 unidades em 6 torres, 2 a 4 quartos, gardens e coberturas, com lazer de resort de 5 mil m², SPA e Sky Lounge. 2 quartos a partir de R$ 600 mil. Receba tabela, plantas e simulação.",
      keywords: [
        "WE Barra",
        "WE Barra by Living",
        "WE Barra Living",
        "WE Barra Cyrela",
        "WE Barra Living Cyrela",
        "WE Barra lancamento",
        "WE Barra preco",
        "WE Barra tabela",
        "WE Barra valores",
        "WE Barra plantas",
        "WE Barra condicoes",
        "WE Barra lazer",
        "WE Barra Sky Lounge",
        "WE Barra apartamento hotel",
        "apartamento estilo hotel Barra da Tijuca",
        "apartamento com lazer de resort Barra da Tijuca",
        "apartamento na Barra da Tijuca",
        "lancamento Barra da Tijuca",
        "lancamento Cyrela Barra da Tijuca",
        "apartamento novo Barra da Tijuca",
        "apartamento na planta Barra da Tijuca",
        "apartamento Avenida das Americas",
        "apartamento 2 quartos Barra da Tijuca",
        "apartamento 3 quartos Barra da Tijuca",
        "apartamento 4 quartos Barra da Tijuca",
        "cobertura Barra da Tijuca",
        "garden Barra da Tijuca",
        "apartamento Barra a partir de 600 mil"
      ],
      canonicalPath: "/lancamentos/we-barra-by-living-barra-da-tijuca",
      ogTitle:
        "WE Barra by Living: tabela, plantas e simulação na Barra",
      ogDescription:
        "Compare tabela, plantas e fluxo do WE Barra: referência de 2 quartos a partir de R$ 600 mil, sinal a partir de R$ 40 mil e mensais a partir de R$ 2.000.",
      ogImage: "/images/we-barra-pool-house-material.jpg"
    },
    faq: [
      {
        pergunta: "Consigo comprar com sinal a partir de R$ 40 mil?",
        resposta:
          "Esse sinal é uma referência comunicada inicialmente. O valor final depende da unidade, tipologia, campanha, tabela vigente e aprovação comercial."
      },
      {
        pergunta: "Como funciona o fluxo durante a obra?",
        resposta:
          "A simulação considera entrada, mensais, possíveis reforços, correção por índice de obra e saldo na entrega ou financiamento."
      },
      {
        pergunta: "Quais tipologias estão previstas?",
        resposta:
          "O projeto comunica apartamentos de 2, 3 e 4 quartos, além de gardens, coberturas duplex e coberturas lineares. Metragens e disponibilidade precisam ser confirmadas."
      },
      {
        pergunta: "Onde fica o WE Barra by Living?",
        resposta:
          "O empreendimento fica na Barra da Tijuca, no encontro da Av. das Américas com Salvador Allende."
      },
      {
        pergunta: "Consigo escolher andar, coluna e posição?",
        resposta:
          "A escolha depende da disponibilidade da tabela vigente. O atendimento compara andar, coluna, vista, orientação e fluxo antes da reserva."
      },
      {
        pergunta: "O WE Barra é melhor para morar ou investir?",
        resposta:
          "Pode atender os dois perfis. Para morar, pesam lazer, acesso e planta. Para investir, entram liquidez, demanda, ticket e facilidade de revenda."
      },
      {
        pergunta: "Os valores comunicados sao finais?",
        resposta:
          "Não. Preços, entrada, parcelas, disponibilidade, previsão de entrega e condições precisam ser confirmados antes de qualquer decisão."
      },
      {
        pergunta: "Como recebo tabela, plantas e simulação?",
        resposta:
          "Preencha o formulário para receber material do empreendimento e uma simulação de fluxo pelo WhatsApp."
      }
    ],
    whatsapp: {
      numero: "5521987715816",
      mensagem:
        "Olá, vi a página do WE Barra by Living e gostaria de receber tabela, plantas e simulação para entender sinal, mensais e unidades disponíveis."
    },
    tracking: {
      formEventName: "form_submit_we_barra",
      whatsappEventName: "whatsapp_click_we_barra",
      pageViewEventName: "page_view_we_barra"
    },
    localizacao: {
      titulo: "Av. das Américas com conexão estratégica na Barra",
      descricao:
        "O empreendimento fica na Barra da Tijuca, no encontro da Av. das Américas com Salvador Allende, localização privilegiada, a 5 minutos da praia da Reserva e próximo a shoppings como Rio Design Barra e Vogue Square. A região tem alta demanda por apartamentos novos e plantas versáteis, o qual o WE Barra by Living tem exclusividade em oferecer.",
      pontos: [
        "Av. das Américas como eixo de acesso e visibilidade",
        "Conexão com Salvador Allende, Recreio e Barra",
        "Entorno com comércio, serviços, BRT e polos de conveniência"
      ],
      categorias: [
        {
          titulo: "Mobilidade",
          icon: "navigation",
          itens: [
            { nome: "Av. das Américas", tempo: "1 min" },
            { nome: "Estação BRT", tempo: "1 min" },
            { nome: "Av. Lúcio Costa", tempo: "8 min" },
            { nome: "Metrô Jardim Oceânico", tempo: "16 min" }
          ]
        },
        {
          titulo: "Praias & Lazer",
          icon: "waves",
          itens: [
            { nome: "Campo de golfe", tempo: "5 min" },
            { nome: "Bosque da Barra", tempo: "8 min" },
            { nome: "Praia da Reserva", tempo: "9 min" },
            { nome: "Praia da Barra", tempo: "10 min" }
          ]
        },
        {
          titulo: "Compras",
          icon: "shopping",
          itens: [
            { nome: "Supermarket", tempo: "2 min" },
            { nome: "Hortifruti", tempo: "3 min" },
            { nome: "Rio Design Barra", tempo: "8 min" },
            { nome: "BarraShopping", tempo: "10 min" }
          ]
        },
        {
          titulo: "Educação",
          icon: "school",
          itens: [
            { nome: "Pensi", tempo: "5 min" },
            { nome: "Escola Parque", tempo: "5 min" },
            { nome: "Maple Bear", tempo: "6 min" },
            { nome: "Colégio Santo Agostinho", tempo: "10 min" }
          ]
        },
        {
          titulo: "Saude",
          icon: "health",
          itens: [
            { nome: "Hospital Rio Barra", tempo: "9 min" },
            { nome: "Barra D'Or", tempo: "12 min" },
            { nome: "Hospital Vitória", tempo: "12 min" }
          ]
        },
        {
          titulo: "Academias",
          icon: "dumbbell",
          itens: [
            { nome: "Bodytech", tempo: "4 min" },
            { nome: "Smart Fit", tempo: "6 min" },
            { nome: "DNA Experience", tempo: "6 min" }
          ]
        }
      ],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Av.+das+Americas+12800+Barra+da+Tijuca+Rio+de+Janeiro"
    },
    condicoesAviso:
      "Imagens, plantas, valores e disponibilidade estão sujeitos a confirmação."
  },
  {
    id: "tegra-barra",
    slug: "tegra-barra-da-tijuca",
    nome: "KRONOS by Tegra",
    incorporadora: "Tegra",
    marca: "Kronos",
    realizacaoLabel: "Tegra Incorporadora + Ager",
    heroImageMobile: "/images/tegra-kronos-hero-praia.jpg",
    bairro: "Barra da Tijuca",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    enderecoResumo: "Av. Afonso Arinos de Melo Franco, 425 — Barra da Tijuca, ao lado da ABM",
    precoInicial: "Sob consulta",
    tipologias: [
      "Apartamentos de 2 quartos",
      "Apartamentos de 3 quartos",
      "Apartamentos de 4 quartos",
      "Up Garden com piscina privativa",
      "Coberturas"
    ],
    fichaTecnica: [
      {
        label: "Endereço",
        value: "Av. Afonso Arinos de Melo Franco, 425 — Barra da Tijuca, ao lado da ABM"
      },
      {
        label: "Localização",
        value: "A poucos passos da Praia da Barra da Tijuca, Posto 5"
      },
      {
        label: "Unidades",
        value: "194 unidades em edifício único de 26 pavimentos"
      },
      {
        label: "Tipologias",
        value: "2, 3 e 4 quartos, Up Garden com piscina privativa e coberturas"
      },
      {
        label: "2 quartos (pavimento tipo)",
        value: "77 m² (colunas 06/07) e 81 m² (colunas 05/08)"
      },
      {
        label: "3 suítes (pavimento tipo)",
        value: "120 m² (colunas 03/04)"
      },
      {
        label: "4 suítes (pavimento tipo)",
        value: "147 m² (colunas 01/02)"
      },
      {
        label: "Up Garden 2 quartos",
        value: "91 m² (colunas 05/08) e 107 m² (colunas 06/07), com piscina privativa"
      },
      {
        label: "Up Garden 3 suítes",
        value: "132 m² (colunas 03/04), com piscina privativa"
      },
      {
        label: "Up Garden 4 suítes",
        value: "167 m² (colunas 01/02), com piscina privativa"
      },
      {
        label: "Cobertura linear (3 suítes)",
        value: "174 m²"
      },
      {
        label: "Coberturas duplex (4 suítes)",
        value: "247 m² e 301 m²"
      },
      {
        label: "Acabamentos entregues",
        value:
          "Piso porcelanato 80x80cm na sala, cozinha e varanda, piso vinílico nos quartos, água quente nas pias e chuveiros, infra de ar condicionado na sala e quartos, fechadura eletrônica e bancada gourmet com churrasqueira elétrica na varanda de cada apartamento"
      },
      {
        label: "Lazer & esporte",
        value:
          "Spa wellness com piscina interna, sauna e sala de massagem, piscina externa com bar molhado, academia com varanda fitness, yoga, brinquedoteca, pet place, praça com fonte, quadra de areia, bosque privativo com redário e pomar, salão de festas e salão de jogos, espaço gourmet com churrasqueira, mercadinho de conveniência, sala de reunião e rooftop exclusivo com telão para eventos esportivos e serviços pay-per-use"
      },
      {
        label: "Incorporação",
        value: "Tegra Incorporadora + Ager"
      },
      {
        label: "Situação",
        value:
          "Breve lançamento — convenção em 06/08 e previsão de lançamento em agosto/2026, valores e disponibilidade sob consulta"
      }
    ],
    plantas: [
      {
        titulo: "2 quartos | 77 m²",
        metragem: "77 m² (colunas 06/07)",
        descricao:
          "Menor ticket do empreendimento, com boa liquidez e apelo para morar ou investir a poucos passos da praia.",
        imagem: "/images/tegra-kronos-planta-2q-77.jpg"
      },
      {
        titulo: "2 quartos | 81 m²",
        metragem: "81 m² (colunas 05/08)",
        descricao:
          "Duas suítes com metragem generosa, sala integrada à cozinha e varanda com bancada gourmet.",
        imagem: "/images/tegra-kronos-planta-2q-81.jpg"
      },
      {
        titulo: "3 suítes",
        metragem: "120 m² (colunas 03/04)",
        descricao:
          "Planta familiar com 3 suítes, sendo 2 canadenses, lavabo e equilíbrio entre metragem, conforto e potencial de valorização na Barra.",
        imagem: "/images/tegra-kronos-planta-3suites-120.jpg"
      },
      {
        titulo: "4 suítes",
        metragem: "147 m² (colunas 01/02)",
        descricao:
          "Mais espaço e privacidade para famílias, com 4 suítes (2 canadenses) e varanda exclusiva para a suíte master.",
        imagem: "/images/tegra-kronos-planta-4suites-147.jpg"
      },
      {
        titulo: "Up Garden 2 quartos | 91 m²",
        metragem: "91 m² (colunas 05/08)",
        descricao:
          "Garden com piscina privativa em fibra, bancada gourmet e área externa só sua no térreo do KRONOS.",
        imagem: "/images/tegra-kronos-planta-upgarden-2q-91.jpg"
      },
      {
        titulo: "Up Garden 2 quartos | 107 m²",
        metragem: "107 m² (colunas 06/07)",
        descricao:
          "Garden com piscina privativa em fibra, mais metragem e varanda ampla com bancada gourmet.",
        imagem: "/images/tegra-kronos-planta-upgarden-2q-107.jpg"
      },
      {
        titulo: "Up Garden 3 suítes",
        metragem: "132 m² (colunas 03/04)",
        descricao:
          "3 suítes com piscina privativa em fibra, terraço gourmet e opção de sala ampliada.",
        imagem: "/images/tegra-kronos-planta-upgarden-3suites-132.jpg"
      },
      {
        titulo: "Up Garden 4 suítes",
        metragem: "167 m² (colunas 01/02)",
        descricao:
          "4 suítes (2 canadenses) com piscina privativa em fibra e varanda exclusiva para a suíte master.",
        imagem: "/images/tegra-kronos-planta-upgarden-4suites-167.jpg"
      },
      {
        titulo: "Cobertura linear",
        metragem: "174 m² (3 suítes)",
        descricao:
          "Cobertura em um pavimento, com piscina privativa em fibra, terraço gourmet e vista para a Barra da Tijuca.",
        imagem: "/images/tegra-kronos-planta-cobertura-linear-174.jpg"
      },
      {
        titulo: "Cobertura duplex | 247 m²",
        metragem: "247 m² (4 suítes, sendo 2 canadenses)",
        descricao:
          "Duplex com piscina privativa, sala íntima com possibilidade de copa e acesso aos elevadores pelos dois pavimentos.",
        imagem: "/images/tegra-kronos-planta-cobertura-duplex-247.jpg"
      },
      {
        titulo: "Cobertura duplex | 301 m²",
        metragem: "301 m² (4 suítes completas)",
        descricao:
          "A maior planta do KRONOS: duplex com piscina privativa, terraço gourmet, acesso aos elevadores pelos dois pavimentos e altíssima exclusividade.",
        imagem: "/images/tegra-kronos-planta-cobertura-duplex-301.jpg"
      }
    ],
    diferenciais: [
      "A poucos passos da Praia da Barra da Tijuca, Posto 5",
      "Av. Afonso Arinos de Melo Franco, 425, ao lado da ABM",
      "Unidades Up Garden com piscina privativa no térreo",
      "Cada apartamento já entregue com bancada gourmet e churrasqueira elétrica na varanda",
      "Fechadura eletrônica, piso porcelanato 80x80cm e piso vinílico nos quartos já entregues",
      "Rooftop exclusivo com vista para a Barra da Tijuca",
      "Spa wellness com piscina interna, sauna e sala de massagem, inspirado nas Blue Zones da Grécia",
      "Piscina externa, quadra de areia, praça com fonte e bosque privativo com redário e pomar",
      "Mercadinho de conveniência, pet place e sala de reunião no próprio condomínio",
      "Salão de festas, salão de jogos e rooftop com telão para eventos esportivos",
      "Edifício único de 26 pavimentos, 194 unidades",
      "2 a 4 quartos, Up Garden com piscina privativa e coberturas",
      "Assinatura Tegra Incorporadora + Ager"
    ],
    conceito: {
      tagline: "Inspirado nas Blue Zones da Grécia",
      frase: "A poucos passos da praia da Barra, no Posto 5",
      titulo: "KRONOS by Tegra: bem-estar e conexão com a natureza",
      texto:
        "Na esquina da Av. Dulcídio Cardoso com Afonso Arinos, ao lado da ABM e a poucos passos da praia do Posto 5, o KRONOS by Tegra chega inspirado nas Blue Zones da Grécia — pensado para proporcionar bem-estar, qualidade de vida e conexão com a natureza em um dos endereços mais desejados da Barra. São 194 unidades em um edifício único de 26 pavimentos, com apartamentos de 2 a 4 quartos, gardens e coberturas, e lazer completo no térreo e no rooftop.",
      textoInvestidor:
        "Para quem investe: um endereço de escassez ao lado da ABM, com a assinatura Tegra Incorporadora + Ager e tipologias de 2 a 4 quartos que combinam liquidez, demanda e valorização na Barra da Tijuca.",
      imagem: "/images/tegra-kronos-fachada.jpg",
      imagemAlt:
        "Fachada iluminada do KRONOS by Tegra ao entardecer, edifício único de 26 pavimentos na Barra da Tijuca",
      pilares: [
        {
          titulo: "Praia e natureza",
          texto:
            "A poucos passos do Posto 5 e ao lado das áreas verdes da ABM, para viver a Barra com o mar por perto."
        },
        {
          titulo: "Inspirado nas Blue Zones",
          texto:
            "Spa wellness com piscina interna e sauna, piscina externa, praça com fonte e rooftop exclusivo, pensados para bem-estar e longevidade."
        },
        {
          titulo: "Assinatura Tegra + Ager",
          texto:
            "Edifício único de 26 pavimentos, 194 unidades, com a solidez da Tegra Incorporadora e da Ager."
        }
      ]
    },
    condicoesResumo: [
      { label: "Tipologias", value: "2 a 4 quartos, Up Garden + coberturas", icon: "chart" },
      { label: "Metragens", value: "77 a 301 m²", subtitle: "2 quartos a coberturas", icon: "layout" },
      { label: "Lazer & esporte", value: "Térreo e rooftop, estilo Blue Zones", icon: "check" },
      { label: "Situação", value: "Breve lançamento — agosto/2026", icon: "clock" }
    ],
    lazerHeader: {
      titulo: "Lazer completo, inspirado nas Blue Zones da Grécia",
      texto:
        "Do spa wellness ao rooftop, passando pela praça com fonte e o bosque privativo: o KRONOS reúne bem-estar, esporte e convivência no térreo e no topo do edifício.",
      metricas: [
        { valor: "26", label: "pavimentos" },
        { valor: "194", label: "unidades" },
        { valor: "2", label: "andares de lazer" }
      ]
    },
    lazerCategorias: [
      {
        titulo: "Spa Wellness",
        resumo: "Inspirado nas Blue Zones da Grécia, para bem-estar e longevidade.",
        itens: [
          "Piscina interna aquecida",
          "Sauna seca e úmida",
          "Sala de massagem",
          "Ambientação em pedra, estilo grego"
        ],
        imagem: "/images/tegra-kronos-massagem.jpg",
        alt: "Sala de massagem do spa wellness do KRONOS by Tegra"
      },
      {
        titulo: "Piscina & Solário",
        resumo: "Piscina externa cercada por vegetação, com bar molhado e deck.",
        itens: ["Piscina externa", "Bar molhado", "Deck e solário", "Espreguiçadeiras"],
        imagem: "/images/tegra-kronos-bar-piscina.jpg",
        alt: "Bar molhado na piscina externa do KRONOS by Tegra"
      },
      {
        titulo: "Praça, Esporte & Bosque",
        resumo: "Áreas verdes e de esporte que cercam o edifício.",
        itens: ["Praça com fonte", "Quadra de areia", "Bosque privativo com redário", "Pomar"],
        imagem: "/images/tegra-kronos-praca-fonte.jpg",
        alt: "Praça com fonte e lounge do KRONOS by Tegra"
      },
      {
        titulo: "Kids & Pet",
        resumo: "Espaços pensados para crianças e para os pets da família.",
        itens: ["Brinquedoteca", "Playground", "Pet place"],
        imagem: "/images/tegra-kronos-petplace.jpg",
        alt: "Pet place do KRONOS by Tegra"
      },
      {
        titulo: "Salão de Festas & Jogos",
        resumo: "Espaços cobertos para reunir família e amigos, em qualquer estação.",
        itens: [
          "Salão de festas com espaço gourmet",
          "Salão de jogos com sinuca e telão",
          "Varanda de festas com vista para a Barra"
        ],
        imagem: "/images/tegra-kronos-salao-festas.jpg",
        alt: "Salão de festas do KRONOS by Tegra"
      },
      {
        titulo: "Gourmet & Convivência",
        resumo: "Espaços para receber, comprar o essencial e curtir o rooftop.",
        itens: [
          "Lounge e espaço gourmet com churrasqueira",
          "Mercadinho de conveniência",
          "Rooftop exclusivo com telão para eventos esportivos e serviços pay-per-use"
        ],
        imagem: "/images/tegra-kronos-rooftop-telao.jpg",
        alt: "Rooftop com telão e piscina do KRONOS by Tegra ao entardecer"
      },
      {
        titulo: "Fitness & Trabalho",
        resumo: "Estrutura para treinar e trabalhar sem sair do condomínio.",
        itens: ["Academia completa com varanda fitness", "Espaço de yoga", "Sala de reunião"],
        imagem: "/images/tegra-kronos-varanda-academia.jpg",
        alt: "Varanda fitness da academia do KRONOS by Tegra"
      }
    ],
    servicosHeader: {
      titulo: "Conveniência no dia a dia",
      texto:
        "Mercadinho, sala de reunião e rooftop com serviços pay-per-use: o essencial do dia a dia, sem sair do condomínio."
    },
    servicos: [
      {
        titulo: "Mercadinho de conveniência",
        descricao: "Mercadinho dentro do condomínio para resolver o básico sem sair de casa.",
        icon: "package"
      },
      {
        titulo: "Sala de reunião",
        descricao: "Espaço equipado para reuniões e home office, dentro do próprio condomínio.",
        icon: "concierge"
      },
      {
        titulo: "Rooftop pay-per-use",
        descricao: "Serviços do rooftop contratados sob demanda, você paga apenas o que usar.",
        icon: "waves"
      }
    ],
    incorporadores: [
      {
        nome: "Tegra",
        descricao:
          "Incorporadora de alto padrão com atuação em São Paulo e Rio de Janeiro, do grupo Brookfield, uma das maiores gestoras de ativos do mundo.",
        selo: "Grupo Brookfield"
      },
      {
        nome: "Ager",
        descricao:
          "Parceira da Tegra no KRONOS, incorporadora com atuação na Barra da Tijuca.",
        selo: "Co-incorporação"
      }
    ],
    descricaoCurta:
      "Breve lançamento KRONOS by Tegra na Av. Afonso Arinos de Melo Franco, 425, ao lado da ABM e a poucos passos do Posto 5: 194 unidades, apartamentos de 2 a 4 quartos (77 a 147 m²), Up Garden com piscina privativa (91 a 167 m²) e coberturas (174 a 301 m²), inspirado nas Blue Zones da Grécia, com spa, piscina externa e rooftop exclusivo.",
    heroResumo:
      "Breve lançamento na Barra: 2 a 4 quartos, Up Garden com piscina privativa e coberturas, ao lado da ABM e a poucos passos da praia do Posto 5.",
    descricaoLonga:
      "A Tegra Incorporadora, em parceria com a Ager, prepara o KRONOS na Av. Afonso Arinos de Melo Franco, 425, ao lado da ABM (Associação Bosque Marapendi) e a poucos passos da Praia da Barra, no Posto 5. Inspirado na arquitetura contemporânea grega e nas Blue Zones da Grécia, o projeto é um edifício único de 26 pavimentos com 194 unidades: apartamentos de 2 quartos (77 a 81 m²), 3 suítes (120 m²) e 4 suítes (147 m²) no pavimento tipo; unidades Up Garden com piscina privativa em fibra de 2 quartos (91 a 107 m²), 3 suítes (132 m²) e 4 suítes (167 m²); além de cobertura linear (174 m²) e coberturas duplex (247 e 301 m², com acesso aos elevadores pelos dois pavimentos), todas com piscina privativa. Cada apartamento já é entregue com piso porcelanato 80x80cm na sala, cozinha e varanda, piso vinílico nos quartos, água quente, infra de ar condicionado, fechadura eletrônica e bancada gourmet com churrasqueira elétrica na varanda. O lazer reúne spa wellness com piscina interna, sauna e sala de massagem, piscina externa com bar molhado, academia com varanda fitness, yoga, brinquedoteca, pet place, praça com fonte, quadra de areia, bosque privativo com redário e pomar, salão de festas, salão de jogos, espaço gourmet com churrasqueira, mercadinho de conveniência, sala de reunião e um rooftop exclusivo com telão para eventos esportivos e serviços pay-per-use. Convenção de lançamento em 06/08, com previsão de lançamento comercial em agosto/2026. Cadastre-se para receber, em primeira mão, tabela de valores, plantas, disponibilidade e condições de lançamento.",
    publicoIdeal: [
      "Famílias que querem morar na Barra da Tijuca, perto da praia e de áreas verdes",
      "Compradores de apartamentos de 3 e 4 quartos de alto padrão",
      "Quem busca uma unidade Up Garden com piscina privativa no térreo",
      "Investidores buscando lançamento de escassez ao lado da ABM",
      "Clientes que querem entrar em primeira mão, ainda no pré-lançamento"
    ],
    argumentosComerciais: [
      "Breve lançamento — cadastro para condições em primeira mão",
      "Localização ao lado da ABM, a poucos passos do Posto 5",
      "Edifício único de 26 pavimentos, 194 unidades",
      "Tipologias de 2 a 4 quartos, Up Garden com piscina privativa e coberturas",
      "Inspirado nas Blue Zones da Grécia, com lazer no térreo e no rooftop",
      "Assinatura Tegra Incorporadora + Ager",
      "Maior poder de escolha de unidade na janela de lançamento"
    ],
    objecoes: [
      "Por ser um breve lançamento, valores e disponibilidade ainda serão divulgados e estão sujeitos a confirmação.",
      "Metragens, plantas e itens de lazer são preliminares e podem ser alterados a critério da incorporadora.",
      "Imagens são referenciais do padrão Tegra na região e não representam o projeto final."
    ],
    imagens: [
      {
        src: "/images/tegra-kronos-fachada.jpg",
        alt: "Fachada iluminada do KRONOS by Tegra ao entardecer",
        destaque: true
      },
      {
        src: "/images/tegra-kronos-rooftop.jpg",
        alt: "Rooftop exclusivo com piscina, lareira e vista para a Barra da Tijuca"
      },
      {
        src: "/images/tegra-kronos-spa-piscina.jpg",
        alt: "Spa wellness com piscina interna inspirado nas Blue Zones da Grécia"
      },
      {
        src: "/images/tegra-kronos-sauna.jpg",
        alt: "Sauna com vista para a Barra da Tijuca"
      },
      {
        src: "/images/tegra-kronos-piscina-externa.jpg",
        alt: "Piscina externa cercada por vegetação, KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-fitness.jpg",
        alt: "Fitness completo com vista para área verde"
      },
      {
        src: "/images/tegra-kronos-yoga.jpg",
        alt: "Espaço de yoga com tela e vista para a Barra"
      },
      {
        src: "/images/tegra-kronos-brinquedoteca1.jpg",
        alt: "Brinquedoteca colorida do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-brinquedoteca2.jpg",
        alt: "Brinquedoteca com escorregador e piscina de bolinhas"
      },
      {
        src: "/images/tegra-kronos-lounge.jpg",
        alt: "Lounge e espaço gourmet do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-terraco-bosque.jpg",
        alt: "Terraço de treino e bosque privativo do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-praca-quadra.jpg",
        alt: "Praça com fonte e quadra de areia do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-lobby2.jpg",
        alt: "Lobby com espelho d'água do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-mercadinho.jpg",
        alt: "Mercadinho de conveniência do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-petplace.jpg",
        alt: "Pet place do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-praca-fonte.jpg",
        alt: "Praça com fonte e lounge do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-quadra-areia.jpg",
        alt: "Quadra de areia do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-sala-reuniao.jpg",
        alt: "Sala de reunião do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-massagem.jpg",
        alt: "Sala de massagem do spa wellness do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-churrasqueira.jpg",
        alt: "Espaço gourmet com churrasqueira do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-bar-piscina.jpg",
        alt: "Bar molhado na piscina externa do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-academia.jpg",
        alt: "Academia completa do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-redario.jpg",
        alt: "Redário no bosque privativo do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-pomar.jpg",
        alt: "Pomar do bosque privativo do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-sala-4suites.jpg",
        alt: "Sala decorada do apartamento de 4 suítes do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-sala-3suites.jpg",
        alt: "Sala decorada do apartamento de 3 suítes do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-sala-cobertura.jpg",
        alt: "Sala decorada da cobertura duplex do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-sala-cobertura-linear.jpg",
        alt: "Sala decorada da cobertura linear do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-living-santorini.jpg",
        alt: "Sala de estar decorada com vista para o mar do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-suite-master.jpg",
        alt: "Suíte master decorada do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-varanda-vista.jpg",
        alt: "Varanda decorada com vista para o mar do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-terraco-duplex.jpg",
        alt: "Varanda gourmet privativa com vista noturna do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-salao-gourmet.jpg",
        alt: "Salão gourmet do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-salao-jogos.jpg",
        alt: "Salão de jogos com sinuca do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-varanda-festas.jpg",
        alt: "Varanda de festas com vista noturna do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-sauna2.jpg",
        alt: "Sauna a vapor com vista para a Barra do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-piscina-interna2.jpg",
        alt: "Piscina interna aquecida do spa wellness do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-varanda-brinquedoteca.jpg",
        alt: "Área externa da brinquedoteca do KRONOS by Tegra"
      },
      {
        src: "/images/tegra-kronos-rooftop-telao.jpg",
        alt: "Rooftop com telão e piscina do KRONOS by Tegra ao entardecer"
      }
    ],
    seo: {
      title:
        "KRONOS by Tegra | Breve lançamento ao lado da ABM, Posto 5",
      description:
        "KRONOS by Tegra + Ager na Barra da Tijuca, ao lado da ABM e a poucos passos do Posto 5: 194 unidades, apartamentos de 2 a 4 quartos (77 a 147 m²), Up Garden com piscina privativa (91 a 167 m²) e coberturas (174 a 301 m²), inspirado nas Blue Zones da Grécia. Cadastre-se e receba tabela, plantas e condições em primeira mão.",
      keywords: [
        "Kronos Tegra",
        "Kronos by Tegra",
        "Kronos Barra da Tijuca",
        "Tegra Barra",
        "Tegra Barra da Tijuca",
        "Tegra lançamento",
        "Tegra ABM",
        "Tegra Posto 5",
        "lançamento Tegra Barra da Tijuca",
        "Tegra Incorporadora Barra",
        "Ager Barra da Tijuca",
        "breve lançamento Barra da Tijuca",
        "apartamento ao lado da ABM",
        "apartamento Posto 5 Barra da Tijuca",
        "apartamento 3 quartos Barra da Tijuca",
        "apartamento 4 quartos Barra da Tijuca",
        "up garden Barra da Tijuca",
        "apartamento com piscina privativa Barra da Tijuca",
        "cobertura Barra da Tijuca",
        "lançamento Barra da Tijuca",
        "apartamento novo Barra da Tijuca",
        "apartamento na planta Barra da Tijuca",
        "apartamento perto da praia Barra da Tijuca",
        "apartamento alto padrão Barra da Tijuca"
      ],
      canonicalPath: "/lancamentos/tegra-barra-da-tijuca",
      ogTitle: "KRONOS by Tegra: breve lançamento ao lado da ABM",
      ogDescription:
        "194 unidades, 2 a 4 quartos (77 a 147 m²), Up Garden com piscina privativa (91 a 167 m²) e coberturas (174 a 301 m²), ao lado da ABM e a poucos passos do Posto 5. Cadastre-se e receba tabela, plantas e condições em primeira mão.",
      ogImage: "/images/tegra-kronos-fachada.jpg"
    },
    faq: [
      {
        pergunta: "Onde fica o KRONOS by Tegra na Barra da Tijuca?",
        resposta:
          "Na Av. Afonso Arinos de Melo Franco, 425, ao lado da ABM (Associação Bosque Marapendi) e a poucos passos da Praia da Barra, no Posto 5."
      },
      {
        pergunta: "Quais tipologias estão previstas?",
        resposta:
          "Edifício único de 26 pavimentos com 194 unidades. No pavimento tipo: 2 quartos (77 e 81 m²), 3 suítes (120 m²) e 4 suítes (147 m²). Unidades Up Garden com piscina privativa em fibra: 2 quartos (91 e 107 m²), 3 suítes (132 m²) e 4 suítes (167 m²). Coberturas: linear de 3 suítes (174 m²) e duplex de 4 suítes (247 e 301 m²), todas com piscina privativa. Disponibilidade será confirmada no lançamento."
      },
      {
        pergunta: "O que é a unidade Up Garden?",
        resposta:
          "É a unidade de térreo do KRONOS com piscina privativa em fibra e revestimento cerâmico (profundidade de 80cm), bancada gourmet com churrasqueira elétrica e área externa só sua. Disponível em 2 quartos (91 e 107 m²), 3 suítes (132 m²) e 4 suítes (167 m²)."
      },
      {
        pergunta: "Já tem preço e tabela?",
        resposta:
          "Por ser um breve lançamento, os valores ainda serão divulgados. Cadastre-se para receber tabela, plantas e condições em primeira mão, assim que liberadas."
      },
      {
        pergunta: "Quando é o lançamento?",
        resposta:
          "A convenção do KRONOS acontece em 06/08, com previsão de lançamento comercial em agosto/2026."
      },
      {
        pergunta: "Quem é a incorporadora?",
        resposta:
          "A Tegra Incorporadora, do grupo Brookfield, uma das maiores gestoras de ativos do mundo, em parceria com a Ager."
      },
      {
        pergunta: "Como funciona o lazer?",
        resposta:
          "O KRONOS é inspirado na arquitetura contemporânea grega e nas Blue Zones da Grécia: spa wellness com piscina interna, sauna e sala de massagem, piscina externa com bar molhado, academia com varanda fitness, yoga, brinquedoteca, pet place, praça com fonte, quadra de areia, bosque privativo com redário e pomar, salão de festas, salão de jogos, espaço gourmet com churrasqueira, mercadinho de conveniência, sala de reunião e um rooftop exclusivo com telão para eventos esportivos, vista para a Barra e serviços pay-per-use."
      },
      {
        pergunta: "Como recebo as informações em primeira mão?",
        resposta:
          "Preencha o formulário para entrar na lista de pré-lançamento e receber material, tabela e simulação pelo WhatsApp assim que forem liberados."
      }
    ],
    whatsapp: {
      numero: "5521987715816",
      mensagem:
        "Olá, vi a página do KRONOS by Tegra na Barra da Tijuca (ao lado da ABM, Posto 5) e gostaria de receber tabela, plantas e condições em primeira mão."
    },
    tracking: {
      formEventName: "form_submit_tegra_barra",
      whatsappEventName: "whatsapp_click_tegra_barra",
      pageViewEventName: "page_view_tegra_barra"
    },
    localizacao: {
      titulo: "Ao lado da ABM, a poucos passos do Posto 5",
      descricao:
        "O KRONOS by Tegra fica na Av. Afonso Arinos de Melo Franco, 425, em uma das porções mais verdes e desejadas da Barra da Tijuca, ao lado da ABM (Associação Bosque Marapendi) e a poucos passos da Praia da Barra, no Posto 5. Um endereço que reúne natureza, orla e a conveniência de shoppings, escolas e serviços da região.",
      imagem: "/images/tegra-kronos-localizacao2.jpg",
      imagemAlt: "Praia da Barra da Tijuca no Posto 5 ao entardecer, com a Pedra da Gávea ao fundo — KRONOS by Tegra",
      pontos: [
        "Ao lado da ABM, com amplas áreas verdes",
        "A poucos passos da Praia da Barra, Posto 5",
        "Entorno com shoppings, escolas e serviços da Barra"
      ],
      categorias: [
        {
          titulo: "Praias & Lazer",
          icon: "waves",
          itens: [
            { nome: "Praia da Barra (Posto 5)", tempo: "poucos passos" },
            { nome: "ABM - Bosque Marapendi", tempo: "ao lado" },
            { nome: "Orla da Barra", tempo: "5 min" }
          ]
        },
        {
          titulo: "Mobilidade",
          icon: "navigation",
          itens: [
            { nome: "Av. das Américas", tempo: "5 min" },
            { nome: "Av. Lúcio Costa", tempo: "5 min" },
            { nome: "Metrô Jardim Oceânico", tempo: "12 min" }
          ]
        },
        {
          titulo: "Compras",
          icon: "shopping",
          itens: [
            { nome: "Downtown", tempo: "6 min" },
            { nome: "Rio Design Barra", tempo: "8 min" },
            { nome: "BarraShopping", tempo: "12 min" }
          ]
        },
        {
          titulo: "Educação",
          icon: "school",
          itens: [
            { nome: "Escolas de referência da Barra", tempo: "5 a 10 min" },
            { nome: "Universidades", tempo: "10 min" }
          ]
        }
      ],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Av.+Afonso+Arinos+de+Melo+Franco+425+Barra+da+Tijuca+Rio+de+Janeiro"
    },
    condicoesAviso:
      "Breve lançamento — convenção em 06/08, previsão de lançamento comercial em agosto/2026. Material preliminar sujeito à alteração sem aviso prévio; imagens e perspectivas são meramente ilustrativas. Plantas, metragens, valores, itens de lazer e disponibilidade serão confirmados no memorial de incorporação."
  },
  {
    id: "astra-ilha-pura",
    slug: "astra-ilha-pura-barra-da-tijuca",
    nome: "Astra Smart Facilities",
    incorporadora: "BTG Pactual",
    marca: "Ilha Pura",
    realizacaoLabel: "BTG Pactual · bairro planejado Ilha Pura",
    heroImageMobile: "/images/astra-aerial-ilha-pura.jpg",
    bairro: "Barra da Tijuca",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    enderecoResumo: "Av. Salvador Allende, 3200 — Ilha Pura, Barra Olímpica",
    precoInicial: "2 quartos a partir de R$ 710 mil",
    precoInicialNumerico: 710000,
    sinalInicial: "a partir de R$ 70 mil",
    tipologias: [
      "Apartamentos de 2 quartos com suíte",
      "Apartamentos 2 quartos Double Suites"
    ],
    fichaTecnica: [
      {
        label: "Endereço",
        value: "Av. Salvador Allende, 3200 — Ilha Pura, Barra da Tijuca (Barra Olímpica)"
      },
      {
        label: "Bairro planejado",
        value: "Ilha Pura, antiga Vila dos Atletas dos Jogos Rio 2016"
      },
      {
        label: "Torres",
        value: "Edifícios Luna, Lyra, Selene e Gaia, com 17 pavimentos"
      },
      {
        label: "Unidades",
        value: "544 apartamentos na fase atual"
      },
      {
        label: "Tipologias",
        value: "2 quartos com suíte e 2 quartos Double Suites"
      },
      {
        label: "Metragens",
        value: "86,78 m² a 93,80 m² de área privativa"
      },
      {
        label: "Vagas",
        value: "1 vaga por unidade"
      },
      {
        label: "Parque Ilha Pura",
        value: "72.000 m² de parque com paisagismo assinado"
      },
      {
        label: "Lazer",
        value: "Parque aquático, academia by Cia Athletica, spa, coworking e pet place"
      },
      {
        label: "Incorporação",
        value: "BTG Pactual (complexo Ilha Pura, originalmente Carvalho Hosken)"
      },
      {
        label: "Novidade",
        value: "Nova torre em lançamento — convenção em 22 de julho"
      }
    ],
    plantas: [
      {
        titulo: "2 quartos",
        metragem: "86,78 m²",
        descricao:
          "Apartamentos 105 a 1705 e 108 a 1708, com varanda gourmet e cozinha americana integrada.",
        imagem: "/images/astra-planta-2q-86m.jpg",
        decisao: "Menor ticket",
        perfil:
          "O menor ticket do Astra, com a melhor relação entre entrada e metragem — forte apelo de liquidez e locação no Ilha Pura.",
        cuidado: "Comparar coluna, andar, vista e fluxo final de pagamento."
      },
      {
        titulo: "2 quartos",
        metragem: "87,09 m² e 93,80 m²",
        descricao:
          "Apartamentos 106 a 1606 e 107 a 1607 com 87,09 m². As unidades 1706 e 1707, no 17º pavimento, têm 93,80 m² — a maior metragem do Astra.",
        imagem: "/images/astra-planta-2q-87m.jpg",
        decisao: "Equilíbrio",
        perfil:
          "Equilíbrio entre metragem, posição no bloco e ticket — a planta de maior procura para morar no bairro planejado.",
        cuidado:
          "Validar orientação solar, vista para o parque e valor por m². As unidades de 93,80 m² ficam no 17º pavimento e são as maiores do empreendimento."
      },
      {
        titulo: "2 quartos",
        metragem: "90,32 m²",
        descricao:
          "Apartamentos 101 a 1701 e 104 a 1704, com suíte e ampla varanda gourmet.",
        imagem: "/images/astra-planta-2q-90m.jpg",
        decisao: "Mais espaço",
        perfil:
          "Mais área social e varanda para quem quer permanecer, receber e ainda manter o ticket de um 2 quartos.",
        cuidado: "Observar posição, vista e ticket total frente às demais colunas."
      },
      {
        titulo: "Double Suites",
        metragem: "86,89 m² e 93,61 m²",
        descricao:
          "Apartamentos 102 a 1602, 103 a 1603 e as unidades 1702 e 1703, no último pavimento, com as duas suítes.",
        imagem: "/images/astra-planta-double-suite.jpg",
        decisao: "Double Suites",
        perfil:
          "Os dois quartos em suíte: produto de maior escassez do Astra, ideal para casal com home office, sócios ou locação por quarto.",
        cuidado:
          "Confirmar disponibilidade: é a tipologia que costuma esgotar primeiro. As unidades de 93,61 m² ficam no 17º pavimento."
      }
    ],
    diferenciais: [
      "O 2 quartos mais desejado da Barra, de volta com uma nova torre",
      "Bairro planejado Ilha Pura, antiga Vila dos Atletas Rio 2016",
      "Parque Ilha Pura com 72.000 m² e paisagismo assinado",
      "Parque aquático com piscina aquecida e raia semiolímpica",
      "Academia by Cia Athletica, spa, coworking e pet place",
      "Opções de 2 quartos com suíte e Double Suites, de 86 a 93 m²"
    ],
    conceito: {
      tagline: "A vida acontece ao seu redor",
      frase: "O 2 quartos mais desejado da Barra voltou",
      titulo: "Nova torre no bairro planejado Ilha Pura",
      texto:
        "O Astra Smart Facilities está de volta com uma nova torre, atendendo a um dos maiores pedidos do mercado. Com a escassez de apartamentos de 2 quartos no Ilha Pura, essa é a oportunidade que muitos clientes esperavam. Aqui, você mora dentro de um bairro planejado — a antiga Vila dos Atletas dos Jogos Rio 2016 — cercado por 72.000 m² de parque, com quadras, ciclovia, lago e segurança 24h, a poucos minutos da Av. das Américas.",
      textoInvestidor:
        "Para quem investe: 2 quartos é a tipologia de maior liquidez da Barra e a de maior escassez dentro do Ilha Pura. Ticket de entrada acessível, demanda consolidada por locação e a assinatura BTG Pactual à frente do complexo.",
      imagem: "/images/astra-fachada.jpg",
      imagemAlt:
        "Fachada das torres do Astra Smart Facilities no Ilha Pura, com as montanhas da Barra da Tijuca ao fundo",
      pilares: [
        {
          titulo: "Bairro planejado",
          texto:
            "72.000 m² de parque, quadras, ciclovia e lago, com segurança 24h — o legado da Vila dos Atletas Rio 2016."
        },
        {
          titulo: "Smart Facilities",
          texto:
            "Parque aquático, academia by Cia Athletica, spa, coworking e concierge com serviços pay-per-use."
        },
        {
          titulo: "Escassez de 2 quartos",
          texto:
            "A tipologia mais procurada e mais rara do Ilha Pura, agora com uma nova torre."
        }
      ]
    },
    condicoesResumo: [
      { label: "Unidades", value: "544", subtitle: "fase atual, 4 torres", icon: "layout" },
      { label: "Tipologias", value: "2 quartos e Double Suites", icon: "chart" },
      { label: "Metragens", value: "86 a 93 m²", icon: "check" },
      { label: "Novidade", value: "Nova torre", subtitle: "convenção em 22/julho", icon: "clock" }
    ],
    lazerHeader: {
      titulo: "Smart Facilities: a vida acontece ao seu redor",
      texto:
        "Parque aquático, academia by Cia Athletica, spa, coworking e pet place dentro do condomínio — tudo cercado pelos 72.000 m² do Parque Ilha Pura, com quadras, ciclovia e lago.",
      metricas: [
        { valor: "72.000 m²", label: "de parque" },
        { valor: "24h", label: "de segurança" },
        { valor: "4", label: "torres" }
      ]
    },
    lazerCategorias: [
      {
        titulo: "Parque Aquático",
        resumo: "O coração do lazer do Astra, do nado sério ao banho de sol.",
        itens: [
          "Piscina aquecida com borda infinita",
          "Raia semiolímpica",
          "Solário e deck",
          "Piscina infantil"
        ],
        imagem: "/images/astra-piscina.jpg",
        alt: "Parque aquático com piscina e palmeiras do Astra no Ilha Pura"
      },
      {
        titulo: "Social & Gourmet",
        resumo: "Espaços para receber sem sair de casa.",
        itens: [
          "Espaço gourmet",
          "Wine bar",
          "Salão de festas",
          "Lounge"
        ],
        imagem: "/images/astra-gourmet.jpg",
        alt: "Espaço gourmet e wine bar do Astra no Ilha Pura"
      },
      {
        titulo: "Trabalho & Criação",
        resumo: "Home office com estrutura profissional no próprio condomínio.",
        itens: ["Coworking", "Multi-office", "Salas de reunião"],
        imagem: "/images/astra-coworking.jpg",
        alt: "Coworking do Astra no Ilha Pura"
      },
      {
        titulo: "Kids",
        resumo: "Para a garotada brincar com segurança.",
        itens: ["Brinquedoteca", "Espaço kids", "Playground no parque"],
        imagem: "/images/astra-brinquedoteca.jpg",
        alt: "Brinquedoteca do Astra no Ilha Pura"
      }
    ],
    servicosHeader: {
      titulo: "Serviços que resolvem o seu dia a dia",
      texto:
        "Academia operada pela Cia Athletica, spa com hidroterapia e um concierge pay-per-use: você contrata e paga apenas os serviços que usar."
    },
    servicos: [
      {
        titulo: "Academia by Cia Athletica",
        descricao:
          "Academia operada pela Cia Athletica dentro do condomínio, com equipamentos de alto padrão.",
        icon: "concierge"
      },
      {
        titulo: "Spa com hidroterapia",
        descricao:
          "Spa com hidroterapia, sauna seca e sauna úmida para o bem-estar no dia a dia.",
        icon: "waves"
      },
      {
        titulo: "Concierge pay-per-use",
        descricao:
          "Concierge com serviços sob demanda, você contrata e paga apenas o que usar.",
        icon: "package"
      },
      {
        titulo: "Pet Place",
        descricao:
          "Espaço dedicado aos pets dentro do condomínio, sem precisar sair para passear.",
        icon: "store"
      }
    ],
    incorporadores: [
      {
        nome: "BTG Pactual",
        descricao:
          "O maior banco de investimentos da América Latina, responsável pela incorporação do complexo Ilha Pura e por conduzir as novas fases do bairro planejado.",
        selo: "Incorporação"
      },
      {
        nome: "Ilha Pura",
        descricao:
          "Bairro planejado na Barra Olímpica, legado da Vila dos Atletas dos Jogos Rio 2016, com 72.000 m² de parque, segurança 24h e infraestrutura completa.",
        selo: "Legado Rio 2016"
      },
      {
        nome: "Cia Athletica",
        descricao:
          "Uma das maiores redes de academias de alto padrão do país, responsável pela operação do fitness do Astra.",
        selo: "Fitness"
      }
    ],
    descricaoCurta:
      "Nova torre do Astra Smart Facilities no bairro planejado Ilha Pura, Barra Olímpica: 2 quartos com suíte e Double Suites de 86 a 93 m², com parque de 72.000 m², parque aquático e academia by Cia Athletica.",
    heroResumo:
      "O 2 quartos mais desejado da Barra voltou: nova torre no Ilha Pura, com suíte ou Double Suites de 86 a 93 m², dentro de um bairro planejado com 72.000 m² de parque.",
    descricaoLonga:
      "O Astra Smart Facilities fica no Ilha Pura, bairro planejado na Barra Olímpica que é o legado da Vila dos Atletas dos Jogos Rio 2016, na Av. Salvador Allende. São apartamentos de 2 quartos com suíte e Double Suites, de 86,78 m² a 93,80 m² de área privativa, distribuídos nos edifícios Luna, Lyra, Selene e Gaia, com varanda gourmet e cozinha americana integrada. O condomínio reúne parque aquático com piscina aquecida e raia semiolímpica, academia by Cia Athletica, spa com hidroterapia, coworking, pet place e concierge pay-per-use, tudo cercado pelos 72.000 m² do Parque Ilha Pura, com quadras, ciclovia e lago. Diante da escassez de 2 quartos no bairro, o Astra volta com uma nova torre, com convenção marcada para 22 de julho. Fale com a especialista para receber tabela, plantas e disponibilidade em primeira mão.",
    publicoIdeal: [
      "Compradores de primeiro imóvel na Barra da Tijuca",
      "Casais e famílias pequenas buscando 2 quartos com suíte",
      "Quem precisa de home office e valoriza Double Suites",
      "Investidores buscando a tipologia de maior liquidez da Barra",
      "Famílias que querem morar em bairro planejado com parque e segurança 24h"
    ],
    argumentosComerciais: [
      "Nova torre: convenção em 22 de julho, com escolha de unidade em primeira mão",
      "2 quartos é a tipologia de maior escassez dentro do Ilha Pura",
      "Referência de 2 quartos a partir de R$ 710 mil, sujeito a confirmação",
      "Sinal comunicado a partir de R$ 70 mil",
      "Opção Double Suites: os dois quartos em suíte, produto raro na faixa",
      "Bairro planejado com 72.000 m² de parque e segurança 24h",
      "Academia by Cia Athletica, spa e coworking dentro do condomínio",
      "6 minutos da Av. das Américas e acesso a Transolímpica e Transoeste"
    ],
    objecoes: [
      "Valores, disponibilidade e condições da nova torre são divulgados no lançamento e estão sujeitos a confirmação.",
      "A referência de preço e sinal vem das fases já comercializadas e pode mudar na tabela da nova torre.",
      "Imagens e plantas são do material do empreendimento e podem ser alteradas a critério da incorporadora."
    ],
    imagens: [
      {
        src: "/images/astra-aerial-ilha-pura.jpg",
        alt: "Vista aérea do Ilha Pura com as torres, quadras e o parque, na Barra da Tijuca",
        destaque: true
      },
      {
        src: "/images/astra-piscina.jpg",
        alt: "Parque aquático com piscina e palmeiras do Astra no Ilha Pura"
      },
      {
        src: "/images/astra-varanda-gourmet.jpg",
        alt: "Varanda gourmet com vista para o parque do Astra no Ilha Pura"
      },
      {
        src: "/images/astra-living-cozinha.jpg",
        alt: "Living com cozinha americana integrada do Astra no Ilha Pura"
      },
      {
        src: "/images/astra-suite.jpg",
        alt: "Suíte do Astra Smart Facilities no Ilha Pura"
      },
      {
        src: "/images/astra-gourmet.jpg",
        alt: "Espaço gourmet e wine bar do Astra no Ilha Pura"
      },
      {
        src: "/images/astra-coworking.jpg",
        alt: "Coworking do Astra no Ilha Pura"
      },
      {
        src: "/images/astra-lobby.jpg",
        alt: "Lobby do Astra Smart Facilities no Ilha Pura"
      }
    ],
    seo: {
      title:
        "Astra Ilha Pura | Nova torre com 2 quartos e Double Suites na Barra",
      description:
        "Astra Smart Facilities no bairro planejado Ilha Pura, Barra Olímpica: nova torre com 2 quartos com suíte e Double Suites de 86 a 93 m², a partir de R$ 710 mil. Parque de 72.000 m², parque aquático e academia by Cia Athletica. Receba tabela, plantas e disponibilidade.",
      keywords: [
        "Astra Ilha Pura",
        "Astra Smart Facilities",
        "Astra Barra da Tijuca",
        "Astra Ilha Pura preco",
        "Astra Ilha Pura tabela",
        "Astra Ilha Pura plantas",
        "Astra Ilha Pura nova torre",
        "Astra Double Suites",
        "Ilha Pura",
        "Ilha Pura Barra da Tijuca",
        "Ilha Pura apartamentos",
        "Ilha Pura 2 quartos",
        "apartamento 2 quartos Ilha Pura",
        "apartamento 2 quartos Barra Olimpica",
        "apartamento 2 quartos Barra da Tijuca",
        "double suite Barra da Tijuca",
        "apartamento Barra Olimpica",
        "lancamento Barra Olimpica",
        "lancamento Barra da Tijuca",
        "apartamento Av. Salvador Allende",
        "Vila dos Atletas apartamento",
        "apartamento bairro planejado Rio de Janeiro",
        "apartamento Barra a partir de 700 mil"
      ],
      canonicalPath: "/lancamentos/astra-ilha-pura-barra-da-tijuca",
      ogTitle: "Astra Ilha Pura: nova torre com 2 quartos e Double Suites",
      ogDescription:
        "O 2 quartos mais desejado da Barra voltou. Nova torre no Ilha Pura, de 86 a 93 m², a partir de R$ 710 mil. Receba tabela, plantas e disponibilidade.",
      ogImage: "/images/astra-aerial-ilha-pura.jpg"
    },
    faq: [
      {
        pergunta: "Onde fica o Astra Ilha Pura?",
        resposta:
          "Na Av. Salvador Allende, 3200, dentro do bairro planejado Ilha Pura, na Barra Olímpica (Barra da Tijuca). O Ilha Pura é o legado da Vila dos Atletas dos Jogos Rio 2016."
      },
      {
        pergunta: "O que é a nova torre do Astra?",
        resposta:
          "Diante da escassez de apartamentos de 2 quartos no Ilha Pura, o Astra foi relançado com uma nova torre. A convenção está marcada para 22 de julho, quando a tabela e a disponibilidade são apresentadas. Cadastre-se para receber em primeira mão."
      },
      {
        pergunta: "Quais tipologias e metragens estão disponíveis?",
        resposta:
          "Apartamentos de 2 quartos com suíte e a opção Double Suites, com os dois quartos em suíte. As áreas privativas vão de 86,78 m² a 93,80 m², nos edifícios Luna, Lyra, Selene e Gaia."
      },
      {
        pergunta: "Qual a diferença do Double Suites?",
        resposta:
          "No Double Suites os dois quartos são suítes, cada um com banheiro próprio. É a tipologia de maior escassez, procurada por casais com home office, por quem recebe hóspedes e para locação por quarto."
      },
      {
        pergunta: "Qual o preço e o sinal?",
        resposta:
          "A referência comunicada é de 2 quartos a partir de R$ 710 mil, com sinal a partir de R$ 70 mil. Esses valores vêm das fases já comercializadas: a tabela da nova torre é divulgada no lançamento e precisa ser confirmada."
      },
      {
        pergunta: "Como é o lazer do condomínio?",
        resposta:
          "Parque aquático com piscina aquecida e raia semiolímpica, academia by Cia Athletica, spa com hidroterapia, sauna seca e úmida, espaço gourmet, wine bar, salão de festas, coworking, multi-office e pet place. Além disso, o Parque Ilha Pura tem 72.000 m² com quadras, ciclovia e lago."
      },
      {
        pergunta: "Quem é a incorporadora?",
        resposta:
          "O complexo Ilha Pura é incorporado pelo BTG Pactual, que adquiriu o empreendimento e conduz as novas fases do bairro planejado, originalmente desenvolvido pela Carvalho Hosken."
      },
      {
        pergunta: "Como recebo tabela, plantas e disponibilidade?",
        resposta:
          "Preencha o formulário para receber o material do Astra e uma simulação de fluxo pelo WhatsApp, com as condições da nova torre assim que liberadas."
      }
    ],
    whatsapp: {
      numero: "5521987715816",
      mensagem:
        "Olá, vi a página do Astra no Ilha Pura e gostaria de receber tabela, plantas e disponibilidade da nova torre (2 quartos e Double Suites)."
    },
    tracking: {
      formEventName: "form_submit_astra_ilha_pura",
      whatsappEventName: "whatsapp_click_astra_ilha_pura",
      pageViewEventName: "page_view_astra_ilha_pura"
    },
    localizacao: {
      titulo: "Um bairro planejado dentro da Barra Olímpica",
      descricao:
        "O Astra fica no Ilha Pura, na Av. Salvador Allende, um bairro planejado com 72.000 m² de parque, quadras, ciclovia, lago e segurança 24h — o legado da Vila dos Atletas dos Jogos Rio 2016. Dali são cerca de 6 minutos até a Av. das Américas e 10 até o Recreio, com acesso direto a Transolímpica, Transoeste e Transcarioca e proximidade do Parque Olímpico.",
      imagem: "/images/astra-aerial-entardecer.jpg",
      imagemAlt:
        "Vista aérea do Ilha Pura ao entardecer, com as torres e o parque na Barra da Tijuca",
      pontos: [
        "Bairro planejado com 72.000 m² de parque e segurança 24h",
        "Acesso direto a Transolímpica, Transoeste e Transcarioca",
        "Vizinho ao Parque Olímpico e à Lagoa de Jacarepaguá"
      ],
      categorias: [
        {
          titulo: "Mobilidade",
          icon: "navigation",
          itens: [
            { nome: "Av. Salvador Allende", tempo: "1 min" },
            { nome: "Transolímpica / Transoeste", tempo: "3 min" },
            { nome: "Av. das Américas", tempo: "6 min" },
            { nome: "Recreio dos Bandeirantes", tempo: "10 min" }
          ]
        },
        {
          titulo: "Parques & Lazer",
          icon: "waves",
          itens: [
            { nome: "Parque Ilha Pura", tempo: "no bairro" },
            { nome: "Parque Olímpico", tempo: "5 min" },
            { nome: "Lagoa de Jacarepaguá", tempo: "5 min" },
            { nome: "Praia da Barra", tempo: "15 min" }
          ]
        },
        {
          titulo: "Compras",
          icon: "shopping",
          itens: [
            { nome: "Parque Shopping Barra", tempo: "8 min" },
            { nome: "Américas Shopping", tempo: "10 min" },
            { nome: "BarraShopping", tempo: "15 min" }
          ]
        },
        {
          titulo: "Educação",
          icon: "school",
          itens: [
            { nome: "Escolas da Barra Olímpica", tempo: "5 a 10 min" },
            { nome: "Colégios de referência da Barra", tempo: "12 min" }
          ]
        }
      ],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Ilha+Pura+Avenida+Salvador+Allende+3200+Barra+da+Tijuca+Rio+de+Janeiro"
    },
    condicoesAviso:
      "Nova torre em lançamento, com convenção em 22 de julho. Imagens e plantas são do material do empreendimento; valores, sinal, metragens e disponibilidade estão sujeitos a confirmação na tabela vigente."
  }
];

export function getImovelBySlug(slug: string) {
  return imoveis.find((imovel) => imovel.slug === slug);
}

/** Categorias canônicas de tipologia usadas nos filtros do portal. */
export const filtroTipologias = [
  "2 quartos",
  "3 quartos",
  "4 quartos",
  "Garden",
  "Cobertura"
] as const;

export type FiltroTipologia = (typeof filtroTipologias)[number];

const tipologiaMatchers: { tag: FiltroTipologia; regex: RegExp }[] = [
  { tag: "2 quartos", regex: /\b2\s*(quartos?|su[ií]tes?|dorm)/i },
  { tag: "3 quartos", regex: /\b3\s*(quartos?|su[ií]tes?|dorm)/i },
  { tag: "4 quartos", regex: /\b4\s*(quartos?|su[ií]tes?|dorm)/i },
  { tag: "Garden", regex: /garden/i },
  { tag: "Cobertura", regex: /cobertura/i }
];

/** Deriva as tags de tipologia de um imóvel a partir da lista `tipologias`. */
export function getTipologiaTags(imovel: Imovel): FiltroTipologia[] {
  const texto = imovel.tipologias.join(" | ");
  return tipologiaMatchers
    .filter(({ regex }) => regex.test(texto))
    .map(({ tag }) => tag);
}

/** Rótulo compacto de quartos (ex.: "2 a 4 quartos") para o card de catálogo. */
export function getQuartosLabel(imovel: Imovel): string | null {
  const numeros = getTipologiaTags(imovel)
    .map((tag) => parseInt(tag, 10))
    .filter((n) => !Number.isNaN(n));

  if (!numeros.length) {
    return null;
  }

  const min = Math.min(...numeros);
  const max = Math.max(...numeros);

  return min === max ? `${min} quartos` : `${min} a ${max} quartos`;
}

/** Faixa de metragem (ex.: "77 a 301 m²") derivada das plantas cadastradas. */
export function getMetragemRange(imovel: Imovel): string | null {
  const numeros = (imovel.plantas ?? [])
    .flatMap((planta) => {
      // Remove anotações entre parênteses (ex.: "(1 suíte)") para não confundir com metragem.
      const semAnotacoes = planta.metragem.replace(/\([^)]*\)/g, "");
      return semAnotacoes.match(/\d+(?:[.,]\d+)?/g) ?? [];
    })
    .map((n) => parseFloat(n.replace(",", ".")))
    .filter((n) => !Number.isNaN(n));

  if (!numeros.length) {
    return null;
  }

  const min = Math.min(...numeros);
  const max = Math.max(...numeros);
  const fmt = (n: number) =>
    Number.isInteger(n) ? `${n}` : n.toFixed(2).replace(".", ",");

  return min === max ? `${fmt(min)} m²` : `${fmt(min)} a ${fmt(max)} m²`;
}

export function getImovelDestaque(imovel: Imovel) {
  return imovel.imagens.find((imagem) => imagem.destaque) || imovel.imagens[0];
}
