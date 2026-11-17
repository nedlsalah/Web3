import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nedlsalah.github.io',
  base: '/Web3', // اسم المستودع الجديد على GitHub
  vite: {
    plugins: [tailwindcss()]
  }
});