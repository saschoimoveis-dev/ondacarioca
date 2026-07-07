import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Onda Carioca Imóveis coleta, usa e protege os dados enviados por formulários de contato e anúncios."
};

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
          Política de Privacidade
        </p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Como tratamos os seus dados
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Última atualização: {new Date().toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          })}
        </p>

        <div className="mt-10 grid gap-8 text-sm leading-7 text-slate-700 sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              1. Quem somos
            </h2>
            <p className="mt-2">
              Este site é operado por {siteConfig.legalName}, atuando na
              divulgação e comercialização de lançamentos imobiliários no Rio
              de Janeiro. Para qualquer dúvida sobre esta política, entre em
              contato pelo e-mail {siteConfig.email} ou pelo WhatsApp{" "}
              {siteConfig.phoneDisplay}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              2. Quais dados coletamos
            </h2>
            <p className="mt-2">
              Quando você preenche um formulário no site, clica em um botão de
              WhatsApp ou envia um formulário de contato dentro de um anúncio
              (por exemplo, um Formulário de Lead do Google Ads), podemos
              coletar: nome, telefone/WhatsApp, e-mail, respostas sobre seu
              perfil de compra (objetivo, tipologia de interesse, prazo de
              compra, situação de crédito), a página ou anúncio de origem e
              identificadores técnicos de campanha (como UTM, gclid ou fbclid)
              usados apenas para medir a origem do contato.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              3. Para que usamos esses dados
            </h2>
            <p className="mt-2">
              Usamos os dados exclusivamente para: entrar em contato com você
              a respeito do imóvel de interesse, enviar condições comerciais e
              materiais do lançamento, qualificar seu perfil de compra e medir
              a performance das campanhas de marketing que originaram o
              contato. Não vendemos nem compartilhamos seus dados com
              terceiros para fins de marketing de outras empresas.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              4. Onde os dados ficam armazenados
            </h2>
            <p className="mt-2">
              Os dados enviados por formulários são armazenados em uma
              planilha Google Sheets de acesso restrito à equipe comercial
              responsável pelo atendimento, e podem ser processados por
              plataformas de anúncios (Google Ads, Meta Ads) apenas para fins
              de mensuração de campanha.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Seus direitos
            </h2>
            <p className="mt-2">
              Conforme a Lei Geral de Proteção de Dados (LGPD), você pode a
              qualquer momento solicitar a confirmação, correção ou exclusão
              dos seus dados, além de informações sobre como eles são usados.
              Basta enviar o pedido para {siteConfig.email} ou pelo WhatsApp{" "}
              {siteConfig.phoneDisplay}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Cookies e tecnologias de mensuração
            </h2>
            <p className="mt-2">
              O site utiliza cookies e tags de mensuração (como Google Tag
              Manager, Google Analytics e Meta Pixel) para entender a origem
              das visitas e a performance das campanhas de anúncios. Você pode
              desativar cookies nas configurações do seu navegador a qualquer
              momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
