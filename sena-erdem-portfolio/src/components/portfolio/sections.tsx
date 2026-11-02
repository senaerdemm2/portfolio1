"use client";

import { BadgeCheck, DatabaseZap, GraduationCap, Languages, MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import {
  STACK_GROUPS,
  ABOUT_PARAGRAPHS,
  QUICK_FACTS,
  EXPERIENCE,
} from "@/lib/portfolio-data";

export function Stack() {
  return (
    <section id="stack" aria-label="Tech stack" className="scroll-mt-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Tools & Technologies"
          title="Tech Stack"
          subtitle="The tools, languages, and libraries I use daily to build reporting workflows, dashboards, and analytical datasets."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {STACK_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6 hover:border-emerald-500/25 transition-colors">
                <h3 className="font-mono text-sm text-emerald-400"># {group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/[0.08] bg-zinc-900/60 px-2.5 py-1 text-xs sm:text-[13px] text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" aria-label="About me" className="scroll-mt-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="About Me"
          title="Bridging the Gap Between Data and Decisions"
          subtitle="From raw data to stakeholder-ready reports."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <Reveal>
            <div className="space-y-4">
              {ABOUT_PARAGRAPHS.map((p) => (
                <p key={p.slice(0, 32)} className="text-sm sm:text-base leading-relaxed text-zinc-400">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
              <h3 className="font-mono text-sm text-emerald-400">&gt; Quick Facts</h3>
              <dl className="mt-4 divide-y divide-white/[0.06]">
                {QUICK_FACTS.map((f) => (
                  <div key={f.label} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                    <dt className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-wider text-zinc-500 pt-0.5">
                      {f.label}
                    </dt>
                    <dd>
                      <p className="text-sm font-medium text-zinc-200">{f.value}</p>
                      <p className="mt-0.5 text-xs text-zinc-500">{f.sub}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const exp = EXPERIENCE;
  return (
    <section
      id="experience"
      aria-label="Professional experience"
      className="scroll-mt-24 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Work"
          subtitle="Real-world experience turning messy e-commerce data into decisions: pipelines with data-quality checks, churn and marketing analysis, and statistical testing."
        />

        <Reveal className="mt-10">
          <article className="overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025]">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.06] p-5 sm:p-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">
                  {exp.role} <span className="text-zinc-500">·</span>{" "}
                  <span className="text-emerald-400">{exp.company}</span>
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{exp.focus}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/[0.08] bg-zinc-900/60 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-left sm:text-right">
                <p className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/25 bg-emerald-500/[0.08] px-2.5 py-1 font-mono text-xs text-emerald-300">
                  <BadgeCheck className="size-3.5" aria-hidden />
                  {exp.period}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-zinc-500 sm:justify-end">
                  <MapPin className="size-3.5" aria-hidden />
                  {exp.location}
                </p>
              </div>
            </div>

            <ul className="divide-y divide-white/[0.05]">
              {exp.highlights.map((h) => (
                <li
                  key={h.area}
                  className="group p-5 sm:p-6 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
                    <h4 className="w-full shrink-0 text-sm font-semibold text-zinc-100 sm:w-64">
                      {h.area}
                    </h4>
                    <div>
                      <p className="font-mono text-xs text-emerald-400">{h.metric}</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">{h.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="mt-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="size-4.5 text-emerald-400" aria-hidden />
              B.Sc. Computer Engineering — Vistula University, Warsaw (Apr 2026)
            </span>
            <span className="inline-flex items-center gap-2">
              <Languages className="size-4.5 text-emerald-400" aria-hidden />
              Erasmus — HTW Dresden, Germany (2024–2025)
            </span>
            <span className="inline-flex items-center gap-2">
              <DatabaseZap className="size-4.5 text-emerald-400" aria-hidden />
              TechPro Education — 330-hour Data Analysis Bootcamp (Nov 2025)
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
