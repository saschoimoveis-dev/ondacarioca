import { Calculator, Columns3, KeyRound, UserCheck } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";

type BlocoListaVipProps = {
  imovel: Imovel;
};

const motivos = [
  {
    title: "Escolha melhor",
    text: "Compare plantas, andares, colunas e posicoes antes de decidir.",
    icon: Columns3
  },
  {
    title: "Fluxo mais claro",
    text: "Receba uma simulacao com sinal, parcelas durante a obra e saldo estimado.",
    icon: Calculator
  },
  {
    title: "Unidades disputadas",
    text: "Tipologias menores, gardens e coberturas tendem a exigir decisao mais rapida.",
    icon: KeyRound
  },
  {
    title: "Decisao com orientacao",
    text: "Alexandre ajuda a comparar perfil de moradia, investimento e liquidez.",
    icon: UserCheck
  }
];

export function BlocoListaVip({ imovel }: BlocoListaVipProps) {
  return (
    <section className="border-y border-slate-200 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#007f5f]">
              Lista VIP
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Por que entrar antes da abertura da tabela
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              O melhor atendimento no lancamento nao e so enviar uma tabela. E
              ajudar voce a entender unidade, fluxo, perfil de compra e
              prioridade antes de assumir uma decisao.
            </p>
            <div className="mt-8">
              <CtaLink
                href="#lead-form"
                label="Entrar na lista VIP"
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
                  className="border border-slate-200 bg-slate-50 p-5"
                >
                  <Icon className="mb-4 size-6 text-[#007f5f]" aria-hidden="true" />
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
