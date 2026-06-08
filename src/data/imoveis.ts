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
        value: "Av. das Americas 12800 - Barra da Tijuca"
      },
      {
        label: "Apartamentos",
        value: "605 unidades"
      },
      {
        label: "Tipologias",
        value: "2, 3, 4 quartos, gardens e coberturas"
      },
      {
        label: "Lazer",
        value: "Mais de 5 mil m²"
      }
    ],
    plantas: [
      {
        titulo: "2 quartos",
        metragem: "63m² e 70m²",
        descricao: "Opcoes compactas com suite, varanda e distribuicao pensada para rotina na Barra.",
        imagem: "/images/we-barra-planta-70m-material.jpg"
      },
      {
        titulo: "3 quartos",
        metragem: "83m²",
        descricao: "Planta intermediaria para familias que precisam comparar conforto, valor e fluxo.",
        imagem: "/images/we-barra-planta-83m-material.jpg"
      },
      {
        titulo: "4 quartos",
        metragem: "100m² e 118m²",
        descricao: "Unidades maiores para quem prioriza mais area privativa e configuracao familiar.",
        imagem: "/images/we-barra-planta-100m-material.jpg"
      },
      {
        titulo: "Gardens e coberturas",
        metragem: "95m² a 232m²",
        descricao: "Opcoes com areas externas, coberturas duplex e lineares para perfis mais exclusivos.",
        imagem: "/images/we-barra-cobertura-142m-material.jpg"
      }
    ],
    diferenciais: [
      "Mais de 5 mil m² de lazer",
      "Piscina e areas externas com paisagismo",
      "Pool house com vista para o lazer",
      "Plantas de 2 a 4 quartos, gardens e coberturas",
      "PDF completo com ficha tecnica e plantas para comparar antes do atendimento"
    ],
    descricaoCurta:
      "Lancamento imobiliario na Barra da Tijuca com apartamentos de 2, 3 e 4 quartos, gardens, coberturas lineares e duplex.",
    descricaoLonga:
      "Lancamento na Barra da Tijuca com apartamentos de 2, 3 e 4 quartos, gardens e coberturas. Fale com Alexandre Sascho para receber tabela atualizada, plantas, unidades disponiveis e condicoes de pagamento comunicadas.",
    publicoIdeal: [
      "Compradores que desejam morar na Barra da Tijuca",
      "Familias avaliando apartamentos novos de 2, 3 ou 4 quartos",
      "Investidores buscando lancamentos com apelo de liquidez",
      "Clientes que precisam comparar entrada, parcelas e tipologias"
    ],
    argumentosComerciais: [
      "Entrada comunicada a partir de R$ 50 mil",
      "Mensais comunicadas a partir de R$ 2.000",
      "PDF com ficha tecnica, imagens e plantas",
      "Atendimento para comparar tipologia, fluxo e melhor unidade"
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
        "Conheca o WE Barra by Living, lancamento na Barra da Tijuca com apartamentos de 2, 3 e 4 quartos, opcoes a partir de R$ 600 mil, sinal a partir de R$ 50 mil e mensais a partir de R$ 2.000. Receba tabela e condicoes pelo WhatsApp.",
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
        "WE Barra by Living: tabela, plantas e condicoes na Barra da Tijuca",
      ogDescription:
        "Apartamentos de 2, 3 e 4 quartos, gardens e coberturas. Receba PDF completo, tabela atualizada e disponibilidade pelo WhatsApp.",
      ogImage: "/images/we-barra-pool-house-material.jpg"
    },
    faq: [
      {
        pergunta: "Qual e o valor de entrada para o WE Barra by Living?",
        resposta:
          "A condicao comunicada inicialmente e sinal a partir de R$ 50 mil. O valor final depende da unidade, tipologia, fluxo de pagamento e disponibilidade no momento da consulta."
      },
      {
        pergunta: "O WE Barra tem apartamentos de 2 quartos?",
        resposta:
          "Sim. A comunicacao inicial informa apartamentos de 2, 3 e 4 quartos, alem de gardens, coberturas lineares e coberturas duplex."
      },
      {
        pergunta: "Como recebo a tabela do WE Barra?",
        resposta:
          "Voce pode preencher o formulario no fim da pagina para receber o PDF de apresentacao, tabela, plantas e condicoes atualizadas com o corretor Alexandre Sascho."
      },
      {
        pergunta: "Os valores de R$ 600 mil e R$ 2.000 mensais sao finais?",
        resposta:
          "Nao. Sao valores comunicados como referencia inicial. Precos, parcelas, disponibilidade e condicoes comerciais precisam ser confirmados antes de qualquer decisao."
      },
      {
        pergunta: "O WE Barra by Living serve para investimento?",
        resposta:
          "Pode servir, dependendo do perfil, unidade escolhida, prazo de compra e estrategia. O atendimento ajuda a comparar tipologia, fluxo de pagamento e disponibilidade."
      },
      {
        pergunta: "A pagina usa imagens oficiais do empreendimento?",
        resposta:
          "As imagens e plantas foram extraidas do material de apresentacao do empreendimento, mas seguem como previas e referenciais, sujeitas a alteracoes pela incorporadora."
      }
    ],
    whatsapp: {
      numero: siteConfig.whatsapp,
      mensagem:
        "Ola, vi a pagina do WE Barra by Living e gostaria de receber o PDF, tabela, plantas e condicoes de pagamento."
    },
    tracking: {
      formEventName: "form_submit_we_barra",
      whatsappEventName: "whatsapp_click_we_barra",
      pageViewEventName: "page_view_we_barra"
    },
    localizacao: {
      titulo: "Barra da Tijuca, Rio de Janeiro",
      descricao:
        "O material de apresentacao informa endereco na Av. das Americas 12800, na Barra da Tijuca, regiao de alta procura para apartamentos novos no Rio de Janeiro.",
      pontos: [
        "Regiao procurada por quem busca apartamento novo na Barra",
        "Perfil forte para morar, investir e comparar tipologias",
        "Acesso a servicos, lazer, praia e polos comerciais do Rio"
      ],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Av.+das+Americas+12800+Barra+da+Tijuca+Rio+de+Janeiro"
    },
    condicoesAviso:
      "Valores, metragem, disponibilidade, imagens e condicoes comerciais precisam ser confirmados com o corretor antes de qualquer decisao."
  }
];

export function getImovelBySlug(slug: string) {
  return imoveis.find((imovel) => imovel.slug === slug);
}

export function getImovelDestaque(imovel: Imovel) {
  return imovel.imagens.find((imagem) => imagem.destaque) || imovel.imagens[0];
}
