import type { Imovel } from "@/data/imoveis";

type BlocoCondicoesProps = {
  imovel: Imovel;
};

export function BlocoCondicoes({ imovel }: BlocoCondicoesProps) {
  const resumo = [
    "605 unidades",
    "2Q, 3Q e 4Q",
    "Gardens e coberturas",
    "Entrega maio/2029"
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
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Resumo decisivo
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              O essencial antes de avançar
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Endereco, escala, prazo e mix de unidades reunidos para entender
              rapidamente se o produto merece simulacao.
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Preco, sinal e mensais aparecem no topo como referencia inicial.
              A condicao final precisa ser confirmada por unidade.
            </p>
          </div>

          <div>
            <div className="mb-5 grid gap-2 sm:grid-cols-4">
              {resumo.map((item) => (
                <div
                  key={item}
                  className="bg-[var(--surface-green)] px-3 py-3 text-sm font-semibold leading-snug text-[var(--brand)]"
                >
                  {item}
                </div>
              ))}
            </div>

            {ficha.length ? (
              <div className="divide-y divide-[var(--border-warm)] border-y border-[var(--border-warm)]">
                {ficha.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-2 py-3 sm:grid-cols-[160px_1fr] sm:items-center"
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

            <details className="mt-5 border-y border-[var(--border-warm)] py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-950">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Mix de unidades
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Ver detalhes
                </span>
              </summary>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                  Quantitativo do material, sujeito a disponibilidade.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {mixUnidades.map((item) => (
                  <span
                    key={item}
                    className="border-l border-[var(--border-warm)] pl-3 text-xs font-semibold leading-5 text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </details>
          </div>
        </div>
        <p className="mt-6 max-w-4xl border-t border-[var(--border-warm)] pt-5 text-sm leading-6 text-slate-600">
          {imovel.condicoesAviso}
        </p>
      </div>
    </section>
  );
}
