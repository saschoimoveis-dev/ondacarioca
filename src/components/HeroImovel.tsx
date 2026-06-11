import {
  Banknote,
  CalendarClock,
  ExternalLink,
  FileText,
  Home,
  MapPin,
  Navigation
} from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { CtaLink } from "@/components/CtaLink";

type HeroImovelProps = {
  imovel: Imovel;
};

export function HeroImovel({ imovel }: HeroImovelProps) {
  const mapQuery = imovel.enderecoResumo
    ? imovel.enderecoResumo
    : `${imovel.nome}, ${imovel.bairro}, ${imovel.cidade}`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&output=embed`;
  const provas = [
    {
      label: "R$ 600 mil",
      description: "2 quartos",
      icon: Banknote
    },
    {
      label: "R$ 50 mil",
      description: "sinal",
      icon: FileText
    },
    {
      label: "R$ 2.000",
      description: "mensais",
      icon: CalendarClock
    },
    {
      label: "2 a 4 quartos",
      description: "gardens e coberturas",
      icon: Home
    }
  ];

  return (
    <section
      className="surface-hero scroll-mt-16 border-b border-[var(--border-warm)]"
      id="localizacao"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:py-12">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <MapPin className="size-4 text-[var(--brand)]" aria-hidden="true" />
            {imovel.bairro}, {imovel.cidade}
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] text-slate-950 sm:text-5xl lg:text-6xl">
            WE Barra by Living na Av. das Americas
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Lancamento Living Cyrela na Barra da Tijuca, na altura da Salvador
            Allende, com apartamentos, gardens e coberturas.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Peca tabela atualizada e simule entrada, mensais e saldo antes de
            comparar unidades.
          </p>

          <div className="mt-6">
            <CtaLink
              href="#lead-form"
              label="Receber tabela e simulacao"
              imovel={imovel}
              source="hero_pdf_cta"
              variant="primary"
            />
          </div>
        </div>

        <div className="self-center">
          <div className="premium-frame overflow-hidden border bg-[var(--surface-warm)]">
            <iframe
              src={mapEmbedUrl}
              title={`Mapa da localizacao de ${imovel.nome}`}
              className="h-[300px] w-full border-0 sm:h-[360px]"
              loading="eager"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-[var(--border-warm)] bg-white p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
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
                      Mova o mapa, aproxime e abra rotas em uma nova aba.
                    </p>
                  </div>
                </div>
                <a
                  href={imovel.localizacao.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border border-[var(--border-warm)] px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  Abrir rota
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 grid overflow-hidden border border-[var(--border-warm)] bg-[var(--surface-green)]/80 sm:grid-cols-4 sm:divide-x sm:divide-[var(--border-warm)]">
            {provas.map((prova, index) => {
              const Icon = prova.icon;

              return (
                <div
                  key={prova.label}
                  className={`flex items-center gap-2 border-b border-[var(--border-warm)] px-3 py-2.5 sm:border-b-0 ${
                    index === provas.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <Icon
                    className="size-4 shrink-0 text-[var(--brand)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-slate-950 sm:text-[13px]">
                      {prova.label}
                    </p>
                    <p className="text-xs leading-5 text-slate-600">
                      {prova.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Valores e disponibilidade dependem da tabela vigente.
          </p>
        </div>
      </div>
    </section>
  );
}
