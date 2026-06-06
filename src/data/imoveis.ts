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
  tipologias: string[];
  metragens?: string[];
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
    enderecoResumo: "Barra da Tijuca, Rio de Janeiro - RJ",
    precoInicial: "2 quartos a partir de R$ 600 mil",
    precoInicialNumerico: 600000,
    sinalInicial: "a partir de R$ 50 mil",
    parcelasIniciais: "a partir de R$ 2.000",
    tipologias: [
      "Apartamentos de 2 quartos",
      "Apartamentos de 3 quartos",
      "Apartamentos de 4 quartos",
      "Gardens",
      "Coberturas lineares",
      "Coberturas duplex"
    ],
    metragens: [
      "Plantas de 2 quartos",
      "Plantas de 3 e 4 quartos",
      "Gardens com area externa",
      "Coberturas lineares e duplex"
    ],
    diferenciais: [
      "Lancamento na Barra da Tijuca com plantas para morar ou investir",
      "Opcoes de 2, 3 e 4 quartos, gardens e coberturas",
      "Conds comerciais comunicadas com entrada e parcelas facilitadas",
      "Atendimento direto para tabela, plantas e disponibilidade atualizada",
      "Produto com potencial para campanhas de busca, remarketing e SEO local"
    ],
    descricaoCurta:
      "Lancamento imobiliario na Barra da Tijuca com apartamentos de 2, 3 e 4 quartos, gardens, coberturas lineares e duplex.",
    descricaoLonga:
      "O WE Barra by Living e um lancamento imobiliario na Barra da Tijuca pensado para compradores que buscam um apartamento novo em uma das regioes mais desejadas do Rio de Janeiro. A pagina centraliza condicoes comerciais comunicadas, tipologias, diferenciais e um canal direto para receber tabela, plantas e disponibilidade com o corretor Alexandre Sascho.",
    publicoIdeal: [
      "Compradores que desejam morar na Barra da Tijuca",
      "Familias avaliando apartamentos novos de 2, 3 ou 4 quartos",
      "Investidores buscando lancamentos com apelo de liquidez",
      "Clientes que precisam comparar entrada, parcelas e tipologias"
    ],
    argumentosComerciais: [
      "Entrada comunicada a partir de R$ 50 mil",
      "Mensais comunicadas a partir de R$ 2.000",
      "Atendimento pelo WhatsApp com envio de tabela e plantas",
      "Pagina otimizada para campanhas de Google Ads Search"
    ],
    objecoes: [
      "Valores e disponibilidade podem mudar sem aviso previo.",
      "A condicao final depende da unidade, tipologia, fluxo de pagamento e aprovacao comercial.",
      "Imagens desta primeira versao sao ilustrativas ate insercao do material oficial do empreendimento."
    ],
    imagens: [
      {
        src: "/images/we-barra-fachada.png",
        alt: "Imagem ilustrativa da fachada do WE Barra by Living na Barra da Tijuca",
        destaque: true
      },
      {
        src: "/images/we-barra-sala-varanda.png",
        alt: "Imagem ilustrativa de sala integrada a varanda em apartamento na Barra da Tijuca"
      },
      {
        src: "/images/we-barra-lazer.png",
        alt: "Imagem ilustrativa da area de lazer com piscina de lancamento na Barra da Tijuca"
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
        "Apartamentos de 2, 3 e 4 quartos, gardens e coberturas. Fale com Alexandre Sascho e receba tabela atualizada pelo WhatsApp.",
      ogImage: "/images/we-barra-fachada.png"
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
          "Voce pode preencher o formulario ou clicar no WhatsApp para receber tabela, plantas e condicoes atualizadas com o corretor Alexandre Sascho."
      },
      {
        pergunta: "Os valores de R$ 600 mil e R$ 2.000 mensais sao finais?",
        resposta:
          "Nao. Sao valores comunicados como referencia inicial. Precos, parcelas, disponibilidade e condicoes comerciais precisam ser confirmados antes de qualquer decisao."
      },
      {
        pergunta: "O WE Barra by Living serve para investimento?",
        resposta:
          "Pode servir, dependendo do perfil, unidade escolhida, prazo de compra e estrategia. A pagina captura essas informacoes para qualificar o atendimento."
      },
      {
        pergunta: "A pagina usa imagens oficiais do empreendimento?",
        resposta:
          "Nesta primeira versao, as imagens sao ilustrativas e devem ser substituidas pelo material oficial assim que ele estiver disponivel."
      }
    ],
    whatsapp: {
      numero: siteConfig.whatsapp,
      mensagem:
        "Ola, vi a pagina do WE Barra by Living e gostaria de receber tabela, plantas e condicoes de pagamento."
    },
    tracking: {
      formEventName: "form_submit_we_barra",
      whatsappEventName: "whatsapp_click_we_barra",
      pageViewEventName: "page_view_we_barra"
    },
    localizacao: {
      titulo: "Barra da Tijuca, Rio de Janeiro",
      descricao:
        "Regiao de alta procura para apartamentos novos, com acesso a servicos, vias importantes, lazer, praia e polos comerciais do Rio de Janeiro.",
      pontos: [
        "Busca recorrente por lancamentos na Barra da Tijuca",
        "Perfil forte para morar, investir e comparar tipologias",
        "Contexto favoravel para campanhas de Google Ads Search"
      ],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Barra+da+Tijuca+Rio+de+Janeiro"
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
