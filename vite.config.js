import { defineConfig } from 'vite';

export default defineConfig({
    publicDir: './public', // Static assets like images
    root: '.',             // Root directory is the project root
    build: {
        outDir: './dist',  // Output build files in the `dist` folder
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
