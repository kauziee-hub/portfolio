"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { capabilities, heroCredentials, profile } from "@/content/site";
import { ArrowRight } from "./ui/Icons";

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
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      {/* Portrait in a tall arch, flush with the top of the page */}
      <motion.div
        className="relative mx-auto mt-20 h-[min(124vw,520px)] w-[min(80vw,360px)] overflow-hidden rounded-b-full bg-[#f3eade] lg:absolute lg:left-1/2 lg:top-0 lg:mt-0 lg:h-[min(84svh,740px)] lg:w-[clamp(320px,29vw,430px)] lg:-translate-x-[38%]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease }}
      >
        <motion.img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          fetchPriority="high"
          style={{ y: photoY, scale: photoScale }}
          className="h-full w-full object-cover object-[50%_22%]"
        />
      </motion.div>

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:flex lg:min-h-[max(720px,min(100svh,900px))] lg:flex-col lg:pt-28">
        <div className="grid gap-12 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-6">
          {/* Introduction */}
          <div className="relative z-10 lg:col-span-5">
            <motion.p {...rise(0.15)} className="font-serif text-[1.7rem] leading-none text-ink sm:text-[2rem]">
              Hey, I&apos;m {profile.shortName},
            </motion.p>
            <motion.h1 {...rise(0.25)} className="mt-5 text-ink">
              <span className="display block text-[3.6rem] sm:text-[5rem] lg:text-[clamp(4rem,min(6.4vw,10.5svh),6.2rem)]">AI Engineer</span>
              <span className="block font-serif text-[3rem] leading-[1] tracking-[-0.01em] sm:text-[4.2rem] lg:text-[clamp(3.3rem,min(5.4vw,8.8svh),5.2rem)]">
                &amp; Full&#8209;stack
              </span>
              <span className="display block text-[3.6rem] sm:text-[5rem] lg:text-[clamp(4rem,min(6.4vw,10.5svh),6.2rem)]">Developer</span>
            </motion.h1>

            <motion.p {...rise(0.4)} className="mt-6 max-w-[26rem] text-[15.5px] leading-relaxed text-ink-2">
              {profile.heroLine}
            </motion.p>

            <motion.div {...rise(0.5)} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#work"
                className="label group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 text-paper transition-colors hover:bg-ink-2"
              >
                View my work
                <span className="grid h-9 w-9 place-items-center rounded-full bg-paper text-ink transition-transform group-hover:translate-x-0.5">
                  <ArrowRight width={15} height={15} />
                </span>
              </a>
              <a href={profile.resume} target="_blank" rel="noopener" className="label link-underline text-ink">
                Download résumé
              </a>
            </motion.div>
          </div>

          {/* Credentials, right-aligned as in the reference */}
          <motion.dl
            {...rise(0.55)}
            className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-3 lg:col-start-10 lg:grid-cols-1 lg:gap-y-9 lg:pt-16 lg:text-right"
          >
            {heroCredentials.map((c) => (
              <div key={c.value}>
                <dt className="display text-[1.9rem] leading-none text-ink sm:text-[2.2rem]">{c.value}</dt>
                <dd className="mt-2 text-[13px] leading-snug text-muted lg:ml-auto lg:max-w-[15rem]">{c.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* What I do: four columns divided by hairlines */}
        <motion.ul
          {...rise(0.7)}
          className="mt-16 grid gap-y-8 border-t border-line pt-8 sm:grid-cols-2 lg:mt-auto lg:grid-cols-4 lg:border-t-0 lg:pb-12 lg:pt-10"
        >
          {capabilities.map((c, i) => (
            <li key={c.title} className={`sm:pr-6 ${i > 0 ? "lg:border-l lg:border-line lg:pl-6" : ""}`}>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">{c.title}</h2>
              <p className="mt-2 max-w-[17rem] text-[13px] leading-relaxed text-muted">{c.text}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
