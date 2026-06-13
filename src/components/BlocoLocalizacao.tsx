import Image from "next/image";
import {
  MapPin,
  Navigation,
  Waves,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Dumbbell,
  ExternalLink
} from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoLocalizacaoProps = {
  imovel: Imovel;
};

const iconMap: Record<string, typeof Navigation> = {
  navigation: Navigation,
  waves: Waves,
  shopping: ShoppingBag,
  school: GraduationCap,
  health: HeartPulse,
  dumbbell: Dumbbell
};

export function BlocoLocalizacao({ imovel }: BlocoLocalizacaoProps) {
  const categorias = imovel.localizacao.categorias || [];

  if (!categorias.length) {
    return null;
  }

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[var(--border-warm)] overflow-hidden" id="localizacao-detalhe">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          {/* Coluna intro + imagem */}
          <div className="animate-fade-in-up">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              <MapPin className="size-4" />
              Localização
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
              Na Av. das Américas, com a Barra inteira ao alcance
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {imovel.localizacao.descricao}
            </p>

            <div className="relative mt-6 h-[200px] w-full overflow-hidden rounded-2xl border border-[var(--border-warm)] shadow-md sm:h-[260px]">
              <Image
                src="/images/we-barra-aerial-barra.jpg"
                alt="Vista aérea da Barra da Tijuca, entorno do WE Barra by Living"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <a
              href={imovel.localizacao.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--brand)] hover:text-[var(--brand)] hover:bg-[var(--surface-green)] min-h-[44px]"
            >
              <MapPin className="size-4 text-[var(--brand)]" aria-hidden="true" />
              Abrir no mapa
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>

          {/* Grid de distâncias */}
          <div className="grid gap-4 sm:grid-cols-2 animate-fade-in-up delay-100">
            {categorias.map((categoria) => {
              const Icon = iconMap[categoria.icon] || Navigation;
              return (
                <div
                  key={categoria.titulo}
                  className="rounded-2xl border border-[var(--border-warm)] bg-[var(--surface-warm)] p-5"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-full bg-[var(--surface-green)] text-[var(--brand)]">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      {categoria.titulo}
                    </h3>
                  </div>
                  <ul className="mt-3 divide-y divide-slate-100">
                    {categoria.itens.map((item) => (
                      <li
                        key={item.nome}
                        className="flex items-center justify-between gap-3 py-2 text-sm"
                      >
                        <span className="text-slate-600">{item.nome}</span>
                        <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-[var(--brand)] border border-[var(--border-warm)]">
                          {item.tempo}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-400">Tempos aproximados de carro. Fonte: Google Maps.</p>
      </div>
    </section>
  );
}
