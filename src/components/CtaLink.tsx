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
};

export function CtaLink({
  href,
  label,
  imovel,
  source,
  variant = "secondary"
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

  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 rounded-sm bg-[#173f34] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f2f27]"
      : "inline-flex items-center justify-center gap-2 rounded-sm border border-[#173f34] bg-white/70 px-5 py-3 text-sm font-semibold text-[#173f34] transition hover:bg-white";

  return (
    <a href={href} onClick={handleClick} className={className}>
      {label}
      <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  );
}
