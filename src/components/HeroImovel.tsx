import Image from "next/image";
import { Banknote, CalendarClock, FileText, Home, MapPin } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { CtaLink } from "@/components/CtaLink";

type HeroImovelProps = {
  imovel: Imovel;
};

export function HeroImovel({ imovel }: HeroImovelProps) {
  const heroImage =
    imovel.imagens.find((imagem) =>
      imagem.src.includes("pool-house-bar")
    ) ||
    imovel.imagens.find((imagem) => imagem.src.includes("pool-house")) ||
    imovel.imagens[0];
  const provas = [
    {
      label: "A partir de R$ 600 mil",
      description: "2 quartos",
      icon: Banknote
    },
    {
      label: "Sinal a partir de R$ 50 mil",
      description: "referencia inicial",
      icon: FileText
    },
    {
      label: "Mensais a partir de R$ 2.000",
      description: "durante a obra",
      icon: CalendarClock
    },
    {
      label: "2 a 4 quartos",
      description: "gardens e coberturas",
      icon: Home
    }
  ];

  return (
    <section className="surface-hero border-b border-[var(--border-warm)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:py-12">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <MapPin className="size-4 text-[var(--brand)]" aria-hidden="true" />
            {imovel.bairro}, {imovel.cidade}
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] text-slate-950 sm:text-5xl lg:text-6xl">
            WE Barra by Living na Barra da Tijuca
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Lancamento Living Cyrela na Av. das Americas, com apartamentos,
            gardens e coberturas para morar ou investir.
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
          {heroImage ? (
            <div className="premium-frame relative min-h-[300px] overflow-hidden border bg-slate-100 sm:min-h-[390px]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
                loading="eager"
                priority
              />
            </div>
          ) : null}

          <div className="mt-4 grid overflow-hidden border border-[var(--border-warm)] bg-white/88 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[var(--border-warm)]">
            {provas.map((prova, index) => {
              const Icon = prova.icon;

              return (
                <div
                  key={prova.label}
                  className={`flex items-start gap-3 border-b border-[var(--border-warm)] p-3 lg:border-b-0 ${
                    index >= 2 ? "sm:border-b-0" : ""
                  } ${index === provas.length - 1 ? "border-b-0" : ""}`}
                >
                  <Icon
                    className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-slate-950">
                      {prova.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
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
