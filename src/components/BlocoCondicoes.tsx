import { Banknote, CalendarClock, Home, Landmark } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoCondicoesProps = {
  imovel: Imovel;
};

export function BlocoCondicoes({ imovel }: BlocoCondicoesProps) {
  const condicoes = [
    {
      label: "Preco inicial comunicado",
      value: imovel.precoInicial || "Sob consulta",
      icon: Banknote
    },
    {
      label: "Sinal inicial comunicado",
      value: imovel.sinalInicial || "Sob consulta",
      icon: Landmark
    },
    {
      label: "Mensais comunicadas",
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
    <section className="border-y border-slate-200 bg-slate-50" id="condicoes">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:grid-cols-4">
          {condicoes.map((condicao) => {
            const Icon = condicao.icon;

            return (
              <div
                key={condicao.label}
                className="rounded-sm border border-slate-200 bg-white p-5 shadow-sm"
              >
                <Icon className="mb-4 size-6 text-emerald-700" aria-hidden="true" />
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  {condicao.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {condicao.value}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          {imovel.condicoesAviso}
        </p>
      </div>
    </section>
  );
}
