import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoDiferenciaisProps = {
  imovel: Imovel;
};

export function BlocoDiferenciais({ imovel }: BlocoDiferenciaisProps) {
  const destaques = [
    "Mais de 5 mil m² de lazer comunicados",
    "Terreno amplo de mais de 25 mil m² comunicados",
    "Piscinas, academia, gourmet, festas, coworking e rooftop"
  ];
  const imagensLazer = [
    {
      title: "Pool house",
      image:
        imovel.imagens.find((imagem) =>
          imagem.src.includes("pool-house-bar")
        ) ||
        imovel.imagens.find((imagem) => imagem.src.includes("pool-house")) ||
        imovel.imagens[0]
    },
    {
      title: "Salao de festas",
      image:
        imovel.imagens.find((imagem) =>
          imagem.src.includes("salao-festas")
        ) || imovel.imagens[0]
    },
    {
      title: "Sky lounge",
      image:
        imovel.imagens.find((imagem) => imagem.src.includes("sky-lounge")) ||
        imovel.imagens[0]
    }
  ];

  return (
    <section
      className="border-y border-[var(--border-warm)] bg-white py-12 sm:py-14"
      id="lazer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.64fr_1.36fr]">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Lazer e convivencia
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Lazer e escala que sustentam desejo
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              O WE Barra combina terreno amplo, lazer completo e areas de
              convivencia. Isso pesa para morar, locar e revender.
            </p>

            <ul className="mt-7 divide-y divide-[var(--border-warm)] border-y border-[var(--border-warm)] text-sm leading-6 text-slate-700">
              {destaques.map((diferencial) => (
                <li
                  key={diferencial}
                  className="flex gap-3 py-3"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <span>{diferencial}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-5 text-slate-500">
              Imagens, plantas, valores e disponibilidade estao sujeitos a
              confirmacao.
            </p>

            <a
              href="#lead-form"
              className="mt-8 inline-flex text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-dark)]"
            >
              Receber tabela e simulacao
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {imagensLazer.map((item, index) => (
              <div
                key={item.title}
                className={
                  index === 0
                    ? "relative min-h-[320px] overflow-hidden bg-slate-100 sm:col-span-2 sm:min-h-[420px]"
                    : "relative min-h-[180px] overflow-hidden bg-slate-100"
                }
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 58vw, 100vw"
                      : "(min-width: 1024px) 28vw, 50vw"
                  }
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
