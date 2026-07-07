import { NextResponse } from "next/server";
import { appendLeadToSheet, type LeadPayload } from "@/lib/sheets";
import { notifyNewLead } from "@/lib/notify";

/**
 * Webhook do Formulario de Lead do Google Ads.
 *
 * Configuracao: no recurso "Formulario de lead" da campanha, em
 * "Metodo de entrega de leads" > Webhook, usar:
 *   URL: https://<seu-dominio>/api/leads/google-ads-webhook
 *   Chave: o mesmo valor de GOOGLE_ADS_LEAD_FORM_WEBHOOK_KEY
 *
 * O Google exige uma resposta HTTP 200 em ate poucos segundos, entao a
 * gravacao na planilha acontece antes de responder, mas o alerta ao
 * corretor (notifyNewLead) nao bloqueia a resposta.
 *
 * Antes de ativar de verdade, use o botao "Enviar lead de teste" do Google
 * Ads e confira que a linha chegou na aba "Leads" com tipo
 * "lead_form_ads_test".
 *
 * Referencia do formato do payload:
 * https://developers.google.com/google-ads/webform-connector/webhook
 */

type GoogleLeadFormColumn = {
  column_id?: string;
  column_name?: string;
  string_value?: string;
};

type GoogleLeadFormWebhookPayload = {
  api_version?: string;
  campaign_id?: string;
  google_key?: string;
  is_test?: boolean;
  gcl_id?: string;
  adgroup_id?: string;
  creative_id?: string;
  form_id?: string;
  lead_id?: string;
  user_column_data?: GoogleLeadFormColumn[];
};

function extractColumnValue(
  columns: GoogleLeadFormColumn[] | undefined,
  matchers: string[]
) {
  if (!columns) {
    return undefined;
  }

  const normalizedMatchers = matchers.map((matcher) => matcher.toLowerCase());

  const match = columns.find((column) => {
    const id = column.column_id?.toLowerCase() || "";
    const name = column.column_name?.toLowerCase() || "";
    return normalizedMatchers.some(
      (matcher) => id.includes(matcher) || name.includes(matcher)
    );
  });

  return match?.string_value?.trim() || undefined;
}

export async function POST(request: Request) {
  let body: GoogleLeadFormWebhookPayload;

  try {
    body = (await request.json()) as GoogleLeadFormWebhookPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const expectedKey = process.env.GOOGLE_ADS_LEAD_FORM_WEBHOOK_KEY?.trim();

  if (!expectedKey) {
    console.error("google_ads_webhook_missing_env_key");
    return NextResponse.json(
      { ok: false, error: "missing_webhook_key_env" },
      { status: 500 }
    );
  }

  if (body.google_key !== expectedKey) {
    return NextResponse.json({ ok: false, error: "invalid_google_key" }, { status: 401 });
  }

  const columns = body.user_column_data;

  const nome = extractColumnValue(columns, ["full_name", "nome"]);
  const whatsapp = extractColumnValue(columns, [
    "phone_number",
    "phone",
    "telefone",
    "whatsapp"
  ]);
  const email = extractColumnValue(columns, ["email"]);
  const tipologia = extractColumnValue(columns, [
    "tipologia",
    "question",
    "unidade"
  ]);

  const lead: LeadPayload = {
    tipo: "formulario",
    nome: nome || "(lead form Google Ads)",
    whatsapp: whatsapp || "",
    email,
    imovel: "WE Barra by Living",
    slug: "we-barra-by-living-barra-da-tijuca",
    tipologia,
    cta_source: body.is_test
      ? "google_ads_lead_form_test"
      : "google_ads_lead_form",
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: body.campaign_id,
    gclid: body.gcl_id,
    pagina: "Google Ads - Formulario de Lead",
    userAgent: "google-ads-lead-form-webhook"
  };

  try {
    const result = await appendLeadToSheet(lead);

    if (result.stored) {
      // Nao bloqueia a resposta ao Google por causa do alerta.
      void notifyNewLead(lead, {
        rowNumber: result.rowNumber,
        source: "lead_form_ads"
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("google_ads_webhook_append_failed", error);
    // Ainda assim responde 200: o Google reenvia o mesmo lead varias vezes
    // se receber erro, o que criaria linhas duplicadas na planilha depois
    // que o problema for corrigido. Preferimos logar e investigar.
    return NextResponse.json({ ok: false, error: "append_failed" });
  }
}
