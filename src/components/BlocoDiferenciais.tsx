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
    <section className="bg-[#173f34] py-14 text-white sm:py-16" id="lazer">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-slate-900 sm:min-h-[460px]">
          <Image
            src={lazer.src}
            alt={lazer.alt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d1b16a]">
            Lazer
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Mais de 5 mil m² de lazer
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            A area de lazer e o principal ativo visual do empreendimento. Use o
            PDF para ver as imagens previas e comparar o produto com as
            tipologias disponiveis.
          </p>

          <div className="mt-6 grid gap-3 text-sm leading-6 text-white/82">
            {imovel.diferenciais.slice(0, 5).map((diferencial) => (
              <span key={diferencial} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 size-4 shrink-0 text-[#d1b16a]"
                  aria-hidden="true"
                />
                {diferencial}
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs leading-5 text-white/55">
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
    </section>
  );
}
