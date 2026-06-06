"use client";

import { MessageCircle } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { pushTrackingEvent } from "@/lib/tracking";

type WhatsAppCTAProps = {
  imovel: Imovel;
  label?: string;
  className?: string;
  source: string;
};

export function WhatsAppCTA({
  imovel,
  label = "Falar no WhatsApp",
  className,
  source
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
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className={
        className ||
        "inline-flex items-center justify-center gap-2 rounded-sm bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-950/10 transition hover:bg-emerald-800"
      }
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}
