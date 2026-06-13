"use client";

import { useState } from "react";
import type { Imovel } from "@/data/imoveis";
import { Info, BarChart3, Clock, LayoutGrid, CheckCircle, ChevronDown } from "lucide-react";

type BlocoCondicoesProps = {
  imovel: Imovel;
};

export function BlocoCondicoes({ imovel }: BlocoCondicoesProps) {
  const [mixOpen, setMixOpen] = useState(false);
  const resumo = [
    { label: "Unidades", value: "605", icon: LayoutGrid },
    { label: "Tipologia", value: "2Q a 4Q", icon: BarChart3 },
    { label: "Destaque", value: "Gardens e Coberturas", icon: CheckCircle },
    { label: "Entrega", value: "Maio/2029", icon: Clock },
  ];
  
  const mixUnidades = [
    "102 un. 2Q 63m²",
    "76 un. 2Q 70m²",
    "183 un. 3Q 83m²",
    "102 un. 4Q 100m²",
    "77 un. 4Q 118m²",
    "20 gardens 95m² a 184m²",
    "33 coberturas duplex",
    "12 coberturas lineares"
  ];
  const ficha = imovel.fichaTecnica || [];

  return (
    <section
      className="bg-[var(--surface-warm)] py-16 sm:py-24 border-y border-[var(--border-warm)] overflow-hidden"
      id="condicoes"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start animate-fade-in-up">
          
          <div className="flex flex-col">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
               <Info className="size-4" />
               Ficha Técnica
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
              Os detalhes que importam
            </h2>
            <p className="mt-5 hidden sm:block text-lg leading-relaxed text-slate-600">
              Conheça os dados estruturais do empreendimento para entender sua dimensão e potencial de valorização na região.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
               {resumo.map((item) => {
                 const Icon = item.icon;
                 return (
                   <div key={item.label} className="bg-white p-4 rounded-xl border border-[var(--border-warm)] shadow-sm">
                     <Icon className="size-5 text-[var(--brand)] mb-3" />
                     <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{item.label}</p>
                     <p className="text-base font-bold text-slate-900">{item.value}</p>
                   </div>
                 )
               })}
            </div>
          </div>

          <div className="bg-white p-5 sm:p-10 rounded-2xl shadow-md border border-[var(--border-warm)] animate-fade-in-up delay-100">
            {/* Grid de detalhes técnicos */}
            {ficha.length ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-8 sm:gap-y-6">
                {ficha.map((item) => (
                  <div
                    key={item.label}
                    className={`flex flex-col border-b border-slate-100 pb-3 ${item.value.length > 40 ? "col-span-2" : ""}`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold leading-relaxed text-slate-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {/* Mix de Unidades — toggle no mobile, sempre aberto no desktop */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              {/* Cabeçalho clícavel no mobile */}
              <button
                className="flex w-full items-center justify-between sm:cursor-default"
                onClick={() => setMixOpen((v) => !v)}
                aria-expanded={mixOpen}
              >
                <span className="text-sm font-bold text-slate-900">
                  Mix de Unidades Detalhado
                </span>
                <ChevronDown
                  className={`size-4 text-slate-400 transition-transform duration-300 sm:hidden ${
                    mixOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Conteúdo: visível sempre no sm+, toggleável no mobile */}
              <div className={`mt-3 sm:block ${mixOpen ? "block" : "hidden"}`}>
                <div className="flex flex-wrap gap-2">
                  {mixUnidades.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[var(--surface-green)]/40 border border-[var(--surface-green)] text-xs font-semibold text-[var(--brand-dark)] transition-colors hover:bg-[var(--surface-green)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[11px] leading-5 text-slate-400 italic">
                  * Quantitativo exato sujeito à disponibilidade da tabela vigente no ato da reserva.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="mt-12 text-center border-t border-[var(--border-warm)] pt-6 text-xs leading-relaxed text-slate-500">
          {imovel.condicoesAviso}
        </p>
      </div>
    </section>
  );
}
