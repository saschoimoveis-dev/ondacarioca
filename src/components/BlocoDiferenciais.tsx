import { BadgeCheck, BarChart3, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoDiferenciaisProps = {
  imovel: Imovel;
};

const icons = [Sparkles, BadgeCheck, ShieldCheck, MapPinned, BarChart3];

export function BlocoDiferenciais({ imovel }: BlocoDiferenciaisProps) {
  return (
    <section className="bg-slate-950 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <h2 className="text-3xl font-semibold">
              Diferenciais comerciais e de performance
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              A LP nao funciona como folder. Ela organiza informacao para
              compra, captura origem do lead e prepara dados para otimizacao de
              campanhas.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {imovel.diferenciais.map((diferencial, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div
                  key={diferencial}
                  className="rounded-sm border border-white/10 bg-white/5 p-5"
                >
                  <Icon className="mb-4 size-6 text-emerald-300" aria-hidden="true" />
                  <p className="text-sm leading-6 text-white/82">
                    {diferencial}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
