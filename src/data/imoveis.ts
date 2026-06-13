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
    titulo: string;
    texto: string;
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
    nome: "WE Barra by Living",
    incorporadora: "Living",
    bairro: "Barra da Tijuca",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    enderecoResumo: "Av. das Americas 12800 - Barra da Tijuca, Rio de Janeiro - RJ",
    precoInicial: "2 quartos a partir de R$ 600 mil",
    precoInicialNumerico: 600000,
    sinalInicial: "a partir de R$ 50 mil",
    parcelasIniciais: "a partir de R$ 2.000",
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
        label: "Endereco",
        value: "Av. das Americas, 12.800 - esquina com Salvador Allende"
      },
      {
        label: "Unidades",
        value: "605 unidades em 6 torres"
      },
      {
        label: "Terreno",
        value: "25.405,75 m²"
      },
      {
        label: "Lazer",
        value: "5.254,24 m²"
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
        value: "Maio/2029, sujeita a confirmacao"
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
        label: "Incorporacao",
        value: "Living Residencial (Cyrela) e Leblon Realty"
      }
    ],
    plantas: [
      {
        titulo: "2 quartos",
        metragem: "63m² e 70m²",
        descricao: "Opcao de ticket mais acessivel, boa para liquidez, locacao e entrada em lancamento na Barra.",
        imagem: "/images/we-barra-planta-70m-material.jpg"
      },
      {
        titulo: "3 quartos",
        metragem: "83m²",
        descricao: "Equilibrio entre metragem, procura familiar e potencial de revenda para quem quer morar ou investir.",
        imagem: "/images/we-barra-planta-83m-material.jpg"
      },
      {
        titulo: "4 quartos",
        metragem: "100m² e 118m²",
        descricao: "Plantas maiores para familias, com mais conforto e maior valorizacao absoluta quando bem posicionadas.",
        imagem: "/images/we-barra-planta-100m-material.jpg"
      },
      {
        titulo: "Gardens e coberturas",
        metragem: "95m² a 232m²",
        descricao: "Produtos de maior escassez, com areas externas, terraços e comparacao cuidadosa de posicao.",
        imagem: "/images/we-barra-cobertura-142m-material.jpg"
      }
    ],
    diferenciais: [
      "Mais de 5 mil m² de lazer comunicados",
      "Terreno amplo de mais de 25 mil m² comunicados",
      "Lazer completo com piscinas, academia, gourmet, festas, coworking e brinquedoteca",
      "Sky Lounge/rooftop e areas externas como diferenciais de desejo",
      "Plantas de 2 a 4 quartos com suite, gardens e coberturas"
    ],
    conceito: {
      tagline: "Inspirado nos hoteis W",
      titulo: "Morar como quem viaja o mundo",
      texto:
        "O WE nasce da inspiracao nos hoteis internacionais da rede W - de Austin a Dubai, de Melbourne ao Caribe. Design, conforto e bem-estar no padrao da hotelaria de luxo, em um dos enderecos mais desejados da Barra da Tijuca. Um lugar onde o mundo te pertence.",
      pilares: [
        {
          titulo: "Design hoteleiro",
          texto:
            "Ambientes assinados, inspirados na sofisticacao dos grandes hoteis do mundo."
        },
        {
          titulo: "Bem-estar como destino",
          texto:
            "Mais de 5.254 m² de lazer, wellness e SPA para viver bem todos os dias."
        },
        {
          titulo: "Assinatura Cyrela",
          texto:
            "A engenharia de alto padrao de quem constroi ha mais de 60 anos."
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
        imagem: "/images/we-barra-piscina-material.jpg",
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
          "Transporte exclusivo dos moradores ate a estacao de metro do Jardim Oceanico, com paradas intermediarias.",
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
          "Espaco para guarda de pranchas e higienizacao dos pes - feito para quem vive o mar.",
        icon: "waves"
      },
      {
        titulo: "Central de Facilidades",
        descricao:
          "Concierge que auxilia na contratacao de servicos: arrumacao, passadeira, assistencia tecnica e mais.",
        icon: "concierge"
      },
      {
        titulo: "Central de Encomendas",
        descricao:
          "Recebimento e guarda temporaria de encomendas dos moradores com seguranca.",
        icon: "package"
      },
      {
        titulo: "Pet Care, Minimarket & Oficina",
        descricao:
          "Conveniencias no subsolo para resolver o dia a dia sem precisar sair de casa.",
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
        "Modificacoes de planta e acabamentos",
        "Infra para ar-condicionado, smart home e Wi-Fi"
      ],
      beneficios: [
        {
          titulo: "Exclusividade",
          texto:
            "Escolha a melhor configuracao do seu apartamento direto com a construtora."
        },
        {
          titulo: "Sem obras depois",
          texto:
            "Evite reformas apos a mudanca. Mais tranquilidade e rapidez para morar."
        },
        {
          titulo: "Pague parcelado",
          texto:
            "Parcele a personalizacao conforme seu planejamento, com garantia Living."
        }
      ]
    },
    incorporadores: [
      {
        nome: "Cyrela",
        descricao:
          "Ha mais de 60 anos construindo com engenharia de alto padrao, etica e transparencia. Centenas de milhares de familias em lares Cyrela.",
        selo: "60+ anos"
      },
      {
        nome: "Living",
        descricao:
          "A marca do Grupo Cyrela especialista em construir bem-estar, onde cada solucao tem o viver bem como essencia.",
        selo: "Grupo Cyrela"
      },
      {
        nome: "Leblon Realty",
        descricao:
          "Gestora especializada no setor imobiliario, com socios que somam mais de 30 anos a frente de grandes projetos.",
        selo: "30+ anos"
      }
    ],
    descricaoCurta:
      "Lancamento Living Cyrela na Barra da Tijuca, inspirado nos hoteis W: 605 unidades em 6 torres, 2 a 4 quartos, gardens e coberturas, com mais de 5 mil m² de lazer de resort.",
    descricaoLonga:
      "Inspirado nos hoteis internacionais da rede W, o WE Barra by Living (Cyrela) fica na Av. das Americas 12.800, na Barra da Tijuca. Sao 605 unidades em 6 torres - Aspen, Ibiza, Miami, Roma, Maldivas e Dubai - com apartamentos de 2, 3 e 4 quartos, gardens e coberturas, alem de 5.254 m² de lazer com piscina de raia de 25m, SPA, Sky Lounge e servicos como shuttle ao metro e balsa para a praia. Fale com Alexandre Sascho para receber tabela atualizada, plantas, unidades disponiveis e simulacao de fluxo.",
    publicoIdeal: [
      "Compradores que desejam morar na Barra da Tijuca",
      "Familias avaliando apartamentos novos de 2, 3 ou 4 quartos",
      "Investidores buscando lancamentos com apelo de liquidez",
      "Clientes que precisam comparar entrada, parcelas e tipologias"
    ],
    argumentosComerciais: [
      "2 quartos a partir de R$ 600 mil, sujeito a confirmacao",
      "Sinal comunicado a partir de R$ 50 mil",
      "Mensais comunicadas a partir de R$ 2.000 durante a obra",
      "Janela de lancamento com maior poder de escolha de unidade",
      "Analise de tipologia, andar, coluna, vista e orientacao",
      "Tabela, ficha tecnica, imagens e plantas para comparacao",
      "Simulacao para comparar entrada, parcelas, INCC e saldo"
    ],
    objecoes: [
      "Valores e disponibilidade podem mudar sem aviso previo.",
      "A condicao final depende da unidade, tipologia, fluxo de pagamento e aprovacao comercial.",
      "Imagens e plantas sao previas, referenciais e podem ser alteradas a criterio da incorporadora."
    ],
    imagens: [
      {
        src: "/images/we-barra-pool-house-material.jpg",
        alt: "Imagem previa da pool house do WE Barra by Living com vista para piscina",
        destaque: true
      },
      {
        src: "/images/we-barra-pool-house-bar-material.jpg",
        alt: "Imagem previa da pool house com bar e vista para o lazer do WE Barra by Living"
      },
      {
        src: "/images/we-barra-salao-festas-material.jpg",
        alt: "Imagem previa do salao de festas do WE Barra by Living"
      },
      {
        src: "/images/we-barra-sky-lounge-material.jpg",
        alt: "Imagem previa do sky lounge do WE Barra by Living"
      },
      {
        src: "/images/we-barra-piscina-material.jpg",
        alt: "Imagem previa da piscina e area de lazer do WE Barra by Living"
      },
      {
        src: "/images/we-barra-ficha-tecnica-material.jpg",
        alt: "Ficha tecnica visual do WE Barra by Living"
      },
      {
        src: "/images/we-barra-planta-70m-material.jpg",
        alt: "Planta previa de 2 quartos com 70m² do WE Barra by Living"
      }
    ],
    seo: {
      title:
        "WE Barra by Living | Lancamento Cyrela inspirado nos hoteis W na Barra",
      description:
        "WE Barra by Living, lancamento Cyrela inspirado nos hoteis W: 605 unidades em 6 torres, 2 a 4 quartos, gardens e coberturas, com lazer de resort de 5 mil m², SPA e Sky Lounge. 2 quartos a partir de R$ 600 mil. Receba tabela, plantas e simulacao.",
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
        "WE Barra by Living: tabela, plantas e simulacao na Barra",
      ogDescription:
        "Compare tabela, plantas e fluxo do WE Barra: referencia de 2 quartos a partir de R$ 600 mil, sinal a partir de R$ 50 mil e mensais a partir de R$ 2.000.",
      ogImage: "/images/we-barra-pool-house-material.jpg"
    },
    faq: [
      {
        pergunta: "Consigo comprar com sinal a partir de R$ 50 mil?",
        resposta:
          "Esse sinal e uma referencia comunicada inicialmente. O valor final depende da unidade, tipologia, campanha, tabela vigente e aprovacao comercial."
      },
      {
        pergunta: "Como funciona o fluxo durante a obra?",
        resposta:
          "A simulacao considera entrada, mensais, possiveis reforcos, correcao por indice de obra e saldo na entrega ou financiamento."
      },
      {
        pergunta: "Quais tipologias estao previstas?",
        resposta:
          "O projeto comunica apartamentos de 2, 3 e 4 quartos, alem de gardens, coberturas duplex e coberturas lineares. Metragens e disponibilidade precisam ser confirmadas."
      },
      {
        pergunta: "Onde fica o WE Barra by Living?",
        resposta:
          "O endereco comunicado e Av. das Americas 12800, na Barra da Tijuca, proximo ao eixo Salvador Allende."
      },
      {
        pergunta: "Consigo escolher andar, coluna e posicao?",
        resposta:
          "A escolha depende da disponibilidade da tabela vigente. O atendimento compara andar, coluna, vista, orientacao e fluxo antes da reserva."
      },
      {
        pergunta: "O WE Barra e melhor para morar ou investir?",
        resposta:
          "Pode atender os dois perfis. Para morar, pesam lazer, acesso e planta. Para investir, entram liquidez, demanda, ticket e facilidade de revenda."
      },
      {
        pergunta: "Os valores comunicados sao finais?",
        resposta:
          "Nao. Precos, entrada, parcelas, disponibilidade, previsao de entrega e condicoes precisam ser confirmados antes de qualquer decisao."
      },
      {
        pergunta: "Como recebo tabela, plantas e simulacao?",
        resposta:
          "Preencha o formulario para receber material do empreendimento e uma simulacao de fluxo pelo WhatsApp."
      }
    ],
    whatsapp: {
      numero: siteConfig.whatsapp,
      mensagem:
        "Ola, vi a pagina do WE Barra by Living e gostaria de receber tabela, plantas e simulacao para entender sinal, mensais e unidades disponiveis."
    },
    tracking: {
      formEventName: "form_submit_we_barra",
      whatsappEventName: "whatsapp_click_we_barra",
      pageViewEventName: "page_view_we_barra"
    },
    localizacao: {
      titulo: "Av. das Americas com conexao estrategica na Barra",
      descricao:
        "O endereco comunicado e Av. das Americas 12800, proximo ao eixo Salvador Allende, em uma regiao com acesso, servicos e demanda por apartamentos novos.",
      pontos: [
        "Av. das Americas como eixo de acesso e visibilidade",
        "Conexao com Salvador Allende, Recreio e Barra",
        "Entorno com comercio, servicos, BRT e polos de conveniencia"
      ],
      categorias: [
        {
          titulo: "Mobilidade",
          icon: "navigation",
          itens: [
            { nome: "Av. das Americas", tempo: "1 min" },
            { nome: "Estacao BRT", tempo: "1 min" },
            { nome: "Av. Lucio Costa", tempo: "8 min" },
            { nome: "Metro Jardim Oceanico", tempo: "16 min" }
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
          titulo: "Educacao",
          icon: "school",
          itens: [
            { nome: "Pensi", tempo: "5 min" },
            { nome: "Escola Parque", tempo: "5 min" },
            { nome: "Maple Bear", tempo: "6 min" },
            { nome: "Colegio Santo Agostinho", tempo: "10 min" }
          ]
        },
        {
          titulo: "Saude",
          icon: "health",
          itens: [
            { nome: "Hospital Rio Barra", tempo: "9 min" },
            { nome: "Barra D'Or", tempo: "12 min" },
            { nome: "Hospital Vitoria", tempo: "12 min" }
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
      "Imagens, plantas, valores e disponibilidade estao sujeitos a confirmacao."
  }
];

export function getImovelBySlug(slug: string) {
  return imoveis.find((imovel) => imovel.slug === slug);
}

export function getImovelDestaque(imovel: Imovel) {
  return imovel.imagens.find((imagem) => imagem.destaque) || imovel.imagens[0];
}
