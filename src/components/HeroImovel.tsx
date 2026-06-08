import Image from "next/image";
import { ArrowDown, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { getImovelDestaque } from "@/data/imoveis";
import { CtaLink } from "@/components/CtaLink";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

type HeroImovelProps = {
  imovel: Imovel;
};

export function HeroImovel({ imovel }: HeroImovelProps) {
  const destaque = getImovelDestaque(imovel);

  return (
    <section className="relative min-h-[calc(88svh-4rem)] overflow-hidden bg-slate-950 text-white">
      <Image
        src={destaque.src}
        alt={destaque.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,20,17,0.88)_0%,rgba(9,20,17,0.68)_38%,rgba(9,20,17,0.24)_70%,rgba(9,20,17,0.12)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(88svh-4rem)] max-w-7xl flex-col justify-end px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pb-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[#d1b16a]/70 bg-slate-950/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f0d18b] backdrop-blur">
            <Sparkles className="size-4" aria-hidden="true" />
            Apresentacao completa disponivel
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-white/82">
            <MapPin className="size-4 text-[#f0d18b]" aria-hidden="true" />
            {imovel.bairro}, {imovel.cidade}
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
            WE Barra by Living: baixe o PDF com plantas e ficha tecnica
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
            {imovel.descricaoLonga}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaLink
              href="#lead-form"
              label="Receber PDF e tabela"
              imovel={imovel}
              source="hero_pdf_cta"
              variant="primary"
            />
            <WhatsAppCTA
              imovel={imovel}
              source="hero_whatsapp"
              label="Falar com Alexandre"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/55 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18"
            />
          </div>

          <div className="mt-7 grid gap-3 text-sm leading-6 text-white/82 sm:grid-cols-2">
            {imovel.argumentosComerciais?.slice(0, 4).map((argumento) => (
              <span key={argumento} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-1 size-4 shrink-0 text-[#f0d18b]"
                  aria-hidden="true"
                />
                {argumento}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
          <ArrowDown className="size-4" aria-hidden="true" />
          Veja imagens, ficha tecnica e plantas
        </div>
      </div>
    </section>
  );
}
