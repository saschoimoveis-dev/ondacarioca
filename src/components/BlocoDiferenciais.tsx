import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";

type BlocoDiferenciaisProps = {
  imovel: Imovel;
};

export function BlocoDiferenciais({ imovel }: BlocoDiferenciaisProps) {
  const lazer =
    imovel.imagens.find((imagem) => imagem.src.includes("piscina")) ||
    imovel.imagens[0];

  return (
    <section
      className="border-y border-[var(--border-warm)] bg-white py-14 sm:py-16"
      id="lazer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[340px] overflow-hidden bg-slate-100 sm:min-h-[460px]">
            <Image
              src={lazer.src}
              alt={lazer.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
              Mais de 5 mil m² de lazer
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A area de lazer e o principal ativo visual do empreendimento. Use
              o PDF para ver imagens previas e comparar com as tipologias
              disponiveis.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {imovel.diferenciais.slice(0, 4).map((diferencial) => (
                <div
                  key={diferencial}
                  className="premium-card border p-4 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2
                    className="mb-3 size-5 text-[var(--accent)]"
                    aria-hidden="true"
                  />
                  {diferencial}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-5 text-slate-500">
              Imagens, plantas, valores e disponibilidade estao sujeitos a
              confirmacao.
            </p>

            <div className="mt-8">
              <CtaLink
                href="#lead-form"
                label="Receber PDF completo"
                imovel={imovel}
                source="lazer_pdf_cta"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
