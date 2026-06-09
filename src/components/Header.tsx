import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/lancamentos" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] text-sm font-semibold text-white">
            OC
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-950">
              Onda Carioca
            </span>
            <span className="block text-[11px] uppercase tracking-[0.28em] text-slate-500">
              Imoveis
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <Link href="/lancamentos" className="transition hover:text-[var(--brand)]">
            Lancamentos
          </Link>
          <a href="#atendimento" className="transition hover:text-[var(--brand)]">
            Atendimento
          </a>
          <a href="#faq" className="transition hover:text-[var(--brand)]">
            FAQ
          </a>
        </nav>

        <a
          href={whatsappHref}
          className="inline-flex items-center gap-2 rounded-sm bg-[var(--brand)] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[var(--brand-dark)]"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
