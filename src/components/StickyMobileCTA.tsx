"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { pushTrackingEvent } from "@/lib/tracking";

type StickyMobileCTAProps = {
  imovel: Imovel;
};

export function StickyMobileCTA({ imovel }: StickyMobileCTAProps) {
  const [isLeadFormVisible, setIsLeadFormVisible] = useState(false);

  useEffect(() => {
    const leadForm = document.getElementById("lead-form");

    if (!leadForm) {
      return;
    }

    const target = leadForm;

    function syncVisibility() {
      const rect = target.getBoundingClientRect();
      setIsLeadFormVisible(rect.top < window.innerHeight && rect.bottom > 0);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLeadFormVisible(entry.isIntersecting);
      },
      { threshold: 0.08 }
    );

    observer.observe(target);
    syncVisibility();
    window.addEventListener("scroll", syncVisibility, { passive: true });
    window.addEventListener("resize", syncVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", syncVisibility);
      window.removeEventListener("resize", syncVisibility);
    };
  }, []);

  function handleClick() {
    pushTrackingEvent("cta_click", {
      cta_label: "Receber PDF e tabela",
      cta_source: "sticky_mobile",
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      bairro: imovel.bairro
    });
  }

  if (isLeadFormVisible) {
    return null;
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
