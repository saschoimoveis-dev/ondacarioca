import Image from "next/image";
import {
  BedDouble,
  Building2,
  Expand,
  TreePine,
} from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";

type BlocoTipologiasProps = {
  imovel: Imovel;
};

const iconByIndex = [BedDouble, Building2, Expand, TreePine];
const perfilPorPlanta = [
  "Ticket mais acessivel, liquidez e locacao.",
  "Equilibrio para familia, moradia e revenda.",
  "Mais area para permanencia e valorizacao.",
  "Escassez, area externa, vista e posicao."
];
const cuidadoPorPlanta = [
  "Comparar coluna, andar e fluxo final.",
  "Validar procura familiar e valor por m².",
  "Observar posicao, vista e ticket total.",
  "Comparar area externa, privacidade e vista."
];

export function BlocoTipologias({ imovel }: BlocoTipologiasProps) {
  const plantas: NonNullable<Imovel["plantas"]> =
    imovel.plantas?.length
      ? imovel.plantas
      : imovel.tipologias.map((tipologia) => ({
          titulo: tipologia,
          metragem: "Sob consulta",
          imagem: undefined,
          descricao: "Consulte metragem e disponibilidade para esta opcao."
        }));
  const metragens = imovel.metragens || [];
  const gruposMetragem = [
    {
      title: "Apartamentos",
      items: metragens.slice(0, 3)
    },
    {
      title: "Gardens",
      items: metragens.slice(3, 4)
    },
    {
      title: "Coberturas",
      items: metragens.slice(4)
    }
  ].filter((grupo) => grupo.items.length);

  return (
    <section className="bg-slate-50 py-10 sm:py-12" id="plantas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Tipologias por perfil
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Compare plantas pelo seu objetivo
            </h2>
          </div>
          <details className="border-y border-[var(--border-warm)] py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-950">
              <span>Metragens completas</span>
              <span className="text-xs font-medium text-slate-500">
                Ver lista
              </span>
            </summary>
            <div className="mt-3 grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-3">
              {gruposMetragem.map((grupo) => (
                <div key={grupo.title}>
                  <p className="font-semibold text-slate-950">
                    {grupo.title}
                  </p>
                  <p className="mt-1">{grupo.items.join(" | ")}</p>
                </div>
              ))}
            </div>
          </details>
        </div>

        <div className="mt-8 hidden gap-4 sm:grid-cols-2 lg:grid lg:grid-cols-4">
          {plantas.map((planta, index) => {
            const Icon = iconByIndex[index % iconByIndex.length];
            const perfil = perfilPorPlanta[index] || planta.descricao;
            const cuidado = cuidadoPorPlanta[index] || planta.descricao;

            return (
              <div
                key={`${planta.titulo}-${planta.metragem}`}
                className="overflow-hidden bg-white"
              >
                {planta.imagem ? (
                  <div className="relative aspect-[5/4] bg-slate-100">
                    <Image
                      src={planta.imagem}
                      alt={`Planta previa ${planta.titulo} ${planta.metragem} do ${imovel.nome}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="border-y border-[var(--border-warm)] p-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      className="mt-1 size-5 shrink-0 text-[var(--brand)]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                        {planta.metragem}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-slate-950">
                        {planta.titulo}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-[var(--border-warm)] pt-3 text-sm leading-6 text-slate-600">
                    {perfil}
                  </p>
                  <p className="mt-2 text-xs font-medium leading-5 text-slate-500">
                    {cuidado}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-7 grid gap-3 lg:hidden">
          {plantas.map((planta, index) => {
            const Icon = iconByIndex[index % iconByIndex.length];
            const perfil = perfilPorPlanta[index] || planta.descricao;
            const cuidado = cuidadoPorPlanta[index] || planta.descricao;

            return (
              <details
                key={`${planta.titulo}-${planta.metragem}-mobile`}
                className="border-y border-[var(--border-warm)] bg-white py-3"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-1">
                  <span className="flex items-center gap-3">
                    <Icon
                      className="size-5 shrink-0 text-[var(--brand)]"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-sm font-semibold text-slate-950">
                        {planta.titulo}
                      </span>
                      <span className="block text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                        {planta.metragem}
                      </span>
                    </span>
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    Ver
                  </span>
                </summary>
                <div className="px-1 pb-1 pt-3 text-sm leading-6 text-slate-600">
                  <p>{perfil}</p>
                  <p className="mt-2 text-xs font-medium leading-5 text-slate-500">
                    {cuidado}
                  </p>
                </div>
              </details>
            );
          })}
        </div>

        <div className="mt-8">
          <CtaLink
            href="#lead-form"
            label="Receber tabela e simulacao"
            imovel={imovel}
            source="plantas_pdf_cta"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
