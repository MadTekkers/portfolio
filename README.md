# Ryan Chiem — Portfolio

Personal recruiting portfolio: shipped side projects and links to LinkedIn + GitHub.

**Live:** [ryan-chiem.vercel.app](https://ryan-chiem.vercel.app)  
**Repo:** [github.com/MadTekkers/portfolio](https://github.com/MadTekkers/portfolio)

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel (no required environment variables)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Content edits

Typed content lives under `src/content/`:

| File | Purpose |
|------|---------|
| `site.ts` | Name, headline, value prop, about, social URLs, SEO base URL |
| `projects.ts` | Side projects (summary, stack, live + repo links) |

Update those modules and redeploy — no CMS or env vars needed.

## Vercel

- Team/scope: `ryan-chiem-s-projects`
- Project name / production URL: `ryan-chiem` → `https://ryan-chiem.vercel.app`
- Linked to GitHub for continuous deploys from `main`, or deploy from this directory:

```bash
vercel --prod --yes --scope ryan-chiem-s-projects
```

Zero env vars are required for this static portfolio.
