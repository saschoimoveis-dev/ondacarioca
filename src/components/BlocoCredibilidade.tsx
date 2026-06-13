import { BadgeCheck } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoCredibilidadeProps = {
  imovel: Imovel;
};

export function BlocoCredibilidade({ imovel }: BlocoCredibilidadeProps) {
  const incorporadores = imovel.incorporadores || [];

  if (!incorporadores.length) {
    return null;
  }

  return (
    <section className="bg-[var(--surface-warm)] py-16 sm:py-20 border-y border-[var(--border-warm)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            <BadgeCheck className="size-4" />
            Quem realiza
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Solidez para você comprar com segurança
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 animate-fade-in-up delay-100">
          {incorporadores.map((inc) => (
            <div
              key={inc.nome}
              className="rounded-2xl border border-[var(--border-warm)] bg-white p-6 shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-xl font-black text-[var(--brand)]">{inc.nome}</p>
                <span className="rounded-full bg-[var(--surface-green)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--brand)]">
                  {inc.selo}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{inc.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
