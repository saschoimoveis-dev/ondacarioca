import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, MapPin, Ruler } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import {
  getImovelDestaque,
  getMetragemRange,
  getQuartosLabel
} from "@/data/imoveis";

type ImovelCardProps = {
  imovel: Imovel;
};

export function ImovelCard({ imovel }: ImovelCardProps) {
  const destaque = getImovelDestaque(imovel);
  const quartos = getQuartosLabel(imovel);
  const metragem = getMetragemRange(imovel);
  const breveLancamento = imovel.precoInicialNumerico === undefined;

  return (
    <article className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/lancamentos/${imovel.slug}`} className="block">
        <div className="relative aspect-[16/10] bg-slate-100">
          <Image
            src={destaque.src}
            alt={destaque.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          {breveLancamento && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--brand)] backdrop-blur">
              Breve lançamento
            </span>
          )}
        </div>
        <div className="p-5">
          <p className="text-lg font-semibold text-[var(--brand)]">
            {imovel.precoInicial}
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">
            {imovel.nome}
          </h2>
          <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            {imovel.bairro}
          </div>

          {(quartos || metragem) && (
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-slate-100 pt-4 text-sm text-slate-600">
              {quartos && (
                <span className="inline-flex items-center gap-1.5">
                  <BedDouble className="size-4 text-[var(--accent)]" aria-hidden="true" />
                  {quartos}
                </span>
              )}
              {metragem && (
                <span className="inline-flex items-center gap-1.5">
                  <Ruler className="size-4 text-[var(--accent)]" aria-hidden="true" />
                  {metragem}
                </span>
              )}
            </div>
          )}

          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]">
            Ver detalhes
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
