export const siteConfig = {
  name: "Onda Carioca Imoveis",
  legalName: "Onda Carioca Imoveis",
  defaultTitle: "Onda Carioca Imoveis | Lancamentos no Rio de Janeiro",
  description:
    "Lancamentos imobiliarios selecionados na Barra da Tijuca e no Rio de Janeiro, com atendimento consultivo pelo corretor Alexandre Sascho.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://ondacariocaimoveis.com.br",
  whatsapp:
    process.env.NEXT_PUBLIC_DEFAULT_WHATSAPP_NUMBER || "5521991074444",
  phoneDisplay: "21 99107-4444",
  email: "contato@ondacariocaimoveis.com.br",
  address: "Barra da Tijuca, Rio de Janeiro - RJ"
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
