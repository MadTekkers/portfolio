import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-4">
          <a
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
