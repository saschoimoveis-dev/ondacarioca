"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { pushTrackingEvent } from "@/lib/tracking";

type StickyMobileCTAProps = {
  imovel: Imovel;
};

export function StickyMobileCTA({ imovel }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    function syncVisibility() {
      const hero = document.getElementById("hero");
      const leadForm = document.getElementById("lead-form");
      
      const isElementVisible = (target: HTMLElement | null) => {
        if (!target) return false;
        const rect = target.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      };

      // Mostra o CTA se NÃO estivermos no Hero nem no formulário principal
      setIsVisible(!isElementVisible(hero) && !isElementVisible(leadForm));
    }

    const observedTargets = [
      document.getElementById("hero"),
      document.getElementById("lead-form")
    ].filter((target): target is HTMLElement => Boolean(target));

    if (observedTargets.length) {
      observer = new IntersectionObserver(
        () => {
          syncVisibility();
        },
        { threshold: 0.1 }
      );
      observedTargets.forEach((target) => observer?.observe(target));
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

  return (
    <div 
      className={`fixed inset-x-4 bottom-4 z-50 transition-all duration-500 ease-out md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="#lead-form"
        onClick={handleClick}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-4 text-sm font-bold text-white shadow-[0_12px_24px_rgba(23,63,52,0.4)] transition-transform active:scale-95"
      >
        <Download className="size-5" aria-hidden="true" />
        Tabela e Simulação
      </a>
    </div>
  );
}
