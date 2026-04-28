# AGENTS.md

Context for AI coding assistants working on this codebase.

## Project

NBDatsuya's personal homepage. Built with Nuxt 4 + Vue 3 + Tailwind CSS v4, deployed to GitHub Pages via `nuxt generate`.

## Stack

- Nuxt 4, Vue 3, TypeScript
- Nuxt UI v4, Tailwind CSS v4 (via `@tailwindcss/vite`)
- pnpm as package manager
- Nitro preset: `github-pages`
- Dev server port: `8099`

## Key Conventions

### Routing

- `/` — Chinese landing page (`pages/index.vue`), `simple` layout
- `/home` — Main page (`pages/home.vue`), `portal` layout
- `/index-{lang}.html` — i18n intro pages, handled by `pages/(i18n-index)/index-[lang].html.vue`

### i18n Intro Pages

- The dynamic route lazily loads `components/index/i18n/intro-{lang}.vue` via `import.meta.glob`.
- Unknown lang codes fall back to `intro-en.vue`.
- To add a language: create `intro-{langCode}.vue` in `components/index/i18n/`, then add an entry to the `availableLanguages` array in `components/index/language-bar.vue`.

### Theme System

- Theme is applied as `data-theme` on `<html>`.
- Available themes are defined in `composables/use-theme.ts` → `fonts` array (currently `default`, `tfr`).
- An inline anti-flash script in `nuxt.config.ts` reads `localStorage` before first paint.
- To add a theme: create `assets/style/{themeId}/main.css`, add a `[data-theme="{themeId}"]` block in `assets/style/themes.css`, and register it in `use-theme.ts`.

### Styles

- Global entry: `assets/style/main.css` (registered in `nuxt.config.ts` → `css`).
- Components reference Tailwind via `@reference "~/assets/style/main.css"`.
- Theme variables use CSS custom properties (e.g. `--text-color`).

### Navigation & Links

- Top/bottom nav: `components/index/navigate-bar.vue`
- External links (GitHub, Bilibili): `components/index/related-link-bar.vue`
