"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  FileText,
  Send,
  ShieldCheck
} from "lucide-react";
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
  const [step, setStep] = useState<1 | 2>(1);

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

  function handleProfileStep() {
    setStep(2);
    pushTrackingEvent("form_step_continue", {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      step: "profile"
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
        lead_type: "lista_vip_simulacao"
      });
      pushTrackingEvent("material_download_request", {
        imovel_nome: imovel.nome,
        imovel_slug: imovel.slug,
        material: imovel.materialPdfPath
      });

      setStatus("success");
      setForm(initialState);
      setStep(1);
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
            Lista VIP do WE Barra
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Entre na lista VIP do WE Barra
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Preencha seus dados para receber tabela, plantas, simulacao de
            fluxo e orientacao sobre as unidades mais adequadas ao seu perfil.
          </p>
          <div className="mt-8 border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700 shadow-sm">
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 size-5 shrink-0 text-[#173f34]" />
              <p>
                <strong className="font-semibold">Inclui:</strong> ficha
                tecnica, plantas de 2 a 4 quartos, gardens, coberturas,
                simulacao de fluxo e contato com Alexandre.
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
              Etapa {step} de 2
            </div>
            <h3 className="text-2xl font-semibold leading-tight text-slate-950">
              {step === 1
                ? "Receba a tabela no WhatsApp"
                : "Qual unidade faz sentido para voce?"}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {step === 1
                ? "Comece com nome e WhatsApp. Na proxima etapa, voce pode informar seu perfil para receber uma simulacao mais precisa."
                : "Essas respostas ajudam Alexandre a comparar unidade, fluxo e objetivo antes do contato."}
            </p>
          </div>

          {step === 1 ? (
            <>
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
                    onChange={(event) =>
                      updateField("whatsapp", event.target.value)
                    }
                    className={inputClassName}
                    placeholder="(21) 99999-9999"
                  />
                </label>
              </div>

              <button
                type="button"
                onClick={handleProfileStep}
                disabled={!form.nome.trim() || !form.whatsapp.trim()}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#173f34] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-950/10 transition hover:bg-[#0f2f27] disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                Continuar para simulacao
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>

              <button
                type="submit"
                disabled={
                  status === "sending" ||
                  !form.nome.trim() ||
                  !form.whatsapp.trim()
                }
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#173f34] bg-white px-5 py-3 text-sm font-semibold text-[#173f34] transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-400"
              >
                <Send className="size-4" aria-hidden="true" />
                {status === "sending"
                  ? "Enviando..."
                  : "Enviar contato agora"}
              </button>
            </>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={labelClassName}>
                  Objetivo
                  <select
                    value={form.objetivo}
                    onChange={(event) =>
                      updateField("objetivo", event.target.value)
                    }
                    className={inputClassName}
                  >
                    <option value="morar">Morar</option>
                    <option value="investir">Investir</option>
                    <option value="morar ou investir">Morar ou investir</option>
                    <option value="ainda avaliando">
                      Ainda estou avaliando
                    </option>
                  </select>
                </label>

                <label className={labelClassName}>
                  Tipologia desejada
                  <select
                    value={form.tipologia}
                    onChange={(event) =>
                      updateField("tipologia", event.target.value)
                    }
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
                  Entrada disponivel
                  <select
                    value={form.entradaDisponivel}
                    onChange={(event) =>
                      updateField("entradaDisponivel", event.target.value)
                    }
                    className={inputClassName}
                  >
                    <option value="ate R$ 50 mil">Ate R$ 50 mil</option>
                    <option value="R$ 50 mil a R$ 100 mil">
                      R$ 50 mil a R$ 100 mil
                    </option>
                    <option value="R$ 100 mil a R$ 200 mil">
                      R$ 100 mil a R$ 200 mil
                    </option>
                    <option value="acima de R$ 200 mil">
                      Acima de R$ 200 mil
                    </option>
                    <option value="prefiro conversar">Prefiro conversar</option>
                  </select>
                </label>

                <label className={labelClassName}>
                  Prazo de compra
                  <select
                    value={form.prazoCompra}
                    onChange={(event) =>
                      updateField("prazoCompra", event.target.value)
                    }
                    className={inputClassName}
                  >
                    <option value="0 a 3 meses">0 a 3 meses</option>
                    <option value="3 a 6 meses">3 a 6 meses</option>
                    <option value="6 a 12 meses">6 a 12 meses</option>
                    <option value="mais de 12 meses">Mais de 12 meses</option>
                  </select>
                </label>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-[auto_1fr]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Voltar
                </button>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#173f34] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-950/10 transition hover:bg-[#0f2f27] disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  <Send className="size-4" aria-hidden="true" />
                  {status === "sending"
                    ? "Enviando..."
                    : "Receber tabela e simulacao"}
                </button>
              </div>
            </>
          )}

      {status === "success" ? (
        <div className="mt-4 border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">
          <p>
            Dados enviados. Agora voce pode baixar o PDF e seguir a simulacao
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
