import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div id="top">
      <section
        aria-labelledby="hero-heading"
        className="border-b border-border/80"
      >
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="mb-4 text-sm font-medium text-accent">
            Portfolio · Recruiting
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.1]"
          >
            {site.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {site.valueProp}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border-strong px-5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              GitHub
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View projects ↓
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Section
          id="projects"
          eyebrow="Selected work"
          title="Software I've shipped"
        >
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Hands-on builds I took from idea to a live deploy. Useful practice
            for product sense, delivery, and owning the full loop.
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
          className="border-t border-border/80"
        >
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            {site.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Connect on LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border-strong px-5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              See GitHub
            </a>
          </div>
        </Section>
      </div>
    </div>
  );
}
