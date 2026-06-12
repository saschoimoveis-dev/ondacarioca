import { Banknote, CalendarClock, Landmark, TrendingUp, Calculator } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";

type BlocoFluxoPagamentoProps = {
  imovel: Imovel;
};

const etapas = [
  {
    title: "Entrada real",
    text: "Confirme quanto entra no ato e se há reforços ou intermediárias.",
    icon: Banknote
  },
  {
    title: "Parcelas na obra",
    text: "Veja o peso mensal no caixa e o impacto do cronograma.",
    icon: CalendarClock
  },
  {
    title: "Correção e prazo",
    text: "Inclua INCC, tempo de obra e condições comerciais vigentes.",
    icon: TrendingUp
  },
  {
    title: "Saldo na entrega",
    text: "Planeje financiamento ou recursos próprios antes da assinatura.",
    icon: Landmark
  }
];

export function BlocoFluxoPagamento({ imovel }: BlocoFluxoPagamentoProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-24" id="fluxo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center animate-fade-in-up">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              <Calculator className="size-4" />
              Fluxo de Pagamento
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
              A matemática a favor da sua decisão
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              A melhor unidade não é só a mais barata. Montamos um fluxo personalizado comparando entrada, parcelas, correção e saldo para encontrar o cenário ideal para o seu bolso.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaLink
                href="#lead-form"
                label="Solicitar Simulação Personalizada"
                imovel={imovel}
                source="fluxo_pagamento_cta"
                variant="primary"
              />
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Sem compromisso. Entenda os números antes de visitar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 relative">
            {/* Linha conectora desktop */}
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[var(--surface-green)] via-[var(--brand)]/20 to-[var(--surface-green)] -translate-y-1/2 z-0" />
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--surface-green)] via-[var(--brand)]/20 to-[var(--surface-green)] -translate-x-1/2 z-0" />

            {etapas.map((etapa, index) => {
              const Icon = etapa.icon;

              return (
                <div
                  key={etapa.title}
                  className="relative z-10 bg-white p-4 sm:p-6 rounded-2xl border border-[var(--border-warm)] shadow-sm hover:shadow-md transition-shadow group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-[var(--surface-green)] text-[var(--brand)] transition-transform group-hover:scale-110">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="text-[40px] font-black text-slate-100 leading-none">
                      {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900">
                    {etapa.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {etapa.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
