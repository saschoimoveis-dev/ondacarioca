export const siteConfig = {
  name: "Onda Carioca Imoveis",
  legalName: "Onda Carioca Imoveis",
  defaultTitle: "Onda Carioca Imoveis | Lancamentos no Rio de Janeiro",
  description:
    "Lancamentos imobiliarios selecionados na Barra da Tijuca e no Rio de Janeiro, com atendimento consultivo pelo corretor Alexandre Sascho.",
  // Dominio canonico de producao. Fixo de proposito: a env var
  // NEXT_PUBLIC_SITE_URL na Vercel apontava para o dominio tecnico
  // (.vercel.app), o que fazia sitemap e canonical competirem com o
  // dominio real. Para trocar de dominio, altere aqui.
  url: "https://www.caminhaesascho.com",
  whatsapp:
    process.env.NEXT_PUBLIC_DEFAULT_WHATSAPP_NUMBER || "5521987715816",
  phoneDisplay: "21 98771-5816",
  email: "contato@ondacariocaimoveis.com.br",
  address: "Barra da Tijuca, Rio de Janeiro - RJ"
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
