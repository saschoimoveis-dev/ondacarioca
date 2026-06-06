import type { Imovel } from "@/data/imoveis";
import { absoluteUrl, siteConfig } from "@/lib/site";

type SeoJsonLdProps = {
  imovel: Imovel;
};

export function SeoJsonLd({ imovel }: SeoJsonLdProps) {
  const propertySchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: imovel.nome,
    url: absoluteUrl(imovel.seo.canonicalPath),
    description: imovel.seo.description,
    image: imovel.imagens.map((imagem) => absoluteUrl(imagem.src)),
    address: {
      "@type": "PostalAddress",
      addressLocality: imovel.cidade,
      addressRegion: imovel.estado,
      addressCountry: "BR",
      streetAddress: imovel.enderecoResumo
    },
    offers: {
      "@type": "Offer",
      price: imovel.precoInicialNumerico,
      priceCurrency: "BRL",
      availability: "https://schema.org/LimitedAvailability",
      seller: {
        "@type": "RealEstateAgent",
        name: siteConfig.legalName,
        telephone: siteConfig.phoneDisplay
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: imovel.faq.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
