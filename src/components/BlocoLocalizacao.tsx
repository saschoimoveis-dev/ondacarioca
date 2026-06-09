import { ExternalLink, MapPin } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoLocalizacaoProps = {
  imovel: Imovel;
};

export function BlocoLocalizacao({ imovel }: BlocoLocalizacaoProps) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Localizacao
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            {imovel.localizacao.titulo}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {imovel.localizacao.descricao}
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
            {imovel.localizacao.pontos.map((ponto) => (
              <li key={ponto} className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-[var(--brand)]" />
                {ponto}
              </li>
            ))}
          </ul>
          <a
            href={imovel.localizacao.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-premium mt-7 inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition"
          >
            Ver regiao no Google Maps
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="premium-frame relative min-h-[300px] overflow-hidden border bg-[var(--surface-warm)]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,121,50,0.10)_1px,transparent_1px),linear-gradient(0deg,rgba(23,63,52,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute left-1/2 top-1/2 h-20 w-[124%] -translate-x-1/2 -translate-y-1/2 rotate-[-11deg] bg-[var(--champagne)] opacity-80" />
          <div className="absolute left-1/2 top-1/2 h-8 w-[124%] -translate-x-1/2 -translate-y-1/2 rotate-[9deg] bg-[var(--accent-soft)] opacity-70" />
          <div className="absolute left-[58%] top-[45%] grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--brand)] text-white shadow-xl shadow-slate-950/20 ring-8 ring-white/50">
            <MapPin className="size-9" aria-hidden="true" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-sm border border-[var(--border-warm)] bg-white/92 p-4 backdrop-blur">
            <p className="text-sm font-semibold text-slate-950">
              Barra da Tijuca
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Ponto de referencia para consulta de unidades, acesso e rotina na
              regiao.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
