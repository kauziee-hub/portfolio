"use client";

import { motion } from "framer-motion";
import { heroStats, profile, recognisedAt } from "@/content/site";
import { ArrowRight, ArrowUpRight, GitHub, Trophy } from "./ui/Icons";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export function Hero() {
  return (
    <section id="top" className="relative pt-20">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Vertical rail, as in the reference layout */}
        <motion.div
          {...rise(0.5)}
          className="pointer-events-none absolute bottom-10 left-0 top-10 hidden w-8 flex-col items-center justify-between xl:flex"
          aria-hidden
        >
          <span className="label whitespace-nowrap text-muted [writing-mode:vertical-rl] rotate-180">AI/ML · Full-stack</span>
          <span className="my-6 w-px flex-1 bg-line-strong" />
          <span className="label text-muted [writing-mode:vertical-rl] rotate-180">2026</span>
        </motion.div>

        <div className="grid items-end gap-12 lg:min-h-[min(calc(100svh-5rem),860px)] lg:grid-cols-12 lg:gap-8 xl:pl-10">
          <div className="flex flex-col justify-center pb-4 pt-10 lg:col-span-7 lg:h-full lg:pb-12 lg:pt-10">
            <div>
              <motion.p {...rise(0.08)} className="label flex items-center gap-3 text-accent">
                <span className="h-px w-8 bg-accent" />
                Hello, I&apos;m {profile.shortName}
              </motion.p>

              <motion.h1
                {...rise(0.16)}
                className="mt-6 max-w-[16ch] font-serif text-[3.1rem] leading-[0.96] tracking-[-0.02em] text-ink sm:text-[4.2rem] lg:text-[4.3rem] xl:text-[4.75rem]"
              >
                AI Engineer &amp; Full&#8209;Stack Developer, building systems that <em className="text-accent">act.</em>
              </motion.h1>

              <motion.p {...rise(0.26)} className="mt-7 max-w-[34rem] text-[17px] leading-relaxed text-ink-2 sm:text-lg">
                {profile.summary}
              </motion.p>

              <motion.div {...rise(0.34)} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a
                  href="#work"
                  className="label group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-4 text-paper transition-colors hover:bg-accent"
                >
                  View my work
                  <ArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href={profile.resume} target="_blank" rel="noopener" className="label link-underline text-ink">
                  Download résumé
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener"
                  className="label inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-ink"
                >
                  <GitHub width={16} height={16} /> {profile.githubHandle}
                </a>
              </motion.div>
            </div>

            <motion.div {...rise(0.44)} className="mt-10 flex flex-wrap items-end gap-x-12 gap-y-6 border-t border-line pt-7">
              <dl className="contents">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-serif text-[2.6rem] leading-none tracking-[-0.01em] text-ink">
                      {s.value}
                      {s.suffix && <span className="ml-0.5 text-[0.7em] text-accent">{s.suffix}</span>}
                    </span>
                    <span className="mt-2 block text-[13px] text-muted">{s.label}</span>
                  </dd>
                </div>
              ))}
              </dl>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-[460px] lg:col-span-5 lg:mx-0 lg:h-full lg:max-w-none lg:pt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
          >
            <div className="window-light grain relative aspect-[4/5] overflow-hidden rounded-t-[28px] lg:aspect-auto lg:h-full">
              <motion.img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fetchPriority="high"
                className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, delay: 0.1, ease }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease }}
              className="absolute right-3 top-6 flex items-center gap-2.5 rounded-full border border-white/60 bg-white/70 py-2 pl-2 pr-4 shadow-[0_12px_30px_-18px_rgba(20,19,17,0.5)] backdrop-blur-md sm:right-5 lg:top-12"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-paper">
                <Trophy width={14} height={14} />
              </span>
              <span className="text-[13px] font-medium text-ink">1st prize · VISAI 2025</span>
            </motion.div>

            <motion.a
              href="#oilintelligence"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="group absolute bottom-5 left-3 right-3 block rounded-2xl border border-white/60 bg-white/75 p-4 shadow-[0_20px_40px_-24px_rgba(20,19,17,0.55)] backdrop-blur-md sm:left-5 sm:right-auto sm:max-w-[290px] lg:bottom-6 lg:left-6"
            >
              <span className="label flex items-center gap-2 text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Currently building
              </span>
              <span className="mt-2 block text-[15px] font-medium leading-snug text-ink">
                OILINTELLIGENCE: physics-guided ML that finds where crude oil goes missing.
              </span>
              <span className="label mt-3 inline-flex items-center gap-1.5 text-ink-2 group-hover:text-ink">
                See the project <ArrowUpRight width={13} height={13} />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="border-y border-line bg-surface/60">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:gap-10">
          <p className="label shrink-0 text-muted">Recognised at</p>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {recognisedAt.map((r, i) => (
              <li key={r} className="flex items-center gap-3 text-[15px] font-medium text-ink/75">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-line-strong" aria-hidden />}
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
