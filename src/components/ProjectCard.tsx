import Image from "next/image";
import type { Project } from "@/content/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-panel/80 transition-colors hover:border-border-strong">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[14/9] overflow-hidden border-b border-border bg-panel-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          priority
        />
        <span className="sr-only">Open live site for {project.name}</span>
      </a>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {project.name}
          </h3>
          {project.status === "prototype" ? (
            <span className="shrink-0 rounded-full border border-accent/35 bg-accent/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-accent-hover">
              Prototype
            </span>
          ) : (
            <span className="shrink-0 rounded-full border border-accent/35 bg-accent/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-accent-hover">
              Live
            </span>
          )}
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        <ul className="mb-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-md bg-panel-elevated px-2 py-1 text-xs text-ink-soft"
            >
              {item}
            </li>
          ))}
        </ul>
        <div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-foreground px-3.5 py-1.5 text-sm font-medium text-on-accent transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Live site
            <span className="sr-only"> for {project.name}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
