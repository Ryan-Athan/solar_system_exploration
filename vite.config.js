import { defineConfig } from 'vite';

export default defineConfig({
    publicDir: './src/public', // Update the path to reflect the new location in `src`
    root: '.',                // Root directory remains the project root
    build: {
        outDir: './dist',     // Output build files in the `dist` folder
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
