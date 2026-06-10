import { Banknote, CalendarClock, Landmark, TrendingUp } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";

type BlocoFluxoPagamentoProps = {
  imovel: Imovel;
};

const etapas = [
  {
    title: "Entrada real",
    text: "Confirme quanto entra no ato e se ha reforcos ou intermediarias.",
    icon: Banknote
  },
  {
    title: "Parcelas na obra",
    text: "Veja o peso mensal no caixa e o impacto do cronograma.",
    icon: CalendarClock
  },
  {
    title: "Correcao e prazo",
    text: "Inclua INCC, tempo de obra e condicoes comerciais vigentes.",
    icon: TrendingUp
  },
  {
    title: "Saldo na entrega",
    text: "Planeje financiamento ou recursos proprios antes da assinatura.",
    icon: Landmark
  }
];

export function BlocoFluxoPagamento({ imovel }: BlocoFluxoPagamentoProps) {
  return (
    <section className="bg-white py-12 sm:py-14" id="fluxo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Fluxo de pagamento
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              O que precisa entrar na simulacao
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A decisao nao depende so do preco. O fluxo precisa caber na
              entrada disponivel, no caixa mensal e no saldo final.
            </p>
          </div>

          <ol className="grid gap-0 divide-y divide-[var(--border-warm)] border-y border-[var(--border-warm)] md:grid-cols-4 md:divide-x md:divide-y-0">
            {etapas.map((etapa, index) => {
              const Icon = etapa.icon;

              return (
                <li key={etapa.title} className="p-4">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <Icon
                      className="size-5 text-[var(--brand)]"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-950">
                    {etapa.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {etapa.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-7">
          <CtaLink
            href="#lead-form"
            label="Receber tabela e simulacao"
            imovel={imovel}
            source="fluxo_pagamento_cta"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
