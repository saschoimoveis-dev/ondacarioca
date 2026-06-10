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
    let observer: IntersectionObserver | null = null;

    function syncVisibility() {
      const target = document.getElementById("lead-form");
      if (!target) {
        setIsLeadFormVisible(false);
        return;
      }

      const rect = target.getBoundingClientRect();
      setIsLeadFormVisible(rect.top < window.innerHeight && rect.bottom > 0);
    }

    const leadForm = document.getElementById("lead-form");

    if (leadForm) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsLeadFormVisible(entry.isIntersecting);
        },
        { threshold: 0.08 }
      );
      observer.observe(leadForm);
    }

    syncVisibility();
    const interval = window.setInterval(syncVisibility, 250);
    window.addEventListener("scroll", syncVisibility, { passive: true });
    window.addEventListener("resize", syncVisibility);

    return () => {
      observer?.disconnect();
      window.clearInterval(interval);
      window.removeEventListener("scroll", syncVisibility);
      window.removeEventListener("resize", syncVisibility);
    };
  }, []);

  function handleClick() {
    pushTrackingEvent("cta_click", {
      cta_label: "Receber tabela e simulacao",
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
    <div className="fixed inset-x-3 bottom-3 z-50 rounded-sm border border-slate-200 bg-white/94 p-2 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <a
        href="#lead-form"
        onClick={handleClick}
        className="btn-primary-premium inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition"
      >
        <Download className="size-4" aria-hidden="true" />
        Receber tabela e simulacao
      </a>
    </div>
  );
}
