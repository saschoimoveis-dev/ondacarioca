import {
  Banknote,
  Building2,
  CalendarClock,
  FileText,
  Home,
  MapPin,
} from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { CtaLink } from "@/components/CtaLink";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

type HeroImovelProps = {
  imovel: Imovel;
};

export function HeroImovel({ imovel }: HeroImovelProps) {
  const provas = [
    {
      label: "A partir de R$ 600 mil",
      description: "Referencia inicial para apartamentos de 2 quartos, sujeita a confirmacao.",
      icon: Banknote
    },
    {
      label: "Sinal a partir de R$ 50 mil",
      description: "Entenda a entrada comunicada e como ela varia por unidade e tabela.",
      icon: FileText
    },
    {
      label: "Mensais a partir de R$ 2.000",
      description: "Veja se o fluxo durante a obra cabe no seu planejamento.",
      icon: CalendarClock
    },
    {
      label: "2 a 4 quartos",
      description: "Apartamentos, gardens e coberturas para morar ou investir.",
      icon: Home
    }
  ];

  return (
    <section className="surface-hero border-b border-[var(--border-warm)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <MapPin className="size-4 text-[var(--brand)]" aria-hidden="true" />
            {imovel.bairro}, {imovel.cidade}
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.03] text-slate-950 sm:text-6xl lg:text-7xl">
            WE Barra by Living na Barra da Tijuca
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Apartamentos de 2 quartos a partir de R$ 600 mil, com sinal
            comunicado a partir de R$ 50 mil e mensais a partir de R$ 2.000
            durante a obra.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Receba tabela, plantas e uma simulacao para entender quais unidades
            ainda fazem sentido para seu perfil antes das melhores opcoes serem
            absorvidas.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaLink
              href="#lead-form"
              label="Receber tabela e simulacao"
              imovel={imovel}
              source="hero_pdf_cta"
              variant="primary"
            />
            <WhatsAppCTA
              imovel={imovel}
              source="hero_whatsapp"
              label="Falar com Alexandre"
              className="btn-secondary-premium inline-flex items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition"
            />
          </div>
        </div>

        <div className="grid gap-4 self-center sm:grid-cols-2">
          {provas.map((prova) => {
            const Icon = prova.icon;

            return (
              <div key={prova.label} className="premium-card border p-5">
                <Icon className="mb-5 size-6 text-[var(--accent)]" aria-hidden="true" />
                <p className="text-xl font-semibold leading-tight text-slate-950">
                  {prova.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {prova.description}
                </p>
              </div>
            );
          })}

          <div className="premium-card border p-5 sm:col-span-2">
            <div className="flex items-start gap-3">
              <Building2 className="mt-1 size-5 shrink-0 text-[var(--brand)]" />
              <p className="text-sm leading-6 text-slate-700">
                Valores, entrada, parcelas, previsao de entrega e disponibilidade
                dependem da unidade escolhida e da tabela vigente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
