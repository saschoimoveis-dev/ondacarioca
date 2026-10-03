"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import { MobileRail } from "@/components/MobileRail";
import type { Imovel } from "@/data/imoveis";

type BlocoGaleriaProps = {
  imovel: Imovel;
};

type Foto = NonNullable<Imovel["galeria"]>["fotos"][number];

const FOTOS_DESKTOP = 8;

function FotoCard({ foto, onClick }: { foto: Foto; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block h-64 w-full overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-slate-100 text-left shadow-sm sm:h-56"
      aria-label={`Ampliar imagem: ${foto.legenda}`}
    >
      <Image
        src={foto.src}
        alt={foto.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 85vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />
      <span className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-800 opacity-100 shadow sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        <Expand className="size-4" aria-hidden="true" />
      </span>
      <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-bold text-white drop-shadow-md">
        {foto.legenda}
      </p>
    </button>
  );
}

export function BlocoGaleria({ imovel }: BlocoGaleriaProps) {
  const galeria = imovel.galeria;
  const fotos = galeria?.fotos ?? [];
  const [aberta, setAberta] = useState<number | null>(null);

  const fechar = useCallback(() => setAberta(null), []);
  const navegar = useCallback(
    (passo: number) =>
      setAberta((atual) =>
        atual === null ? atual : (atual + passo + fotos.length) % fotos.length
      ),
    [fotos.length]
  );

  useEffect(() => {
    if (aberta === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") fechar();
      if (event.key === "ArrowRight") navegar(1);
      if (event.key === "ArrowLeft") navegar(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberta, fechar, navegar]);

  if (!galeria || !fotos.length) {
    return null;
  }

  const fotoAberta = aberta === null ? null : fotos[aberta];

  return (
    <section className="bg-white py-12 sm:py-24 overflow-hidden" id="galeria">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            <Camera className="size-4" />
            Galeria
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
            {galeria.titulo}
          </h2>
          {galeria.texto ? (
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{galeria.texto}</p>
          ) : null}
        </div>

        {/* Mobile: rail com todas as fotos */}
        <div className="mt-8 sm:hidden animate-fade-in-up delay-100">
          <MobileRail basis="85%">
            {fotos.map((foto, index) => (
              <FotoCard key={foto.src} foto={foto} onClick={() => setAberta(index)} />
            ))}
          </MobileRail>
        </div>

        {/* Desktop: grid com as primeiras fotos; o restante abre no lightbox */}
        <div className="mt-10 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 animate-fade-in-up delay-100">
          {fotos.slice(0, FOTOS_DESKTOP).map((foto, index) => (
            <FotoCard key={foto.src} foto={foto} onClick={() => setAberta(index)} />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          {fotos.length > FOTOS_DESKTOP ? (
            <button
              type="button"
              onClick={() => setAberta(FOTOS_DESKTOP)}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--border-warm)] bg-white px-6 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-[var(--surface-green)] hover:text-[var(--brand)]"
            >
              <Camera className="size-4" aria-hidden="true" />
              Ver todas as {fotos.length} imagens
            </button>
          ) : null}
          <CtaLink
            href="#lead-form"
            label="Receber o book completo"
            imovel={imovel}
            source="galeria_cta"
            variant="primary"
          />
          <p className="text-xs text-slate-500">Imagens preliminares de caráter ilustrativo.</p>
        </div>
      </div>

      {fotoAberta && aberta !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
          onClick={fechar}
          role="dialog"
          aria-modal="true"
          aria-label={fotoAberta.legenda}
        >
          <button
            type="button"
            className="absolute top-4 right-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={fechar}
            aria-label="Fechar"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            className="absolute left-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors sm:left-6"
            onClick={(event) => {
              event.stopPropagation();
              navegar(-1);
            }}
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors sm:right-6"
            onClick={(event) => {
              event.stopPropagation();
              navegar(1);
            }}
            aria-label="Próxima imagem"
          >
            <ChevronRight className="size-6" />
          </button>
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={fotoAberta.src}
              alt={fotoAberta.alt}
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="max-h-[80vh] w-full h-auto object-contain bg-slate-950"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-5">
              <p className="text-white font-bold">{fotoAberta.legenda}</p>
              <p className="text-slate-300 text-xs">
                {aberta + 1} / {fotos.length} · Imagem ilustrativa
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
