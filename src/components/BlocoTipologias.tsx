import Image from "next/image";
import { BedDouble, Building2, Expand, TreePine } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";

type BlocoTipologiasProps = {
  imovel: Imovel;
};

const iconByIndex = [BedDouble, Building2, Expand, TreePine];

export function BlocoTipologias({ imovel }: BlocoTipologiasProps) {
  const plantas: NonNullable<Imovel["plantas"]> =
    imovel.plantas?.length
      ? imovel.plantas
      : imovel.tipologias.map((tipologia) => ({
          titulo: tipologia,
          metragem: "Sob consulta",
          imagem: undefined,
          descricao:
            "Consulte plantas, metragem, unidade disponivel e fluxo de pagamento para esta opcao."
        }));

  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#007f5f]">
            Plantas e unidades
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Plantas para comparar antes de decidir
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            O PDF reune plantas previas e metragens por tipologia. Use esta
            visao para decidir quais opcoes fazem sentido antes do atendimento.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {plantas.map((planta, index) => {
            const Icon = iconByIndex[index % iconByIndex.length];

            return (
              <div
                key={`${planta.titulo}-${planta.metragem}`}
                className="overflow-hidden border border-slate-200 bg-white shadow-sm"
              >
                {planta.imagem ? (
                  <div className="relative aspect-[16/9] bg-slate-100">
                    <Image
                      src={planta.imagem}
                      alt={`Planta previa ${planta.titulo} ${planta.metragem} do ${imovel.nome}`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="p-5">
                  <Icon className="mb-4 size-6 text-[#173f34]" aria-hidden="true" />
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                    {planta.metragem}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">
                    {planta.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {planta.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <CtaLink
            href="#lead-form"
            label="Receber PDF com todas as plantas"
            imovel={imovel}
            source="plantas_pdf_cta"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
