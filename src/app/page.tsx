import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { aiFleet, aiWorkingPrinciples } from "@/content/ai-fleet";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div id="top">
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="border-b border-zinc-800/80"
      >
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="mb-4 text-sm font-medium text-emerald-400">
            Portfolio · Recruiting
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.1]"
          >
            {site.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {site.valueProp}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-700 px-5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              GitHub
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              View projects ↓
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Projects */}
        <Section
          id="projects"
          eyebrow="Shipped work"
          title="Side projects with live links"
        >
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Real apps I built and deployed. Each card links to the live site and
            the public GitHub repo.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>

        {/* AI literacy */}
        <Section
          id="ai"
          eyebrow="AI literacy"
          title="How I work with AI"
          className="border-t border-zinc-800/80"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                I treat AI agents like specialized teammates in a personal
                operating system — each scoped to a domain I already work in.
                The point for employers: I can design agent workflows, keep
                outputs reviewable, and ship the surrounding product work.
              </p>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-300">
                Working principles
              </h3>
              <ul className="space-y-2.5">
                {aiWorkingPrinciples.map((principle) => (
                  <li
                    key={principle}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                      aria-hidden
                    />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6">
              <h3 className="mb-1 text-base font-semibold text-zinc-50">
                Agent fleet (personal OS)
              </h3>
              <p className="mb-4 text-sm text-zinc-500">
                Specialized bots I run for day-to-day work — not a commercial
                product, a practical workflow stack.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {aiFleet.map((agent) => (
                  <li
                    key={agent.name}
                    className="rounded-lg border border-zinc-800/80 bg-zinc-950/50 px-3 py-2.5"
                  >
                    <p className="text-sm font-medium text-zinc-200">
                      {agent.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-zinc-500">
                      {agent.focus}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* About */}
        <Section
          id="about"
          eyebrow="About"
          title="Short bio"
          className="border-t border-zinc-800/80"
        >
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {site.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Connect on LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-700 px-5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              See GitHub
            </a>
          </div>
        </Section>
      </div>
    </div>
  );
}
