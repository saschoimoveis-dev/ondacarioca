import { BedDouble, Building2, Expand, TreePine } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoTipologiasProps = {
  imovel: Imovel;
};

const iconByIndex = [BedDouble, Building2, Expand, TreePine];

export function BlocoTipologias({ imovel }: BlocoTipologiasProps) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-slate-950">
            Tipologias para comparar antes de decidir
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A estrutura de dados da pagina permite que cada tipologia seja usada
            em campanhas, FAQ, eventos e qualificacao do lead.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {imovel.tipologias.map((tipologia, index) => {
            const Icon = iconByIndex[index % iconByIndex.length];

            return (
              <div
                key={tipologia}
                className="rounded-sm border border-slate-200 bg-slate-50 p-5"
              >
                <Icon className="mb-4 size-6 text-emerald-700" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-950">
                  {tipologia}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Consulte metragem, disponibilidade e fluxo de pagamento para
                  esta opcao.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
