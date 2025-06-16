import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "public/sass/styles.sass"`,
      },
    },
  },
  build: {
    outDir: 'docs',
  },
  base: '/2025PDWeekSchedule/',
});
