import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { LancamentosExplorer } from "@/components/LancamentosExplorer";
import { imoveis } from "@/data/imoveis";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portal de Lancamentos na Barra da Tijuca e Rio de Janeiro",
  description:
    "Portal da Onda Carioca Imoveis com lancamentos na Barra da Tijuca. Busque e filtre empreendimentos por bairro e tipologia e acesse paginas dedicadas com tabela, plantas, condicoes e atendimento pelo WhatsApp.",
  alternates: {
    canonical: "/lancamentos"
  },
  openGraph: {
    title: "Portal de Lancamentos na Barra da Tijuca | Onda Carioca Imoveis",
    description:
      "Busque e filtre lancamentos selecionados e acesse paginas dedicadas por empreendimento.",
    url: absoluteUrl("/lancamentos")
  }
};

export default function LancamentosPage() {
  const totalEmpreendimentos = imoveis.length;

  const resumo =
    totalEmpreendimentos === 1
      ? "1 lançamento selecionado"
      : `${totalEmpreendimentos} lançamentos selecionados`;

  return (
    <>
      <section className="surface-hero">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              <Building2 className="size-4" aria-hidden="true" />
              Portal de Lançamentos
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              Encontre seu próximo lançamento na Barra
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              {resumo} · Atendimento consultivo e sem custo pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <LancamentosExplorer imoveis={imoveis} />
    </>
  );
}
