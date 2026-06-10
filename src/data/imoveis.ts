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
      "2 quartos: 63m² e 70m²",
      "3 quartos: 83m²",
      "4 quartos: 100m² e 118m²",
      "Gardens: 95m² a 184m²",
      "Coberturas duplex: 125m² a 199m²",
      "Coberturas lineares: 142m² a 232m²"
    ],
    fichaTecnica: [
      {
        label: "Endereco",
        value: "Av. das Americas 12800, esquina com Salvador Allende"
      },
      {
        label: "Apartamentos",
        value: "605 unidades"
      },
      {
        label: "Terreno",
        value: "Mais de 25 mil m² comunicados"
      },
      {
        label: "Entrega prevista",
        value: "Maio/2029, sujeita a confirmacao"
      },
      {
        label: "Lazer",
        value: "Mais de 5 mil m² comunicados"
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
    descricaoCurta:
      "Lancamento Living Cyrela na Barra da Tijuca com apartamentos de 2, 3 e 4 quartos, gardens, coberturas lineares e duplex.",
    descricaoLonga:
      "Lancamento Living Cyrela na Av. das Americas, na Barra da Tijuca, com apartamentos de 2, 3 e 4 quartos, gardens e coberturas. Fale com Alexandre Sascho para receber tabela atualizada, plantas, unidades disponiveis e simulacao de fluxo.",
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
        "WE Barra by Living | Preco, Tabela e Apartamentos na Barra da Tijuca",
      description:
        "WE Barra by Living, lancamento Living Cyrela na Barra da Tijuca com 2 quartos a partir de R$ 600 mil, sinal a partir de R$ 50 mil e mensais a partir de R$ 2.000. Receba tabela, plantas e simulacao.",
      keywords: [
        "WE Barra",
        "WE Barra by Living",
        "WE Barra Living",
        "WE Barra Cyrela",
        "WE Barra lancamento",
        "WE Barra preco",
        "WE Barra tabela",
        "WE Barra valores",
        "WE Barra plantas",
        "WE Barra condicoes",
        "apartamento na Barra da Tijuca",
        "lancamento Barra da Tijuca",
        "apartamento novo Barra da Tijuca",
        "apartamento na planta Barra da Tijuca",
        "apartamento Avenida das Americas",
        "apartamento 2 quartos Barra da Tijuca",
        "apartamento 3 quartos Barra da Tijuca",
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
