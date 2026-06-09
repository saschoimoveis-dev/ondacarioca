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
      ? "btn-primary-premium inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition"
      : "btn-secondary-premium inline-flex items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition";

  return (
    <a href={href} onClick={handleClick} className={className}>
      {label}
      <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  );
}
