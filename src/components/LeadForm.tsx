"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send, ShieldCheck } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { getAttributionParams, pushTrackingEvent } from "@/lib/tracking";

type LeadFormProps = {
  imovel: Imovel;
  variant?: "section" | "hero";
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
  "rounded-sm border border-stone-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#173f34] focus:ring-2 focus:ring-[#173f34]/15";

const labelClassName = "grid gap-2 text-sm font-medium text-slate-800";

export function LeadForm({ imovel, variant = "section" }: LeadFormProps) {
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

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  const isHero = variant === "hero";

  const formContent = (
    <>
      <div className={isHero ? "grid gap-3" : "grid gap-4 sm:grid-cols-2"}>
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

        {!isHero ? (
          <>
            <label className={labelClassName}>
              E-mail opcional
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={inputClassName}
                placeholder="voce@email.com"
              />
            </label>

            <label className={labelClassName}>
              Imovel de interesse
              <input
                value={imovel.nome}
                disabled
                className="rounded-sm border border-slate-200 bg-slate-100 px-3 py-3 text-sm text-slate-600"
              />
            </label>

            <label className={labelClassName}>
              Objetivo
              <select
                value={form.objetivo}
                onChange={(event) => updateField("objetivo", event.target.value)}
                className={inputClassName}
              >
                <option value="morar">Morar</option>
                <option value="investir">Investir</option>
              </select>
            </label>
          </>
        ) : null}

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

        {!isHero ? (
          <label className={labelClassName}>
            Faixa de entrada disponivel
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
              <option value="acima de R$ 200 mil">Acima de R$ 200 mil</option>
            </select>
          </label>
        ) : null}

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

      {!isHero ? (
        <label className="mt-4 grid gap-2 text-sm font-medium text-slate-800">
          Mensagem opcional
          <textarea
            value={form.mensagem}
            onChange={(event) => updateField("mensagem", event.target.value)}
            rows={4}
            className="resize-none rounded-sm border border-stone-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#173f34] focus:ring-2 focus:ring-[#173f34]/15"
            placeholder="Ex.: quero tabela atualizada e plantas de 2 quartos"
          />
        </label>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#173f34] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-950/10 transition hover:bg-[#0f2f27] disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        <Send className="size-4" aria-hidden="true" />
        {status === "sending" ? "Enviando..." : "Receber tabela e plantas"}
      </button>

      {status === "success" ? (
        <p className="mt-4 rounded-sm border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-950">
          Dados enviados. O atendimento pode seguir pelo WhatsApp com tabela,
          plantas e condicoes atualizadas.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="mt-4 rounded-sm border border-red-200 bg-red-50 p-3 text-sm text-red-900">
          Nao foi possivel enviar agora. Tente novamente ou chame pelo
          WhatsApp.
        </p>
      ) : null}
    </>
  );

  if (isHero) {
    return (
      <form
        id="lead-form"
        onSubmit={handleSubmit}
        onFocus={trackStart}
        className="border border-[#d1b16a]/50 bg-white p-5 shadow-xl shadow-slate-950/10 sm:p-6"
      >
        <div className="mb-5 border-b border-stone-200 pb-5">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a20]">
            <ShieldCheck className="size-4" aria-hidden="true" />
            Lista VIP de lancamento
          </div>
          <h2 className="text-2xl font-semibold leading-tight text-slate-950">
            Receba tabela, plantas e disponibilidade
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Informe seus dados para atendimento direto com Alexandre Sascho pelo
            WhatsApp.
          </p>
        </div>
        {formContent}
        <p className="mt-4 text-xs leading-5 text-slate-500">
          Valores, unidades e condicoes dependem da disponibilidade no momento
          da consulta.
        </p>
      </form>
    );
  }

  return (
    <section className="bg-white py-14 sm:py-16" id="lead-form">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">
            Receba tabela, plantas e condicoes
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Preencha os dados para receber informacoes atualizadas sobre
            unidades, plantas, valores comunicados e fluxo de pagamento.
          </p>
          <div className="mt-8 rounded-sm border border-[#d1b16a]/50 bg-[#fbfaf7] p-5 text-sm leading-6 text-slate-700">
            <strong className="font-semibold">Importante:</strong> valores e
            disponibilidade precisam ser confirmados com Alexandre Sascho antes
            de qualquer decisao.
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          onFocus={trackStart}
          className="rounded-sm border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6"
        >
          {formContent}
        </form>
      </div>
    </section>
  );
}
