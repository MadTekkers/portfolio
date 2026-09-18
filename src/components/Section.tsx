import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, eyebrow, children, className = "" }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-20 py-16 sm:py-20 ${className}`}
    >
      <div className="mb-8 max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={`${id}-heading`}
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
