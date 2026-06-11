"use client";

import { ChevronDown } from "lucide-react";
import type { Imovel } from "@/data/imoveis";
import { pushTrackingEvent } from "@/lib/tracking";

type FaqSectionProps = {
  imovel: Imovel;
};

export function FaqSection({ imovel }: FaqSectionProps) {
  function handleToggle(open: boolean, pergunta: string) {
    if (!open) {
      return;
    }

    pushTrackingEvent("faq_open", {
      imovel_nome: imovel.nome,
      imovel_slug: imovel.slug,
      faq_question: pergunta
    });
  }

  return (
    <section className="bg-slate-50 py-14 sm:py-16" id="faq">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Duvidas comuns
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Perguntas frequentes
        </h2>
        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          {imovel.faq.map((item) => (
            <details
              key={item.pergunta}
              className="group border border-slate-200 bg-white p-5"
              onToggle={(event) =>
                handleToggle(event.currentTarget.open, item.pergunta)
              }
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-950">
                {item.pergunta}
                <ChevronDown
                  className="size-5 shrink-0 text-[var(--brand)] transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
