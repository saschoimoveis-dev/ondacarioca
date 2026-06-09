import {
  Building2,
  Calculator,
  FileText,
  KeyRound,
  MapPin,
  Sparkles
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
      label: "Lazer de resort",
      description: "Piscinas, rooftop, areas gourmet e conveniencias para vender estilo de vida.",
      icon: Sparkles
    },
    {
      label: "Tabela e plantas",
      description: "Compare preco, metragem e disponibilidade antes de decidir.",
      icon: FileText
    },
    {
      label: "Escolha antecipada",
      description: "Compare andar, coluna, orientacao e tipologia antes das melhores unidades serem absorvidas.",
      icon: KeyRound
    },
    {
      label: "Fluxo simulado",
      description: "Entenda sinal, parcelas durante a obra e saldo estimado.",
      icon: Calculator
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
            Lancamento Living Cyrela em um dos enderecos mais estrategicos da
            Barra, com terreno amplo, lazer completo e plantas de 2 a 4 quartos,
            gardens e coberturas.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Entre na lista VIP para comparar tabela, plantas, posicoes e fluxo
            de pagamento ainda na janela de maior poder de escolha.
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
                Av. das Americas 12800, esquina com Salvador Allende. Valores,
                previsao de entrega e disponibilidade dependem da tabela vigente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
