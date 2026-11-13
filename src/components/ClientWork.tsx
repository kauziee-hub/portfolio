"use client";

import { clientWork } from "@/content/site";
import { AutoVideo } from "./ui/AutoVideo";
import { ArrowUpRight, Expand } from "./ui/Icons";
import { useLightbox } from "./ui/Lightbox";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function ClientWork() {
  const { open } = useLightbox();

  return (
    <section id="clients" className="scroll-mt-16 border-y border-line bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          number="02"
          eyebrow="Freelance"
          title={
            <>
              Selected <span className="text-muted">client work.</span>
            </>
          }
          intro="A few favourites from my freelance work since January 2025. I find the clients myself, take each build from the first conversation to launch, and keep supporting it afterwards."
        />

        <div className="flex flex-col gap-20 sm:gap-28">
          {clientWork.map((c, i) => (
            <Reveal key={c.name}>
              <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="group relative overflow-hidden rounded-[18px] border border-line-strong/70 bg-paper-2 shadow-[0_40px_80px_-48px_rgba(20,19,17,0.55)]">
                    <div className="aspect-[16/10]">
                      {c.media.video ? (
                        <AutoVideo src={c.media.video} poster={c.media.src} label={c.media.caption} className="h-full w-full" />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={c.media.src} alt={c.media.caption} loading="lazy" className="h-full w-full object-cover" />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => open([c.media])}
                      className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink/70 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                      aria-label={`Open full screen: ${c.name}`}
                    >
                      <Expand width={14} height={14} />
                    </button>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="label flex items-center gap-3 text-muted">
                    <span className="text-accent">{c.kind}</span>
                    <span className="h-px w-6 bg-line-strong" />
                    {c.client}
                  </p>
                  <h3 className="display mt-4 text-[2.6rem] text-ink sm:text-[3.2rem]">{c.name}</h3>
                  <h4 className="label mt-6 text-muted">The brief</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{c.brief}</p>
                  <h4 className="label mt-5 text-muted">What I built</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{c.text}</p>
                  <ul className="mt-6 space-y-2.5">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[15px] leading-snug text-ink-2">
                        <span className="mt-[9px] h-px w-3 shrink-0 bg-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {c.stack.map((s) => (
                      <li key={s} className="rounded-full bg-paper px-2.5 py-1 text-xs text-ink-2">
                        {s}
                      </li>
                    ))}
                  </ul>
                  {c.link && (
                    <a
                      href={c.link.href}
                      target="_blank"
                      rel="noopener"
                      className="label link-underline mt-7 inline-flex items-center gap-1.5 text-ink"
                    >
                      {c.link.label} <ArrowUpRight width={13} height={13} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
