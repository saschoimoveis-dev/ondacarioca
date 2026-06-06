import { NextResponse } from "next/server";
import { appendLeadToSheet, type LeadPayload } from "@/lib/sheets";

type LeadRequestBody = Partial<LeadPayload>;

function isRequiredString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 1;
}

function getGoogleErrorReason(error: unknown) {
  const maybeError = error as {
    code?: number;
    message?: string;
    stack?: string;
    response?: { status?: number; data?: { error?: string; error_description?: string } };
  };

  const status = maybeError.code || maybeError.response?.status;
  const message = [
    maybeError.message,
    maybeError.stack,
    maybeError.response?.data?.error,
    maybeError.response?.data?.error_description
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (status === 403 || message.includes("permission")) {
    return "google_sheets_permission_denied";
  }

  if (
    status === 401 ||
    message.includes("invalid_grant") ||
    message.includes("invalid jwt") ||
    message.includes("private key") ||
    message.includes("secretorprivatekey") ||
    message.includes("pem") ||
    message.includes("decoder routines") ||
    message.includes("unsupported") ||
    message.includes("asn1") ||
    message.includes("no start line") ||
    message.includes("bad decrypt")
  ) {
    return "google_sheets_auth_failed";
  }

  if (message.includes("api has not been used") || message.includes("disabled")) {
    return "google_sheets_api_disabled";
  }

  if (status === 404 || message.includes("not found")) {
    return "google_sheets_spreadsheet_not_found";
  }

  return "google_sheets_append_failed";
}

export async function POST(request: Request) {
  let body: LeadRequestBody;

  try {
    body = (await request.json()) as LeadRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 }
    );
  }

  const nome = body.nome;
  const whatsapp = body.whatsapp;
  const imovel = body.imovel;
  const slug = body.slug;

  if (
    !isRequiredString(nome) ||
    !isRequiredString(whatsapp) ||
    !isRequiredString(imovel) ||
    !isRequiredString(slug)
  ) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 400 }
    );
  }

  const lead: LeadPayload = {
    nome: nome.trim(),
    whatsapp: whatsapp.trim(),
    email: body.email?.trim(),
    imovel: imovel.trim(),
    slug: slug.trim(),
    objetivo: body.objetivo || "",
    tipologia: body.tipologia || "",
    entradaDisponivel: body.entradaDisponivel || "",
    prazoCompra: body.prazoCompra || "",
    mensagem: body.mensagem?.trim(),
    utm_source: body.utm_source,
    utm_medium: body.utm_medium,
    utm_campaign: body.utm_campaign,
    utm_term: body.utm_term,
    utm_content: body.utm_content,
    gclid: body.gclid,
    fbclid: body.fbclid,
    pagina: body.pagina || request.headers.get("referer") || "",
    userAgent: body.userAgent || request.headers.get("user-agent") || ""
  };

  try {
    const result = await appendLeadToSheet(lead);

    if (!result.stored) {
      return NextResponse.json(
        { ok: false, error: result.reason },
        { status: 503 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    const reason = getGoogleErrorReason(error);
    console.error("lead_submission_failed", { reason, error });

    return NextResponse.json(
      { ok: false, error: "lead_submission_failed", reason },
      { status: 500 }
    );
  }
}
