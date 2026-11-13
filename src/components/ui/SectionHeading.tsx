import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

// Section opener: a small numbered label, a condensed uppercase title,
// and an optional intro that sits beside the title on wide screens.
export function SectionHeading({
  eyebrow,
  number,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  number?: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-12 lg:items-end lg:gap-10">
      <div className="lg:col-span-7">
        <p className={`label mb-5 flex items-center gap-3 ${dark ? "text-white/55" : "text-muted"}`}>
          {number && <span className={dark ? "text-white/80" : "text-ink"}>{number}</span>}
          <span className={`h-px w-8 ${dark ? "bg-white/30" : "bg-line-strong"}`} />
          {eyebrow}
        </p>
        <h2 className={`display text-[2.9rem] sm:text-[4rem] lg:text-[4.6rem] ${dark ? "text-white" : "text-ink"}`}>
          {title}
        </h2>
      </div>
      {intro && (
        <p className={`text-[17px] leading-relaxed lg:col-span-5 lg:pb-2 ${dark ? "text-white/65" : "text-ink-2"}`}>{intro}</p>
      )}
    </Reveal>
  );
}
