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
      "Terreno amplo de mais de 25 mil m² comunicados",
      "Lazer completo com piscinas, academia, gourmet, festas, coworking e brinquedoteca",
      "Sky Lounge/rooftop e areas externas como diferenciais de desejo",
      "Plantas de 2 a 4 quartos com suite, gardens e coberturas",
      "Tabela, plantas e simulacao para comparar unidade antes da decisao"
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
      "Lista VIP com tabela, ficha tecnica, imagens e plantas",
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
        "Entre na lista VIP do WE Barra by Living, lancamento Living Cyrela na Barra da Tijuca com 2 quartos a partir de R$ 600 mil, sinal a partir de R$ 50 mil e mensais a partir de R$ 2.000. Receba tabela, plantas e simulacao.",
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
        "WE Barra by Living: lista VIP, plantas e tabela na Barra da Tijuca",
      ogDescription:
        "Compare tabela, plantas e fluxo do WE Barra: referencia de 2 quartos a partir de R$ 600 mil, sinal a partir de R$ 50 mil e mensais a partir de R$ 2.000.",
      ogImage: "/images/we-barra-pool-house-material.jpg"
    },
    faq: [
      {
        pergunta: "Consigo comprar com sinal a partir de R$ 50 mil?",
        resposta:
          "A condicao comunicada inicialmente fala em sinal a partir de R$ 50 mil, mas o valor final depende da unidade, tipologia, tabela vigente, campanha comercial e aprovacao. A simulacao mostra se essa entrada faz sentido para o seu perfil."
      },
      {
        pergunta: "Como funcionam as mensais a partir de R$ 2.000?",
        resposta:
          "As mensais comunicadas a partir de R$ 2.000 sao referencia inicial de fluxo durante a obra. O valor pode mudar conforme unidade, prazo, intermediarias, correcao e saldo final. Por isso a simulacao e mais importante do que olhar apenas o preco."
      },
      {
        pergunta: "Por que avaliar o WE Barra ainda no lancamento?",
        resposta:
          "Porque a fase de lancamento costuma concentrar maior variedade de unidades, mais poder de escolha e condicoes iniciais mais competitivas. A decisao deve comparar unidade, fluxo, posicao, tipologia e objetivo."
      },
      {
        pergunta: "Onde fica o WE Barra by Living?",
        resposta:
          "O endereco comunicado e Av. das Americas 12800, na Barra da Tijuca, em ponto de forte visibilidade e conexao com a Av. Salvador Allende."
      },
      {
        pergunta: "Quais tipologias estao previstas?",
        resposta:
          "O projeto comunica apartamentos de 2 quartos, 3 quartos e 4 quartos, alem de gardens, coberturas duplex e coberturas lineares. As metragens e disponibilidade precisam ser confirmadas na tabela vigente."
      },
      {
        pergunta: "Qual tipologia tende a ter mais liquidez?",
        resposta:
          "Em geral, 2 e 3 quartos podem ter procura mais ampla para locacao e revenda, enquanto gardens e coberturas se destacam pela escassez. A melhor escolha depende de preco, andar, vista, orientacao e fluxo."
      },
      {
        pergunta: "Como funciona o fluxo durante a obra?",
        resposta:
          "Normalmente o comprador avalia sinal ou ato, parcelas durante a obra, possiveis reforcos, correcao por indice de obra e saldo na entrega ou financiamento. A simulacao ajuda a entender se a unidade cabe no caixa."
      },
      {
        pergunta: "Consigo escolher andar, coluna e posicao?",
        resposta:
          "A escolha depende da disponibilidade da tabela vigente. Entrar cedo na lista ajuda a comparar andar, coluna, posicao, vista e orientacao, mas nenhuma unidade e reservada sem confirmacao comercial."
      },
      {
        pergunta: "Qual e o valor de entrada para o WE Barra by Living?",
        resposta:
          "A referencia comunicada inicialmente e sinal a partir de R$ 50 mil. O valor final depende da unidade, tipologia, fluxo de pagamento e disponibilidade no momento da consulta."
      },
      {
        pergunta: "O WE Barra e melhor para morar ou investir?",
        resposta:
          "Pode atender os dois perfis. Para morar, entram conforto, lazer, acesso e rotina na Barra. Para investir, entram marca, liquidez, entrada, fluxo, tipologia e potencial de procura futura."
      },
      {
        pergunta: "Como recebo tabela, plantas e simulacao?",
        resposta:
          "Preencha o formulario no fim da pagina para entrar na lista VIP e receber tabela, plantas, material do empreendimento e uma simulacao de fluxo com Alexandre Sascho."
      },
      {
        pergunta: "Os valores comunicados sao finais?",
        resposta:
          "Nao. Sao referencias comerciais iniciais. Precos, entrada, parcelas, disponibilidade, previsao de entrega e condicoes precisam ser confirmados antes de qualquer decisao."
      },
      {
        pergunta: "O terreno amplo faz diferenca?",
        resposta:
          "Sim. Um terreno amplo permite melhor distribuicao de torres, areas comuns e lazer. No caso do WE Barra, o material de mercado comunica mais de 25 mil m² de terreno, sujeito a confirmacao comercial."
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
        "O endereco comunicado e Av. das Americas 12800, proximo ao eixo Salvador Allende, em uma regiao com mobilidade, servicos, centros comerciais e demanda constante por moradia e investimento.",
      pontos: [
        "Av. das Americas como eixo de acesso, servicos e visibilidade",
        "Conexao com Salvador Allende, Recreio, Barra e principais polos da regiao",
        "Zona de influencia de shopping, BRT, praia, comercio e demanda por apartamentos novos"
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
