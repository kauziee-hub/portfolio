"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { Media } from "@/content/site";
import { ChevronLeft, ChevronRight, Close } from "./Icons";

type Ctx = { open: (items: Media[], index?: number) => void };
const LightboxContext = createContext<Ctx>({ open: () => {} });

export const useLightbox = () => useContext(LightboxContext);

// One full-screen viewer shared by every gallery and photo on the page.
// Videos play with controls and sound available; images fit the screen.
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Media[]>([]);
  const [index, setIndex] = useState(0);
  const isOpen = items.length > 0;

  const open = useCallback((s: Media[], i = 0) => {
    setItems(s);
    setIndex(i);
  }, []);
  const close = useCallback(() => setItems([]), []);
  const step = useCallback((d: number) => setIndex((i) => (i + d + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  const item = items[index];

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && item && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-[#0d0c0b]/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={item.caption}
            onClick={close}
          >
            <div className="flex items-center justify-between px-4 py-3 text-sm text-white/70 sm:px-6">
              <span className="font-mono text-xs">
                {index + 1} / {items.length}
              </span>
              <button
                onClick={close}
                className="grid h-10 w-10 place-items-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <Close />
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16">
              {item.video ? (
                <motion.video
                  key={item.video}
                  src={item.video}
                  poster={item.src}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="max-h-full max-w-full rounded-lg bg-black shadow-2xl"
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <motion.img
                  key={item.src}
                  src={item.src}
                  alt={item.caption}
                  className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                />
              )}
              {items.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      step(-1);
                    }}
                    className="absolute left-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-4"
                    aria-label="Previous"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      step(1);
                    }}
                    className="absolute right-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4"
                    aria-label="Next"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>
            <p className="mx-auto max-w-3xl px-6 py-5 text-center text-sm text-white/80">{item.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
