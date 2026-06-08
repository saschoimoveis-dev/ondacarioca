import { BedDouble, Building2, Expand, TreePine } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoTipologiasProps = {
  imovel: Imovel;
};

const iconByIndex = [BedDouble, Building2, Expand, TreePine];

export function BlocoTipologias({ imovel }: BlocoTipologiasProps) {
  return (
    <section className="bg-[#fbfaf7] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a20]">
            Plantas e unidades
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Tipologias para comparar antes de decidir
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Veja as opcoes comunicadas e solicite as plantas para entender
            metragem, coluna, fluxo de pagamento e disponibilidade atual.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {imovel.tipologias.map((tipologia, index) => {
            const Icon = iconByIndex[index % iconByIndex.length];

            return (
              <div
                key={tipologia}
                className="border border-stone-200 bg-white p-5"
              >
                <Icon className="mb-4 size-6 text-[#173f34]" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-950">
                  {tipologia}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Consulte plantas, metragem, unidade disponivel e fluxo de
                  pagamento para esta opcao.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
