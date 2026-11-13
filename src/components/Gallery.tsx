"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import type { Media } from "@/content/site";
import { AutoVideo } from "./ui/AutoVideo";
import { Expand, Play } from "./ui/Icons";
import { useLightbox } from "./ui/Lightbox";

// Product media viewer: a framed stage that plays walkthrough videos inline,
// plus a strip of thumbnails for the screenshots.
export function Gallery({ media, label }: { media: Media[]; label: string }) {
  const [index, setIndex] = useState(0);
  const { open } = useLightbox();
  const item = media[index];

  // Scroll-driven 3D: the screen arrives tilted back in perspective and settles flat
  // as it reaches the middle of the viewport. Kept subtle, and off for reduced motion.
  const stageRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 40, 0]);

  return (
    <div style={{ perspective: 1600 }}>
      <motion.div
        ref={stageRef}
        style={{ rotateX, scale, y, transformOrigin: "50% 100%" }}
        className="overflow-hidden rounded-[18px] border border-line-strong/70 bg-surface shadow-[0_40px_80px_-48px_rgba(20,19,17,0.55)] will-change-transform"
      >
        <div className="flex items-center gap-3 border-b border-line bg-paper-2/70 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#e0dbd2]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e0dbd2]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e0dbd2]" />
          </span>
          <span className="mx-auto truncate rounded-md bg-surface/80 px-3 py-0.5 font-mono text-[11px] text-muted">{label}</span>
          <button
            type="button"
            onClick={() => open(media, index)}
            className="label hidden items-center gap-1.5 text-[10px] text-muted transition-colors hover:text-ink sm:flex"
            aria-label={`Open full screen: ${item.caption}`}
          >
            <Expand width={12} height={12} /> Full screen
          </button>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper-2">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={item.video ?? item.src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {item.video ? (
                <AutoVideo src={item.video} poster={item.src} label={item.caption} className="h-full w-full" />
              ) : (
                <button
                  type="button"
                  onClick={() => open(media, index)}
                  className="group block h-full w-full"
                  aria-label={`Enlarge: ${item.caption}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.caption} loading="lazy" className="h-full w-full object-cover object-top" />
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="mt-3 flex items-start justify-between gap-6">
        <p className="min-h-[2.5rem] text-sm leading-snug text-ink-2">{item.caption}</p>
        <span className="shrink-0 font-mono text-xs text-muted">
          {String(index + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
        </span>
      </div>

      {media.length > 1 && (
        <div className="no-scrollbar -mx-1 mt-2 flex gap-2.5 overflow-x-auto px-1 pb-1">
          {media.map((m, i) => (
            <button
              key={m.video ?? m.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show: ${m.caption}`}
              aria-current={i === index}
              className={`relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg border transition-all sm:w-32 ${
                i === index ? "border-ink opacity-100 ring-1 ring-ink" : "border-line opacity-60 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
              {m.video && (
                <span className="absolute inset-0 grid place-items-center bg-ink/25">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/90 text-ink">
                    <Play width={11} height={11} />
                  </span>
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
