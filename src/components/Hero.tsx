"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/content/site";
import { ArrowDown, ArrowRight } from "./ui/Icons";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

// Bold condensed type from the newer reference, set inside the calm, airy
// layout of the earlier one: a side rail, lots of space, and the portrait
// rising from the bottom edge inside an arch window.
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:h-[max(700px,min(100svh,920px))]">
        {/* Vertical rail */}
        <motion.div
          {...rise(0.6)}
          className="pointer-events-none absolute bottom-12 left-0 top-32 hidden w-8 flex-col items-center justify-between xl:flex"
          aria-hidden
        >
          <span className="label rotate-180 whitespace-nowrap text-muted [writing-mode:vertical-rl]">AI/ML engineer · Full-stack</span>
          <span className="my-6 w-px flex-1 bg-line-strong" />
          <span className="label rotate-180 text-muted [writing-mode:vertical-rl]">Chennai</span>
        </motion.div>

        <div className="grid h-full lg:grid-cols-12 lg:gap-8">
          {/* Words */}
          <div className="flex flex-col pt-28 lg:col-span-7 lg:pb-12 lg:pt-32 xl:pl-14">
            <div className="my-auto">
              <motion.p {...rise(0.1)} className="label flex items-center gap-3 text-muted">
                <span className="h-px w-8 bg-ink" />
                Hello, I&apos;m {profile.shortName}
              </motion.p>

              <h1 className="mt-7 text-ink">
                <span className="block overflow-hidden">
                  <motion.span
                    className="display block text-[4.2rem] sm:text-[6rem] lg:text-[clamp(5.4rem,min(9vw,15svh),8.6rem)]"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.15, ease }}
                  >
                    AI Engineer
                  </motion.span>
                </span>
                <motion.span
                  {...rise(0.35)}
                  className="mt-2 block text-[2.2rem] font-extralight leading-[1.02] tracking-[-0.045em] sm:text-[3.2rem] lg:text-[clamp(2.8rem,min(4.4vw,7.4svh),4.2rem)]"
                >
                  &amp; full&#8209;stack developer
                </motion.span>
              </h1>

              <motion.p {...rise(0.5)} className="mt-8 max-w-[30rem] text-[16px] leading-relaxed text-ink-2 sm:text-[17px]">
                {profile.heroLine}
              </motion.p>

              <motion.div {...rise(0.6)} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
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

            <motion.a
              {...rise(0.8)}
              href="#work"
              className="label mt-12 hidden w-fit items-center gap-2 text-ink-2 transition-colors hover:text-ink lg:inline-flex"
            >
              Scroll down
              <motion.span animate={reduce ? undefined : { y: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowDown width={14} height={14} />
              </motion.span>
            </motion.a>
          </div>

          {/* Portrait: an arch window rising from the bottom edge */}
          <div className="relative mt-12 lg:col-span-5 lg:mt-0">
            <motion.div
              className="relative mx-auto h-[min(118vw,520px)] w-[min(84vw,400px)] overflow-hidden rounded-t-full bg-[#f3eade] lg:absolute lg:bottom-0 lg:right-0 lg:h-[min(80svh,700px)] lg:w-[min(100%,440px)]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease }}
            >
              <motion.img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fetchPriority="high"
                style={{ y: photoY }}
                className="absolute inset-x-0 top-0 h-[104%] w-full object-cover object-[50%_4%]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
