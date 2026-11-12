import { education, experience } from "@/content/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-16 border-y border-line bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          number="05"
          eyebrow="Experience & education"
          title={
            <>
              Where I&apos;ve been <em className="text-accent">building.</em>
            </>
          }
        />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="label text-muted">Experience</h3>
            <ol className="mt-4">
              {experience.map((e, i) => (
                <li key={e.title} className="border-b border-line py-7 last:border-b-0">
                  <Reveal delay={i * 0.05}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-serif text-[1.9rem] leading-tight text-ink">{e.title}</h4>
                      <span className="font-mono text-xs text-muted">{e.period}</span>
                    </div>
                    <p className="mt-1 text-[15px] font-medium text-ink-2">
                      {e.org} <span className="font-normal text-muted">· {e.place}</span>
                    </p>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{e.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            <h3 className="label text-muted">Education</h3>
            <ul className="mt-4">
              {education.map((ed, i) => (
                <li key={ed.school} className="border-b border-line py-7 last:border-b-0">
                  <Reveal delay={i * 0.05}>
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-[16px] font-semibold leading-snug tracking-tight text-ink">{ed.school}</h4>
                      <span className="shrink-0 font-mono text-xs text-muted">{ed.period}</span>
                    </div>
                    <p className="mt-1 text-[15px] text-ink-2">{ed.degree}</p>
                    <p className="mt-3 font-serif text-2xl text-accent">{ed.detail}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
