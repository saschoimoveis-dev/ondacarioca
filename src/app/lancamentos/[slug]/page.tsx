import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlocoCondicoes } from "@/components/BlocoCondicoes";
import { BlocoConceito } from "@/components/BlocoConceito";
import { BlocoCredibilidade } from "@/components/BlocoCredibilidade";
import { BlocoFluxoPagamento } from "@/components/BlocoFluxoPagamento";
import { BlocoLazer } from "@/components/BlocoLazer";
import { BlocoLocalizacao } from "@/components/BlocoLocalizacao";
import { BlocoPreference } from "@/components/BlocoPreference";
import { BlocoServicos } from "@/components/BlocoServicos";
import { BlocoTipologias } from "@/components/BlocoTipologias";
import { FaqSection } from "@/components/FaqSection";
import { HeroImovel } from "@/components/HeroImovel";
import { LeadForm } from "@/components/LeadForm";
import { PageViewTracker } from "@/components/PageViewTracker";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { getImovelBySlug, imoveis } from "@/data/imoveis";
import { absoluteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return imoveis.map((imovel) => ({
    slug: imovel.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const imovel = getImovelBySlug(slug);

  if (!imovel) {
    return {
      title: "Lancamento nao encontrado"
    };
  }

  return {
    title: imovel.seo.title,
    description: imovel.seo.description,
    keywords: imovel.seo.keywords,
    alternates: {
      canonical: imovel.seo.canonicalPath
    },
    openGraph: {
      title: imovel.seo.ogTitle,
      description: imovel.seo.ogDescription,
      url: absoluteUrl(imovel.seo.canonicalPath),
      images: imovel.seo.ogImage
        ? [
            {
              url: absoluteUrl(imovel.seo.ogImage),
              width: 1600,
              height: 900,
              alt: imovel.nome
            }
          ]
        : undefined
    }
  };
}

export default async function ImovelPage({ params }: PageProps) {
  const { slug } = await params;
  const imovel = getImovelBySlug(slug);

  if (!imovel) {
    notFound();
  }

  return (
    <>
      <SeoJsonLd imovel={imovel} />
      <PageViewTracker imovel={imovel} />
      <HeroImovel imovel={imovel} />
      <BlocoConceito imovel={imovel} />
      <BlocoTipologias imovel={imovel} />
      <BlocoLazer imovel={imovel} />
      <BlocoServicos imovel={imovel} />
      <BlocoPreference imovel={imovel} />
      <BlocoLocalizacao imovel={imovel} />
      <BlocoCondicoes imovel={imovel} />
      <BlocoFluxoPagamento imovel={imovel} />
      <BlocoCredibilidade imovel={imovel} />
      <FaqSection imovel={imovel} />
      <LeadForm imovel={imovel} />
      <StickyMobileCTA imovel={imovel} />
    </>
  );
}
