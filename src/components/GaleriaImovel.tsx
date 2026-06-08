"use client";

import Image from "next/image";
import type { Imovel } from "@/data/imoveis";
import { pushTrackingEvent } from "@/lib/tracking";

type GaleriaImovelProps = {
  imovel: Imovel;
};

export function GaleriaImovel({ imovel }: GaleriaImovelProps) {
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
    pushTrackingEvent("gallery_view", {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      gallery_index: index
    });
  }

  return (
    <section className="bg-white py-14 sm:py-16" id="galeria">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a20]">
              Veja antes de pedir a tabela
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Imagens que mostram o produto
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Piscina, pool house, ficha tecnica e plantas extraidas do material
              de apresentacao do WE Barra.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {imagens.map((imagem, index) => (
            <button
              key={imagem.src}
              type="button"
              onClick={() => handleView(index)}
              className={
                index === 0
                  ? "group text-left lg:col-span-2 lg:row-span-2"
                  : "group text-left"
              }
            >
              <span
                className={
                  index === 0
                    ? "relative block aspect-[16/10] overflow-hidden border border-stone-200 bg-slate-100 lg:h-full lg:min-h-[460px]"
                    : "relative block aspect-[16/10] overflow-hidden border border-stone-200 bg-slate-100"
                }
              >
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, 100vw"
                  }
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </span>
              <span className="mt-3 block text-sm font-semibold text-slate-950">
                {getLabel(imagem.src, index)}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-5 text-slate-500">
          Imagens, plantas, valores e disponibilidade estao sujeitos a
          confirmacao.
        </p>
      </div>
    </section>
  );
}
