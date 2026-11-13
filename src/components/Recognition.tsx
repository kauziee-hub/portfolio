"use client";

import { recognition, technovaShortlist, type Media, type Recognition as R } from "@/content/site";
import { ArrowRight, ArrowUpRight, Expand, Trophy } from "./ui/Icons";
import { useLightbox } from "./ui/Lightbox";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

function Photo({ items, i, className }: { items: Media[]; i: number; className?: string }) {
  const { open } = useLightbox();
  const s = items[i];
  return (
    <button
      type="button"
      onClick={() => open(items, i)}
      className={`group relative block overflow-hidden rounded-2xl bg-night-2 ${className ?? ""}`}
      aria-label={`Enlarge: ${s.caption}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={s.src}
        alt={s.caption}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        <Expand width={14} height={14} />
      </span>
    </button>
  );
}

function Photos({ r }: { r: R }) {
  const n = r.photos.length;
  if (n >= 3)
    return (
      <div className="grid grid-cols-2 gap-3">
        <Photo items={r.photos} i={0} className="col-span-2 aspect-[16/9]" />
        <Photo items={r.photos} i={1} className="aspect-[4/3]" />
        <Photo items={r.photos} i={2} className="aspect-[4/3]" />
      </div>
    );
  return <Photo items={r.photos} i={0} className="aspect-[3/2] w-full" />;
}

function Shortlist() {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-night-line bg-night">
      <figcaption className="flex items-center justify-between border-b border-night-line px-4 py-3">
        <span className="label text-white/55">TSM-Technova 2026 · {technovaShortlist.title}</span>
        <span className="font-mono text-[11px] text-white/35">extract</span>
      </figcaption>
      <table className="w-full text-left text-[13px]">
        <thead>
          <tr className="text-white/40">
            <th className="px-4 py-2.5 font-medium">Team</th>
            <th className="hidden px-4 py-2.5 font-medium sm:table-cell">College</th>
            <th className="px-4 py-2.5 font-medium">Team lead</th>
            <th className="hidden px-4 py-2.5 font-medium sm:table-cell">Zone</th>
          </tr>
        </thead>
        <tbody>
          {technovaShortlist.rows.map((row) => (
            <tr
              key={row.team}
              className={row.highlight ? "bg-amber-300/[0.09] text-white" : "text-white/35"}
            >
              <td className={`px-4 py-2.5 ${row.highlight ? "font-semibold" : ""}`}>
                {row.highlight && <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-300 align-middle" />}
                {row.team}
              </td>
              <td className="hidden px-4 py-2.5 sm:table-cell">{row.college}</td>
              <td className="px-4 py-2.5">{row.leader ?? "·"}</td>
              <td className="hidden px-4 py-2.5 sm:table-cell">{row.zone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export function Recognition() {
  return (
    <section id="recognition" className="grain relative scroll-mt-16 bg-night py-24 text-white sm:py-32">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          dark
          number="03"
          eyebrow="Recognition"
          title={
            <>
              Built under pressure, <span className="text-white/45">judged by industry.</span>
            </>
          }
          intro="Most of my projects were tested first at hackathons and competitions: real problem statements from Renault-Nissan and Indian Bank, judged by people who run those systems for a living."
        />

        <ol className="relative">
          {recognition.map((r, i) => (
            <li key={r.id} className="relative grid gap-6 border-t border-night-line py-12 sm:py-16 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-3">
                <p className="display text-[2.4rem] text-white sm:text-[2.9rem]">{r.date}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#d6b98c]/12 px-3 py-1 text-[13px] font-medium text-[#e6cfa8]">
                  <Trophy width={14} height={14} /> {r.kicker}
                </p>
              </Reveal>

              <Reveal className="lg:col-span-9" delay={0.06}>
                <div className={`grid gap-8 ${r.photos.length >= 3 ? "lg:grid-cols-[1.25fr_1fr]" : "lg:grid-cols-[1fr_1fr]"} lg:items-start`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <Photos r={r} />
                  </div>
                  <div>
                    <h3 className="text-[1.6rem] font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:text-[1.9rem]">{r.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">{r.event}</p>
                    <p className="mt-5 text-[16px] leading-relaxed text-white/80">{r.text}</p>
                    {r.projectId ? (
                      <a
                        href={`#${r.projectId}`}
                        className="label mt-6 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                      >
                        Project: <span className="link-underline text-white">{r.project}</span>
                        <ArrowRight width={13} height={13} />
                      </a>
                    ) : r.projectUrl ? (
                      <a
                        href={r.projectUrl}
                        target="_blank"
                        rel="noopener"
                        className="label mt-6 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                      >
                        Project: <span className="link-underline text-white">{r.project}</span> · Source
                        <ArrowUpRight width={13} height={13} />
                      </a>
                    ) : (
                      <p className="label mt-6 text-white/50">
                        Project: <span className="text-white/85">{r.project}</span>
                      </p>
                    )}
                    {r.id === "technova" && <Shortlist />}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
