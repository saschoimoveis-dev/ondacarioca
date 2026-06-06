"use client";

import { useEffect } from "react";
import type { Imovel } from "@/data/imoveis";
import { pushTrackingEvent } from "@/lib/tracking";

type PageViewTrackerProps = {
  imovel: Imovel;
};

export function PageViewTracker({ imovel }: PageViewTrackerProps) {
  useEffect(() => {
    const baseParams = {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      bairro: imovel.bairro,
      preco_inicial: imovel.precoInicialNumerico
    };

    pushTrackingEvent("page_view_imovel", baseParams);
    pushTrackingEvent(imovel.tracking.pageViewEventName, baseParams);
  }, [imovel]);

  return null;
}
