<div align="center">

<!-- Animated header banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:040000,50:99120f,100:FACB6E&height=180&section=header&text=cerveceria-burgos-web&fontSize=40&fontColor=FBF5DD&animation=fadeIn&fontAlignY=35" alt="cerveceria-burgos-web header" />

<!-- Typing animation -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=IBM+Plex+Mono&weight=600&size=20&duration=3000&pause=1000&color=99120f&center=true&vCenter=true&width=600&lines=Pub+Themed+Website;Astro+%2B+React+%2B+Tailwind;GitHub+Pages+Deployment;SEO+Optimized" alt="Pub themed website with Astro, React, Tailwind, GitHub Pages deployment and SEO optimization" />
</a>

<br/><br/>

[![Live Site](https://img.shields.io/badge/🌐_Live-cerveceriaburgos.es-99120f?style=for-the-badge&labelColor=040000)](https://cerveceriaburgos.es)
[![Deploy](https://img.shields.io/github/actions/workflow/status/MathiasPaulenko/cerveceria-burgos-web/deploy.yml?style=for-the-badge&label=deploy&labelColor=040000&color=33ff33)](https://github.com/MathiasPaulenko/cerveceria-burgos-web/actions)
[![License](https://img.shields.io/badge/license-All_Rights_Reserved-ff4444?style=for-the-badge&labelColor=040000)](./LICENSE)

</div>

---

## ⚡ Features

| Feature | Description |
|---------|-------------|
| 🍺 **Pub Theme** | Warm palette (burgundy, gold, cream, dark) evoking a traditional Spanish tavern |
| 🍻 **Menu Section** | Digital menu with tabs (Cervezas, Mojitos, Margaritas, Tapas, Comida) loaded from JSON |
| 🖼️ **Gallery** | Masonry image grid with client-side filtering, pagination and lightbox |
| 📍 **Contact & Location** | Fused section with Google Maps embed, phone, address, hours, parking info and social links |
| 🫧 **Hero Animation** | Animated beer bubbles background with Framer Motion |
| 📱 **Responsive** | Mobile-first with collapsible navbar, adaptive layouts |
| ✨ **Animated** | Framer Motion entrance, hover effects, spring transitions |
| 🔝 **Scroll to Top** | Floating button appears on scroll with smooth animation |
| 🔗 **Social Links** | Instagram, Facebook and WhatsApp icons with hover effects |
| 📋 **SEO Ready** | Meta tags, Open Graph, Twitter cards, Schema.org JSON-LD, canonical URL, sitemap, robots.txt |
| 📦 **PWA** | Installable as app via manifest.json |
| 🚀 **CI/CD** | Auto-deploy on push via GitHub Actions |
| 🌐 **Custom Domain** | `cerveceriaburgos.es` |

---

## 🛠️ Tech Stack

<div align="center">

![Astro](https://img.shields.io/badge/Astro_6-FF5D01?style=flat-square&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?style=flat-square&logo=github&logoColor=white)

</div>

| Layer | Tech |
|-------|------|
| **Framework** | Astro 6 (SSG) |
| **Islands** | React 19 (interactive components) |
| **Styling** | TailwindCSS 3 |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Fonts** | Inter · Playfair Display |
| **Deploy** | GitHub Pages (Actions) |
| **Domain** | cerveceriaburgos.es |

---

## 📋 Requirements

| Tool | Version |
|------|---------|
| Node.js | `>= 22.12.0` |
| npm | `>= 9` |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/MathiasPaulenko/cerveceria-burgos-web.git
cd cerveceria-burgos-web

# Install
npm install

# Dev server → http://localhost:4321
npm run dev
```

---

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Preview locally
npm run preview
```

### CI/CD Pipeline

Every push to `main` triggers the GitHub Actions workflow:

```
push → checkout → npm ci → astro build → upload artifact → deploy to Pages
```

---

## 📁 Project Structure

```
cerveceria-burgos-web/
├── .github/workflows/      # CI/CD deploy pipeline
├── public/
│   ├── images/
│   │   └── gallery/        # Gallery photos (local, tapas, comida)
│   ├── favicon.svg         # CB favicon
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # Search engine directives
│   └── sitemap.xml         # Site map
├── src/
│   ├── components/
│   │   ├── animations/     # FadeIn, etc.
│   │   ├── icons/          # SVG icons (Logo, SocialIcons)
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Hero, MenuSection, AboutSection,
│   │   │                   # GallerySection, ContactSection
│   │   └── ui/             # ScrollToTop, Button
│   ├── data/
│   │   └── carta.json      # Menu data (drinks & food)
│   ├── layouts/
│   │   └── Layout.astro    # Main layout with SEO meta
│   ├── lib/
│   │   └── utils.ts        # cn() utility
│   ├── pages/
│   │   └── index.astro     # Single-page composition
│   └── styles/
│       └── global.css      # Tailwind + global styles
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Configuration

| Setting | File | Value |
|---------|------|-------|
| Custom domain | `public/CNAME` | `cerveceriaburgos.es` |
| Site URL | `astro.config.mjs` | `https://cerveceriaburgos.es` |
| OG Image | `src/layouts/Layout.astro` | `/images/gallery/local-exterior-1.jpg` |

---

## 🙏 Credits & Acknowledgments

| Resource | Author / Owner |
|----------|---------------|
| **Astro** | [Astro Team](https://astro.build/) |
| **React** | [Meta / React Team](https://react.dev/) |
| **Tailwind CSS** | [Tailwind Labs, Inc.](https://tailwindcss.com/) |
| **Framer Motion** | [Motion (formerly Framer)](https://motion.dev/) |
| **Lucide Icons** | [Lucide Contributors](https://lucide.dev/) |
| **Inter & Playfair Display** | [Google Fonts](https://fonts.google.com/) |
| **Capsule Render** (header/footer banners) | [kyechan99](https://github.com/kyechan99/capsule-render) |
| **Readme Typing SVG** | [DenverCoder1](https://github.com/DenverCoder1/readme-typing-svg) |
| **GitHub Pages** | [GitHub, Inc.](https://pages.github.com/) |
| **AI Assistance** | Design & code assistance by [Cascade](https://www.codeium.com/cascade) |

### 🧠 Windsurf / Cascade Skills Used

| Skill | Author / Source |
|-------|-----------------|
| **frontend-design** | [Codeium / Cascade](https://www.codeium.com/cascade) |
| **theme-factory** | [Codeium / Cascade](https://www.codeium.com/cascade) |
| **brand-guidelines** | [Anthropic](https://www.anthropic.com/) (official brand colors & typography) |
| **shadcn** | [shadcn/ui](https://ui.shadcn.com/) |
| **astro** | [Codeium / Cascade](https://www.codeium.com/cascade) |
| **vercel-react-best-practices** | [Vercel](https://vercel.com/) |
| **framer-motion-animator** | [Codeium / Cascade](https://www.codeium.com/cascade) |
| **web-artifacts-builder** | [Codeium / Cascade](https://www.codeium.com/cascade) |

---

## 📄 License

All rights reserved — Cervecería Burgos 2026.

Web development by [Mathias Paulenko](mailto:mathias.paulenko@outlook.com).

---

<div align="center">

```
🍺 Cervecería Burgos — Buena cerveza, buena gente, buen momento 🍺
```

<!-- Animated footer banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FACB6E,50:99120f,100:040000&height=100&section=footer" alt="footer" />

</div>
