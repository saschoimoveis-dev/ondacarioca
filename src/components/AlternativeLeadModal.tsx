"use client";

import Link from "next/link";
import {
  FormEvent,
  MouseEvent as ReactMouseEvent,
  useEffect,
  useId,
  useRef,
  useState
} from "react";
import { Check, Home, LoaderCircle, Search, X } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { getAttributionParams, pushTrackingEvent } from "@/lib/tracking";

type AlternativeLeadModalProps = {
  imovel: Imovel;
  source: string;
};

type SubmitStatus = "idle" | "sending" | "error";

const inputClassName =
  "focus-premium w-full rounded-lg border border-[var(--border-warm)] bg-slate-50/70 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white";

export function AlternativeLeadModal({
  imovel,
  source
}: AlternativeLeadModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
      document.body.style.overflow = "";
    };
  }, []);

  function openModal() {
    const dialog = dialogRef.current;

    if (!dialog || dialog.open) {
      return;
    }

    setStatus("idle");
    dialog.showModal();
    document.body.style.overflow = "hidden";

    pushTrackingEvent("alternative_lead_modal_open", {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      bairro: imovel.bairro,
      cta_source: source
    });
  }

  function closeModal(reason: string) {
    const dialog = dialogRef.current;

    if (!dialog?.open || status === "sending") {
      return;
    }

    dialog.close();
    document.body.style.overflow = "";

    pushTrackingEvent("alternative_lead_modal_close", {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      cta_source: source,
      close_reason: reason
    });
  }

  function handleBackdropClick(event: ReactMouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeModal("backdrop");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const nome = String(formData.get("nome") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          tipo: "busca_alternativas",
          nome,
          whatsapp,
          imovel: imovel.nome,
          slug: imovel.slug,
          objetivo: "Receber sugestões",
          tipologia: "Imóveis parecidos",
          cta_source: source,
          pagina: window.location.href,
          userAgent: navigator.userAgent,
          ...getAttributionParams()
        })
      });

      if (!response.ok) {
        throw new Error("Alternative lead request failed");
      }

      pushTrackingEvent("form_submit", {
        imovel_nome: imovel.nome,
        imovel_slug: imovel.slug,
        bairro: imovel.bairro,
        preco_inicial: imovel.precoInicialNumerico,
        cta_source: source,
        lead_type: "busca_alternativas"
      });
      pushTrackingEvent("alternative_lead_submitted", {
        imovel_nome: imovel.nome,
        imovel_slug: imovel.slug,
        bairro: imovel.bairro,
        cta_source: source
      });

      formElement.reset();
      dialogRef.current?.close();
      document.body.style.overflow = "";
      setStatus("idle");
      setShowConfirmation(true);

      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
      toastTimerRef.current = setTimeout(() => {
        setShowConfirmation(false);
      }, 6000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <div className="grid gap-2">
        <button
          type="button"
          onClick={openModal}
          className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full border border-[var(--border-warm)] bg-white/80 px-6 py-3.5 text-sm font-bold text-[var(--brand)] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <Search
            className="size-4 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          Quero conhecer outras opções
        </button>
        <p className="text-center text-[11px] leading-4 text-slate-500">
          Receba sugestões de imóveis que combinam com a sua busca.
        </p>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={handleBackdropClick}
        onCancel={(event) => {
          event.preventDefault();
          closeModal("escape");
        }}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        className="alternative-lead-dialog m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md overflow-y-auto overscroll-contain rounded-2xl bg-transparent p-0 text-left"
      >
        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-white p-5 shadow-[0_28px_80px_rgba(15,47,39,0.26)] sm:p-7"
        >
          <div
            className="absolute -right-12 -top-16 size-44 rounded-full bg-[var(--surface-green)] blur-2xl"
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={() => closeModal("close_button")}
            disabled={status === "sending"}
            className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Fechar formulário"
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          <div className="relative pr-10">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-[var(--surface-green)] text-[var(--brand)]">
              <Home className="size-5" aria-hidden="true" />
            </span>
            <h2
              id={titleId}
              className="mt-5 text-2xl font-bold leading-tight text-slate-900"
            >
              Quer conhecer imóveis parecidos?
            </h2>
            <p
              id={descriptionId}
              className="mt-2 text-sm leading-6 text-slate-600"
            >
              Deixe seu contato e encontraremos outras opções de acordo com o
              que você procura.
            </p>
          </div>

          <div className="relative mt-5 rounded-lg bg-[var(--surface-warm)] px-4 py-3 text-xs leading-5 text-slate-600">
            Buscando alternativas a partir de{" "}
            <strong className="font-semibold text-slate-900">
              {imovel.nome}, {imovel.bairro}
            </strong>
            .
          </div>

          <div className="relative mt-5 grid gap-4">
            <label className="grid gap-2 text-sm font-semibold text-slate-900">
              Seu nome
              <input
                required
                minLength={2}
                autoComplete="name"
                name="nome"
                className={inputClassName}
                placeholder="Como podemos chamar você?"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-900">
              Seu WhatsApp
              <input
                required
                minLength={10}
                inputMode="tel"
                autoComplete="tel"
                name="whatsapp"
                className={inputClassName}
                placeholder="(21) 99999-9999"
              />
            </label>
          </div>

          {status === "error" ? (
            <p
              className="relative mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900"
              role="alert"
            >
              Não foi possível enviar agora. Verifique os dados e tente
              novamente.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary-premium relative mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg px-6 py-4 text-base font-bold transition hover:scale-[1.01] active:scale-[0.98] disabled:scale-100"
          >
            {status === "sending" ? (
              <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
            ) : (
              <Search className="size-5" aria-hidden="true" />
            )}
            {status === "sending" ? "Enviando..." : "Receber sugestões"}
          </button>

          <p className="relative mt-4 text-center text-[11px] leading-4 text-slate-400">
            Ao enviar, você concorda em receber contato da Onda Carioca. Consulte
            nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="font-semibold text-slate-500 underline decoration-slate-300 underline-offset-2 hover:text-[var(--brand)]"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </form>
      </dialog>

      {showConfirmation ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-[70] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-start gap-3 rounded-xl border border-[var(--brand)]/20 bg-[var(--brand-dark)] px-4 py-3.5 text-sm text-white shadow-[0_18px_50px_rgba(15,47,39,0.3)] animate-fade-in-up sm:bottom-8"
        >
          <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15">
            <Check className="size-4" aria-hidden="true" />
          </span>
          <span>
            <strong className="block font-semibold">Contato recebido.</strong>
            Em breve enviaremos outras opções para você.
          </span>
        </div>
      ) : null}
    </>
  );
}
