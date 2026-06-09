import { Banknote, CalendarClock, Home, Landmark, MapPin } from "lucide-react";
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
  const ficha = imovel.fichaTecnica || [];

  return (
    <section className="border-y border-[var(--border-warm)] bg-white" id="condicoes">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Ficha tecnica
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Chamariz financeiro do lancamento
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Preco inicial, sinal e mensais sao as primeiras perguntas de quem
            quer comprar na planta. Use esses dados como ponto de partida para
            pedir uma simulacao real.
          </p>
        </div>

        {ficha.length ? (
          <div className="mb-8 grid gap-3 md:grid-cols-4">
            {ficha.map((item, index) => (
              <div key={item.label} className="border-l-2 border-[var(--accent)] pl-4">
                {index === 0 ? (
                  <MapPin className="mb-3 size-5 text-[var(--brand)]" />
                ) : null}
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Referencias comerciais
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          {condicoes.map((condicao) => {
            const Icon = condicao.icon;

            return (
              <div
                key={condicao.label}
                className="premium-card border p-5"
              >
                <Icon className="mb-4 size-6 text-[var(--brand)]" aria-hidden="true" />
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
        <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-600">
          {imovel.condicoesAviso}
        </p>
      </div>
    </section>
  );
}
