import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://kmch-wiki.vercel.app',
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: false },
    maxDuration: 10,
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
