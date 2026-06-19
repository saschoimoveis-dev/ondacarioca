"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
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

  const waUrl = `https://wa.me/${imovel.whatsapp.numero.replace(/\D/g, "")}?text=${encodeURIComponent("Ola, vi a pagina do " + imovel.nome + " e gostaria de conversar com o especialista.")}`;

  function handleClick() {
    pushTrackingEvent("cta_click", {
      cta_label: "Conversar com o especialista",
      cta_source: "sticky_mobile",
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      bairro: imovel.bairro
    });
  }

  return (
    <div
      className={`fixed inset-x-4 z-50 transition-all duration-500 ease-out md:hidden pb-safe ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0 pointer-events-none"
      }`}
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))' }}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        className="btn-whatsapp-specialist flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-white transition-transform active:scale-95 min-h-[52px]"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        Conversar com o especialista Cyrela
      </a>
    </div>
  );
}
