// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Domain is not yet confirmed — this value feeds canonical URLs, the sitemap
// and structured data. Change it once, here, when the domain is decided.
const SITE = 'https://elvisfreg.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/sent/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
