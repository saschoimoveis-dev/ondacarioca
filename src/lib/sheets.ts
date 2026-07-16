import { google } from "googleapis";

export type LeadPayload = {
  tipo?: "formulario" | "whatsapp_clique" | "busca_alternativas";
  nome: string;
  whatsapp: string;
  email?: string;
  imovel: string;
  slug: string;
  objetivo?: string;
  tipologia?: string;
  entradaDisponivel?: string;
  prazoCompra?: string;
  situacaoCredito?: string;
  situacaoAtual?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  cta_source?: string;
  pagina: string;
  userAgent?: string;
};

type AppendResult =
  | { ok: true; stored: true; rowNumber?: number; deduplicated?: boolean }
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

function normalizeWhatsappForMatch(value: string) {
  const digits = value.replace(/\D/g, "");

  // Compara pelo DDD + número para tratar igualmente 21999999999 e
  // +55 21 99999-9999, sem confundir telefones curtos/incompletos.
  return digits.length > 11 ? digits.slice(-11) : digits;
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

  const leadTypeLabel =
    lead.tipo === "busca_alternativas"
      ? "Busca alternativas"
      : lead.tipo === "whatsapp_clique"
        ? "Clique no WhatsApp"
        : "Interesse no imóvel";

  const values = [
    new Date().toISOString(),   // A: Timestamp
    leadTypeLabel,              // B: Tipo de interesse
    lead.nome,                  // C: Nome
    lead.whatsapp,              // D: WhatsApp
    lead.email || "",           // E: Email
    lead.imovel,                // F: Imóvel de origem
    lead.slug,                  // G: Slug
    lead.objetivo || "",        // H: Objetivo
    lead.tipologia || "",       // I: Tipologia
    lead.entradaDisponivel || "", // J: Entrada
    lead.prazoCompra || "",     // K: Prazo de compra
    lead.situacaoCredito || "", // L: Situação de crédito
    lead.situacaoAtual || "",   // M: Situação atual
    lead.cta_source || "",      // N: CTA source
    lead.utm_source || "",      // O: utm_source
    lead.utm_medium || "",      // P: utm_medium
    lead.utm_campaign || "",    // Q: utm_campaign
    lead.utm_term || "",        // R: utm_term
    lead.utm_content || "",     // S: utm_content
    lead.gclid || "",           // T: gclid
    lead.fbclid || "",          // U: fbclid
    lead.pagina,                // V: Página
    lead.userAgent || "",       // W: userAgent
    "Novo",                     // X: Status
    "",                         // Y: Anotações (corretor)
    "",                         // Z: Próxima ação
    "",                         // AA: Data próximo contato
    "",                         // AB: Resultado final
    ""                          // AC: Confirmou WhatsApp
  ];

  const normalizedWhatsapp = normalizeWhatsappForMatch(lead.whatsapp);

  if (lead.tipo !== "whatsapp_clique" && normalizedWhatsapp.length >= 10) {
    const phoneColumn = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Leads!D2:D"
    });
    const rows = phoneColumn.data.values || [];
    let existingRowNumber: number | undefined;

    for (let index = rows.length - 1; index >= 0; index -= 1) {
      const existingPhone = normalizeWhatsappForMatch(
        String(rows[index]?.[0] || "")
      );
      if (existingPhone === normalizedWhatsapp) {
        existingRowNumber = index + 2;
        break;
      }
    }

    if (existingRowNumber) {
      const existingResponse = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range: `Leads!A${existingRowNumber}:AC${existingRowNumber}`
      });
      const existing = existingResponse.data.values?.[0] || [];
      const existingType = String(existing[1] || "");
      const incomingIsHot = lead.tipo !== "busca_alternativas";
      const existingIsHot =
        existingType === "Interesse no imóvel" || existingType === "formulario";
      const shouldRefreshContext = incomingIsHot || !existingIsHot;
      const interactionNote = `[${new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo"
      })}] ${leadTypeLabel} — ${lead.imovel} — ${lead.cta_source || "site"}`;

      values[0] = existing[0] || values[0];
      values[1] = existingIsHot && !incomingIsHot ? existingType : leadTypeLabel;
      values[2] = lead.nome || existing[2] || "";
      values[3] = lead.whatsapp || existing[3] || "";
      values[4] = lead.email || existing[4] || "";

      if (!shouldRefreshContext) {
        for (let index = 5; index <= 22; index += 1) {
          values[index] = existing[index] || values[index];
        }
      }

      // UTM e identificadores de campanha são first-touch: uma interação
      // posterior sem atribuição não apaga a origem que trouxe o contato.
      for (let index = 14; index <= 20; index += 1) {
        values[index] = existing[index] || values[index];
      }

      values[23] = existing[23] || "Novo";
      values[24] = [existing[24], interactionNote].filter(Boolean).join("\n");
      values[25] = existing[25] || "";
      values[26] = existing[26] || "";
      values[27] = existing[27] || "";
      values[28] = existing[28] || "";

      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range: `Leads!A${existingRowNumber}:AC${existingRowNumber}`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [values] }
      });

      return {
        ok: true,
        stored: true,
        rowNumber: existingRowNumber,
        deduplicated: true
      };
    }
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: "Leads!A:AC",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [values]
    }
  });

  const updatedRange = response.data.updates?.updatedRange;
  const rowMatch = updatedRange?.match(/(\d+)(?::|$)/);
  const rowNumber = rowMatch ? Number(rowMatch[1]) : undefined;

  return { ok: true, stored: true, rowNumber };
}

export async function markWhatsappConfirmedOnRow(
  rowNumber: number
): Promise<{ ok: boolean; stored: boolean }> {
  if (!hasSheetsEnv()) {
    return { ok: true, stored: false };
  }

  const auth = new google.auth.JWT({
    email: getClientEmail(),
    key: getPrivateKey(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: `Leads!AC${rowNumber}`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[`Sim - ${new Date().toISOString()}`]]
    }
  });

  return { ok: true, stored: true };
}
