"use client";

import Image from "next/image";
import type { Imovel } from "@/data/imoveis";
import { pushTrackingEvent } from "@/lib/tracking";

type GaleriaImovelProps = {
  imovel: Imovel;
};

export function GaleriaImovel({ imovel }: GaleriaImovelProps) {
  function handleView(index: number) {
    pushTrackingEvent("gallery_view", {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      gallery_index: index
    });
  }

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a20]">
              Ambientes
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Galeria do empreendimento
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Referencias visuais para entender fachada, interiores e lazer.
              Confirme o material oficial e a disponibilidade no atendimento.
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {imovel.imagens.map((imagem, index) => (
            <button
              key={imagem.src}
              type="button"
              onClick={() => handleView(index)}
              className="group relative aspect-[16/11] overflow-hidden border border-stone-200 bg-slate-100 text-left"
            >
              <Image
                src={imagem.src}
                alt={imagem.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/78 to-transparent p-4 text-sm font-medium text-white">
                {index === 0 ? "Fachada" : index === 1 ? "Sala e varanda" : "Lazer"}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
