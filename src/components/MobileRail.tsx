"use client";

import { Children, useRef, useState, type CSSProperties, type ReactNode } from "react";

type MobileRailProps = {
  children: ReactNode;
  /** Tailwind grid-cols classes applied from sm+ (e.g. "sm:grid-cols-2 lg:grid-cols-3"). */
  cols?: string;
  /** Card width on mobile (the rest peeks). */
  basis?: string;
  /** Color tone for the counter (dark sections use light text). */
  tone?: "light" | "dark";
  showCounter?: boolean;
};

/**
 * Mobile: turns a list of cards into a horizontal snap-scroll rail with a
 * peek of the next card, a lateral fade and a live "n / total" counter.
 * Desktop (sm+): renders as a normal responsive grid — layout unchanged.
 */
export function MobileRail({
  children,
  cols = "sm:grid-cols-3",
  basis = "82%",
  tone = "light",
  showCounter = true
}: MobileRailProps) {
  const items = Children.toArray(children);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  function handleScroll() {
    const el = ref.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 12;
    const step = first.offsetWidth + gap;
    const idx = Math.round(el.scrollLeft / step);
    setActive(Math.max(0, Math.min(items.length - 1, idx)));
  }

  return (
    <div>
      <div
        ref={ref}
        onScroll={handleScroll}
        className={`flex gap-3 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-fade-x pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid ${cols} sm:gap-6 sm:overflow-visible sm:snap-none sm:pb-0 sm:[mask-image:none] sm:[-webkit-mask-image:none]`}
      >
        {items.map((child, index) => (
          <div
            key={index}
            className="snap-start shrink-0 basis-[var(--rail-basis)] sm:basis-auto sm:shrink"
            style={{ "--rail-basis": basis } as CSSProperties}
          >
            {child}
          </div>
        ))}
      </div>

      {showCounter && items.length > 1 ? (
        <div className="mt-3 flex items-center justify-center sm:hidden">
          <span
            className={`text-xs font-bold tabular-nums ${
              tone === "dark" ? "text-white/70" : "text-slate-500"
            }`}
          >
            {active + 1}
            <span className={tone === "dark" ? "text-white/30" : "text-slate-300"}>
              {" "}/ {items.length}
            </span>
          </span>
        </div>
      ) : null}
    </div>
  );
}
