import { ExternalLink, MapPin, Navigation } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoLocalizacaoProps = {
  imovel: Imovel;
};

export function BlocoLocalizacao({ imovel }: BlocoLocalizacaoProps) {
  return (
    <section className="bg-white py-10 sm:py-12" id="entorno">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Entorno e acessos
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Valide o contexto da Av. das Americas
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {imovel.localizacao.descricao}
          </p>
          <a
            href={imovel.localizacao.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-premium mt-6 inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition"
          >
            Abrir rota no Google Maps
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="border-y border-[var(--border-warm)] py-5">
          <ul className="grid gap-0 divide-y divide-[var(--border-warm)]">
            {imovel.localizacao.pontos.map((ponto) => (
              <li key={ponto} className="flex gap-3 py-3 first:pt-0">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-[var(--brand)]"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold leading-6 text-slate-950">
                  {ponto}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-4 bg-[var(--surface-green)] p-4">
            <div className="flex gap-3">
              <Navigation
                className="mt-1 size-4 shrink-0 text-[var(--brand)]"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold leading-6 text-slate-950">
                  {imovel.enderecoResumo || imovel.bairro}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  O mapa navegavel esta no topo da pagina para consulta rapida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
