import { ExternalLink, MapPin, Navigation } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoLocalizacaoProps = {
  imovel: Imovel;
};

export function BlocoLocalizacao({ imovel }: BlocoLocalizacaoProps) {
  const mapQuery = imovel.enderecoResumo
    ? `${imovel.enderecoResumo}`
    : `${imovel.nome}, ${imovel.bairro}, ${imovel.cidade}`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&output=embed`;

  return (
    <section className="bg-white py-14 sm:py-16" id="localizacao">
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
            Abrir rota no Google Maps
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="premium-frame overflow-hidden border bg-[var(--surface-warm)]">
          <iframe
            src={mapEmbedUrl}
            title={`Mapa da localizacao de ${imovel.nome}`}
            className="h-[360px] w-full border-0 sm:h-[430px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="border-t border-[var(--border-warm)] bg-white p-4">
            <div className="flex items-start gap-3">
              <Navigation
                className="mt-0.5 size-5 shrink-0 text-[var(--brand)]"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  {imovel.enderecoResumo || imovel.bairro}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Use o mapa para aproximar, mover e abrir rotas em uma nova
                  aba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
