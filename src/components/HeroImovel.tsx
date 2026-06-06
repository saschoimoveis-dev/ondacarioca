import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";
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
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
            <MapPin className="size-4 text-emerald-700" aria-hidden="true" />
            {imovel.bairro}, {imovel.cidade}
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-slate-950 sm:text-5xl lg:text-6xl">
            WE Barra by Living: apartamentos na Barra da Tijuca a partir de R$
            600 mil
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {imovel.descricaoLonga}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCTA imovel={imovel} source="hero_primary" />
            <CtaLink
              href="#lead-form"
              label="Receber tabela e condicoes"
              imovel={imovel}
              source="hero_secondary"
            />
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {imovel.argumentosComerciais?.slice(0, 4).map((argumento) => (
              <span key={argumento} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                {argumento}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[340px] overflow-hidden rounded-sm border border-slate-200 bg-slate-100 shadow-xl shadow-slate-950/10 sm:min-h-[440px]">
          <Image
            src={destaque.src}
            alt={destaque.alt}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/78 to-transparent p-5 text-white">
            <p className="max-w-xl text-sm leading-6 text-white/85">
              Imagens ilustrativas nesta primeira versao. Material oficial,
              valores e disponibilidade devem ser confirmados no atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
