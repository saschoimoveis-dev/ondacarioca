import { Banknote, CalendarClock, Landmark, TrendingUp } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";

type BlocoFluxoPagamentoProps = {
  imovel: Imovel;
};

const etapas = [
  {
    title: "Sinal ou ato",
    text: "Entrada inicial comunicada pela tabela, variando conforme unidade, campanha e aprovacao comercial.",
    icon: Banknote
  },
  {
    title: "Parcelas durante a obra",
    text: "Mensais e possiveis intermediarias precisam caber no seu caixa enquanto a obra avanca.",
    icon: CalendarClock
  },
  {
    title: "INCC e condicoes",
    text: "A simulacao deve considerar reajustes, tabela vigente, prazo de obra e aprovacao comercial.",
    icon: TrendingUp
  },
  {
    title: "Saldo na entrega",
    text: "O saldo pode depender de financiamento, recursos proprios e momento da entrega.",
    icon: Landmark
  }
];

export function BlocoFluxoPagamento({ imovel }: BlocoFluxoPagamentoProps) {
  return (
    <section className="bg-white py-14 sm:py-16" id="fluxo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Fluxo de pagamento
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Entenda o fluxo antes de escolher a unidade
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Comprar na planta permite diluir parte do pagamento durante a obra,
            mas a decisao so e boa quando entrada, mensais, correcao e saldo
            final cabem no seu plano.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {etapas.map((etapa, index) => {
            const Icon = etapa.icon;

            return (
              <div
                key={etapa.title}
                className="premium-card border p-5"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <Icon className="size-6 text-[var(--brand)]" aria-hidden="true" />
                  <span className="text-xs font-semibold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-950">
                  {etapa.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {etapa.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <CtaLink
            href="#lead-form"
            label="Simular meu fluxo"
            imovel={imovel}
            source="fluxo_pagamento_cta"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
