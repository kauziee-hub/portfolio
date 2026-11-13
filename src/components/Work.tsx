import type { CSSProperties } from "react";
import { projects, type Project } from "@/content/site";
import { Gallery } from "./Gallery";
import { ArrowUpRight, Code, Trophy } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

function ProjectLinks({ p }: { p: Project }) {
  if (!p.links) return null;
  return (
    <div className="flex flex-wrap gap-2.5">
      {p.links.map((l) =>
        l.kind === "live" ? (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener"
            className="label inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-paper transition-colors hover:bg-[var(--acc)]"
          >
            {l.label} <ArrowUpRight width={13} height={13} />
          </a>
        ) : (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener"
            className="label inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2.5 text-ink transition-colors hover:border-ink"
          >
            <Code width={13} height={13} /> {l.label}
          </a>
        ),
      )}
    </div>
  );
}

function ProjectCase({ p }: { p: Project }) {
  return (
    <article id={p.id} className="scroll-mt-20 border-t border-line pt-14 sm:pt-20" style={{ "--acc": p.accent } as CSSProperties}>
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[13px] text-muted">
              <span className="text-[var(--acc)]">{p.index}</span>
              <span className="h-px w-6 bg-line-strong" />
              <span>{p.period}</span>
              <span aria-hidden>·</span>
              <span>{p.role}</span>
            </p>
            <h3 className="display mt-4 text-[3.2rem] text-ink sm:text-[4.6rem] lg:text-[5.2rem]">{p.name}</h3>
            <p className="mt-4 max-w-2xl text-lg text-ink-2">{p.tagline}</p>
            {p.context && <p className="mt-2 text-[15px] text-muted">{p.context}</p>}
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
            {p.recognition && (
              <ul className="flex flex-col gap-1.5 lg:items-end lg:text-right">
                {p.recognition.map((r) => (
                  <li key={r} className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-2">
                    <Trophy width={13} height={13} className="shrink-0 text-ink" />
                    {r}
                  </li>
                ))}
              </ul>
            )}
            <ProjectLinks p={p} />
          </div>
        </div>

        <p className="mt-10 max-w-4xl text-[1.7rem] font-extralight leading-[1.2] tracking-[-0.03em] text-ink sm:text-[2.4rem]">
          {p.hook}
        </p>
      </Reveal>

      <Reveal className="mt-10" delay={0.05}>
        <Gallery media={p.media} label={`${p.name.toLowerCase()} — ${p.tagline.toLowerCase()}`} />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h4 className="label text-muted">The problem</h4>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-2">{p.problem}</p>

          <dl className="mt-9 grid grid-cols-2 border-l border-t border-line">
            {p.metrics.map((m) => (
              <div key={m.label} className="border-b border-r border-line p-5">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="display block text-[2.4rem] text-ink">{m.value}</span>
                  <span className="mt-2 block text-[13px] text-muted">{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          {p.footnote && <p className="mt-3 text-xs leading-relaxed text-muted">{p.footnote}</p>}

          <h4 className="label mt-10 text-muted">Built with</h4>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-ink-2">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.08}>
          <h4 className="label text-muted">What I built</h4>
          <ol className="mt-4 divide-y divide-line">
            {p.built.map((b, i) => (
              <li key={b.lead} className="grid grid-cols-[2.25rem_1fr] gap-3 py-5 first:pt-2">
                <span className="pt-1 font-mono text-xs text-[var(--acc)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[16px] leading-relaxed text-ink-2">
                  <span className="font-semibold text-ink">{b.lead}</span> {b.text}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1240px] scroll-mt-16 px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32">
      <SectionHeading
        number="01"
        eyebrow="Selected work"
        title={
          <>
            Systems built end to end, <span className="text-muted">from data to screen.</span>
          </>
        }
        intro="Each one started from a real problem: a scam payment, a leaking pipeline, a shop owner without software, a student buried in deadlines. I designed the models, the backend and the interface people actually use."
      />

      <nav aria-label="Projects" className="mb-6 flex flex-wrap gap-2">
        {projects.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink"
          >
            <span className="font-mono text-[11px] text-muted">{p.index}</span>
            {p.name}
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-24 sm:gap-32">
        {projects.map((p) => (
          <ProjectCase key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
