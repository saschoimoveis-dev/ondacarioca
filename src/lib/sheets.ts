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
  const privateKeyBase64 =
    process.env.GOOGLE_SHEETS_PRIVATE_KEY_BASE64?.trim();

  if (privateKeyBase64) {
    return Buffer.from(stripWrappingQuotes(privateKeyBase64), "base64").toString(
      "utf8"
    );
  }

  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.trim();

  if (!privateKey) {
    return undefined;
  }

  const unquoted =
    (privateKey.startsWith('"') && privateKey.endsWith('"')) ||
    (privateKey.startsWith("'") && privateKey.endsWith("'"))
      ? privateKey.slice(1, -1)
      : privateKey;

  const normalized = unquoted.replace(/\\n/g, "\n").replace(/\\"/g, '"');

  if (normalized.includes("\n")) {
    return normalized;
  }

  return normalized
    .replace("-----BEGIN PRIVATE KEY-----", "-----BEGIN PRIVATE KEY-----\n")
    .replace("-----END PRIVATE KEY-----", "\n-----END PRIVATE KEY-----\n");
}

function hasSheetsEnv() {
  return Boolean(
    getClientEmail() &&
      getPrivateKey() &&
      process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  );
}

function stripWrappingQuotes(value: string) {
  return (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
    ? value.slice(1, -1)
    : value;
}

function getClientEmail() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL?.trim();

  if (!clientEmail) {
    return undefined;
  }

  return stripWrappingQuotes(clientEmail).trim();
}

export async function appendLeadToSheet(
  lead: LeadPayload
): Promise<AppendResult> {
  if (!hasSheetsEnv()) {
    return { ok: true, stored: false, reason: "missing_google_sheets_env" };
  }

  const auth = new google.auth.JWT({
    email: getClientEmail(),
    key: getPrivateKey(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: "Leads!A:Y",
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
          lead.userAgent || "",
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
