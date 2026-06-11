import Link from "next/link";
import { ExternalLink, Mail, MapPin, MessageCircle, Share2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[var(--brand-dark)] text-white" id="atendimento">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-sm border border-white/25 bg-[var(--surface-warm)] text-sm font-semibold text-[var(--brand)]">
              OC
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.18em]">
                Onda Carioca
              </span>
              <span className="block text-[11px] uppercase tracking-[0.28em] text-white/60">
                Imoveis
              </span>
            </span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/70">
            Estrutura digital para lancamentos imobiliarios, atendimento
            consultivo e qualificacao de compradores no Rio de Janeiro.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            Navegacao
          </h2>
          <div className="grid gap-3 text-sm text-white/75">
            <Link href="/lancamentos" className="transition hover:text-[var(--champagne)]">
              Lancamentos
            </Link>
            <a href="#localizacao" className="transition hover:text-[var(--champagne)]">
              Localizacao
            </a>
            <a href="#condicoes" className="transition hover:text-[var(--champagne)]">
              Condicoes
            </a>
            <a href="#lead-form" className="transition hover:text-[var(--champagne)]">
              Receber tabela
            </a>
            <a href="#faq" className="transition hover:text-[var(--champagne)]">
              Perguntas frequentes
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            Atendimento
          </h2>
          <div className="grid gap-3 text-sm text-white/75">
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="size-4" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.email}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              {siteConfig.address}
            </span>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            Siga-nos
          </h2>
          <div className="flex gap-3 text-white/75">
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-sm border border-white/15 transition hover:border-[var(--accent-soft)] hover:text-[var(--champagne)]"
            >
              <Share2 className="size-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-sm border border-white/15 transition hover:border-[var(--accent-soft)] hover:text-[var(--champagne)]"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Onda Carioca Imoveis. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
