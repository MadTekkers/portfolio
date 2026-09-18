export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  status?: "live" | "prototype";
};

export const projects: Project[] = [
  {
    slug: "wod-vault",
    name: "WOD Vault",
    summary:
      "CrossFit, Hyrox, and functional fitness workout library — browse, filter, and save workouts for training.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://wod-vault-seven.vercel.app",
    repoUrl: "https://github.com/MadTekkers/wod-vault",
    status: "live",
  },
  {
    slug: "veteats",
    name: "VetEats",
    summary:
      "Veterans Day deals map and route planner — find participating restaurants and plan an efficient route.",
    stack: ["Next.js", "Maps", "TypeScript", "Vercel"],
    liveUrl: "https://veteats.com",
    repoUrl: "https://github.com/MadTekkers/VetEats",
    status: "live",
  },
  {
    slug: "wedding-guest-site",
    name: "Wedding guest site",
    summary:
      "Guest-facing wedding website with RSVP flow — event details, travel info, and response collection (prototype).",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://wedding-site-ryan-chiem-s-projects.vercel.app",
    repoUrl: "https://github.com/MadTekkers/wedding-guest-site",
    status: "prototype",
  },
];
