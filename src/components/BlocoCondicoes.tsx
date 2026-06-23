import type { Imovel } from "@/data/imoveis";
import { Info, BarChart3, Clock, LayoutGrid, CheckCircle } from "lucide-react";

type BlocoCondicoesProps = {
  imovel: Imovel;
};

export function BlocoCondicoes({ imovel }: BlocoCondicoesProps) {
  const resumo = [
    { label: "Unidades", value: "605", icon: LayoutGrid },
    { label: "Tipologias", value: "Aptos, Gardens e Coberturas", subtitle: "2, 3 e 4 quartos", icon: BarChart3 },
    { label: "Destaque", value: "Gardens e Coberturas", icon: CheckCircle },
    { label: "Entrega", value: "Maio/2029", icon: Clock },
  ];
  
  const ficha = imovel.fichaTecnica || [];

  return (
    <section
      className="bg-[var(--surface-warm)] py-12 sm:py-24 border-y border-[var(--border-warm)] overflow-hidden"
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
                     {"subtitle" in item && item.subtitle && (
                       <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>
                     )}
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

          </div>
        </div>
        
        <p className="mt-12 text-center border-t border-[var(--border-warm)] pt-6 text-xs leading-relaxed text-slate-500">
          {imovel.condicoesAviso}
        </p>
      </div>
    </section>
  );
}
