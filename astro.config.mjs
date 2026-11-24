// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: repo "Lohit-Behera/lohit-behera-portfolio"
// is served at https://lohit-behera.github.io/lohit-behera-portfolio/
// Keep SITE_URL in src/data/site.ts and the Sitemap line in public/robots.txt in sync.
export default defineConfig({
  site: 'https://lohit-behera.github.io',
  base: '/lohit-behera-portfolio',
  integrations: [sitemap({ filter: (page) => !page.includes('/print') })],
  vite: { plugins: [tailwindcss()] },
});
