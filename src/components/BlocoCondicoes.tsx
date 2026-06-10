import { Banknote, CalendarClock, Home, Landmark } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoCondicoesProps = {
  imovel: Imovel;
};

export function BlocoCondicoes({ imovel }: BlocoCondicoesProps) {
  const condicoes = [
    {
      label: "Preco inicial",
      value: imovel.precoInicial || "Sob consulta",
      icon: Banknote
    },
    {
      label: "Sinal comunicado",
      value: imovel.sinalInicial || "Sob consulta",
      icon: Landmark
    },
    {
      label: "Mensais",
      value: imovel.parcelasIniciais || "Sob consulta",
      icon: CalendarClock
    },
    {
      label: "Tipologias",
      value: "2, 3, 4Q, gardens e coberturas",
      icon: Home
    }
  ];
  const mixUnidades = [
    "102 un. 2Q 63m²",
    "76 un. 2Q 70m²",
    "183 un. 3Q 83m²",
    "102 un. 4Q 100m²",
    "77 un. 4Q 118m²",
    "20 gardens 95m² a 184m²",
    "33 coberturas duplex",
    "12 coberturas lineares"
  ];
  const ficha = imovel.fichaTecnica || [];

  return (
    <section
      className="border-y border-[var(--border-warm)] bg-white"
      id="condicoes"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Resumo decisivo
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              O essencial antes de avançar
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Endereco, escala, prazo e referencias comerciais reunidos para
              entender rapidamente se o produto merece simulacao.
            </p>
          </div>

          <div>
            {ficha.length ? (
              <div className="divide-y divide-[var(--border-warm)] border-y border-[var(--border-warm)]">
                {ficha.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-2 py-3 sm:grid-cols-[180px_1fr] sm:items-center"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold leading-snug text-slate-950">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-5">
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Mix de unidades
                </p>
                <p className="text-xs leading-5 text-slate-500">
                  Quantitativo do material, sujeito a disponibilidade.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {mixUnidades.map((item) => (
                  <span
                    key={item}
                    className="bg-[var(--surface-warm)] px-3 py-1.5 text-xs font-semibold text-slate-800 ring-1 ring-[var(--border-warm)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border-warm)] pt-7">
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Referencias comerciais
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                Numeros para qualificar a conversa
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Use como referencia inicial. Preco, entrada e parcelas precisam
              ser confirmados por unidade.
            </p>
          </div>

          <div className="grid gap-4 border-y border-[var(--border-warm)] py-4 md:grid-cols-4">
            {condicoes.map((condicao) => {
              const Icon = condicao.icon;

              return (
                <div
                  key={condicao.label}
                  className="flex gap-3 md:border-r md:border-[var(--border-warm)] md:pr-4 md:last:border-r-0"
                >
                  <Icon
                    className="mt-1 size-5 shrink-0 text-[var(--brand)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                      {condicao.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-slate-950">
                      {condicao.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-600">
          {imovel.condicoesAviso}
        </p>
      </div>
    </section>
  );
}
