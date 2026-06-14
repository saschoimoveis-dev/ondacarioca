import Image from "next/image";
import { Globe, Hotel, Sparkles, Building2 } from "lucide-react";
import { MobileRail } from "@/components/MobileRail";
import type { Imovel } from "@/data/imoveis";

type BlocoConceitoProps = {
  imovel: Imovel;
};

const pilarIcons = [Hotel, Sparkles, Building2];

export function BlocoConceito({ imovel }: BlocoConceitoProps) {
  const conceito = imovel.conceito;

  if (!conceito) {
    return null;
  }

  return (
    <section className="bg-[var(--surface-warm)] py-12 sm:py-24 border-b border-[var(--border-warm)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Texto */}
          <div className="animate-fade-in-up">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              <Globe className="size-4" />
              {conceito.tagline}
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
              {conceito.titulo}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {conceito.texto}
            </p>

            <div className="mt-8">
              <MobileRail cols="sm:grid-cols-3" basis="70%">
                {conceito.pilares.map((pilar, index) => {
                  const Icon = pilarIcons[index % pilarIcons.length];
                  return (
                    <div
                      key={pilar.titulo}
                      className="h-full rounded-xl border border-[var(--border-warm)] bg-white p-4 shadow-sm"
                    >
                      <span className="flex size-9 items-center justify-center rounded-full bg-[var(--surface-green)] text-[var(--brand)]">
                        <Icon className="size-4" />
                      </span>
                      <p className="mt-3 text-sm font-bold text-slate-900">{pilar.titulo}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">{pilar.texto}</p>
                    </div>
                  );
                })}
              </MobileRail>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-[var(--border-warm)] shadow-[0_24px_48px_rgba(15,47,39,0.12)] sm:h-[460px] animate-fade-in-up delay-100">
            <Image
              src="/images/we-barra-fachada-noturna.jpg"
              alt="Fachada do WE Barra by Living ao entardecer"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
