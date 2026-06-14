import { Bus, Ship, Waves, ConciergeBell, Package, Store } from "lucide-react";
import type { Imovel } from "@/data/imoveis";

type BlocoServicosProps = {
  imovel: Imovel;
};

const iconMap: Record<string, typeof Bus> = {
  bus: Bus,
  ship: Ship,
  waves: Waves,
  concierge: ConciergeBell,
  package: Package,
  store: Store
};

export function BlocoServicos({ imovel }: BlocoServicosProps) {
  const servicos = imovel.servicos || [];

  if (!servicos.length) {
    return null;
  }

  return (
    <section className="bg-[var(--brand)] py-16 sm:py-24 overflow-hidden" id="servicos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
            <ConciergeBell className="size-4" />
            Serviços exclusivos
          </p>
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl leading-tight">
            Conveniências que só o WE oferece
          </h2>
          <p className="mt-5 hidden sm:block text-lg leading-relaxed text-white/80">
            Do shuttle até o metrô à balsa que cruza a lagoa rumo à praia, a rotina aqui
            foi pensada para resolver o dia a dia sem você sair de casa.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up delay-100">
          {servicos.map((servico) => {
            const Icon = iconMap[servico.icon] || ConciergeBell;
            return (
              <div
                key={servico.titulo}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-white">{servico.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{servico.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
