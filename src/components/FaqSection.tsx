"use client";

import { ChevronDown, MessageCircleQuestion } from "lucide-react";
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
    <section className="bg-white py-12 sm:py-24 border-b border-slate-100" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <p className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            <MessageCircleQuestion className="size-4" />
            Dúvidas Comuns
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
             Ainda tem dúvidas? Respondemos as principais perguntas sobre o {imovel.nome}.
          </p>
        </div>

        <div className="grid gap-4 lg:gap-6 animate-fade-in-up delay-100">
          {imovel.faq.map((item, index) => (
            <details
              key={item.pergunta}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              onToggle={(event) =>
                handleToggle(event.currentTarget.open, item.pergunta)
              }
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left p-4 sm:p-6 outline-none">
                <span className="text-base font-bold text-slate-900 pr-4">
                   {item.pergunta}
                </span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-[var(--brand)] transition-colors group-open:bg-[var(--surface-green)] group-hover:bg-slate-100">
                  <ChevronDown
                    className="size-5 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </span>
              </summary>
              <div className="px-4 pb-4 pt-2 sm:px-6 sm:pb-6 text-slate-600 leading-relaxed border-t border-slate-50 mt-2 mx-2">
                <p>{item.resposta}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
