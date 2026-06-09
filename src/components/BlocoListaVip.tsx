import { Calculator, Columns3, KeyRound, UserCheck } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";

type BlocoListaVipProps = {
  imovel: Imovel;
};

const motivos = [
  {
    title: "Escolha melhor",
    text: "Compare andar, coluna, vista e orientacao enquanto ainda ha mais opcoes na tabela.",
    icon: Columns3
  },
  {
    title: "Veja se cabe no bolso",
    text: "Receba uma simulacao com sinal, mensais durante a obra e saldo estimado.",
    icon: Calculator
  },
  {
    title: "Unidades disputadas",
    text: "2 quartos, gardens e coberturas costumam concentrar mais disputa por perfil e escassez.",
    icon: KeyRound
  },
  {
    title: "Decisao com orientacao",
    text: "Alexandre ajuda a separar moradia, liquidez, valorizacao potencial e fluxo real.",
    icon: UserCheck
  }
];

export function BlocoListaVip({ imovel }: BlocoListaVipProps) {
  return (
    <section className="border-y border-[var(--border-warm)] bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Lista VIP
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Entre antes para simular o fluxo e comparar unidades
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A oportunidade nao esta apenas no preco inicial. Ela esta em
              descobrir se o sinal, as mensais e o saldo fazem sentido para o
              seu caixa enquanto ainda ha boas opcoes de escolha.
            </p>
            <div className="mt-8">
              <CtaLink
                href="#lead-form"
                label="Simular meu fluxo"
                imovel={imovel}
                source="lista_vip_cta"
                variant="primary"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {motivos.map((motivo) => {
              const Icon = motivo.icon;

              return (
                <div
                  key={motivo.title}
                  className="premium-card border p-5"
                >
                  <Icon className="mb-4 size-6 text-[var(--accent)]" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-slate-950">
                    {motivo.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {motivo.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-xs leading-5 text-slate-500">
          Condicoes, valores e disponibilidade dependem da tabela vigente e
          confirmacao comercial.
        </p>
      </div>
    </section>
  );
}
