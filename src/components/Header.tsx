import { site } from "@/content/site";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {site.name}
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border-strong px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-accent/50 hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
