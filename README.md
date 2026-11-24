# Lohit Sekhar Behera – Portfolio

Personal portfolio of Lohit Sekhar Behera, Full Stack & AI Engineer (Bhubaneswar, India).
Live at **https://lohit-behera.github.io/lohit-behera-portfolio/**

Built with [Astro](https://astro.build) and Tailwind CSS. Static, single page, with sitemap, Open Graph tags and JSON-LD.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321/lohit-behera-portfolio/
npm run build     # outputs to dist/
npm run preview
```

## Content

All text (projects, AI work, services, skills, experience) lives in `src/data/site.ts`.
`src/pages/print/` is a print-styled version of the portfolio used to export the PDF (not indexed).

## Deploy

Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`
(Settings → Pages → Source: GitHub Actions). The site is served under the base path
`/lohit-behera-portfolio`, set in `astro.config.mjs`.
