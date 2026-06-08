"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";
import { pushTrackingEvent } from "@/lib/tracking";

type GaleriaImovelProps = {
  imovel: Imovel;
};

export function GaleriaImovel({ imovel }: GaleriaImovelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imagens = [
    imovel.imagens.find((imagem) => imagem.src.includes("pool-house")) ||
      imovel.imagens[0],
    imovel.imagens.find((imagem) => imagem.src.includes("piscina")) ||
      imovel.imagens[1],
    imovel.imagens.find((imagem) => imagem.src.includes("planta")) ||
      imovel.imagens[2],
    imovel.imagens.find((imagem) => imagem.src.includes("ficha")) ||
      imovel.imagens[3]
  ].filter(Boolean);
  const activeImage = imagens[activeIndex] || imagens[0];
  const activeLabel = activeImage ? getLabel(activeImage.src, activeIndex) : "";

  function getLabel(src: string, index: number) {
    if (src.includes("piscina")) {
      return "Piscina e lazer";
    }
    if (src.includes("pool-house")) {
      return "Pool house";
    }
    if (src.includes("ficha")) {
      return "Ficha tecnica";
    }
    if (src.includes("planta")) {
      return "Planta previa";
    }

    return index === 0 ? "Imagem principal" : "Ambiente";
  }

  function handleView(index: number) {
    setActiveIndex(index);
    pushTrackingEvent("gallery_view", {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      gallery_index: index
    });
  }

  function handlePrevious() {
    const nextIndex = activeIndex === 0 ? imagens.length - 1 : activeIndex - 1;
    handleView(nextIndex);
  }

  function handleNext() {
    const nextIndex = activeIndex === imagens.length - 1 ? 0 : activeIndex + 1;
    handleView(nextIndex);
  }

  return (
    <section className="bg-slate-50 py-14 sm:py-16" id="galeria">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950">
              Imagens do WE Barra
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Fotos, plantas e ficha tecnica aparecem cedo para facilitar a
              comparacao antes do contato.
            </p>
          </div>
          <CtaLink
            href="#lead-form"
            label="Receber material"
            imovel={imovel}
            source="galeria_pdf_cta"
            variant="secondary"
          />
        </div>

        {activeImage ? (
          <div className="grid gap-5 border border-slate-200 bg-white p-3 shadow-sm sm:p-4 lg:grid-cols-[1fr_292px]">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(min-width: 1024px) 72vw, 100vw"
                  className="object-cover"
                  priority={activeIndex === 0}
                />
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-slate-950">
                    {activeLabel}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {activeIndex + 1} de {imagens.length}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="grid size-10 place-items-center rounded-sm border border-slate-300 bg-white text-[#173f34] transition hover:bg-slate-50"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="grid size-10 place-items-center rounded-sm border border-slate-300 bg-white text-[#173f34] transition hover:bg-slate-50"
                    aria-label="Proxima imagem"
                  >
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {imagens.map((imagem, index) => (
                <button
                  key={imagem.src}
                  type="button"
                  onClick={() => handleView(index)}
                  className="group text-left"
                  aria-current={activeIndex === index ? "true" : undefined}
                >
                  <span
                    className={
                      activeIndex === index
                        ? "relative block aspect-[16/10] overflow-hidden border-2 border-[#173f34] bg-slate-100"
                        : "relative block aspect-[16/10] overflow-hidden border border-slate-200 bg-slate-100"
                    }
                  >
                    <Image
                      src={imagem.src}
                      alt={imagem.alt}
                      fill
                      sizes="(min-width: 1024px) 280px, 50vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="mt-2 block text-xs font-semibold text-slate-700">
                    {getLabel(imagem.src, index)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <p className="mt-6 max-w-3xl text-xs leading-5 text-slate-500">
          Imagens, plantas, valores e disponibilidade estao sujeitos a
          confirmacao.
        </p>
      </div>
    </section>
  );
}
