import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://kmch-wiki.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
