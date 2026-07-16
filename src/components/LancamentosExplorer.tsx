"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X, MapPin } from "lucide-react";
import { ImovelCard } from "@/components/ImovelCard";
import {
  filtroTipologias,
  getTipologiaTags,
  type FiltroTipologia,
  type Imovel
} from "@/data/imoveis";

type LancamentosExplorerProps = {
  imoveis: Imovel[];
};

type Ordenacao = "relevancia" | "preco-asc" | "preco-desc";

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export function LancamentosExplorer({ imoveis }: LancamentosExplorerProps) {
  const [busca, setBusca] = useState("");
  const [bairro, setBairro] = useState("todos");
  const [tipos, setTipos] = useState<FiltroTipologia[]>([]);
  const [ordenar, setOrdenar] = useState<Ordenacao>("relevancia");

  const bairros = useMemo(() => {
    return Array.from(new Set(imoveis.map((i) => i.bairro))).sort();
  }, [imoveis]);

  // Tags de tipologia presentes no acervo, na ordem canônica.
  const tiposDisponiveis = useMemo(() => {
    const presentes = new Set(imoveis.flatMap((i) => getTipologiaTags(i)));
    return filtroTipologias.filter((t) => presentes.has(t));
  }, [imoveis]);

  const resultados = useMemo(() => {
    const termo = normalizar(busca.trim());

    const filtrados = imoveis.filter((imovel) => {
      if (bairro !== "todos" && imovel.bairro !== bairro) {
        return false;
      }

      if (tipos.length) {
        const tagsImovel = getTipologiaTags(imovel);
        const atende = tipos.some((t) => tagsImovel.includes(t));
        if (!atende) {
          return false;
        }
      }

      if (termo) {
        const alvo = normalizar(
          [
            imovel.nome,
            imovel.bairro,
            imovel.cidade,
            imovel.incorporadora ?? "",
            imovel.enderecoResumo ?? "",
            imovel.descricaoCurta,
            imovel.tipologias.join(" ")
          ].join(" ")
        );
        if (!alvo.includes(termo)) {
          return false;
        }
      }

      return true;
    });

    const comparadores: Record<Ordenacao, (a: Imovel, b: Imovel) => number> = {
      relevancia: () => 0,
      "preco-asc": (a, b) =>
        (a.precoInicialNumerico ?? Infinity) -
        (b.precoInicialNumerico ?? Infinity),
      "preco-desc": (a, b) =>
        (b.precoInicialNumerico ?? -Infinity) -
        (a.precoInicialNumerico ?? -Infinity)
    };

    return [...filtrados].sort(comparadores[ordenar]);
  }, [imoveis, busca, bairro, tipos, ordenar]);

  const filtrosAtivos =
    busca.trim() !== "" || bairro !== "todos" || tipos.length > 0;

  function toggleTipo(tag: FiltroTipologia) {
    setTipos((atuais) =>
      atuais.includes(tag)
        ? atuais.filter((t) => t !== tag)
        : [...atuais, tag]
    );
  }

  function limparFiltros() {
    setBusca("");
    setBairro("todos");
    setTipos([]);
    setOrdenar("relevancia");
  }

  return (
    <section className="bg-slate-50 py-8 sm:py-14" id="lista">
      {/* Barra de busca e filtros — persiste no topo durante o scroll da lista */}
      <div className="sticky top-[4.5rem] z-30 border-y border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            {/* Busca */}
            <label className="relative flex-1">
              <span className="sr-only">Buscar empreendimento</span>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Buscar por nome, bairro ou incorporadora"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-[var(--brand)] focus:bg-white focus:ring-2 focus:ring-[var(--brand)]/15"
              />
            </label>

            {/* Bairro */}
            <div className="relative">
              <MapPin
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <select
                value={bairro}
                onChange={(event) => setBairro(event.target.value)}
                aria-label="Filtrar por bairro"
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-8 text-sm font-medium text-slate-900 outline-none transition focus:border-[var(--brand)] focus:bg-white lg:w-56"
              >
                <option value="todos">Todos os bairros</option>
                {bairros.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Ordenação */}
            <div className="relative">
              <SlidersHorizontal
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <select
                value={ordenar}
                onChange={(event) => setOrdenar(event.target.value as Ordenacao)}
                aria-label="Ordenar resultados"
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-8 text-sm font-medium text-slate-900 outline-none transition focus:border-[var(--brand)] focus:bg-white lg:w-52"
              >
                <option value="relevancia">Ordenar: Relevância</option>
                <option value="preco-asc">Menor preço</option>
                <option value="preco-desc">Maior preço</option>
              </select>
            </div>
          </div>

          {/* Chips de tipologia */}
          {tiposDisponiveis.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2 overflow-x-auto">
              <span className="mr-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Tipologia
              </span>
              {tiposDisponiveis.map((tag) => {
                const ativo = tipos.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTipo(tag)}
                    aria-pressed={ativo}
                    className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                      ativo
                        ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-[var(--brand)] hover:text-[var(--brand)]"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho de resultados */}
        <div className="mb-5 mt-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-950">
            {resultados.length}{" "}
            {resultados.length === 1
              ? "empreendimento encontrado"
              : "empreendimentos encontrados"}
          </h2>
          {filtrosAtivos && (
            <button
              type="button"
              onClick={limparFiltros}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] transition hover:opacity-80"
            >
              <X className="size-4" aria-hidden="true" />
              Limpar filtros
            </button>
          )}
        </div>

        {/* Grid ou estado vazio */}
        {resultados.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resultados.map((imovel) => (
              <ImovelCard key={imovel.id} imovel={imovel} />
            ))}
          </div>
        ) : (
          <div className="premium-card flex flex-col items-center rounded-2xl border bg-white px-6 py-16 text-center">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-[var(--surface-green)]">
              <Search className="size-5 text-[var(--brand)]" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Nenhum empreendimento encontrado
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
              Ajuste a busca ou os filtros para ver outras opções de lançamentos.
            </p>
            <button
              type="button"
              onClick={limparFiltros}
              className="btn-secondary-premium mt-6 inline-flex items-center gap-2 rounded-sm border px-5 py-2.5 text-sm font-semibold transition"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
