import {
  Banknote,
  CalendarClock,
  ExternalLink,
  FileText,
  MapPin
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
      label: "A partir de",
      description: imovel.precoInicialNumerico
        ? `R$ ${(imovel.precoInicialNumerico / 1000).toFixed(0)} mil`
        : imovel.precoInicial || "Consulte",
      icon: Banknote
    },
    {
      label: "Sinal",
      description: (imovel.sinalInicial || "Consulte").replace(/^a partir de\s+/i, ""),
      icon: FileText
    },
    {
      label: "Mensais",
      description: (imovel.parcelasIniciais || "Consulte").replace(/^a partir de\s+/i, ""),
      icon: CalendarClock
    }
  ];

  return (
    <>
    <section
      className="relative bg-[var(--surface-warm)] overflow-hidden border-b border-[var(--border-warm)]"
      id="hero"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 size-[400px] sm:size-[800px] sm:translate-x-1/3 rounded-full bg-[var(--surface-green)] blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 size-[300px] sm:size-[600px] sm:-translate-x-1/3 rounded-full bg-[var(--champagne)]/30 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 pt-[120px] pb-10 sm:px-6 sm:pt-20 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-28 lg:pb-24 lg:px-8">

        {/* Coluna esquerda: copy + CTAs */}
        <div className="flex flex-col justify-center animate-fade-in-up">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-[var(--surface-green)] border border-[var(--accent)]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            {imovel.conceito?.tagline
              ? `${imovel.conceito.tagline}${imovel.incorporadora ? ` · ${imovel.incorporadora} Cyrela` : ""}`
              : imovel.incorporadora
                ? `Lançamento ${imovel.incorporadora}`
                : "Lançamento Exclusivo"}
          </span>

          {/* Título */}
          <h1 className="mt-3 text-[2rem] font-bold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl text-balance">
            {imovel.nome}
          </h1>

          {/* Conceito — assinatura hoteleira */}
          {imovel.conceito ? (
            <p className="mt-2 text-base font-semibold text-[var(--brand)] sm:text-lg">
              {imovel.conceito.titulo}
            </p>
          ) : null}

          {/* Endereço */}
          <div className="mt-3 flex items-start gap-1.5 text-slate-600">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--brand)]" aria-hidden="true" />
            <p className="text-sm font-medium leading-snug text-balance sm:text-base">
              {imovel.enderecoResumo}
            </p>
          </div>

          {/* Descrição — oculta no mobile para manter hero enxuto */}
          <p className="mt-3 hidden sm:block max-w-xl text-base leading-relaxed text-slate-600 text-balance">
            {imovel.descricaoCurta}
          </p>

          {/* Cards de prova — 3 colunas em TODOS os tamanhos */}
          <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md sm:mt-8 sm:max-w-xl sm:rounded-2xl">
            {provas.map((prova, idx) => {
              const Icon = prova.icon;
              return (
                <div
                  key={prova.label}
                  className={`flex flex-col gap-1 p-3 sm:p-5 ${
                    idx < provas.length - 1 ? "border-r border-slate-100" : ""
                  }`}
                >
                  <Icon className="size-4 text-[var(--accent)] sm:size-5" aria-hidden="true" />
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {prova.label}
                  </p>
                  <p className="text-[15px] font-black leading-tight text-slate-900 sm:text-[17px]">
                    {prova.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-6 sm:mt-8">
            <CtaLink
              href="#lead-form"
              label="Receber Tabela e Simulação"
              imovel={imovel}
              source="hero_cta"
              variant="primary"
              className="w-full justify-center sm:w-auto"
            />
            {/* Credibilidade — incorporadores */}
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              Realização Cyrela · Living · Leblon Realty
            </p>
          </div>
        </div>

        {/* Mobile: botão de localização secundário (endereço já aparece acima) */}
        <div className="order-last w-full sm:hidden animate-fade-in-up delay-200">
          <a
            href={imovel.localizacao.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-[var(--brand)] hover:text-[var(--brand)] hover:bg-[var(--surface-green)] active:scale-95 min-h-[44px]"
          >
            <MapPin className="size-4 text-[var(--brand)]" aria-hidden="true" />
            Abrir Rota no Aplicativo
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>

        {/* Tablet+: mapa completo com iframe */}
        <div className="relative order-last hidden h-[360px] w-full sm:block lg:order-none lg:h-[600px] animate-fade-in-up delay-200">
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--border-warm)] shadow-[0_24px_48px_rgba(15,47,39,0.1)]">
            <div className="absolute inset-0 pointer-events-none mix-blend-multiply z-10 bg-[var(--surface-green)]/20" />
            <iframe
              title={`Mapa da localização de ${imovel.nome}`}
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="z-0 grayscale-[10%]"
            />
            <div className="absolute bottom-3 left-3 right-3 z-20">
              <a
                href={imovel.localizacao.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-xl transition hover:bg-[var(--surface-green)] hover:text-[var(--brand)] active:scale-95 border border-slate-100 min-h-[44px]"
              >
                Abrir Rota no Aplicativo
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div id="localizacao" className="h-0 w-0" />
    </>
  );
}
