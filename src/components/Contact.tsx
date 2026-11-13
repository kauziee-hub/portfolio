import { profile } from "@/content/site";
import { ArrowUpRight, Download, GitHub, Mail } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="grain relative scroll-mt-16 overflow-hidden bg-night text-white">
      <div className="relative mx-auto max-w-[1240px] px-5 pb-10 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <p className="label flex items-center gap-3 text-white/55">
            <span className="text-white/80">07</span>
            <span className="h-px w-8 bg-white/30" />
            Contact
          </p>
          <h2 className="display mt-6 max-w-5xl text-[3.4rem] sm:text-[5rem] lg:text-[7rem]">
            Let&apos;s build something <span className="text-white/45">that has to work.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">
            Have a problem that needs a model, a product or both? Write to me, and I&apos;ll reply within a day.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-paper px-7 py-4 text-[15px] font-medium text-ink transition-colors hover:bg-[#d6b98c]"
            >
              <Mail width={18} height={18} />
              {profile.email}
              <ArrowUpRight width={16} height={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-[15px] font-medium text-white transition-colors hover:border-white/60"
            >
              <GitHub width={17} height={17} /> GitHub
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-[15px] font-medium text-white transition-colors hover:border-white/60"
            >
              <Download width={17} height={17} /> Résumé
            </a>
          </div>
        </Reveal>

        <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-night-line pt-8 text-sm text-white/45 sm:flex-row sm:items-center">
          <p>
            <span className="display text-xl text-white">Kausik</span>
            <span className="ml-3">© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
          </p>
          <a href="#top" className="label transition-colors hover:text-white">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
