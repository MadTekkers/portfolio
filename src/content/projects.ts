export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  liveUrl: string;
  image: string;
  imageAlt: string;
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
    image: "/projects/wod-vault.webp",
    imageAlt: "WOD Vault landing page",
    status: "live",
  },
  {
    slug: "veteats",
    name: "VetEats",
    summary:
      "Veterans Day deals map and route planner — find participating restaurants and plan an efficient route.",
    stack: ["Next.js", "Maps", "TypeScript", "Vercel"],
    liveUrl: "https://veteats.com",
    image: "/projects/veteats.webp",
    imageAlt: "VetEats landing page",
    status: "live",
  },
];
