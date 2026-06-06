import { ExternalLink, MapPin } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoLocalizacaoProps = {
  imovel: Imovel;
};

export function BlocoLocalizacao({ imovel }: BlocoLocalizacaoProps) {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">
            {imovel.localizacao.titulo}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {imovel.localizacao.descricao}
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
            {imovel.localizacao.pontos.map((ponto) => (
              <li key={ponto} className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-emerald-700" />
                {ponto}
              </li>
            ))}
          </ul>
          <a
            href={imovel.localizacao.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-sm border border-emerald-800 px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
          >
            Ver regiao no Google Maps
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,118,110,0.10)_1px,transparent_1px),linear-gradient(0deg,rgba(15,118,110,0.10)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="absolute left-1/2 top-1/2 h-24 w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] bg-sky-100" />
          <div className="absolute left-1/2 top-1/2 h-12 w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-[10deg] bg-emerald-100" />
          <div className="absolute left-[58%] top-[45%] grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-emerald-700 text-white shadow-xl shadow-emerald-950/20">
            <MapPin className="size-9" aria-hidden="true" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-sm border border-slate-200 bg-white/92 p-4 backdrop-blur">
            <p className="text-sm font-semibold text-slate-950">
              Barra da Tijuca
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Ponto de referencia para pesquisas, campanhas e atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
