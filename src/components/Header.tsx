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
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/lancamentos" className="flex items-center gap-3 group">
          <span className={`grid size-10 place-items-center rounded-lg border transition-colors ${
            isScrolled 
              ? "bg-[var(--brand)] border-[var(--brand)] text-white" 
              : "bg-white border-slate-200 text-[var(--brand)] shadow-sm group-hover:bg-slate-50"
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
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
            isScrolled
              ? "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] shadow-[0_4px_14px_rgba(23,63,52,0.2)]"
              : "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] shadow-md"
          }`}
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
