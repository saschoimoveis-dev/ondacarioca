import { siteConfig } from "@/lib/site";

export type Imovel = {
  id: string;
  slug: string;
  nome: string;
  incorporadora?: string;
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
  }[];
  diferenciais: string[];
  conceito?: {
    tagline: string;
    frase: string;
    titulo: string;
    texto: string;
    textoInvestidor?: string;
    pilares: { titulo: string; texto: string }[];
  };
  torres?: {
    destaque: string;
    nome: string;
    tipologia: string;
  }[];
  lazerCategorias?: {
    titulo: string;
    resumo: string;
    itens: string[];
    imagem?: string;
    alt?: string;
  }[];
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
      numero: siteConfig.whatsapp,
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
  }
];

export function getImovelBySlug(slug: string) {
  return imoveis.find((imovel) => imovel.slug === slug);
}

export function getImovelDestaque(imovel: Imovel) {
  return imovel.imagens.find((imagem) => imagem.destaque) || imovel.imagens[0];
}
