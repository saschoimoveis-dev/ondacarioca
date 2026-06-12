"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2"
          : "bg-white/95 backdrop-blur-sm border-b border-slate-100 py-2 lg:bg-transparent lg:border-transparent lg:shadow-none lg:py-4"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/lancamentos" className="flex items-center gap-3 group">
          <span className={`grid size-10 place-items-center rounded-lg border transition-colors ${
            isScrolled
              ? "bg-[var(--brand)] border-[var(--brand)] text-white"
              : "bg-[var(--brand)] border-[var(--brand)] text-white lg:bg-white lg:border-slate-200 lg:text-[var(--brand)] lg:shadow-sm lg:group-hover:bg-slate-50"
          }`}>
            <span className="text-sm font-bold">OC</span>
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold uppercase tracking-[0.18em] text-slate-900 transition-colors">
              Onda Carioca
            </span>
            <span className="block text-[11px] uppercase tracking-[0.28em] text-[var(--brand)] transition-colors">
              Imóveis
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-bold uppercase tracking-wider md:flex">
          <a href="#plantas" className="text-slate-600 transition-colors hover:text-[var(--accent)]">
            Plantas
          </a>
          <a href="#condicoes" className="text-slate-600 transition-colors hover:text-[var(--accent)]">
            Condições
          </a>
          <a href="#lazer" className="text-slate-600 transition-colors hover:text-[var(--accent)]">
            Lazer
          </a>
          <a href="#faq" className="text-slate-600 transition-colors hover:text-[var(--accent)]">
            FAQ
          </a>
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[var(--brand-dark)] hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
        >
          <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>

      {/* Mobile: navegação rápida por seções */}
      <nav className="md:hidden overflow-x-auto border-t border-slate-100/80 hide-scrollbar" aria-label="Seções da página">
        <div className="flex gap-1 px-3 py-1">
          {[
            { href: "#plantas", label: "Plantas" },
            { href: "#condicoes", label: "Condições" },
            { href: "#lazer", label: "Lazer" },
            { href: "#faq", label: "FAQ" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-500 transition hover:bg-[var(--surface-green)] hover:text-[var(--brand)] min-h-[36px] flex items-center whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
