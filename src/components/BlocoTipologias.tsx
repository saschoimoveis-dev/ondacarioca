"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BedDouble,
  Building2,
  Expand,
  TreePine,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Check
} from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";

type BlocoTipologiasProps = {
  imovel: Imovel;
};

const iconByIndex = [BedDouble, Building2, Expand, TreePine];
const decisaoPorPlanta = ["Menor ticket", "Equilíbrio", "Conforto", "Escassez"];
const perfilPorPlanta = [
  "Menor ticket de entrada, boa liquidez e potencial para locação.",
  "Equilíbrio entre metragem, procura familiar e potencial de revenda.",
  "Mais área para permanência, conforto e valorização absoluta.",
  "Produto de maior escassez, com área externa, vista e diferenciação."
];
const cuidadoPorPlanta = [
  "Comparar coluna, andar e fluxo final.",
  "Validar procura familiar e valor por m².",
  "Observar posição, vista e ticket total.",
  "Comparar área externa, privacidade e vista."
];
const tagColorByIndex = [
  "bg-sky-50 text-sky-700 border-sky-200",
  "bg-emerald-50 text-emerald-700 border-emerald-200",
  "bg-violet-50 text-violet-700 border-violet-200",
  "bg-amber-50 text-amber-700 border-amber-200"
];

export function BlocoTipologias({ imovel }: BlocoTipologiasProps) {
  const plantas: NonNullable<Imovel["plantas"]> =
    imovel.plantas?.length
      ? imovel.plantas
      : imovel.tipologias.map((tipologia) => ({
          titulo: tipologia,
          metragem: "Sob consulta",
          imagem: undefined,
          descricao: "Consulte metragem e disponibilidade para esta opção."
        }));

  const metragens = imovel.metragens || [];
  const gruposMetragem = [
    { title: "Apartamentos", items: metragens.slice(0, 3) },
    { title: "Gardens", items: metragens.slice(3, 4) },
    { title: "Coberturas", items: metragens.slice(4) }
  ].filter((g) => g.items.length);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activePlanta = plantas[activeIndex];
  const ActiveIcon = iconByIndex[activeIndex % iconByIndex.length];

  function prev() {
    setActiveIndex((i) => (i - 1 + plantas.length) % plantas.length);
  }
  function next() {
    setActiveIndex((i) => (i + 1) % plantas.length);
  }

  return (
    <section className="bg-white py-12 sm:py-24 overflow-hidden" id="plantas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-12 animate-fade-in-up">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              <span className="h-px w-6 bg-[var(--accent)]" />
              Tipologias e Plantas
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
              A unidade certa para o<br className="hidden sm:block" /> seu momento de vida
            </h2>
          </div>

          {/* Quadro de metragens compacto — escondido no mobile para não poluir */}
          {gruposMetragem.length > 0 && (
            <div className="hidden sm:flex flex-wrap gap-3">
              {gruposMetragem.map((grupo) => (
                <div key={grupo.title} className="bg-[var(--surface-warm)] border border-[var(--border-warm)] rounded-xl px-4 py-3 min-w-[120px]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1">{grupo.title}</p>
                  <ul className="space-y-0.5">
                    {grupo.items.map((item) => (
                      <li key={item} className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <span className="size-1 rounded-full bg-[var(--brand)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tabs de seleção com fade lateral indicando scroll */}
        <div className="relative mb-8 animate-fade-in-up">
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar scroll-fade-x">
            {plantas.map((planta, i) => {
              const Icon = iconByIndex[i % iconByIndex.length];
              const isActive = i === activeIndex;
              return (
                <button
                  key={`tab-${i}`}
                  onClick={() => setActiveIndex(i)}
                  className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-bold transition-all duration-200 min-h-[44px] ${
                    isActive
                      ? "bg-[var(--brand)] text-white border-[var(--brand)] shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[var(--brand)] hover:text-[var(--brand)]"
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  {planta.titulo}
                </button>
              );
            })}
          </div>
        </div>

        {/* Layout principal: imagem grande + detalhes */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-stretch animate-fade-in-up delay-100">

          {/* Imagem em destaque */}
          <div className="relative group rounded-2xl overflow-hidden bg-slate-100 border border-[var(--border-warm)] shadow-md">
            {activePlanta.imagem ? (
              <>
                <div className="relative w-full h-[320px] sm:h-[480px] lg:h-full min-h-[360px]">
                  <Image
                    src={activePlanta.imagem}
                    alt={`Planta ${activePlanta.titulo} ${activePlanta.metragem} — ${imovel.nome}`}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                  {/* Overlay escuro no hover */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
                </div>

                {/* Botão de zoom — sempre visível no mobile, hover no desktop */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur rounded-full px-4 py-2 text-sm font-bold text-slate-800 shadow-lg border border-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hover:bg-[var(--surface-green)] hover:text-[var(--brand)] min-h-[44px]"
                >
                  <ZoomIn className="size-4" />
                  Ampliar planta
                </button>

                {/* Badge da tipologia */}
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${tagColorByIndex[activeIndex % tagColorByIndex.length]}`}>
                    {decisaoPorPlanta[activeIndex] || activePlanta.titulo}
                  </span>
                </div>

                {/* Navegação prev/next */}
                {plantas.length > 1 && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={prev}
                      className="flex size-9 items-center justify-center rounded-full bg-white/95 shadow-md border border-white text-slate-700 hover:bg-[var(--brand)] hover:text-white transition-colors"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      onClick={next}
                      className="flex size-9 items-center justify-center rounded-full bg-white/95 shadow-md border border-white text-slate-700 hover:bg-[var(--brand)] hover:text-white transition-colors"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex h-[360px] items-center justify-center">
                <ActiveIcon className="size-24 text-slate-200" />
              </div>
            )}
          </div>

          {/* Painel de detalhes */}
          <div className="flex flex-col gap-5 order-first lg:order-none">
            {/* Card principal */}
            <div className="bg-[var(--surface-warm)] border border-[var(--border-warm)] rounded-2xl p-6 flex flex-col gap-4 grow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1">
                    {activePlanta.metragem}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {activePlanta.titulo}
                  </h3>
                </div>
                <div className="flex size-10 items-center justify-center rounded-full bg-white border border-[var(--border-warm)] shadow-sm">
                  <ActiveIcon className="size-5 text-[var(--brand)]" />
                </div>
              </div>

              <div className="border-t border-[var(--border-warm)] pt-4 flex flex-col gap-5 text-sm">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Melhor para</p>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {perfilPorPlanta[activeIndex] || activePlanta.descricao}
                  </p>
                </div>
                <div className="hidden sm:block">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Atenção ao simular</p>
                  <p className="text-slate-600 leading-relaxed">
                    {cuidadoPorPlanta[activeIndex] || activePlanta.descricao}
                  </p>
                </div>
              </div>

              {/* Dots de navegação */}
              <div className="flex gap-2 pt-2">
                {plantas.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`transition-all duration-200 rounded-full ${
                      i === activeIndex
                        ? "w-6 h-2 bg-[var(--brand)]"
                        : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA */}
            <CtaLink
              href="#lead-form"
              label="Receber tabela detalhada"
              imovel={imovel}
              source="plantas_cta"
              variant="primary"
            />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && activePlanta.imagem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="size-5" />
          </button>
          <div
            className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePlanta.imagem}
              alt={`Planta ampliada — ${activePlanta.titulo}`}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
              <p className="text-white font-bold text-lg">{activePlanta.titulo}</p>
              <p className="text-slate-300 text-sm">{activePlanta.metragem} · {imovel.nome}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
