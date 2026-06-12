import Image from "next/image";
import { CheckCircle2, Sparkles, MoveRight } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoDiferenciaisProps = {
  imovel: Imovel;
};

export function BlocoDiferenciais({ imovel }: BlocoDiferenciaisProps) {
  const destaques = [
    "Uso próprio: lazer completo aumenta conforto no dia a dia.",
    "Locação: piscina, academia, coworking e festas ampliam apelo para demanda da Barra.",
    "Revenda: terreno amplo, rooftop e áreas externas ajudam a diferenciar o produto."
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
      title: "Salão de festas",
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
      className="border-y border-[var(--border-warm)] bg-white py-16 sm:py-24 overflow-hidden"
      id="lazer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          
          <div className="flex flex-col justify-center animate-fade-in-up">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              <Sparkles className="size-4" />
              Lazer e conveniência
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
              Mais de 5 mil m² de lazer para morar bem e valorizar
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Lazer amplo melhora o uso próprio, atrai bons inquilinos e facilita a revenda futura. No WE Barra, o nível de entrega é um dos maiores diferenciais comparado a outros da mesma faixa de preço.
            </p>

            <ul className="mt-8 space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
              {destaques.map((diferencial) => (
                <li
                  key={diferencial}
                  className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100 transition-colors hover:border-[var(--border-warm)] hover:bg-[var(--surface-warm)]"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <span className="font-medium text-slate-800">{diferencial}</span>
                </li>
              ))}
            </ul>

            <a
              href="#lead-form"
              className="mt-8 group inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/30 bg-[var(--surface-green)] px-5 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand)] transition hover:bg-[var(--border-warm)] hover:border-[var(--brand)] min-h-[44px]"
            >
              Receber apresentação completa
              <MoveRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-200">
            {imagensLazer.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl shadow-sm ${
                  index === 0
                    ? "col-span-2 min-h-[220px] sm:min-h-[460px]"
                    : "min-h-[140px] sm:min-h-[220px]"
                }`}
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
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Título sempre visível, sem depender de hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-base sm:text-lg font-bold text-white drop-shadow-md">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">
                     Perspectiva ilustrativa
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
