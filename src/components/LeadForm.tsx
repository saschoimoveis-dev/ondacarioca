"use client";

import { FormEvent, useMemo, useState } from "react";
import { Download, FileText, Send, ShieldCheck } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { getAttributionParams, pushTrackingEvent } from "@/lib/tracking";

type LeadFormProps = {
  imovel: Imovel;
};

type FormState = {
  nome: string;
  whatsapp: string;
  email: string;
  objetivo: string;
  tipologia: string;
  entradaDisponivel: string;
  prazoCompra: string;
  mensagem: string;
};

const initialState: FormState = {
  nome: "",
  whatsapp: "",
  email: "",
  objetivo: "morar",
  tipologia: "2 quartos",
  entradaDisponivel: "ate R$ 50 mil",
  prazoCompra: "0 a 3 meses",
  mensagem: ""
};

const inputClassName =
  "rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#173f34] focus:ring-2 focus:ring-[#173f34]/15";

const labelClassName = "grid gap-2 text-sm font-medium text-slate-800";

export function LeadForm({ imovel }: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [hasStarted, setHasStarted] = useState(false);

  const tipologias = useMemo(
    () => [
      "2 quartos",
      "3 quartos",
      "4 quartos",
      "Garden",
      "Cobertura linear",
      "Cobertura duplex",
      "Ainda nao sei"
    ],
    []
  );

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function trackStart() {
    if (hasStarted) {
      return;
    }

    setHasStarted(true);
    pushTrackingEvent("form_start", {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      bairro: imovel.bairro
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const payload = {
      ...form,
      imovel: imovel.nome,
      slug: imovel.slug,
      pagina: window.location.href,
      userAgent: navigator.userAgent,
      ...getAttributionParams()
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      pushTrackingEvent("form_submit", {
        imovel_nome: imovel.nome,
        imovel_slug: imovel.slug,
        bairro: imovel.bairro,
        preco_inicial: imovel.precoInicialNumerico,
        tipologia_interesse: form.tipologia,
        objetivo: form.objetivo
      });
      pushTrackingEvent(imovel.tracking.formEventName, {
        imovel_nome: imovel.nome,
        imovel_slug: imovel.slug,
        tipologia_interesse: form.tipologia,
        objetivo: form.objetivo
      });
      pushTrackingEvent("generate_lead", {
        imovel_nome: imovel.nome,
        imovel_slug: imovel.slug,
        tipologia_interesse: form.tipologia,
        lead_type: "material_pdf"
      });
      pushTrackingEvent("material_download_request", {
        imovel_nome: imovel.nome,
        imovel_slug: imovel.slug,
        material: imovel.materialPdfPath
      });

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  function handleMaterialDownload() {
    pushTrackingEvent("material_download_click", {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      material: imovel.materialPdfPath
    });
  }

  return (
    <section className="bg-slate-50 py-14 sm:py-16" id="lead-form">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#007f5f]">
            Receba o material completo
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Receba o PDF do WE Barra e a tabela atualizada
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Preencha os dados para acessar a apresentacao com ficha tecnica,
            plantas, imagens previas e seguir o atendimento com Alexandre
            Sascho.
          </p>
          <div className="mt-8 border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700 shadow-sm">
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 size-5 shrink-0 text-[#173f34]" />
              <p>
                <strong className="font-semibold">Inclui:</strong> ficha
                tecnica, plantas de 2 a 4 quartos, gardens, coberturas e imagens
                previas de lazer.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          onFocus={trackStart}
          className="border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="mb-5 border-b border-slate-200 pb-5">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#007f5f]">
              <ShieldCheck className="size-4" aria-hidden="true" />
              PDF + tabela + contato
            </div>
            <h3 className="text-2xl font-semibold leading-tight text-slate-950">
              Para qual unidade voce quer informacoes?
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClassName}>
          Nome
          <input
            required
            value={form.nome}
            onChange={(event) => updateField("nome", event.target.value)}
            className={inputClassName}
            placeholder="Seu nome completo"
          />
        </label>

        <label className={labelClassName}>
          WhatsApp
          <input
            required
            value={form.whatsapp}
            onChange={(event) => updateField("whatsapp", event.target.value)}
            className={inputClassName}
            placeholder="(21) 99999-9999"
          />
        </label>

        <label className={labelClassName}>
          Tipologia desejada
          <select
            value={form.tipologia}
            onChange={(event) => updateField("tipologia", event.target.value)}
            className={inputClassName}
          >
            {tipologias.map((tipologia) => (
              <option key={tipologia} value={tipologia}>
                {tipologia}
              </option>
            ))}
          </select>
        </label>

        <label className={labelClassName}>
          Prazo de compra
          <select
            value={form.prazoCompra}
            onChange={(event) => updateField("prazoCompra", event.target.value)}
            className={inputClassName}
          >
            <option value="0 a 3 meses">0 a 3 meses</option>
            <option value="3 a 6 meses">3 a 6 meses</option>
            <option value="6 a 12 meses">6 a 12 meses</option>
            <option value="mais de 12 meses">Mais de 12 meses</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#173f34] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-950/10 transition hover:bg-[#0f2f27] disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        <Send className="size-4" aria-hidden="true" />
        {status === "sending" ? "Enviando..." : "Receber PDF e tabela"}
      </button>

      {status === "success" ? (
        <div className="mt-4 border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">
          <p>
            Dados enviados. Agora voce pode baixar o PDF e seguir o atendimento
            pelo WhatsApp.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {imovel.materialPdfPath ? (
              <a
                href={imovel.materialPdfPath}
                download
                onClick={handleMaterialDownload}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#173f34] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0f2f27]"
              >
                <Download className="size-4" aria-hidden="true" />
                Baixar PDF
              </a>
            ) : null}
            <WhatsAppCTA
              imovel={imovel}
              source="form_success"
              label="Falar no WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#173f34] bg-white px-4 py-3 text-sm font-semibold text-[#173f34] transition hover:bg-slate-50"
            />
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <p className="mt-4 rounded-sm border border-red-200 bg-red-50 p-3 text-sm text-red-900">
          Nao foi possivel enviar agora. Tente novamente ou chame pelo
          WhatsApp.
        </p>
      ) : null}
        <p className="mt-4 text-xs leading-5 text-slate-500">
          Imagens, plantas, valores e disponibilidade estao sujeitos a
          confirmacao.
        </p>
      </form>
      </div>
    </section>
  );
}
