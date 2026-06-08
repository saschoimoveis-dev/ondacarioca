import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { getImovelDestaque } from "@/data/imoveis";

type ImovelCardProps = {
  imovel: Imovel;
};

export function ImovelCard({ imovel }: ImovelCardProps) {
  const destaque = getImovelDestaque(imovel);

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
        </div>
        <div className="p-5">
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="size-4" aria-hidden="true" />
            {imovel.bairro}
          </div>
          <h2 className="text-xl font-semibold text-slate-950">
            {imovel.nome}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {imovel.descricaoCurta}
          </p>
          <div className="mt-4 border-t border-slate-100 pt-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
              Preco inicial comunicado
            </p>
            <p className="mt-1 text-lg font-semibold text-[#173f34]">
              {imovel.precoInicial}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {imovel.tipologias.slice(0, 3).join(" | ")}
            </p>
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#173f34]">
            Ver detalhes
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
