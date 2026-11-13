"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroStats, profile, recognisedAt } from "@/content/site";
import { ArrowDown, ArrowRight, ArrowUpRight, Trophy } from "./ui/Icons";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);

  return (
    <section id="top" ref={ref} className="hero-bg relative overflow-hidden">
      <div className="relative flex flex-col lg:block lg:h-[max(720px,min(100svh,960px))]">
        {/* Portrait: frameless, on the page's own background, rising from the bottom edge */}
        <motion.div
          style={{ y: photoY }}
          className="pointer-events-none relative order-last h-[min(118vw,560px)] w-full lg:absolute lg:bottom-0 lg:right-0 lg:top-20 lg:h-auto lg:w-[54%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease }}
        >
          <motion.img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fetchPriority="high"
            className="hero-photo absolute bottom-0 left-1/2 h-[104%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
            initial={{ scale: 1.05, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.15, ease }}
          />
        </motion.div>

        <div className="relative mx-auto flex h-full max-w-[1240px] flex-col px-5 pt-24 sm:px-8 lg:pt-20">
          {/* Vertical rail */}
          <motion.div
            {...rise(0.6)}
            className="pointer-events-none absolute bottom-12 left-0 top-32 hidden w-8 flex-col items-center justify-between xl:flex"
            aria-hidden
          >
            <span className="label rotate-180 whitespace-nowrap text-muted [writing-mode:vertical-rl]">AI/ML engineer · Full-stack</span>
            <span className="my-6 w-px flex-1 bg-line-strong" />
            <span className="label rotate-180 text-muted [writing-mode:vertical-rl]">2026</span>
          </motion.div>

          <div className="flex flex-1 flex-col lg:max-w-[50%] xl:pl-14">
            {/* Stats, top left as in the reference */}
            <motion.dl {...rise(0.45)} className="mt-6 grid max-w-[30rem] grid-cols-3 gap-x-6 lg:mt-10">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-[2.2rem] font-light leading-none tracking-[-0.04em] text-ink sm:text-[2.6rem]">
                      {s.value}
                      {s.suffix && <span className="ml-0.5 align-top text-[0.55em] text-accent">{s.suffix}</span>}
                    </span>
                    <span className="mt-2 block text-[13px] text-muted">{s.label}</span>
                  </dd>
                </div>
              ))}
            </motion.dl>

            <div className="flex flex-1 flex-col justify-center py-10 lg:py-6">
              <motion.h1 style={{ y: wordY }}>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span className="flex text-[clamp(5.6rem,min(17vw,23svh),12.5rem)] font-extralight leading-[0.86] tracking-[-0.06em] text-ink">
                    {"Hello".split("").map((ch, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ y: "105%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.05, delay: 0.1 + i * 0.06, ease }}
                      >
                        {ch}
                      </motion.span>
                    ))}
                  </span>
                </span>
                <motion.span {...rise(0.55)} className="mt-6 flex items-baseline gap-3 text-[1.35rem] leading-snug text-ink sm:text-[1.6rem]">
                  <span className="text-accent">—</span>
                  <span>
                    I&apos;m <span className="font-serif text-[1.25em] italic">{profile.shortName}</span>, an AI engineer and full&#8209;stack developer.
                  </span>
                </motion.span>
              </motion.h1>

              <motion.p {...rise(0.65)} className="mt-5 max-w-[30rem] text-[16px] leading-relaxed text-ink-2 sm:text-[17px]">
                {profile.heroLine}
              </motion.p>

              <motion.div {...rise(0.75)} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
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
              </motion.div>
            </div>

            <motion.a
              {...rise(0.9)}
              href="#work"
              className="label mb-10 hidden w-fit items-center gap-2 text-ink-2 transition-colors hover:text-ink lg:inline-flex"
            >
              Scroll down
              <motion.span animate={reduce ? undefined : { y: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowDown width={14} height={14} />
              </motion.span>
            </motion.a>
          </div>
        </div>

        {/* Floating notes over the portrait */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease }}
          className="absolute right-5 top-[calc(100%-min(118vw,560px)+1.25rem)] z-10 flex items-center gap-2.5 rounded-full border border-white/70 bg-white/70 py-2 pl-2 pr-4 shadow-[0_12px_30px_-18px_rgba(20,19,17,0.5)] backdrop-blur-md lg:left-[51%] lg:right-auto lg:top-[60%]"
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
          transition={{ duration: 0.8, delay: 1.15, ease }}
          className="group absolute bottom-6 right-5 z-10 hidden max-w-[280px] rounded-2xl border border-white/70 bg-white/75 p-4 shadow-[0_20px_40px_-24px_rgba(20,19,17,0.55)] backdrop-blur-md sm:block lg:bottom-12 lg:right-[max(2rem,calc((100vw-1240px)/2+2rem))]"
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
      </div>

      <div className="relative border-y border-line bg-surface">
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
