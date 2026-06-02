# AGENTS.md — Cervecería Burgos

Instructions for AI coding agents working on the Cervecería Burgos landing page.

---

## Project Overview

Single-page static website for a Spanish tavern (cervecería) in Carabanchel, Madrid. Built with Astro (SSG) + React islands. Deployed to GitHub Pages at `https://mathiaspaulenko.github.io/cerveceria-burgos-web/`.

When custom domain `cerveceriaburgos.es` is connected, revert `base` path in `astro.config.mjs`.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| SSG | Astro 6 |
| Islands | React 19 |
| Styling | TailwindCSS 3 |
| Animations | Framer Motion 12 |
| Icons | Lucide React + custom SVGs |
| Fonts | Inter · Playfair Display |
| Deploy | GitHub Pages (GitHub Actions) |

---

## Build & Dev Commands

```bash
# Install dependencies
npm ci --legacy-peer-deps

# Dev server → http://localhost:4321
npm run dev

# Production build → ./dist/
npm run build

# Preview build locally
npm run preview
```

**Always run `npm run build` before committing.** Astro's SSG catches JSX/TypeScript errors that `dev` might miss.

---

## Color Palette (MANDATORY — do not change)

All components must use these exact hex values. No other colors.

| Token | Hex | Usage |
|-------|-----|-------|
| **Burgundy** | `#99120f` | Primary accent, headings, hover states, icons |
| **Gold** | `#FACB6E` | Highlights, CTAs, badges, footer hover |
| **Cream** | `#FBF5DD` | Light section backgrounds, body text on dark |
| **Dark** | `#040000` | Dark section backgrounds (hero), primary text |
| **Near-black** | `#151418` | Card text, borders |
| **Amber** | `#A06029` | Secondary text, descriptions |
| **Terracotta** | `#F9E3A7` | Warm card accents, parking card bg |

---

## Component Conventions

### React Islands
- Add `"use client"` at the top of every interactive `.tsx` file
- Use `client:visible` or `client:load` directive in `.astro` pages
- Prefer `client:visible` for below-fold sections (Menu, About, Gallery, Contact)
- Use `client:load` only for above-fold (Header, Hero)

### Animations
- Use `FadeIn` from `@/components/animations/FadeIn` for scroll-triggered reveals
- Use `motion.div` with `whileHover` / `whileTap` for micro-interactions
- Keep hover transitions fast: `type: "spring", stiffness: 300, damping: 20`

### Icons
- Lucide icons for UI elements (`MapPin`, `Phone`, `Clock`, etc.)
- Custom SVG components in `@/components/icons/` for social logos

---

## Content Source

Menu data lives in `src/data/carta.json`. This is the single source of truth for:
- Drink categories (cervezas, mojitos, margaritas)
- Food categories (tapas, raciones)
- Prices, descriptions, icons

When updating the menu, **edit only `carta.json`** — the `MenuSection.tsx` reads from it automatically.

---

## File Structure

```
src/
├── components/
│   ├── animations/       # FadeIn.tsx
│   ├── icons/            # Logo.tsx, SocialIcons.tsx
│   ├── layout/           # Header.tsx, Footer.tsx
│   ├── sections/         # Hero, MenuSection, AboutSection,
│   │                     # GallerySection, ContactSection
│   └── ui/               # ScrollToTop.tsx
├── data/
│   └── carta.json        # Menu data
├── layouts/
│   └── Layout.astro      # SEO, meta tags, Schema.org
├── pages/
│   └── index.astro       # Single page composition
└── styles/
    └── global.css        # Tailwind + base styles

public/
├── images/gallery/       # Gallery photos
├── favicon.svg           # CB logo
├── manifest.json         # PWA manifest
├── robots.txt            # SEO directives
├── sitemap.xml           # Site map
└── CNAME                 # cerveceriaburgos.es
```

---

## Gallery Photos

Photos are organized in `public/images/gallery/` with naming convention:
- `local-*.jpg` — Exterior/terrace photos
- `comida-tapa-*.jpg` — Tapas photos
- `comida-menu-*.jpg` — Main dishes / menu items

The `GallerySection.tsx` array must match actual files present in this directory.

---

## Deployment

### GitHub Pages (current)
- `site`: `https://mathiaspaulenko.github.io`
- `base`: `/cerveceria-burgos-web`
- Workflow: `.github/workflows/deploy.yml`

### Custom Domain (future)
When connecting `cerveceriaburgos.es`:
1. Remove `base` from `astro.config.mjs`
2. Update `site` to `https://cerveceriaburgos.es`
3. Update `siteUrl` in `Layout.astro`
4. Update URLs in `sitemap.xml` and `robots.txt`

---

## Known Issues

1. **Peer dependency conflict**: `@astrojs/tailwind@6.0.2` does not officially support Astro 6. The CI uses `npm ci --legacy-peer-deps` as a workaround. Monitor for Tailwind adapter updates.

2. **Logo.tsx type error**: `@/components/icons/Logo` may show "Cannot find module" lint error in IDE, but the build succeeds. The component is imported correctly at runtime.

3. **Hero.tsx array index keys**: Two `key={index}` warnings exist (lines 23, 50). Safe to ignore for now; fixing requires adding stable IDs to bubble data.

---

## SEO Checklist for Changes

When modifying pages or adding content:
- [ ] Title updated in `Layout.astro`?
- [ ] Meta description accurate?
- [ ] `og:image` points to existing image?
- [ ] Canonical URL correct for current domain?
- [ ] Schema.org JSON-LD still valid?

---

## Commit Message Format

```
<type>: <description>

Types:
- feat: new feature or section
- fix: bug fix
- refactor: code cleanup without behavior change
- docs: README, comments, documentation
- style: CSS, Tailwind, visual changes
- chore: build, deps, config
```

---

## Contact

For questions about this project:
- Developer: Mathias Paulenko <mathias.paulenko@outlook.com>
- Client: Cervecería Burgos, Madrid
