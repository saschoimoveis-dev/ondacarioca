import {
  Banknote,
  CalendarClock,
  ExternalLink,
  FileText,
  MapPin
} from "lucide-react";
import Image from "next/image";
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

  const badgeLabel = imovel.conceito?.tagline
    ? `${imovel.conceito.tagline}${imovel.incorporadora ? ` · ${imovel.incorporadora} Cyrela` : ""}`
    : imovel.incorporadora
      ? `Lançamento ${imovel.incorporadora}`
      : "Lançamento Exclusivo";

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
      {/* Elementos decorativos — apenas desktop */}
      <div className="hidden sm:block absolute top-0 right-0 -translate-y-12 size-[800px] translate-x-1/3 rounded-full bg-[var(--surface-green)] blur-3xl" aria-hidden="true" />
      <div className="hidden sm:block absolute bottom-0 left-0 translate-y-1/3 size-[600px] -translate-x-1/3 rounded-full bg-[var(--champagne)]/30 blur-3xl" aria-hidden="true" />

      {/* ===================== HERO MOBILE — cinematográfico ===================== */}
      <div className="sm:hidden">
        <div className="relative h-[72vh] min-h-[520px] w-full">
          <Image
            src="/images/we-barra-piscina-resort.jpg"
            alt={`Lazer de resort do ${imovel.nome} ao entardecer`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Scrims para legibilidade do texto branco */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/15" aria-hidden="true" />

          <div className="absolute inset-0 flex flex-col justify-between px-5 pt-[132px] pb-20">
            {/* Topo: selo */}
            <div>
              <span className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                {imovel.conceito?.tagline ?? badgeLabel}
              </span>
            </div>

            {/* Base: título + frase + endereço */}
            <div className="animate-fade-in-up">
              <h1 className="text-[2.6rem] font-bold leading-[1.04] text-white text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                {imovel.nome}
              </h1>
              {imovel.conceito ? (
                <p className="mt-2 text-lg font-semibold text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                  {imovel.conceito.frase}
                </p>
              ) : null}
              <div className="mt-3 flex items-start gap-1.5 text-white/85">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <p className="text-sm font-medium leading-snug drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
                  {imovel.enderecoResumo}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cartão flutuante: valores + CTA */}
        <div className="relative z-10 -mt-14 px-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_44px_rgba(15,47,39,0.22)] animate-fade-in-up">
            <div className="grid grid-cols-3 divide-x divide-slate-100 text-center">
              {provas.map((prova) => (
                <div key={prova.label} className="px-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {prova.label}
                  </p>
                  <p className="mt-1 text-[15px] font-black leading-tight text-slate-900">
                    {prova.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <CtaLink
                href="#lead-form"
                label="Receber Tabela e Simulação"
                imovel={imovel}
                source="hero_cta"
                variant="primary"
                className="w-full justify-center"
              />
            </div>

            <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              Realização Cyrela · Living · Leblon Realty
            </p>
          </div>
        </div>
      </div>

      {/* ===================== HERO DESKTOP — copy + mapa ===================== */}
      <div className="relative z-10 mx-auto hidden w-full max-w-7xl gap-8 px-4 pb-10 sm:grid sm:px-6 sm:pt-20 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-28 lg:pb-24 lg:px-8">

        {/* Coluna esquerda: copy + CTAs */}
        <div className="flex flex-col justify-center animate-fade-in-up">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-[var(--surface-green)] border border-[var(--accent)]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            {badgeLabel}
          </span>

          {/* Título */}
          <h1 className="mt-3 text-5xl font-bold leading-[1.1] text-slate-900 lg:text-6xl text-balance">
            {imovel.nome}
          </h1>

          {/* Conceito — assinatura hoteleira */}
          {imovel.conceito ? (
            <p className="mt-2 text-lg font-semibold text-[var(--brand)]">
              {imovel.conceito.frase}
            </p>
          ) : null}

          {/* Endereço */}
          <div className="mt-3 flex items-start gap-1.5 text-slate-600">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--brand)]" aria-hidden="true" />
            <p className="text-base font-medium leading-snug text-balance">
              {imovel.enderecoResumo}
            </p>
          </div>

          {/* Descrição */}
          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 text-balance">
            {imovel.heroResumo || imovel.descricaoCurta}
          </p>

          {/* Cards de prova */}
          <div className="mt-8 grid grid-cols-3 max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            {provas.map((prova, idx) => {
              const Icon = prova.icon;
              return (
                <div
                  key={prova.label}
                  className={`flex flex-col gap-1 p-5 ${
                    idx < provas.length - 1 ? "border-r border-slate-100" : ""
                  }`}
                >
                  <Icon className="size-5 text-[var(--accent)]" aria-hidden="true" />
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {prova.label}
                  </p>
                  <p className="text-[17px] font-black leading-tight text-slate-900">
                    {prova.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <CtaLink
              href="#lead-form"
              label="Receber Tabela e Simulação"
              imovel={imovel}
              source="hero_cta"
              variant="primary"
              className="w-auto"
            />
            {/* Credibilidade — incorporadores */}
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              Realização Cyrela · Living · Leblon Realty
            </p>
          </div>
        </div>

        {/* Tablet+: mapa completo com iframe */}
        <div className="relative order-last h-[360px] w-full lg:order-none lg:h-[600px] animate-fade-in-up delay-200">
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
