"use client";

import { about, principles } from "@/content/site";
import { Reveal } from "./ui/Reveal";

// Two-column statement after the reference: a bold claim on the left,
// the story on the right, then how I work. No casual photo.
export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1240px] scroll-mt-16 px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="label mb-8 flex items-center gap-3 text-muted">
          <span className="text-ink">04</span>
          <span className="h-px w-8 bg-line-strong" />
          About
        </p>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <h2 className="display max-w-[12ch] text-[3.2rem] text-ink sm:text-[4.4rem] lg:text-[5.2rem]">{about.heading}</h2>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-6 lg:pt-2">
          <p className="font-serif text-[1.65rem] leading-[1.25] text-ink sm:text-[1.9rem]">{about.lead}</p>
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-muted">
            {about.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <dl className="mt-8 grid gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-2">
            {about.facts.map(([k, v]) => (
              <div key={k}>
                <dt className="label text-muted">{k}</dt>
                <dd className="mt-1 text-[15px] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal delay={0.06}>
        <h3 className="label mt-20 text-muted">How I build</h3>
        <ul className="mt-6 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className={`border-b border-line py-7 sm:pr-6 lg:border-b-0 ${i > 0 ? "lg:border-l lg:pl-6" : ""}`}
            >
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="mt-3 text-[15px] font-semibold uppercase leading-snug tracking-[0.04em] text-ink">{p.title}</h4>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{p.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
