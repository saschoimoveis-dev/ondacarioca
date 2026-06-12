"use client";

import { ArrowRight } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { pushTrackingEvent } from "@/lib/tracking";

type CtaLinkProps = {
  href: string;
  label: string;
  imovel?: Imovel;
  source: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CtaLink({
  href,
  label,
  imovel,
  source,
  variant = "secondary",
  className: extraClassName
}: CtaLinkProps) {
  function handleClick() {
    pushTrackingEvent("cta_click", {
      cta_label: label,
      cta_source: source,
      imovel_nome: imovel?.nome,
      imovel_slug: imovel?.slug,
      bairro: imovel?.bairro
    });
  }

  const baseClassName =
    variant === "primary"
      ? "btn-primary-premium group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold shadow-[0_8px_24px_rgba(23,63,52,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(23,63,52,0.4)] active:scale-[0.98]"
      : "btn-secondary-premium group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/90 backdrop-blur px-8 py-4 text-[15px] font-bold transition-all duration-300 hover:scale-[1.02] hover:border-[var(--brand)] active:scale-[0.98] shadow-sm";

  const className = extraClassName ? `${baseClassName} ${extraClassName}` : baseClassName;

  return (
    <a href={href} onClick={handleClick} className={className}>
      {label}
      <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
    </a>
  );
}
