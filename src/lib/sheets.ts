import { google } from "googleapis";

export type LeadPayload = {
  nome: string;
  whatsapp: string;
  email?: string;
  imovel: string;
  slug: string;
  objetivo: string;
  tipologia: string;
  entradaDisponivel: string;
  prazoCompra: string;
  mensagem?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  pagina: string;
  userAgent?: string;
};

type AppendResult =
  | { ok: true; stored: true }
  | { ok: true; stored: false; reason: "missing_google_sheets_env" };

function getPrivateKey() {
  return process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
}

function hasSheetsEnv() {
  return Boolean(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL &&
      getPrivateKey() &&
      process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  );
}

export async function appendLeadToSheet(
  lead: LeadPayload
): Promise<AppendResult> {
  if (!hasSheetsEnv()) {
    return { ok: true, stored: false, reason: "missing_google_sheets_env" };
  }

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: getPrivateKey(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: "Leads!A:X",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          lead.nome,
          lead.whatsapp,
          lead.email || "",
          lead.imovel,
          lead.slug,
          lead.objetivo,
          lead.tipologia,
          lead.entradaDisponivel,
          lead.prazoCompra,
          lead.mensagem || "",
          lead.utm_source || "",
          lead.utm_medium || "",
          lead.utm_campaign || "",
          lead.utm_term || "",
          lead.utm_content || "",
          lead.gclid || "",
          lead.fbclid || "",
          lead.pagina,
          "Novo",
          "",
          "",
          "",
          ""
        ]
      ]
    }
  });

  return { ok: true, stored: true };
}
