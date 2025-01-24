import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public', // Serve assets from the root `public` folder
  root: '.', // Root directory remains the project root
  build: {
    outDir: './dist', // Output build files in the `dist` folder
    rollupOptions: {
      input: './index.html', // Entry HTML file in the project root
    },
  },
  server: {
    watch: {
      usePolling: true, // Ensures compatibility with different environments
    },
  },
});