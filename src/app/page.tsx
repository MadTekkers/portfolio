import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div id="top">
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
        <Section
          id="projects"
          eyebrow="Shipped work"
          title="Side projects with live links"
        >
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Real apps I built and deployed. Each card links to the live site and
            the public GitHub repo.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>

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
