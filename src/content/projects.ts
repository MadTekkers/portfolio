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
    slug: "game-lobby",
    name: "Game Lobby",
    summary:
      "Multiplayer daily word games: six puzzles with open lobbies, share links, and live co-op or versus play.",
    stack: ["React", "TypeScript", "Supabase Realtime", "Postgres", "Vercel"],
    liveUrl: "https://game-lobby-games.vercel.app",
    image: "/projects/game-lobby.webp",
    imageAlt: "Game Lobby landing page",
    status: "live",
  },
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
      "A directory of Veterans Day deals: find participating restaurants and plan an efficient route.",
    stack: ["Next.js", "Maps", "TypeScript", "Vercel"],
    liveUrl: "https://veteats.com",
    image: "/projects/veteats.webp",
    imageAlt: "VetEats landing page",
    status: "live",
  },
];
