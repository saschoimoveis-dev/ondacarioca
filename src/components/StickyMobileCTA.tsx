"use client";

import { Download } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { pushTrackingEvent } from "@/lib/tracking";

type StickyMobileCTAProps = {
  imovel: Imovel;
};

export function StickyMobileCTA({ imovel }: StickyMobileCTAProps) {
  function handleClick() {
    pushTrackingEvent("cta_click", {
      cta_label: "Receber PDF e tabela",
      cta_source: "sticky_mobile",
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      bairro: imovel.bairro
    });
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/94 p-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <a
        href="#lead-form"
        onClick={handleClick}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#173f34] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f2f27]"
      >
        <Download className="size-4" aria-hidden="true" />
        Receber PDF e tabela
      </a>
    </div>
  );
}
