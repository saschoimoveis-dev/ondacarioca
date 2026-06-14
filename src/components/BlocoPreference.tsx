import Image from "next/image";
import { Check, Pencil, ShieldCheck, CalendarClock, Sparkles } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import { MobileRail } from "@/components/MobileRail";
import type { Imovel } from "@/data/imoveis";

type BlocoPreferenceProps = {
  imovel: Imovel;
};

const beneficioIcons = [Pencil, CalendarClock, ShieldCheck];

export function BlocoPreference({ imovel }: BlocoPreferenceProps) {
  const preference = imovel.preferenceLiving;

  if (!preference) {
    return null;
  }

  return (
    <section className="bg-[var(--surface-warm)] py-12 sm:py-24 border-b border-[var(--border-warm)] overflow-hidden" id="preference">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          {/* Imagem */}
          <div className="relative order-last h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--border-warm)] shadow-md sm:h-[300px] lg:order-first lg:h-[480px] animate-fade-in-up">
            <Image
              src="/images/we-barra-living-varanda.jpg"
              alt="Living integrado à varanda com vista no WE Barra by Living"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Texto */}
          <div className="animate-fade-in-up delay-100">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              <Sparkles className="size-4" />
              Preference Living
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
              {preference.titulo}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {preference.texto}
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-2">
              {preference.opcoes.map((opcao) => (
                <li key={opcao} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                  <span>{opcao}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <MobileRail cols="sm:grid-cols-3" basis="62%">
                {preference.beneficios.map((beneficio, index) => {
                  const Icon = beneficioIcons[index % beneficioIcons.length];
                  return (
                    <div key={beneficio.titulo} className="h-full rounded-xl bg-white border border-[var(--border-warm)] p-4">
                      <Icon className="size-5 text-[var(--brand)]" />
                      <p className="mt-3 text-sm font-bold text-slate-900">{beneficio.titulo}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">{beneficio.texto}</p>
                    </div>
                  );
                })}
              </MobileRail>
            </div>

            <div className="mt-8">
              <CtaLink
                href="#lead-form"
                label="Quero personalizar meu apê"
                imovel={imovel}
                source="preference_cta"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
