import { NextResponse } from "next/server";
import { appendLeadToSheet, type LeadPayload } from "@/lib/sheets";

type LeadRequestBody = Partial<LeadPayload>;

function isRequiredString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 1;
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

    return NextResponse.json(result);
  } catch (error) {
    console.error("lead_submission_failed", error);

    return NextResponse.json(
      { ok: false, error: "lead_submission_failed" },
      { status: 500 }
    );
  }
}
