import { skills } from "@/content/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1240px] scroll-mt-16 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        number="06"
        eyebrow="Skills"
        title={
          <>
            Tools I&apos;ve <span className="text-muted">shipped with.</span>
          </>
        }
        intro="Only what I've used in real projects. Each group says where you can see it at work on this page."
      />

      <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 3) * 0.05} className="flex flex-col border-b border-r border-line p-6 sm:p-8">
            <h3 className="text-[15px] font-semibold uppercase tracking-[0.06em] text-ink">{g.group}</h3>
            <ul className="mt-5 flex flex-1 flex-wrap content-start gap-x-2 gap-y-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-ink-2">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] text-muted">
              <span className="label mr-2 text-[10px] text-ink-2">Used in</span>
              {g.proof}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
