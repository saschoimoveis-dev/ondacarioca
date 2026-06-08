import Image from "next/image";
import { CheckCircle2, MapPin, Sparkles } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { getImovelDestaque } from "@/data/imoveis";
import { CtaLink } from "@/components/CtaLink";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

type HeroImovelProps = {
  imovel: Imovel;
};

export function HeroImovel({ imovel }: HeroImovelProps) {
  const destaque = getImovelDestaque(imovel);
  const provas = [
    "605 unidades",
    "Mais de 5 mil m² de lazer",
    "2 a 4 quartos, gardens e coberturas"
  ];

  return (
    <section className="overflow-hidden bg-[#fbfaf7]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-14">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 border border-[#d1b16a]/70 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a20]">
            <Sparkles className="size-4" aria-hidden="true" />
            Apresentacao completa
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-600">
            <MapPin className="size-4 text-[#173f34]" aria-hidden="true" />
            {imovel.bairro}, {imovel.cidade}
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.03] text-slate-950 sm:text-5xl lg:text-6xl">
            WE Barra by Living na Barra da Tijuca
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            Receba plantas, ficha tecnica, imagens do lazer, tabela atualizada e
            disponibilidade com atendimento de Alexandre Sascho.
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
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#173f34] bg-white px-5 py-3 text-sm font-semibold text-[#173f34] transition hover:bg-white/70"
            />
          </div>

          <div className="mt-8 grid gap-3 text-sm leading-6 text-slate-700">
            {provas.map((prova) => (
              <span key={prova} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-1 size-4 shrink-0 text-[#173f34]"
                  aria-hidden="true"
                />
                {prova}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:py-2">
          <div className="relative aspect-[4/3] overflow-hidden border border-stone-200 bg-stone-100 shadow-sm sm:aspect-[16/11] lg:min-h-[560px]">
            <Image
              src={destaque.src}
              alt={destaque.alt}
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Imagens, plantas, valores e disponibilidade estao sujeitos a
            confirmacao.
          </p>
        </div>
      </div>
    </section>
  );
}
