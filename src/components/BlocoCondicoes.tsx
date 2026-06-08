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
      value: "2, 3 e 4 quartos",
      icon: Home
    }
  ];

  return (
    <section className="border-y border-stone-200 bg-white" id="condicoes">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a20]">
            Condicoes comunicadas
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Compare os principais pontos antes de falar com o corretor
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {condicoes.map((condicao) => {
            const Icon = condicao.icon;

            return (
              <div
                key={condicao.label}
                className="border border-stone-200 bg-[#fbfaf7] p-5"
              >
                <Icon className="mb-4 size-6 text-[#173f34]" aria-hidden="true" />
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#9a6a20]">
                  {condicao.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {condicao.value}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-600">
          {imovel.condicoesAviso}
        </p>
      </div>
    </section>
  );
}
