"use client";

import { MessageCircle } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { getAttributionParams, pushTrackingEvent } from "@/lib/tracking";

type WhatsAppCTAProps = {
  imovel: Imovel;
  label?: string;
  className?: string;
  source: string;
  /**
   * Row number of the lead already saved on the sheet (returned by the
   * form submit). When present, the click just flags that row as
   * "confirmou WhatsApp" instead of creating a new lead row.
   */
  leadRowNumber?: number;
};

export function WhatsAppCTA({
  imovel,
  label = "Falar no WhatsApp",
  className,
  source,
  leadRowNumber
}: WhatsAppCTAProps) {
  const phone = imovel.whatsapp.numero.replace(/\D/g, "");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(
    imovel.whatsapp.mensagem
  )}`;

  function handleClick() {
    const params = {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      bairro: imovel.bairro,
      preco_inicial: imovel.precoInicialNumerico,
      cta_source: source
    };

    pushTrackingEvent("whatsapp_click", params);
    pushTrackingEvent(imovel.tracking.whatsappEventName, params);

    if (leadRowNumber) {
      fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rowNumber: leadRowNumber })
      }).catch(() => {});
      return;
    }

    const attribution = getAttributionParams();
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tipo: "whatsapp_clique",
        imovel: imovel.nome,
        slug: imovel.slug,
        cta_source: source,
        pagina: typeof window !== "undefined" ? window.location.href : "",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        ...attribution
      })
    }).catch(() => {});
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className={
        className ||
        "btn-primary-premium inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition"
      }
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}
