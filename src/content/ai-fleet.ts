export type AgentCapability = {
  name: string;
  focus: string;
};

/**
 * Specialized personal agents Ryan runs as a multi-agent OS.
 * Framed as practical AI literacy for recruiting — not product claims.
 */
export const aiFleet: AgentCapability[] = [
  { name: "Food & restaurants", focus: "Local finds, menus, and dining decisions" },
  { name: "Road trips", focus: "Routes, stops, and trip logistics" },
  { name: "Travel & flights", focus: "Itineraries and flight research" },
  { name: "Workouts", focus: "Training plans and WOD selection" },
  { name: "Lab-grown diamonds", focus: "Product research and comparisons" },
  { name: "Hiking permits", focus: "Permit windows and trail planning" },
  { name: "Credit cards", focus: "Rewards and card decision support" },
  { name: "Video editing", focus: "Edit workflows and tooling help" },
  { name: "Health podcast digests", focus: "Episode summaries and takeaways" },
  { name: "Wedding planning", focus: "Guest site, RSVP, and planning tasks" },
  { name: "AI podcast news", focus: "Industry episode digests" },
  { name: "Gifts", focus: "Gift ideas matched to context" },
  { name: "VetEats", focus: "Veterans Day deals and routing support" },
  { name: "Portfolio", focus: "This site — build, ship, and iterate" },
];

export const aiWorkingPrinciples: string[] = [
  "Scope agents narrowly so each one has a clear job and reliable context.",
  "Keep humans in the loop for decisions that need judgment, taste, or verification.",
  "Prefer reproducible workflows (repos, deploys, typed content) over one-off chat sessions.",
  "Use AI to accelerate research, scaffolding, and iteration — then own the review and ship.",
];
