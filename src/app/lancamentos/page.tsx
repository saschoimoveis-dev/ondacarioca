import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Search, Target } from "lucide-react";
import { ImovelCard } from "@/components/ImovelCard";
import { imoveis } from "@/data/imoveis";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lancamentos na Barra da Tijuca e Rio de Janeiro",
  description:
    "Hub da Onda Carioca Imoveis com lancamentos na Barra da Tijuca e paginas especificas por empreendimento para tabela, plantas, condicoes e atendimento pelo WhatsApp.",
  alternates: {
    canonical: "/lancamentos"
  },
  openGraph: {
    title: "Lancamentos na Barra da Tijuca | Onda Carioca Imoveis",
    description:
      "Conheca lancamentos selecionados e acesse paginas dedicadas por imovel.",
    url: absoluteUrl("/lancamentos")
  }
};

export default function LancamentosPage() {
  return (
    <>
      <section className="surface-hero">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.84fr_1.16fr] lg:px-8 lg:py-16">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-6xl">
              Lancamentos na Barra da Tijuca
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Selecao de empreendimentos com paginas dedicadas, condicoes
              consultivas, captura de leads e tracking preparado para campanhas
              de busca e remarketing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/lancamentos/${imoveis[0].slug}`}
                className="btn-primary-premium inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition"
              >
                Ver WE Barra by Living
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href="#lista"
                className="btn-secondary-premium inline-flex items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition"
              >
                Ver lancamentos
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:content-end">
            {[
              {
                title: "SEO local",
                text: "Hub para buscas amplas de lancamentos na Barra.",
                icon: Search
              },
              {
                title: "Funil por imovel",
                text: "LP especifica para trafego pago e busca direta.",
                icon: Target
              },
              {
                title: "Dados para evoluir",
                text: "UTMs, eventos e origem prontos para analise.",
                icon: BarChart3
              }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="premium-card rounded-sm border p-5"
                >
                  <Icon
                    className="mb-4 size-6 text-[var(--brand)]"
                    aria-hidden="true"
                  />
                  <h2 className="text-base font-semibold text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-warm)] bg-slate-50 py-12" id="lista">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">
                Destaques de lancamentos
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Cada card leva para uma landing page propria com metadados,
                FAQ, CTA, formulario e eventos especificos.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {imoveis.map((imovel) => (
              <ImovelCard key={imovel.id} imovel={imovel} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="premium-frame rounded-sm border bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">
              Por que organizar por paginas especificas?
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
              Buscas genericas, como lancamentos na Barra da Tijuca, podem cair
              no hub. Buscas por nome do empreendimento, campanhas de Google Ads
              e remarketing devem ir direto para a LP do imovel, com copy,
              formulario, schema, evento e WhatsApp proprios.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
