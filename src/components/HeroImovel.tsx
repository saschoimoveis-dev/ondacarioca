import Image from "next/image";
import { CheckCircle2, MapPin, Sparkles } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { getImovelDestaque } from "@/data/imoveis";
import { CtaLink } from "@/components/CtaLink";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

type HeroImovelProps = {
  imovel: Imovel;
};

export function HeroImovel({ imovel }: HeroImovelProps) {
  const destaque = getImovelDestaque(imovel);
  const condicoes = [
    { label: "Preco inicial", value: imovel.precoInicial || "Sob consulta" },
    { label: "Sinal comunicado", value: imovel.sinalInicial || "Sob consulta" },
    {
      label: "Mensais comunicadas",
      value: imovel.parcelasIniciais || "Sob consulta"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#fbfaf7]">
      <div className="absolute inset-x-0 top-0 h-2 bg-[#173f34]" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-14 lg:pt-16">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#d1b16a]/60 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a20]">
            <Sparkles className="size-4" aria-hidden="true" />
            Lista VIP de lancamento
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-600">
            <MapPin className="size-4 text-[#173f34]" aria-hidden="true" />
            {imovel.bairro}, {imovel.cidade}
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.03] text-slate-950 sm:text-5xl lg:text-6xl">
            WE Barra by Living: receba tabela, plantas e disponibilidade
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            {imovel.descricaoLonga}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {condicoes.map((condicao) => (
              <div
                key={condicao.label}
                className="border-l-2 border-[#d1b16a] bg-white/80 px-4 py-3"
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  {condicao.label}
                </p>
                <p className="mt-1 text-base font-semibold leading-snug text-slate-950">
                  {condicao.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCTA
              imovel={imovel}
              source="hero_primary"
              label="Falar com Alexandre"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#173f34] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-950/10 transition hover:bg-[#0f2f27]"
            />
            <CtaLink
              href="#lead-form"
              label="Preencher formulario"
              imovel={imovel}
              source="hero_secondary"
            />
          </div>

          <div className="mt-7 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
            {imovel.argumentosComerciais?.slice(0, 4).map((argumento) => (
              <span key={argumento} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-1 size-4 shrink-0 text-[#173f34]"
                  aria-hidden="true"
                />
                {argumento}
              </span>
            ))}
          </div>

          <div className="mt-8 overflow-hidden border border-stone-200 bg-stone-100 shadow-sm">
            <div className="relative min-h-[220px] sm:min-h-[300px]">
              <Image
                src={destaque.src}
                alt={destaque.alt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="bg-[#173f34] px-4 py-3 text-xs leading-5 text-white/82">
              Imagens ilustrativas nesta primeira versao. Material oficial,
              valores e disponibilidade devem ser confirmados no atendimento.
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <LeadForm imovel={imovel} variant="hero" />
        </div>
      </div>
    </section>
  );
}
