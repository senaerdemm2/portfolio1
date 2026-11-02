"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowDown, FileDown } from "lucide-react";
import { PROFILE, HERO_STATS } from "@/lib/portfolio-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const anim = reduce
    ? { variants: undefined, initial: undefined, animate: undefined }
    : { variants: container, initial: "hidden" as const, animate: "show" as const };
  const animItem = reduce
    ? {}
    : { variants: item };

  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_-5%,rgba(16,185,129,0.13),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <motion.div {...anim}>
          <motion.p
            {...animItem}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-3.5 py-1.5 font-mono text-xs text-emerald-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to Junior Data Analyst / BI Analyst roles
          </motion.p>

          <motion.h1
            {...animItem}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.h2
            {...animItem}
            className="mt-3 text-xl sm:text-2xl font-semibold text-zinc-300"
          >
            {PROFILE.role}
          </motion.h2>

          <motion.p
            {...animItem}
            className="mt-3 font-mono text-sm sm:text-base text-emerald-400"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.p
            {...animItem}
            className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-zinc-400"
          >
            {PROFILE.summary}
          </motion.p>

          <motion.div {...animItem} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              View Projects
              <ArrowDown className="size-4" aria-hidden />
            </a>
            <a
              href={PROFILE.cv}
              download="Sena-Erdem-CV.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/[0.08] transition-colors"
            >
              <FileDown className="size-4" aria-hidden />
              Download CV
            </a>
          </motion.div>

          <motion.ul
            {...animItem}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs sm:text-sm text-zinc-500"
          >
            <li>
              <a href={`mailto:${PROFILE.email}`} className="hover:text-emerald-400 transition-colors">
                {PROFILE.email}
              </a>
            </li>
            <li aria-hidden className="hidden sm:inline text-zinc-700">|</li>
            <li>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li aria-hidden className="hidden sm:inline text-zinc-700">|</li>
            <li>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                {PROFILE.githubLabel}
              </a>
            </li>
            <li aria-hidden className="hidden sm:inline text-zinc-700">|</li>
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden />
              {PROFILE.location}
            </li>
          </motion.ul>
        </motion.div>

        <motion.ul
          {...anim}
          aria-label="Key figures"
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {HERO_STATS.map((s) => (
            <motion.li
              key={s.label}
              {...animItem}
              className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5"
            >
              <p className="text-2xl sm:text-3xl font-bold text-emerald-400">{s.value}</p>
              <p className="mt-1.5 text-sm font-medium text-zinc-200">{s.label}</p>
              <p className="mt-0.5 font-mono text-[11px] sm:text-xs text-zinc-500">{s.sub}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="pb-6 text-center" aria-hidden>
        <span className="font-mono text-[11px] tracking-widest text-zinc-600 uppercase">
          scroll to explore
        </span>
      </div>
    </section>
  );
}

export function ContactIconsRow() {
  return (
    <ul className="flex items-center gap-3">
      <li>
        <a
          href={`mailto:${PROFILE.email}`}
          aria-label="Email"
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
        >
          <Mail className="size-4.5" aria-hidden />
        </a>
      </li>
      <li>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
        >
          <Linkedin className="size-4.5" aria-hidden />
        </a>
      </li>
      <li>
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
        >
          <Github className="size-4.5" aria-hidden />
        </a>
      </li>
    </ul>
  );
}
