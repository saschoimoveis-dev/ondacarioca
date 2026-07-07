import type { LeadPayload } from "@/lib/sheets";

/**
 * Alerta o corretor sobre um lead novo, fora do fluxo padrão do site.
 *
 * O formulario do site funciona sem isso: o proprio visitante e
 * redirecionado para o WhatsApp ao enviar o formulario. Ja o Lead Form do
 * Google Ads roda dentro do Google (o visitante nunca chega ao site), entao
 * nao ha navegador do lead para abrir o WhatsApp automaticamente. Este
 * helper cobre esse buraco avisando o corretor pra ele iniciar contato.
 *
 * Suporta dois mecanismos, configurados por variavel de ambiente (ambos
 * opcionais, e nenhum bloqueia a gravacao do lead na planilha caso falhe):
 *
 * - NOTIFY_WEBHOOK_URL: faz um POST com o payload do lead. Funciona com
 *   Make, Zapier, n8n, um bot de Telegram, um endpoint proprio, etc.
 * - NOTIFY_CALLMEBOT_PHONE + NOTIFY_CALLMEBOT_APIKEY: manda uma mensagem de
 *   WhatsApp direto pro celular do corretor via CallMeBot
 *   (https://www.callmebot.com/blog/free-api-whatsapp-messages/), sem
 *   precisar de conta de WhatsApp Business API.
 */
export async function notifyNewLead(
  lead: LeadPayload,
  meta: { rowNumber?: number; source: "site" | "lead_form_ads" }
) {
  const tasks: Array<Promise<unknown>> = [];

  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL?.trim();
  if (webhookUrl) {
    tasks.push(
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead, ...meta })
      }).catch((error) => {
        console.error("notify_webhook_failed", error);
      })
    );
  }

  const callMeBotPhone = process.env.NOTIFY_CALLMEBOT_PHONE?.trim();
  const callMeBotApiKey = process.env.NOTIFY_CALLMEBOT_APIKEY?.trim();
  if (callMeBotPhone && callMeBotApiKey) {
    const text = buildAlertMessage(lead, meta);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(
      callMeBotPhone
    )}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(
      callMeBotApiKey
    )}`;

    tasks.push(
      fetch(url).catch((error) => {
        console.error("notify_callmebot_failed", error);
      })
    );
  }

  if (tasks.length === 0) {
    return;
  }

  await Promise.allSettled(tasks);
}

function buildAlertMessage(
  lead: LeadPayload,
  meta: { rowNumber?: number; source: "site" | "lead_form_ads" }
) {
  const originLabel =
    meta.source === "lead_form_ads"
      ? "Google Ads (Lead Form)"
      : "Site";

  const lines = [
    `Novo lead - ${originLabel}`,
    `Nome: ${lead.nome}`,
    `WhatsApp: ${lead.whatsapp || "nao informado"}`,
    `Imovel: ${lead.imovel}`,
    lead.tipologia ? `Tipologia: ${lead.tipologia}` : null,
    meta.rowNumber ? `Linha na planilha: ${meta.rowNumber}` : null
  ].filter(Boolean);

  return lines.join("\n");
}
