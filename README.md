# Quality Egypt — Corporate Website

A modern, complete rebuild of the corporate website for **Egyptian Engineering Projects Co., Quality** (qualityegypt.com) — a leading ELV systems integrator since 1985.

Built from scratch with **React 19 + Vite 8 + Tailwind CSS 4**, deployed on **GitHub Pages**.

## ✨ Features

- **Brand design system** — deep navy + electric cyan + gold accent, Inter typography, grid textures, glassmorphism and scroll-reveal motion
- **Full site coverage** — Home, About (story / vision & mission / timeline / values), Services (6 + detail pages), Scope of Activities (16), Partners (120+ brands), Selected References (10 categories, each with projects), News (with article pages), Jobs and Contact (form + map)
- **Cinematic hero** with flagship project imagery and animated stats
- **How We Deliver section** — a 4-step engagement process (Discover → Design → Deliver → Support)
- **FAQ accordion** — six search-friendly Q&As baked into the home page
- **Interactive news filters** — category chips filter the journal in real time
- **Working contact form** — inline validation (email checks) plus a prefilled `mailto:` hand-off to the sales inbox
- **SEO ready** — Open Graph + Twitter cards, canonical URL, robots meta and JSON-LD `Organization` schema
- **Accessibility polish** — visible keyboard focus on every interactive element and `prefers-reduced-motion` support
- **Partner marquee**, landmark project showcase, news grid — all data-driven
- **Fully responsive** LTR layout with sticky glass header and mobile menu
- Deep-link friendly SPA routing (`/services/:slug`, `/references/:slug`, `/news/:slug`)

## 🧠 Content

All content lives in `src/content.js` — company data, services, activities, partners, references, projects, news and jobs. Edit one file to update the whole site. Images are in `public/images/` (company-approved assets).

## 🚀 Running locally

Requires **Node.js 18+** and **npm**.

```bash
npm install
npm run dev        # start dev server
npm run lint       # oxlint
npm run build      # production build to dist/
```

## 🚢 Deploying to GitHub Pages

The site is configured for the `/quality-egypt/` sub-path (see `vite.config.js`).

```bash
npm run deploy
```

This builds the app, adds `.nojekyll`, duplicates `index.html` as `404.html` (for SPA deep links), and publishes `dist/` to the `gh-pages` branch.

Live: **https://seifmomo.github.io/quality-egypt/**