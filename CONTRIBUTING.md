# Contributing

Thanks for your interest in contributing to the Cervecería Burgos website.
Here's what you need to know before opening a PR.

## Setup

```bash
git clone https://github.com/MathiasPaulenko/cerveceria-burgos-web.git
cd cerveceria-burgos-web
npm ci --legacy-peer-deps   # required: @astrojs/tailwind doesn't officially support Astro 6 yet
npm run dev                 # → http://localhost:4321
```

## Before opening a PR

- Run `npm run build`. Astro's SSG catches JSX/TypeScript errors that the dev
  server misses. A PR that doesn't build won't be merged.
- Keep changes atomic: one feature or fix per PR.
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit
  messages: `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`.

## Project conventions

### Colors

The palette is fixed. Only these hex values are allowed:

| Token | Hex |
|-------|-----|
| Burgundy | `#99120f` |
| Gold | `#FACB6E` |
| Cream | `#FBF5DD` |
| Dark | `#040000` |
| Near-black | `#151418` |
| Amber | `#A06029` |
| Terracotta | `#F9E3A7` |

### React islands

- Add `"use client"` at the top of interactive `.tsx` files.
- Hydrate with `client:visible` for below-fold sections, `client:load` only
  for above-fold (Header, Hero).

### Menu data

`src/data/carta.json` is the single source of truth for drinks and food.
To change the menu, edit that file only — `MenuSection.tsx` reads from it.

### Gallery

Photos live in `public/images/gallery/` and must follow the naming convention:
`local-*.jpg`, `comida-tapa-*.jpg`, `comida-menu-*.jpg`. The array in
`GallerySection.tsx` must match the actual files.

### SEO

If your change touches content or pages, check `src/layouts/Layout.astro`:
title, meta description, `og:image`, canonical URL, and Schema.org JSON-LD.

## Reporting issues

Use the issue templates. For visual bugs, screenshots and browser/device info
help a lot. For anything related to menu content or business info, please note
that only the site owner can confirm real-world changes.

## Questions

Contact Mathias Paulenko at mathias.paulenko@outlook.com.
