import { BadgeCheck, BarChart3, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoDiferenciaisProps = {
  imovel: Imovel;
};

const icons = [Sparkles, BadgeCheck, ShieldCheck, MapPinned, BarChart3];

export function BlocoDiferenciais({ imovel }: BlocoDiferenciaisProps) {
  return (
    <section className="bg-[#173f34] py-14 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d1b16a]">
              Por que entrar em contato
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Informacao objetiva para escolher melhor
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              A pagina concentra o essencial para comparar o WE Barra antes do
              atendimento: condicoes, tipologias, localizacao e proximos passos.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {imovel.diferenciais.map((diferencial, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div
                  key={diferencial}
                  className="border border-white/10 bg-white/[0.06] p-5"
                >
                  <Icon className="mb-4 size-6 text-[#d1b16a]" aria-hidden="true" />
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
