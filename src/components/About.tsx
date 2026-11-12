"use client";

import { principles, profile } from "@/content/site";
import { useLightbox } from "./ui/Lightbox";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const photo = { src: "/images/about/kausik-outdoor.webp", caption: "Kausik Ganapathy Hari" };

export function About() {
  const { open } = useLightbox();

  return (
    <section id="about" className="mx-auto max-w-[1240px] scroll-mt-16 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        number="04"
        eyebrow="About"
        title={
          <>
            I like problems where software has to <em className="text-accent">make a call</em> about the real world.
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <button
            type="button"
            onClick={() => open([photo])}
            className="group block w-full overflow-hidden rounded-[22px] border border-line"
            aria-label="Enlarge photo"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </button>
          <dl className="mt-6 divide-y divide-line border-y border-line text-[15px]">
            {[
              ["Based in", profile.location],
              ["Studying", "CSE at VIT Chennai · Data Science at IIT Madras"],
              ["Building", "Locah, OILINTELLIGENCE"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-4 py-3">
                <dt className="label w-24 shrink-0 pt-0.5 text-muted">{k}</dt>
                <dd className="text-ink-2">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-ink-2">
              <p>
                I&apos;m {profile.shortName}, a Computer Science undergraduate at VIT Chennai, and I&apos;m doing a
                concurrent BS in Data Science and Applications at IIT Madras. A payment that might be a scam, a
                pipeline that might be leaking, a small business deciding what to restock: I like the problems where
                software has to decide something about the real world, and then explain why.
              </p>
              <p>
                I&apos;ve freelanced for paying clients since January 2025, mostly food, retail and service
                businesses, and every one of them came from my own outreach. Alongside that I founded Locah, to give
                every local business the kind of software that usually only big companies can afford, and pitched it at
                a national startup challenge in Madurai.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className="label mt-14 text-muted">How I build</h3>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
              {principles.map((p, i) => (
                <li key={p.title} className="border-t border-line py-6">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="mt-2 font-serif text-[1.6rem] leading-tight text-ink">{p.title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
