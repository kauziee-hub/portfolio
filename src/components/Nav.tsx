"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/content/site";
import { ArrowRight, Close, Download, GitHub, Menu } from "./ui/Icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#clients", label: "Clients" },
  { href: "#recognition", label: "Recognition" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Experience" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [...links.map((l) => l.href.slice(1)), "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !open ? "border-b border-line/70 bg-paper/92 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className={`mx-auto flex max-w-[1240px] items-center justify-between px-5 transition-[height] duration-500 sm:px-8 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <a href="#top" onClick={() => setOpen(false)} className="group flex items-baseline gap-0.5" aria-label="Kausik Ganapathy Hari, home">
            <span className="font-serif text-[28px] leading-none tracking-[-0.01em] text-ink">Kausik</span>
            <span className="font-serif text-[28px] leading-none text-accent transition-transform group-hover:translate-x-0.5">.</span>
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`label relative py-2 transition-colors ${isActive ? "text-ink" : "text-ink-2/70 hover:text-ink"}`}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-0 -bottom-0.5 h-px bg-ink"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-5">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="label hidden text-ink-2/80 transition-colors hover:text-ink md:block"
            >
              Résumé
            </a>
            <a
              href="#contact"
              className="label group hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-paper transition-colors hover:bg-accent sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowRight width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              className="relative z-[60] grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-paper px-5 pb-8 pt-24 sm:px-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex-1">
              {[...links, { href: "#contact", label: "Contact" }].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-4"
                  >
                    <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-[2.4rem] leading-none tracking-[-0.01em] text-ink">{l.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener"
                className="label flex items-center justify-center gap-2 rounded-full border border-line-strong py-4 text-ink"
              >
                <Download width={15} height={15} /> Résumé
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener"
                className="label flex items-center justify-center gap-2 rounded-full bg-ink py-4 text-paper"
              >
                <GitHub width={15} height={15} /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
