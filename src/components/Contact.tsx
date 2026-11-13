"use client";

import { useState } from "react";
import { profile } from "@/content/site";
import { ArrowUpRight, Download } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

// A plain, professional contact block: one sentence and a list of ways to reach me.
export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const row = "grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 border-b border-night-line py-5 sm:grid-cols-[9rem_1fr_auto]";
  const key = "label col-span-2 text-white/45 sm:col-span-1";
  const val = "min-w-0 break-words text-[17px] text-white sm:text-[18px]";

  return (
    <section id="contact" className="relative scroll-mt-16 bg-night text-white">
      <div className="mx-auto max-w-[1240px] px-5 pb-10 pt-24 sm:px-8 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="label flex items-center gap-3 text-white/55">
              <span className="text-white/80">07</span>
              <span className="h-px w-8 bg-white/30" />
              Contact
            </p>
            <h2 className="display mt-6 text-[3.4rem] sm:text-[4.6rem] lg:text-[5.4rem]">Get in touch</h2>
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-white/60">
              Email is the best way to reach me. I read everything and usually reply within a day.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:pt-3" delay={0.06}>
            <dl className="border-t border-night-line">
              <div className={row}>
                <dt className={key}>Email</dt>
                <dd className={val}>
                  <a href={`mailto:${profile.email}`} className="transition-colors hover:text-white/70">
                    {profile.email}
                  </a>
                </dd>
                <dd>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="label rounded-full border border-white/20 px-3.5 py-2 text-[10px] text-white/80 transition-colors hover:border-white/60 hover:text-white"
                    aria-live="polite"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </dd>
              </div>

              <div className={row}>
                <dt className={key}>GitHub</dt>
                <dd className={val}>
                  <a href={profile.github} target="_blank" rel="noopener" className="transition-colors hover:text-white/70">
                    github.com/{profile.githubHandle}
                  </a>
                </dd>
                <dd>
                  <ArrowUpRight width={18} height={18} className="text-white/50" />
                </dd>
              </div>

              <div className={row}>
                <dt className={key}>Résumé</dt>
                <dd className={val}>
                  <a href={profile.resume} target="_blank" rel="noopener" className="transition-colors hover:text-white/70">
                    Download PDF
                  </a>
                </dd>
                <dd>
                  <Download width={18} height={18} className="text-white/50" />
                </dd>
              </div>

              <div className={row}>
                <dt className={key}>Location</dt>
                <dd className={val}>Chennai, India · IST (UTC+5:30)</dd>
                <dd />
              </div>
            </dl>
          </Reveal>
        </div>

        <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-night-line pt-8 text-sm text-white/45 sm:flex-row sm:items-center">
          <p>
            <span className="display text-xl text-white">Kausik</span>
            <span className="ml-3">© {new Date().getFullYear()} {profile.name}</span>
          </p>
          <a href="#top" className="label transition-colors hover:text-white">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
