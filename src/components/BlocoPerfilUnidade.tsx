import { BriefcaseBusiness, Home, KeyRound, TrendingUp } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import type { Imovel } from "@/data/imoveis";

type BlocoPerfilUnidadeProps = {
  imovel: Imovel;
};

const perfis = [
  {
    title: "Quero morar",
    text: "Priorize planta, rotina, conforto, lazer e unidades que facam sentido para permanencia.",
    detail: "3 e 4 quartos costumam entrar melhor nessa comparacao.",
    icon: Home
  },
  {
    title: "Quero investir",
    text: "Compare entrada, fluxo, liquidez, demanda futura e facilidade de revenda ou locacao.",
    detail: "2 quartos podem ter procura mais ampla e ticket mais acessivel.",
    icon: TrendingUp
  },
  {
    title: "Quero algo escasso",
    text: "Avalie gardens e coberturas pela diferenciacao, area externa e menor disponibilidade.",
    detail: "A decisao depende muito de unidade, posicao e tabela vigente.",
    icon: KeyRound
  },
  {
    title: "Ainda estou comparando",
    text: "Use a tabela, plantas e simulacao para entender se o WE Barra supera outras opcoes.",
    detail: "O atendimento ajuda a separar desejo, preco e fluxo real.",
    icon: BriefcaseBusiness
  }
];

export function BlocoPerfilUnidade({ imovel }: BlocoPerfilUnidadeProps) {
  return (
    <section className="bg-white py-14 sm:py-16" id="perfil-unidade">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#007f5f]">
              Escolha guiada
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Qual unidade combina com seu momento?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A melhor unidade nao e necessariamente a mais barata ou a maior.
              Ela precisa alinhar objetivo, entrada, prazo, liquidez e estilo
              de vida.
            </p>
            <div className="mt-8">
              <CtaLink
                href="#lead-form"
                label="Receber orientacao por perfil"
                imovel={imovel}
                source="perfil_unidade_cta"
                variant="primary"
              />
            </div>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {perfis.map((perfil) => {
              const Icon = perfil.icon;

              return (
                <div
                  key={perfil.title}
                  className="grid gap-4 py-5 sm:grid-cols-[44px_1fr]"
                >
                  <div className="grid size-11 place-items-center rounded-full bg-slate-50 text-[#173f34]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {perfil.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {perfil.text}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-slate-800">
                      {perfil.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
