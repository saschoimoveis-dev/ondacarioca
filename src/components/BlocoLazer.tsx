import Image from "next/image";
import { Check, Sparkles, Waves, Dumbbell, Building, PartyPopper, Baby, Laptop } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import { MobileRail } from "@/components/MobileRail";
import type { Imovel } from "@/data/imoveis";

type BlocoLazerProps = {
  imovel: Imovel;
};

const iconByIndex = [Waves, Dumbbell, Building, PartyPopper, Baby, Laptop];

export function BlocoLazer({ imovel }: BlocoLazerProps) {
  const categorias = imovel.lazerCategorias || [];

  if (!categorias.length) {
    return null;
  }

  return (
    <section
      className="border-y border-[var(--border-warm)] bg-[var(--surface-warm)] py-12 sm:py-24 overflow-hidden"
      id="lazer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl animate-fade-in-up">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            <Sparkles className="size-4" />
            Lazer de resort
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
            5.254 m² de lazer inspirado nos hotéis do mundo
          </h2>
          <p className="mt-5 hidden sm:block text-lg leading-relaxed text-slate-600">
            Mais de 35 itens de lazer, wellness e serviços distribuídos por todo o
            empreendimento — do nado sério na raia de 25m ao pôr do sol no rooftop.
          </p>
        </div>

        {/* Métricas */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-2xl sm:gap-4">
          {[
            { valor: "5.254 m²", label: "de lazer" },
            { valor: "35+", label: "itens de lazer" },
            { valor: "11º", label: "andar rooftop" }
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-[var(--border-warm)] bg-white p-3 text-center sm:p-4"
            >
              <p className="text-lg font-black text-[var(--brand)] sm:text-2xl">{m.valor}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Grid de categorias — rail no mobile, grid no desktop */}
        <div className="mt-8 sm:mt-10 animate-fade-in-up delay-100">
          <MobileRail cols="sm:grid-cols-2 lg:grid-cols-3" basis="80%">
          {categorias.map((cat, index) => {
            const Icon = iconByIndex[index % iconByIndex.length];
            return (
              <div
                key={cat.titulo}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Imagem com título */}
                <div className="relative h-48 w-full overflow-hidden sm:h-52">
                  {cat.imagem ? (
                    <Image
                      src={cat.imagem}
                      alt={cat.alt || cat.titulo}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[var(--surface-green)]">
                      <Icon className="size-12 text-[var(--brand)]/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 p-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/95 text-[var(--brand)] shadow-sm">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="text-lg font-bold text-white drop-shadow-md">{cat.titulo}</h3>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-medium text-slate-500">{cat.resumo}</p>
                  <ul className="mt-4 grid gap-2">
                    {cat.itens.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          </MobileRail>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <CtaLink
            href="#lead-form"
            label="Receber tour completo do lazer"
            imovel={imovel}
            source="lazer_cta"
            variant="primary"
          />
          <p className="text-xs text-slate-500">Imagens preliminares de caráter ilustrativo.</p>
        </div>
      </div>
    </section>
  );
}
