import {
  Building2,
  Calculator,
  FileText,
  Home,
  KeyRound,
  MapPin
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
      label: "Tabela e plantas",
      description: "Receba material atualizado antes de comparar unidades.",
      icon: FileText
    },
    {
      label: "Simulacao de fluxo",
      description: "Entenda sinal, parcelas durante a obra e saldo estimado.",
      icon: Calculator
    },
    {
      label: "Prioridade de escolha",
      description: "Compare tipologias, colunas e disponibilidade com orientacao.",
      icon: KeyRound
    },
    {
      label: "2 a 4 quartos",
      description: "Apartamentos, gardens, coberturas lineares e duplex.",
      icon: Home
    }
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <MapPin className="size-4 text-[#173f34]" aria-hidden="true" />
            {imovel.bairro}, {imovel.cidade}
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.03] text-slate-950 sm:text-6xl lg:text-7xl">
            WE Barra by Living na Barra da Tijuca
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Entre na lista VIP para receber tabela atualizada, plantas,
            simulacao de fluxo e orientacao sobre as melhores unidades
            disponiveis.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaLink
              href="#lead-form"
              label="Entrar na lista VIP"
              imovel={imovel}
              source="hero_pdf_cta"
              variant="primary"
            />
            <WhatsAppCTA
              imovel={imovel}
              source="hero_whatsapp"
              label="Falar com Alexandre"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#173f34] bg-white px-5 py-3 text-sm font-semibold text-[#173f34] transition hover:bg-slate-50"
            />
          </div>
        </div>

        <div className="grid gap-4 self-center sm:grid-cols-2">
          {provas.map((prova) => {
            const Icon = prova.icon;

            return (
              <div key={prova.label} className="border border-slate-200 bg-slate-50 p-5">
                <Icon className="mb-5 size-6 text-[#007f5f]" aria-hidden="true" />
                <p className="text-xl font-semibold leading-tight text-slate-950">
                  {prova.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {prova.description}
                </p>
              </div>
            );
          })}

          <div className="border border-slate-200 bg-white p-5 sm:col-span-2">
            <div className="flex items-start gap-3">
              <Building2 className="mt-1 size-5 shrink-0 text-[#173f34]" />
              <p className="text-sm leading-6 text-slate-700">
                2 quartos a partir de R$ 600 mil, sinal comunicado a partir de
                R$ 50 mil e mensais a partir de R$ 2.000, sujeitos a
                confirmacao.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
