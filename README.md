# SVM Astro

Sitio profesional de Sebastián Vedoya M. basado en Astro + Tailwind + React (Framer Motion).

## Requisitos
- Node.js 18+
- npm o pnpm

## Instalación
```bash
npm install
npm run dev
```

## Deploy en Vercel
1. Crea el repositorio `svm-astro` en GitHub.
2. Conecta el repo en Vercel y selecciona framework **Astro**.
3. Variables: no se requieren.
4. Build Command: `astro build` · Output: `dist`

## Estructura
- `src/pages/` contiene páginas. Las reflexiones, prensa y proyectos están en subcarpetas.
- `public/images/` contiene imágenes. Reemplaza los placeholders con tus archivos reales.
- `src/components/Hero.tsx` usa Framer Motion.


## SEO y Analítica
- GA4 activo con ID `G-03ZMGB2V69`.
- Sitemap automático vía `@astrojs/sitemap`.
- Metadatos OG/Twitter y JSON-LD Person incluidos en `src/layouts/DefaultLayout.astro`.
