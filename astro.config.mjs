import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL when the custom domain exists; Netlify exposes URL at build time.
export default defineConfig({
  site: process.env.SITE_URL ?? process.env.URL ?? 'https://jeancrg.netlify.app',
  integrations: [sitemap()],
});
