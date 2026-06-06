"use client";

import type { Imovel } from "@/data/imoveis";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

type StickyMobileCTAProps = {
  imovel: Imovel;
};

export function StickyMobileCTA({ imovel }: StickyMobileCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/94 p-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <WhatsAppCTA
        imovel={imovel}
        source="sticky_mobile"
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
      />
    </div>
  );
}
