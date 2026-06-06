"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
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

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-white py-14 sm:py-16" id="lead-form">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">
            Receba tabela, plantas e condicoes
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Preencha os dados para qualificar o atendimento. O formulario
            captura origem, campanha, palavra-chave, pagina e identificadores de
            midia quando estiverem presentes na URL.
          </p>
          <div className="mt-8 rounded-sm border border-emerald-200 bg-emerald-50 p-5 text-sm leading-6 text-emerald-950">
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
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-800">
              Nome
              <input
                required
                value={form.nome}
                onChange={(event) => updateField("nome", event.target.value)}
                className="rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/12"
                placeholder="Seu nome completo"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-800">
              WhatsApp
              <input
                required
                value={form.whatsapp}
                onChange={(event) =>
                  updateField("whatsapp", event.target.value)
                }
                className="rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/12"
                placeholder="(21) 99999-9999"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-800">
              E-mail opcional
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/12"
                placeholder="voce@email.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-800">
              Imovel de interesse
              <input
                value={imovel.nome}
                disabled
                className="rounded-sm border border-slate-200 bg-slate-100 px-3 py-3 text-sm text-slate-600"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-800">
              Objetivo
              <select
                value={form.objetivo}
                onChange={(event) => updateField("objetivo", event.target.value)}
                className="rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/12"
              >
                <option value="morar">Morar</option>
                <option value="investir">Investir</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-800">
              Tipologia desejada
              <select
                value={form.tipologia}
                onChange={(event) => updateField("tipologia", event.target.value)}
                className="rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/12"
              >
                {tipologias.map((tipologia) => (
                  <option key={tipologia} value={tipologia}>
                    {tipologia}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-800">
              Faixa de entrada disponivel
              <select
                value={form.entradaDisponivel}
                onChange={(event) =>
                  updateField("entradaDisponivel", event.target.value)
                }
                className="rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/12"
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
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-800">
              Prazo de compra
              <select
                value={form.prazoCompra}
                onChange={(event) =>
                  updateField("prazoCompra", event.target.value)
                }
                className="rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/12"
              >
                <option value="0 a 3 meses">0 a 3 meses</option>
                <option value="3 a 6 meses">3 a 6 meses</option>
                <option value="6 a 12 meses">6 a 12 meses</option>
                <option value="mais de 12 meses">Mais de 12 meses</option>
              </select>
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-medium text-slate-800">
            Mensagem opcional
            <textarea
              value={form.mensagem}
              onChange={(event) => updateField("mensagem", event.target.value)}
              rows={4}
              className="resize-none rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/12"
              placeholder="Ex.: quero tabela atualizada e plantas de 2 quartos"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            <Send className="size-4" aria-hidden="true" />
            {status === "sending"
              ? "Enviando..."
              : "Receber tabela e condicoes"}
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
        </form>
      </div>
    </section>
  );
}
