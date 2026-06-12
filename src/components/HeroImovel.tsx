import {
  Banknote,
  CalendarClock,
  ExternalLink,
  FileText,
  Navigation,
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
    { label: "A partir de", description: imovel.precoInicialNumerico ? `R$ ${(imovel.precoInicialNumerico / 1000).toFixed(0)} mil` : imovel.precoInicial || "Consulte", icon: Banknote },
    { label: "Sinal", description: imovel.sinalInicial || "Consulte", icon: FileText },
    { label: "Mensais", description: imovel.parcelasIniciais || "Consulte", icon: CalendarClock },
  ];

  return (
    <>
    <section className="relative bg-[var(--surface-warm)] overflow-hidden border-b border-[var(--border-warm)]" id="hero">
      
      {/* Elementos decorativos claros */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 size-[800px] rounded-full bg-[var(--surface-green)] blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 size-[600px] rounded-full bg-[var(--champagne)]/30 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24 lg:px-8">
        
        {/* Left Column: Copy & CTAs */}
        <div className="flex flex-col justify-center animate-fade-in-up">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            <span className="h-px w-8 bg-[var(--accent)]"></span>
            {imovel.incorporadora ? `Lançamento ${imovel.incorporadora}` : "Lançamento Exclusivo"}
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl text-balance">
            {imovel.nome}
          </h1>
          
          <div className="mt-5 flex items-start gap-2 text-slate-600">
             <MapPin className="mt-1 size-5 shrink-0 text-[var(--brand)]" aria-hidden="true" />
             <p className="text-lg font-medium leading-relaxed text-balance">
               {imovel.enderecoResumo}
             </p>
          </div>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 text-balance">
            {imovel.descricaoCurta}
          </p>

          {/* Provas - Cartão Claro */}
          <div className="mt-8 grid max-w-xl gap-px overflow-hidden rounded-2xl bg-white sm:grid-cols-3 border border-slate-200 shadow-md">
            {provas.map((prova) => {
              const Icon = prova.icon;
              return (
                <div
                  key={prova.label}
                  className="flex flex-col items-start gap-2 p-5 transition-colors hover:bg-slate-50 border-r border-slate-100 last:border-r-0"
                >
                  <Icon className="size-6 text-[var(--accent)]" aria-hidden="true" />
                  <div className="mt-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {prova.label}
                    </p>
                    <p className="mt-1 text-[17px] font-black leading-tight text-slate-900">
                      {prova.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink
              href="#lead-form"
              label="Receber Tabela e Simulação"
              imovel={imovel}
              source="hero_cta"
              variant="primary"
              className="w-full sm:w-auto justify-center"
            />
          </div>
        </div>

        {/* Right Column: Interactive Map Container */}
        <div className="relative order-last h-[260px] w-full sm:h-[400px] lg:order-none lg:h-[600px] animate-fade-in-up delay-200">
           <div className="absolute inset-0 rounded-2xl overflow-hidden border border-[var(--border-warm)] shadow-[0_24px_48px_rgba(15,47,39,0.1)]">
              {/* Overlay leve */}
              <div className="absolute inset-0 pointer-events-none mix-blend-multiply z-10 bg-[var(--surface-green)]/20"></div>
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
              
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <a
                  href={imovel.localizacao.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-bold text-slate-900 shadow-xl transition hover:bg-[var(--surface-green)] hover:text-[var(--brand)] active:scale-95 border border-slate-100"
                >
                  Abrir Rota no Aplicativo
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
           </div>
        </div>

      </div>
    </section>

    {/* Section extra para garantir o fluxo da página (caso precise de âncora "localizacao" fora do hero) */}
    <div id="localizacao" className="h-0 w-0"></div>
    </>
  );
}
