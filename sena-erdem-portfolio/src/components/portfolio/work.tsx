"use client";

import { ArrowUpRight, Award, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import { PROJECTS, CERTIFICATIONS, PROFILE } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="scroll-mt-24 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects"
          subtitle="Each project follows an end-to-end data analysis workflow — from data extraction and cleaning through EDA and statistical analysis to interactive visualisation."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <article
                className={`flex h-full flex-col rounded-xl border p-5 sm:p-6 transition-colors ${
                  p.featured
                    ? "border-emerald-500/20 bg-emerald-500/[0.03] hover:border-emerald-500/40"
                    : "border-white/[0.07] bg-white/[0.025] hover:border-white/[0.15]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  {p.featured ? (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                      Featured
                    </span>
                  ) : (
                    <span className="rounded-full border border-white/[0.08] px-2.5 py-0.5 font-mono text-[11px] text-zinc-500">
                      Project
                    </span>
                  )}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    <Github className="size-3.5" aria-hidden />
                    View on GitHub
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                </div>

                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-zinc-100">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {p.description}
                </p>

                <dl className="mt-5 grid grid-cols-3 gap-3">
                  {p.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5"
                    >
                      <dt className="order-2 mt-1 text-[11px] leading-tight text-zinc-500">
                        {m.label}
                      </dt>
                      <dd className="order-1 text-base sm:text-lg font-bold text-emerald-400">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-4 text-sm leading-relaxed text-zinc-500">{p.detail}</p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/[0.08] bg-zinc-900/60 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications"
      className="scroll-mt-24 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Industry-recognised credentials validating my technical training."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6 hover:border-emerald-500/25 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
                    {c.title}
                  </h3>
                  <Award className="size-5 shrink-0 text-emerald-400" aria-hidden />
                </div>
                <p className="mt-1 text-sm text-zinc-400">{c.issuer}</p>

                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-zinc-500">
                  <li className="inline-flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="size-3.5" aria-hidden />
                    Verified
                  </li>
                  <li>Issued {c.issued}</li>
                  <li>{c.kind}</li>
                  <li>{c.id}</li>
                </ul>

                <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Majors
                </p>
                <ul className="mt-1.5 flex flex-wrap gap-1.5">
                  {c.majors.map((m) => (
                    <li
                      key={m}
                      className="rounded-md border border-white/[0.08] bg-zinc-900/60 px-2 py-0.5 text-[11px] text-zinc-300"
                    >
                      {m}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                  <span className="font-mono uppercase tracking-wider text-zinc-500">
                    Curriculum:{" "}
                  </span>
                  {c.curriculum}
                </p>

                {c.verify ? (
                  <a
                    href={c.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Verify certificate
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                ) : (
                  <p className="mt-auto pt-5 font-mono text-[11px] text-zinc-600">
                    Credential ID verifiable on request
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: PROFILE.email,
      sub: "> send a message",
      href: `mailto:${PROFILE.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: PROFILE.linkedinLabel,
      sub: "> connect with me",
      href: PROFILE.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: PROFILE.githubLabel,
      sub: "> view my code",
      href: PROFILE.github,
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="scroll-mt-24 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="I'm actively seeking Junior Data Analyst, BI Analyst, and Reporting Analyst positions. Whether you have an opportunity, a question, or just want to say hello — I'd love to hear from you."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group block h-full rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 hover:border-emerald-500/35 hover:bg-emerald-500/[0.03] transition-colors"
              >
                <c.icon className="size-5 text-emerald-400" aria-hidden />
                <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  {c.label}
                </p>
                <p className="mt-1 break-all text-sm font-medium text-zinc-100">{c.value}</p>
                <p className="mt-0.5 font-mono text-xs text-emerald-400/80 group-hover:text-emerald-300">
                  {c.sub}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
            <p className="inline-flex items-center gap-2 text-sm text-zinc-400">
              <Phone className="size-4 text-emerald-400" aria-hidden />
              <a href={`tel:${PROFILE.phoneHref}`} className="hover:text-zinc-100 transition-colors">
                {PROFILE.phone}
              </a>
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-zinc-400">
              <MapPin className="size-4 text-emerald-400" aria-hidden />
              {PROFILE.location} — open to remote &amp; relocation
            </p>
            <a
              href={PROFILE.cv}
              download="Sena-Erdem-CV.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              Download CV (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            &gt; {PROFILE.name}{" "}
            <span className="text-zinc-600">· © 2026 · Built with Next.js &amp; Tailwind CSS</span>
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
