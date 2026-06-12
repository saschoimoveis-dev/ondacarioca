"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Download,
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
  objetivo: "Morar",
  tipologia: "2 quartos",
  entradaDisponivel: "Ate R$ 50 mil",
  prazoCompra: "0 a 3 meses",
  mensagem: ""
};

const inputClassName =
  "focus-premium w-full rounded-md border border-[var(--border-warm)] bg-slate-50/50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white";

const labelClassName = "grid gap-2 text-sm font-semibold text-slate-900";

function RadioChips({ options, value, onChange, name }: { options: string[], value: string, onChange: (val: string) => void, name: string }) {
  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-4 py-2.5 text-[13px] font-semibold rounded-full border transition-all duration-200 ${
            value === opt
              ? "border-[var(--brand)] bg-[var(--surface-green)] text-[var(--brand-dark)] shadow-[0_2px_10px_rgba(23,63,52,0.1)] scale-[1.02]"
              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
          }`}
        >
          {opt}
        </button>
      ))}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}

export function LeadForm({ imovel }: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
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

  function readFormValues(formElement?: HTMLFormElement | null) {
    if (!formElement) {
      return {};
    }

    const formData = new FormData(formElement);
    const values: Partial<FormState> = {};

    (Object.keys(initialState) as Array<keyof FormState>).forEach((key) => {
      const value = formData.get(key);
      if (typeof value === "string") {
        values[key] = value;
      }
    });

    return values;
  }

  function handleProfileStep(formElement?: HTMLFormElement | null) {
    if (formElement && !formElement.reportValidity()) {
      return;
    }

    const values = readFormValues(formElement);
    setForm((current) => ({ ...current, ...values }));
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

    const values = { ...form, ...readFormValues(event.currentTarget) };
    const payload = {
      ...values,
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
        lead_type: "tabela_simulacao"
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
    <section className="surface-premium pb-20 pt-14 sm:pb-24 sm:pt-16 relative overflow-hidden" id="lead-form">
      {/* Decorative bg circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 size-64 rounded-full bg-[var(--surface-green)] opacity-50 blur-3xl"></div>
      
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
            Atendimento e simulação
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Descubra qual unidade cabe no seu perfil
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A tabela muda rápido. Deixe seus dados para consultar a disponibilidade real, comparar o fluxo de pagamento e receber tudo pelo WhatsApp.
          </p>
          
          <div className="mt-8 rounded-lg bg-white p-5 border border-[var(--border-warm)] shadow-sm flex items-start gap-4">
            <div className="rounded-full bg-[var(--surface-green)] p-2 text-[var(--brand)] shrink-0 mt-1">
               <ShieldCheck className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Zero Spam, Apenas Informação</p>
              <p className="mt-1 text-sm text-slate-600">Você recebe a tabela atualizada, disponibilidade e indicação das unidades diretamente no seu WhatsApp, de forma discreta e objetiva.</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          onFocus={trackStart}
          className="premium-frame border bg-white p-6 sm:p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] animate-fade-in-up delay-200"
        >
          <div className="mb-8 border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-slate-900">
                {step === 1 ? "Para onde enviamos a tabela?" : "Qual é o seu perfil?"}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {step === 1
                  ? "Seus dados básicos para iniciar."
                  : "Apenas 4 perguntas rápidas para filtrarmos o que faz sentido."}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--brand)] shrink-0">
              Etapa {step} de 2
            </div>
          </div>

          <div className="min-h-[220px]">
          {step === 1 ? (
            <div className="animate-fade-in-up">
              <div className="grid gap-5">
                <label className={labelClassName}>
                  Seu nome completo
                  <input
                    required
                    name="nome"
                    value={form.nome}
                    onChange={(event) => updateField("nome", event.target.value)}
                    onInput={(event) =>
                      updateField("nome", event.currentTarget.value)
                    }
                    className={inputClassName}
                    placeholder="Ex: João da Silva"
                  />
                </label>

                <label className={labelClassName}>
                  Seu melhor WhatsApp
                  <input
                    required
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={(event) =>
                      updateField("whatsapp", event.target.value)
                    }
                    onInput={(event) =>
                      updateField("whatsapp", event.currentTarget.value)
                    }
                    className={inputClassName}
                    placeholder="(21) 99999-9999"
                  />
                </label>
              </div>

              <button
                type="button"
                onClick={(event) => handleProfileStep(event.currentTarget.form)}
                className="btn-primary-premium mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold transition hover:scale-[1.01] active:scale-[0.98]"
              >
                Continuar para Simulação
                <ArrowRight className="size-5" aria-hidden="true" />
              </button>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 inline-flex w-full items-center justify-center text-sm font-semibold text-slate-400 transition hover:text-[var(--brand)] disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Enviando..."
                  : "Pular simulação e enviar apenas contato"}
              </button>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <div className="grid gap-6">
                <label className={labelClassName}>
                  Objetivo
                  <RadioChips 
                    name="objetivo"
                    value={form.objetivo} 
                    onChange={(val) => updateField('objetivo', val)}
                    options={["Morar", "Investir", "Morar ou investir", "Ainda avaliando"]} 
                  />
                </label>

                <label className={labelClassName}>
                  Tipologia desejada
                  <RadioChips 
                    name="tipologia"
                    value={form.tipologia} 
                    onChange={(val) => updateField('tipologia', val)}
                    options={tipologias} 
                  />
                </label>

                <label className={labelClassName}>
                  Entrada disponível
                  <RadioChips 
                    name="entradaDisponivel"
                    value={form.entradaDisponivel} 
                    onChange={(val) => updateField('entradaDisponivel', val)}
                    options={["Ate R$ 50 mil", "R$ 50 mil a R$ 100 mil", "R$ 100 mil a R$ 200 mil", "Acima de R$ 200 mil", "Prefiro conversar"]} 
                  />
                </label>

                <label className={labelClassName}>
                  Prazo de compra
                  <RadioChips 
                    name="prazoCompra"
                    value={form.prazoCompra} 
                    onChange={(val) => updateField('prazoCompra', val)}
                    options={["0 a 3 meses", "3 a 6 meses", "6 a 12 meses", "Mais de 12 meses"]} 
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--border-warm)] bg-white px-5 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 active:bg-slate-100"
                >
                  <ArrowLeft className="size-5" aria-hidden="true" />
                  Voltar
                </button>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary-premium inline-flex flex-[2] items-center justify-center gap-2 rounded-md px-5 py-4 text-sm font-bold transition disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.98]"
                >
                  <Send className="size-5" aria-hidden="true" />
                  {status === "sending"
                    ? "Enviando seus dados..."
                    : "Receber tabela no WhatsApp"}
                </button>
              </div>
            </div>
          )}
          </div>

      {status === "success" ? (
        <div className="mt-6 rounded-lg border border-[var(--brand)] bg-[var(--surface-green)] p-5 text-sm text-[var(--brand-dark)] animate-fade-in-up">
          <p className="font-semibold text-base mb-1">Tudo certo! Recebemos seus dados.</p>
          <p>
            Você pode baixar a apresentação agora mesmo ou continuar nosso papo pelo WhatsApp.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {imovel.materialPdfPath ? (
              <a
                href={imovel.materialPdfPath}
                download
                onClick={handleMaterialDownload}
                className="btn-primary-premium inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-bold transition hover:scale-[1.02]"
              >
                <Download className="size-5" aria-hidden="true" />
                Baixar PDF
              </a>
            ) : null}
            <WhatsAppCTA
              imovel={imovel}
              source="form_success"
              label="Falar no WhatsApp"
              className="btn-secondary-premium inline-flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-bold transition hover:scale-[1.02]"
            />
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <p className="mt-6 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-900 font-medium">
          Ocorreu um erro na comunicação. Por favor, tente novamente ou nos chame diretamente no WhatsApp.
        </p>
      ) : null}
        <p className="mt-6 text-center text-xs leading-relaxed text-slate-400">
          Imagens, plantas, valores e disponibilidade estão sujeitos a
          confirmação.<br/> Seus dados estão seguros.
        </p>
      </form>
      </div>
    </section>
  );
}
